export interface Lawyer {
  id: number
  name: string
  nameEn: string
  description: string
  descriptionEn: string
  location: string
  locationEn: string
  phone: string
  mobile?: string
  email?: string
  specialization: string
  specializationEn: string
  experience: string
  experienceEn: string
  establishedYear?: number
  image: string
  isNotable?: boolean
  additionalInfo?: string
  additionalInfoEn?: string
}

export const lawyersData: Lawyer[] = [
  {
    id: 1,
    name: "الأستاذ حمزة بوشلاغم",
    nameEn: "Maître Hamza Bouchelaghem",
    description: "محامي معتمد لدى المحكمة العليا",
    descriptionEn: "Certified lawyer at the Supreme Court",
    location: "الجزائر العاصمة",
    locationEn: "Algiers",
    phone: "+213 552 05 30 27",
    specialization: "القانون المدني والتجاري",
    specializationEn: "Civil and Commercial Law",
    experience: "8 سنوات",
    experienceEn: "8 years",
    establishedYear: 2016,
    image: "/lawyer.png",
  },
  {
    id: 2,
    name: "الأستاذ زهير بن شريف",
    nameEn: "Maître Zouhir Bencherif",
    description: "محامي خبير في القانون الجنائي والمدني",
    descriptionEn: "Expert lawyer in criminal and civil law",
    location: "18 شارع أحمد زبانة، سيدي امحمد، الجزائر",
    locationEn: "18 rue Ahmed Zabana, Sidi Mhamed, Algiers",
    phone: "+213 21 74 61 55",
    specialization: "القانون الجنائي والمدني",
    specializationEn: "Criminal and Civil Law",
    experience: "27 سنة",
    experienceEn: "27 years",
    establishedYear: 1997,
    image: "/lawyer.png",
  },
  {
    id: 3,
    name: "الأستاذة لامية مساعي",
    nameEn: "Maître Lamia Messai",
    description: "محامية متخصصة في قانون الأسرة والأحوال الشخصية",
    descriptionEn: "Lawyer specialized in family law and personal status",
    location: "شارع بوعبدلي بوعبدالله، تيارت",
    locationEn: "Rue Bouabdelli Bouabdellah, Tiaret",
    phone: "+213 551 69 72 28",
    specialization: "قانون الأسرة والأحوال الشخصية",
    specializationEn: "Family Law and Personal Status",
    experience: "19 سنة",
    experienceEn: "19 years",
    establishedYear: 2005,
    image: "/lawyer.png",
  },
  {
    id: 4,
    name: "الأستاذ سمير هوالة",
    nameEn: "Maître Samir Haouala",
    description: "محامي متخصص في القانون التجاري والشركات",
    descriptionEn: "Lawyer specialized in commercial law and companies",
    location: "حي مقبرو عمار بلوك 15 رقم 82، قالمة",
    locationEn: "Cité Makbrou Ammar Bloc 15 n°82, Guelma",
    phone: "+213 37 10 71 17",
    specialization: "القانون التجاري والشركات",
    specializationEn: "Commercial Law and Companies",
    experience: "15 سنة",
    experienceEn: "15 years",
    image: "/lawyer.png",
  },
  {
    id: 5,
    name: "الأستاذ محمد أمين بوسليماني",
    nameEn: "Maître Mohamed Amine Bouslimani",
    description: "محامي في القانون المدني والإداري",
    descriptionEn: "Lawyer in civil and administrative law",
    location: "12 شارع الأخوين مسوس، خميس مليانة",
    locationEn: "12 rue des frères Messous, Khemis Miliana",
    phone: "+213 27 66 39 34",
    specialization: "القانون المدني والإداري",
    specializationEn: "Civil and Administrative Law",
    experience: "12 سنة",
    experienceEn: "12 years",
    image: "/lawyer.png",
  },
  {
    id: 6,
    name: "الأستاذ عبد الحميد بوطارفة",
    nameEn: "Maître Abdelhamid Boutarfa",
    description: "محامي متخصص في القانون الجنائي والدفاع",
    descriptionEn: "Lawyer specialized in criminal law and defense",
    location: "14 شارع الأخوين مسلم، سطيف",
    locationEn: "14, Boulevard des frères Meslem, Sétif",
    phone: "+213 36 93 94 28",
    email: "mohis_avocat@yahoo.fr",
    specialization: "القانون الجنائي والدفاع",
    specializationEn: "Criminal Law and Defense",
    experience: "18 سنة",
    experienceEn: "18 years",
    image: "/lawyer.png",
  },
  {
    id: 7,
    name: "الأستاذ عبد الحفيظ زروق",
    nameEn: "Maître Abdelhafid Zarroug",
    description: "محامي في القانون المدني والعقاري",
    descriptionEn: "Lawyer in civil and real estate law",
    location: "حي السلام 13/28 الفودور، تبسة",
    locationEn: "Cité Esselm 13/28 Al Foudour, Tébessa",
    phone: "+213 37 58 31 58",
    mobile: "+213 771 40 53 66",
    specialization: "القانون المدني والعقاري",
    specializationEn: "Civil and Real Estate Law",
    experience: "16 سنة",
    isNotable: true,
    experienceEn: "16 years",
    image: "/lawyer.png",
  },
  {
    id: 8,
    name: "شمس الدين حافظ",
    nameEn: "Chems-Eddine Hafiz",
    description: "محامي بارز في القانون الدولي للأعمال والقانون الجنائي",
    descriptionEn: "Prominent lawyer in international business law and criminal law",
    location: "محكمة الجزائر ومحكمة باريس",
    locationEn: "Algiers Court and Paris Bar",
    phone: "+213 21 XX XX XX",
    specialization: "القانون الدولي للأعمال والقانون الجنائي",
    specializationEn: "International Business Law and Criminal Law",
    experience: "38 سنة",
    experienceEn: "38 years",
    establishedYear: 1986,
    image: "/lawyer.png",
    isNotable: true,
    additionalInfo: "عميد الجامع الكبير في باريس منذ 2020، عضو في اللجنة الوطنية الاستشارية لحقوق الإنسان",
    additionalInfoEn:
      "Rector of the Great Mosque of Paris since 2020, member of the National Consultative Commission on Human Rights (CNCDH)",
  },
  {
    id: 10,
    name: "مراد أوصديق",
    nameEn: "Mourad Oussedik",
    description: "محامي فرنسي-جزائري وعضو مؤسس لجماعة محامي جبهة التحرير الوطني",
    descriptionEn: "Franco-Algerian lawyer and founding member of the FLN lawyers collective",
    location: "الجزائر وفرنسا",
    locationEn: "Algeria and France",
    phone: "+213 21 92 54 22",
    specialization: "القانون السياسي والدفاع عن المناضلين",
    specializationEn: "Political Law and Militant Defense",
    experience: "45 سنة",
    experienceEn: "45 years",
    image: "/lawyer.png",
    isNotable: true,
    additionalInfo: "نائب في الجمعية التأسيسية الأولى للجمهورية الجزائرية، دافع عن مناضلي جبهة التحرير الوطني",
    additionalInfoEn:
      "Deputy of the first constituent assembly of the Algerian Republic, defended FLN militants and other notable causes",
  },
  {
    id: 11,
    name: "الأستاذ بن تركية المختار",
    nameEn: "Ben Turkia Al-Mukhtar",
    description: "محامي معتمد لدى المحكمة العليا",
    descriptionEn: "Certified lawyer at the Supreme Court",
    location: "شارع علي بومجل سيدي بلعباس",
    locationEn: "Ali Boumejel Street, Sidi Bel Abbes",
    phone: "048742073",
    specialization: "القانون المدني والتجاري",
    specializationEn: "Civil and Commercial Law",
    experience: "20 سنة",
    experienceEn: "20 years",
    image: "/lawyer.png",
  },
]
