import { Button } from "@/components/ui/button"
import { Trophy, Users, GraduationCap, ImageIcon } from "lucide-react"

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/photo.jpg?height=1080&width=1920')",
          }}
        />
        <div className="absolute inset-0 bg-background/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-4 text-balance">
          6 «В» - <span className="text-primary">класс достижений</span>
        </h1>
        <p className="text-xl md:text-2xl text-foreground/80 mb-8">
          Учёба • Дружба • Успех
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            <a href="#achievements">
              <Trophy className="mr-2 h-5 w-5" />
              Достижения
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 bg-transparent">
            <a href="#students">
              <Users className="mr-2 h-5 w-5" />
              Ученики
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-secondary text-secondary-foreground hover:bg-secondary/10 bg-transparent">
            <a href="#teachers">
              <GraduationCap className="mr-2 h-5 w-5" />
              Учителя
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-foreground/30 text-foreground hover:bg-foreground/10 bg-transparent">
            <a href="#gallery">
              <ImageIcon className="mr-2 h-5 w-5" />
              Галерея
            </a>
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  )
}
