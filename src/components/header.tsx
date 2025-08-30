"use client"

import { useTranslations } from "next-intl"
import Link from "next/link";
import { Button } from "@/components/ui/button"
import { LanguageSwitcher } from "@/components/language-switcher"
import { ThemeToggle } from "@/components/theme-toggle"
import { MobileNav } from "@/components/mobile-nav"
import { ChevronDown } from "lucide-react"

export function Header() {
  const t = useTranslations("Nav")

  const navItems = [
    { href: "/", label: t("home") },
    { href: "/about", label: t("about") },
    {
      href: "/services",
      label: t("services"),
      hasDropdown: true,
      dropdownItems: [
        { href: "/services/incorporation", label: "Company Incorporation" },
        { href: "/services/secretarial", label: "Secretarial Services" },
        { href: "/services/tax-accounting", label: "Tax & Accounting" },
        { href: "/services/advisory", label: "Business Advisory" },
        { href: "/services/cfo", label: "CFO Services" },
      ],
    },
    { href: "/team", label: t("team") },
    { href: "/faq", label: t("faq") },
    { href: "/contact", label: t("contact") },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
                <span className="text-white font-bold text-sm">A</span>
              </div>
              <span className="ml-2 text-xl font-bold text-foreground">Advisirs Plus</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <div key={item.href} className="relative group">
                <Link
                  href={item.href}
                  className="flex items-center text-sm font-medium text-foreground hover:text-primary transition-colors"
                >
                  {item.label}
                  {item.hasDropdown && <ChevronDown className="ml-1 h-4 w-4" />}
                </Link>

                {/* Mega Dropdown for Services */}
                {item.hasDropdown && item.dropdownItems && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-background border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="p-4">
                      <div className="space-y-2">
                        {item.dropdownItems.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.href}
                            href={dropdownItem.href}
                            className="block px-3 py-2 text-sm text-foreground hover:text-primary hover:bg-accent rounded-md transition-colors"
                          >
                            {dropdownItem.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-2">
              <LanguageSwitcher />
              <ThemeToggle />
            </div>

            <Button asChild className="hidden md:inline-flex">
              <Link href="/contact">Get Started</Link>
            </Button>

            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  )
}
