"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Phone, MapPin, Mail, Star, Search, Calendar, Filter } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { lawyersData } from "@/lib/lawyers-data"
import Link from "next/link"

export default function LawyersPage() {
  const { t, language } = useLanguage()
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedSpecialization, setSelectedSpecialization] = useState("all")

  const specializations = [
    { value: "all", label: language === "ar" ? "جميع التخصصات" : "All Specializations" },
    { value: "civil", label: language === "ar" ? "القانون المدني" : "Civil Law" },
    { value: "criminal", label: language === "ar" ? "القانون الجنائي" : "Criminal Law" },
    { value: "commercial", label: language === "ar" ? "القانون التجاري" : "Commercial Law" },
    { value: "family", label: language === "ar" ? "قانون الأسرة" : "Family Law" },
    { value: "administrative", label: language === "ar" ? "القانون الإداري" : "Administrative Law" },
    { value: "realestate", label: language === "ar" ? "القانون العقاري" : "Real Estate Law" },
    { value: "human-rights", label: language === "ar" ? "حقوق الإنسان" : "Human Rights" },
    { value: "constitutional", label: language === "ar" ? "القانون الدستوري" : "Constitutional Law" },
    { value: "international", label: language === "ar" ? "القانون الدولي" : "International Law" },
  ]

  const filteredLawyers = lawyersData.filter((lawyer) => {
    const name = language === "ar" ? lawyer.name : lawyer.nameEn
    const specialization = language === "ar" ? lawyer.specialization : lawyer.specializationEn
    const location = language === "ar" ? lawyer.location : lawyer.locationEn

    const matchesSearch =
      name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      specialization.toLowerCase().includes(searchTerm.toLowerCase()) ||
      location.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesSpecialization =
      selectedSpecialization === "all" ||
      (selectedSpecialization === "civil" && (specialization.includes("المدني") || specialization.includes("Civil"))) ||
      (selectedSpecialization === "criminal" &&
        (specialization.includes("الجنائي") || specialization.includes("Criminal"))) ||
      (selectedSpecialization === "commercial" &&
        (specialization.includes("التجاري") || specialization.includes("Commercial"))) ||
      (selectedSpecialization === "family" &&
        (specialization.includes("الأسرة") || specialization.includes("Family"))) ||
      (selectedSpecialization === "administrative" &&
        (specialization.includes("الإداري") || specialization.includes("Administrative"))) ||
      (selectedSpecialization === "realestate" &&
        (specialization.includes("العقاري") || specialization.includes("Real Estate"))) ||
      (selectedSpecialization === "human-rights" &&
        (specialization.includes("حقوق الإنسان") || specialization.includes("Human Rights"))) ||
      (selectedSpecialization === "constitutional" &&
        (specialization.includes("الدستوري") || specialization.includes("Constitutional"))) ||
      (selectedSpecialization === "international" &&
        (specialization.includes("الدولي") || specialization.includes("International")))

    return matchesSearch && matchesSpecialization
  })

  const notableLawyers = filteredLawyers.filter((lawyer) => lawyer.isNotable)
  const regularLawyers = filteredLawyers.filter((lawyer) => !lawyer.isNotable)

  return (
    <div className="min-h-screen py-20">
      <div className="container px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-4">{t("lawyers.title")}</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {language === "ar"
              ? "اختر المحامي المناسب لقضيتك من بين أفضل المحامين في الجزائر"
              : "Choose the right lawyer for your case from among the best lawyers in Algeria"}
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-12">
          <div className="relative flex-1">
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder={language === "ar" ? "ابحث عن المحامين..." : "Search lawyers..."}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pr-10"
            />
          </div>
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-muted-foreground" />
            <Select value={selectedSpecialization} onValueChange={setSelectedSpecialization}>
              <SelectTrigger className="w-[200px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {specializations.map((spec) => (
                  <SelectItem key={spec.value} value={spec.value}>
                    {spec.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Notable Lawyers Section */}
        {notableLawyers.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-center">
              {language === "ar" ? "محامون بارزون" : "Notable Lawyers"}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {notableLawyers.map((lawyer) => (
                <Card key={lawyer.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                  <CardContent className="p-0">
                    <div className="bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-amber-950/20 dark:to-yellow-950/20 p-6">
                      <div className="flex justify-center mb-4">
                        <Badge
                          variant="secondary"
                          className="bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200"
                        >
                          <Star className="w-3 h-3 mr-1" />
                          {language === "ar" ? "محامي بارز" : "Notable"}
                        </Badge>
                      </div>

                      <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-primary">
                        <img
                          src={lawyer.image || "/placeholder.svg"}
                          alt={language === "ar" ? lawyer.name : lawyer.nameEn}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div className="text-center space-y-3">
                        <h3 className="text-xl font-bold text-primary">
                          {language === "ar" ? lawyer.name : lawyer.nameEn}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {language === "ar" ? lawyer.description : lawyer.descriptionEn}
                        </p>

                        <div className="space-y-2 text-sm">
                          <div className="flex items-center justify-center gap-2">
                            <MapPin className="w-4 h-4 text-primary" />
                            <span>{language === "ar" ? lawyer.location : lawyer.locationEn}</span>
                          </div>
                          {lawyer.phone && (
                            <div className="flex items-center justify-center gap-2">
                              <Phone className="w-4 h-4 text-primary" />
                              <span className="font-medium text-primary">{lawyer.phone}</span>
                            </div>
                          )}
                          {lawyer.email && (
                            <div className="flex items-center justify-center gap-2">
                              <Mail className="w-4 h-4 text-primary" />
                              <span className="font-medium text-primary">{lawyer.email}</span>
                            </div>
                          )}
                          <div className="flex items-center justify-center gap-2">
                            <Calendar className="w-4 h-4 text-primary" />
                            <span>
                              {t("lawyers.experience")} {language === "ar" ? lawyer.experience : lawyer.experienceEn}
                            </span>
                          </div>
                        </div>

                        <div className="pt-4">
                          <Button asChild className="w-full bg-primary hover:bg-primary/90">
                            <Link href={`/lawyers/${lawyer.id}`}>{t("common.view")}</Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Regular Lawyers Section */}
        <div>
          <h2 className="text-2xl font-bold mb-8 text-center">{language === "ar" ? "المحامون" : "Lawyers"}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularLawyers.map((lawyer) => (
              <Card key={lawyer.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                <CardContent className="p-0">
                  <div className="bg-amber-50 dark:bg-amber-950/20 p-6">
                    <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-primary">
                      <img
                        src={lawyer.image || "/placeholder.svg"}
                        alt={language === "ar" ? lawyer.name : lawyer.nameEn}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="text-center space-y-3">
                      <h3 className="text-xl font-bold text-primary">
                        {language === "ar" ? lawyer.name : lawyer.nameEn}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {language === "ar" ? lawyer.description : lawyer.descriptionEn}
                      </p>

                      <div className="space-y-2 text-sm">
                        <div className="flex items-center justify-center gap-2">
                          <MapPin className="w-4 h-4 text-primary" />
                          <span>{language === "ar" ? lawyer.location : lawyer.locationEn}</span>
                        </div>
                        <div className="flex items-center justify-center gap-2">
                          <Phone className="w-4 h-4 text-primary" />
                          <span className="font-medium text-primary">{lawyer.phone}</span>
                        </div>
                        {lawyer.mobile && (
                          <div className="flex items-center justify-center gap-2">
                            <Phone className="w-4 h-4 text-green-600" />
                            <span className="font-medium text-green-600">{lawyer.mobile}</span>
                          </div>
                        )}
                        {lawyer.email && (
                          <div className="flex items-center justify-center gap-2">
                            <Mail className="w-4 h-4 text-primary" />
                            <span className="font-medium text-primary">{lawyer.email}</span>
                          </div>
                        )}
                        <div className="flex items-center justify-center gap-2">
                          <span className="font-medium">{t("lawyers.specialization")}</span>
                          <span className="text-xs">
                            {language === "ar" ? lawyer.specialization : lawyer.specializationEn}
                          </span>
                        </div>
                        <div className="flex items-center justify-center gap-2">
                          <Calendar className="w-4 h-4 text-primary" />
                          <span>
                            {t("lawyers.experience")} {language === "ar" ? lawyer.experience : lawyer.experienceEn}
                          </span>
                        </div>
                      </div>

                      <div className="pt-4 flex gap-2">
                        <Button asChild className="flex-1 bg-primary hover:bg-primary/90">
                          <Link href={`/lawyers/${lawyer.id}`}>{t("common.view")}</Link>
                        </Button>
                        <Button asChild variant="outline" className="flex-1">
                          <a href={`tel:${lawyer.phone}`}>{t("lawyers.contact")}</a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        {filteredLawyers.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-lg font-semibold mb-2">
              {language === "ar" ? "لم يتم العثور على محامين" : "No lawyers found"}
            </h3>
            <p className="text-muted-foreground">
              {language === "ar" ? "جرب تغيير مصطلحات البحث أو الفلتر" : "Try changing your search terms or filter"}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
