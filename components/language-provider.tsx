"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type Language = "ar" | "en"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations = {
  ar: {
    // Navigation
    "nav.home": "الصفحة الرئيسية",
    "nav.documents": "المحررات",
    "nav.procedures": "الإجراءات",
    "nav.translation": "الترجمة القانونية",
    "nav.books": "الكتب القانونية",
    "nav.lawyers": "المحامين",
    "nav.login": "تسجيل الدخول",

    // Common
    "common.loading": "جاري التحميل...",
    "common.submit": "إرسال",
    "common.cancel": "إلغاء",
    "common.save": "حفظ",
    "common.edit": "تعديل",
    "common.delete": "حذف",
    "common.view": "عرض",
    "common.download": "تحميل",
    "common.back": "رجوع",
    "common.next": "التالي",
    "common.previous": "السابق",
    "common.search": "بحث",
    "common.filter": "تصفية",
    "common.all": "الكل",
    "common.select": "اختيار",
    "common.choose": "اختر",
    "common.upload": "رفع",
    "common.send": "إرسال",
    "common.success": "نجح",
    "common.error": "خطأ",
    "common.warning": "تحذير",
    "common.info": "معلومات",

    // Home page
    "home.hero.title": "LEGAL-ADMIN-PRO",
    "home.hero.subtitle": "نقدم لك حلول رقمية متكاملة لتلبية إحتياجاتك القانونية و الإدارية بكل إحتراف و سهولة",
    "home.hero.cta1": "ابدأ الآن",
    "home.hero.cta2": "اطرح سؤالاً",
    "home.services.title": "خدماتنا",
    "home.services.subtitle": "نقدم مجموعة شاملة من الخدمات القانونية والإدارية لتلبية جميع احتياجاتك",
    "home.services.documents": "المحررات الإدارية",
    "home.services.documents.desc": "وفر وقتك مع legal admin pro محررات إدارية جاهزة",
    "home.services.translation": "خدمة الترجمة القانونية",
    "home.services.translation.desc": "احصل على ترجمة قانونية دقيقة و موثوقة مع خدماتنا المتميزة",
    "home.services.procedures": "الإجراءات القانونية",
    "home.services.procedures.desc": "واحة التعقيد القانوني بثقة مع خدماتنا للإجراءات القانونية",
    "home.services.books": "الكتب",
    "home.services.books.desc": "زود مكتبتك القانونية و أحدث و أهم المراجع في مختلف التخصصات القانونية",
    "home.services.lawyers": "المحامين",
    "home.services.lawyers.desc": "نقدم لك كادر محامي مختار بعناية فائقة متخصصين",
    "home.services.questions": "استشارات قانونية",
    "home.services.questions.desc": "احصل على استشارة قانونية من خبرائنا",
    "home.services.discover": "اكتشف المزيد",
    "home.cta.title": "هل تحتاج إلى مساعدة قانونية؟",
    "home.cta.subtitle": "فريقنا من الخبراء القانونيين جاهز لمساعدتك في جميع احتياجاتك القانونية والإدارية",
    "home.cta.button": "ابدأ الآن",

    // Questions
    "questions.title": "اطرح سؤال الذي يحيرك",
    "questions.subtitle": "اكتب السؤال في الخانة و انتظار الرد",
    "questions.placeholder": "السؤال؟",
    "questions.submit": "ارسال",
    "questions.success": "تم إرسال السؤال بنجاح",
    "questions.success.desc": "سنقوم بالرد عليك في أقرب وقت ممكن",
    "questions.error": "خطأ في الإرسال",
    "questions.error.desc": "حدث خطأ أثناء إرسال السؤال، يرجى المحاولة مرة أخرى",

    // Translation
    "translation.title": "الترجمة",
    "translation.subtitle": "ادخل البيانات من اجل الترجمة",
    "translation.language": "لغة الترجمة",
    "translation.language.placeholder": "اختر لغة الترجمة",
    "translation.language.english": "الإنجليزية",
    "translation.language.french": "الفرنسية",
    "translation.language.spanish": "الإسبانية",
    "translation.language.german": "الألمانية",
    "translation.language.italian": "الإيطالية",
    "translation.file": "ملف مراد ترجمته",
    "translation.file.choose": "اختر ملف للترجمة",
    "translation.file.types": "PDF, DOC, DOCX, TXT (حتى 10MB)",
    "translation.file.selected": "تم اختيار:",
    "translation.submit": "تأكيد الطلب",
    "translation.success": "تم إرسال طلب الترجمة بنجاح",
    "translation.success.desc": "سنقوم بترجمة الملف وإرساله إليك قريباً",

    // Documents
    "documents.title": "اختر الطلب الذي يناسبك",
    "documents.back": "ارجع الى انواع المحررات",
    "documents.view": "المعاينة",
    "documents.download": "تحميل",
    "documents.filter": "تصفية",

    // Procedures
    "procedures.title": "الإجراءات القانونية",
    "procedures.subtitle": "دليل شامل للإجراءات القانونية والإدارية في مختلف المجالات",
    "procedures.view": "معاينة",
    "procedures.download": "تحميل",
    "procedures.back": "العودة للإجراءات",

    // Lawyers
    "lawyers.title": "اختر المحامي بما يناسب مشكلتك",
    "lawyers.name": "بن تركية المختار",
    "lawyers.description": "محامي معتمد لدى المحكمة العليا",
    "lawyers.location": "المكان : شارع علي بومجل سيدي بلعباس",
    "lawyers.phone": "رقم الهاتف: 048742073",
    "lawyers.specialization": "التخصص:",
    "lawyers.experience": "سنوات الخبرة:",
    "lawyers.contact": "اتصل الآن",

    // Books
    "books.title": "استكشف جميع الكتب هنا",
    "books.search": "ابحث...",
    "books.price": "دج",
    "books.buy": "اشتري الآن",
    "books.author": "المؤلف:",
    "books.pages": "عدد الصفحات:",
    "books.year": "سنة النشر:",
    "books.category": "الفئة:",
    "books.description": "الوصف:",
    "books.back": "العودة للكتب",
    "books.categories.court": "المحكمة",
    "books.categories.civil": "المحكمة المدنية",
    "books.categories.criminal": "المحكمة الجنائية",
    "books.categories.commercial": "المحكمة التجارية",
    "books.categories.lawyers": "المحاماة",
    "books.categories.judges": "القضاء",
    "books.filter.all": "اختر الكل | ارفع الكل",
    "books.categories.constitutional": "القانون الدستوري",
    "books.categories.financial": "القانون المالي",
    "books.categories.fundamentals": "أصول القانون",
    "books.categories.administrative": "القانون الإداري",
    "books.categories.realestate": "القانون العقاري",
    "books.categories.intellectual": "الملكية الفكرية",

    // Auth
    "auth.login.title": "مرحبا بعودتك",
    "auth.login.subtitle": "سجل دخولك للحصول على الخدمات المتاحة",
    "auth.signup.title": "انشاء الحساب",
    "auth.signup.subtitle": "انشاء حساب للحصول على الخدمات المتاحة",
    "auth.email": "البريد الالكتروني",
    "auth.password": "كلمة السر",
    "auth.name": "الاسم",
    "auth.phone": "رقم الهاتف",
    "auth.login.button": "تسجيل الدخول",
    "auth.signup.button": "تسجيل الدخول",
    "auth.success": "تم بنجاح!",
    "auth.login.tab": "تسجيل الدخول",
    "auth.signup.tab": "إنشاء حساب",
    "auth.login.success": "تم تسجيل الدخول بنجاح",
    "auth.signup.success": "تم إنشاء الحساب بنجاح",

    // Footer
    "footer.title": "LEGAL-ADMIN-PRO",
    "footer.description": "نقدم لك حلول رقمية متكاملة لتلبية إحتياجاتك القانونية و الإدارية",
    "footer.contact": "معلومات الاتصال",
    "footer.email": "البريد الإلكتروني: legaladminpro@gmail.com",
    "footer.phone": "الهاتف: +213 48 74 20 73",
    "footer.services": "خدماتنا",
    "footer.services.documents": "المحررات الإدارية",
    "footer.services.translation": "الترجمة القانونية",
    "footer.services.procedures": "الإجراءات القانونية",
    "footer.services.books": "الكتب القانونية",
    "footer.copyright": "© 2024 Legal Admin Pro. جميع الحقوق محفوظة.",

    // Theme
    "theme.light": "فاتح",
    "theme.dark": "داكن",
    "theme.system": "النظام",

    // Language
    "language.arabic": "العربية",
    "language.english": "English",
  },
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.documents": "Documents",
    "nav.procedures": "Procedures",
    "nav.translation": "Legal Translation",
    "nav.books": "Legal Books",
    "nav.lawyers": "Lawyers",
    "nav.login": "Login",

    // Common
    "common.loading": "Loading...",
    "common.submit": "Submit",
    "common.cancel": "Cancel",
    "common.save": "Save",
    "common.edit": "Edit",
    "common.delete": "Delete",
    "common.view": "View",
    "common.download": "Download",
    "common.back": "Back",
    "common.next": "Next",
    "common.previous": "Previous",
    "common.search": "Search",
    "common.filter": "Filter",
    "common.all": "All",
    "common.select": "Select",
    "common.choose": "Choose",
    "common.upload": "Upload",
    "common.send": "Send",
    "common.success": "Success",
    "common.error": "Error",
    "common.warning": "Warning",
    "common.info": "Information",

    // Home page
    "home.hero.title": "LEGAL-ADMIN-PRO",
    "home.hero.subtitle":
      "We provide you with integrated digital solutions to meet your legal and administrative needs with professionalism and ease",
    "home.hero.cta1": "Get Started",
    "home.hero.cta2": "Ask a Question",
    "home.services.title": "Our Services",
    "home.services.subtitle":
      "We provide a comprehensive range of legal and administrative services to meet all your needs",
    "home.services.documents": "Administrative Documents",
    "home.services.documents.desc": "Save your time with legal admin pro ready administrative documents",
    "home.services.translation": "Legal Translation Service",
    "home.services.translation.desc": "Get accurate and reliable legal translation with our distinguished services",
    "home.services.procedures": "Legal Procedures",
    "home.services.procedures.desc": "Navigate legal complexity with confidence using our legal procedures services",
    "home.services.books": "Books",
    "home.services.books.desc":
      "Enhance your legal library with the latest and most important references in various legal specializations",
    "home.services.lawyers": "Lawyers",
    "home.services.lawyers.desc": "We provide you with carefully selected specialized lawyers",
    "home.services.questions": "Legal Consultations",
    "home.services.questions.desc": "Get legal consultation from our experts",
    "home.services.discover": "Discover More",
    "home.cta.title": "Need Legal Help?",
    "home.cta.subtitle": "Our team of legal experts is ready to help you with all your legal and administrative needs",
    "home.cta.button": "Get Started",

    // Questions
    "questions.title": "Ask the Question That Puzzles You",
    "questions.subtitle": "Write your question in the field and wait for the response",
    "questions.placeholder": "Question?",
    "questions.submit": "Send",
    "questions.success": "Question sent successfully",
    "questions.success.desc": "We will respond to you as soon as possible",
    "questions.error": "Sending error",
    "questions.error.desc": "An error occurred while sending the question, please try again",

    // Translation
    "translation.title": "Translation",
    "translation.subtitle": "Enter the data for translation",
    "translation.language": "Translation Language",
    "translation.language.placeholder": "Choose translation language",
    "translation.language.english": "English",
    "translation.language.french": "French",
    "translation.language.spanish": "Spanish",
    "translation.language.german": "German",
    "translation.language.italian": "Italian",
    "translation.file": "File to be translated",
    "translation.file.choose": "Choose file for translation",
    "translation.file.types": "PDF, DOC, DOCX, TXT (up to 10MB)",
    "translation.file.selected": "Selected:",

    // Documents
    "documents.title": "Choose the Request That Suits You",
    "documents.back": "Back to Documents Types",
    "documents.view": "Preview",
    "documents.download": "Download",
    "documents.filter": "Filter",

    // Procedures
    "procedures.title": "Legal Procedures",
    "procedures.subtitle": "Comprehensive guide to legal and administrative procedures in various fields",
    "procedures.view": "Preview",
    "procedures.download": "Download",
    "procedures.back": "Back to Procedures",

    // Lawyers
    "lawyers.title": "Choose the Lawyer That Suits Your Problem",
    "lawyers.name": "Ben Turkia Al-Mukhtar",
    "lawyers.description": "Certified lawyer at the Supreme Court",
    "lawyers.location": "Location: Ali Boumejel Street, Sidi Bel Abbes",
    "lawyers.phone": "Phone: 048742073",
    "lawyers.specialization": "Specialization:",
    "lawyers.experience": "Years of Experience:",
    "lawyers.contact": "Contact Now",

    // Books
    "books.title": "Explore All Books Here",
    "books.search": "Search...",
    "books.price": "DA",
    "books.buy": "Buy Now",
    "books.author": "Author:",
    "books.pages": "Pages:",
    "books.year": "Publication Year:",
    "books.category": "Category:",
    "books.description": "Description:",
    "books.back": "Back to Books",
    "books.categories.court": "Court",
    "books.categories.civil": "Civil Court",
    "books.categories.criminal": "Criminal Court",
    "books.categories.commercial": "Commercial Court",
    "books.categories.lawyers": "Law Practice",
    "books.categories.judges": "Judiciary",
    "books.filter.all": "Select All | Remove All",
    "books.categories.constitutional": "Constitutional Law",
    "books.categories.financial": "Financial Law",
    "books.categories.fundamentals": "Legal Fundamentals",
    "books.categories.administrative": "Administrative Law",
    "books.categories.realestate": "Real Estate Law",
    "books.categories.intellectual": "Intellectual Property",

    // Auth
    "auth.login.title": "Welcome Back",
    "auth.login.subtitle": "Login to access available services",
    "auth.signup.title": "Create Account",
    "auth.signup.subtitle": "Create an account to access available services",
    "auth.email": "Email",
    "auth.password": "Password",
    "auth.name": "Name",
    "auth.phone": "Phone Number",
    "auth.login.button": "Login",
    "auth.signup.button": "Sign Up",
    "auth.success": "Success!",
    "auth.login.tab": "Login",
    "auth.signup.tab": "Sign Up",
    "auth.login.success": "Login successful",
    "auth.signup.success": "Account created successfully",

    // Footer
    "footer.title": "LEGAL-ADMIN-PRO",
    "footer.description":
      "We provide you with integrated digital solutions to meet your legal and administrative needs",
    "footer.contact": "Contact Information",
    "footer.email": "Email: legaladminpro@gmail.com",
    "footer.phone": "Phone: +213 48 74 20 73",
    "footer.services": "Our Services",
    "footer.services.documents": "Administrative Documents",
    "footer.services.translation": "Legal Translation",
    "footer.services.procedures": "Legal Procedures",
    "footer.services.books": "Legal Books",
    "footer.copyright": "© 2024 Legal Admin Pro. All rights reserved.",

    // Theme
    "theme.light": "Light",
    "theme.dark": "Dark",
    "theme.system": "System",

    // Language
    "language.arabic": "العربية",
    "language.english": "English",
  },
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("ar")

  useEffect(() => {
    const savedLang = localStorage.getItem("language") as Language
    if (savedLang && (savedLang === "ar" || savedLang === "en")) {
      setLanguage(savedLang)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("language", language)
    document.documentElement.lang = language
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr"
  }, [language])

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)[typeof language]] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
