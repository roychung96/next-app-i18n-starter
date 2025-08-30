"use client"

import { useState } from "react"
import { useTranslations } from "next-intl"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Link from "next/link";
import { LanguageSwitcher } from "@/components/language-switcher"
import { ThemeToggle } from "@/components/theme-toggle"

export function MobileNav() {
  const t = useTranslations("Nav")
  const [open, setOpen] = useState(false)

  const navItems = [
    { href: "/", label: t("home") },
    { href: "/about", label: t("about") },
    { href: "/services", label: t("services") },
    { href: "/team", label: t("team") },
    { href: "/faq", label: t("faq") },
    { href: "/contact", label: t("contact") },
  ]

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <div className="flex flex-col space-y-4 mt-8">
          <div className="flex items-center justify-between">
            <span className="font-semibold text-lg">Menu</span>
            <div className="flex items-center gap-2">
              <ThemeToggle />
            </div>
          </div>

          <nav className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary hover:bg-accent rounded-md transition-colors"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="pt-4 border-t">
            <LanguageSwitcher />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
