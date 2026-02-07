"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, Trophy, Palette, School, Medal } from "lucide-react"

const categories = [
  { id: "all", label: "Все", icon: Medal },
  { id: "study", label: "Учебные", icon: BookOpen },
  { id: "sport", label: "Спортивные", icon: Trophy },
  { id: "creative", label: "Творческие", icon: Palette },
  { id: "school", label: "Школьные", icon: School },
]

const achievements = [
  {
    id: 1,
    category: "study",
    title: "Марафон Учи.ру",
    description: "Победа в марафоне Покорение Рима в ноябре 2020 года",
    date: "Ноябрь 2020",
    icon: BookOpen,
  },
  {
    id: 2,
    category: "sport",
    title: "Конкурс талантов",
    description: "Участие в конкурсе талантов 2023 года",
    date: "Апрель 2023",
    icon: Trophy,
  },
  {
    id: 3,
    category: "creative",
    title: "Конкурс газет Это забавная Математика ",
    description: "Победа в конкурсе газет 2021 года.",
    date: "Декабрь 2021",
    icon: Palette,
  },
  {
    id: 4,
    category: "school",
    title: "Битва хоров 2022",
    description: "Победа в школьной битве хоров 2022 года",
    date: "Май 2022",
    icon: School,
  },
  {
    id: 5,
    category: "study",
    title: "Научно-практическая конференция",
    description: "Победа в научно-практической конференции Шаг в науку 2023 года",
    date: "Март 2023",
    icon: BookOpen,
  },
  {
    id: 6,
    category: "sport",
    title: "Конкурс зимние забавы",
    description: "Победа в школьном конкурсе зимние забавы в 2022 году",
    date: "Январь 2022",
    icon: Trophy,
  },
  {
    id: 7,
    category: "creative",
    title: "Кокнурс плакатов Мы против вредных привычек",
    description: "Победа в конкурсе плакатов Мы против вредных привычек в 2020 году",
    date: "Октябрь 2020",
    icon: Palette,
  },
  {
    id: 8,
    category: "school",
    title: "Битва хоров 2023",
    description: "Победа в очередной битве хоров 2023 года.",
    date: "Май 2023",
    icon: School,
  },
]

const categoryColors = {
  study: "border-primary/50 bg-primary/5",
  sport: "border-green-500/50 bg-green-500/5",
  creative: "border-purple-500/50 bg-purple-500/5",
  school: "border-secondary/50 bg-secondary/5",
}

const iconColors = {
  study: "text-primary",
  sport: "text-green-400",
  creative: "text-purple-400",
  school: "text-secondary",
}

export function AchievementsSection() {
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredAchievements = activeCategory === "all"
    ? achievements
    : achievements.filter((a) => a.category === activeCategory)

  return (
    <section id="achievements" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Наши <span className="text-primary">достижения</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Мы гордимся успехами нашего класса в учёбе, спорте и творчестве
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => {
            const Icon = category.icon
            return (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                className={activeCategory === category.id 
                  ? "bg-primary text-primary-foreground" 
                  : "border-border text-foreground hover:bg-card"}
                onClick={() => setActiveCategory(category.id)}
              >
                <Icon className="h-4 w-4 mr-2" />
                {category.label}
              </Button>
            )
          })}
        </div>

        {/* Achievements Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredAchievements.map((achievement) => {
            const Icon = achievement.icon
            return (
              <Card
                key={achievement.id}
                className={`border-2 transition-all hover:scale-[1.02] ${categoryColors[achievement.category as keyof typeof categoryColors]}`}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-card rounded-lg">
                      <Icon className={`h-6 w-6 ${iconColors[achievement.category as keyof typeof iconColors]}`} />
                    </div>
                    <span className="text-xs text-muted-foreground">{achievement.date}</span>
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{achievement.title}</h3>
                  <p className="text-sm text-muted-foreground">{achievement.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
