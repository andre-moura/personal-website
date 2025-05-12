"use client"
import { motion } from "framer-motion"
import { Coffee, Linkedin, Github, MessageSquare } from "lucide-react"
import Link from "next/link"

// Social media link data
const socialLinks = [
  {
    href: "https://linkedin.com/in/andre-moura-tech/",
    icon: <Linkedin size={18} />,
    label: "LinkedIn"
  },
  {
    href: "https://github.com/andre-moura",
    icon: <Github size={18} />,
    label: "GitHub"
  },
  {
    href: "https://t.me/PragmaticThoughts",
    icon: <MessageSquare size={18} />,
    label: "Telegram"
  }
]

export default function Footer() {
  return (
    <footer className="pt-8 border-t border-border/40">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex items-center justify-center gap-2 text-sm text-muted-foreground bg-muted/30 w-full py-3"
          >
            <span>Built with</span>
            <Coffee className="h-4 w-4 text-blue-500" />
            <span>and</span>
            <span className="text-blue-500">Next.js</span>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 0.2 }} 
            className="w-full flex flex-col sm:flex-row items-center gap-4 sm:gap-0 sm:justify-between py-3"
          >
            <div className="flex gap-3">
              {socialLinks.map((link, index) => (
                <Link 
                  key={index}
                  href={link.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-9 h-9 rounded-full bg-muted/30 text-muted-foreground hover:text-primary hover:bg-muted/50 transition-all duration-300 hover:scale-110"
                  aria-label={link.label}
                >
                  {link.icon}
                </Link>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Andre. All rights reserved.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
