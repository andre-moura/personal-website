"use client"
import { useRef } from "react"
import { motion, useScroll, useSpring } from "framer-motion"
import TimelineItem from "@/components/molecules/timeline-item"

const experiences = [
  {
    title: "Computer Science Degree",
    company: "Sao Paulo Tech School - SPTech",
    logo: "/images/sptech.jpg",
    period: "Feb 2020 - Dec 2023",
    location: "Sao Paulo, Sao Paulo, Brazil",
    workType: "On-site",
    description:
      "Bachelor's degree in Computer Science with focus on software engineering, and data science.",
    achievements: [
      "Executed 4 startup simulation projects, contributing to ideation, prototyping, and pitch presentation.",
      "Developed a stock price prediction prototype as part of a student-driven startup incubator.",
      "Conducted research in machine learning and stock price prediction under Professor Eduardo Luís de Almeida Veri."
    ],
    concepts: [
      "Object-Oriented Programming (OOP)",
      "Data Structures",
      "Algorithms",
      "Design Patterns",
      "Software Architecture",
      "Relational Databases",
      "Version Control (Git)",
      "Agile Methodologies",
      "Unit Testing",
      "API Design",
      "Cloud Computing",
      "Startup Ideation & Prototyping",
      "Machine Learning Basics",
      "RESTful Services",
      "CI/CD Principles"
    ]
  },
  {
    title: "Software Engineer Intern",
    company: "Deloitte",
    logo: "/images/deloitte.jpg",
    period: "Feb 2021 - Nov 2022 · 1 yr 10 mos",
    location: "Sao Paulo, Sao Paulo, Brazil",
    workType: "Remote",
    employmentType: "Internship",
    description:
      "Worked on back-end and desktop solutions for automating tax obligations.",
    achievements: [
      "Conducted testing and debugging of new software features, reducing bugs by 40%.",
      "Implemented version control practices with Git, enhancing collaboration and tracking.",
      "Led workshops and training sessions for new interns, improving onboarding by 20%.",
      "Deployed cloud-based infrastructure on AWS, improving scalability and reliability."
    ],
    skills: ["C#", ".NET", "SQL", "Git"]
  },
  {
    title: "Junior Software Engineer",
    company: "Deloitte",
    logo: "/images/deloitte.jpg",
    period: "Nov 2022 - Jul 2023 · 9 mos",
    location: "Sao Paulo, Sao Paulo, Brazil",
    workType: "Hybrid",
    employmentType: "Full-time",
    description:
      "Worked on back-end and desktop solutions for automating tax obligations.",
    achievements: [
      "Developed web pages, increasing user engagement by 30%.",
      "Built desktop application interfaces, improving operational efficiency by 35%.",
      "Developed and deployed REST APIs to enhance component communication.",
      "Optimized T-SQL scripts and procedures, boosting database performance by 40%."
    ],
    skills: ["C#", ".NET", "SQL", "Git"]
  },
  {
    title: "Mid-Level Software Engineer",
    company: "Advice Compliance Solutions",
    logo: "/images/advice.jpg",
    period: "Jul 2023 - May 2024 · 11 mos",
    location: "Sao Paulo, Sao Paulo, Brazil",
    workType: "Hybrid",
    employmentType: "Full-time",
    description:
      "Worked on compliance tools for fraud detection and regulatory reporting.",
    achievements: [
      "Engineered a fraud risk calculation system for a major bank, improving fraud detection.",
      "Collaborated with Netherlands-based back-end teams using English for cross-functional coordination.",
      "Implemented secure, encrypted systems to protect financial data and meet regulations.",
      "Integrated systems with legacy infrastructure to improve data flow and operational efficiency."
    ],
    skills: ["C#", ".NET", "SQL", "Git"]
  },
  {
    title: "Mid-Level Software Engineer",
    company: "Advice Compliance Solutions",
    logo: "/images/advice.jpg",
    period: "Jun 2024 - Present · 1 yr",
    location: "Sao Paulo, Sao Paulo, Brazil",
    workType: "Hybrid",
    employmentType: "Contract",
    description:
      "Worked on compliance tools for fraud detection and regulatory reporting.",
    achievements: [
      "Developed the front-end and back-end for key features of the ETP (Expected Transaction Profile) app, including instance creation, questionnaire modules, and response handling. Collaborated with a client team based in the Netherlands throughout the project.",
      "Built dashboards and admin modules for NoTrick, a fraud-reporting platform used by banks to meet Central Bank regulations.",
    ],
    skills: ["C#", ".NET", "SQL", "Git"]
  }
]

export default function TimelineSection() {
  const containerRef = useRef(null)

  // Simple scroll progress for the entire timeline section
  // Important: Using "end center" to ensure the line reaches the end before scrolling past the section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end center"]
  })

  // Small amount of spring for natural feel
  const smoothProgress = useSpring(scrollYProgress, {
    damping: 20,
    stiffness: 100
  })

  return (
    <section id="timeline" className="py-20" ref={containerRef}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.3 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">My Journey</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          A timeline of my professional experience and education
        </p>
      </motion.div>

      <div className="relative max-w-5xl mx-auto px-4">
        {/* Desktop timeline center line */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-blue-500/20">
          {/* This div is animated with React's style prop */}
          <motion.div
            className="absolute inset-0 bg-blue-500 origin-top"
            style={{ scaleY: smoothProgress }}
          />
        </div>

        <div className="space-y-16 md:space-y-32 relative">
          {experiences.map((experience, index) => (
            <TimelineItem
              key={index}
              experience={experience}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}