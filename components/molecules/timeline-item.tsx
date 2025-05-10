"use client"
import { motion } from "framer-motion"
import { Badge } from "@/components/atoms/badge"
import { Card, CardContent } from "@/components/molecules/card"
import { MapPin, Monitor } from "lucide-react"

interface TimelineItemProps {
  experience: {
    title: string
    company: string
    logo: string
    period: string
    location?: string
    workType?: string
    employmentType?: string
    description: string
    achievements: string[]
    skills?: string[]
    concepts?: string[]
  }
  index: number
}

export default function TimelineItem({ experience, index }: TimelineItemProps) {
  const isEducation = experience.title.toLowerCase().includes("degree")
  const tagLabel = isEducation ? "Core Concepts" : "Tech Stack"
  const tagItems = isEducation ? experience.concepts : experience.skills
  const isEven = index % 2 === 0

  return (
    <div className="relative">
      {/* Mobile view: stacked cards with line connecting them */}
      <div className="md:hidden relative">
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500/20 ml-3 h-full"></div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="pl-10 relative"
        >
          {/* Timeline dot - mobile version */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true, amount: 0.3 }}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 ml-1 w-6 h-6 rounded-full bg-blue-500 z-10 shadow-md"
          />
          
          <Card className="w-full border border-border/50 bg-card/50 backdrop-blur-sm">
            <CardContent className="p-4">
              <TimelineContent 
                experience={experience}
                tagLabel={tagLabel}
                tagItems={tagItems}
              />
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Desktop view: alternating cards with centered timeline */}
      <div className="hidden md:grid md:grid-cols-[1fr_auto_1fr] md:gap-6">
        {/* Left side (even) or empty (odd) */}
        <div className={`${isEven ? "block" : ""}`}>
          {isEven && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
              className="flex justify-end"
            >
              <Card className="w-full max-w-md border border-border/50 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <TimelineContent 
                    experience={experience}
                    tagLabel={tagLabel}
                    tagItems={tagItems}
                  />
                </CardContent>
              </Card>
            </motion.div>
          )}
        </div>

        {/* Center dot column */}
        <div className="flex justify-center items-center">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true, amount: 0.3 }}
            className="w-6 h-6 rounded-full bg-blue-500 z-10 shadow-md"
          />
        </div>

        {/* Right side (odd) or empty (even) */}
        <div className={`${!isEven ? "block" : ""}`}>
          {!isEven && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <Card className="w-full max-w-md border border-border/50 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <TimelineContent 
                    experience={experience}
                    tagLabel={tagLabel}
                    tagItems={tagItems}
                  />
                </CardContent>
              </Card>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  )
}

// Extracted the card content into a separate component with proper TypeScript types
interface TimelineContentProps {
  experience: {
    title: string
    company: string
    logo: string
    period: string
    location?: string
    workType?: string
    employmentType?: string
    description: string
    achievements: string[]
    skills?: string[]
    concepts?: string[]
  }
  tagLabel: string
  tagItems?: string[]
}

function TimelineContent({ experience, tagLabel, tagItems }: TimelineContentProps) {
  return (
    <>
      <div className="flex items-center gap-4 mb-4">
        <div className="w-10 h-10 md:w-12 md:h-12 overflow-hidden bg-muted flex items-center justify-center rounded-md">
          <img
            src={experience.logo || "/placeholder.svg"}
            alt={experience.company}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h3 className="font-bold text-lg md:text-xl">{experience.title}</h3>
          {experience.employmentType && (
            <p className="text-xs mt-0.5">{experience.employmentType}</p>
          )}
          <p className="text-muted-foreground">{experience.company}</p>
        </div>
      </div>

      <div className="flex flex-col space-y-2 mb-4">
        <p className="text-sm text-muted-foreground">{experience.period}</p>

        {(experience.location || experience.workType) && (
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted-foreground">
            {experience.location && (
              <div className="flex items-center gap-1">
                <MapPin size={14} />
                <span>{experience.location}</span>
              </div>
            )}
            {experience.workType && (
              <div className="flex items-center gap-1">
                <Monitor size={14} />
                <span>{experience.workType}</span>
              </div>
            )}
          </div>
        )}
      </div>

      <p className="mb-4 text-sm md:text-base">{experience.description}</p>

      <div className="space-y-4">
        <div>
          <h4 className="text-sm font-semibold mb-2">Achievements</h4>
          <ul className="list-disc list-outside text-sm text-muted-foreground space-y-1 pl-5">
            {experience.achievements.map((achievement: string, i: number) => (
              <li key={i}>{achievement}</li>
            ))}
          </ul>
        </div>

        {tagItems && tagItems.length > 0 && (
          <div>
            <h4 className="text-sm font-semibold mb-2">{tagLabel}</h4>
            <div className="flex flex-wrap gap-2">
              {tagItems.map((item: string, i: number) => (
                <Badge
                  key={i}
                  variant="secondary"
                  className="bg-blue-500/10 text-blue-500 hover:bg-blue-500/20"
                >
                  {item}
                </Badge>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  )
}