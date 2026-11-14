"use client";

import * as React from "react";
import Image from "next/image";
import { Button, Chip } from "@/components/ui";
import { NEL_QUICK_GOALS, NEL_TIME_OPTIONS } from "@/lib/data/home";

export function HomeHero() {
  const [nelDrawerOpen, setNelDrawerOpen] = React.useState(false);
  const [selectedGoal, setSelectedGoal] =
    React.useState<(typeof NEL_QUICK_GOALS)[number]["key"]>("office");
  const [selectedTime, setSelectedTime] =
    React.useState<(typeof NEL_TIME_OPTIONS)[number]>("۱۰ دقیقه");

  const activeGoalItem =
    NEL_QUICK_GOALS.find((g) => g.key === selectedGoal) ?? NEL_QUICK_GOALS[0];

  const scrollToSection = (id: string) => {
    const target = document.getElementById(id);
    target?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="relative overflow-hidden bg-[var(--surface-sf-primary)] pt-[var(--space-lg)] pb-[var(--space-2xl)] md:pt-[var(--space-lg)] md:pb-[var(--space-3xl)]">
      <div className="mx-auto max-w-[1152px] space-y-[var(--space-md)] px-[var(--space-sm)] md:px-[var(--space-md)]">
        {/* Top Editorial Pill Tag + Bold Display Headline (Aurevo Neo-Editorial Rhythm) */}
        <div className="space-y-[var(--space-xs)] text-start">
          <div className="inline-flex items-center gap-[var(--space-3xs)] rounded-[var(--radius-full)] border border-[var(--stroke-stroke-quinary)] bg-[var(--surface-sf-secondary)] px-[var(--space-xs)] py-[var(--space-5xs)] text-body-xs font-medium text-[var(--content-text-secondary)]">
            <span className="size-2.5 rounded-full bg-[#FFC53D]" aria-hidden="true" />
            <span>ای‌آی تونل · از یادگیری تا به‌کارگیری هوش مصنوعی</span>
          </div>

          <h1 className="max-w-[820px] text-display-sm md:text-display-lg font-extrabold leading-[1.15] text-[var(--content-text-primary)]">
            هوش مصنوعی رو برای کاری که داری یاد بگیر.
          </h1>
        </div>

        {/* Asymmetric 2-Column Aurevo Bento */}
        <div className="grid grid-cols-1 items-stretch gap-[var(--space-sm)] lg:grid-cols-12">
          {/* Editorial Main Action Framed Card */}
          <div className="flex flex-col justify-between gap-[var(--space-sm)] lg:col-span-7">
            <div className="flex flex-1 flex-col justify-between gap-[var(--space-md)] rounded-[28px] border border-[var(--stroke-stroke-quinary)] bg-[var(--surface-sf-secondary)] p-[var(--space-md)] md:p-[var(--space-lg)]">
              <div className="space-y-[var(--space-xs)]">
                <p className="text-body-md md:text-body-lg leading-relaxed text-[var(--content-text-secondary)]">
                  به جای سرگردانی بین ده‌ها ابزار و آموزش پراکنده، این‌جا دقیقاً متناسب با کارت مسیر یادگیری می‌چینی، قدم‌به‌قدم پیش می‌ری و همون روز توی کار و زندگیت استفاده‌ش می‌کنی.
                </p>

                <div className="flex flex-wrap items-center gap-[var(--space-xs)] pt-[var(--space-4xs)]">
                  <Button
                    appearance="solid"
                    status="warning"
                    size="lg"
                    className="!text-[#141A3A] font-bold"
                    label="آموزش مناسبت رو پیدا کن ←"
                    onClick={() => scrollToSection("courses")}
                  />
                  <Button
                    appearance="stroke"
                    status="neutral"
                    size="lg"
                    label="از نِل کمک بگیر"
                    onClick={() => setNelDrawerOpen((prev) => !prev)}
                  />
                </div>
              </div>

              {/* Advisory-only, non-blocking Nel helper nested card */}
              {nelDrawerOpen && (
                <div className="rounded-[20px] border border-[var(--stroke-stroke-quinary)] bg-[var(--surface-sf-primary)] p-[var(--space-sm)] space-y-[var(--space-xs)] shadow-xs">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="text-title-xs font-semibold text-[var(--content-text-primary)]">
                      نِل: الان روی چی کار می‌کنی و چقدر وقت داری؟
                    </p>
                    <span className="text-body-xs text-[var(--content-text-tertiary)]">
                      پیشنهاد اختیاری · بدون قفل مسیر
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-[var(--space-4xs)]">
                    {NEL_QUICK_GOALS.map((goal) => (
                      <Chip
                        key={goal.key}
                        variant={selectedGoal === goal.key ? "solid" : "stroke-subtle"}
                        status={selectedGoal === goal.key ? "primary" : "neutral"}
                        size="sm"
                        label={goal.label}
                        onClick={() => setSelectedGoal(goal.key)}
                      />
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-[var(--space-4xs)]">
                    <span className="text-body-xs text-[var(--content-text-secondary)]">وقت آزاد:</span>
                    {NEL_TIME_OPTIONS.map((t) => (
                      <Chip
                        key={t}
                        variant={selectedTime === t ? "solid" : "ghost"}
                        status={selectedTime === t ? "warning" : "neutral"}
                        size="sm"
                        label={t}
                        onClick={() => setSelectedTime(t)}
                      />
                    ))}
                  </div>

                  <div className="rounded-[var(--radius-lg)] bg-[var(--surface-sf-secondary)] p-[var(--space-xs)] text-body-sm text-[var(--content-text-primary)]">
                    بر اساس زمان <strong>{selectedTime}</strong> تو: {activeGoalItem.recommendation}
                  </div>
                </div>
              )}

              {/* Bottom 2 Mini Bento Cards inside the Editorial Column */}
              <div className="grid grid-cols-1 gap-[var(--space-xs)] sm:grid-cols-2">
                <div className="rounded-[20px] border border-[var(--stroke-stroke-quinary)] bg-[var(--surface-sf-primary)] p-[var(--space-sm)] space-y-2">
                  <span className="text-body-xs font-semibold text-[var(--content-text-tertiary)]">
                    دسترسی شفاف، فقط ۲ مدل
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    <Chip variant="subtle" status="primary" size="sm" label="اشتراک جامع" />
                    <Chip variant="subtle" status="warning" size="sm" label="خرید تک‌دوره" />
                  </div>
                  <p className="text-body-xs text-[var(--content-text-secondary)]">
                    بدون پلن‌های گیج‌کننده؛ یا همه مسیر با اشتراک یا دقیقاً همون یک دوره.
                  </p>
                </div>

                <div className="rounded-[20px] bg-[#141A3A] p-[var(--space-sm)] text-white space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-body-xs font-semibold text-[#FFC53D]">
                      الگوی یادگیری عملی
                    </span>
                    <span className="size-2 rounded-full bg-[#5B7CFF]" aria-hidden="true" />
                  </div>
                  <p className="text-title-xs font-bold leading-snug">
                    «یک کار، یک دقیقه» تا دوره جامع
                  </p>
                  <p className="text-body-xs text-white/75">
                    سریع از ویدیوی یک‌دقیقه‌ای شروع کن و هر جا لازم بود عمیق‌تر شو.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Framed 3D Mascot Portrait Card (Aurevo rounded photography container + floating overlay card) */}
          <div className="lg:col-span-5">
            <div className="relative h-full min-h-[380px] overflow-hidden rounded-[28px] border border-[var(--stroke-stroke-quinary)] bg-[#F3ECE1] shadow-sm">
              <Image
                src="/images/nel-mascot.jpg"
                alt="کاراکتر سه‌بعدی نِل، ماشین زمان کوچک با نور گرم زرد در ای‌آی تونل"
                width={680}
                height={680}
                priority
                className="h-full w-full object-cover object-center"
              />

              {/* Top floating glass pill inside mascot card */}
              <div className="absolute inset-x-4 top-4 flex items-center justify-between gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-[var(--radius-full)] bg-white/85 px-3 py-1 text-body-xs font-semibold text-[#141A3A] backdrop-blur-md shadow-2xs">
                  <span className="size-2 rounded-full bg-[#FFC53D]" aria-hidden="true" />
                  هم‌مسیر هوشمند «نِل»
                </span>
                <span className="rounded-[var(--radius-full)] bg-[#141A3A]/85 px-3 py-1 text-[11px] font-medium text-white backdrop-blur-md">
                  غیراجباری
                </span>
              </div>

              {/* Bottom crisp nested overlay card */}
              <div className="absolute inset-x-4 bottom-4 rounded-[20px] border border-white/60 bg-white/90 p-[var(--space-xs)] backdrop-blur-md shadow-xs">
                <p className="text-body-sm font-bold text-[#141A3A]">
                  سلام، من «نِل» هستم — کمکت می‌کنم گم نشی
                </p>
                <p className="mt-0.5 text-body-xs text-[#303E6B]">
                  فقط وقتی بخوای، بر اساس شغل و زمانت آموزش بعدی رو پیشنهاد می‌دم.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
