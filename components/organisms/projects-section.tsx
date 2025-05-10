"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/atoms/button"
import ProjectCard from "@/components/molecules/project-card"

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    tagline: "A modern shopping experience",
    description:
      "Built a full-featured e-commerce platform with real-time inventory, payment processing, and admin dashboard.",
    problem: "The client needed a scalable solution that could handle high traffic and complex product configurations.",
    image: "/placeholder.svg?height=400&width=600",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
    category: "Client Work",
    links: {
      live: "https://example.com",
      github: "https://github.com",
      case: true,
    },
  },
  {
    id: 2,
    title: "Task Management App",
    tagline: "Productivity reimagined",
    description:
      "Designed and developed a collaborative task management application with real-time updates and intuitive UI.",
    problem: "Teams needed a better way to track progress and collaborate on projects without context switching.",
    image: "/placeholder.svg?height=400&width=600",
    stack: ["React", "Firebase", "Styled Components"],
    category: "Open Source",
    links: {
      live: "https://example.com",
      github: "https://github.com",
      case: false,
    },
  },
  {
    id: 3,
    title: "Interactive Data Visualization",
    tagline: "Making sense of complex data",
    description:
      "Created an interactive dashboard for visualizing and analyzing large datasets with customizable views.",
    problem: "The challenge was presenting complex data in an accessible way that enables quick insights.",
    image: "/placeholder.svg?height=400&width=600",
    stack: ["D3.js", "React", "Node.js", "Express"],
    category: "Client Work",
    links: {
      live: "https://example.com",
      github: "https://github.com",
      case: true,
    },
  },
  {
    id: 4,
    title: "UI Component Library",
    tagline: "Reusable, accessible components",
    description: "Developed a comprehensive UI component library with a focus on accessibility and customization.",
    problem: "Needed to standardize UI elements across multiple projects while maintaining flexibility.",
    image: "/placeholder.svg?height=400&width=600",
    stack: ["React", "TypeScript", "Storybook", "Jest"],
    category: "Open Source",
    links: {
      live: "https://example.com",
      github: "https://github.com",
      case: false,
    },
  },
  {
    id: 5,
    title: "Animation Experiments",
    tagline: "Pushing the boundaries of web animations",
    description: "A collection of experiments exploring advanced animation techniques and interactions on the web.",
    problem: "Wanted to showcase what's possible with modern web technologies while maintaining performance.",
    image: "/placeholder.svg?height=400&width=600",
    stack: ["JavaScript", "GSAP", "Three.js", "Canvas API"],
    category: "UI Experiments",
    links: {
      live: "https://example.com",
      github: "https://github.com",
      case: false,
    },
  },
]

const categories = ["All", "Open Source", "Client Work", "UI Experiments"]

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
