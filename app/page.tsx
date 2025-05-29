"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { FileText, Languages, Scale, BookOpen, Users, MessageSquare } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export default function HomePage() {
  const { t } = useLanguage()

  const services = [
    {
      icon: FileText,
      title: t("home.services.documents"),
      description: t("home.services.documents.desc"),
      href: "/documents",
      color: "bg-amber-100 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400",
    },
    {
      icon: Languages,
      title: t("home.services.translation"),
      description: t("home.services.translation.desc"),
      href: "/translation",
      color: "bg-yellow-100 dark:bg-yellow-900/20 text-yellow-600 dark:text-yellow-400",
    },
    {
      icon: Scale,
      title: t("home.services.procedures"),
      description: t("home.services.procedures.desc"),
      href: "/procedures",
      color: "bg-orange-100 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400",
    },
    {
      icon: BookOpen,
      title: t("home.services.books"),
      description: t("home.services.books.desc"),
      href: "/books",
      color: "bg-amber-100 dark:bg-amber-900/20 text-amber-700 dark:text-amber-300",
    },
    {
      icon: Users,
      title: t("home.services.lawyers"),
      description: t("home.services.lawyers.desc"),
      href: "/lawyers",
      color: "bg-yellow-100 dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-300",
    },
    {
      icon: MessageSquare,
      title: t("home.services.questions"),
      description: t("home.services.questions.desc"),
      href: "/questions",
      color: "bg-orange-100 dark:bg-orange-900/20 text-orange-700 dark:text-orange-300",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-primary/5 to-background py-20 lg:py-32 overflow-hidden">
        {/* Add background decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-32 h-32 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-amber-500 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
        </div>

        <div className="container px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-amber-600 bg-clip-text text-transparent">
              {t("home.hero.title")}
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground mb-8 leading-relaxed">{t("home.hero.subtitle")}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-primary hover:bg-primary/90">
                <Link href="/documents">{t("home.hero.cta1")}</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/questions">{t("home.hero.cta2")}</Link>
              </Button>
            </div>

            {/* Add hero images section */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="relative overflow-hidden rounded-xl shadow-lg">
                <img src="/images/hero/justice-scale.jpg" alt="Legal Justice" className="w-full h-48 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-bold text-lg">العدالة والقانون</h3>
                  <p className="text-sm opacity-90">Justice & Law</p>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-xl shadow-lg">
                <img
                  src="/images/hero/legal-documents.png"
                  alt="Legal Documents"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-bold text-lg">الوثائق القانونية</h3>
                  <p className="text-sm opacity-90">Legal Documents</p>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-xl shadow-lg">
                <img
                  src="/images/hero/professional-service.jpg"
                  alt="Professional Service"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-bold text-lg">الخدمة المهنية</h3>
                  <p className="text-sm opacity-90">Professional Service</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">{t("home.services.title")}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{t("home.services.subtitle")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-background to-muted/30"
              >
                <CardContent className="p-8">
                  <div className="mb-6 overflow-hidden rounded-2xl">
                    <img
                      src={
                        index === 0
                          ? "/images/services/administrative-documents.png"
                          : index === 1
                            ? "/images/services/legal-translation.png"
                            : index === 2
                              ? "/images/services/court-procedures.png"
                              : index === 3
                                ? "/images/services/legal-books.png"
                                : index === 4
                                  ? "/images/services/expert-lawyers.png"
                                  : "/images/services/legal-consultation.png"
                      }
                      alt={service.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">{service.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                  <Button
                    asChild
                    variant="ghost"
                    className="group-hover:bg-primary group-hover:text-primary-foreground transition-all"
                  >
                    <Link href={service.href}>{t("home.services.discover")} ←</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">{t("home.cta.title")}</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">{t("home.cta.subtitle")}</p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/auth">{t("home.cta.button")}</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
