"use client" 
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/atoms/button"
import ProjectCard from "@/components/molecules/project-card"

const projects = [
  {
    id: 1,
    title: "Ghibli Dreamscape",
    tagline: "Immersive Studio Ghibli Experience",
    description:
      "An interactive web application that showcases Studio Ghibli films and characters in a visually appealing interface.",
    problem: "Creating an engaging and intuitive platform for fans to explore the magical world of Studio Ghibli films.",
    video: "/videos/Ghibli.mp4",
    stack: ["CSS", "Tailwind", "HTML", "JavaScript", "Typescript", "React", "Node", "API Integration"],
    category: "Web Applications",
    links: {
      live: "https://ghiblidreamscape.netlify.app/",
      github: "https://github.com/andre-moura/ghibli",
      case: false,
    },
  },
  {
    id: 2,
    title: "Memory Match - Rick and Morty",
    tagline: "Interactive Card Matching Game",
    description:
      "A fun and challenging memory card game featuring characters from the popular Rick and Morty series.",
    problem: "Developing an entertaining game with smooth animations and tracking user performance.",
    video: "/videos/Memory Match.mp4",
    stack: ["CSS", "Tailwind", "HTML", "JavaScript", "Typescript", "React", "Node"],
    category: "Games",
    links: {
      live: "https://memorymatch-rickandmorty.netlify.app/",
      github: "https://github.com/andre-moura/memory-match",
      case: false,
    },
  },
  {
    id: 3,
    title: "Pomodoro Helper",
    tagline: "Productivity Timer Application",
    description:
      "A customizable Pomodoro timer application to help users manage their work sessions and breaks effectively.",
    problem: "Users needed a simple yet effective tool to implement the Pomodoro technique for improved productivity.",
    video: "/videos/Pomo Helper.mp4",
    stack: ["CSS", "Tailwind", "HTML", "JavaScript", "Typescript", "React", "Node"],
    category: "Web Applications",
    links: {
      live: "https://pomohelper.netlify.app/",
      github: "https://github.com/andre-moura/pomodoro",
      case: false,
    },
  },
  {
    id: 4,
    title: "JWT Authentication System",
    tagline: "Secure Authentication Implementation",
    description: "A secure JSON Web Token (JWT) authentication system built with Python.",
    problem: "Implementing secure user authentication while maintaining simplicity and performance.",
    video: null,
    image: "/images/jwt.jpg",
    stack: ["Python", "JWT", "Security", "API"],
    category: "Backend",
    links: {
      live: null,
      github: "https://github.com/andre-moura/jwt",
      case: false,
    },
  }
]

const categories = ["All", "Web Applications", "Games", "Backend"]

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <section id="projects" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects Showcase</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          A selection of my work that demonstrates my skills and approach to problem-solving
        </p>
      </motion.div>

      <div className="flex justify-center mb-12">
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className={activeCategory === category ? "bg-blue-600 hover:bg-blue-700" : ""}
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <AnimatePresence mode="wait">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              layout
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  )
}