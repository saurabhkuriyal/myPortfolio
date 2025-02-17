"use client"

import { Progress } from "@/components/ui/progress"
import { motion } from "framer-motion"

const skills = [
  { name: "Frontend Development", level: 85, category: "Development" },
  { name: "React & Next.js", level: 80, category: "Development" },
  { name: "Node/Expressjs", level: 80, category: "Development" },
  { name: "Python", level: 80, category: "Development" },
  { name: "DevOps", level: 65, category: "Infrastructure" },
  { name: "AWS", level: 60, category: "Infrastructure" },
  { name: "Java", level: 75, category: "Language" },
  { name: "DSA", level: 65, category: "Problem Solving" },
  { name: "JavaScript", level: 65, category: "Programming Language" }
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

export default function Skills() {
  return (
    <div className="min-h-screen py-24 px-8 pl-24">
      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-12">Skills & Expertise</h1>
        <div className="space-y-8">
          {skills.map((skill) => (
            <motion.div key={skill.name} variants={item} className="space-y-2">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium">{skill.name}</h3>
                <span className="text-sm text-muted-foreground">{skill.level}%</span>
              </div>
              <Progress value={skill.level} className="h-2" />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}