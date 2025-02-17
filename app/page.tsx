import ProjectCard from "@/components/ProjectCard"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    title: "Commuinity.Dev",
    description: "A modern article posting website similar to medium using MERN stack, cloudinary",
    image: "/blog_webiste.webp",
    link: "https://communitydev.vercel.app/"
  },
  {
    title: "A Ecommerce website",
    description:"A modern Ecommerce website with payment integration",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1000",
    link: "#"
  },
  {
    title: "Qr Code Generator",
    description: "Just enter yo URL and get a qr code immediately , try it now!",
    image: "/QR_Generator.png",
    link: "https://qr-code-generator-three-xi-37.vercel.app/"
  }
]

export default function Home() {
  return (
    <div className="min-h-screen pl-24">
      {/* Hero Section */}
      <section className="h-screen flex items-center px-8">
        <div className="max-w-3xl">
          <h1 className="text-7xl font-bold mb-6">
            Hi,<br />
            I'm <span className="text-primary text-orange-500">Saurabh</span>,<br />
            Full stack web developer
          </h1>
          <p className="text-muted-foreground text-xl mb-8">
          Full Stack Web Developer/ AI Automation Engineer
          </p>
          <Link href="/contact">
            <Button size="lg" className="group">
              Contact me!
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Recent Projects Section */}
      <section className="px-8 py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Recent Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}