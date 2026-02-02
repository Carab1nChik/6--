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
    title: "Призовые места в олимпиадах",
    description: "Ученики класса заняли призовые места на городских олимпиадах по математике и русскому языку",
    date: "Ноябрь 2024",
    icon: BookOpen,
  },
  {
    id: 2,
    category: "sport",
    title: "Победа в школьных соревнованиях",
    description: "Наш класс занял 1 место в школьных соревнованиях по волейболу",
    date: "Октябрь 2024",
    icon: Trophy,
  },
  {
    id: 3,
    category: "creative",
    title: "Конкурс талантов",
    description: "Участие и победа в школьном конкурсе талантов с музыкальным номером",
    date: "Декабрь 2024",
    icon: Palette,
  },
  {
    id: 4,
    category: "school",
    title: "Лучший класс месяца",
    description: "Класс 6 «В» признан лучшим классом месяца по итогам успеваемости и активности",
    date: "Сентябрь 2024",
    icon: School,
  },
  {
    id: 5,
    category: "study",
    title: "100% успеваемость",
    description: "Все ученики класса успешно завершили первую четверть без неудовлетворительных оценок",
    date: "Ноябрь 2024",
    icon: BookOpen,
  },
  {
    id: 6,
    category: "sport",
    title: "Школьный кросс",
    description: "3 ученика заняли призовые места в осеннем школьном кроссе",
    date: "Сентябрь 2024",
    icon: Trophy,
  },
  {
    id: 7,
    category: "creative",
    title: "Выставка рисунков",
    description: "Работы учеников представлены на школьной выставке «Золотая осень»",
    date: "Октябрь 2024",
    icon: Palette,
  },
  {
    id: 8,
    category: "school",
    title: "Участие в экологическом проекте",
    description: "Класс активно участвовал в школьном экологическом проекте по озеленению территории",
    date: "Май 2024",
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
