"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowRight, Download, Eye, FileText, Search, Filter, Check } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { useLanguage } from "@/components/language-provider";
import { documentsData } from "@/lib/documents-data";
import Link from "next/link";

interface Document {
  id: number;
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
  category: string;
  categoryEn: string;
  type: string;
  
  requiredFor: string[];
  requiredForEn: string[];
  pdfUrl: string;
  price: number;
}

export default function DocumentsPage() {
  const { t, language } = useLanguage();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [documents, setDocuments] = useState<Document[]>(documentsData);

  const categories = [
    { value: "all", label: language === "ar" ? "جميع الفئات" : "All Categories" },
    { value: "statement", label: language === "ar" ? "تصريح" : "Statement" },
    { value: "written-request", label: language === "ar" ? "طلب خطي" : "Written Request" },
    { value: "certificate", label: language === "ar" ? "شهادة" : "Certificate" },
    { value: "request", label: language === "ar" ? "طلب" : "Request" }
  ];

  // Add translations for document types
  const documentTranslations = {
    statement: {
      ar: "تصريح",
      en: "Statement"
    },
    "written-request": {
      ar: "طلب خطي",
      en: "Written Request"
    },
    certificate: {
      ar: "شهادة",
      en: "Certificate"
    },
    request: {
      ar: "طلب",
      en: "Request"
    }
  };

  // Update filteredDocuments with type-based filtering
  const filteredDocuments = documents.filter((doc) => {
    const title = language === "ar" ? doc.title : doc.titleEn;
    const description = language === "ar" ? doc.description : doc.descriptionEn;
    const category = language === "ar" ? doc.category : doc.categoryEn;

    const matchesSearch =
      title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      description.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "all" ||
      category.toLowerCase().includes(selectedCategory.toLowerCase()) ||
      (selectedCategory === "statement" && (language === "ar" ? title.includes("تصريح") : title.includes("Statement"))) ||
      (selectedCategory === "written-request" && (language === "ar" ? title.includes("طلب خطي") : title.includes("Written Request"))) ||
      (selectedCategory === "certificate" && (language === "ar" ? title.includes("شهادة") : title.includes("Certificate"))) ||
      (selectedCategory === "request" && (language === "ar" ? title.includes("طلب") : title.includes("Request")));

    return matchesSearch && matchesCategory;
  });

  const handleDownload = (pdfUrl: string, fileName: string) => {
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = fileName;
    link.click();
  };

  return (
    <div className="min-h-screen py-20">
      <div className="container px-4">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">{t("documents.title")}</h1>
          <Button variant="outline" asChild>
            <Link href="/">
              <ArrowRight className="w-4 h-4 ml-2" />
              {t("documents.back")}
            </Link>
          </Button>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder={language === "ar" ? "ابحث عن المستندات..." : "Search documents..."}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
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

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filteredDocuments.map((doc) => (
            <Card key={doc.id} className="group hover:shadow-lg transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <Badge
                    variant="secondary"
                    className="bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200"
                  >
                    {language === "ar" ? doc.category : doc.categoryEn}
                  </Badge>
                  <div className="bg-gray-800 text-white px-2 py-1 rounded text-xs font-medium">{doc.type}</div>
                </div>
                <CardTitle className="text-xl">{language === "ar" ? doc.title : doc.titleEn}</CardTitle>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {doc.description}
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-amber-50 dark:bg-amber-950/20 rounded-lg p-4">
                  <div className="bg-white dark:bg-gray-800 rounded p-4 min-h-[120px] border flex items-center justify-center">
                    <FileText className="w-12 h-12 text-muted-foreground" />
                  </div>
                </div>

                {/* Updated price and buttons section to match books style */}
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-primary">
                    {doc.price} {t("books.price")}
                  </span>
                  <div className="flex gap-2">
                    <Button asChild variant="outline" size="sm">
                      <Link href={`/documents/${doc.id}`}>
                        <Eye className="w-4 h-4 ml-2" />
                        {t("common.view")}
                      </Link>
                    </Button>
                    <Button
                      className="bg-primary hover:bg-primary/90"
                      size="sm"
                      onClick={() => handleDownload(doc.pdfUrl, `${language === "ar" ? doc.title : doc.titleEn}.pdf`)}
                    >
                      <Download className="w-4 h-4 ml-2" />
                      {t("documents.download") || "Download"}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredDocuments.length === 0 && (
          <div className="text-center py-12">
            <FileText className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">
              {language === "ar" ? "لم يتم العثور على مستندات" : "No documents found"}
            </h3>
            <p className="text-muted-foreground">
              {language === "ar" ? "جرب تغيير مصطلحات البحث أو الفلتر" : "Try changing your search terms or filter"}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
