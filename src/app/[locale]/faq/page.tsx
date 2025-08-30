"use client"

import { useTranslations } from "next-intl"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQPage() {
  const t = useTranslations("FAQ")

  const faqs = [
    {
      question: t("items.0.question"),
      answer: t("items.0.answer"),
    },
    {
      question: t("items.1.question"),
      answer: t("items.1.answer"),
    },
    {
      question: t("items.2.question"),
      answer: t("items.2.answer"),
    },
    {
      question: t("items.3.question"),
      answer: t("items.3.answer"),
    },
    {
      question: t("items.4.question"),
      answer: t("items.4.answer"),
    },
    {
      question: t("items.5.question"),
      answer: t("items.5.answer"),
    },
    {
      question: t("items.6.question"),
      answer: t("items.6.answer"),
    },
    {
      question: t("items.7.question"),
      answer: t("items.7.answer"),
    },
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

      {/* FAQ Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-gray-200 dark:border-gray-700">
                  <AccordionTrigger className="text-left text-gray-900 dark:text-white hover:text-teal-600 dark:hover:text-teal-400">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </div>
  )
}
