"use client"

import { useTranslations } from "next-intl"
import { Button } from "@/components/ui/button"
import { ArrowRight, Building2, Calculator, TrendingUp } from "lucide-react"

export function HeroSection() {
  const t = useTranslations("Hero")

  return (
    <section className="relative bg-gradient-to-br from-teal-50 to-purple-50 dark:from-teal-950/20 dark:to-purple-950/20 py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            {t("title")}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-purple-600">
              accounting & advisory
            </span>
          </h1>

          <div className="space-y-4 mb-8">
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300">{t("subtitle")}</p>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300">{t("subtitle2")}</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-teal-500 hover:bg-teal-600 text-white">
              {t("primaryCta")}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-purple-600 text-purple-600 hover:bg-purple-50 dark:hover:bg-purple-950/20 bg-transparent"
            >
              {t("secondaryCta")}
            </Button>
            <Button variant="ghost" size="lg" className="text-teal-600 hover:bg-teal-50 dark:hover:bg-teal-950/20">
              {t("tertiaryCta")}
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="flex items-center justify-center space-x-3 text-gray-600 dark:text-gray-300">
              <Building2 className="h-8 w-8 text-teal-500" />
              <span className="font-medium">Company Setup</span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-gray-600 dark:text-gray-300">
              <Calculator className="h-8 w-8 text-purple-600" />
              <span className="font-medium">Tax & Accounting</span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-gray-600 dark:text-gray-300">
              <TrendingUp className="h-8 w-8 text-teal-500" />
              <span className="font-medium">Business Advisory</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
