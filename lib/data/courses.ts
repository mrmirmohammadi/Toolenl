import type { CourseItem } from "./home";

export const COURSE_TOPICS = [
  {
    category: "همه",
    subgroups: ["همه"],
  },
  {
    category: "گزارش‌نویسی و داده‌ها",
    subgroups: ["همه", "گزارش مدیریتی", "اکسل و تحلیل داده"],
  },
  {
    category: "تولید محتوا و ارائه",
    subgroups: ["همه", "محتوای متنی و کپشن", "اسلاید و ارائه"],
  },
  {
    category: "خودکارسازی و ابزارها",
    subgroups: ["همه", "اتوماسیون بدون‌کد", "دستیار اختصاصی"],
  },
  {
    category: "مدیریت و بهره‌وری",
    subgroups: ["همه", "مدیریت پروژه", "پژوهش و تصمیم‌گیری"],
  },
] as const;

export type CourseTopicCategory = (typeof COURSE_TOPICS)[number]["category"];

export const COURSE_LEVEL_FILTERS = [
  "همه سطوح",
  "مقدماتی",
  "کاربردی",
  "متوسط",
  "پیشرفته",
] as const;

export type CourseLevelFilter = (typeof COURSE_LEVEL_FILTERS)[number];

export const COURSE_ACCESS_FILTERS = [
  "همه",
  "اشتراک جامع",
  "خرید تک‌دوره",
] as const;

export type CourseAccessFilter = (typeof COURSE_ACCESS_FILTERS)[number];

export type CourseSortOption = "recommended" | "popular";

export interface CatalogCourseDetail extends CourseItem {
  category: Exclude<CourseTopicCategory, "همه">;
  subCategory: string;
  filterLevel: Exclude<CourseLevelFilter, "همه سطوح">;
  rating: string;
  ratingCount: number;
  studentsCount: number;
  recommendedRank: number;
  lessonsCount: number;
  coverTag: string;
  frameAccent: "yellow" | "navy" | "blue";
}

export const CATALOG_ANNOUNCEMENT = {
  badge: "تازه‌های مسیر یادگیری",
  text: "با پیاده‌سازی مدل شفاف، همه دوره‌ها یا داخل «اشتراک جامع» باز می‌شوند یا به شکل «خرید تک‌دوره» در دسترس‌اند؛ بدون نیاز به گذراندن اجباری پیش‌نیازها.",
};

export const CATALOG_COURSES: CatalogCourseDetail[] = [
  {
    id: "course-reporting",
    title: "گزارش‌نویسی با هوش مصنوعی",
    outcome: "تنظیم گزارش‌های هفتگی و خلاصه مدیریتی دقیق در نصف زمان همیشگی",
    instructorName: "مهرنوش کریمی",
    instructorRole: "متخصص بهره‌وری و تحلیل داده",
    instructorInitials: "م‌ک",
    duration: "۴ ساعت و ۲۰ دقیقه",
    level: "مقدماتی تا کاربردی",
    filterLevel: "مقدماتی",
    advisoryPrerequisite: "آشنایی پایه با کار روزمره کامپیوتر (پیش‌نیاز مسدودکننده نیست)",
    accessType: "اشتراک جامع",
    priceLabel: "مشمول اشتراک جامع",
    category: "گزارش‌نویسی و داده‌ها",
    subCategory: "گزارش مدیریتی",
    rating: "۴.۹",
    ratingCount: 164,
    studentsCount: 1480,
    recommendedRank: 1,
    lessonsCount: 18,
    coverTag: "خروجی سریع اداری",
    frameAccent: "yellow",
  },
  {
    id: "course-content",
    title: "تولید محتوای متنی با هوش مصنوعی",
    outcome: "ساخت تقویم محتوایی، سناریو و کپشن با لحن واقعی برند خودت",
    instructorName: "وحیده رادمهر",
    instructorRole: "طراح استراتژی محتوا و پرامپت",
    instructorInitials: "و‌ر",
    duration: "۳ ساعت و ۴۵ دقیقه",
    level: "مقدماتی",
    filterLevel: "مقدماتی",
    advisoryPrerequisite: "پیشنهادی: تماشای ۲ ویدیوی کوتاه مبانی پرامپت (اختیاری)",
    accessType: "اشتراک جامع",
    priceLabel: "مشمول اشتراک جامع",
    category: "تولید محتوا و ارائه",
    subCategory: "محتوای متنی و کپشن",
    rating: "۴.۸",
    ratingCount: 142,
    studentsCount: 1690,
    recommendedRank: 2,
    lessonsCount: 15,
    coverTag: "حفظ لحن برند",
    frameAccent: "navy",
  },
  {
    id: "course-automation",
    title: "خودکارسازی کارهای اداری با هوش مصنوعی",
    outcome: "اتصال فرم‌ها، ایمیل‌ها و فایل‌های اکسل بدون نیاز به کدنویسی پیچیده",
    instructorName: "کیانوش فرهادی",
    instructorRole: "معمار اتوماسیون و ابزارهای بدون‌کد",
    instructorInitials: "ک‌ف",
    duration: "۶ ساعت و ۱۰ دقیقه",
    level: "متوسط",
    filterLevel: "متوسط",
    advisoryPrerequisite: "پیشنهادی: دوره گزارش‌نویسی با هوش مصنوعی (تأثیری در دسترسی ندارد)",
    accessType: "خرید تک‌دوره",
    priceLabel: "خرید تک‌دوره · ۱,۴۹۰,۰۰۰ تومان",
    category: "خودکارسازی و ابزارها",
    subCategory: "اتوماسیون بدون‌کد",
    rating: "۴.۹",
    ratingCount: 118,
    studentsCount: 1120,
    recommendedRank: 3,
    lessonsCount: 24,
    coverTag: "صرفه‌جویی هفتگی",
    frameAccent: "blue",
  },
  {
    id: "course-excel",
    title: "تحلیل داده‌های اکسل با هوش مصنوعی",
    outcome: "ساخت فرمول، پاک‌سازی جدول‌های شلوغ و کشف روند فروش با زبان ساده",
    instructorName: "سارا توکلی",
    instructorRole: "تحلیل‌گر داده کسب‌وکار",
    instructorInitials: "س‌ت",
    duration: "۵ ساعت",
    level: "مقدماتی تا متوسط",
    filterLevel: "کاربردی",
    advisoryPrerequisite: "آشنایی مقدماتی با اکسل یا گوگل شیت (اختیاری)",
    accessType: "اشتراک جامع",
    priceLabel: "مشمول اشتراک جامع",
    category: "گزارش‌نویسی و داده‌ها",
    subCategory: "اکسل و تحلیل داده",
    rating: "۴.۸",
    ratingCount: 136,
    studentsCount: 1540,
    recommendedRank: 4,
    lessonsCount: 20,
    coverTag: "فرمول و تحلیل فروش",
    frameAccent: "yellow",
  },
  {
    id: "course-slides",
    title: "ساخت ارائه و اسلاید حرفه‌ای با هوش مصنوعی",
    outcome: "تبدیل ایده یا فایل متنی خام به اسلایدهای منظم و قابل ارائه در جلسه",
    instructorName: "امیرحسین نادری",
    instructorRole: "مدرس ارائه و داستان‌سرایی داده",
    instructorInitials: "ا‌ن",
    duration: "۳ ساعت و ۱۵ دقیقه",
    level: "مقدماتی",
    filterLevel: "مقدماتی",
    advisoryPrerequisite: "بدون پیش‌نیاز",
    accessType: "اشتراک جامع",
    priceLabel: "مشمول اشتراک جامع",
    category: "تولید محتوا و ارائه",
    subCategory: "اسلاید و ارائه",
    rating: "۴.۷",
    ratingCount: 94,
    studentsCount: 980,
    recommendedRank: 5,
    lessonsCount: 14,
    coverTag: "آماده جلسه",
    frameAccent: "navy",
  },
  {
    id: "course-pm",
    title: "برنامه‌ریزی و مدیریت پروژه با هوش مصنوعی",
    outcome: "شکستن پروژه‌های بزرگ به کارهای روزانه، زمان‌بندی و پیگیری تیم",
    instructorName: "نیما شریعتی",
    instructorRole: "مدیر محصول و راهبر چابک",
    instructorInitials: "ن‌ش",
    duration: "۴ ساعت و ۵۰ دقیقه",
    level: "کاربردی",
    filterLevel: "کاربردی",
    advisoryPrerequisite: "پیشنهادی: آشنایی با مدیریت کارها (اختیاری)",
    accessType: "خرید تک‌دوره",
    priceLabel: "خرید تک‌دوره · ۱,۲۵۰,۰۰۰ تومان",
    category: "مدیریت و بهره‌وری",
    subCategory: "مدیریت پروژه",
    rating: "۴.۸",
    ratingCount: 108,
    studentsCount: 1210,
    recommendedRank: 6,
    lessonsCount: 19,
    coverTag: "نظم و پیگیری تیم",
    frameAccent: "blue",
  },
  {
    id: "course-assistant",
    title: "ساخت دستیار اختصاصی پشتیبانی با هوش مصنوعی",
    outcome: "تنظیم دستیار پاسخ‌گو بر اساس فایل‌های راهنما و پرسش‌های متداول کسب‌وکار",
    instructorName: "کیانوش فرهادی",
    instructorRole: "معمار اتوماسیون و ابزارهای بدون‌کد",
    instructorInitials: "ک‌ف",
    duration: "۵ ساعت و ۴۰ دقیقه",
    level: "پیشرفته",
    filterLevel: "پیشرفته",
    advisoryPrerequisite: "پیشنهادی: گذراندن دوره خودکارسازی کارهای اداری (مانع خرید نیست)",
    accessType: "خرید تک‌دوره",
    priceLabel: "خرید تک‌دوره · ۱,۸۵۰,۰۰۰ تومان",
    category: "خودکارسازی و ابزارها",
    subCategory: "دستیار اختصاصی",
    rating: "۴.۹",
    ratingCount: 79,
    studentsCount: 740,
    recommendedRank: 7,
    lessonsCount: 22,
    coverTag: "پایگاه دانش اختصاصی",
    frameAccent: "yellow",
  },
  {
    id: "course-research",
    title: "پژوهش بازار و پایش رقبا با هوش مصنوعی",
    outcome: "جمع‌آوری، راستی‌آزمایی و مقایسه‌ی ساختاریافته داده‌های بازار در یک فایل تصمیم",
    instructorName: "مهرنوش کریمی",
    instructorRole: "متخصص بهره‌وری و تحلیل داده",
    instructorInitials: "م‌ک",
    duration: "۴ ساعت و ۵ دقیقه",
    level: "متوسط",
    filterLevel: "متوسط",
    advisoryPrerequisite: "پیشنهادی: آشنایی با جست‌وجوی هدفمند وب (اختیاری)",
    accessType: "اشتراک جامع",
    priceLabel: "مشمول اشتراک جامع",
    category: "مدیریت و بهره‌وری",
    subCategory: "پژوهش و تصمیم‌گیری",
    rating: "۴.۸",
    ratingCount: 88,
    studentsCount: 890,
    recommendedRank: 8,
    lessonsCount: 16,
    coverTag: "تحلیل مستند بازار",
    frameAccent: "navy",
  },
];
