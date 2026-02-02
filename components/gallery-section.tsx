"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { X, ChevronLeft, ChevronRight, Building, Users, PartyPopper, CalendarDays } from "lucide-react"

const galleryCategories = [
  { id: "all", label: "Все", icon: CalendarDays },
  { id: "school", label: "Школа", icon: Building },
  { id: "class", label: "Класс", icon: Users },
  { id: "events", label: "Мероприятия", icon: PartyPopper },
]

const galleryImages = [
  { id: 1, category: "school", src: "/placeholder.svg?height=400&width=600", title: "Здание школы" },
  { id: 2, category: "school", src: "/placeholder.svg?height=400&width=600", title: "Школа зимой" },
  { id: 3, category: "class", src: "/placeholder.svg?height=400&width=600", title: "Общее фото класса" },
  { id: 4, category: "class", src: "/placeholder.svg?height=400&width=600", title: "На уроке" },
  { id: 5, category: "events", src: "/placeholder.svg?height=400&width=600", title: "День знаний" },
  { id: 6, category: "events", src: "/placeholder.svg?height=400&width=600", title: "Новогодний праздник" },
  { id: 7, category: "school", src: "/placeholder.svg?height=400&width=600", title: "Спортзал" },
  { id: 8, category: "class", src: "/placeholder.svg?height=400&width=600", title: "Классный час" },
  { id: 9, category: "events", src: "/placeholder.svg?height=400&width=600", title: "Конкурс талантов" },
  { id: 10, category: "events", src: "/placeholder.svg?height=400&width=600", title: "Спортивные соревнования" },
  { id: 11, category: "school", src: "/placeholder.svg?height=400&width=600", title: "Библиотека" },
  { id: 12, category: "class", src: "/placeholder.svg?height=400&width=600", title: "Проектная работа" },
]

export function GallerySection() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const filteredImages = activeCategory === "all"
    ? galleryImages
    : galleryImages.filter((img) => img.category === activeCategory)

  const currentIndex = selectedImage !== null 
    ? filteredImages.findIndex((img) => img.id === selectedImage)
    : -1

  const goToPrevious = () => {
    if (currentIndex > 0) {
      setSelectedImage(filteredImages[currentIndex - 1].id)
    }
  }

  const goToNext = () => {
    if (currentIndex < filteredImages.length - 1) {
      setSelectedImage(filteredImages[currentIndex + 1].id)
    }
  }

  const selectedImageData = galleryImages.find((img) => img.id === selectedImage)

  return (
    <section id="gallery" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            <span className="text-primary">Галерея</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Фотографии нашей школы, класса и мероприятий
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {galleryCategories.map((category) => {
            const Icon = category.icon
            return (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                className={activeCategory === category.id 
                  ? "bg-primary text-primary-foreground" 
                  : "border-border text-foreground hover:bg-background"}
                onClick={() => setActiveCategory(category.id)}
              >
                <Icon className="h-4 w-4 mr-2" />
                {category.label}
              </Button>
            )
          })}
        </div>

        {/* Gallery Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredImages.map((image) => (
            <Card
              key={image.id}
              className="overflow-hidden cursor-pointer group border-border hover:border-primary/50 transition-all"
              onClick={() => setSelectedImage(image.id)}
            >
              <div className="relative aspect-[4/3]">
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                  <p className="p-4 text-sm font-medium text-foreground">{image.title}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Lightbox Dialog */}
        <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-5xl bg-background border-border p-0">
            <div className="relative">
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 z-10 text-foreground hover:bg-card"
                onClick={() => setSelectedImage(null)}
              >
                <X className="h-6 w-6" />
                <span className="sr-only">Закрыть</span>
              </Button>

              {currentIndex > 0 && (
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-foreground hover:bg-card"
                  onClick={goToPrevious}
                >
                  <ChevronLeft className="h-8 w-8" />
                  <span className="sr-only">Предыдущее</span>
                </Button>
              )}

              {currentIndex < filteredImages.length - 1 && (
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-foreground hover:bg-card"
                  onClick={goToNext}
                >
                  <ChevronRight className="h-8 w-8" />
                  <span className="sr-only">Следующее</span>
                </Button>
              )}

              {selectedImageData && (
                <div className="p-4">
                  <img
                    src={selectedImageData.src || "/placeholder.svg"}
                    alt={selectedImageData.title}
                    className="w-full max-h-[70vh] object-contain rounded-lg"
                  />
                  <p className="text-center mt-4 text-lg font-medium text-foreground">
                    {selectedImageData.title}
                  </p>
                </div>
              )}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}
