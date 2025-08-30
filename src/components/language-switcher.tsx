"use client"

import { useLocale } from "next-intl"
import { useRouter, usePathname } from "@/i18n/navigation"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"

const locales = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "my", name: "Bahasa Malaysia", flag: "🇲🇾" },
]

export function LanguageSwitcher() {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  const handleLocaleChange = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale })
  }

  // const currentLocale = locales.find((l) => l.code === locale)

  return (
    <div className="flex items-center gap-2">
      <Globe className="h-4 w-4 text-muted-foreground" />
      <div className="flex gap-1">
        {locales.map((loc) => (
          <Button
            key={loc.code}
            variant={locale === loc.code ? "default" : "ghost"}
            size="sm"
            onClick={() => handleLocaleChange(loc.code)}
            className="text-xs px-2 py-1 h-auto"
          >
            <span className="mr-1">{loc.flag}</span>
            {loc.code.toUpperCase()}
          </Button>
        ))}
      </div>
    </div>
  )
}
