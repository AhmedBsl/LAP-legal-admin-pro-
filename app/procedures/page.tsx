"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { FileText, Download, Eye, Search, Filter } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { proceduresData } from "@/lib/procedures-data"
import Link from "next/link"

export default function ProceduresPage() {
  const { t, language } = useLanguage()
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const categories = [
    { value: "all", label: language === "ar" ? "جميع الفئات" : "All Categories" },
    { value: "companies", label: language === "ar" ? "الشركات" : "Companies" },
    { value: "personal", label: language === "ar" ? "الأحوال الشخصية" : "Personal Status" },
    { value: "realestate", label: language === "ar" ? "العقارات" : "Real Estate" },
    { value: "employment", label: language === "ar" ? "العمل" : "Employment" },
    { value: "commerce", label: language === "ar" ? "التجارة" : "Commerce" },
    { value: "judiciary", label: language === "ar" ? "القضاء" : "Judiciary" },
  ]

  const filteredProcedures = proceduresData.filter((procedure) => {
    const title = language === "ar" ? procedure.title : procedure.titleEn
    const description = language === "ar" ? procedure.description : procedure.descriptionEn
    const category = language === "ar" ? procedure.category : procedure.categoryEn

    const matchesSearch =
      title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      category.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesCategory =
      selectedCategory === "all" ||
      (selectedCategory === "companies" && (category.includes("الشركات") || category.includes("Companies"))) ||
      (selectedCategory === "personal" &&
        (category.includes("الأحوال الشخصية") || category.includes("Personal Status"))) ||
      (selectedCategory === "realestate" && (category.includes("العقارات") || category.includes("Real Estate"))) ||
      (selectedCategory === "employment" && (category.includes("العمل") || category.includes("Employment"))) ||
      (selectedCategory === "commerce" && (category.includes("التجارة") || category.includes("Commerce"))) ||
      (selectedCategory === "judiciary" && (category.includes("القضاء") || category.includes("Judiciary")))

    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen py-20">
      <div className="container px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-4">{t("procedures.title")}</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{t("procedures.subtitle")}</p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder={language === "ar" ? "ابحث عن الإجراءات..." : "Search procedures..."}
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProcedures.map((procedure) => (
            <Card key={procedure.id} className="group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="bg-amber-50 dark:bg-amber-950/20 rounded-lg p-6 mb-4">
                  <div className="bg-gray-800 text-white px-2 py-1 rounded text-xs font-medium mb-4 w-fit">
                    {procedure.type}
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded p-4 min-h-[200px] border flex items-center justify-center">
                    <FileText className="w-16 h-16 text-muted-foreground" />
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-2">{language === "ar" ? procedure.title : procedure.titleEn}</h3>
                <p className="text-muted-foreground mb-4">
                  {language === "ar" ? procedure.description : procedure.descriptionEn}
                </p>

                <div className="flex gap-2">
                  <Button asChild className="flex-1 bg-primary hover:bg-primary/90">
                    <Link href={`/procedures/${procedure.id}`}>
                      <Eye className="w-4 h-4 ml-2" />
                      {t("procedures.view")}
                    </Link>
                  </Button>
                  <Button variant="outline" size="icon">
                    <Download className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredProcedures.length === 0 && (
          <div className="text-center py-12">
            <FileText className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">
              {language === "ar" ? "لم يتم العثور على إجراءات" : "No procedures found"}
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
