"use client"

import { useTranslations } from "next-intl"

export default function TeamPage() {
  const t = useTranslations("Team")

  const members = [
    {
      name: t("members.0.name"),
      position: t("members.0.position"),
      bio: t("members.0.bio"),
      expertise: [t("members.0.expertise.0"), t("members.0.expertise.1"), t("members.0.expertise.2")],
    },
    {
      name: t("members.1.name"),
      position: t("members.1.position"),
      bio: t("members.1.bio"),
      expertise: [t("members.1.expertise.0"), t("members.1.expertise.1"), t("members.1.expertise.2")],
    },
    {
      name: t("members.2.name"),
      position: t("members.2.position"),
      bio: t("members.2.bio"),
      expertise: [t("members.2.expertise.0"), t("members.2.expertise.1"), t("members.2.expertise.2")],
    },
    {
      name: t("members.3.name"),
      position: t("members.3.position"),
      bio: t("members.3.bio"),
      expertise: [t("members.3.expertise.0"), t("members.3.expertise.1"), t("members.3.expertise.2")],
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

      {/* Team Members */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {members.map((member, index) => (
                <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{member.name}</h3>
                      <p className="text-teal-600 dark:text-teal-400">{member.position}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">{member.bio}</p>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Expertise:</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
