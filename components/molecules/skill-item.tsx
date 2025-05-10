"use client"
import { motion } from "framer-motion"
import type React from "react"

interface SkillItemProps {
  skill: {
    name: string
    icon: React.ReactNode
    comment: string
  }
  index: number
}

export default function SkillItem({ skill, index }: SkillItemProps) {
  // Item-level animation variants
  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3
      }
    }
  }

  return (
    <motion.div
      variants={itemVariants}
      className="group h-full"
    >
      <div className="flex items-start gap-4 p-4 md:p-5 rounded-lg border border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 hover:border-blue-500/30 transition-all duration-300 h-full">
        <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-blue-500/10 text-blue-500 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
          {skill.icon}
        </div>

        <div>
          <h4 className="font-medium text-base md:text-lg">{skill.name}</h4>
          <p className="text-sm md:text-base text-muted-foreground group-hover:text-foreground transition-colors mt-1">
            {skill.comment}
          </p>
        </div>
      </div>
    </motion.div>
  )
}