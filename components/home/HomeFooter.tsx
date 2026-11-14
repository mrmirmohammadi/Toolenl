import * as React from "react";
import Link from "next/link";
import { ToonelLogo } from "./BrandVisuals";

export function HomeFooter() {
  return (
    <footer
      id="footer"
      className="bg-[var(--surface-sf-primary)] px-[var(--space-sm)] py-[var(--space-md)] md:px-[var(--space-md)] md:py-[var(--space-lg)]"
    >
      {/* Aurevo Signature Full-Width High-Impact Color Block in Toonel Yellow (#FFC53D) + Deep Navy Ink (#141A3A) */}
      <div className="mx-auto max-w-[1152px] rounded-[32px] bg-[#FFC53D] p-[var(--space-md)] text-[#141A3A] md:p-[var(--space-2xl)]">
        <div className="grid grid-cols-1 gap-[var(--space-lg)] md:grid-cols-12">
          {/* Brand manifesto commitment (zero hype / zero exaggerated claims) */}
          <div className="space-y-[var(--space-sm)] md:col-span-5">
            <ToonelLogo />
            <p className="text-headline-sm font-extrabold leading-snug text-[#141A3A]">
              یادگیری واقعی هوش مصنوعی، بدون اغراق و وعده‌های یک‌شبه.
            </p>
            <p className="max-w-[448px] text-body-sm leading-relaxed text-[#141A3A]/85">
              تعهد شفافیت ای‌آی تونل: مسیر یادگیری را ساده نگه می‌داریم، پیش‌نیازها را اجباری نمی‌کنیم و فقط آموزشی می‌سازیم که همان روز در کار تو کاربرد داشته باشد.
            </p>
          </div>

          {/* Quick links */}
          <div className="space-y-[var(--space-2xs)] md:col-span-2">
            <h3 className="text-title-xs font-bold text-[#141A3A]">دسترسی سریع</h3>
            <ul className="space-y-[var(--space-4xs)] text-body-sm font-medium text-[#141A3A]/80">
              <li>
                <Link href="/short-videos" className="hover:text-[#141A3A] transition-colors">
                  ویدیوهای کوتاه
                </Link>
              </li>
              <li>
                <Link href="/courses" className="hover:text-[#141A3A] transition-colors">
                  دوره‌های جامع
                </Link>
              </li>
              <li>
                <Link href="/my-pathway" className="hover:text-[#141A3A] transition-colors">
                  مسیر یادگیری من
                </Link>
              </li>
              <li>
                <Link href="/forum" className="hover:text-[#141A3A] transition-colors">
                  تالار گفت‌وگو
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#141A3A] transition-colors">
                  درباره ما و مانیفست
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-[#141A3A] transition-colors">
                  همراهی با نِل
                </Link>
              </li>
            </ul>
          </div>

          {/* Policies & Privacy */}
          <div className="space-y-[var(--space-2xs)] md:col-span-3">
            <h3 className="text-title-xs font-bold text-[#141A3A]">قوانین و حریم خصوصی</h3>
            <ul className="space-y-[var(--space-4xs)] text-body-sm font-medium text-[#141A3A]/80">
              <li>
                <a href="#footer" className="hover:text-[#141A3A] transition-colors">
                  قوانین استفاده از پلتفرم
                </a>
              </li>
              <li>
                <a href="#footer" className="hover:text-[#141A3A] transition-colors">
                  حریم خصوصی کاربران و مدرسان
                </a>
              </li>
              <li>
                <a href="#footer" className="hover:text-[#141A3A] transition-colors">
                  شفافیت اشتراک جامع و تک‌دوره
                </a>
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div className="space-y-[var(--space-2xs)] md:col-span-2">
            <h3 className="text-title-xs font-bold text-[#141A3A]">شبکه‌های اجتماعی</h3>
            <ul className="space-y-[var(--space-4xs)] text-body-sm font-medium text-[#141A3A]/80">
              <li>
                <a href="#footer" className="hover:text-[#141A3A] transition-colors">
                  تلگرام ای‌آی تونل
                </a>
              </li>
              <li>
                <a href="#footer" className="hover:text-[#141A3A] transition-colors">
                  اینستاگرام
                </a>
              </li>
              <li>
                <a href="#footer" className="hover:text-[#141A3A] transition-colors">
                  لینکدین
                </a>
              </li>
              <li>
                <a href="#footer" className="hover:text-[#141A3A] transition-colors">
                  یوتیوب
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-[var(--space-lg)] flex flex-col items-start justify-between gap-2 border-t border-[#141A3A]/15 pt-[var(--space-sm)] text-body-xs font-medium text-[#141A3A]/75 sm:flex-row sm:items-center">
          <span>© ۱۴۰۵ ای‌آی تونل (Toonel AI) · از یادگیری تا به‌کارگیری هوش مصنوعی</span>
          <span>طراحی‌شده بر پایه دیزاین‌سیستم ای‌آی تونل</span>
        </div>
      </div>
    </footer>
  );
}
