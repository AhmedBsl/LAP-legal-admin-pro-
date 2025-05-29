"use client"

import { useParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Phone, MapPin, Mail, Calendar, Star, Building, Award } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { lawyersData } from "@/lib/lawyers-data"

export default function LawyerDetailPage() {
  const params = useParams()
  const router = useRouter()
  const { t, language } = useLanguage()
  const lawyerId = Number.parseInt(params.id as string)

  const lawyer = lawyersData.find((l) => l.id === lawyerId)

  if (!lawyer) {
    return (
      <div className="min-h-screen py-20">
        <div className="container px-4 text-center">
          <h1 className="text-2xl font-bold mb-4">Lawyer not found</h1>
          <Button onClick={() => router.back()}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            {t("common.back")}
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-20">
      <div className="container px-4 max-w-4xl mx-auto">
        <Button variant="outline" onClick={() => router.back()} className="mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          {language === "ar" ? "العودة للمحامين" : "Back to Lawyers"}
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Lawyer Image and Basic Info */}
          <div className="lg:col-span-1">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="bg-amber-50 dark:bg-amber-950/20 rounded-lg p-6">
                  {lawyer.isNotable && (
                    <div className="flex justify-center mb-4">
                      <Badge
                        variant="secondary"
                        className="bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200"
                      >
                        <Star className="w-3 h-3 mr-1" />
                        {language === "ar" ? "محامي بارز" : "Notable Lawyer"}
                      </Badge>
                    </div>
                  )}

                  <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-primary">
                    <img
                      src={lawyer.image || "/placeholder.svg"}
                      alt={language === "ar" ? lawyer.name : lawyer.nameEn}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <h1 className="text-2xl font-bold text-primary mb-2">
                    {language === "ar" ? lawyer.name : lawyer.nameEn}
                  </h1>
                  <p className="text-muted-foreground mb-6">
                    {language === "ar" ? lawyer.description : lawyer.descriptionEn}
                  </p>

                  <div className="space-y-4">
                    <Button asChild className="w-full bg-primary hover:bg-primary/90">
                      <a href={`tel:${lawyer.phone}`}>
                        <Phone className="w-4 h-4 mr-2" />
                        {t("lawyers.contact")}
                      </a>
                    </Button>
                    {lawyer.email && (
                      <Button asChild variant="outline" className="w-full">
                        <a href={`mailto:${lawyer.email}`}>
                          <Mail className="w-4 h-4 mr-2" />
                          {language === "ar" ? "إرسال بريد إلكتروني" : "Send Email"}
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Detailed Information */}
          <div className="lg:col-span-2 space-y-6">
            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle>{language === "ar" ? "معلومات الاتصال" : "Contact Information"}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium">{language === "ar" ? "الهاتف" : "Phone"}</p>
                      <p className="text-muted-foreground">{lawyer.phone}</p>
                    </div>
                  </div>
                  {lawyer.mobile && (
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-green-600" />
                      <div>
                        <p className="font-medium">{language === "ar" ? "الجوال" : "Mobile"}</p>
                        <p className="text-muted-foreground">{lawyer.mobile}</p>
                      </div>
                    </div>
                  )}
                  {lawyer.email && (
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-primary" />
                      <div>
                        <p className="font-medium">{language === "ar" ? "البريد الإلكتروني" : "Email"}</p>
                        <p className="text-muted-foreground">{lawyer.email}</p>
                      </div>
                    </div>
                  )}
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <p className="font-medium">{language === "ar" ? "العنوان" : "Address"}</p>
                      <p className="text-muted-foreground">{language === "ar" ? lawyer.location : lawyer.locationEn}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Professional Information */}
            <Card>
              <CardHeader>
                <CardTitle>{language === "ar" ? "المعلومات المهنية" : "Professional Information"}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <Building className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium">{t("lawyers.specialization")}</p>
                      <p className="text-muted-foreground">
                        {language === "ar" ? lawyer.specialization : lawyer.specializationEn}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium">{t("lawyers.experience")}</p>
                      <p className="text-muted-foreground">
                        {language === "ar" ? lawyer.experience : lawyer.experienceEn}
                      </p>
                    </div>
                  </div>
                  {lawyer.establishedYear && (
                    <div className="flex items-center gap-3">
                      <Award className="w-5 h-5 text-primary" />
                      <div>
                        <p className="font-medium">{language === "ar" ? "سنة التأسيس" : "Established Year"}</p>
                        <p className="text-muted-foreground">{lawyer.establishedYear}</p>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Additional Information for Notable Lawyers */}
            {lawyer.additionalInfo && (
              <Card>
                <CardHeader>
                  <CardTitle>{language === "ar" ? "معلومات إضافية" : "Additional Information"}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {language === "ar" ? lawyer.additionalInfo : lawyer.additionalInfoEn}
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
