"use client"
import { motion } from "framer-motion"
import FlagIcon from "@/components/atoms/flag-icon"

interface LanguageItemProps {
  language: {
    name: string
    country: string
    level: string
  }
  index: number
}

export default function LanguageItem({ language, index }: LanguageItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group"
    >
      <div className="flex items-center gap-3 p-4 rounded-lg border border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-colors">
        <div className="flex-shrink-0">
          <FlagIcon country={language.country} size={32} />
        </div>

        <div>
          <h4 className="font-medium">{language.name}</h4>
          <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
            {language.level}
          </p>
        </div>
      </div>
    </motion.div>
  )
}