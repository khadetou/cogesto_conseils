import { useEffect, useRef } from "react"
import { Footer } from "@/components/layout/Footer"
import { Navbar } from "@/components/layout/Navbar"
import { parallaxImages, revealOnScroll } from "@/lib/animations"

type PageLayoutProps = {
  children: React.ReactNode
}

export function PageLayout({ children }: PageLayoutProps) {
  const pageRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!pageRef.current) {
      return undefined
    }

    const cleanupReveal = revealOnScroll(pageRef.current)
    const cleanupParallax = parallaxImages(pageRef.current)

    return () => {
      cleanupReveal?.()
      cleanupParallax?.()
    }
  }, [])

  return (
    <div ref={pageRef} className="min-h-screen bg-white">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
