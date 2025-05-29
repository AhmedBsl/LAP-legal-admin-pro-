"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage } from "@/components/language-provider"
import { toast } from "@/hooks/use-toast"

export default function QuestionsPage() {
  const { t } = useLanguage()
  const [question, setQuestion] = useState("")
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!question.trim() || !email.trim() || !name.trim()) return

    setIsSubmitting(true)

    try {
      // Simulate sending email to legaladminpro@gmail.com
      await new Promise((resolve) => setTimeout(resolve, 1000))

      const emailData = {
        to: "legaladminpro@gmail.com",
        subject: `استشارة قانونية من ${name}`,
        body: `
          الاسم: ${name}
          البريد الإلكتروني: ${email}
          السؤال: ${question}
        `,
      }

      console.log("Sending question email:", emailData)

      toast({
        title: t("questions.success"),
        description: t("questions.success.desc"),
      })

      setQuestion("")
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
            <CardTitle className="text-3xl font-bold text-primary mb-4">{t("questions.title")}</CardTitle>
            <p className="text-muted-foreground text-lg">{t("questions.subtitle")}</p>
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
                <Label htmlFor="question">{t("questions.placeholder")}</Label>
                <Textarea
                  id="question"
                  placeholder={t("questions.placeholder")}
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  className="min-h-[200px] text-lg border-2 focus:border-primary"
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-lg py-6"
                disabled={isSubmitting || !question.trim() || !email.trim() || !name.trim()}
              >
                {isSubmitting ? t("common.loading") : t("questions.submit")}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
