import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Trophy, Palette } from "lucide-react"

const students = [
  {
    name: "Авагимян Амелия",
    achievements: [
      { type: "study", label: "Отличница" },
    ],
  },
  {
    name: "Акобян Арина",
    achievements: [
      { type: "study", label: "Хорошистка" },
    ],
  },
  {
    name: "Алексеев Дима",
    achievements: [
      { type: "sport", label: "Игры" },
      { type: "study", label: "Отличник" },
    ],
  },
  {
    name: "Андрюхина Мирослава",
    achievements: [
      { type: "study", label: "Отличница" },
    ],
  },
  {
    name: "Анисимов Даня",
    achievements: [
      { type: "study", label: "Отличник" },
      { type: "sport", label: "Игры" },
    ],
  },
  {
    name: "Батурина Маша",
    achievements: [
      { type: "creative", label: "Староста" },
      { type: "study", label: "Отличница" },
    ],
  },
  {
    name: "Войтенков Коля",
    achievements: [
      { type: "sport", label: "Игры" },
      { type: "study", label: "Хорошист" },
    ],
  },
  {
    name: "Генералова Весилиса",
    achievements: [
      { type: "study", label: "Хорошистка" },
      { type: "sport", label: "Самбо" },
    ],
  },
  {
    name: "Денчик Настя",
    achievements: [
      { type: "study", label: "Хорошистка" },
    ],
  },
  {
    name: "Драганова Настя",
    achievements: [
      { type: "study", label: "Хорошистка" },
      { type: "sport", label: "Волейбол" },
    ],
  },
  {
    name: "Егорычев Матвей",
    achievements: [
      { type: "study", label: "Хорошист" },
      { type: "sport", label: "Игры" },
    ],
  },
  {
    name: "Заикина Вика",
    achievements: [
      { type: "study", label: "Хорошистка" },
    ],
  },
  {
    name: "Зозулина Вика",
    achievements: [
      { type: "study", label: "Хорошистка" },
    ],
  },
  {
    name: "Коломойцева Юля",
    achievements: [
      { type: "study", label: "Хорошистка" },
      { type: "sport", label: "Плавание" },
    ],
  },
  {
    name: "Корнев Саша",
    achievements: [
      { type: "study", label: "Хорошист" },
    ],
  },
  {
    name: "Королев Миша",
    achievements: [
      { type: "study", label: "Хорошист" },
    ],
  },
  {
    name: "Королева Олеся",
    achievements: [
      { type: "study", label: "Хорошистка" },
    ],
  },
  {
    name: "Минасуев Женя",
    achievements: [
      { type: "study", label: "Хорошист" },
    ],
  },
  {
    name: "Мурадян Давид",
    achievements: [
      { type: "study", label: "Хорошист" },
    ],
  },
  {
    name: "Нарышкин Миша",
    achievements: [
      { type: "study", label: "Хорошист" },
      { type: "sport", label: "Игры" },
    ],
  },
  {
    name: "Немет Даниель",
    achievements: [
      { type: "study", label: "Хорошист" },
    ],
  },
  {
    name: "Павлова Аня",
    achievements: [
      { type: "study", label: "Отличница" },
    ],
  },
  {
    name: "Парман Артем",
    achievements: [
      { type: "study", label: "Отличник" },
    ],
  },
  {
    name: "Пронин Дима",
    achievements: [
      { type: "study", label: "Хорошист" },
      { type: "sport", label: "Игры" },
    ],
  },
  {
    name: "Семенов Женя",
    achievements: [
      { type: "study", label: "Хорошист" },
    ],
  },
  {
    name: "Смолина Алена",
    achievements: [
      { type: "study", label: "Хорошистка" },
    ],
  },
  {
    name: "Тепаева Ксюша",
    achievements: [
      { type: "study", label: "Хорошистка" },
    ],
  },
  {
    name: "Титова Настя",
    achievements: [
      { type: "study", label: "Хорошистка" },
      { type: "sport", label: "Баскетбол" },
    ],
  },
  {
    name: "Тукаева Диана",
    achievements: [
      { type: "study", label: "Хорошистка" },
      { type: "sport", label: "Самбо" },
    ],
  },
  {
    name: "Филимохина Татьяна",
    achievements: [
      { type: "study", label: "Хорошистка" },
    ],
  },
  {
    name: "Яковлева Алина",
    achievements: [
      { type: "study", label: "Отличница" },
    ],
  },
  {
    name: "Шитов Миша",
    achievements: [
      { type: "study", label: "Хорошист" },
    ],
  },
]

const achievementIcons = {
  study: BookOpen,
  sport: Trophy,
  creative: Palette,
}

const achievementColors = {
  study: "bg-primary/20 text-primary",
  sport: "bg-green-500/20 text-green-400",
  creative: "bg-purple-500/20 text-purple-400",
}

export function StudentsSection() {
  return (
    <section id="students" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Наши <span className="text-primary">ученики</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Талантливые и целеустремлённые ребята нашего класса
          </p>
        </div>

        {/* Class Photo */}
        <Card className="max-w-5xl mx-auto mb-16 overflow-hidden bg-background border-border">
          <CardContent className="p-0">
            <div className="relative">
              <img
                src="/placeholder.svg?height=400&width=1200"
                alt="Общее фото класса 6 В"
                className="w-full h-64 md:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                <h3 className="text-2xl font-bold text-foreground">Наша команда</h3>
                <p className="text-muted-foreground">34 ученика • 2025-2026 учебный год</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Students Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {students.map((student) => (
            <Card key={student.name} className="bg-background border-border hover:border-primary/50 transition-colors">
              <CardContent className="p-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-primary font-bold text-sm">
                      {student.name.split(" ")[0][0]}
                    </span>
                  </div>
                  <h3 className="font-semibold text-foreground">{student.name}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {student.achievements.map((achievement) => {
                    const Icon = achievementIcons[achievement.type as keyof typeof achievementIcons]
                    return (
                      <Badge
                        key={achievement.label}
                        variant="secondary"
                        className={`text-xs ${achievementColors[achievement.type as keyof typeof achievementColors]}`}
                      >
                        <Icon className="h-3 w-3 mr-1" />
                        {achievement.label}
                      </Badge>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Legend */}
        <div className="flex justify-center gap-6 mt-8 flex-wrap">
          <div className="flex items-center gap-2">
            <BookOpen className="h-4 w-4 text-primary" />
            <span className="text-sm text-muted-foreground">Учёба</span>
          </div>
          <div className="flex items-center gap-2">
            <Trophy className="h-4 w-4 text-green-400" />
            <span className="text-sm text-muted-foreground">Спорт</span>
          </div>
          <div className="flex items-center gap-2">
            <Palette className="h-4 w-4 text-purple-400" />
            <span className="text-sm text-muted-foreground">Творчество</span>
          </div>
        </div>
      </div>
    </section>
  )
}
