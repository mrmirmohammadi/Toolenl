export const FORUM_TOPICS = [
  "همه",
  "گزارش‌نویسی و داده‌ها",
  "تولید محتوا و متن",
  "خودکارسازی و ابزارها",
  "ویدیوهای کوتاه",
] as const;

export type ForumTopic = (typeof FORUM_TOPICS)[number];
export type ForumPostKind = "question" | "experience";
export type ForumSortOption = "helpful" | "newest";

export interface ForumReplyItem {
  id: string;
  authorName: string;
  authorRole?: string;
  isInstructor: boolean;
  body: string;
  createdAt: string;
}

export interface ForumThreadItem {
  id: string;
  kind: ForumPostKind;
  title: string;
  body: string;
  authorName: string;
  topic: Exclude<ForumTopic, "همه">;
  linkedResourceTitle: string;
  linkedResourceHref: string;
  createdAtLabel: string;
  newestRank: number;
  upvotes: number;
  downvotes: number;
  replies: ForumReplyItem[];
  keywords: string[];
}

export const FORUM_LINKABLE_COURSES = [
  { label: "گزارش‌نویسی با هوش مصنوعی", href: "/courses/course-reporting", topic: "گزارش‌نویسی و داده‌ها" },
  { label: "تحلیل داده‌های اکسل با هوش مصنوعی", href: "/courses/course-excel", topic: "گزارش‌نویسی و داده‌ها" },
  { label: "تولید محتوای متنی با هوش مصنوعی", href: "/courses/course-content", topic: "تولید محتوا و متن" },
  { label: "خودکارسازی کارهای اداری با هوش مصنوعی", href: "/courses/course-automation", topic: "خودکارسازی و ابزارها" },
  { label: "ویدیوی کوتاه: خلاصه کردن PDF در ۳۰ ثانیه", href: "/short-videos", topic: "ویدیوهای کوتاه" },
] as const;

export const REPORT_REASONS = [
  "تبلیغات یا لینک اسپم",
  "محتوای نامرتبط با موضوع دوره/تالار",
  "لحن نامناسب یا توهین‌آمیز",
  "افشای اطلاعات محرمانه یا شخصی",
] as const;

export const INITIAL_FORUM_THREADS: ForumThreadItem[] = [
  {
    id: "th-1",
    kind: "question",
    title: "جلوگیری از به‌هم‌ریختگی جدول فارسی و عدد در گزارش‌های خروجی اکسل",
    body: "وقتی جدول فروش فارسی را به مدل می‌دهم و خروجی تحلیلی می‌گیرم، ستون درصدها و عددهای فارسی در کپی به اکسل جابه‌جا می‌شن. راه مطمئن چیه؟",
    authorName: "پدرام رضایی",
    topic: "گزارش‌نویسی و داده‌ها",
    linkedResourceTitle: "گزارش‌نویسی با هوش مصنوعی",
    linkedResourceHref: "/courses/course-reporting",
    createdAtLabel: "۲ ساعت پیش",
    newestRank: 1,
    upvotes: 24,
    downvotes: 1,
    keywords: ["گزارش", "جدول", "اکسل", "فارسی", "عدد", "خروجی"],
    replies: [
      {
        id: "r-1-1",
        authorName: "مهرنوش کریمی",
        authorRole: "متخصص بهره‌وری و تحلیل داده",
        isInstructor: true,
        body: "در پرامپت فصل دوم حتماً بنویس خروجی را در قالب CSV یا جدول Markdown با اعداد انگلیسی یکدست بدهد و در نهایت فقط فرمت نمایش ستون را در اکسل فارسی کن. نمونه آماده را داخل تمرین دوره گذاشته‌ام.",
        createdAt: "۱ ساعت پیش",
      },
      {
        id: "r-1-2",
        authorName: "مهسا شریفی",
        isInstructor: false,
        body: "من با فرمت CSV تست کردم و مستقیم داخل اکسل بدون به‌هم‌ریختگی راست‌به‌چپ باز شد، خیلی زمانم رو ذخیره کرد.",
        createdAt: "۴۰ دقیقه پیش",
      },
    ],
  },
  {
    id: "th-2",
    kind: "experience",
    title: "تجربه واقعی: کاهش زمان خلاصه جلسات هفتگی از ۹۰ دقیقه به ۱۰ دقیقه",
    body: "با ترکیب ویدیوی کوتاه استخراج چک‌لیست صوتی و قالب ۳ بخشی گزارش‌نویسی، الان بلافاصله بعد از جلسه لینک خروجی کارهای هر نفر رو توی گروه تیمی می‌ذارم و هیچ کاری جا نمی‌مونه.",
    authorName: "آرش کاظمی",
    topic: "خودکارسازی و ابزارها",
    linkedResourceTitle: "خودکارسازی کارهای اداری با هوش مصنوعی",
    linkedResourceHref: "/courses/course-automation",
    createdAtLabel: "۵ ساعت پیش",
    newestRank: 2,
    upvotes: 31,
    downvotes: 0,
    keywords: ["تجربه", "جلسه", "چک‌لیست", "صوتی", "گزارش", "اتوماسیون", "تیم"],
    replies: [
      {
        id: "r-2-1",
        authorName: "کیانوش فرهادی",
        authorRole: "معمار اتوماسیون",
        isInstructor: true,
        body: "دمت گرم آرش! اگر ستون مسئول انجام و مهلت رو هم به نوشن وصل کنی، هفته‌ای چند ساعت دیگه هم جلو می‌افتی.",
        createdAt: "۳ ساعت پیش",
      },
    ],
  },
  {
    id: "th-3",
    kind: "question",
    title: "چطور لحن کپشن‌ها بعد از ۱۰ بار استفاده تکراری و مصنوعی نشه؟",
    body: "با کارت لحن برند که توی فصل اول یاد گرفتم شروع کردم و عالی بود، ولی حس می‌کنم شروع جملات چند پست آخر شبیه هم شده. چطور تنوع بدم؟",
    authorName: "سحر موسوی",
    topic: "تولید محتوا و متن",
    linkedResourceTitle: "تولید محتوای متنی با هوش مصنوعی",
    linkedResourceHref: "/courses/course-content",
    createdAtLabel: "دیروز",
    newestRank: 3,
    upvotes: 19,
    downvotes: 1,
    keywords: ["کپشن", "لحن", "برند", "محتوا", "تکراری", "پرامپت"],
    replies: [
      {
        id: "r-3-1",
        authorName: "وحیده رادمهر",
        authorRole: "طراح استراتژی محتوا",
        isInstructor: true,
        body: "کافیه خط اول هر پرامپت بخوای ۳ ورودی کاملاً متفاوت بسازه: یکی با سؤال روزمره، یکی با عدد یا تجربه کوتاه، و یکی با یک اشتباه رایج. بعد خودت بهترین شروع رو انتخاب کن.",
        createdAt: "۲۰ ساعت پیش",
      },
    ],
  },
  {
    id: "th-4",
    kind: "question",
    title: "برای خلاصه‌سازی PDFهای فارسی ۵۰ صفحه‌ای، متن اسکن‌شده هم کار می‌کنه؟",
    body: "ویدیوی ۳۰ ثانیه‌ای خلاصه کردن PDF رو دیدم، ولی بعضی فایل‌های اداری ما اسکن تصویر هستن نه متن قابل انتخاب. راهکارش چیه؟",
    authorName: "رضا یوسفی",
    topic: "ویدیوهای کوتاه",
    linkedResourceTitle: "ویدیوهای کوتاه: یک کار، یک دقیقه",
    linkedResourceHref: "/short-videos",
    createdAtLabel: "۲ روز پیش",
    newestRank: 4,
    upvotes: 27,
    downvotes: 2,
    keywords: ["pdf", "فایل", "خلاصه", "اسکن", "تصویر", "فارسی"],
    replies: [
      {
        id: "r-4-1",
        authorName: "مهرنوش کریمی",
        authorRole: "متخصص بهره‌وری و تحلیل داده",
        isInstructor: true,
        body: "اگر PDF اسکن باکیفیت باشه، ابزارهایی مثل Claude و Gemini صفحات اول را مستقیم می‌خوانند؛ برای فایل‌های خیلی طولانی بهتره اول به فایل‌های ۱۰ صفحه‌ای بشکنی تا دقت عددها پایین نیاد.",
        createdAt: "۱ روز پیش",
      },
    ],
  },
];
