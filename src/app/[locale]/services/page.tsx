"use client"

import { useTranslations } from "next-intl"
import { ServiceCard } from "@/components/service-card"
import { Building, FileText, Calculator, Users, Briefcase } from "lucide-react"

export default function ServicesPage() {
  const t = useTranslations("Services")

  const services = [
    {
      title: t("incorporation"),
      description: t("incorporationDesc"),
      icon: Building,
      href: "/services/incorporation",
      color: "teal" as const,
    },
    {
      title: t("secretarial"),
      description: t("secretarialDesc"),
      icon: FileText,
      href: "/services/secretarial",
      color: "purple" as const,
    },
    {
      title: t("tax"),
      description: t("taxDesc"),
      icon: Calculator,
      href: "/services/tax",
      color: "teal" as const,
    },
    {
      title: t("advisory"),
      description: t("advisoryDesc"),
      icon: Users,
      href: "/services/advisory",
      color: "purple" as const,
    },
    {
      title: t("cfo"),
      description: t("cfoDesc"),
      icon: Briefcase,
      href: "/services/cfo",
      color: "teal" as const,
    },
  ]

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">{t("title")}</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">{t("subtitle")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
