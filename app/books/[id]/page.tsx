"use client"

import { useParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, ShoppingCart, BookOpen, Calendar, User } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { booksData } from "@/lib/books-data"

export default function BookDetailPage() {
  const params = useParams()
  const router = useRouter()
  const { t, language } = useLanguage()
  const bookId = Number.parseInt(params.id as string)

  const book = booksData.find((b) => b.id === bookId)

  if (!book) {
    return (
      <div className="min-h-screen py-20">
        <div className="container px-4 text-center">
          <h1 className="text-2xl font-bold mb-4">Book not found</h1>
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
      <div className="container px-4 max-w-6xl mx-auto">
        <Button variant="outline" onClick={() => router.back()} className="mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          {t("books.back")}
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Book Image */}
          <div className="space-y-6">
            <Card>
              <CardContent className="p-8">
                <div className="bg-amber-50 dark:bg-amber-950/20 rounded-lg p-8">
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-6 min-h-[400px] flex items-center justify-center">
                    <img
                      src={book.image || "/placeholder.svg"}
                      alt={language === "ar" ? book.title : book.titleEn}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Book Details */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-3xl font-bold">{language === "ar" ? book.title : book.titleEn}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4 text-primary" />
                    <span className="font-medium">{t("books.author")}</span>
                    <span>{language === "ar" ? book.author : book.authorEn}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-primary" />
                    <span className="font-medium">{t("books.pages")}</span>
                    <span>{book.pages}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span className="font-medium">{t("books.year")}</span>
                    <span>{book.year}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium">{t("books.category")}</span>
                    <span>{language === "ar" ? book.category : book.categoryEn}</span>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h3 className="font-bold text-lg mb-3">{t("books.description")}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {language === "ar" ? book.description : book.descriptionEn}
                  </p>
                </div>

                <div className="border-t pt-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl font-bold text-primary">
                      {book.price} {t("books.price")}
                    </span>
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-lg py-6">
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    {t("books.buy")}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
