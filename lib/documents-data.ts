export interface Document {
  id: number;
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
  category: string;
  categoryEn: string;
  type: string;
  pdfUrl: string;
  wordUrl: string;
  fillableFields: string[];
  fillableFieldsEn: string[];
  usage: string;
  usageEn: string;
  requiredFor: string[];
  requiredForEn: string[];
  price: number; 
}

const rawDocumentsData = [
  {
    id: 1,
    title: "تصريح بعدم امتلاك بطاقة التعريف الوطنية",
    titleEn: "National ID Card Non-Possession Declaration",
    description: "نموذج تصريح بعدم امتلاك بطاقة التعريف الوطنية",
    descriptionEn: "Declaration of Non-Possession of National ID Card",
    category: "الشهادات",
    categoryEn: "Certificates",
    pdfUrl: "/documents/تصريح بعدم امتلاك بطاقة التعريف الوطنية.doc",
    wordUrl: "/documents/تصريح بعدم امتلاك بطاقة التعريف الوطنية.doc",
    fillableFields: [
      "الاسم الكامل",
      "رقم الهوية",
      "تاريخ الميلاد",
      "العنوان",
      "سبب عدم الامتلاك",
      "التاريخ",
      "التوقيع"
    ],
    fillableFieldsEn: [
      "Full Name",
      "ID Number",
      "Date of Birth",
      "Address",
      "Reason for Non-Possession",
      "Date",
      "Signature"
    ],
    usage: "يستخدم لتأكيد عدم امتلاك بطاقة التعريف الوطنية",
    usageEn: "Used to confirm non-possession of national ID card",
    requiredFor: ["الإدارات الحكومية", "البنوك", "الجهات الرسمية"],
    requiredForEn: ["Government Offices", "Banks", "Official Authorities"],
    price: 150
  },
  {
    id: 2,
    title: "تصريح بالبيع",
    titleEn: "Sales Declaration",
    description: "نموذج تصريح بالبيع لتسجيل عملية البيع رسمياً",
    descriptionEn: "Declaration of Sale for official sale registration",
    category: "الشهادات",
    categoryEn: "Certificates",
    pdfUrl: "/documents/تصريح بالبيع.doc",
    wordUrl: "/documents/تصريح بالبيع.doc",
    fillableFields: [
      "اسم البائع",
      "اسم المشتري",
      "رقم الهوية",
      "وصف المبيع",
      "قيمة البيع",
      "تاريخ البيع",
      "التاريخ",
      "التوقيع"
    ],
    fillableFieldsEn: [
      "Seller Name",
      "Buyer Name",
      "ID Number",
      "Description of Item",
      "Sale Value",
      "Sale Date",
      "Date",
      "Signature"
    ],
    usage: "يستخدم لتوثيق عمليات البيع رسمياً",
    usageEn: "Used for official documentation of sales transactions",
    requiredFor: ["الإدارات المالية", "الجهات الرسمية", "المحاكم"],
    requiredForEn: ["Financial Authorities", "Official Authorities", "Courts"],
    price: 100
  },
  {
    id: 3,
    title: "تصريح شرفي بالعزوبة",
    titleEn: "Honorary Declaration of Single Status",
    description: "نموذج تصريح شرفي يؤكد حالة العزوبة",
    descriptionEn: "Honorary declaration confirming single status",
    category: "الشهادات",
    categoryEn: "Certificates",
    pdfUrl: "/documents/تصريح شرفي بالعزوبة.doc",
    wordUrl: "/documents/تصريح شرفي بالعزوبة.doc",
    fillableFields: [
      "الاسم الكامل",
      "رقم الهوية",
      "تاريخ الميلاد",
      "العنوان",
      "التاريخ",
      "التوقيع"
    ],
    fillableFieldsEn: [
      "Full Name",
      "ID Number",
      "Date of Birth",
      "Address",
      "Date",
      "Signature"
    ],
    usage: "يستخدم لإثبات حالة العزوبة رسمياً",
    usageEn: "Used to officially prove single status",
    requiredFor: ["الإدارات الحكومية", "الجهات الرسمية", "المحاكم"],
    requiredForEn: ["Government Offices", "Official Authorities", "Courts"],
    price: 80
  },
  {
    id: 4,
    title: "تصريح أبوي",
    titleEn: "Parental Declaration",
    description: "نموذج تصريح أبوي للقيام بإجراءات رسمية نيابة عن الأبناء",
    descriptionEn: "Parental declaration for performing official procedures on behalf of children",
    category: "الشهادات",
    categoryEn: "Certificates",
    pdfUrl: "/documents/تصريح أبوي.doc",
    wordUrl: "/documents/تصريح أبوي.doc",
    fillableFields: [
      "اسم الوالد",
      "رقم الهوية",
      "اسم الابن/الابنة",
      "رقم هوية الابن/الابنة",
      "نوع الإجراء المطلوب",
      "التاريخ",
      "التوقيع"
    ],
    fillableFieldsEn: [
      "Parent Name",
      "ID Number",
      "Child Name",
      "Child ID Number",
      "Type of Required Procedure",
      "Date",
      "Signature"
    ],
    usage: "يستخدم للقيام بإجراءات رسمية نيابة عن الأبناء",
    usageEn: "Used for performing official procedures on behalf of children",
    requiredFor: ["الإدارات الحكومية", "الجهات الرسمية", "المحاكم"],
    requiredForEn: ["Government Offices", "Official Authorities", "Courts"],
    price: 150
  },
  {
    id: 5,
    title: "تصريح شرفي بعدم الاستفادة",
    titleEn: "Honorary Declaration of Non-Benefit",
    description: "نموذج تصريح شرفي بعدم الاستفادة",
    descriptionEn: "Honorary declaration of non-benefit",
    category: "الشهادات",
    categoryEn: "Certificates",
    pdfUrl: "/documents/تصريح شرفي بعدم الاستفادة.doc",
    wordUrl: "/documents/تصريح شرفي بعدم الاستفادة.doc",
    fillableFields: [
      "الاسم الكامل",
      "رقم الهوية",
      "تاريخ الميلاد",
      "العنوان",
      "التاريخ",
      "التوقيع"
    ],
    fillableFieldsEn: [
      "Full Name",
      "ID Number",
      "Date of Birth",
      "Address",
      "Date",
      "Signature"
    ],
    usage: "يستخدم لإثبات حالة عدم الاستفادة",
    usageEn: "Used to prove the state of non-benefit",
    requiredFor: ["الإدارات الحكومية", "الجهات الرسمية", "المحاكم"],
    requiredForEn: ["Government Offices", "Official Authorities", "Courts"],
    price: 80
  },
  {
    id: 6,
    title: "تصريح شرفي بعدم عمل الزوجة",
    titleEn: "Honorary Declaration of Spouse's Unemployment",
    description: "نموذج تصريح شرفي بعدم عمل الزوجة",
    descriptionEn: "Honorary declaration of spouse's unemployment",
    category: "الشهادات",
    categoryEn: "Certificates",
    pdfUrl: "/documents/تصريح شرفي بعدم عمل الزوجة.doc",
    wordUrl: "/documents/تصريح شرفي بعدم عمل الزوجة.doc",
    fillableFields: [
      "الاسم الكامل",
      "رقم الهوية",
      "تاريخ الميلاد",
      "العنوان",
      "التاريخ",
      "التوقيع"
    ],
    fillableFieldsEn: [
      "Full Name",
      "ID Number",
      "Date of Birth",
      "Address",
      "Date",
      "Signature"
    ],
    usage: "يستخدم لإثبات حالة عدم عمل الزوجة",
    usageEn: "Used to prove the spouse's unemployment status",
    requiredFor: ["الإدارات الحكومية", "الجهات الرسمية", "المحاكم"],
    requiredForEn: ["Government Offices", "Official Authorities", "Courts"],
    price: 60
  },
  {
    id: 7,
    title: "تعـهـــد.docx",
    titleEn: "Undertaking.docx",
    description: "نموذج تعهد",
    descriptionEn: "Undertaking form",
    category: "الشهادات",
    categoryEn: "Certificates",
    pdfUrl: "/documents/تعـهـــد.docx",
    wordUrl: "/documents/تعـهـــد.docx",
    fillableFields: [
      "الاسم الكامل",
      "رقم الهوية",
      "تاريخ الميلاد",
      "العنوان",
      "التاريخ",
      "التوقيع"
    ],
    fillableFieldsEn: [
      "Full Name",
      "ID Number",
      "Date of Birth",
      "Address",
      "Date",
      "Signature"
    ],
    usage: "يستخدم للتعهد",
    usageEn: "Used for undertaking",
    requiredFor: ["الإدارات الحكومية", "الجهات الرسمية", "المحاكم"],
    requiredForEn: ["Government Offices", "Official Authorities", "Courts"],
    price: 100
  },
  {
    id: 8,
    title: "شهـــــادة عدم الــــعمل بالشهود1.doc",
    titleEn: "Unemployment Certificate with Witnesses.doc",
    description: "نموذج شهادة عدم العمل بالشهود",
    descriptionEn: "Unemployment certificate with witnesses form",
    category: "الشهادات",
    categoryEn: "Certificates",
    pdfUrl: "/documents/شهـــــادة عدم الــــعمل بالشهود1.doc",
    wordUrl: "/documents/شهـــــادة عدم الــــعمل بالشهود1.doc",
    fillableFields: [
      "الاسم الكامل",
      "رقم الهوية",
      "تاريخ الميلاد",
      "العنوان",
      "التاريخ",
      "التوقيع",
      "اسم الشاهد 1",
      "رقم هوية الشاهد 1",
      "اسم الشاهد 2",
      "رقم هوية الشاهد 2"
    ],
    fillableFieldsEn: [
      "Full Name",
      "ID Number",
      "Date of Birth",
      "Address",
      "Date",
      "Signature",
      "Witness 1 Name",
      "Witness 1 ID Number",
      "Witness 2 Name",
      "Witness 2 ID Number"
    ],
    usage: "تستخدم لشهادة عدم العمل",
    usageEn: "Used for unemployment certificate",
    requiredFor: ["الإدارات الحكومية", "الجهات الرسمية", "المحاكم"],
    requiredForEn: ["Government Offices", "Official Authorities", "Courts"],
    price: 100
  },
  {
    id: 9,
    title: "طلب خطي للمشاركة في المسابقة .docx",
    titleEn: "Written Request to Participate in the Competition.docx",
    description: "نموذج طلب خطي للمشاركة في المسابقة",
    descriptionEn: "Written request to participate in the competition form",
    category: "الطلبات",
    categoryEn: "Requests",
    pdfUrl: "/documents/طلب خطي للمشاركة في المسابقة .docx",
    wordUrl: "/documents/طلب خطي للمشاركة في المسابقة .docx",
    fillableFields: [
      "الاسم الكامل",
      "رقم الهوية",
      "تاريخ الميلاد",
      "العنوان",
      "التاريخ",
      "التوقيع"
    ],
    fillableFieldsEn: [
      "Full Name",
      "ID Number",
      "Date of Birth",
      "Address",
      "Date",
      "Signature"
    ],
    usage: "يستخدم لطلب المشاركة في المسابقة",
    usageEn: "Used to request participation in the competition",
    requiredFor: ["الإدارات الحكومية", "الجهات الرسمية", "المسابقات"],
    requiredForEn: ["Government Offices", "Official Authorities", "Competitions"],
    price: 150
  },
  {
    id: 10,
    title: "طلب رقم سري بريدي .docx",
    titleEn: "Request for Postal Secret Code.docx",
    description: "نموذج طلب رقم سري بريدي",
    descriptionEn: "Request for postal secret code form",
    category: "الطلبات",
    categoryEn: "Requests",
    pdfUrl: "/documents/طلب رقم سري بريدي .docx",
    wordUrl: "/documents/طلب رقم سري بريدي .docx",
    fillableFields: [
      "الاسم الكامل",
      "رقم الهوية",
      "تاريخ الميلاد",
      "العنوان",
      "التاريخ",
      "التوقيع"
    ],
    fillableFieldsEn: [
      "Full Name",
      "ID Number",
      "Date of Birth",
      "Address",
      "Date",
      "Signature"
    ],
    usage: "يستخدم لطلب رقم سري بريدي",
    usageEn: "Used to request a postal secret code",
    requiredFor: ["مكاتب البريد", "الجهات الرسمية"],
    requiredForEn: ["Post Offices", "Official Authorities"],
    price: 100
  },
    {
    id: 11,
    title: "طلب عمل بصيغة استخلاف.doc",
    titleEn: "Job Application in a Replacement Format.doc",
    description: "نموذج طلب عمل بصيغة استخلاف",
    descriptionEn: "Job application in a replacement format form",
    category: "الطلبات",
    categoryEn: "Requests",
    pdfUrl: "/documents/طلب عمل بصيغة استخلاف.doc",
    wordUrl: "/documents/طلب عمل بصيغة استخلاف.doc",
    fillableFields: [
      "الاسم الكامل",
      "رقم الهوية",
      "تاريخ الميلاد",
      "العنوان",
      "التاريخ",
      "التوقيع"
    ],
    fillableFieldsEn: [
      "Full Name",
      "ID Number",
      "Date of Birth",
      "Address",
      "Date",
      "Signature"
    ],
    usage: "يستخدم لطلب عمل بصيغة استخلاف",
    usageEn: "Used to request a job in a replacement format",
    requiredFor: ["الشركات", "المؤسسات", "الجهات الرسمية"],
    requiredForEn: ["Companies", "Organizations", "Official Authorities"],
    price: 300
  }
];

export const documentsData: Document[] = rawDocumentsData.map(doc => ({
  ...doc,
  type: (doc.pdfUrl.split(".").pop() || "").toUpperCase()
}));
