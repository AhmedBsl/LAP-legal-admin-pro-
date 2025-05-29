export interface Procedure {
  id: number
  title: string
  titleEn: string
  description: string
  descriptionEn: string
  fullDescription: string
  fullDescriptionEn: string
  type: string
  category: string
  categoryEn: string
  steps: string[]
  stepsEn: string[]
  requiredDocuments: string[]
  requiredDocumentsEn: string[]
  estimatedTime: string
  estimatedTimeEn: string
  cost: string
  costEn: string
}

export const proceduresData: Procedure[] = [
  {
    id: 1,
    title: "إجراءات تأسيس شركة",
    titleEn: "Company Establishment Procedures",
    description: "دليل شامل لتأسيس الشركات في الجزائر",
    descriptionEn: "Comprehensive guide for establishing companies in Algeria",
    fullDescription:
      "إجراءات تأسيس الشركة في الجزائر تتطلب عدة خطوات قانونية وإدارية. يجب على المؤسسين اتباع الإجراءات المحددة في القانون التجاري الجزائري والحصول على التراخيص اللازمة من الجهات المختصة. هذا الدليل يوضح جميع الخطوات المطلوبة من إعداد القانون الأساسي إلى التسجيل في السجل التجاري.",
    fullDescriptionEn:
      "Company establishment procedures in Algeria require several legal and administrative steps. Founders must follow the procedures specified in the Algerian Commercial Code and obtain necessary licenses from competent authorities. This guide explains all required steps from preparing the articles of association to registration in the commercial register.",
    type: "PDF",
    category: "الشركات",
    categoryEn: "Companies",
    steps: [
      "إعداد القانون الأساسي للشركة",
      "إيداع رأس المال في البنك",
      "التسجيل في السجل التجاري",
      "الحصول على البطاقة الجبائية",
      "التسجيل في الضمان الاجتماعي",
      "فتح حساب بنكي للشركة",
    ],
    stepsEn: [
      "Prepare company articles of association",
      "Deposit capital in bank",
      "Register in commercial register",
      "Obtain tax card",
      "Register with social security",
      "Open company bank account",
    ],
    requiredDocuments: [
      "نسخة من بطاقة الهوية للمؤسسين",
      "القانون الأساسي للشركة",
      "شهادة إيداع رأس المال",
      "عقد إيجار المحل التجاري",
      "شهادة عدم الإفلاس",
    ],
    requiredDocumentsEn: [
      "Copy of founders' identity cards",
      "Company articles of association",
      "Capital deposit certificate",
      "Commercial premises lease contract",
      "Non-bankruptcy certificate",
    ],
    estimatedTime: "15-30 يوم عمل",
    estimatedTimeEn: "15-30 working days",
    cost: "50,000 - 100,000 دج",
    costEn: "50,000 - 100,000 DA",
  },
  {
    id: 2,
    title: "إجراءات الطلاق",
    titleEn: "Divorce Procedures",
    description: "الخطوات القانونية لإجراءات الطلاق",
    descriptionEn: "Legal steps for divorce procedures",
    fullDescription:
      "إجراءات الطلاق في الجزائر تخضع لقانون الأسرة الجزائري وتختلف حسب نوع الطلاق (بالتراضي، للضرر، للشقاق). يجب اتباع الإجراءات القانونية المحددة أمام المحكمة المختصة مع مراعاة حقوق الزوجين والأطفال. هذا الدليل يشرح جميع أنواع الطلاق والإجراءات المطلوبة لكل نوع.",
    fullDescriptionEn:
      "Divorce procedures in Algeria are subject to Algerian Family Law and vary according to the type of divorce (mutual consent, for harm, for discord). Legal procedures specified before the competent court must be followed while respecting the rights of spouses and children. This guide explains all types of divorce and required procedures for each type.",
    type: "PDF",
    category: "الأحوال الشخصية",
    categoryEn: "Personal Status",
    steps: [
      "تقديم طلب الطلاق للمحكمة",
      "جلسة الصلح الإجبارية",
      "تقديم الأدلة والشهود",
      "صدور حكم الطلاق",
      "تسجيل الطلاق في الحالة المدنية",
      "تنفيذ الأحكام المتعلقة بالنفقة والحضانة",
    ],
    stepsEn: [
      "Submit divorce application to court",
      "Mandatory reconciliation session",
      "Present evidence and witnesses",
      "Divorce judgment issuance",
      "Register divorce in civil status",
      "Execute judgments related to alimony and custody",
    ],
    requiredDocuments: ["عقد الزواج", "شهادة ميلاد الأطفال", "إثبات الدخل", "شهادة السكن", "الأدلة المؤيدة للطلاق"],
    requiredDocumentsEn: [
      "Marriage certificate",
      "Children's birth certificates",
      "Proof of income",
      "Residence certificate",
      "Supporting evidence for divorce",
    ],
    estimatedTime: "3-6 أشهر",
    estimatedTimeEn: "3-6 months",
    cost: "10,000 - 30,000 دج",
    costEn: "10,000 - 30,000 DA",
  },
  {
    id: 3,
    title: "إجراءات الميراث",
    titleEn: "Inheritance Procedures",
    description: "قوانين وإجراءات تقسيم الميراث",
    descriptionEn: "Laws and procedures for inheritance division",
    fullDescription:
      "إجراءات الميراث في الجزائر تتم وفقاً لأحكام الشريعة الإسلامية والقانون المدني الجزائري. تشمل هذه الإجراءات تحديد الورثة وحصصهم الشرعية وتقسيم التركة. يجب الحصول على شهادة وراثة من المحكمة المختصة لتمكين الورثة من التصرف في أموال المتوفى.",
    fullDescriptionEn:
      "Inheritance procedures in Algeria are conducted according to Islamic Sharia provisions and Algerian Civil Law. These procedures include identifying heirs and their legal shares and dividing the estate. An inheritance certificate must be obtained from the competent court to enable heirs to dispose of the deceased's assets.",
    type: "PDF",
    category: "الأحوال الشخصية",
    categoryEn: "Personal Status",
    steps: [
      "الحصول على شهادة وفاة",
      "تحديد الورثة الشرعيين",
      "تقديم طلب شهادة الوراثة",
      "جرد أموال المتوفى",
      "تقسيم التركة حسب الشرع",
      "تسجيل الممتلكات باسم الورثة",
    ],
    stepsEn: [
      "Obtain death certificate",
      "Identify legal heirs",
      "Submit inheritance certificate application",
      "Inventory deceased's assets",
      "Divide estate according to Sharia",
      "Register properties in heirs' names",
    ],
    requiredDocuments: ["شهادة وفاة المورث", "شهادات ميلاد الورثة", "عقود الملكية", "كشوف بنكية", "شهادة عائلية"],
    requiredDocumentsEn: [
      "Death certificate of deceased",
      "Birth certificates of heirs",
      "Property deeds",
      "Bank statements",
      "Family certificate",
    ],
    estimatedTime: "2-4 أشهر",
    estimatedTimeEn: "2-4 months",
    cost: "15,000 - 50,000 دج",
    costEn: "15,000 - 50,000 DA",
  },
  {
    id: 4,
    title: "إجراءات العقارات",
    titleEn: "Real Estate Procedures",
    description: "إجراءات بيع وشراء العقارات",
    descriptionEn: "Real estate buying and selling procedures",
    fullDescription:
      "إجراءات العقارات في الجزائر تشمل عمليات البيع والشراء والتسجيل العقاري. يجب اتباع الإجراءات القانونية المحددة في القانون المدني وقانون التوثيق للحصول على سند ملكية صحيح. هذا الدليل يوضح جميع الخطوات من التفاوض إلى التسجيل النهائي.",
    fullDescriptionEn:
      "Real estate procedures in Algeria include buying, selling and property registration operations. Legal procedures specified in Civil Law and Notarization Law must be followed to obtain a valid title deed. This guide explains all steps from negotiation to final registration.",
    type: "PDF",
    category: "العقارات",
    categoryEn: "Real Estate",
    steps: [
      "التفاوض على السعر والشروط",
      "إعداد عقد البيع الابتدائي",
      "دفع العربون",
      "التوثيق لدى الموثق",
      "دفع الثمن كاملاً",
      "التسجيل في المحافظة العقارية",
    ],
    stepsEn: [
      "Negotiate price and terms",
      "Prepare preliminary sale contract",
      "Pay deposit",
      "Notarization with notary",
      "Pay full price",
      "Register with real estate conservatory",
    ],
    requiredDocuments: ["سند الملكية الأصلي", "شهادة عدم التعارض", "كشف المساحة", "شهادة الإقامة", "بطاقة الهوية"],
    requiredDocumentsEn: [
      "Original title deed",
      "Non-conflict certificate",
      "Area survey",
      "Residence certificate",
      "Identity card",
    ],
    estimatedTime: "1-3 أشهر",
    estimatedTimeEn: "1-3 months",
    cost: "2-5% من قيمة العقار",
    costEn: "2-5% of property value",
  },
  {
    id: 5,
    title: "إجراءات العمل",
    titleEn: "Employment Procedures",
    description: "قوانين العمل والإجراءات المتعلقة بها",
    descriptionEn: "Labor laws and related procedures",
    fullDescription:
      "إجراءات العمل في الجزائر تحكمها قوانين العمل والضمان الاجتماعي. تشمل هذه الإجراءات عقود العمل وحقوق العمال والمنازعات العمالية. يجب على أصحاب العمل والعمال معرفة حقوقهم وواجباتهم وفقاً للتشريع الجزائري.",
    fullDescriptionEn:
      "Employment procedures in Algeria are governed by labor and social security laws. These procedures include employment contracts, workers' rights and labor disputes. Employers and workers must know their rights and duties according to Algerian legislation.",
    type: "PDF",
    category: "العمل",
    categoryEn: "Employment",
    steps: [
      "إعداد عقد العمل",
      "التسجيل في الضمان الاجتماعي",
      "فتح ملف طبي للعامل",
      "تسجيل العامل في دفتر الأجور",
      "تطبيق قوانين العمل",
      "معالجة المنازعات العمالية",
    ],
    stepsEn: [
      "Prepare employment contract",
      "Register with social security",
      "Open medical file for worker",
      "Register worker in payroll",
      "Apply labor laws",
      "Handle labor disputes",
    ],
    requiredDocuments: ["بطاقة الهوية", "الشهادات العلمية", "شهادة طبية", "شهادة الإقامة", "صورة شمسية"],
    requiredDocumentsEn: [
      "Identity card",
      "Educational certificates",
      "Medical certificate",
      "Residence certificate",
      "Photograph",
    ],
    estimatedTime: "1-2 أسبوع",
    estimatedTimeEn: "1-2 weeks",
    cost: "مجاني",
    costEn: "Free",
  },
  {
    id: 6,
    title: "إجراءات التجارة",
    titleEn: "Commercial Procedures",
    description: "القوانين التجارية والإجراءات",
    descriptionEn: "Commercial laws and procedures",
    fullDescription:
      "إجراءات التجارة في الجزائر تشمل تسجيل النشاطات التجارية والحصول على التراخيص اللازمة. يجب على التجار الامتثال للقوانين التجارية والجبائية والحصول على السجل التجاري. هذا الدليل يوضح جميع الإجراءات المطلوبة لممارسة النشاط التجاري بشكل قانوني.",
    fullDescriptionEn:
      "Commercial procedures in Algeria include registering commercial activities and obtaining necessary licenses. Merchants must comply with commercial and tax laws and obtain commercial registration. This guide explains all procedures required to conduct commercial activity legally.",
    type: "PDF",
    category: "التجارة",
    categoryEn: "Commerce",
    steps: [
      "اختيار الشكل القانوني للنشاط",
      "التسجيل في السجل التجاري",
      "الحصول على البطاقة الجبائية",
      "فتح حساب بنكي تجاري",
      "الحصول على التراخيص المهنية",
      "بدء النشاط التجاري",
    ],
    stepsEn: [
      "Choose legal form of activity",
      "Register in commercial register",
      "Obtain tax card",
      "Open commercial bank account",
      "Obtain professional licenses",
      "Start commercial activity",
    ],
    requiredDocuments: [
      "بطاقة الهوية",
      "شهادة الإقامة",
      "عقد إيجار المحل التجاري",
      "شهادة عدم الإفلاس",
      "الشهادات المهنية",
    ],
    requiredDocumentsEn: [
      "Identity card",
      "Residence certificate",
      "Commercial premises lease contract",
      "Non-bankruptcy certificate",
      "Professional certificates",
    ],
    estimatedTime: "2-4 أسابيع",
    estimatedTimeEn: "2-4 weeks",
    cost: "20,000 - 40,000 دج",
    costEn: "20,000 - 40,000 DA",
  },
]
