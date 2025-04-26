import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import GameProjectCard from "@/components/game-project-card"
import ProjectItem from "@/components/project-item"
import CertificateItem from "@/components/certificate-item"
import { Button } from "@/components/ui/button"

export default function Home() {
  // Sample data - replace with your actual information
  const gameProjects = [
    {
      id: 1,
      title: "Bortal",
      description: "A game about bubble portals and bubble guns",
      images: [
        "/bortal1.png?height=300&width=500",
        // "/placeholder.svg?height=300&width=500",
        // "/placeholder.svg?height=300&width=500",
      ],
      githubUrl: "https://github.com/Penquinz01/Bortal",
      tags: ["Unity", "C#", "Puzzle","Platformer"],
      isWip: false,
    },
    {
      id: 2,
      title: "Heom",
      description: "A game about colours,puzzles and platforming",
      images: [
        "/heom1.png?height=300&width=500",
        "/heom2.png?height=300&width=500",
        // "/placeholder.svg?height=300&width=500",
      ],
      githubUrl: "https://github.com/Penquinz01/Heom",
      tags: ["Unity", "C#", "2D","Puzzle","Hack and Slash"],
      isWip: false,
    },
    {
      id: 3,
      title: "Untitled 1500s Game",
      description: "A game about a swordsman in the 1500s",
      images: [
        "/placeholder.svg?height=300&width=500",
        "/placeholder.svg?height=300&width=500",
        "/placeholder.svg?height=300&width=500",
      ],
      githubUrl: "https://github.com/Penquinz01/Project-Sword",
      tags: ["Unity", "C#", "3D","Medieval"],
      isWip: true,
    },
  ]

  const otherProjects = [
    {
      id: 1,
      title: "Enhanced Game Controller",
      githubUrl: "https://github.com/Penquinz01/DSolve-2025",
      description: "Control gams with your head movement and voice",
    },
    // {
    //   id: 2,
    //   title: "AI Chat Assistant",
    //   githubUrl: "https://github.com/yourusername/ai-chat",
    //   description: "Conversational AI using transformer models",
    // },
    // {
    //   id: 3,
    //   title: "Blockchain Explorer",
    //   githubUrl: "https://github.com/yourusername/blockchain-explorer",
    //   description: "Tool for visualizing blockchain transactions",
    // },
  ]

  const certificates = [
    {
      id: 1,
      title: "Machine Learning Specialization",
      issuer: "Coursera",
      date: "2023",
      url: "https://coursera.org/share/7f44a632a88e646a2041234d7e9afca1",
    },
    // {
    //   id: 2,
    //   title: "Game Design and Development",
    //   issuer: "Coursera",
    //   date: "2022",
    //   url: "https://coursera.org/verify/specialization/GHIJKL789012",
    // },
    // {
    //   id: 3,
    //   title: "Full-Stack Web Development",
    //   issuer: "Coursera",
    //   date: "2021",
    //   url: "https://coursera.org/verify/specialization/MNOPQR345678",
    // },
  ]

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex flex-col justify-center items-center relative px-4 py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(67,12,123,0.15),transparent_70%)]"></div>
        <div className="z-10 text-center max-w-3xl mx-auto space-y-6 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-400">JANBAAS JAMAL K K</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium text-cyan-400">Game Developer & Machine Learning Developer</h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Computer Science studnet at College of Engineering, Trivandrum. Passionate about game development and machine learning.
            I love creating immersive experiences and exploring the intersection of technology and creativity.
          </p>
          <div className="flex justify-center gap-4 pt-4">
            <Button variant="outline" className="border-pink-500 text-pink-500 hover:bg-pink-950 hover:text-pink-300">
              <Link href="#projects" className="flex items-center gap-2">
                View Projects
              </Link>
            </Button>
            <Button className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 border-0">
              <Link href="#contact" className="flex items-center gap-2">
                Contact Me
              </Link>
            </Button>
          </div>
          <div className="flex justify-center gap-6 pt-8">
            <Link
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors"
            >
              <Github className="w-8 h-8" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-pink-500 transition-colors"
            >
              <Linkedin className="w-8 h-8" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-cyan-400" fill="none" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Game Projects Section */}
      <section id="game-projects" className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(12,67,123,0.15),transparent_70%)]"></div>
        <div className="max-w-6xl mx-auto z-10 relative">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Game Projects
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {gameProjects.map((project) => (
              <GameProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Other Projects Section */}
      <section id="other-projects" className="py-20 px-4 bg-black/50 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(123,12,67,0.15),transparent_70%)]"></div>
        <div className="max-w-4xl mx-auto z-10 relative">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500">
              Other Projects
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {otherProjects.map((project) => (
              <ProjectItem key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(67,12,123,0.15),transparent_70%)]"></div>
        <div className="max-w-4xl mx-auto z-10 relative">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-500">
              Certificates
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((certificate) => (
              <CertificateItem key={certificate.id} certificate={certificate} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-black/50 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(12,123,67,0.15),transparent_70%)]"></div>
        <div className="max-w-4xl mx-auto z-10 relative">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
              Contact Me
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Github className="w-6 h-6 text-cyan-400" />
                <Link
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-cyan-400 transition-colors"
                >
                  github.com/Penquinz01
                </Link>
              </div>
              <div className="flex items-center gap-4">
                <Linkedin className="w-6 h-6 text-pink-500" />
                <Link
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-pink-500 transition-colors"
                >
                  www.linkedin.com/in/janbaas-jamal-372009326
                </Link>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-purple-400" />
                <Link
                  href="mailto:your.email@example.com"
                  className="text-gray-300 hover:text-purple-400 transition-colors"
                >
                  janbaasjamal2@gmailcom
                </Link>
              </div>
            </div>
            <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800 shadow-[0_0_15px_rgba(139,92,246,0.15)]">
              <h3 className="text-xl font-medium mb-4 text-cyan-400">About Me</h3>
              <p className="text-gray-300 mb-4">
                Game developer and Machine Learning Enthusiast with a passion for creating immersive digital experiences.
                Specialized in Unity, Java,C#,Python and some web stacks.
              </p>
              <p className="text-gray-300">
                Currently based in Trivandrum. Open to freelance opportunities, collaborations, and full-time
                positions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 px-4 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Janbaas Jamal. All rights reserved.</p>
          <p className="mt-2">Built with Next.js and TailwindCSS</p>
        </div>
      </footer>
    </main>
  )
}
