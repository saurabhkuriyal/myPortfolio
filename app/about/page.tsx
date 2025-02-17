"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Twitter } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function About() {
  const socialLinks = [
    { icon: Github, href: "https://github.com/saurabhkuriyal", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/saurabh-kuriyal-075a95238/", label: "LinkedIn" },
    { icon: Twitter, href: "https://x.com/Kuriyal7", label: "Twitter" },
  ]

  return (
    <div className="min-h-screen py-24 px-8 pl-24">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[500px] rounded-lg overflow-hidden">
            <Image
              src="/image3.jpeg"
              alt="Profile"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h1 className="text-4xl font-bold mb-6">About Me</h1>
            <p className="text-muted-foreground mb-6">
              I'm a passionate web developer with over 5 years of experience in creating beautiful, functional websites and applications. My expertise spans across modern web technologies, with a focus on creating exceptional user experiences.
            </p>
            <p className="text-muted-foreground mb-8">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge through technical writing and mentoring.
            </p>
            <div className="flex gap-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <Link
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}