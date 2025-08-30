"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, type LucideIcon } from "lucide-react"
import Link from "next/link"

interface ServiceCardProps {
  title: string
  description: string
  icon: LucideIcon
  href: string
  color: "teal" | "purple"
}

export function ServiceCard({ title, description, icon: Icon, href, color }: ServiceCardProps) {
  const colorClasses = {
    teal: {
      icon: "text-teal-500",
      bg: "bg-teal-50 dark:bg-teal-950/20",
      button: "bg-teal-500 hover:bg-teal-600",
    },
    purple: {
      icon: "text-purple-600",
      bg: "bg-purple-50 dark:bg-purple-950/20",
      button: "bg-purple-600 hover:bg-purple-700",
    },
  }

  const styles = colorClasses[color]

  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl ${styles.bg} mb-6`}>
        <Icon className={`h-8 w-8 ${styles.icon}`} />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">{description}</p>
      <Link href={href}>
        <Button className={`${styles.button} text-white`}>
          Learn More
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </Link>
    </div>
  )
}
