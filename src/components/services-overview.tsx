"use client"

import { useTranslations } from "next-intl"
import { Button } from "@/components/ui/button"
import { Building, FileText, Calculator, Users, Briefcase, ArrowRight } from "lucide-react"

export function ServicesOverview() {
  const t = useTranslations("Services")

  const services = [
    {
      icon: Building,
      title: t("incorporation"),
      description: "Complete online company incorporation services with fast approval and setup.",
      color: "text-teal-500",
      bgColor: "bg-teal-50 dark:bg-teal-950/20",
    },
    {
      icon: FileText,
      title: t("secretarial"),
      description: "Professional secretarial services to keep your company compliant and organized.",
      color: "text-purple-600",
      bgColor: "bg-purple-50 dark:bg-purple-950/20",
    },
    {
      icon: Calculator,
      title: t("tax"),
      description: "Comprehensive tax and accounting services with digital solutions.",
      color: "text-teal-500",
      bgColor: "bg-teal-50 dark:bg-teal-950/20",
    },
    {
      icon: Users,
      title: t("advisory"),
      description: "Strategic business advisory to help you make informed decisions.",
      color: "text-purple-600",
      bgColor: "bg-purple-50 dark:bg-purple-950/20",
    },
    {
      icon: Briefcase,
      title: t("cfo"),
      description: "Outsourced CFO services for professional financial management.",
      color: "text-teal-500",
      bgColor: "bg-teal-50 dark:bg-teal-950/20",
    },
  ]

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">{t("title")}</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Comprehensive solutions for all your business accounting and advisory needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {services.map((service, index) => (
              <div key={index} className="bg-white dark:bg-gray-900 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${service.bgColor} mb-4`}>
                  <service.icon className={`h-6 w-6 ${service.color}`} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" className="bg-teal-500 hover:bg-teal-600 text-white">
              View All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
