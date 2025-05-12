"use client"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/molecules/card"
import { Github, Linkedin, MessageSquare } from "lucide-react"
import Link from "next/link"

export default function ContactSection() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
      },
    },
  }

  // Contact link data for easier management
  const contactLinks = [
    {
      href: "https://linkedin.com/in/andre-moura-tech/",
      icon: <Linkedin className="h-5 w-5" />,
      title: "LinkedIn",
      text: "linkedin.com/in/andre-moura-tech/",
    },
    {
      href: "https://github.com/andre-moura",
      icon: <Github className="h-5 w-5" />,
      title: "GitHub",
      text: "github.com/andre-moura",
    },
    {
      href: "https://t.me/PragmaticThoughts",
      icon: <MessageSquare className="h-5 w-5" />,
      title: "Telegram",
      text: "t.me/PragmaticThoughts",
    },
  ]

  return (
    <section id="contact" className="py-16 md:py-24 lg:py-32 relative overflow-hidden">
      {/* Background subtle pattern */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="absolute inset-0 z-0 pointer-events-none"
      >
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-30" />
      </motion.div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16 lg:mb-20"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Contact Me</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg">
            Interested in working together? Let's connect!
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <Card className="border border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden hover:border-blue-500/20 transition-all duration-300">
              <CardContent className="p-6 md:p-8 lg:p-10">
                <div className="text-center mb-8 md:mb-10">
                  <motion.p 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-lg md:text-xl lg:text-2xl mb-2 md:mb-3"
                  >
                    I'm currently <span className="text-blue-500 font-medium">available for freelance work</span>
                  </motion.p>
                  <motion.p 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-base md:text-lg text-muted-foreground"
                  >
                    Feel free to reach out if you have a project in mind or just want to connect!
                  </motion.p>
                </div>

                <motion.div 
                  className="grid gap-4 md:gap-6"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {contactLinks.map((link, index) => (
                    <motion.div key={index} variants={itemVariants}>
                      <Link
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 md:gap-4 p-4 md:p-5 rounded-lg border border-border hover:border-blue-500/30 hover:bg-card/80 transition-all duration-300 group"
                      >
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-blue-500/10 text-blue-500 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                          {link.icon}
                        </div>
                        <div>
                          <h3 className="font-medium text-base md:text-lg">{link.title}</h3>
                          <p className="text-sm md:text-base text-muted-foreground group-hover:text-foreground transition-colors">
                            {link.text}
                          </p>
                        </div>
                      </Link>
                    </motion.div>
                  ))}

                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}