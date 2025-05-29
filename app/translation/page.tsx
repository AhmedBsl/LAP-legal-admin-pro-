"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Upload } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { toast } from "@/hooks/use-toast"

const translations = {
  "ar": {
    "documents.description": "وصف المستند",
    "translation.title": "الترجمة",
    "translation.subtitle": "احصل على ترجمة احترافية لمستنداتك",
    "auth.name": "الاسم",
    "auth.email": "البريد الإلكتروني",
    "translation.language": "لغة الترجمة",
    "translation.language.placeholder": "اختر اللغة",
    "translation.language.english": "الإنجليزية",
    "translation.language.french": "الفرنسية",
    "translation.language.spanish": "الإسبانية",
    "translation.language.german": "الألمانية",
    "translation.language.italian": "الإيطالية",
    "translation.file": "الملف",
    "translation.file.choose": "اختر ملفًا",
    "translation.file.types": "ملفات PDF, DOC, DOCX, TXT مدعومة",
    "translation.file.selected": "تم اختيار الملف:",
    "translation.submit": "إرسال",
    "common.loading": "جار التحميل...",
    "translation.success": "تم الإرسال بنجاح!",
    "translation.success.desc": "سيتم التواصل معك في أقرب وقت ممكن.",
    "questions.error": "خطأ",
    "questions.error.desc": "حدث خطأ أثناء الإرسال. يرجى المحاولة مرة أخرى.",
  },
  "en": {
    "documents.description": "Document Description",
    "translation.title": "Translation",
    "translation.subtitle": "Get a professional translation for your documents",
    "auth.name": "Name",
    "auth.email": "Email",
    "translation.language": "Translation Language",
    "translation.language.placeholder": "Choose Language",
    "translation.language.english": "English",
    "translation.language.french": "French",
    "translation.language.spanish": "Spanish",
    "translation.language.german": "German",
    "translation.language.italian": "Italian",
    "translation.file": "File",
    "translation.file.choose": "Choose a file",
    "translation.file.types": "Supported files: PDF, DOC, DOCX, TXT",
    "translation.file.selected": "Selected file:",
    "translation.submit": "Submit",
    "common.loading": "Loading...",
    "translation.success": "Successfully submitted!",
    "translation.success.desc": "We will contact you as soon as possible.",
    "questions.error": "Error",
    "questions.error.desc": "An error occurred while submitting. Please try again.",
  },
};

export default function TranslationPage() {
  const { t } = useLanguage()
  const [selectedLanguage, setSelectedLanguage] = useState("")
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setSelectedFile(file)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!selectedLanguage || !selectedFile || !email.trim() || !name.trim()) return

    setIsSubmitting(true)

    try {
      // Simulate sending email with file to legaladminpro@gmail.com
      await new Promise((resolve) => setTimeout(resolve, 1000))

      const emailData = {
        to: "legaladminpro@gmail.com",
        subject: `طلب ترجمة من ${name}`,
        body: `
          الاسم: ${name}
          البريد الإلكتروني: ${email}
          لغة الترجمة: ${selectedLanguage}
          اسم الملف: ${selectedFile.name}
          حجم الملف: ${(selectedFile.size / 1024 / 1024).toFixed(2)} MB
        `,
        attachment: selectedFile,
      }

      console.log("Sending translation request:", emailData)

      toast({
        title: t("translation.success"),
        description: t("translation.success.desc"),
      })

      setSelectedLanguage("")
      setSelectedFile(null)
      setEmail("")
      setName("")
    } catch (error) {
      toast({
        title: t("questions.error"),
        description: t("questions.error.desc"),
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-950/20 dark:to-background py-20">
      <div className="container px-4 max-w-2xl mx-auto">
        <Card className="shadow-xl border-0">
          <CardHeader className="text-center pb-8">
            <CardTitle className="text-3xl font-bold text-primary mb-4">{t("translation.title")}</CardTitle>
            <p className="text-muted-foreground text-lg">{t("translation.subtitle")}</p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">{t("auth.name")}</Label>
                  <Input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="border-2 focus:border-primary"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">{t("auth.email")}</Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border-2 focus:border-primary"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="language" className="text-lg font-medium">
                  {t("translation.language")}
                </Label>
                <Select value={selectedLanguage} onValueChange={setSelectedLanguage} required>
                  <SelectTrigger className="text-lg border-2 focus:border-primary">
                    <SelectValue placeholder={t("translation.language.placeholder")} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="english">{t("translation.language.english")}</SelectItem>
                    <SelectItem value="french">{t("translation.language.french")}</SelectItem>
                    <SelectItem value="spanish">{t("translation.language.spanish")}</SelectItem>
                    <SelectItem value="german">{t("translation.language.german")}</SelectItem>
                    <SelectItem value="italian">{t("translation.language.italian")}</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="file" className="text-lg font-medium">
                  {t("translation.file")}
                </Label>
                <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-8 text-center hover:border-primary/50 transition-colors">
                  <Upload className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                  <Input
                    id="file"
                    type="file"
                    onChange={handleFileChange}
                    className="hidden"
                    accept=".pdf,.doc,.docx,.txt"
                    required
                  />
                  <Label htmlFor="file" className="cursor-pointer">
                    <span className="text-lg font-medium text-primary hover:text-primary/80">
                      {t("translation.file.choose")}
                    </span>
                    <p className="text-sm text-muted-foreground mt-2">{t("translation.file.types")}</p>
                  </Label>
                  {selectedFile && (
                    <p className="mt-4 text-sm font-medium text-green-600">
                      {t("translation.file.selected")} {selectedFile.name}
                    </p>
                  )}
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-lg py-6"
                disabled={isSubmitting || !selectedLanguage || !selectedFile || !email.trim() || !name.trim()}
              >
                {isSubmitting ? t("common.loading") : t("translation.submit")}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
