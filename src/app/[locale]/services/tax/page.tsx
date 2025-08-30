"use client"

import { useTranslations } from "next-intl"
import { ServiceDetailLayout } from "@/components/service-detail-layout"
import { Calculator } from "lucide-react"

export default function TaxPage() {
  const t = useTranslations("Services.details.tax")

  return (
    <ServiceDetailLayout
      title={t("title")}
      subtitle={t("subtitle")}
      description={t("description")}
      icon={Calculator}
      features={[t("features.0"), t("features.1"), t("features.2"), t("features.3"), t("features.4"), t("features.5")]}
      benefits={[t("benefits.0"), t("benefits.1"), t("benefits.2"), t("features.3"), t("benefits.4")]}
      process={[t("process.0"), t("process.1"), t("process.2"), t("process.3"), t("process.4")]}
      color="teal"
    />
  )
}
