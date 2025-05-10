"use client"
import { motion } from "framer-motion"
import { Button } from "@/components/atoms/button"
import Link from "next/link"

function ProfileImage() {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-visible">
      {/* Glow effect */}
      <motion.div
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="absolute w-[110%] h-[110%] bg-gradient-to-r from-blue-700 to-blue-900 opacity-50 blur-xl rounded-full"
      />

      {/* Morphing blob with image */}
      <motion.div
        animate={{
          borderRadius: [
            "60% 40% 30% 70% / 60% 30% 70% 40%",
            "30% 60% 70% 40% / 50% 60% 30% 60%",
            "50% 60% 30% 70% / 40% 50% 60% 40%",
            "40% 60% 70% 30% / 60% 40% 70% 50%",
            "70% 30% 50% 60% / 30% 60% 70% 40%",
            "60% 40% 30% 70% / 60% 30% 70% 40%",
          ]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        className="relative z-10 w-[92%] h-[92%] bg-gradient-to-br from-blue-900 to-blue-500 flex items-center justify-center overflow-hidden"
      >
        {/* Inner shadow for depth */}
        <div className="absolute inset-0 shadow-inner"></div>

        <img
          src="/me.png"
          alt="Your Name"
          className="w-full h-full object-cover"
        />
      </motion.div>
    </div>
  )
}

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            Hey, I'm <span className="text-blue-500">Andre</span>.
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium text-muted-foreground">
            Building digital experiences that matter.
          </h2>
          <p className="text-lg text-muted-foreground">Software Engineer – Crafting solutions since 2020</p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Link href="#projects">View Work</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="#contact">Contact Me</Link>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[30rem] lg:h-[30rem] xl:w-[35rem] xl:h-[35rem]">
            <ProfileImage />
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute inset-0 z-0 pointer-events-none"
      >
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-20" />
      </motion.div>
    </section>
  )
}