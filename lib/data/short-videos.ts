import type { ShortVideoItem } from "./home";

export const SHORT_VIDEO_CATEGORIES = [
  "همه",
  "گزارش‌نویسی و داده‌ها",
  "تولید محتوا و متن",
  "خودکارسازی و ابزارها",
  "مبانی",
] as const;

export type ShortVideoCategory = (typeof SHORT_VIDEO_CATEGORIES)[number];

export interface ShortVideoStep {
  time: string;
  label: string;
}

export interface ShortVideoDetail extends ShortVideoItem {
  category: Exclude<ShortVideoCategory, "همه">;
  outcomeSummary: string;
  durationSeconds: number;
  freeForGuest: boolean;
  instructorName: string;
  promptText: string;
  steps: ShortVideoStep[];
  relatedCourseTitle: string;
  relatedCourseAccess: "اشتراک جامع" | "خرید تک‌دوره";
  relatedCourseDuration: string;
  forumTopicLabel: string;
  forumQuestionCount: number;
}

export const GUEST_FREE_PREVIEW_LIMIT = 3;

export const SHORT_VIDEOS_FEED: ShortVideoDetail[] = [
  {
    id: "sv-pdf-30",
    title: "خلاصه کردن PDF در ۳۰ ثانیه",
    outcomeSummary:
      "فایل گزارش ۵۰ صفحه‌ای رو آپلود کن و دقیقاً ۵ نکته اجرایی و تصمیم‌های لازم رو تحویل بگیر.",
    duration: "۰۰:۳۰",
    durationSeconds: 30,
    tool: "Claude",
    level: "مقدماتی",
    category: "گزارش‌نویسی و داده‌ها",
    likes: 184,
    accent: "blue",
    freeForGuest: true,
    instructorName: "مهرنوش کریمی",
    promptText:
      "این فایل PDF پیوست را بررسی کن و فقط در قالب ۵ بولت کوتاه فارسی:\n۱) مسئله اصلی،\n۲) اعداد کلیدی،\n۳) ریسک‌ها و\n۴) اقدام پیشنهادی این هفته را بدون مقدمه‌چینی بنویس.",
    steps: [
      { time: "۰۰:۰۰", label: "آپلود فایل PDF و تعیین نقش مخاطب گزارش" },
      { time: "۰۰:۱۲", label: "جای‌گذاری پرامپت ساختاریافته ۵ بولتی" },
      { time: "۰۰:۲۲", label: "خروجی گرفتن جدول تصمیم‌ها برای جلسه مدیران" },
    ],
    relatedCourseTitle: "گزارش‌نویسی با هوش مصنوعی",
    relatedCourseAccess: "اشتراک جامع",
    relatedCourseDuration: "۴ ساعت و ۲۰ دقیقه",
    forumTopicLabel: "پرسش‌های گزارش‌نویسی با AI",
    forumQuestionCount: 14,
  },
  {
    id: "sv-sales-table",
    title: "تبدیل جدول فروش به گزارش مدیریتی در ۵۵ ثانیه",
    outcomeSummary:
      "دیتای خام اکسل ماهانه رو به خلاصه تحلیل رشد، افت و پرفروش‌ترین ردیف‌ها تبدیل کن.",
    duration: "۰۰:۵۵",
    durationSeconds: 55,
    tool: "ChatGPT",
    level: "کاربردی",
    category: "گزارش‌نویسی و داده‌ها",
    likes: 246,
    accent: "navy",
    freeForGuest: true,
    instructorName: "سارا توکلی",
    promptText:
      "این جدول فروش ماهانه را تحلیل کن:\n- ۳ محصول یا ردیف با بیشترین تغییر نسبت به ماه قبل را جدا کن\n- دلیل احتمالی هر تغییر را به صورت فرضیه دقیق بنویس\n- یک پاراگراف خلاصه آماده ارسال در گروه مدیریتی بساز.",
    steps: [
      { time: "۰۰:۰۰", label: "کپی‌کردن جدول بدون ستون‌های حساس شخصی" },
      { time: "۰۰:۱۸", label: "درخواست تحلیل مقایسه‌ای با ماه قبل" },
      { time: "۰۰:۴۰", label: "تبدیل خروجی به پاراگراف آماده ایمیل مدیریتی" },
    ],
    relatedCourseTitle: "تحلیل داده‌های اکسل با هوش مصنوعی",
    relatedCourseAccess: "اشتراک جامع",
    relatedCourseDuration: "۵ ساعت",
    forumTopicLabel: "تحلیل جدول و اکسل",
    forumQuestionCount: 23,
  },
  {
    id: "sv-follow-email",
    title: "نوشتن ایمیل پیگیری حرفه‌ای در ۱ دقیقه",
    outcomeSummary:
      "بعد از جلسه یا ارسال پروپوزال، بدون کلیشه‌گویی یک ایمیل پیگیری محترمانه و مؤثر بنویس.",
    duration: "۰۱:۰۰",
    durationSeconds: 60,
    tool: "Gemini",
    level: "مقدماتی",
    category: "تولید محتوا و متن",
    likes: 159,
    accent: "yellow",
    freeForGuest: true,
    instructorName: "وحیده رادمهر",
    promptText:
      "یک ایمیل پیگیری کوتاه (حداکثر ۱۲۰ کلمه) برای کارفرمایی بنویس که ۵ روز پیش پروپوزال [موضوع] را ارسال کرده‌ایم.\nلحن: صمیمی اما حرفه‌ای، بدون اصرار آزاردهنده.\nدر پایان یک پرسش بله/خیر مشخص برای گام بعدی بگذار.",
    steps: [
      { time: "۰۰:۰۰", label: "مشخص‌کردن هدف ایمیل و محدودیت کلمه (۱۲۰ کلمه)" },
      { time: "۰۰:۲۲", label: "حذف جملات تعارفی تکراری با لحن شفاف" },
      { time: "۰۰:۴۵", label: "افزودن دعوت به اقدام تک‌خطی در انتهای ایمیل" },
    ],
    relatedCourseTitle: "تولید محتوای متنی با هوش مصنوعی",
    relatedCourseAccess: "اشتراک جامع",
    relatedCourseDuration: "۳ ساعت و ۴۵ دقیقه",
    forumTopicLabel: "مکاتبات کاری و تولید متن",
    forumQuestionCount: 19,
  },
  {
    id: "sv-voice-checklist",
    title: "استخراج چک‌لیست جلسه از فایل صوتی در ۴۵ ثانیه",
    outcomeSummary:
      "ویس ضبط‌شده جلسه ۴۰ دقیقه‌ای رو به فهرست کارهای هر نفر با زمان انجام تبدیل کن.",
    duration: "۰۰:۴۵",
    durationSeconds: 45,
    tool: "Whisper + Notion",
    level: "کاربردی",
    category: "خودکارسازی و ابزارها",
    likes: 212,
    accent: "violet",
    freeForGuest: false,
    instructorName: "کیانوش فرهادی",
    promptText:
      "از متن پیاده‌شده جلسه زیر، فقط کارهای توافق‌شده (Action Items) را در یک جدول ۳ ستونه استخراج کن:\nستون ۱: عنوان دقیق کار | ستون ۲: مسئول انجام | ستون ۳: زمان یا مهلت توافق‌شده.",
    steps: [
      { time: "۰۰:۰۰", label: "تبدیل صوت جلسه به متن تمیز فارسی" },
      { time: "۰۰:۱۶", label: "فیلترکردن صحبت‌های حاشیه‌ای با پرامپت جدولی" },
      { time: "۰۰:۳۳", label: "کپی مستقیم جدول داخل صفحه تیمی نوشن" },
    ],
    relatedCourseTitle: "خودکارسازی کارهای اداری با هوش مصنوعی",
    relatedCourseAccess: "خرید تک‌دوره",
    relatedCourseDuration: "۶ ساعت و ۱۰ دقیقه",
    forumTopicLabel: "اتوماسیون اداری و نوشن",
    forumQuestionCount: 17,
  },
  {
    id: "sv-prompt-formula",
    title: "ساخت فرمول سه‌جمله‌ای پرامپت در ۵۰ ثانیه",
    outcomeSummary:
      "به جای امتحان کردن ده‌ها پرامپت تصادفی، با یک الگوی ساده دقیقاً همان خروجی را بگیر که می‌خواهی.",
    duration: "۰۰:۵۰",
    durationSeconds: 50,
    tool: "ChatGPT",
    level: "مقدماتی",
    category: "مبانی",
    likes: 289,
    accent: "blue",
    freeForGuest: false,
    instructorName: "وحیده رادمهر",
    promptText:
      "جمله ۱ (نقش و زمینه): تو دستیار [شغل من] هستی و برای [مخاطب] می‌نویسی.\nجمله ۲ (کار دقیق + محدودیت): [کار مشخص] را در حداکثر [تعداد] خط/مورد آماده کن.\nجمله ۳ (قالب خروجی): خروجی را فقط به صورت [جدول / بولت / متن ایمیل] تحویل بده.",
    steps: [
      { time: "۰۰:۰۰", label: "چرا پرامپت‌های کلی جواب مبهم می‌دهند؟" },
      { time: "۰۰:۱۸", label: "فرمول ۳ جمله‌ای: زمینه + محدودیت + قالب خروجی" },
      { time: "۰۰:۳۸", label: "تست سریع قبل و بعد روی یک کار واقعی" },
    ],
    relatedCourseTitle: "تولید محتوای متنی با هوش مصنوعی",
    relatedCourseAccess: "اشتراک جامع",
    relatedCourseDuration: "۳ ساعت و ۴۵ دقیقه",
    forumTopicLabel: "مبانی پرامپت‌نویسی",
    forumQuestionCount: 31,
  },
  {
    id: "sv-excel-clean",
    title: "پاک‌سازی ستون‌های به‌هم‌ریخته اکسل در ۵۵ ثانیه",
    outcomeSummary:
      "شماره تماس‌ها، تاریخ‌های ناقص و فاصله‌های اضافی یک ستون ۱۰۰۰ ردیفی را بدون فرمول سخت مرتب کن.",
    duration: "۰۰:۵۵",
    durationSeconds: 55,
    tool: "Excel + Claude",
    level: "کاربردی",
    category: "گزارش‌نویسی و داده‌ها",
    likes: 173,
    accent: "navy",
    freeForGuest: false,
    instructorName: "سارا توکلی",
    promptText:
      "این ۲۰ نمونه از ردیف‌های شلوغ اکسل را ببین. یک فرمول اکسل سازگار با نسخه فارسی/انگلیسی بنویس که:\n۱) فاصله‌های اضافی ابتدا و انتها را حذف کند،\n۲) فرمت شماره‌ها را یکدست کند،\n۳) خطاهای احتمالی را با متن واضح نشان دهد.",
    steps: [
      { time: "۰۰:۰۰", label: "نمونه‌برداری ۲۰ ردیف واقعی به جای کل فایل" },
      { time: "۰۰:۲۲", label: "دریافت فرمول مرحله‌به‌مرحله همراه با توضیح فارسی" },
      { time: "۰۰:۴۴", label: "اعمال روی ستون اصلی و بررسی خطاهای باقیمانده" },
    ],
    relatedCourseTitle: "تحلیل داده‌های اکسل با هوش مصنوعی",
    relatedCourseAccess: "اشتراک جامع",
    relatedCourseDuration: "۵ ساعت",
    forumTopicLabel: "تحلیل جدول و اکسل",
    forumQuestionCount: 23,
  },
  {
    id: "sv-caption-brand",
    title: "تبدیل ایده خام به ۳ کپشن با لحن خودت در ۴۵ ثانیه",
    outcomeSummary:
      "نمونه متن‌های قبلی خودت را بده تا خروجی هوش مصنوعی شبیه ربات نباشد و لحن برندت حفظ شود.",
    duration: "۰۰:۴۵",
    durationSeconds: 45,
    tool: "Claude",
    level: "مقدماتی",
    category: "تولید محتوا و متن",
    likes: 198,
    accent: "yellow",
    freeForGuest: false,
    instructorName: "وحیده رادمهر",
    promptText:
      "این ۲ نمونه متن قبلی من است (فقط سبک جمله و لحن را یاد بگیر). بر اساس همان لحن صمیمی و بدون اغراق، ۳ کپشن کوتاه درباره [موضوع پست] بنویس که هر کدام خط اول متفاوتی برای شروع داشته باشد.",
    steps: [
      { time: "۰۰:۰۰", label: "انتخاب ۲ نمونه متن واقعی برای آموزش لحن" },
      { time: "۰۰:۱۵", label: "جلوگیری از کلمات تبلیغاتی و کلیشه‌ای" },
      { time: "۰۰:۳۲", label: "ساخت ۳ نسخه کوتاه قابل ویرایش نهایی" },
    ],
    relatedCourseTitle: "تولید محتوای متنی با هوش مصنوعی",
    relatedCourseAccess: "اشتراک جامع",
    relatedCourseDuration: "۳ ساعت و ۴۵ دقیقه",
    forumTopicLabel: "مکاتبات کاری و تولید متن",
    forumQuestionCount: 19,
  },
  {
    id: "sv-form-telegram",
    title: "ارسال خودکار خلاصه فرم ثبت‌نام به تلگرام در ۱ دقیقه",
    outcomeSummary:
      "هر وقت مشتری فرم سایتت رو پر کرد، خلاصه خوانا و برچسب‌خورده همون لحظه برات بیاد.",
    duration: "۰۱:۰۰",
    durationSeconds: 60,
    tool: "Make + ChatGPT",
    level: "متوسط",
    category: "خودکارسازی و ابزارها",
    likes: 229,
    accent: "violet",
    freeForGuest: false,
    instructorName: "کیانوش فرهادی",
    promptText:
      "این JSON ورودی فرم را به یک پیام ۲ خطی فارسی تبدیل کن:\n- خط اول: نام و نوع درخواست\n- خط دوم: اولویت پیشنهادشده (فوری / عادی) و پیشنهاد پاسخ اولیه.",
    steps: [
      { time: "۰۰:۰۰", label: "اتصال ماژول فرم به سناریوی Make" },
      { time: "۰۰:۲۴", label: "فشرده‌سازی پاسخ با ماژول متن هوش مصنوعی" },
      { time: "۰۰:۴۶", label: "ارسال اعلان مرتب به گروه پشتیبانی یا مدیر" },
    ],
    relatedCourseTitle: "خودکارسازی کارهای اداری با هوش مصنوعی",
    relatedCourseAccess: "خرید تک‌دوره",
    relatedCourseDuration: "۶ ساعت و ۱۰ دقیقه",
    forumTopicLabel: "اتوماسیون اداری و نوشن",
    forumQuestionCount: 17,
  },
];
