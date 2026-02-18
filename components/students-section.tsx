import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Trophy, Palette } from "lucide-react"
import Image from "next/image"

const students = [
  {
    name: "Авагимян Амелия",
    photo: "/avagiman.JPG",
    achievements: [
      { type: "sport", label: "Волейбол" },
      { type: "study", label: "Отличница" },
    ],
  },
  {
    name: "Азизов Дамир",
    photo: "/azizka.JPG",
    achievements: [
      { type: "sport", label: "Волейбол" },
      { type: "study", label: "Хорошист" },
    ],
  },
  {
    name: "Акобян Арина",
    photo: "/akoban.JPG",
    achievements: [
      { type: "sport", label: "Плавание" },
      { type: "study", label: "Хорошистка" },
    ],
  },
  {
    name: "Алексеев Дима",
    photo: "/alekseev.JPG",
    achievements: [
      { type: "sport", label: "Игры" },
      { type: "study", label: "Отличник" },
    ],
  },
  {
    name: "Андрюхина Мирослава",
    photo: "/andruhina.JPG",
    achievements: [
      { type: "sport", label: "Танцы" },
      { type: "study", label: "Отличница" },
    ],
  },
  {
    name: "Анисимов Даня",
    photo: "/anisimov.JPG",
    achievements: [
      { type: "study", label: "Рукопашный бой" },
      { type: "sport", label: "Игры" },
    ],
  },
  {
    name: "Батурина Маша",
    photo: "/baturina.JPG",
    achievements: [
      { type: "sport", label: "Волейбол" },
      { type: "study", label: "Отличница" },
    ],
  },
  {
    name: "Войтенков Коля",
    photo: "/voitenkov.JPG",
    achievements: [
      { type: "sport", label: "Игры" },
      { type: "study", label: "Хорошист" },
    ],
  },
  {
    name: "Воронкова Аня",
    photo: "/placeholder-user.jpg", // Нет фото
    achievements: [
      { type: "creative", label: "Худ. школа" },
      { type: "study", label: "Отличница" },
    ],
  },
  {
    name: "Генералова Василисса",
    photo: "/generalova.JPG",
    achievements: [
      { type: "study", label: "Хорошистка" },
      { type: "sport", label: "Самбо" },
    ],
  },
  {
    name: "Денчик Настя",
    photo: "/denchik.JPG",
    achievements: [
      { type: "sport", label: "Плавание" },
      { type: "study", label: "Хорошистка" },
    ],
  },
  {
    name: "Драганова Настя",
    photo: "/draganova.JPG",
    achievements: [
      { type: "study", label: "Хорошистка" },
      { type: "sport", label: "Волейбол" },
    ],
  },
  {
    name: "Егорычев Матвей",
    photo: "/egorichev.JPG",
    achievements: [
      { type: "study", label: "Хорошист" },
      { type: "sport", label: "Игры" },
    ],
  },
  {
    name: "Заикина Вика",
    photo: "/zaikina.JPG",
    achievements: [
      { type: "sport", label: "Волейбол" },
      { type: "study", label: "Хорошистка" },
    ],
  },
  {
    name: "Зозулина Вика",
    photo: "/zazylina.JPG",
    achievements: [
      { type: "sport", label: "Танцы" },
      { type: "study", label: "Хорошистка" },
    ],
  },
  {
    name: "Коломойцева Юля",
    photo: "/kolomo.JPG",
    achievements: [
      { type: "study", label: "Хорошистка" },
      { type: "sport", label: "Плавание" },
    ],
  },
  {
    name: "Корнев Саша",
    photo: "/kornev.JPG",
    achievements: [
      { type: "sport", label: "Игры" },
      { type: "study", label: "Хорошист" },
    ],
  },
  {
    name: "Королев Миша",
    photo: "/korolev.JPG",
    achievements: [
      { type: "sport", label: "Игры" },
      { type: "study", label: "Хорошист" },
    ],
  },
  {
    name: "Королева Олеся",
    photo: "/koroleva.JPG",
    achievements: [
      { type: "sport", label: "Танцы" },
      { type: "study", label: "Хорошистка" },
    ],
  },
  {
    name: "Минасуев Женя",
    photo: "/minasuev.JPG",
    achievements: [
      { type: "sport", label: "Плавание" },
      { type: "study", label: "Хорошист" },
    ],
  },
  {
    name: "Мурадян Давид",
    photo: "/muradan.JPG",
    achievements: [
      { type: "sport", label: "Тхэквандо" },
      { type: "study", label: "Хорошист" },
    ],
  },
  {
    name: "Нарышкин Миша",
    photo: "/narysh.JPG",
    achievements: [
      { type: "study", label: "Хорошист" },
      { type: "sport", label: "Игры" },
    ],
  },
  {
    name: "Немет Даниель",
    photo: "/pidoras.JPG", // Судя по списку, это фото Немета
    achievements: [
      { type: "sport", label: "Игры" },
      { type: "study", label: "Хорошист" },
    ],
  },
  {
    name: "Павлова Аня",
    photo: "/pavlova.JPG",
    achievements: [
      { type: "sport", label: "Тхэквандо" },
      { type: "study", label: "Отличница" },
    ],
  },
  {
    name: "Парман Артем",
    photo: "/placeholder-user.jpg", // Нет фото
    achievements: [
      { type: "sport", label: "Рукопашный бой" },
      { type: "study", label: "Хорошист" },
    ],
  },
  {
    name: "Пронин Дима",
    photo: "/pronin.JPG",
    achievements: [
      { type: "study", label: "Хорошист" },
      { type: "sport", label: "Скейтбординг" },
    ],
  },
  {
    name: "Семенов Женя",
    photo: "/semenov.JPG",
    achievements: [
      { type: "creative", label: "Готовка" },
      { type: "study", label: "Хорошист" },
    ],
  },
  {
    name: "Смолина Алена",
    photo: "/placeholder-user.jpg", // Нет фото
    achievements: [
      { type: "sport", label: "Танцы" },
      { type: "study", label: "Хорошистка" },
    ],
  },
  {
    name: "Тепаева Ксюша",
    photo: "/tepaeva.JPG",
    achievements: [
      { type: "creative", label: "Худ. школа" },
      { type: "study", label: "Хорошистка" },
    ],
  },
  {
    name: "Титова Настя",
    photo: "/titova.JPG",
    achievements: [
      { type: "study", label: "Хорошистка" },
      { type: "sport", label: "Баскетбол" },
    ],
  },
  {
    name: "Тукаева Диана",
    photo: "/tukaevo.JPG",
    achievements: [
      { type: "sport", label: "Волейбол" },
      { type: "study", label: "Хорошистка" },
    ],
  },
  {
    name: "Филимохина Татьяна",
    photo: "/filomohina.JPG",
    achievements: [
      { type: "sport", label: "Волейбол" },
      { type: "study", label: "Хорошистка" },
    ],
  },
  {
    name: "Шитов Миша",
    photo: "/placeholder-user.jpg", // Нет фото
    achievements: [
      { type: "sport", label: "Футбол" },
      { type: "study", label: "Хорошист" },
    ],
  },
  {
    name: "Яковлева Алина",
    photo: "/yakovleva.JPG",
    achievements: [
      { type: "creative", label: "Худ. школа" },
      { type: "study", label: "Отличница" },
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
  sport: "bg-red-500/20 text-red-400",
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
                src="/Photo.JPG?height=400&width=1200"
                alt="Общее фото класса 6 В"
                className="w-full h-64 md:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                <h3 className="text-2xl font-bold text-foreground">Наша команда</h3>
                <p className="text-foreground">35 учеников • С 2020 года вместе</p>
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
                  <div className="w-10 h-10 rounded-full overflow-hidden bg-primary/20 flex-shrink-0">
                    <img
                      src={student.photo}
                      alt={student.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-semibold text-foreground truncate">{student.name}</h3>
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
            <Trophy className="h-4 w-4 text-red-400" />
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
