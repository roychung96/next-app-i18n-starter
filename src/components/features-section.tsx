"use client"

import { useTranslations } from "next-intl"
import { Clock, Settings, HeadphonesIcon } from "lucide-react"

export function FeaturesSection() {
  const t = useTranslations("Features")

  const features = [
    {
      icon: Clock,
      title: t("fast.title"),
      description: t("fast.desc"),
      color: "text-teal-500",
    },
    {
      icon: Settings,
      title: t("simple.title"),
      description: t("simple.desc"),
      color: "text-purple-600",
    },
    {
      icon: HeadphonesIcon,
      title: t("support.title"),
      description: t("support.desc"),
      color: "text-teal-500",
    },
  ]

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose Advisirs Plus?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We provide comprehensive accounting and advisory services with a focus on efficiency and excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center p-8 rounded-2xl bg-gray-50 dark:bg-gray-800 hover:shadow-lg transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white dark:bg-gray-700 shadow-md mb-6">
                  <feature.icon className={`h-8 w-8 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
