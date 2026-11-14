import { CATALOG_COURSES, type CatalogCourseDetail } from "./courses";

export interface CourseLessonItem {
  id: string;
  title: string;
  duration: string;
  isFreeSample: boolean;
  summary: string;
  keyTakeaway: string;
}

export interface CourseModuleItem {
  id: string;
  title: string;
  duration: string;
  lessons: CourseLessonItem[];
}

export interface CoursePrerequisiteItem {
  title: string;
  href: string;
  kind: "دوره پیشنهادی" | "ویدیوی کوتاه ۱ دقیقه‌ای";
  reason: string;
}

export interface CourseForumThreadPreview {
  id: string;
  authorName: string;
  question: string;
  answerAuthor: string;
  isInstructor: boolean;
  answer: string;
  upvotes: number;
}

export interface SingleCourseDetail extends CatalogCourseDetail {
  updatedAt: string;
  outcomesAfterCourse: string[];
  modules: CourseModuleItem[];
  recommendedPrerequisites: CoursePrerequisiteItem[];
  projectBrief: {
    title: string;
    description: string;
    acceptedFormats: string;
  };
  forumThreads: CourseForumThreadPreview[];
}

const CUSTOM_DETAILS_BY_ID: Record<
  string,
  Omit<SingleCourseDetail, keyof CatalogCourseDetail>
> = {
  "course-reporting": {
    updatedAt: "آبان ۱۴۰۵",
    outcomesAfterCourse: [
      "فایل‌های اکسل، یادداشت جلسات و گزارش‌های خام هفتگی رو زیر ۱۰ دقیقه به گزارش مدیریتی خوانا تبدیل کنی.",
      "قالب ثابت گزارش هفتگی مخصوص تیم خودت بسازی تا هر بار از صفر شروع نکنی.",
      "داده‌های حساس شرکت رو قبل از دادن به ابزارهای هوش مصنوعی پاک‌سازی و امن کنی.",
      "برای اعداد کلیدی نمودار و جمع‌بندی تصمیم‌محور خروجی بگیری.",
    ],
    modules: [
      {
        id: "mod-1",
        title: "فصل ۱ · ساختار گزارش‌های کاربردی و آماده‌سازی ورودی",
        duration: "۱ ساعت و ۵ دقیقه",
        lessons: [
          {
            id: "l-1-1",
            title: "چرا گزارش‌های طولانی دیده نمی‌شن و مدل ۳ لایه گزارش چیست؟",
            duration: "۰۸:۴۰",
            isFreeSample: true,
            summary:
              "در این درس نمونه، یک گزارش ۱۰ صفحه‌ای شلوغ را به خلاصه سه‌بخشی «وضعیت، ریسک، اقدام بعدی» تبدیل می‌کنیم.",
            keyTakeaway: "ساختار خلاصه اجرایی ۱ دقیقه‌ای قبل از نوشتن حتی یک خط متن.",
          },
          {
            id: "l-1-2",
            title: "پاک‌سازی اطلاعات محرمانه و اعداد حساس پیش از پرامپت‌نویسی",
            duration: "۱۲:۱۵",
            isFreeSample: true,
            summary:
              "چطور بدون افشای نام مشتری یا مبالغ محرمانه سازمان، تحلیل دقیق از هوش مصنوعی بگیریم.",
            keyTakeaway: "چک‌لیست جایگزینی داده‌های حساس با برچسب‌های امن.",
          },
          {
            id: "l-1-3",
            title: "تبدیل یادداشت‌های پراکنده جلسه به پیش‌نویس گزارش هفتگی",
            duration: "۱۵:۲۰",
            isFreeSample: false,
            summary: "کارگاه عملی تبدیل نوت‌های خام جلسه تیمی به گزارش رسمی یکدست.",
            keyTakeaway: "پرامپت آماده تبدیل بولت‌های صوتی/متنی به گزارش.",
          },
        ],
      },
      {
        id: "mod-2",
        title: "فصل ۲ · گزارش فروش، عملکرد تیم و مقایسه ماهانه",
        duration: "۱ ساعت و ۴۰ دقیقه",
        lessons: [
          {
            id: "l-2-1",
            title: "خواندن جدول‌های چندستونه فروش و کشف روند رشد یا افت",
            duration: "۱۸:۰۰",
            isFreeSample: false,
            summary: "ورود جدول CSV و استخراج ۳ تغییر کلیدی ماه جاری.",
            keyTakeaway: "قالب مقایسه ماه‌به‌ماه بدون خطای محاسباتی.",
          },
          {
            id: "l-2-2",
            title: "ساخت قالب ثابت گزارش برای ارسال در اتوماسیون یا ایمیل مدیران",
            duration: "۲۱:۳۰",
            isFreeSample: false,
            summary: "تعریف لحن، طول جملات و فرمت خروجی ثابت برای گزارش‌های تکراری.",
            keyTakeaway: "الگوی Reusable Report Template.",
          },
        ],
      },
      {
        id: "mod-3",
        title: "فصل ۳ · پروژه نهایی و کنترل کیفیت خروجی",
        duration: "۱ ساعت و ۳۵ دقیقه",
        lessons: [
          {
            id: "l-3-1",
            title: "راستی‌آزمایی اعداد خروجی و جلوگیری از خطاهای مدل زبانی",
            duration: "۱۴:۵۰",
            isFreeSample: false,
            summary: "چک‌لیست ۲ دقیقه‌ای کنترل عدد و منبع پیش از ارسال گزارش.",
            keyTakeaway: "پرامپت بازبینی و کشف تناقض در متن گزارش.",
          },
        ],
      },
    ],
    recommendedPrerequisites: [
      {
        title: "ویدیوی کوتاه: خلاصه کردن PDF در ۳۰ ثانیه",
        href: "/short-videos",
        kind: "ویدیوی کوتاه ۱ دقیقه‌ای",
        reason: "دید خوبی به ساختار خلاصه‌سازی فوری می‌دهد؛ ندیدنش مانع شروع دوره نیست.",
      },
    ],
    projectBrief: {
      title: "تمرین عملی: تبدیل یک گزارش خام تیمی به خلاصه ۱ صفحه‌ای",
      description:
        "یک متن یادداشت جلسه یا جدول فرضی فروش را با پرامپت فصل اول به گزارش ۳ بخشی (خلاصه، عدد کلیدی، اقدام هفته) تبدیل کن و فایل PDF یا DOCX خروجی را ارسال کن تا مدرس بازخورد بنویسد.",
      acceptedFormats: "PDF, DOCX, XLSX (حداکثر ۱۰ مگابایت)",
    },
    forumThreads: [
      {
        id: "ft-1",
        authorName: "پدرام رضایی",
        question:
          "برای گزارش‌های مالی فارسی که عدد و درصد قاطی دارن، چطور جلوی به‌هم‌ریختگی راست‌به‌چپ جدول رو بگیریم؟",
        answerAuthor: "مهرنوش کریمی",
        isInstructor: true,
        answer:
          "داخل پرامپت فصل دوم حتماً بنویس خروجی را در جدول Markdown ساده با اعداد انگلیسی یا فارسی یکدست بدهد و در اکسل ستون درصد را جدا کپی کن. نمونه فایل آماده را هم در تمرین ضمیمه گذاشتم.",
        upvotes: 18,
      },
      {
        id: "ft-2",
        authorName: "نازنین احمدی",
        question:
          "آیا حتماً باید قبل از این دوره، مبانی پرامپت‌نویسی رو کامل دیده باشم؟",
        answerAuthor: "مهرنوش کریمی",
        isInstructor: true,
        answer:
          "نه اصلاً! همه قالب‌های پرامپت از صفر داخل همین دوره آموزش داده می‌شن و پیش‌نیاز مسدودکننده نداریم.",
        upvotes: 12,
      },
    ],
  },
  "course-content": {
    updatedAt: "آبان ۱۴۰۵",
    outcomesAfterCourse: [
      "لحن واقعی برند یا صدای شخصی خودت رو تعریف کنی تا خروجی‌ها شبیه متن‌های رباتی و تکراری نشن.",
      "تقویم محتوای ماهانه با سوژه‌های مرتبط به محصول یا خدمت واقعی بسازی.",
      "یک مقاله یا ویدیو را به ۵ فرمت (کپشن، اسلاید، ایمیل، توییت و سناریوی کوتاه) تبدیل کنی.",
    ],
    modules: [
      {
        id: "c-mod-1",
        title: "فصل ۱ · استخراج لحن برند و حذف کلیشه‌های ماشینی",
        duration: "۱ ساعت و ۱۰ دقیقه",
        lessons: [
          {
            id: "cl-1-1",
            title: "چرا بیشتر متن‌های هوش مصنوعی مصنوعی به نظر میان؟",
            duration: "۰۹:۲۰",
            isFreeSample: true,
            summary: "تحلیل ۳ اشتباه رایج در پرامپت تولید محتوا و راه اصلاح سریع.",
            keyTakeaway: "لیست کلمات ممنوعه برای حفظ لحن طبیعی فارسی.",
          },
          {
            id: "cl-1-2",
            title: "تغذیه ۲ نمونه نوشته واقعی برای ساخت راهنمای لحن (Tone Card)",
            duration: "۱۴:۰۰",
            isFreeSample: true,
            summary: "ساخت کارت راهنمای سبک نوشتار مخصوص پیج یا وبلاگ خودت.",
            keyTakeaway: "قالب Tone Card آماده کپی.",
          },
          {
            id: "cl-1-3",
            title: "بازنویسی و کوتاه‌کردن کپشن بدون افت معنا",
            duration: "۱۶:۴۵",
            isFreeSample: false,
            summary: "تبدیل پاراگراف‌های طولانی به متن‌های شفاف و خوانا.",
            keyTakeaway: "پرامپت ویراستاری ۳ مرحله‌ای.",
          },
        ],
      },
      {
        id: "c-mod-2",
        title: "فصل ۲ · تقویم محتوا و تبدیل چندفرمته (Repurposing)",
        duration: "۲ ساعت و ۳۵ دقیقه",
        lessons: [
          {
            id: "cl-2-1",
            title: "ایده‌پردازی بر اساس پرسش‌های واقعی مشتری، نه ترندهای پوچ",
            duration: "۱۸:۳۰",
            isFreeSample: false,
            summary: "تبدیل پیام‌های دایرکت و تیکت‌ها به جدول موضوعات محتوا.",
            keyTakeaway: "جدول ۳۰ سوژه واقعی ماه.",
          },
          {
            id: "cl-2-2",
            title: "نوشتن سناریوی ویدیوی ۶۰ ثانیه‌ای آموزشی با ساختار قلاب و خروجی",
            duration: "۲۲:۱۰",
            isFreeSample: false,
            summary: "ساخت فیلم‌نامه کاربردی بدون زیاده‌گویی.",
            keyTakeaway: "شابلون ۶۰ ثانیه‌ای سناریو.",
          },
        ],
      },
    ],
    recommendedPrerequisites: [
      {
        title: "ویدیوی کوتاه: ساخت فرمول سه‌جمله‌ای پرامپت در ۵۰ ثانیه",
        href: "/short-videos",
        kind: "ویدیوی کوتاه ۱ دقیقه‌ای",
        reason: "پیشنهادی برای آشنایی سریع با قالب پرامپت؛ بدون اثر در دسترسی.",
      },
    ],
    projectBrief: {
      title: "تمرین عملی: کارت لحن برند + ۳ کپشن واقعی",
      description:
        "دو پاراگراف از نوشته‌های قبلی خودت را بده، کارت لحن استخراج کن و بر اساس آن ۳ کپشن کوتاه بدون کلمات کلیشه‌ای تولید و ارسال کن.",
      acceptedFormats: "PDF, DOCX, TXT (حداکثر ۵ مگابایت)",
    },
    forumThreads: [
      {
        id: "cft-1",
        authorName: "سحر موسوی",
        question: "اگر تازه شروع کردم و هنوز نمونه متن قبلی ندارم چطور کارت لحن بسازم؟",
        answerAuthor: "وحیده رادمهر",
        isInstructor: true,
        answer:
          "فقط کافیه ۳ جمله درباره مخاطبت و ۲ پیج یا وبلاگی که لحنش رو دوست داری توصیف کنی؛ در درس دوم روش جایگزین بدون آرشیو قبلی رو کامل توضیح دادم.",
        upvotes: 15,
      },
    ],
  },
};

function buildFallbackDetails(
  course: CatalogCourseDetail
): Omit<SingleCourseDetail, keyof CatalogCourseDetail> {
  return {
    updatedAt: "آبان ۱۴۰۵",
    outcomesAfterCourse: [
      `تسلط عملی بر ${course.title} روی سناریوهای واقعی محیط کار فارسی.`,
      `اجرای گام‌به‌گام خروجی اصلی دوره: ${course.outcome}.`,
      "ساخت چک‌لیست و پرامپت‌های اختصاصی قابل استفاده مجدد در پروژه‌های آینده.",
    ],
    modules: [
      {
        id: `${course.id}-mod-1`,
        title: `فصل ۱ · مبانی عملی و نقشه اجرای ${course.coverTag}`,
        duration: "۱ ساعت و ۱۵ دقیقه",
        lessons: [
          {
            id: `${course.id}-l1`,
            title: `معرفی مسئله واقعی و خروجی نهایی در ${course.title}`,
            duration: "۰۹:۳۰",
            isFreeSample: true,
            summary: `مشاهده یک نمونه واقعی از حل کار «${course.coverTag}» با ابزارهای هوش مصنوعی از ابتدا تا تحویل.`,
            keyTakeaway: "شناخت دقیق نقاطی که هوش مصنوعی بیشترین صرفه‌جویی زمانی ایجاد می‌کند.",
          },
          {
            id: `${course.id}-l2`,
            title: "آماده‌سازی ورودی تمیز و جلوگیری از خطاهای رایج",
            duration: "۱۳:۲۰",
            isFreeSample: true,
            summary: "روش ساختاردهی داده‌ها و نوشتن دستورالعمل شفاف متناسب با زبان فارسی.",
            keyTakeaway: "قالب پرامپت استاندارد فصل اول.",
          },
          {
            id: `${course.id}-l3`,
            title: "کارگاه عملی ۱: پیاده‌سازی گام اول با مثال واقعی",
            duration: "۱۹:۴۵",
            isFreeSample: false,
            summary: "اجرای کامل مرحله اول پروژه همراه با بررسی خطاهای احتمالی.",
            keyTakeaway: "خروجی استاندارد قابل استفاده در تیم.",
          },
        ],
      },
      {
        id: `${course.id}-mod-2`,
        title: `فصل ۲ · کاربرد پیشرفته و خودکارسازی ${course.subCategory}`,
        duration: "۲ ساعت و ۱۰ دقیقه",
        lessons: [
          {
            id: `${course.id}-l4`,
            title: "تبدیل جریان کار دستی به قالب تکرارشونده تیمی",
            duration: "۲۲:۱۰",
            isFreeSample: false,
            summary: "اتصال خروجی‌ها به ابزارهای روزانه و کاهش کارهای تکراری.",
            keyTakeaway: "چک‌لیست استقرار در کار روزانه.",
          },
          {
            id: `${course.id}-l5`,
            title: "کنترل کیفیت نهایی و مرور تمرین دانشجو",
            duration: "۱۶:۰۰",
            isFreeSample: false,
            summary: "معیارهای ارزیابی نتیجه قبل از تحویل به مدیر یا مشتری.",
            keyTakeaway: "فرم خودارزیابی خروجی.",
          },
        ],
      },
    ],
    recommendedPrerequisites: [
      {
        title: "گزارش‌نویسی با هوش مصنوعی",
        href: "/courses/course-reporting",
        kind: "دوره پیشنهادی",
        reason:
          "آشنایی با مفاهیم آن یادگیری این دوره را سریع‌تر می‌کند، اما پیش‌نیاز اجباری نیست و دسترسی را مسدود نمی‌کند.",
      },
    ],
    projectBrief: {
      title: `تمرین عملی دوره: پیاده‌سازی یک نمونه ${course.coverTag}`,
      description: `بر اساس راهنمای فصل دوم، یک خروجی عملی از «${course.title}» بساز و فایل نتیجه یا گزارش کوتاه اجرا را همین‌جا ارسال کن.`,
      acceptedFormats: "PDF, DOCX, XLSX, ZIP (حداکثر ۱۵ مگابایت)",
    },
    forumThreads: [
      {
        id: `${course.id}-ft-1`,
        authorName: "امیررضا جلالی",
        question: `آیا ابزارهای معرفی‌شده در «${course.title}» نسخه رایگان هم دارن تا بتونم با همون پلن رایگان تمرین‌ها رو انجام بدم؟`,
        answerAuthor: course.instructorName,
        isInstructor: true,
        answer:
          "بله، برای انجام تمام تمرین‌ها و درس‌های اصلی روش اجرا با نسخه رایگان رو هم کنار روش حرفه‌ای نشون دادم تا بدون محدودیت پیش بری.",
        upvotes: 14,
      },
    ],
  };
}

export function getCourseDetailById(id: string): SingleCourseDetail | undefined {
  const baseCourse = CATALOG_COURSES.find((c) => c.id === id);
  if (!baseCourse) return undefined;

  const extra = CUSTOM_DETAILS_BY_ID[id] ?? buildFallbackDetails(baseCourse);
  return {
    ...baseCourse,
    ...extra,
  };
}

export function getAllCourseIds(): string[] {
  return CATALOG_COURSES.map((c) => c.id);
}
