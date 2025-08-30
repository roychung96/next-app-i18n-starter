"use client"

import type React from "react"

import { useTranslations } from "next-intl"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react"
import { useState } from "react"
import { LoadingSpinner } from "@/components/loading-spinner"

export default function ContactPage() {
  const t = useTranslations("Contact")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    await new Promise((resolve) => setTimeout(resolve, 2000))

    console.log("Form submitted:", formData)
    setIsSubmitting(false)
    setIsSubmitted(true)

    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        message: "",
      })
    }, 3000)
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

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

      {/* Contact Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Get in Touch</h2>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-teal-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{t("info.address.title")}</h3>
                      <p className="text-gray-600 dark:text-gray-300">{t("info.address.content")}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Phone className="h-6 w-6 text-teal-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{t("info.phone.title")}</h3>
                      <p className="text-gray-600 dark:text-gray-300">{t("info.phone.content")}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Mail className="h-6 w-6 text-teal-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{t("info.email.title")}</h3>
                      <p className="text-gray-600 dark:text-gray-300">{t("info.email.content")}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Clock className="h-6 w-6 text-teal-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{t("info.hours.title")}</h3>
                      <p className="text-gray-600 dark:text-gray-300 whitespace-pre-line">{t("info.hours.content")}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <Button className="bg-teal-500 hover:bg-teal-600 text-white">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    WhatsApp Us
                  </Button>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">{t("form.title")}</h2>

                {isSubmitted && (
                  <div className="mb-6 p-4 bg-teal-50 dark:bg-teal-950/20 border border-teal-200 dark:border-teal-800 rounded-lg">
                    <p className="text-teal-700 dark:text-teal-300 font-medium">{t("form.success")}</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input
                      placeholder={t("form.name")}
                      value={formData.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      required
                    />
                  </div>

                  <div>
                    <Input
                      type="email"
                      placeholder={t("form.email")}
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      required
                    />
                  </div>

                  <div>
                    <Input
                      type="tel"
                      placeholder={t("form.phone")}
                      value={formData.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      required
                    />
                  </div>

                  <div>
                    <Input
                      placeholder={t("form.company")}
                      value={formData.company}
                      onChange={(e) => handleChange("company", e.target.value)}
                    />
                  </div>

                  <div>
                    <Select onValueChange={(value) => handleChange("service", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder={t("form.service")} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="incorporation">Company Incorporation</SelectItem>
                        <SelectItem value="secretarial">Secretarial Services</SelectItem>
                        <SelectItem value="tax">Tax & Accounting</SelectItem>
                        <SelectItem value="advisory">Business Advisory</SelectItem>
                        <SelectItem value="cfo">CFO Services</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Textarea
                      placeholder={t("form.message")}
                      value={formData.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      rows={4}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-teal-500 hover:bg-teal-600 text-white disabled:opacity-50"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <LoadingSpinner size="sm" className="mr-2" />
                        Sending...
                      </>
                    ) : (
                      t("form.submit")
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
