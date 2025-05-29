"use client"

import { useParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Download, FileText, CheckCircle, AlertCircle } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { documentsData } from "@/lib/documents-data"

export default function DocumentDetailPage() {
  const params = useParams()
  const router = useRouter()
  const { t, language } = useLanguage()
  const documentId = Number.parseInt(params.id as string)

  const document = documentsData.find((d) => d.id === documentId)

  console.log("Document ID from params:", documentId);
  console.log("Document:", document);

 

 const handleDownload = () => {
    if (document) {
      window.location.href = document.wordUrl;
    }
  };

  return (
    <div className="min-h-screen py-20">
      <div className="container px-4 max-w-4xl mx-auto">
        <Button variant="outline" onClick={() => router.back()} className="mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          {t("documents.back")}
        </Button>

        {document ? (
          <div className="space-y-8">
            {/* Header */}
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Badge
                        variant="secondary"
                        className="bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200"
                      >
                        {language === "ar" ? document.category : document.categoryEn}
                      </Badge>
                      <div className="bg-gray-800 text-white px-2 py-1 rounded text-xs font-medium">{document.type}</div>
                    </div>
                    <CardTitle className="text-3xl font-bold">
                      {language === "ar" ? document.title : document.titleEn}
                    </CardTitle>
                  </div>
                  <a
                    href={document.wordUrl}
                    download
                    className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    {t("documents.download")}
                  </a>
                </div>
                <p className="text-muted-foreground text-lg">
                  {language === "ar" ? document.description : document.descriptionEn}
                </p>
              </CardHeader>
            </Card>

            {/* Required Fields */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  {language === "ar" ? "الحقول المطلوبة للتعبئة" : "Required Fields to Fill"}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {(language === "ar" ? document.fillableFields : document.fillableFieldsEn).map((field, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                      <div className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </div>
                      <span className="font-medium">{field}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Usage Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-blue-600" />
                  {language === "ar" ? "معلومات الاستخدام" : "Usage Information"}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-2">{language === "ar" ? "الغرض من الاستخدام:" : "Purpose of Use:"}</h4>
                  <p className="text-muted-foreground">{language === "ar" ? document.usage : document.usageEn}</p>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">
                    {language === "ar" ? "الجهات التي تتطلب هذا المستند:" : "Entities that require this document:"}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {(language === "ar" ? document.requiredFor : document.requiredForEn).map((entity, index) => (
                      <Badge key={index} variant="outline" className="text-sm">
                        {entity}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Instructions */}
            <Card>
              <CardHeader>
                <CardTitle>{language === "ar" ? "تعليمات التعبئة" : "Filling Instructions"}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-1">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold">{language === "ar" ? "تحميل النموذج" : "Download the Form"}</h4>
                      <p className="text-muted-foreground">
                        {language === "ar"
                          ? "انقر على زر التحميل للحصول على ملف PDF القابل للتعبئة"
                          : "Click the download button to get the fillable PDF file"}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-1">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold">{language === "ar" ? "تعبئة البيانات" : "Fill in the Data"}</h4>
                      <p className="text-muted-foreground">
                        {language === "ar"
                          ? "املأ جميع الحقول المطلوبة بالمعلومات الصحيحة والدقيقة"
                          : "Fill in all required fields with correct and accurate information"}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-1">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold">{language === "ar" ? "الطباعة والتوقيع" : "Print and Sign"}</h4>
                      <p className="text-muted-foreground">
                        {language === "ar"
                          ? "اطبع النموذج المعبأ ووقع عليه في الأماكن المحددة"
                          : "Print the filled form and sign it in the designated places"}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-1">
                      4
                    </div>
                    <div>
                      <h4 className="font-semibold">{language === "ar" ? "التقديم" : "Submit"}</h4>
                      <p className="text-muted-foreground">
                        {language === "ar"
                          ? "قدم النموذج إلى الجهة المختصة مع المستندات المطلوبة"
                          : "Submit the form to the relevant authority with required documents"}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        ) : (
          <div>Document not found</div>
        )}
      </div>
    </div>
  );
}
