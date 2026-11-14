"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button, Input } from "@/components/ui";
import { HEADER_NAV_LINKS } from "@/lib/data/home";
import { ToonelLogo } from "./BrandVisuals";

export function HomeHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = React.useState(false);
  const [otpOpen, setOtpOpen] = React.useState(false);
  const [phone, setPhone] = React.useState("");
  const [otpSent, setOtpSent] = React.useState(false);
  const [otpCode, setOtpCode] = React.useState("");
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 36);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleRequestOtp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone.trim()) return;
    setOtpSent(true);
  };

  const handleVerifyOtp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!otpCode.trim()) return;
    setLoggedIn(true);
    setOtpOpen(false);
  };

  return (
    <>
      {/* Aurevo-style top header that morphs into a floating translucent pill on scroll */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? "px-[var(--space-sm)] pt-[var(--space-xs)]"
            : "border-b border-[var(--stroke-stroke-quinary)] bg-[var(--surface-sf-primary)]"
        }`}
      >
        <div
          className={`mx-auto flex items-center justify-between gap-[var(--space-sm)] transition-all duration-300 ${
            scrolled
              ? "max-w-[780px] rounded-[var(--radius-full)] border border-[var(--stroke-stroke-quaternary)] bg-[color-mix(in_srgb,var(--surface-sf-primary)_86%,transparent)] px-[var(--space-sm)] py-[var(--space-4xs)] shadow-[0_8px_24px_rgba(20,26,58,0.08)] backdrop-blur-md"
              : "max-w-[1152px] px-[var(--space-sm)] py-[var(--space-xs)] md:px-[var(--space-md)]"
          }`}
        >
          <Link
            href="/"
            className="rounded-[var(--radius-full)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--stroke-stroke-brand-blue)]"
          >
            <ToonelLogo />
          </Link>

          <nav
            aria-label="منوی اصلی"
            className="hidden items-center gap-[var(--space-md)] md:flex"
          >
            {HEADER_NAV_LINKS.map((item) => {
              const isActive = item.href === pathname;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-body-sm transition-colors ${
                    isActive
                      ? "font-bold text-[var(--content-text-accent-brand)]"
                      : "font-medium text-[var(--content-text-secondary)] hover:text-[var(--content-text-primary)]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-[var(--space-3xs)]">
            <Link
              href="/my-pathway"
              className={`hidden sm:inline-flex items-center rounded-[var(--radius-full)] border px-3 py-1.5 text-body-xs font-semibold transition-colors ${
                pathname === "/my-pathway"
                  ? "border-[#5B7CFF] bg-[#5B7CFF] text-white"
                  : "border-[var(--stroke-stroke-quinary)] bg-[var(--surface-sf-secondary)] text-[var(--content-text-primary)] hover:border-[#5B7CFF]"
              }`}
            >
              مسیر یادگیری من
            </Link>
            {loggedIn ? (
              <Button
                appearance="solid"
                status="primary"
                size="sm"
                label="حساب من"
                onClick={() => {
                  setLoggedIn(false);
                  setOtpSent(false);
                  setOtpCode("");
                }}
              />
            ) : (
              <Button
                appearance="solid"
                status="neutral"
                size="sm"
                label="ورود / ثبت‌نام"
                onClick={() => setOtpOpen(true)}
              />
            )}

            <button
              type="button"
              aria-label="باز کردن منوی ناوبری"
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="inline-flex size-9 items-center justify-center rounded-[var(--radius-full)] border border-[var(--stroke-stroke-quinary)] bg-[var(--surface-sf-secondary)] text-[var(--content-text-primary)] md:hidden"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M4 7H20M4 12H20M4 17H20"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <nav
            aria-label="منوی موبایل"
            className="mx-auto mt-2 flex max-w-[780px] flex-col gap-[var(--space-4xs)] rounded-[var(--radius-2xl)] border border-[var(--stroke-stroke-quinary)] bg-[var(--surface-sf-primary)] p-[var(--space-xs)] shadow-md md:hidden"
          >
            {HEADER_NAV_LINKS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`rounded-[var(--radius-xl)] px-[var(--space-xs)] py-[var(--space-3xs)] text-body-sm hover:bg-[var(--surface-sf-secondary)] ${
                  item.href === pathname
                    ? "font-bold text-[var(--content-text-accent-brand)]"
                    : "font-medium text-[var(--content-text-secondary)]"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </header>

      {/* Lightweight OTP Sign-In / Sign-Up Dialog */}
      {otpOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="otp-dialog-title"
          className="fixed inset-0 z-50 flex items-center justify-center bg-[var(--surface-sf-overlay)] p-[var(--space-sm)] backdrop-blur-xs"
        >
          <div className="w-full max-w-[448px] rounded-[28px] border border-[var(--stroke-stroke-quinary)] bg-[var(--surface-sf-primary)] p-[var(--space-md)] shadow-lg space-y-[var(--space-sm)]">
            <div className="flex items-start justify-between gap-[var(--space-xs)]">
              <div className="space-y-1">
                <h2 id="otp-dialog-title" className="text-headline-sm text-[var(--content-text-primary)]">
                  ورود یا ساخت حساب با کد یک‌بارمصرف
                </h2>
                <p className="text-body-xs text-[var(--content-text-tertiary)]">
                  شماره موبایلت رو وارد کن تا کد تایید برات ارسال بشه.
                </p>
              </div>
              <button
                type="button"
                aria-label="بستن"
                onClick={() => setOtpOpen(false)}
                className="rounded-[var(--radius-full)] px-2.5 py-1 text-body-xs font-medium text-[var(--content-text-tertiary)] hover:bg-[var(--surface-sf-secondary)]"
              >
                بستن
              </button>
            </div>

            {!otpSent ? (
              <form onSubmit={handleRequestOtp} className="space-y-[var(--space-sm)]">
                <Input
                  variant="phone"
                  label="شماره موبایل"
                  placeholder="912 345 6789"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  hint="کد یک‌بارمصرف بلافاصله به این شماره پیامک می‌شود."
                  required
                />
                <div className="flex items-center justify-end gap-[var(--space-2xs)]">
                  <Button
                    type="button"
                    appearance="ghost"
                    status="neutral"
                    size="sm"
                    label="انصراف"
                    onClick={() => setOtpOpen(false)}
                  />
                  <Button
                    type="submit"
                    appearance="solid"
                    status="warning"
                    size="md"
                    className="!text-[#141A3A] font-semibold"
                    label="ارسال کد یک‌بارمصرف"
                  />
                </div>
              </form>
            ) : (
              <form onSubmit={handleVerifyOtp} className="space-y-[var(--space-sm)]">
                <Input
                  variant="text"
                  label="کد ۶ رقمی پیامک‌شده"
                  placeholder="مثلاً ۱۲۳۴۵۶"
                  value={otpCode}
                  onChange={(e) => setOtpCode(e.target.value)}
                  hint={`کد تایید به شماره ${phone} ارسال شد.`}
                  required
                />
                <div className="flex items-center justify-between gap-[var(--space-2xs)]">
                  <Button
                    type="button"
                    appearance="ghost"
                    status="primary"
                    size="sm"
                    label="تغییر شماره"
                    onClick={() => setOtpSent(false)}
                  />
                  <Button
                    type="submit"
                    appearance="solid"
                    status="warning"
                    size="md"
                    className="!text-[#141A3A] font-semibold"
                    label="تایید و ورود"
                  />
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}
