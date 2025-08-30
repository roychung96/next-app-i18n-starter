"use client"

import { useTranslations } from "next-intl"
import { Target, Lightbulb, Shield, Users } from "lucide-react"

export default function AboutPage() {
  const t = useTranslations("About")

  const values = [
    {
      icon: Target,
      title: t("values.items.0.title"),
      description: t("values.items.0.description"),
      color: "text-teal-500",
    },
    {
      icon: Lightbulb,
      title: t("values.items.1.title"),
      description: t("values.items.1.description"),
      color: "text-purple-600",
    },
    {
      icon: Shield,
      title: t("values.items.2.title"),
      description: t("values.items.2.description"),
      color: "text-teal-500",
    },
    {
      icon: Users,
      title: t("values.items.3.title"),
      description: t("values.items.3.description"),
      color: "text-purple-600",
    },
  ]

  const stats = [
    { number: t("stats.clients"), label: t("stats.clientsLabel") },
    { number: t("stats.years"), label: t("stats.yearsLabel") },
    { number: t("stats.services"), label: t("stats.servicesLabel") },
    { number: t("stats.satisfaction"), label: t("stats.satisfactionLabel") },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-teal-50 to-purple-50 dark:from-teal-950/20 dark:to-purple-950/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">{t("title")}</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">{t("subtitle")}</p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">{t("story.title")}</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed text-center">{t("story.content")}</p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">{t("mission.title")}</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">{t("mission.content")}</p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">{t("values.title")}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-50 dark:bg-gray-800 mb-6">
                    <value.icon className={`h-8 w-8 ${value.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">{value.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-teal-500 to-purple-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-teal-100">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
