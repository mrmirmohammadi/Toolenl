export interface ShortVideoItem {
  id: string;
  title: string;
  duration: string;
  tool: string;
  level: string;
  likes: number;
  accent: "blue" | "yellow" | "violet" | "navy";
}

export interface CourseItem {
  id: string;
  title: string;
  outcome: string;
  instructorName: string;
  instructorRole: string;
  instructorInitials: string;
  duration: string;
  level: string;
  advisoryPrerequisite: string;
  accessType: "اشتراک جامع" | "خرید تک‌دوره";
  priceLabel: string;
}

export interface TunnelStepItem {
  step: string;
  title: string;
  description: string;
  badgeText: string;
}

export const HEADER_NAV_LINKS = [
  { label: "ویدیوهای کوتاه", href: "/short-videos" },
  { label: "دوره‌ها", href: "/courses" },
  { label: "تالار گفت‌وگو", href: "/forum" },
  { label: "درباره ما", href: "/about" },
] as const;

export const TUNNEL_STEPS: TunnelStepItem[] = [
  {
    step: "۱",
    title: "هدفت رو مشخص کن",
    description:
      "بگو چه شغلی داری یا دقیقاً دنبال حل چه مسئله‌ای هستی تا در شلوغی ابزارها گم نشی.",
    badgeText: "بدون سردرگمی",
  },
  {
    step: "۲",
    title: "آموزش مرتبط رو انتخاب کن",
    description:
      "بین ویدیوهای سریع «یک کار، یک دقیقه» یا دوره‌های مهارت‌محور، مورد مناسب خودت رو بردار.",
    badgeText: "مسیر شفاف",
  },
  {
    step: "۳",
    title: "یاد بگیر و به کار بگیر",
    description:
      "با تمرین عملی و مثال واقعی، همون روز نتیجه یادگیری رو توی کار و زندگیت ببین.",
    badgeText: "کاربرد واقعی",
  },
];

export const FEATURED_SHORT_VIDEOS: ShortVideoItem[] = [
  {
    id: "sv-pdf-30",
    title: "خلاصه کردن PDF در ۳۰ ثانیه",
    duration: "۰۰:۳۰",
    tool: "Claude",
    level: "مقدماتی",
    likes: 184,
    accent: "blue",
  },
  {
    id: "sv-sales-table",
    title: "تبدیل جدول فروش به گزارش مدیریتی در ۵۵ ثانیه",
    duration: "۰۰:۵۵",
    tool: "ChatGPT",
    level: "کاربردی",
    likes: 246,
    accent: "navy",
  },
  {
    id: "sv-follow-email",
    title: "نوشتن ایمیل پیگیری حرفه‌ای در ۱ دقیقه",
    duration: "۰۱:۰۰",
    tool: "Gemini",
    level: "مقدماتی",
    likes: 159,
    accent: "yellow",
  },
  {
    id: "sv-voice-checklist",
    title: "استخراج چک‌لیست جلسه از فایل صوتی در ۴۵ ثانیه",
    duration: "۰۰:۴۵",
    tool: "Whisper + Notion",
    level: "کاربردی",
    likes: 212,
    accent: "violet",
  },
];

export const FEATURED_COURSES: CourseItem[] = [
  {
    id: "course-reporting",
    title: "گزارش‌نویسی با هوش مصنوعی",
    outcome: "تنظیم گزارش‌های هفتگی و خلاصه مدیریتی دقیق در نصف زمان همیشگی",
    instructorName: "مهرنوش کریمی",
    instructorRole: "متخصص بهره‌وری و تحلیل داده",
    instructorInitials: "م‌ک",
    duration: "۴ ساعت و ۲۰ دقیقه",
    level: "مقدماتی تا کاربردی",
    advisoryPrerequisite: "آشنایی پایه با کار روزمره کامپیوتر (پیش‌نیاز مسدودکننده نیست)",
    accessType: "اشتراک جامع",
    priceLabel: "مشمول اشتراک جامع",
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
    advisoryPrerequisite: "پیشنهادی: تماشای ۲ ویدیوی کوتاه مبانی پرامپت (اختیاری)",
    accessType: "اشتراک جامع",
    priceLabel: "مشمول اشتراک جامع",
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
    advisoryPrerequisite: "پیشنهادی: دوره گزارش‌نویسی با هوش مصنوعی (تأثیری در دسترسی ندارد)",
    accessType: "خرید تک‌دوره",
    priceLabel: "خرید تک‌دوره · ۱,۴۹۰,۰۰۰ تومان",
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
    advisoryPrerequisite: "آشنایی مقدماتی با اکسل یا گوگل شیت (اختیاری)",
    accessType: "اشتراک جامع",
    priceLabel: "مشمول اشتراک جامع",
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
    advisoryPrerequisite: "بدون پیش‌نیاز",
    accessType: "اشتراک جامع",
    priceLabel: "مشمول اشتراک جامع",
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
    advisoryPrerequisite: "پیشنهادی: آشنایی با مدیریت کارها (اختیاری)",
    accessType: "خرید تک‌دوره",
    priceLabel: "خرید تک‌دوره · ۱,۲۵۰,۰۰۰ تومان",
  },
];

export const NEL_QUICK_GOALS = [
  {
    key: "office",
    label: "کارهای اداری و گزارش",
    recommendation: "پیشنهاد نِل برای شروع: ویدیوی ۳۰ ثانیه‌ای «خلاصه کردن PDF» و دوره «گزارش‌نویسی با هوش مصنوعی».",
  },
  {
    key: "content",
    label: "تولید محتوا و متن",
    recommendation: "پیشنهاد نِل برای شروع: ویدیوی ۱ دقیقه‌ای «نوشتن ایمیل پیگیری» و دوره «تولید محتوای متنی با هوش مصنوعی».",
  },
  {
    key: "automation",
    label: "خودکارسازی و داده",
    recommendation: "پیشنهاد نِل برای شروع: ویدیوی «تبدیل جدول فروش به گزارش» و دوره «تحلیل داده‌های اکسل با هوش مصنوعی».",
  },
] as const;

export const NEL_TIME_OPTIONS = ["۵ دقیقه", "۱۰ دقیقه", "۲۰ دقیقه"] as const;
