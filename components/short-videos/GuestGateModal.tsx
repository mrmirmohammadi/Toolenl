"use client";

import * as React from "react";
import { Badge, Button } from "@/components/ui";
import type { ShortVideoDetail } from "@/lib/data/short-videos";

interface GuestGateModalProps {
  open: boolean;
  reason: "locked-item" | "limit-reached";
  targetVideoTitle?: string;
  watchedCount: number;
  previewLimit: number;
  onClose: () => void;
  onEnableSubscriberPreview: () => void;
}

export function GuestGateModal({
  open,
  reason,
  targetVideoTitle,
  watchedCount,
  previewLimit,
  onClose,
  onEnableSubscriberPreview,
}: GuestGateModalProps) {
  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="guest-gate-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-[var(--surface-sf-overlay)] p-[var(--space-sm)] backdrop-blur-xs"
    >
      <div className="w-full max-w-[480px] rounded-[28px] bg-[#FFC53D] p-[var(--space-3xs)] shadow-2xl">
        <div className="rounded-[24px] bg-[var(--surface-sf-primary)] p-[var(--space-md)] space-y-[var(--space-sm)]">
          <div className="flex items-start justify-between gap-[var(--space-xs)]">
            <div className="space-y-1">
              <Badge variant="solid" color="blue" value="شفافیت دسترسی مهمان" />
              <h2
                id="guest-gate-title"
                className="text-headline-sm font-extrabold text-[var(--content-text-primary)]"
              >
                {reason === "limit-reached"
                  ? `${previewLimit} ویدیوی منتخب مهمان رو دیدی`
                  : "ادامه فید ویژه اشتراک جامع است"}
              </h2>
            </div>

            <button
              type="button"
              onClick={onClose}
              aria-label="بستن پنجره"
              className="rounded-[var(--radius-full)] px-2 py-1 text-body-sm text-[var(--content-text-tertiary)] hover:bg-[var(--surface-sf-secondary)] cursor-pointer"
            >
              ✕
            </button>
          </div>

          <p className="text-body-sm leading-relaxed text-[var(--content-text-secondary)]">
            {reason === "limit-reached"
              ? `برای آشنایی با کیفیت آموزش‌های «یک کار، یک دقیقه»، تا اینجا ${watchedCount} ویدیوی منتخب مهمان رو باز کردی. برای تماشای تمام فید ویدیوهای کوتاه و دسترسی به پرامپت‌های آماده، اشتراک جامع رو فعال کن.`
              : `ویدیوی «${targetVideoTitle ?? "انتخابی"}» جزو آرشیو کامل مشترکین است. تو می‌تونی تا ${previewLimit} ویدیوی منتخب مهمان رو رایگان ببینی یا با اشتراک جامع کل فید ویدیوها و دوره‌های اشتراکی رو باز کنی.`}
          </p>

          <div className="rounded-[18px] border border-[var(--stroke-stroke-quinary)] bg-[var(--surface-sf-secondary)] p-[var(--space-xs)] text-body-xs leading-relaxed text-[var(--content-text-secondary)] space-y-1">
            <div className="font-bold text-[var(--content-text-primary)]">
              مدل دسترسی ای‌آی تونل فقط ۲ انتخاب شفاف دارد:
            </div>
            <div>• اشتراک جامع: باز شدن همه ویدیوهای کوتاه + تمام دوره‌های اشتراکی</div>
            <div>• خرید تک‌دوره: بدون اشتراک، برای دوره‌های مجزا (و بدون پیش‌نیاز اجباری)</div>
          </div>

          <div className="flex flex-col gap-[var(--space-3xs)] sm:flex-row">
            <Button
              appearance="solid"
              status="warning"
              size="md"
              fullWidth
              className="!text-[#141A3A] font-bold"
              label="خرید اشتراک جامع"
              onClick={onEnableSubscriberPreview}
            />
            <Button
              appearance="stroke"
              status="neutral"
              size="md"
              fullWidth
              label="برگشت به ویدیوهای رایگان"
              onClick={onClose}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export type { ShortVideoDetail };
