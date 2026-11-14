import * as React from "react";
import Link from "next/link";
import { Avatar, Button, Chip } from "@/components/ui";
import { FEATURED_COURSES } from "@/lib/data/home";
import { getInstructorSlugByName } from "@/lib/data/instructors";

export function CoursesSection() {
  return (
    <section
      id="courses"
      aria-labelledby="courses-heading"
      className="border-t border-[var(--stroke-stroke-quinary)] bg-[var(--surface-sf-secondary)] py-[var(--space-2xl)]"
    >
      <div className="mx-auto max-w-6xl px-[var(--space-sm)] md:px-[var(--space-md)]">
        {/* Aurevo Sticky 2-Column Editorial Layout (RTL: sticky guide card at inline-start) */}
        <div className="grid grid-cols-1 items-start gap-[var(--space-lg)] lg:grid-cols-12">
          <div className="space-y-[var(--space-sm)] lg:sticky lg:top-24 lg:col-span-4">
            <div className="space-y-[var(--space-3xs)]">
              <span className="text-body-xs font-semibold text-[var(--content-text-accent-brand)]">
                الگوی «[کار] با هوش مصنوعی»
              </span>
              <h2
                id="courses-heading"
                className="text-headline-lg md:text-display-sm font-extrabold leading-tight text-[var(--content-text-primary)]"
              >
                دوره‌های جامع مهارت‌محور
              </h2>
              <p className="text-body-sm leading-relaxed text-[var(--content-text-secondary)]">
                به‌جای دوره‌های عمومی و تئوری، هر دوره مستقیماً روی یک خروجی شغلی تمرکز دارد؛ با دسترسی شفاف از طریق اشتراک جامع یا خرید تک‌دوره.
              </p>
            </div>

            {/* Sticky Deep Navy Bento Advisory Card */}
            <div className="rounded-[24px] bg-[#141A3A] p-[var(--space-md)] text-white space-y-[var(--space-xs)]">
              <div className="inline-flex items-center gap-1.5 rounded-[var(--radius-full)] bg-white/10 px-2.5 py-0.5 text-[11px] font-medium text-[#FFC53D]">
                قانون شفافیت تونل
              </div>
              <p className="text-title-xs font-bold leading-snug">
                پیش‌نیازها فقط پیشنهادی هستن
              </p>
              <p className="text-body-xs leading-relaxed text-white/75">
                ندیدن یک دوره پیش‌نیاز هرگز جلوی خرید یا تماشای دوره جدید رو نمی‌گیره؛ همیشه خودت تصمیم می‌گیری.
              </p>
              <div className="pt-1">
                <Link href="/courses" className="block">
                  <Button
                    appearance="solid"
                    status="warning"
                    size="sm"
                    fullWidth
                    className="!text-[#141A3A] font-bold"
                    label="مشاهده کاتالوگ کامل ←"
                  />
                </Link>
              </div>
            </div>
          </div>

          {/* Alternating Aurevo Framed Course Cards */}
          <div className="grid grid-cols-1 gap-[var(--space-sm)] sm:grid-cols-2 lg:col-span-8">
            {FEATURED_COURSES.map((course, index) => {
              const isSubscription = course.accessType === "اشتراک جامع";
              const isHighlightFrame = index % 3 === 0;
              const isNavyFrame = index % 3 === 1;

              const outerFrameClass = isHighlightFrame
                ? "bg-[#FFC53D]"
                : isNavyFrame
                  ? "bg-[#141A3A]"
                  : "bg-[#5B7CFF]";

              const frameLabelColor = isHighlightFrame ? "text-[#141A3A]" : "text-white";

              return (
                <article
                  key={course.id}
                  className={`flex flex-col rounded-[28px] p-[var(--space-xs)] ${outerFrameClass}`}
                >
                  {/* Top frame header pill */}
                  <div className={`mb-[var(--space-3xs)] flex items-center justify-between px-2 ${frameLabelColor}`}>
                    <span className="text-body-xs font-bold">
                      {course.accessType}
                    </span>
                    <span className="text-[11px] opacity-90">
                      {course.duration} · {course.level}
                    </span>
                  </div>

                  {/* Nested crisp Light Paper / White card */}
                  <div className="flex flex-1 flex-col justify-between rounded-[20px] bg-[var(--surface-sf-primary)] p-[var(--space-sm)] text-[var(--content-text-primary)] shadow-2xs">
                    <div className="space-y-[var(--space-xs)]">
                      <h3 className="text-headline-sm font-bold leading-snug text-[var(--content-text-primary)]">
                        {course.title}
                      </h3>
                      <p className="text-body-sm leading-relaxed text-[var(--content-text-secondary)]">
                        {course.outcome}
                      </p>

                      {/* Instructor Info */}
                      <Link
                        href={`/instructors/${getInstructorSlugByName(course.instructorName)}`}
                        className="flex items-center gap-[var(--space-2xs)] rounded-[14px] border border-[var(--stroke-stroke-quinary)] bg-[var(--surface-sf-secondary)] p-[var(--space-3xs)] transition-colors hover:border-[#5B7CFF]"
                      >
                        <Avatar size="sm" mode="text" text={course.instructorInitials} />
                        <div className="min-w-0">
                          <div className="truncate text-body-xs font-semibold text-[var(--content-text-primary)]">
                            {course.instructorName}
                          </div>
                          <div className="truncate text-[11px] text-[var(--content-text-tertiary)]">
                            {course.instructorRole}
                          </div>
                        </div>
                      </Link>

                      <p className="text-body-xs leading-relaxed text-[var(--content-text-tertiary)]">
                        {course.advisoryPrerequisite}
                      </p>
                    </div>

                    <div className="mt-[var(--space-sm)] flex items-center justify-between gap-2 border-t border-[var(--stroke-stroke-quinary)] pt-[var(--space-xs)]">
                      <Chip
                        variant="stroke-subtle"
                        status={isSubscription ? "primary" : "neutral"}
                        size="sm"
                        label={course.priceLabel}
                      />
                      <Link href={`/courses/${course.id}`} className="inline-flex">
                        <Button
                          appearance="solid"
                          status={isSubscription ? "primary" : "neutral"}
                          size="sm"
                          label="جزئیات ←"
                        />
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
