import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star } from "lucide-react"

const classTeacher = {
  name: "Беляева Карина Александровна",
  subject: "Математика",
  description: "Классный руководитель, который поддерживает нас в любой ситуации и помогает достичь высот в обучении.",
  image: "/KA.jpg?height=300&width=300",
}

const teachers = [
  {
    name: "Шахян Арфине Вааговна",
    subject: "История",
    achievements: ["Историк"],
    image: "/placeholder-user2.jpg?height=200&width=200",
  }, 
  {
    name: "Ганина Полина Дмитриевна",
    subject: "Русский язык и литература",
    achievements: ["Бакалавр"],
    image: "/placeholder-user2.jpg?height=200&width=200",
  },
  {
    name: "Арсентьев Алексей Сергеевич",
    subject: "Физическая Культура",
    achievements: ["Высшая категория"],
    image: "/placeholder-user2.jpg?height=200&width=200",
  },
  {
    name: "Рахматуллаева Альбина Рашидовна",
    subject: "Английский язык",
    achievements: ["Филолог"],
    image: "/placeholder-user2.jpg?height=200&width=200",
  },
  {
    name: "Мирошниченко Анастасия Александровна",
    subject: "Английский язык",
    achievements: ["Учитель английского"],
    image: "/placeholder-user2.jpg?height=200&width=200",
  },
  {
    name: "Южакова Юлия Николаевна",
    subject: "Биология",
    achievements: ["Биолог"],
    image: "/placeholder-user2.jpg?height=200&width=200",
  },
  {
    name: "Красковский Александр Александрович",
    subject: "География",
    achievements: ["Магистр"],
    image: "/placeholder-user2.jpg?height=200&width=200",
  },
  {
    name: "Семенова Ольга Алексеевна",
    subject: "Труд",
    achievements: ["Психолог"],
    image: "/placeholder-user2.jpg?height=200&width=200",
  },
  {
    name: "Песков Александр Александрович",
    subject: "Труд",
    achievements: ["Филолог"],
    image: "/placeholder-user2.jpg?height=200&width=200",
  },
]

export function TeachersSection() {
  return (
    <section id="teachers" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Наши <span className="text-primary">учителя</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Опытные педагоги, которые помогают нам достигать успехов
          </p>
        </div>

        {/* Class Teacher - Featured */}
        <Card className="max-w-4xl mx-auto mb-16 bg-card border-primary/30 overflow-hidden">
          <CardContent className="p-0">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3">
                <img
                  src={classTeacher.image || "/placeholder.svg"}
                  alt={classTeacher.name}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-2/3 p-8 flex flex-col justify-center">
                <Badge className="w-fit mb-4 bg-primary text-primary-foreground">
                  <Star className="h-3 w-3 mr-1" />
                  Классный руководитель
                </Badge>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {classTeacher.name}
                </h3>
                <p className="text-primary font-medium mb-4">{classTeacher.subject}</p>
                <p className="text-muted-foreground">{classTeacher.description}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Other Teachers Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {teachers.map((teacher) => (
            <Card key={teacher.name} className="bg-card border-border hover:border-primary/50 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={teacher.image || "/placeholder.svg"}
                    alt={teacher.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-primary/30"
                  />
                  <div>
                    <h3 className="font-bold text-foreground">{teacher.name}</h3>
                    <p className="text-sm text-primary">{teacher.subject}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {teacher.achievements.map((achievement) => (
                    <Badge
                      key={achievement}
                      variant="secondary"
                      className="text-xs bg-secondary/20 text-secondary-foreground"
                    >
                      {achievement}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
