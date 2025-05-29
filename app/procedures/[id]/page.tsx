"use client"

import { useParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Download, Clock, DollarSign, FileText, CheckCircle } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { proceduresData } from "@/lib/procedures-data"

export default function ProcedureDetailPage() {
  const params = useParams()
  const router = useRouter()
  const { t, language } = useLanguage()
  const procedureId = Number.parseInt(params.id as string)

  const procedure = proceduresData.find((p) => p.id === procedureId)

  if (!procedure) {
    return (
      <div className="min-h-screen py-20">
        <div className="container px-4 text-center">
          <h1 className="text-2xl font-bold mb-4">Procedure not found</h1>
          <Button onClick={() => router.back()}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            {t("common.back")}
          </Button>
        </div>
      </div>
    )
  }

  const handleDownload = () => {
    // Simulate PDF download
    const link = document.createElement("a")
    link.href = "/placeholder.pdf"
    link.download = `${language === "ar" ? procedure.title : procedure.titleEn}.pdf`
    link.click()
  }

  return (
    <div className="min-h-screen py-20">
      <div className="container px-4 max-w-4xl mx-auto">
        <Button variant="outline" onClick={() => router.back()} className="mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          {t("procedures.back")}
        </Button>

        <div className="space-y-8">
          {/* Header */}
          <Card>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-3xl font-bold mb-2">
                    {language === "ar" ? procedure.title : procedure.titleEn}
                  </CardTitle>
                  <p className="text-muted-foreground text-lg">
                    {language === "ar" ? procedure.description : procedure.descriptionEn}
                  </p>
                </div>
                <Button onClick={handleDownload} className="bg-primary hover:bg-primary/90">
                  <Download className="w-4 h-4 mr-2" />
                  {t("procedures.download")}
                </Button>
              </div>
            </CardHeader>
          </Card>

          {/* Quick Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6 text-center">
                <Clock className="w-8 h-8 text-primary mx-auto mb-2" />
                <h3 className="font-semibold mb-1">المدة المتوقعة</h3>
                <p className="text-muted-foreground">
                  {language === "ar" ? procedure.estimatedTime : procedure.estimatedTimeEn}
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <DollarSign className="w-8 h-8 text-primary mx-auto mb-2" />
                <h3 className="font-semibold mb-1">التكلفة</h3>
                <p className="text-muted-foreground">{language === "ar" ? procedure.cost : procedure.costEn}</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <FileText className="w-8 h-8 text-primary mx-auto mb-2" />
                <h3 className="font-semibold mb-1">الفئة</h3>
                <p className="text-muted-foreground">{language === "ar" ? procedure.category : procedure.categoryEn}</p>
              </CardContent>
            </Card>
          </div>

          {/* Description */}
          <Card>
            <CardHeader>
              <CardTitle>الوصف التفصيلي</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                {language === "ar" ? procedure.fullDescription : procedure.fullDescriptionEn}
              </p>
            </CardContent>
          </Card>

          {/* Steps */}
          <Card>
            <CardHeader>
              <CardTitle>الخطوات المطلوبة</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {(language === "ar" ? procedure.steps : procedure.stepsEn).map((step, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                    <p className="text-muted-foreground pt-1">{step}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Required Documents */}
          <Card>
            <CardHeader>
              <CardTitle>الوثائق المطلوبة</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {(language === "ar" ? procedure.requiredDocuments : procedure.requiredDocumentsEn).map((doc, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <p className="text-muted-foreground">{doc}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
