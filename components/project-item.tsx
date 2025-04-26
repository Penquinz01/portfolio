"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Github } from "lucide-react"
import { cn } from "@/lib/utils"

interface Project {
  id: number
  title: string
  githubUrl: string
  description: string
}

export default function ProjectItem({ project }: { project: Project }) {
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

    const element = document.getElementById(`other-project-${project.id}`)
    if (element) observer.observe(element)

    return () => {
      if (element) observer.unobserve(element)
    }
  }, [project.id])

  return (
    <div
      id={`other-project-${project.id}`}
      className={cn(
        "transition-all duration-500 transform",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
      )}
    >
      <Link
        href={project.githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block p-4 bg-gray-900/50 border border-gray-800 rounded-lg hover:border-pink-800 hover:bg-gray-900/80 transition-all hover:shadow-[0_0_15px_rgba(236,72,153,0.2)]"
      >
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-lg font-medium text-pink-400 mb-2">{project.title}</h3>
            <p className="text-gray-400 text-sm">{project.description}</p>
          </div>
          <Github className="w-5 h-5 text-gray-500 group-hover:text-pink-400 transition-colors" />
        </div>
      </Link>
    </div>
  )
}
