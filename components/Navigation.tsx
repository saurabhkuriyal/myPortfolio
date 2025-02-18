"use client"

import { cn } from '@/lib/utils'
import { Briefcase, Code2, Mail, User2 } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navigation() {
  const pathname = usePathname()
  
  const links = [
    { name: 'About', href: '/about', icon: User2 },
    { name: 'Skills', href: '/skills', icon: Code2 },
    { name: 'Work', href: '/work', icon: Briefcase },
    { name: 'Contact', href: '/contact', icon: Mail },
  ]

  return (
    <nav className="fixed left-0 top-0 h-full w-24 bg-background border-r border-border z-50 flex items-center">
      <ul className="w-full flex flex-col gap-6 items-center">
        {links.map((link) => {
          const Icon = link.icon
          return (
            <li key={link.href}>
              <Link 
                href={link.href}
                className={cn(
                  "flex flex-col items-center gap-1 p-3 text-muted-foreground hover:text-primary transition-colors",
                  pathname === link.href && "text-primary"
                )}
              >
                <Icon size={20} />
                <span className="text-xs font-medium">{link.name}</span>
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}