"use client"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/molecules/card"
import { Code, Lightbulb, Users } from "lucide-react"

export default function AboutSection() {
  // Card animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  const cardInfo = [
    {
      icon: <Code className="h-6 w-6" />,
      title: "Clean Code",
      description: "I believe in writing maintainable, readable, and efficient code."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Team Player",
      description: "I thrive in collaborative environments and enjoy knowledge sharing."
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Problem Solver",
      description: "I enjoy tackling complex challenges and finding elegant solutions."
    }
  ]

  return (
    <section id="about" className="py-16 md:py-24 lg:py-32 relative overflow-hidden">
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">About Me</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg">
            The human behind the code
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mb-12 md:mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {cardInfo.map((card, index) => (
              <motion.div key={index} variants={cardVariants}>
                <Card className="border border-border/50 bg-card/50 backdrop-blur-sm hover:border-blue-500/30 transition-all duration-300 h-full">
                  <CardContent className="p-6 md:p-8 flex flex-col items-center text-center h-full">
                    <motion.div 
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-blue-500/10 text-blue-500 flex items-center justify-center mb-4 md:mb-6"
                    >
                      {card.icon}
                    </motion.div>
                    <h3 className="font-bold text-lg md:text-xl mb-2 md:mb-3">{card.title}</h3>
                    <p className="text-sm md:text-base text-muted-foreground">
                      {card.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
            className="prose prose-invert max-w-none"
          >
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 hover:border-blue-500/20 rounded-lg p-6 md:p-8 lg:p-10 transition-all duration-300">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ staggerChildren: 0.2, delayChildren: 0.3 }}
                viewport={{ once: true }}
              >
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="text-base md:text-lg lg:text-xl leading-relaxed mb-4 md:mb-6"
                >
                  I've been building for the web for over {new Date().getFullYear() - 2020} years. My journey started with simple HTML and CSS websites, and
                  has evolved to creating complex, interactive applications that solve real problems.
                </motion.p>

                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="text-base md:text-lg lg:text-xl leading-relaxed mb-4 md:mb-6"
                >
                  I've worked on enterprise-scale systems, always focused on performance, accessibility, and developer
                  experience. I believe that great software is not just about the code, but about the people who use it and
                  the problems it solves.
                </motion.p>

                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-base md:text-lg lg:text-xl leading-relaxed mb-4 md:mb-6"
                >
                  My approach combines technical expertise with a deep understanding of user needs. I'm passionate about
                  creating intuitive interfaces that make complex tasks feel simple and natural.
                </motion.p>

                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="text-base md:text-lg lg:text-xl leading-relaxed"
                >
                  Outside of code, you'll find me solving puzzles, chatting with friends on Discord, reading novels, 
                  and diving into new challenges. I'm always looking for ways to grow as a developer and as a person.
                </motion.p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}