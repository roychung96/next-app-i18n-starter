"use client"

import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowRight, MessageCircle } from "lucide-react"
import type { LucideIcon } from "lucide-react"

interface ServiceDetailLayoutProps {
  title: string
  subtitle: string
  description: string
  icon: LucideIcon
  features: string[]
  benefits: string[]
  process: string[]
  color: "teal" | "purple"
}

export function ServiceDetailLayout({
  title,
  subtitle,
  description,
  icon: Icon,
  features,
  benefits,
  process,
  color,
}: ServiceDetailLayoutProps) {
  const colorClasses = {
    teal: {
      icon: "text-teal-500",
      bg: "bg-teal-50 dark:bg-teal-950/20",
      gradient: "from-teal-500 to-teal-600",
      accent: "text-teal-600",
    },
    purple: {
      icon: "text-purple-600",
      bg: "bg-purple-50 dark:bg-purple-950/20",
      gradient: "from-purple-600 to-purple-700",
      accent: "text-purple-600",
    },
  }

  const styles = colorClasses[color]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className={`py-20 bg-gradient-to-br ${styles.bg}`}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl ${styles.bg} mb-6`}>
              <Icon className={`h-10 w-10 ${styles.icon}`} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">{title}</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">{subtitle}</p>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">{description}</p>
          </div>
        </div>
      </section>

      {/* Features & Benefits */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Features */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">What's Included</h2>
                <div className="space-y-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className={`h-6 w-6 ${styles.icon} mt-0.5 flex-shrink-0`} />
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Key Benefits</h2>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className={`h-6 w-6 ${styles.icon} mt-0.5 flex-shrink-0`} />
                      <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">Our Process</h2>
            <div className="space-y-8">
              {process.map((step, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div
                    className={`flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r ${styles.gradient} text-white font-bold flex-shrink-0`}
                  >
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <p className="text-lg text-gray-700 dark:text-gray-300">{step}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={`py-20 bg-gradient-to-r ${styles.gradient}`}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-white/90 mb-8">Contact us today to discuss your requirements.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-gray-900 hover:bg-gray-100">
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp Us
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-gray-900 bg-transparent"
              >
                Get Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
