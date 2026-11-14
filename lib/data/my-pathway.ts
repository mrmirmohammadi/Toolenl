export type PathwayTabStatus = "in-progress" | "up-next" | "completed";

export interface PathwayCourseEntry {
  id: string;
  title: string;
  instructorName: string;
  status: PathwayTabStatus;
  progressPercent: number;
  resumeChapter: string;
  resumeTimestamp: string;
  duration: string;
  isOwned: boolean;
  accessType: "اشتراک جامع" | "خرید تک‌دوره";
  priceLabel: string;
  hasRecommendedPrerequisite?: boolean;
  recommendedPrerequisiteTitle?: string;
}

export interface NelTimeSuggestion {
  minutes: "۵ دقیقه" | "۱۰ دقیقه" | "۲۰ دقیقه";
  recommendationTitle: string;
  sourceLabel: string;
  reason: string;
  targetCourseId: string;
  ctaLabel: string;
}

export interface StudentBadgeItem {
  id: string;
  title: string;
  description: string;
  earnedDate: string;
}

export interface DigitalCertificateItem {
  id: string;
  courseTitle: string;
  issuedAt: string;
  verificationCode: string;
  totalMinutes: number;
}

export const INITIAL_LEARNING_GOAL = {
  title: "ساخت گزارش‌های هفتگی و خودکارسازی کارهای اداری بدون کدنویسی",
  focusArea: "کارهای اداری، اکسل و گزارش‌دهی به مدیران",
  weeklyTargetMinutes: 90,
};

export const PATHWAY_GOAL_PRESETS = [
  {
    id: "goal-office",
    title: "ساخت گزارش‌های هفتگی و خودکارسازی کارهای اداری بدون کدنویسی",
    focusArea: "کارهای اداری، اکسل و گزارش‌دهی به مدیران",
  },
  {
    id: "goal-content",
    title: "تولید محتوای متنی و اسلاید ارائه با لحن اختصاصی برند",
    focusArea: "تولید محتوا، کپشن و ارائه مدیریتی",
  },
  {
    id: "goal-data",
    title: "تحلیل جدول‌های فروش اکسل و پژوهش سریع بازار",
    focusArea: "اکسل، تحلیل داده و تصمیم‌سازی",
  },
] as const;

export const NEL_TIME_BUDGET_SUGGESTIONS: NelTimeSuggestion[] = [
  {
    minutes: "۵ دقیقه",
    recommendationTitle: "خلاصه کردن PDF در ۳۰ ثانیه + تمرین پرامپت ۳ خطی",
    sourceLabel: "ویدیوی کوتاه · بخش سریع",
    reason:
      "با ۵ دقیقه فرصت، بهترین کار مرور سریع یک الگوی آماده است تا بلافاصله امروز ازش استفاده کنی.",
    targetCourseId: "course-reporting",
    ctaLabel: "شروع همین بخش ۵ دقیقه‌ای",
  },
  {
    minutes: "۱۰ دقیقه",
    recommendationTitle: "ادامه «گزارش‌نویسی با هوش مصنوعی» — فصل ۲، درس ۱",
    sourceLabel: "دقیقاً از محل توقف قبلی (۱۱:۳۵)",
    reason:
      "فقط ۱۰ دقیقه لازم داری تا بخش مقایسه جدول ماهانه این درس رو کامل کنی.",
    targetCourseId: "course-reporting",
    ctaLabel: "ادامه از دقیقه ۱۱:۳۵ ←",
  },
  {
    minutes: "۲۰ دقیقه",
    recommendationTitle: "تکمیل درس ساخت قالب ثابت + شروع تحلیل اکسل",
    sourceLabel: "پیشنهاد ترکیبی نِل",
    reason:
      "۲۰ دقیقه زمان عالیه: درس جاری گزارش‌نویسی رو می‌بندی و اولین جدول فروش رو هم در اکسل تمیز می‌کنی.",
    targetCourseId: "course-excel",
    ctaLabel: "شروع برنامه ۲۰ دقیقه‌ای ←",
  },
];

export const INITIAL_PATHWAY_COURSES: PathwayCourseEntry[] = [
  {
    id: "course-reporting",
    title: "گزارش‌نویسی با هوش مصنوعی",
    instructorName: "مهرنوش کریمی",
    status: "in-progress",
    progressPercent: 64,
    resumeChapter: "فصل ۲ · درس ۱: خواندن جدول‌های چندستونه فروش",
    resumeTimestamp: "۱۱:۳۵ از ۱۸:۰۰",
    duration: "۴ ساعت و ۲۰ دقیقه",
    isOwned: true,
    accessType: "اشتراک جامع",
    priceLabel: "فعال با اشتراک جامع",
  },
  {
    id: "course-excel",
    title: "تحلیل داده‌های اکسل با هوش مصنوعی",
    instructorName: "سارا توکلی",
    status: "in-progress",
    progressPercent: 28,
    resumeChapter: "فصل ۱ · درس ۳: پاک‌سازی داده‌های تکراری",
    resumeTimestamp: "۰۴:۱۲ از ۱۵:۴۰",
    duration: "۵ ساعت",
    isOwned: true,
    accessType: "اشتراک جامع",
    priceLabel: "فعال با اشتراک جامع",
  },
  {
    id: "course-automation",
    title: "خودکارسازی کارهای اداری با هوش مصنوعی",
    instructorName: "کیانوش فرهادی",
    status: "up-next",
    progressPercent: 0,
    resumeChapter: "فصل ۱ · درس ۱: نقشه اتصال فرم‌ها به گزارش",
    resumeTimestamp: "۰۰:۰۰ (آماده شروع)",
    duration: "۶ ساعت و ۱۰ دقیقه",
    isOwned: false,
    accessType: "خرید تک‌دوره",
    priceLabel: "خرید تک‌دوره · ۱,۴۹۰,۰۰۰ تومان",
    hasRecommendedPrerequisite: true,
    recommendedPrerequisiteTitle: "گزارش‌نویسی با هوش مصنوعی",
  },
  {
    id: "course-assistant",
    title: "ساخت دستیار اختصاصی پشتیبانی با هوش مصنوعی",
    instructorName: "کیانوش فرهادی",
    status: "up-next",
    progressPercent: 0,
    resumeChapter: "فصل ۱ · درس ۱: ساختار پایگاه دانش",
    resumeTimestamp: "۰۰:۰۰ (آماده شروع)",
    duration: "۵ ساعت و ۴۰ دقیقه",
    isOwned: false,
    accessType: "خرید تک‌دوره",
    priceLabel: "خرید تک‌دوره · ۱,۸۵۰,۰۰۰ تومان",
    hasRecommendedPrerequisite: true,
    recommendedPrerequisiteTitle: "خودکارسازی کارهای اداری با هوش مصنوعی",
  },
  {
    id: "course-slides",
    title: "ساخت ارائه و اسلاید حرفه‌ای با هوش مصنوعی",
    instructorName: "امیرحسین نادری",
    status: "up-next",
    progressPercent: 0,
    resumeChapter: "فصل ۱ · درس ۱: تبدیل متن خام به ساختار اسلاید",
    resumeTimestamp: "۰۰:۰۰ (آماده شروع)",
    duration: "۳ ساعت و ۱۵ دقیقه",
    isOwned: true,
    accessType: "اشتراک جامع",
    priceLabel: "فعال با اشتراک جامع",
  },
  {
    id: "course-content",
    title: "تولید محتوای متنی با هوش مصنوعی",
    instructorName: "وحیده رادمهر",
    status: "completed",
    progressPercent: 100,
    resumeChapter: "تکمیل تمام ۱۵ درس و تأیید تمرین نهایی",
    resumeTimestamp: "تکمیل‌شده",
    duration: "۳ ساعت و ۴۵ دقیقه",
    isOwned: true,
    accessType: "اشتراک جامع",
    priceLabel: "گواهی دیجیتال صادر شد",
  },
];

export const STUDENT_PROGRESS_STATS = {
  overallProgressPercent: 52,
  totalWatchedMinutes: 418,
  participationPoints: 450,
  renewalDiscountPercent: 18,
};

export const STUDENT_BADGES: StudentBadgeItem[] = [
  {
    id: "b-first-course",
    title: "اولین خروجی عملی",
    description: "تکمیل کامل یک دوره مهارت‌محور همراه با تمرین نهایی",
    earnedDate: "مهر ۱۴۰۵",
  },
  {
    id: "b-forum-helper",
    title: "هم‌مسیر فعال تالار",
    description: "دریافت بیش از ۱۰ رأی مفید از دانشجوها در پرسش‌وپاسخ‌ها",
    earnedDate: "آبان ۱۴۰۵",
  },
  {
    id: "b-consistent",
    title: "یادگیری منظم هفتگی",
    description: "۳ هفته متوالی مطالعه طبق زمان‌بندی شخصی بدون وقفه",
    earnedDate: "آبان ۱۴۰۵",
  },
];

export const DIGITAL_CERTIFICATES: DigitalCertificateItem[] = [
  {
    id: "cert-content-01",
    courseTitle: "تولید محتوای متنی با هوش مصنوعی",
    issuedAt: "۱۸ مهر ۱۴۰۵",
    verificationCode: "TNL-1405-8842-CT",
    totalMinutes: 225,
  },
];
