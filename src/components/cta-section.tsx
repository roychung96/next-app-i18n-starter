"use client"

import { useTranslations } from "next-intl"
import { Button } from "@/components/ui/button"
import { MessageCircle, Mail } from "lucide-react"

export function CTASection() {
  const t = useTranslations("CTA")

  return (
    <section className="py-20 bg-gradient-to-r from-teal-500 to-purple-600">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t("title")}</h2>
          <p className="text-xl text-teal-100 mb-8">{t("subtitle")}</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-teal-600 hover:bg-gray-100">
              <MessageCircle className="mr-2 h-5 w-5" />
              {t("whatsapp")}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-teal-600 bg-transparent"
            >
              <Mail className="mr-2 h-5 w-5" />
              {t("contact")}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
