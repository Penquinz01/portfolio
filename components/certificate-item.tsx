"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Award } from "lucide-react"
import { cn } from "@/lib/utils"

interface Certificate {
  id: number
  title: string
  issuer: string
  date: string
  url: string
}

export default function CertificateItem({ certificate }: { certificate: Certificate }) {
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

    const element = document.getElementById(`certificate-${certificate.id}`)
    if (element) observer.observe(element)

    return () => {
      if (element) observer.unobserve(element)
    }
  }, [certificate.id])

  return (
    <div
      id={`certificate-${certificate.id}`}
      className={cn(
        "transition-all duration-500 transform",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
      )}
    >
      <Link
        href={certificate.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block p-4 bg-gray-900/50 border border-gray-800 rounded-lg hover:border-cyan-800 hover:bg-gray-900/80 transition-all hover:shadow-[0_0_15px_rgba(45,212,191,0.2)]"
      >
        <div className="flex items-center gap-3">
          <Award className="w-8 h-8 text-cyan-500" />
          <div>
            <h3 className="text-lg font-medium text-cyan-400">{certificate.title}</h3>
            <p className="text-gray-400 text-sm">
              {certificate.issuer} • {certificate.date}
            </p>
          </div>
        </div>
      </Link>
    </div>
  )
}
