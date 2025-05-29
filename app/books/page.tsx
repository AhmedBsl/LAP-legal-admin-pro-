"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Filter } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { booksData } from "@/lib/books-data"
import Link from "next/link"

export default function BooksPage() {
  const { t, language } = useLanguage()
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const categories = [
    { value: "all", label: language === "ar" ? "جميع الفئات" : "All Categories" },
    { value: "court", label: t("books.categories.court") },
    { value: "civil", label: t("books.categories.civil") },
    { value: "criminal", label: t("books.categories.criminal") },
    { value: "commercial", label: t("books.categories.commercial") },
    { value: "lawyers", label: t("books.categories.lawyers") },
    { value: "judges", label: t("books.categories.judges") },
    { value: "constitutional", label: language === "ar" ? "القانون الدستوري" : "Constitutional Law" },
    { value: "financial", label: language === "ar" ? "القانون المالي" : "Financial Law" },
    { value: "fundamentals", label: language === "ar" ? "أصول القانون" : "Legal Fundamentals" },
    { value: "administrative", label: language === "ar" ? "القانون الإداري" : "Administrative Law" },
    { value: "realestate", label: language === "ar" ? "القانون العقاري" : "Real Estate Law" },
    { value: "intellectual", label: language === "ar" ? "الملكية الفكرية" : "Intellectual Property" },
  ]

  const filteredBooks = booksData.filter((book) => {
    const title = language === "ar" ? book.title : book.titleEn
    const author = language === "ar" ? book.author : book.authorEn
    const category = language === "ar" ? book.category : book.categoryEn

    const matchesSearch =
      title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      author.toLowerCase().includes(searchTerm.toLowerCase()) ||
      category.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesCategory =
      selectedCategory === "all" ||
      (selectedCategory === "lawyers" && (category.includes("المحاماة") || category.includes("Law Practice"))) ||
      (selectedCategory === "judges" && (category.includes("القضاء") || category.includes("Judiciary"))) ||
      (selectedCategory === "constitutional" &&
        (category.includes("الدستوري") || category.includes("Constitutional"))) ||
      (selectedCategory === "financial" && (category.includes("المالي") || category.includes("Financial"))) ||
      (selectedCategory === "administrative" &&
        (category.includes("الإداري") || category.includes("Administrative"))) ||
      (selectedCategory === "realestate" && (category.includes("العقاري") || category.includes("Real Estate"))) ||
      (selectedCategory === "intellectual" &&
        (category.includes("الملكية الفكرية") || category.includes("Intellectual Property")))

    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen py-20">
      <div className="container px-4">
        <h1 className="text-3xl font-bold text-center mb-8">{t("books.title")}</h1>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder={language === "ar" ? "ابحث عن الكتب..." : "Search books..."}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pr-10"
            />
          </div>
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-muted-foreground" />
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-[200px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category.value} value={category.value}>
                    {category.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBooks.map((book) => (
            <Card key={book.id} className="group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-0">
                <div className="bg-amber-50 dark:bg-amber-950/20 p-6">
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-4 mb-4 min-h-[300px] flex items-center justify-center">
                    <img
                      src={book.image || "/placeholder.svg"}
                      alt={language === "ar" ? book.title : book.titleEn}
                      className="object-contain"
                      width="250"
                      height="300"
                    />
                  </div>

                  <div className="text-center space-y-3">
                    <h3 className="font-bold text-lg">{language === "ar" ? book.title : book.titleEn}</h3>
                    <p className="text-sm text-muted-foreground">{language === "ar" ? book.author : book.authorEn}</p>

                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-primary">
                        {book.price} {t("books.price")}
                      </span>
                      <div className="flex gap-2">
                        <Button asChild variant="outline" size="sm">
                          <Link href={`/books/${book.id}`}>{t("common.view")}</Link>
                        </Button>
                        <Button className="bg-primary hover:bg-primary/90" size="sm">
                          {t("books.buy")}
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredBooks.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-lg font-semibold mb-2">
              {language === "ar" ? "لم يتم العثور على كتب" : "No books found"}
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
