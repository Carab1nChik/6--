import { Card, CardContent } from "@/components/ui/card"
import { Users, Calendar, Quote } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Наш класс - <span className="text-primary">6 «В»</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Современный, активный и успешный класс школы 32.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          <Card className="bg-background border-border">
            <CardContent className="p-6 flex items-center gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Calendar className="h-8 w-8 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Год обучения</p>
                <p className="text-2xl font-bold text-foreground">Мы учимся вместе с 2020 года</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-background border-border">
            <CardContent className="p-6 flex items-center gap-4">
              <div className="p-3 bg-secondary/20 rounded-lg">
                <Users className="h-8 w-8 text-secondary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Количество учеников</p>
                <p className="text-2xl font-bold text-foreground">В нашем классе 35 человек</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Motto */}
        <Card className="max-w-3xl mx-auto bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/30">
          <CardContent className="p-8 text-center">
            <Quote className="h-10 w-10 text-primary mx-auto mb-4" />
            <p className="text-2xl md:text-3xl font-bold text-foreground italic text-balance">
              «Вместе учимся - вместе побеждаем»
            </p>
            <p className="text-muted-foreground mt-4">Девиз нашего класса</p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
