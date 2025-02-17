"use client"

import { Card, CardContent, CardFooter } from "@/components/ui/card"
import Image from "next/image"
import { motion } from "framer-motion"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  link: string
}

export default function ProjectCard({ title, description, image, link }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <a href={link} target="_blank" rel="noopener noreferrer">
        <Card className="overflow-hidden border-0 bg-card/50 backdrop-blur-sm">
          <CardContent className="p-0">
            <div className="relative h-48 w-full">
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover"
              />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col items-start p-6">
            <h3 className="font-semibold text-lg mb-2">{title}</h3>
            <p className="text-sm text-muted-foreground">{description}</p>
          </CardFooter>
        </Card>
      </a>
    </motion.div>
  )
}