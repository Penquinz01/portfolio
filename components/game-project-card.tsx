"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight, Github } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface GameProject {
  id: number
  title: string
  description: string
  images: string[]
  githubUrl: string
  tags: string[]
  isWip: boolean
}

export default function GameProjectCard({ project }: { project: GameProject }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById(`project-${project.id}`)
    if (element) observer.observe(element)

    return () => {
      if (element) observer.unobserve(element)
    }
  }, [project.id])

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length)
  }

  return (
    <div
      id={`project-${project.id}`}
      className={cn(
        "group relative rounded-lg overflow-hidden transition-all duration-500 transform",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
        project.isWip ? "grayscale" : "",
      )}
    >
      <div className="bg-gray-900/80 border border-gray-800 rounded-lg overflow-hidden shadow-[0_0_15px_rgba(0,0,0,0.3)] hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] transition-shadow duration-300">
        {project.isWip && (
          <div className="absolute top-0 right-0 z-20 bg-yellow-600 text-black font-bold py-1 px-4 transform rotate-45 translate-x-[30%] translate-y-[40%] text-sm">
            WIP
          </div>
        )}

        <div className="relative h-48 overflow-hidden">
          <Image
            src={project.images[currentImageIndex] || "/placeholder.svg"}
            alt={`${project.title} screenshot`}
            fill
            className="object-cover"
          />
          <button
            onClick={(e) => {
              e.preventDefault()
              prevImage()
            }}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 rounded-full p-1 text-white opacity-0 group-hover:opacity-100 transition-opacity z-10"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={(e) => {
              e.preventDefault()
              nextImage()
            }}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 rounded-full p-1 text-white opacity-0 group-hover:opacity-100 transition-opacity z-10"
            aria-label="Next image"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 z-10">
            {project.images.map((_, index) => (
              <div
                key={index}
                className={cn("w-1.5 h-1.5 rounded-full", index === currentImageIndex ? "bg-cyan-400" : "bg-gray-500")}
              />
            ))}
          </div>
        </div>

        <div className="p-4">
          <h3
            className={cn(
              "text-xl font-bold mb-2",
              project.isWip
                ? "text-gray-400"
                : "text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500",
            )}
          >
            {project.title}
          </h3>
          <p className="text-gray-300 text-sm mb-3">{project.description}</p>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag, index) => (
              <Badge key={index} variant="outline" className="text-xs border-cyan-800 text-cyan-400">
                {tag}
              </Badge>
            ))}
          </div>

          <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
            <Button
              variant="outline"
              className={cn(
                "w-full border-gray-700 hover:bg-gray-800 group-hover:border-purple-700 transition-colors",
                project.isWip ? "text-gray-400" : "text-purple-400",
              )}
            >
              <Github className="w-4 h-4 mr-2" />
              View on GitHub
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
