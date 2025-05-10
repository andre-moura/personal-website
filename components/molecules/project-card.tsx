"use client"
import { Badge } from "@/components/atoms/badge"
import { Button } from "@/components/atoms/button"
import { Card, CardContent, CardFooter } from "@/components/molecules/card"
import { ExternalLink, Github, Play } from "lucide-react"

interface ProjectCardProps {
  project: {
    id: number
    title: string
    tagline: string
    description: string
    problem: string
    image: string
    stack: string[]
    category: string
    links: {
      live?: string
      github?: string
      case?: boolean
    }
  }
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden border border-border/50 bg-card/50 backdrop-blur-sm h-full flex flex-col">
      <div className="relative overflow-hidden aspect-video">
        <img
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      <CardContent className="p-6 flex-grow">
        <div className="mb-4">
          <h3 className="text-xl font-bold">{project.title}</h3>
          <p className="text-muted-foreground">{project.tagline}</p>
        </div>

        <div className="space-y-4">
          <p>{project.description}</p>

          <div>
            <h4 className="text-sm font-semibold mb-1">The Challenge:</h4>
            <p className="text-sm text-muted-foreground">{project.problem}</p>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-2">Tech Stack:</h4>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech, i) => (
                <Badge
                  key={i}
                  variant="outline"
                  className="bg-blue-500/10 text-blue-500 hover:bg-blue-500/20 border-blue-500/20"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-6 pt-0 gap-2 flex-wrap">
        {project.links.live && (
          <Button variant="outline" size="sm" className="gap-1">
            <ExternalLink className="h-4 w-4" />
            Live Demo
          </Button>
        )}

        {project.links.github && (
          <Button variant="outline" size="sm" className="gap-1">
            <Github className="h-4 w-4" />
            Code
          </Button>
        )}

        {project.links.case && (
          <Button variant="outline" size="sm" className="gap-1">
            <Play className="h-4 w-4" />
            Case Study
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}
