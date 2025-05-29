export interface Book {
  id: number
  title: string
  titleEn: string
  author: string
  authorEn: string
  price: string
  pages: number
  year: number
  category: string
  categoryEn: string
  description: string
  descriptionEn: string
  image: string
}

export const booksData: Book[] = [
  {
    id: 1,
    title: "دليل المحامي الجزائري",
    titleEn: "Algerian Lawyer's Guide",
    author: "بريس لنشر",
    authorEn: "Press Publishing",
    price: "2000",
    pages: 450,
    year: 2023,
    category: "المحاماة",
    categoryEn: "Law Practice",
    description:
      "دليل شامل للمحامين في الجزائر يغطي جميع جوانب المهنة القانونية من الإجراءات المحكمة إلى أخلاقيات المهنة. يتضمن الكتاب أحدث التشريعات والقوانين المعمول بها في النظام القضائي الجزائري.",
    descriptionEn:
      "A comprehensive guide for lawyers in Algeria covering all aspects of the legal profession from court procedures to professional ethics. The book includes the latest legislation and laws in force in the Algerian judicial system.",
    
    image: "/images/books/guide.png",
  },
  {
    id: 2,
    title: "الدليل العملي للمحامي في المواد المدنية",
    titleEn: "Practical Guide for Lawyers in Civil Matters",
    author: "مؤسسة الفكر القانوني",
    authorEn: "مؤسسة الفكر القانوني",
    price: "2500",
    pages: 140,
    year: 2023,
    category: "المحكمة المدنية",
    categoryEn: "Civil Court",
    description:
      "دليل عملي متخصص في القانون المدني يقدم شرحاً مفصلاً للإجراءات المدنية والعقود والالتزامات. يحتوي على نماذج عملية ومراجع قانونية حديثة تساعد المحامين في ممارستهم المهنية.",
    descriptionEn:
      "A specialized practical guide in civil law providing detailed explanation of civil procedures, contracts and obligations. Contains practical models and modern legal references to help lawyers in their professional practice.",
    
    image: "/images/books/الفكر القانونى.webp",
  },
  {
    id: 3,
    title: "مبادئ قانون العقوبات",
    titleEn: "Principles of Criminal Law",
    author: "عبد القادر عودة",
    authorEn: "Abdul Qader Odeh",
    price: "1800",
    pages: 520,
    year: 2022,
    category: "المحكمة الجنائية",
    categoryEn: "Criminal Court",
    description:
      "كتاب أساسي في قانون العقوبات يشرح المبادئ الأساسية للقانون الجنائي والجرائم والعقوبات. يتناول النظرية العامة للجريمة والمسؤولية الجنائية مع أمثلة تطبيقية من القضاء الجزائري.",
    descriptionEn:
      "A fundamental book in criminal law explaining the basic principles of criminal law, crimes and punishments. It addresses the general theory of crime and criminal responsibility with practical examples from Algerian jurisprudence.",
    
    image: "/images/books/280616.jpg",
  },
  {
    id: 4,
    title: "الوجيز في قانون الأسرة الجزائري",
    titleEn: "Brief Guide to Algerian Family Law",
    author: "أحمد براي",
    authorEn: "Ahmed Bray",
    price: "2200",
    pages: 290,
    year: 2023,
    category: "المحكمة المدنية",
    categoryEn: "Civil Court",
    description:
      "دراسة مفصلة لقانون الأسرة الجزائري تغطي الزواج والطلاق والنفقة والحضانة والميراث. يتضمن أحدث التعديلات القانونية والاجتهادات القضائية في مسائل الأحوال الشخصية.",
    descriptionEn:
      "A detailed study of Algerian family law covering marriage, divorce, alimony, custody and inheritance. Includes the latest legal amendments and judicial interpretations in personal status matters.",
    
    image: "/images/books/images.jpg",
  },
  {
    id: 5,
    title: "قانون الإجراءات المدنية والإدارية",
    titleEn: "Civil and Administrative Procedures Law",
    author: "محمد أحمد سراج",
    authorEn: "Mohammed Ahmed Siraj",
    price: "2800",
    pages: 600,
    year: 2023,
    category: "المحكمة المدنية",
    categoryEn: "Civil Court",
    description:
      "مرجع شامل في قانون الإجراءات المدنية والإدارية يشرح مراحل التقاضي من رفع الدعوى إلى تنفيذ الأحكام. يتضمن الطعون والإجراءات الاستعجالية والتحكيم.",
    descriptionEn:
      "A comprehensive reference in civil and administrative procedures law explaining litigation stages from filing a lawsuit to executing judgments. Includes appeals, urgent procedures and arbitration.",
    image: "/images/books/2021-04-05_131046 (1).png",
  },
  {
    id: 6,
    title: "الوجيز في القانون التجاري الجزائري",
    titleEn: "Brief in Algerian Commercial Law",
    author: "نورالدين قربا",
    authorEn: "Noureddine Gourba",
    price: "2400",
    pages: 420,
    year: 2022,
    category: "المحكمة التجارية",
    categoryEn: "Commercial Court",
    description:
      "دليل متخصص في القانون التجاري يغطي الشركات التجارية والعقود التجارية والإفلاس والتسوية القضائية. يتضمن دراسات حالة وتطبيقات عملية من الواقع التجاري الجزائري.",
    descriptionEn:
      "A specialized guide in commercial law covering commercial companies, commercial contracts, bankruptcy and judicial settlement. Includes case studies and practical applications from Algerian commercial reality.",
    image: "/images/books/images (1).jpg",
  },
  {
    id: 7,
    title: "أصول المحاكمات الجزائية",
    titleEn: "Fundamentals of Criminal Trials",
    author: " الكيلاني",
    authorEn: "Farouk Al-Kilani",
    price: "2600",
    pages: 480,
    year: 2023,
    category: "المحكمة الجنائية",
    categoryEn: "Criminal Court",
    description:
      "كتاب متخصص في إجراءات المحاكمات الجزائية يشرح مراحل التحقيق والمحاكمة والطعن. يتناول حقوق المتهم وضمانات المحاكمة العادلة وفقاً للقانون الجزائري.",
    descriptionEn:
      "A specialized book in criminal trial procedures explaining the stages of investigation, trial and appeal. It addresses the rights of the accused and guarantees of fair trial according to Algerian law.",
    
    image: "/images/books/149205.jpg",
  },
  {
    id: 8,
    title: "القانون الإداري ",
    titleEn: "Administrative Law and Administrative Disputes",
    author: "عمار عوابدي",
    authorEn: "Ammar Awabdi",
    price: "2300",
    pages: 350,
    year: 2023,
    category: "القضاء",
    categoryEn: "Judiciary",
    description:
      "مرجع في القانون الإداري يتناول تنظيم الإدارة العامة والرقابة القضائية على أعمال الإدارة. يشرح إجراءات المنازعات الإدارية أمام مجلس الدولة والمحاكم الإدارية.",
    descriptionEn:
      "A reference in administrative law dealing with the organization of public administration and judicial oversight of administrative actions. Explains administrative dispute procedures before the Council of State and administrative courts.",
    image: "/images/books/4404 copie.jpg",
  },
  {
    id: 9,
    title: " قانون العمل الجزائري",
    titleEn: "Explanation of Algerian Labor Law",
    author: "رشيد واضح",
    authorEn: "Rashid Wadih",
    price: "2100",
    pages: 400,
    year: 2022,
    category: "المحكمة المدنية",
    categoryEn: "Civil Court",
    description:
      "دراسة شاملة لقانون العمل الجزائري تغطي عقود العمل وحقوق العمال والمنازعات العمالية. يتضمن التشريعات الحديثة في مجال الضمان الاجتماعي وحوادث العمل.",
    descriptionEn:
      "A comprehensive study of Algerian labor law covering employment contracts, workers' rights and labor disputes. Includes modern legislation in the field of social security and work accidents.",
    
    image: "/images/books/9789922999647.jpg",
  },
  {
    id: 10,
    title: "النظام القضائي في الجزائر",
    titleEn: "The Judicial System in Algeria",
    author: "عبد الله أوهايبية",
    authorEn: "Abdullah Ouhaibia",
    price: "2700",
    pages: 550,
    year: 2023,
    category: "القضاء",
    categoryEn: "Judiciary",
    description:
      "دراسة معمقة للنظام القضائي الجزائري تشرح تنظيم المحاكم ودرجات التقاضي والاختصاصات القضائية. يتناول دور القضاة والمحامين وأعوان القضاء في النظام القضائي.",
    descriptionEn:
      "An in-depth study of the Algerian judicial system explaining court organization, litigation levels and judicial jurisdictions. It addresses the role of judges, lawyers and judicial assistants in the judicial system.",
    
    image: "/images/books/3749 copie.jpg",
  },
  {
    id: 11,
    title: "قانون الملكية الفكرية",
    titleEn: "Intellectual Property Law",
    author: "نادية فضيل",
    authorEn: "Nadia Fadil",
    price: "1900",
    pages: 320,
    year: 2022,
    category: "المحكمة التجارية",
    categoryEn: "Commercial Court",
    description:
      "كتاب متخصص في قانون الملكية الفكرية يغطي حقوق المؤلف والعلامات التجارية وبراءات الاختراع. يتضمن الحماية القانونية للملكية الفكرية والإجراءات القضائية لحمايتها.",
    descriptionEn:
      "A specialized book in intellectual property law covering copyrights, trademarks and patents. Includes legal protection of intellectual property and judicial procedures for its protection.",
    image: "/images/books/9de8d2e28b419bc34645d73e4b9bfb71.png.webp",
  },
  {
    id: 12,
    title: "قانون البيئة والتنمية المستدامة",
    titleEn: "Environmental Law and Sustainable Development",
    author: "صالح بلعيد",
    authorEn: "Saleh Belaid",
    price: "2000",
    pages: 380,
    year: 2023,
    category: "القضاء",
    categoryEn: "Judiciary",
    description:
      "مرجع حديث في قانون البيئة يتناول حماية البيئة والتنمية المستدامة والمسؤولية البيئية. يشرح التشريعات البيئية الجزائرية والاتفاقيات الدولية في مجال البيئة.",
    descriptionEn:
      "A modern reference in environmental law addressing environmental protection, sustainable development and environmental responsibility. Explains Algerian environmental legislation and international environmental agreements.",
    image: "/images/books/books-library.online-09250744Cx1Z9.jpg",
  },
  {
    id: 13,
    title: " الثورة الجزائرية و القانون ",
    titleEn: "Law and the Algerian Revolution",
    author: "محمد بجاوي",
    authorEn: "Mohammed Bedjaoui",
    price: "3200",
    pages: 420,
    year: 1961,
    category: "القانون الدستوري",
    categoryEn: "Constitutional Law",
    description:
      "عمل أساسي يحلل الأسس القانونية للثورة الجزائرية وشرعية الدولة الجزائرية الناشئة على الساحة الدولية. يستكشف محمد بجاوي، القاضي السابق في محكمة العدل الدولية، الجوانب الدستورية والدولية للقانون الثوري.",
    descriptionEn:
      "A fundamental work analyzing the legal foundations of the Algerian Revolution and the legitimacy of the emerging Algerian state on the international scene. Mohammed Bedjaoui, former judge at the International Court of Justice, explores the constitutional and international aspects of revolutionary law.",
    
    image: "/images/books/6b6971b4e06dbd9ebd7421aef1974b2a.png.webp",
  },
  {
    id: 14,
    title: "الدين الخارجي للجزائر: تحليل نقدي لسياسات الاقتراض والتكيف",
    titleEn: "Algeria's External Debt: A Critical Analysis of Borrowing and Adjustment Policies",
    author: "عمار بلحيمر",
    authorEn: "Ammar Belhimer",
    price: "2800",
    pages: 380,
    year: 1998,
    category: "القانون المالي",
    categoryEn: "Financial Law",
    description:
      "يفحص هذا العمل سياسات المديونية الخارجية للجزائر، ويقدم تحليلاً نقدياً لاستراتيجيات الاقتراض والتكيف المنفذة. يقدم عمار بلحيمر، أستاذ القانون في جامعة الجزائر، خبرته في القانون العام.",
    descriptionEn:
      "This work examines Algeria's external debt policies, offering a critical analysis of borrowing and adjustment strategies implemented. Ammar Belhimer, professor of law at the University of Algiers, brings his expertise in public law.",
    image: "/images/books/1.jpg",
  },
  {
    id: 15,
    title: "مدخل في العلوم القانونية: النظرية والتطبيق في القوانين الجزائرية",
    titleEn: "Introduction to Legal Sciences: Theory and Application in Algerian Laws",
    author: "الدكتور أحمد سي علي",
    authorEn: "Ahmed Si Ali",
    price: "2400",
    pages: 320,
    year: 2009,
    category: "أصول القانون",
    categoryEn: "Legal Fundamentals",
    description:
      "دليل تعليمي يقدم المفاهيم الأساسية للعلوم القانونية، مع تطبيق محدد على السياق التشريعي الجزائري. مفيد بشكل خاص لطلاب القانون والممارسين الذين يرغبون في فهم أسس النظام القانوني الجزائري.",
    descriptionEn:
      "A pedagogical manual that introduces fundamental concepts of legal sciences, with specific application to the Algerian legislative context. Particularly useful for law students and practitioners wishing to understand the foundations of the Algerian legal system.",
    
    image: "/images/books/legal-sciences.webp",
  },
  {
    id: 16,
    title: "النظام القضائي الجزائري",
    titleEn: "The Algerian Judicial System",
    author: "محند أمقران بوبشير",
    authorEn: "Mohand Amokrane Boubchir",
    price: "2600",
    pages: 450,
    year: 2005,
    category: "القضاء",
    categoryEn: "Judiciary",
    description:
      "يقدم هذا الكتاب نظرة شاملة على النظام القضائي في الجزائر، مفصلاً هياكله ووظائفه وإجراءاته. إنه مورد قيم لفهم عمل العدالة الجزائرية.",
    descriptionEn:
      "This book offers a comprehensive overview of the judicial system in Algeria, detailing its structures, functions and procedures. It is a valuable resource for understanding the functioning of Algerian justice.",
    image: "/images/books/images (2).jpg",
    
  },
  {
    id: 17,
    title: "المجلس الشعبي للولاية في القانون الجزائري",
    titleEn: "The People's Assembly of the State in Algerian Law",
    author: "زين الدين بوتشيشة",
    authorEn: "Zine Eddine Boutchicha",
    price: "2200",
    pages: 280,
    year: 2018,
    category: "القانون الإداري",
    categoryEn: "Administrative Law",
    description:
      "يستكشف هذا العمل دور وصلاحيات والإطار القانوني للمجلس الشعبي للولاية في الجزائر، محللاً تأثيره على الحكم المحلي.",
    descriptionEn:
      "This work explores the role, competencies and legal framework of the People's Assembly of the State in Algeria, analyzing its impact on local governance.",
    
    image: "/images/books/185bd2fba7d9f1a069ac2997fa1cc8e9.jpg.webp",
  },
  {
    id: 18,
    title: "النظام القانوني الجزائري في مجال التوجيه العقاري",
    titleEn: "The Algerian Legal System in Real Estate Orientation",
    author: "سمين شامة",
    authorEn: "Smain Chama",
    price: "2500",
    pages: 350,
    year: 2002,
    category: "القانون العقاري",
    categoryEn: "Real Estate Law",
    description:
      "تحليل معمق للإطار القانوني الذي يحكم التوجيه العقاري في الجزائر، معالجاً الجوانب المتعلقة بالملكية العقارية والتنظيم العقاري.",
    descriptionEn:
      "An in-depth analysis of the legal framework governing real estate orientation in Algeria, addressing aspects related to real estate property and real estate regulation.",
    
    image: "/images/books/images (3).jpg",
  },
  {
    id: 19,
    title: "وظيفة التوثيق في النظام القانوني الجزائري",
    titleEn: "The Function of Documentation in the Algerian Legal System",
    author: "وسيلة وزاني",
    authorEn: "Wassila Wazzani",
    price: "2100",
    pages: 290,
    year: 2009,
    category: "القانون الإداري",
    categoryEn: "Administrative Law",
    description:
      "يفحص هذا الكتاب الدور الحاسم للتوثيق في النظام القانوني الجزائري، مسلطاً الضوء على أهميته في إدارة وحفظ المعلومات القانونية.",
    descriptionEn:
      "This book examines the crucial role of documentation in the Algerian legal system, highlighting its importance in the management and conservation of legal information.",
    image: "/images/books/images.png",
  },
  {
    id: 20,
    title: "الحقوق المعنوية للمؤلف في القانون الجزائري",
    titleEn: "Moral Rights of Authors in Algerian Law",
    author: "كمال بودهرة",
    authorEn: "Kamel Boudahra",
    price: "2300",
    pages: 310,
    year: 2018,
    category: "الملكية الفكرية",
    categoryEn: "Intellectual Property",
    description:
      "دراسة حول حماية الحقوق المعنوية للمؤلفين في الجزائر، تحلل القوانين السارية وتطبيقها في سياق الملكية الفكرية.",
    descriptionEn:
      "A study on the protection of moral rights of authors in Algeria, analyzing the laws in force and their application in the context of intellectual property.",
    image: "/images/books/logo_05-04-2021_132000.jpg",
  },
  {
    id: 21,
    title: "مفهوم الاجتهاد في القانون الجزائري",
    titleEn: "The Concept of Jurisprudence in Algerian Law",
    author: "هند بلخير",
    authorEn: "Hind Belkhir",
    price: "2000",
    pages: 250,
    year: 2020,
    category: "أصول القانون",
    categoryEn: "Legal Fundamentals",
    description:
      "يستكشف هذا المقال الأكاديمي مكانة وتطور الاجتهاد في النظام القانوني الجزائري، خاصة بعد الاستقلال، ربطاً بين التقاليد القانونية الفرنسية والإسلامية.",
    descriptionEn:
      "This academic article explores the place and evolution of jurisprudence in the Algerian legal system, particularly after independence, linking French and Islamic legal traditions.",
    
    image: "/images/books/457321e91e4334a2633ab6988628cd43.png.webp",
  },
]
