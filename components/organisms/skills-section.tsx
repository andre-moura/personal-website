"use client"

import { motion } from "framer-motion"
import {
  Cloud,
  CloudDrizzle,
  CloudSun,
  Code,
  Coffee,
  Database,
  FileCode,
  GitBranch,
  Layers,
  Layout,
  Leaf,
  Paintbrush,
  Palette,
  Server,
  ShieldCheck,
  Terminal,
  Zap,
} from "lucide-react"
import SkillItem from "@/components/molecules/skill-item"
import LanguageItem from "@/components/molecules/language-item"

// ====== Type Definitions ======

type Skill = {
  name: string
  icon: JSX.Element
  comment: string
}

type Language = {
  name: string
  country: string
  level: string
}

type SkillCategoryProps = {
  title: string
  skills: Skill[]
}

type LanguageCategoryProps = {
  languages: Language[]
}

// ====== Data ======

const skills = {
  languages: [
    { name: "C#", icon: <Code className="h-5 w-5" />, comment: "The backbone of enterprise systems, ready for action." },
    { name: "Java", icon: <Coffee className="h-5 w-5" />, comment: "Classic backend powerhouse, perfect for enterprise-scale apps." },
    { name: "JavaScript", icon: <Zap className="h-5 w-5" />, comment: "The web's unofficial ruler. You can't escape it." },
    { name: "TypeScript", icon: <ShieldCheck className="h-5 w-5" />, comment: "JavaScript's smarter, safer cousin. Less chaos, more clarity." },
    { name: "HTML", icon: <FileCode className="h-5 w-5" />, comment: "The foundation of the web—without it, everything's just a blank page." },
    { name: "CSS", icon: <Paintbrush className="h-5 w-5" />, comment: "Turning plain HTML into something *pretty*." },
    { name: "Python", icon: <Terminal className="h-5 w-5" />, comment: "Scripting, automating, and doing the heavy lifting behind the scenes." },
    { name: "SQL", icon: <Database className="h-5 w-5" />, comment: "The language that speaks directly to your database." },
  ],
  frameworks: [
    { name: ".NET", icon: <Server className="h-5 w-5" />, comment: "The C# powerhouse for enterprise ecosystems." },
    { name: "Spring Framework", icon: <Leaf className="h-5 w-5" />, comment: "Java's swiss army knife for building robust backend apps." },
    { name: "React", icon: <Layout className="h-5 w-5" />, comment: "UI building made easy with reusable components." },
    { name: "Next.js", icon: <Layers className="h-5 w-5" />, comment: "React on steroids. SSR, routing, and SEO—all out of the box." },
    { name: "Tailwind CSS", icon: <Palette className="h-5 w-5" />, comment: "Utility-first CSS that lets you style fast, without the fuss." },
  ],
  tools: [
    { name: "Git", icon: <GitBranch className="h-5 w-5" />, comment: "Version control like a boss—never code without it." },
    { name: "Azure", icon: <Cloud className="h-5 w-5" />, comment: "Cloud hosting and deployment, minus the headache." },
    { name: "Google Cloud", icon: <CloudDrizzle className="h-5 w-5" />, comment: "Handling cloud infrastructure like a pro." },
    { name: "AWS", icon: <CloudSun className="h-5 w-5" />, comment: "For when you need *everything* in the cloud." },
  ],
  languages_spoken: [
    { name: "Portuguese", country: "BR", level: "Native" },
    { name: "English", country: "US", level: "Fluent" },
    { name: "Spanish", country: "ES", level: "Intermediate" },
  ],
}

// ====== Main Component ======

export default function SkillsSection() {
  // Container fade-in animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  return (
    <section id="skills" className="py-16 md:py-24 lg:py-32 relative overflow-hidden">
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Skills & Tools</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg">
            The technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <motion.div 
          className="max-w-5xl mx-auto space-y-12 md:space-y-16 lg:space-y-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <SkillCategory title="Languages" skills={skills.languages} />
          <SkillCategory title="Frameworks & Libraries" skills={skills.frameworks} />
          <SkillCategory title="Tools & Platforms" skills={skills.tools} />
          <LanguageCategory languages={skills.languages_spoken} />
        </motion.div>
      </div>
    </section>
  )
}

// ====== Subcomponents ======

function SkillCategory({ title, skills }: SkillCategoryProps) {
  // Category-level animation variants
  const categoryVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  }

  return (
    <motion.div
      variants={categoryVariants}
      className="relative"
    >
      <h3 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 pl-2 border-l-4 border-blue-500 py-1">
        {title}
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
        {skills.map((skill, index) => (
          <SkillItem key={index} skill={skill} index={index} />
        ))}
      </div>
    </motion.div>
  )
}

function LanguageCategory({ languages }: LanguageCategoryProps) {
  // Category-level animation variants
  const categoryVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  }

  return (
    <motion.div
      variants={categoryVariants}
      className="relative"
    >
      <h3 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 pl-2 border-l-4 border-blue-500 py-1">
        Languages I Speak
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {languages.map((language, index) => (
          <LanguageItem key={index} language={language} index={index} />
        ))}
      </div>
    </motion.div>
  )
}