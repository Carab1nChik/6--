import { Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-8 bg-background border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="text-lg font-bold text-primary">6 «В»</p>
            <p className="text-sm text-muted-foreground">Класс достижений</p>
          </div>

          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <span>Сделано с</span>
            <Heart className="h-4 w-4 text-red-500 fill-red-500" />
            <span>учениками 6 «В»</span>
          </div>

          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground">2025 - 2026 учебный год</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
