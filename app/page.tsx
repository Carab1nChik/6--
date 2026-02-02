import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { TeachersSection } from "@/components/teachers-section"
import { StudentsSection } from "@/components/students-section"
import { AchievementsSection } from "@/components/achievements-section"
import { GallerySection } from "@/components/gallery-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <AboutSection />
      <TeachersSection />
      <StudentsSection />
      <AchievementsSection />
      <GallerySection />
      <Footer />
    </main>
  )
}
