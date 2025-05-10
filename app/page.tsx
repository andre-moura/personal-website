"use client"

import MainLayout from "@/components/templates/main-layout"
import HeroSection from "@/components/organisms/hero-section"
import TimelineSection from "@/components/organisms/timeline-section"
import ProjectsSection from "@/components/organisms/projects-section"
import SkillsSection from "@/components/organisms/skills-section"
import AboutSection from "@/components/organisms/about-section"
import ContactSection from "@/components/organisms/contact-section"

export default function Home() {
  return (
    <MainLayout>
      <HeroSection />
      <TimelineSection />
      <ProjectsSection />
      <SkillsSection />
      <AboutSection />
      <ContactSection />
    </MainLayout>
  )
}
