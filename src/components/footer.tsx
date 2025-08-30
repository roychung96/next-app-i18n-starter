"use client"

import { useTranslations } from "next-intl"
import Link from "next/link";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function Footer() {
  const t = useTranslations("Footer")
  const navT = useTranslations("Nav")

  const quickLinks = [
    { href: "/services", label: navT("services") },
    { href: "/about", label: navT("about") },
    { href: "/team", label: navT("team") },
    { href: "/faq", label: navT("faq") },
    { href: "/contact", label: navT("contact") },
    { href: "/privacy", label: "Privacy" },
    { href: "/terms", label: "Terms & Conditions" },
  ]

  const services = [
    "Company Incorporation",
    "Secretarial Services",
    "Tax & Accounting",
    "Business Advisory",
    "CFO Services",
  ]

  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
                <span className="text-white font-bold text-sm">A</span>
              </div>
              <span className="text-lg font-bold">Advisirs Plus</span>
            </div>

            <div className="space-y-2 text-sm text-muted-foreground">
              <p className="font-semibold text-foreground">{t("company")}</p>
              <p>{t("registration")}</p>
              <p>{t("address")}</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">{t("quickLinks")}</h3>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Inquiry Form */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">{t("inquiry")}</h3>
            <form className="space-y-3">
              <Input placeholder={t("name")} className="text-sm" />
              <Input type="email" placeholder={t("email")} className="text-sm" />
              <Input type="tel" placeholder={t("phone")} className="text-sm" />
              <Select>
                <SelectTrigger className="text-sm">
                  <SelectValue placeholder={t("selectServices")} />
                </SelectTrigger>
                <SelectContent>
                  {services.map((service) => (
                    <SelectItem key={service} value={service.toLowerCase().replace(/\s+/g, "-")}>
                      {service}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Textarea placeholder={t("message")} className="text-sm min-h-[80px]" />
              <Button type="submit" className="w-full">
                {t("submit")}
              </Button>
            </form>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; 2024 Advisirs Plus Sdn. Bhd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
