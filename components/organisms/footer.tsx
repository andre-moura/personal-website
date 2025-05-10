"use client"
import { motion } from "framer-motion"
import { Coffee } from "lucide-react"

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

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="w-full">
            <p className="text-sm text-muted-foreground py-3">
              &copy; 2022 Andre. All rights reserved.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
