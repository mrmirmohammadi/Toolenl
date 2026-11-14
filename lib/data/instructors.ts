import { CATALOG_COURSES, type CatalogCourseDetail } from "./courses";
import { SHORT_VIDEOS_FEED, type ShortVideoDetail } from "./short-videos";

export interface InstructorReviewItem {
  id: string;
  studentName: string;
  courseTitle: string;
  score: string;
  comment: string;
  createdAt: string;
}

export interface InstructorProfileData {
  slug: string;
  name: string;
  initials: string;
  role: string;
  shortBio: string;
  verifiedSpecialties: string[];
  starterCourseId: string;
  starterCourseReason: string;
  overallCourseScore: string;
  reviewsCount: number;
  courses: CatalogCourseDetail[];
  shortVideos: ShortVideoDetail[];
  reviews: InstructorReviewItem[];
}

interface RawInstructorConfig {
  slug: string;
  name: string;
  initials: string;
  role: string;
  shortBio: string;
  verifiedSpecialties: string[];
  starterCourseId: string;
  starterCourseReason: string;
  overallCourseScore: string;
  reviewsCount: number;
  reviews: InstructorReviewItem[];
}

const INSTRUCTOR_CONFIGS: RawInstructorConfig[] = [
  {
    slug: "mehrnoush-karimi",
    name: "مهرنوش کریمی",
    initials: "م‌ک",
    role: "متخصص بهره‌وری و تحلیل داده",
    shortBio:
      "تمرکز من طراحی مسیرهای ساده برای تیم‌ها و کارشناس‌هایی است که می‌خواهند گزارش‌های هفتگی، خلاصه‌سازی اسناد و تحلیل رقبا را بدون سردرگمی به کار روزانه‌شان اضافه کنند.",
    verifiedSpecialties: [
      "گزارش‌نویسی مدیریتی با AI",
      "ساخت قالب‌های استاندارد پرامپت",
      "پژوهش مستند بازار و رقبا",
    ],
    starterCourseId: "course-reporting",
    starterCourseReason:
      "اگر برای اولین بار می‌خواهی کارهای گزارش‌دهی و خلاصه‌سازی PDF رو با هوش مصنوعی انجام بدی، از همین دوره شروع کن.",
    overallCourseScore: "۴.۹",
    reviewsCount: 252,
    reviews: [
      {
        id: "rev-mk-1",
        studentName: "الهام محمدی",
        courseTitle: "گزارش‌نویسی با هوش مصنوعی",
        score: "۵.۰",
        comment:
          "دقیقاً طبق چیزی که سر کار لازم داشتم پیش رفت؛ دیگه مجبور نیستم آخر هفته ۳ ساعت پای گزارش فروش بشینم.",
        createdAt: "آبان ۱۴۰۵",
      },
      {
        id: "rev-mk-2",
        studentName: "سعید نوری",
        courseTitle: "پژوهش بازار و پایش رقبا با هوش مصنوعی",
        score: "۴.۸",
        comment:
          "نحوه کنترل خطا و راستی‌آزمایی عددها خیلی کاربردی و بدون اغراق توضیح داده شده بود.",
        createdAt: "مهر ۱۴۰۵",
      },
    ],
  },
  {
    slug: "vahideh-radmehr",
    name: "وحیده رادمهر",
    initials: "و‌ر",
    role: "طراح استراتژی محتوا و پرامپت",
    shortBio:
      "به کسب‌وکارها و تولیدکننده‌های محتوا کمک می‌کنم لحن واقعی خودشان را حفظ کنند و از خروجی‌های کلیشه‌ای و ماشینی فاصله بگیرند.",
    verifiedSpecialties: [
      "استخراج لحن اختصاصی برند",
      "مکاتبات و ایمیل‌های حرفه‌ای",
      "مبانی پرامپت‌نویسی ساختاریافته",
    ],
    starterCourseId: "course-content",
    starterCourseReason:
      "بهترین نقطه شروع برای ساخت تقویم محتوا و کپشن‌هایی که شبیه نوشته واقعی خودت باشن.",
    overallCourseScore: "۴.۸",
    reviewsCount: 189,
    reviews: [
      {
        id: "rev-vr-1",
        studentName: "مینا خالدی",
        courseTitle: "تولید محتوای متنی با هوش مصنوعی",
        score: "۴.۹",
        comment:
          "بخش ساخت کارت لحن برند باعث شد متن‌های پیجم دیگه مصنوعی به نظر نرسن.",
        createdAt: "آبان ۱۴۰۵",
      },
    ],
  },
  {
    slug: "kianoush-farhadi",
    name: "کیانوش فرهادی",
    initials: "ک‌ف",
    role: "معمار اتوماسیون و ابزارهای بدون‌کد",
    shortBio:
      "تمرکز تدریس من اتصال فرم‌ها، پایگاه‌های دانش و ایمیل‌های تکراری با ابزارهای بدون‌کد است تا تیم‌های کوچک هم جریان کاری منظم داشته باشند.",
    verifiedSpecialties: [
      "اتوماسیون بدون‌کد (Make / Zapier)",
      "مدیریت دانش تیمی در Notion",
      "دستیارهای اختصاصی پشتیبانی",
    ],
    starterCourseId: "course-automation",
    starterCourseReason:
      "قبل از ساخت دستیارهای پیچیده، با همین دوره یاد می‌گیری کارهای تکراری دفترت رو خودکار کنی.",
    overallCourseScore: "۴.۹",
    reviewsCount: 197,
    reviews: [
      {
        id: "rev-kf-1",
        studentName: "امیرحسین مرادی",
        courseTitle: "خودکارسازی کارهای اداری با هوش مصنوعی",
        score: "۵.۰",
        comment:
          "سناریوی اتصال فرم ثبت‌نام به تلگرام رو همون شب اول روی سایت خودم اجرا کردم.",
        createdAt: "آبان ۱۴۰۵",
      },
    ],
  },
  {
    slug: "sara-tavakoli",
    name: "سارا توکلی",
    initials: "س‌ت",
    role: "تحلیل‌گر داده کسب‌وکار",
    shortBio:
      "کمک می‌کنم بدون حفظ کردن فرمول‌های سخت، ستون‌های شلوغ اکسل را تمیز کنی و تحلیل‌های دقیق فروش و عملیات بسازی.",
    verifiedSpecialties: [
      "پاک‌سازی داده‌های اکسل",
      "فرمول‌نویسی و گزارش‌گیری با AI",
      "تحلیل روند فروش ماهانه",
    ],
    starterCourseId: "course-excel",
    starterCourseReason:
      "اگر روزانه با جدول‌های اکسل سر و کار داری، این دوره مستقیم تایم کارت رو نصف می‌کنه.",
    overallCourseScore: "۴.۸",
    reviewsCount: 136,
    reviews: [
      {
        id: "rev-st-1",
        studentName: "فاطمه اکبری",
        courseTitle: "تحلیل داده‌های اکسل با هوش مصنوعی",
        score: "۴.۸",
        comment:
          "روش نمونه‌برداری ۲۰ ردیفی برای فرمول‌سازی اکسل خیلی امنیت و دقتم رو بالا برد.",
        createdAt: "مهر ۱۴۰۵",
      },
    ],
  },
  {
    slug: "amirhossein-naderi",
    name: "امیرحسین نادری",
    initials: "ا‌ن",
    role: "مدرس ارائه و داستان‌سرایی داده",
    shortBio:
      "روی تبدیل یادداشت‌های خام و داده‌های پراکنده به اسلایدهای تمیز، شفاف و قابل ارائه در جلسات کار می‌کنم.",
    verifiedSpecialties: [
      "ساختاردهی اسلایدهای مدیریتی",
      "داستان‌سرایی بصری برای جلسات",
    ],
    starterCourseId: "course-slides",
    starterCourseReason:
      "بدون نیاز به تجربه قبلی طراحی، ساختار اسلایدهای جلساتت رو مرتب کن.",
    overallCourseScore: "۴.۷",
    reviewsCount: 94,
    reviews: [
      {
        id: "rev-an-1",
        studentName: "نیلوفر حیدری",
        courseTitle: "ساخت ارائه و اسلاید حرفه‌ای با هوش مصنوعی",
        score: "۴.۷",
        comment:
          "دیگه مجبور نیستم برای چیدن متن روی اسلایدها از شب قبل بیدار بمونم.",
        createdAt: "مهر ۱۴۰۵",
      },
    ],
  },
  {
    slug: "nima-shariati",
    name: "نیما شریعتی",
    initials: "ن‌ش",
    role: "مدیر محصول و راهبر چابک",
    shortBio:
      "به‌جای روش‌های سنگین تئوری، کمک می‌کنم پروژه‌های تیمی را با هوش مصنوعی به کارهای شفاف، زمان‌بندی‌شده و قابل پیگیری تبدیل کنی.",
    verifiedSpecialties: [
      "شکستن پروژه به کارهای روزانه",
      "زمان‌بندی و پیگیری تیمی با AI",
    ],
    starterCourseId: "course-pm",
    starterCourseReason:
      "مناسب برای سرپرست‌ها و کارشناس‌هایی که چند پروژه هم‌زمان رو پیش می‌برن.",
    overallCourseScore: "۴.۸",
    reviewsCount: 108,
    reviews: [
      {
        id: "rev-ns-1",
        studentName: "بهنام زارع",
        courseTitle: "برنامه‌ریزی و مدیریت پروژه با هوش مصنوعی",
        score: "۴.۸",
        comment:
          "الگوی اولویت‌بندی هفتگی و یادداشت ریسک‌ها توی جلسات اسپرینت خیلی به دردم خورد.",
        createdAt: "آبان ۱۴۰۵",
      },
    ],
  },
];

export function getAllInstructorSlugs(): string[] {
  return INSTRUCTOR_CONFIGS.map((i) => i.slug);
}

export function getInstructorSlugByName(name: string): string {
  const found = INSTRUCTOR_CONFIGS.find((i) => i.name === name);
  return found?.slug ?? INSTRUCTOR_CONFIGS[0].slug;
}

export function getInstructorProfileBySlug(
  slug: string
): InstructorProfileData | undefined {
  const config = INSTRUCTOR_CONFIGS.find((i) => i.slug === slug);
  if (!config) return undefined;

  return {
    ...config,
    courses: CATALOG_COURSES.filter((c) => c.instructorName === config.name),
    shortVideos: SHORT_VIDEOS_FEED.filter(
      (v) => v.instructorName === config.name
    ),
  };
}
