"use client";

import * as React from "react";
import Link from "next/link";
import { Avatar, Badge, Button, Chip } from "@/components/ui";
import { HomeHeader } from "@/components/home/HomeHeader";
import { HomeFooter } from "@/components/home/HomeFooter";
import type { InstructorProfileData } from "@/lib/data/instructors";
import type { ShortVideoItem } from "@/lib/data/home";

type InstructorContentTab = "courses" | "short-videos" | "ratings";

const VIDEO_CARD_BG: Record<ShortVideoItem["accent"], string> = {
  blue: "from-[#141A3A] via-[#1C2A63] to-[#2F49A8]",
  navy: "from-[#0E132B] via-[#141A3A] to-[#23326B]",
  yellow: "from-[#1A2147] via-[#263166] to-[#141A3A]",
  violet: "from-[#141A3A] via-[#2A265E] to-[#3B337A]",
};

interface InstructorProfilePageViewProps {
  instructor: InstructorProfileData;
}

export function InstructorProfilePageView({
  instructor,
}: InstructorProfilePageViewProps) {
  const [activeTab, setActiveTab] =
    React.useState<InstructorContentTab>("courses");
  const [linkCopied, setLinkCopied] = React.useState(false);

  const customUrlDisplay = `toonel.ai/instructors/${instructor.slug}`;
  const starterCourse =
    instructor.courses.find((c) => c.id === instructor.starterCourseId) ??
    instructor.courses[0];

  const handleCopyProfileUrl = async () => {
    const shareUrl =
      typeof window !== "undefined"
        ? `${window.location.origin}/instructors/${instructor.slug}`
        : `https://${customUrlDisplay}`;
    try {
      await navigator.clipboard.writeText(shareUrl);
      setLinkCopied(true);
      window.setTimeout(() => setLinkCopied(false), 2200);
    } catch {
      setLinkCopied(true);
    }
  };

  return (
    <div id="top" className="min-h-screen bg-[var(--surface-sf-primary)]">
      <HomeHeader />

      <main className="pb-[var(--space-2xl)]">
        {/* P0 Public Showcase Header (Strictly NO private details or internal revenue tiers) */}
        <section className="border-b border-[var(--stroke-stroke-quinary)] bg-[var(--surface-sf-primary)] pt-[var(--space-md)] pb-[var(--space-lg)]">
          <div className="mx-auto max-w-[1152px] space-y-[var(--space-md)] px-[var(--space-sm)] md:px-[var(--space-md)]">
            <nav
              aria-label="مسیر صفحه"
              className="flex flex-wrap items-center gap-[var(--space-4xs)] text-body-xs text-[var(--content-text-tertiary)]"
            >
              <Link
                href="/"
                className="hover:text-[var(--content-text-primary)] transition-colors"
              >
                صفحه اصلی
              </Link>
              <span aria-hidden="true">/</span>
              <Link
                href="/courses"
                className="hover:text-[var(--content-text-primary)] transition-colors"
              >
                مدرسان و دوره‌ها
              </Link>
              <span aria-hidden="true">/</span>
              <span className="font-semibold text-[var(--content-text-primary)]">
                {instructor.name}
              </span>
            </nav>

            <div className="grid grid-cols-1 gap-[var(--space-md)] lg:grid-cols-12">
              {/* Instructor Intro + Verified Specialties + Custom URL */}
              <div className="flex flex-col justify-between gap-[var(--space-sm)] rounded-[28px] border border-[var(--stroke-stroke-quinary)] bg-[var(--surface-sf-secondary)] p-[var(--space-md)] lg:col-span-7">
                <div className="space-y-[var(--space-xs)]">
                  <div className="flex flex-wrap items-center justify-between gap-[var(--space-xs)]">
                    <div className="flex items-center gap-[var(--space-sm)]">
                      <Avatar
                        size="lg"
                        mode="text"
                        text={instructor.initials}
                      />
                      <div className="space-y-1">
                        <div className="flex flex-wrap items-center gap-1.5">
                          <h1 className="text-headline-md md:text-headline-lg font-extrabold text-[var(--content-text-primary)]">
                            {instructor.name}
                          </h1>
                          <span className="rounded-[var(--radius-full)] bg-[#141A3A] px-2.5 py-0.5 text-[11px] font-bold text-[#FFC53D]">
                            مدرس تاییدشده
                          </span>
                        </div>
                        <p className="text-body-sm font-medium text-[var(--content-text-secondary)]">
                          {instructor.role}
                        </p>
                      </div>
                    </div>

                    {/* Copy Custom Public URL Button */}
                    <button
                      type="button"
                      onClick={handleCopyProfileUrl}
                      className="inline-flex items-center gap-2 rounded-[var(--radius-full)] border border-[var(--stroke-stroke-quinary)] bg-[var(--surface-sf-primary)] px-3.5 py-1.5 text-body-xs font-semibold text-[var(--content-text-primary)] transition-colors hover:border-[#5B7CFF] cursor-pointer"
                    >
                      <span dir="ltr" className="text-[11px] text-[#5B7CFF]">
                        {customUrlDisplay}
                      </span>
                      <span className="rounded-[var(--radius-full)] bg-[#FFC53D] px-2 py-0.5 text-[10px] font-bold text-[#141A3A]">
                        {linkCopied ? "کپی شد ✓" : "کپی لینک صفحه"}
                      </span>
                    </button>
                  </div>

                  <p className="text-body-sm leading-relaxed text-[var(--content-text-secondary)]">
                    {instructor.shortBio}
                  </p>

                  {/* Verified Specialties */}
                  <div className="flex flex-wrap items-center gap-[var(--space-4xs)] pt-1">
                    <span className="text-body-xs font-bold text-[var(--content-text-primary)]">
                      تخصص‌های تاییدشده:
                    </span>
                    {instructor.verifiedSpecialties.map((spec) => (
                      <Badge
                        key={spec}
                        variant="subtle"
                        color="blue"
                        value={`✓ ${spec}`}
                      />
                    ))}
                  </div>
                </div>

                {/* Public Stats Strip (Only courses/videos/overall score — ZERO private or revenue tier info) */}
                <div className="grid grid-cols-3 gap-[var(--space-2xs)] border-t border-[var(--stroke-stroke-quinary)] pt-[var(--space-xs)] text-center">
                  <div className="rounded-[16px] bg-[var(--surface-sf-primary)] p-[var(--space-xs)]">
                    <div className="text-title-sm font-extrabold text-[var(--content-text-primary)] tabular-nums">
                      {instructor.courses.length}
                    </div>
                    <div className="text-[11px] text-[var(--content-text-tertiary)]">
                      دوره جامع
                    </div>
                  </div>
                  <div className="rounded-[16px] bg-[var(--surface-sf-primary)] p-[var(--space-xs)]">
                    <div className="text-title-sm font-extrabold text-[var(--content-text-primary)] tabular-nums">
                      {instructor.shortVideos.length}
                    </div>
                    <div className="text-[11px] text-[var(--content-text-tertiary)]">
                      ویدیوی کوتاه
                    </div>
                  </div>
                  <div className="rounded-[16px] bg-[var(--surface-sf-primary)] p-[var(--space-xs)]">
                    <div className="text-title-sm font-extrabold text-[#5B7CFF] tabular-nums">
                      ★ {instructor.overallCourseScore}
                    </div>
                    <div className="text-[11px] text-[var(--content-text-tertiary)]">
                      امتیاز دوره‌ها ({instructor.reviewsCount} نظر)
                    </div>
                  </div>
                </div>
              </div>

              {/* P1 Highlighted Box: "پیشنهاد من برای شروع" */}
              {starterCourse && (
                <div className="rounded-[28px] bg-[#FFC53D] p-[var(--space-xs)] text-[#141A3A] lg:col-span-5">
                  <div className="mb-[var(--space-3xs)] flex items-center justify-between px-2">
                    <span className="text-body-xs font-extrabold">
                      پیشنهاد من برای شروع
                    </span>
                    <span className="rounded-[var(--radius-full)] bg-[#141A3A] px-2.5 py-0.5 text-[10px] font-bold text-[#FFC53D]">
                      مناسب بازدیدکننده جدید
                    </span>
                  </div>

                  <div className="flex h-[calc(100%-34px)] flex-col justify-between rounded-[22px] bg-[var(--surface-sf-primary)] p-[var(--space-md)] space-y-[var(--space-sm)]">
                    <div className="space-y-[var(--space-3xs)]">
                      <Badge
                        variant="subtle"
                        color="blue"
                        value={starterCourse.accessType}
                      />
                      <h2 className="text-headline-sm font-extrabold leading-snug text-[var(--content-text-primary)]">
                        {starterCourse.title}
                      </h2>
                      <p className="text-body-xs leading-relaxed text-[var(--content-text-secondary)]">
                        {instructor.starterCourseReason}
                      </p>
                      <div className="pt-1 text-body-xs font-medium text-[var(--content-text-tertiary)]">
                        {starterCourse.duration} · سطح: {starterCourse.level} · ★{" "}
                        {starterCourse.rating}
                      </div>
                    </div>

                    <Link href={`/courses/${starterCourse.id}`} className="block">
                      <Button
                        appearance="solid"
                        status="warning"
                        size="md"
                        fullWidth
                        className="!text-[#141A3A] font-bold"
                        label="مشاهده این دوره پیشنهادی ←"
                      />
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* P0 Unified Instructor Content Tabs */}
        <section className="pt-[var(--space-lg)]">
          <div className="mx-auto max-w-[1152px] space-y-[var(--space-md)] px-[var(--space-sm)] md:px-[var(--space-md)]">
            <div
              role="tablist"
              aria-label="تب‌های محتوایی مدرس"
              className="flex flex-wrap items-center gap-[var(--space-4xs)]"
            >
              <Chip
                variant={activeTab === "courses" ? "solid" : "stroke-subtle"}
                status={activeTab === "courses" ? "primary" : "neutral"}
                size="md"
                label={`دوره‌های جامع (${instructor.courses.length})`}
                onClick={() => setActiveTab("courses")}
              />
              <Chip
                variant={
                  activeTab === "short-videos" ? "solid" : "stroke-subtle"
                }
                status={activeTab === "short-videos" ? "primary" : "neutral"}
                size="md"
                label={`ویدیوهای کوتاه (${instructor.shortVideos.length})`}
                onClick={() => setActiveTab("short-videos")}
              />
              <Chip
                variant={activeTab === "ratings" ? "solid" : "stroke-subtle"}
                status={activeTab === "ratings" ? "primary" : "neutral"}
                size="md"
                label={`امتیازات و نظر دانشجوها (${instructor.reviews.length})`}
                onClick={() => setActiveTab("ratings")}
              />
            </div>

            {/* Tab 1: Courses */}
            {activeTab === "courses" && (
              <div className="grid grid-cols-1 gap-[var(--space-sm)] md:grid-cols-2 lg:grid-cols-3">
                {instructor.courses.map((course, idx) => {
                  const isSubscription = course.accessType === "اشتراک جامع";
                  const frameColor =
                    idx % 2 === 0 ? "bg-[#141A3A]" : "bg-[#5B7CFF]";
                  return (
                    <article
                      key={course.id}
                      className={`flex flex-col rounded-[28px] p-[var(--space-xs)] ${frameColor}`}
                    >
                      <div className="mb-[var(--space-3xs)] flex items-center justify-between px-2 text-white">
                        <span className="text-body-xs font-extrabold">
                          {course.accessType}
                        </span>
                        <span className="text-[11px] opacity-90">
                          {course.duration} · ★ {course.rating}
                        </span>
                      </div>

                      <div className="flex flex-1 flex-col justify-between rounded-[22px] bg-[var(--surface-sf-primary)] p-[var(--space-sm)] space-y-[var(--space-sm)]">
                        <div className="space-y-1.5">
                          <h3 className="text-headline-sm font-extrabold text-[var(--content-text-primary)]">
                            {course.title}
                          </h3>
                          <p className="text-body-xs leading-relaxed text-[var(--content-text-secondary)]">
                            {course.outcome}
                          </p>
                          <p className="text-[11px] text-[var(--content-text-tertiary)]">
                            {course.advisoryPrerequisite}
                          </p>
                        </div>

                        <div className="flex items-center justify-between gap-2 border-t border-[var(--stroke-stroke-quinary)] pt-[var(--space-xs)]">
                          <Badge
                            variant="subtle"
                            color={isSubscription ? "blue" : "default"}
                            value={course.priceLabel}
                          />
                          <Link href={`/courses/${course.id}`}>
                            <Button
                              appearance="solid"
                              status={isSubscription ? "primary" : "neutral"}
                              size="sm"
                              label="جزئیات دوره ←"
                            />
                          </Link>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            )}

            {/* Tab 2: Short Videos (NO star ratings!) */}
            {activeTab === "short-videos" && (
              <div className="grid grid-cols-1 gap-[var(--space-sm)] sm:grid-cols-2 lg:grid-cols-4">
                {instructor.shortVideos.map((video) => (
                  <article
                    key={video.id}
                    className="group relative flex aspect-[4/5] flex-col justify-between overflow-hidden rounded-[24px] border border-[var(--stroke-stroke-quinary)] bg-[#141A3A] p-[var(--space-sm)] text-white"
                  >
                    <div
                      aria-hidden="true"
                      className={`absolute inset-0 bg-gradient-to-b ${VIDEO_CARD_BG[video.accent]}`}
                    />
                    <div className="relative z-10 flex items-center justify-between gap-2">
                      <span className="rounded-[var(--radius-full)] bg-[#FFC53D] px-2.5 py-0.5 text-[11px] font-bold text-[#141A3A]">
                        {video.tool}
                      </span>
                      <span
                        dir="ltr"
                        className="rounded-[var(--radius-full)] bg-white/15 px-2.5 py-0.5 text-[11px] font-medium tabular-nums"
                      >
                        {video.duration}
                      </span>
                    </div>

                    <div className="relative z-10 space-y-[var(--space-3xs)] rounded-[18px] border border-white/15 bg-black/35 p-[var(--space-xs)] backdrop-blur-md">
                      <h3 className="text-title-xs font-bold leading-snug text-white">
                        {video.title}
                      </h3>
                      <div className="flex items-center justify-between gap-2 text-[11px] text-white/85">
                        <span>♥ {video.likes} پسند</span>
                        <Link
                          href="/short-videos"
                          className="font-bold text-[#FFC53D] hover:underline"
                        >
                          تماشا ←
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}

            {/* Tab 3: Student Ratings & Feedback */}
            {activeTab === "ratings" && (
              <div className="grid grid-cols-1 gap-[var(--space-sm)] md:grid-cols-2">
                {instructor.reviews.map((rev) => (
                  <article
                    key={rev.id}
                    className="rounded-[24px] border border-[var(--stroke-stroke-quinary)] bg-[var(--surface-sf-secondary)] p-[var(--space-md)] space-y-[var(--space-xs)]"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <div>
                        <div className="text-body-sm font-bold text-[var(--content-text-primary)]">
                          {rev.studentName}
                        </div>
                        <div className="text-[11px] text-[#5B7CFF] font-semibold">
                          دوره: {rev.courseTitle}
                        </div>
                      </div>
                      <span
                        dir="ltr"
                        className="rounded-[var(--radius-full)] bg-[#FFC53D] px-2.5 py-0.5 text-[11px] font-extrabold text-[#141A3A] tabular-nums"
                      >
                        ★ {rev.score}
                      </span>
                    </div>

                    <p className="text-body-sm leading-relaxed text-[var(--content-text-secondary)]">
                      {rev.comment}
                    </p>

                    <div className="text-[11px] text-[var(--content-text-tertiary)]">
                      ثبت‌شده در {rev.createdAt}
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>

      <HomeFooter />
    </div>
  );
}
