"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const projects = [
  {
    title: "Commuinity.Dev",
    description: "A modern article posting website similar to medium using MERN stack, cloudinary",
    image: "/blog_webiste.webp",
    link: "https://communitydev.vercel.app/",
    category: "Web Development"
  },
  {
    title: "A Ecommerce website",
    description: "A modern Ecommerce website with payment integration",
    image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?q=80&w=1000",
    link: "#",
    category: "Web Application"
  },
  {
    title: "Qr Code Generator",
    description: "Just enter yo URL and get a qr code immediately , try it now!",
    image: "/QR_Generator.png",
    link:"https://qr-code-generator-three-xi-37.vercel.app/",
    category: "Web application"
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio website showcasing creative work build using Nextjs",
    image: "https://images.unsplash.com/photo-1517134191118-9d595e4c8c2b?q=80&w=1000",
    link: "#",
    category: "Web Design"
  }
  
]

export default function Work() {
  return (
    <div className="min-h-screen py-24 px-8 pl-24">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-12">My Work</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative aspect-square overflow-hidden rounded-lg bg-muted"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/60 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-xs text-primary mb-2">{project.category}</p>
                <h3 className="text-lg font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-sm text-white/80">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}