import type React from "react"
import { ModeToggle } from "@/components/atoms/mode-toggle"
import Footer from "@/components/organisms/footer"

interface MainLayoutProps {
  children: React.ReactNode
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="fixed top-4 right-4 z-50">
        <ModeToggle />
      </div>
      <main>{children}</main>
      <Footer />
    </div>
  )
}
