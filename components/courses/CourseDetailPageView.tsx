"use client";

import * as React from "react";
import Link from "next/link";
import { Avatar, Badge, Button, Chip, Input } from "@/components/ui";
import { HomeHeader } from "@/components/home/HomeHeader";
import { HomeFooter } from "@/components/home/HomeFooter";
import { getInstructorSlugByName } from "@/lib/data/instructors";
import type {
  CourseLessonItem,
  SingleCourseDetail,
} from "@/lib/data/course-details";

interface CourseDetailPageViewProps {
  course: SingleCourseDetail;
}

export function CourseDetailPageView({ course }: CourseDetailPageViewProps) {
  const [hasAccess, setHasAccess] = React.useState(false);
  const [inPathway, setInPathway] = React.useState(false);
  const [openModules, setOpenModules] = React.useState<Record<string, boolean>>(
    () => {
      const initial: Record<string, boolean> = {};
      if (course.modules[0]) {
        initial[course.modules[0].id] = true;
      }
      return initial;
    }
  );
  const [activeSampleLesson, setActiveSampleLesson] =
    React.useState<CourseLessonItem | null>(null);
  const [lockedHintLessonId, setLockedHintLessonId] = React.useState<
    string | null
  >(null);

  // Student project upload state (P1)
  const [selectedFileName, setSelectedFileName] = React.useState<string>("");
  const [selectedFileSize, setSelectedFileSize] = React.useState<string>("");
  const [projectNote, setProjectNote] = React.useState("");
  const [projectSubmitted, setProjectSubmitted] = React.useState(false);

  // Course forum interaction state (P1)
  const [upvotedThreadIds, setUpvotedThreadIds] = React.useState<
    Record<string, boolean>
  >({});
  const [newQuestionText, setNewQuestionText] = React.useState("");
  const [postedQuestions, setPostedQuestions] = React.useState<string[]>([]);

  const isSubscription = course.accessType === "اشتراک جامع";

  const toggleModule = (modId: string) => {
    setOpenModules((prev) => ({ ...prev, [modId]: !prev[modId] }));
  };

  const handleToggleAllModules = () => {
    const allOpen = course.modules.every((m) => openModules[m.id]);
    const nextState: Record<string, boolean> = {};
    course.modules.forEach((m) => {
      nextState[m.id] = !allOpen;
    });
    setOpenModules(nextState);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    setSelectedFileName(file.name);
    const kb = Math.max(1, Math.round(file.size / 1024));
    setSelectedFileSize(
      kb > 1024 ? `${(kb / 1024).toFixed(1)} MB` : `${kb} KB`
    );
    setProjectSubmitted(false);
  };

  const handleProjectSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!selectedFileName) {
      setSelectedFileName("sample-report-output.pdf");
      setSelectedFileSize("420 KB");
    }
    setProjectSubmitted(true);
  };

  const handlePostForumQuestion = (event: React.FormEvent) => {
    event.preventDefault();
    const trimmed = newQuestionText.trim();
    if (!trimmed) return;
    setPostedQuestions((prev) => [trimmed, ...prev]);
    setNewQuestionText("");
  };

  return (
    <div id="top" className="min-h-screen bg-[var(--surface-sf-primary)]">
      <HomeHeader />

      <main className="pb-[var(--space-2xl)]">
        {/* Top Breadcrumb + Hero Banner & Sticky Action Box */}
        <section className="border-b border-[var(--stroke-stroke-quinary)] bg-[var(--surface-sf-primary)] pt-[var(--space-md)] pb-[var(--space-xl)]">
          <div className="mx-auto max-w-[1152px] space-y-[var(--space-md)] px-[var(--space-sm)] md:px-[var(--space-md)]">
            {/* Breadcrumb Navigation */}
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
                کاتالوگ دوره‌ها
              </Link>
              <span aria-hidden="true">/</span>
              <span className="font-semibold text-[var(--content-text-primary)]">
                {course.title}
              </span>
            </nav>

            {/* 2-Column Editorial Hero Layout */}
            <div className="grid grid-cols-1 items-start gap-[var(--space-lg)] lg:grid-cols-12">
              {/* Main Info & Outcomes Column */}
              <div className="space-y-[var(--space-md)] lg:col-span-7">
                <div className="space-y-[var(--space-xs)]">
                  <div className="flex flex-wrap items-center gap-[var(--space-4xs)]">
                    <Badge variant="solid" color="blue" value={course.category} />
                    <Chip
                      variant="stroke-subtle"
                      status="neutral"
                      size="sm"
                      label={`سطح: ${course.level}`}
                    />
                    <span
                      dir="ltr"
                      className="inline-flex items-center gap-1 rounded-[var(--radius-full)] bg-[#FFC53D] px-2.5 py-0.5 text-[11px] font-extrabold text-[#141A3A] tabular-nums"
                    >
                      <span aria-hidden="true">★</span>
                      <span>{course.rating}</span>
                      <span className="font-medium opacity-80">
                        ({course.ratingCount} نظر)
                      </span>
                    </span>
                  </div>

                  <h1 className="text-headline-lg md:text-display-md font-extrabold leading-[1.2] text-[var(--content-text-primary)]">
                    {course.title}
                  </h1>

                  <p className="text-body-md leading-relaxed text-[var(--content-text-secondary)]">
                    {course.outcome}
                  </p>

                  {/* Instructor + Last Update Meta Card */}
                  <div className="flex flex-wrap items-center justify-between gap-[var(--space-xs)] rounded-[20px] border border-[var(--stroke-stroke-quinary)] bg-[var(--surface-sf-secondary)] p-[var(--space-xs)]">
                    <Link
                      href={`/instructors/${getInstructorSlugByName(course.instructorName)}`}
                      className="flex items-center gap-[var(--space-2xs)] group"
                    >
                      <Avatar
                        size="md"
                        mode="text"
                        text={course.instructorInitials}
                      />
                      <div>
                        <div className="flex items-center gap-1.5">
                          <span className="text-body-sm font-bold text-[var(--content-text-primary)] group-hover:text-[#5B7CFF] transition-colors">
                            {course.instructorName}
                          </span>
                          <span className="rounded-[var(--radius-full)] bg-[#141A3A] px-2 py-0.5 text-[10px] font-bold text-[#FFC53D]">
                            مدرس
                          </span>
                        </div>
                        <div className="text-body-xs text-[var(--content-text-tertiary)]">
                          {course.instructorRole} · مشاهده صفحه مدرس ←
                        </div>
                      </div>
                    </Link>

                    <div className="flex flex-wrap items-center gap-[var(--space-sm)] text-body-xs text-[var(--content-text-secondary)]">
                      <span>به‌روزرسانی: {course.updatedAt}</span>
                      <span>
                        {course.duration} · {course.lessonsCount} درس
                      </span>
                    </div>
                  </div>
                </div>

                {/* Outcomes Box: "بعد از این دوره می‌تونی..." (P0) */}
                <div className="rounded-[26px] border border-[var(--stroke-stroke-quinary)] bg-[var(--surface-sf-secondary)] p-[var(--space-md)] space-y-[var(--space-xs)]">
                  <h2 className="text-headline-sm font-extrabold text-[var(--content-text-primary)]">
                    بعد از این دوره می‌تونی...
                  </h2>
                  <ul className="space-y-[var(--space-2xs)]">
                    {course.outcomesAfterCourse.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-[var(--space-2xs)] text-body-sm leading-relaxed text-[var(--content-text-secondary)]"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-1 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-[#FFC53D] text-[11px] font-black text-[#141A3A]"
                        >
                          ✓
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Sticky Aurevo Framed Action Box (P0) */}
              <aside className="lg:sticky lg:top-24 lg:col-span-5">
                <div
                  className={`rounded-[28px] p-[var(--space-xs)] shadow-sm ${
                    isSubscription ? "bg-[#141A3A]" : "bg-[#FFC53D]"
                  }`}
                >
                  <div
                    className={`mb-[var(--space-3xs)] flex items-center justify-between px-2 text-body-xs font-extrabold ${
                      isSubscription ? "text-[#FFC53D]" : "text-[#141A3A]"
                    }`}
                  >
                    <span>
                      {hasAccess ? "دسترسی دوره برای تو باز است" : course.accessType}
                    </span>
                    <button
                      type="button"
                      onClick={() => setHasAccess((prev) => !prev)}
                      className={`rounded-[var(--radius-full)] px-2.5 py-0.5 text-[10px] font-semibold cursor-pointer ${
                        isSubscription
                          ? "bg-white/15 text-white hover:bg-white/25"
                          : "bg-[#141A3A]/10 text-[#141A3A] hover:bg-[#141A3A]/20"
                      }`}
                    >
                      {hasAccess ? "تست حالت بدون خرید" : "تست حالت خریداری‌شده"}
                    </button>
                  </div>

                  <div className="rounded-[22px] bg-[var(--surface-sf-primary)] p-[var(--space-md)] space-y-[var(--space-sm)]">
                    <div className="space-y-1">
                      <div className="text-body-xs font-semibold text-[#5B7CFF]">
                        روش دسترسی شفاف
                      </div>
                      <div className="text-headline-sm font-extrabold text-[var(--content-text-primary)]">
                        {hasAccess ? "آماده یادگیری و ادامه مسیر" : course.priceLabel}
                      </div>
                      <p className="text-body-xs leading-relaxed text-[var(--content-text-tertiary)]">
                        {hasAccess
                          ? "همه فصل‌ها، فایل‌های تمرین و تالار اختصاصی این دوره برای تو فعال هستن."
                          : isSubscription
                            ? "این دوره کامل داخل «اشتراک جامع» قرار دارد و هم‌زمان تمام دوره‌های اشتراکی دیگر را هم باز می‌کند."
                            : "این دوره با مدل «خرید تک‌دوره» بدون نیاز به اشتراک فعال می‌شود و نسخه خریداری‌شده همیشه در حساب تو می‌ماند."}
                      </p>
                    </div>

                    {/* Primary + Secondary CTAs */}
                    <div className="space-y-[var(--space-3xs)]">
                      {hasAccess ? (
                        <Button
                          appearance="solid"
                          status="warning"
                          size="lg"
                          fullWidth
                          className="!text-[#141A3A] font-bold"
                          label="شروع / ادامه یادگیری ←"
                          onClick={() => {
                            const firstLesson = course.modules[0]?.lessons[0];
                            if (firstLesson) setActiveSampleLesson(firstLesson);
                          }}
                        />
                      ) : (
                        <>
                          <Button
                            appearance="solid"
                            status="warning"
                            size="lg"
                            fullWidth
                            className="!text-[#141A3A] font-bold"
                            label={
                              isSubscription
                                ? "خرید اشتراک جامع و شروع دوره"
                                : "خرید تک‌دوره و شروع یادگیری"
                            }
                            onClick={() => setHasAccess(true)}
                          />
                          {!isSubscription && (
                            <Button
                              appearance="stroke"
                              status="neutral"
                              size="md"
                              fullWidth
                              label="مشاهده با اشتراک جامع"
                              onClick={() => setHasAccess(true)}
                            />
                          )}
                        </>
                      )}

                      <Button
                        appearance={inPathway ? "solid" : "stroke"}
                        status={inPathway ? "primary" : "neutral"}
                        size="md"
                        fullWidth
                        label={
                          inPathway
                            ? "در مسیر یادگیری من ✓"
                            : "+ افزودن به مسیر یادگیری من"
                        }
                        onClick={() => setInPathway((prev) => !prev)}
                      />
                    </div>

                    {/* Quick Lesson Sample Jump */}
                    <div className="rounded-[16px] border border-[var(--stroke-stroke-quinary)] bg-[var(--surface-sf-secondary)] p-[var(--space-xs)] flex items-center justify-between gap-2">
                      <span className="text-body-xs text-[var(--content-text-secondary)]">
                        قبل از تصمیم می‌خوای کیفیت تدریس رو ببینی؟
                      </span>
                      <a
                        href="#syllabus"
                        className="shrink-0 text-body-xs font-bold text-[#5B7CFF] hover:underline"
                      >
                        نمونه رایگان ↓
                      </a>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* P1 Recommended Prerequisites (Non-Blocking Notice) */}
        <section className="pt-[var(--space-lg)]">
          <div className="mx-auto max-w-[1152px] px-[var(--space-sm)] md:px-[var(--space-md)]">
            <div className="rounded-[24px] border border-[var(--stroke-stroke-quinary)] bg-[var(--surface-sf-secondary)] p-[var(--space-md)] space-y-[var(--space-xs)]">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex flex-wrap items-center gap-[var(--space-3xs)]">
                  <Badge
                    variant="subtle"
                    color="blue"
                    value="پیش‌نیازهای پیشنهادی (اختیاری)"
                  />
                  <h2 className="text-title-sm font-bold text-[var(--content-text-primary)]">
                    موارد کمکی قبل از شروع این دوره
                  </h2>
                </div>
                <span className="text-body-xs font-semibold text-[var(--content-text-secondary)]">
                  ندیدن پیش‌نیاز مانع خرید یا تماشا نمی‌شود
                </span>
              </div>

              <div className="grid grid-cols-1 gap-[var(--space-xs)] md:grid-cols-2">
                {course.recommendedPrerequisites.map((pre) => (
                  <Link
                    key={pre.title}
                    href={pre.href}
                    className="flex items-center justify-between gap-[var(--space-sm)] rounded-[18px] border border-[var(--stroke-stroke-quinary)] bg-[var(--surface-sf-primary)] p-[var(--space-sm)] transition-colors hover:border-[#5B7CFF]"
                  >
                    <div className="space-y-1">
                      <div className="text-[11px] font-bold text-[#5B7CFF]">
                        {pre.kind}
                      </div>
                      <div className="text-body-sm font-bold text-[var(--content-text-primary)]">
                        {pre.title}
                      </div>
                      <p className="text-body-xs text-[var(--content-text-tertiary)]">
                        {pre.reason}
                      </p>
                    </div>
                    <span className="shrink-0 text-body-sm font-bold text-[#5B7CFF]">
                      مشاهده ←
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* P0 Collapsible Syllabus with Free Sample Playback + Transparent Lock */}
        <section
          id="syllabus"
          aria-labelledby="syllabus-heading"
          className="pt-[var(--space-xl)]"
        >
          <div className="mx-auto max-w-[1152px] space-y-[var(--space-sm)] px-[var(--space-sm)] md:px-[var(--space-md)]">
            <div className="flex flex-wrap items-end justify-between gap-[var(--space-xs)]">
              <div className="space-y-1">
                <span className="text-body-xs font-semibold text-[#5B7CFF]">
                  سرفصل‌های گام‌به‌گام
                </span>
                <h2
                  id="syllabus-heading"
                  className="text-headline-md md:text-headline-lg font-extrabold text-[var(--content-text-primary)]"
                >
                  فهرست بخش‌ها و درس‌ها
                </h2>
              </div>

              <Button
                appearance="stroke"
                status="neutral"
                size="sm"
                label="باز / بستن همه فصل‌ها"
                onClick={handleToggleAllModules}
              />
            </div>

            {/* Active Free Sample Player Stage */}
            {activeSampleLesson && (
              <div className="rounded-[26px] bg-[#141A3A] p-[var(--space-xs)] text-white shadow-md">
                <div className="rounded-[20px] border border-white/10 bg-[#182046] p-[var(--space-md)] space-y-[var(--space-xs)]">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-[var(--radius-full)] bg-[#FFC53D] px-2.5 py-0.5 text-[11px] font-bold text-[#141A3A]">
                        {hasAccess ? "پخش درس دوره" : "پیش‌نمایش نمونه رایگان"}
                      </span>
                      <span dir="ltr" className="text-body-xs text-white/80 tabular-nums">
                        {activeSampleLesson.duration}
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => setActiveSampleLesson(null)}
                      aria-label="بستن پخش‌کننده نمونه"
                      className="rounded-[var(--radius-full)] bg-white/10 px-3 py-1 text-body-xs text-white hover:bg-white/20 cursor-pointer"
                    >
                      بستن ✕
                    </button>
                  </div>

                  <h3 className="text-headline-sm font-bold text-white">
                    {activeSampleLesson.title}
                  </h3>
                  <p className="text-body-sm leading-relaxed text-white/85">
                    {activeSampleLesson.summary}
                  </p>
                  <div className="rounded-[14px] border border-white/15 bg-black/25 px-[var(--space-sm)] py-[var(--space-xs)] text-body-xs text-[#FFC53D]">
                    خروجی کلیدی این درس: {activeSampleLesson.keyTakeaway}
                  </div>
                </div>
              </div>
            )}

            {/* Accordion Modules List */}
            <div className="space-y-[var(--space-xs)]">
              {course.modules.map((mod) => {
                const isOpen = Boolean(openModules[mod.id]);
                return (
                  <div
                    key={mod.id}
                    className="overflow-hidden rounded-[22px] border border-[var(--stroke-stroke-quinary)] bg-[var(--surface-sf-primary)]"
                  >
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() => toggleModule(mod.id)}
                      className="flex w-full items-center justify-between gap-[var(--space-sm)] bg-[var(--surface-sf-secondary)] px-[var(--space-sm)] py-[var(--space-sm)] text-start transition-colors hover:bg-[var(--surface-sf-tertiary)] cursor-pointer"
                    >
                      <div className="space-y-0.5">
                        <div className="text-title-sm font-extrabold text-[var(--content-text-primary)]">
                          {mod.title}
                        </div>
                        <div className="text-body-xs text-[var(--content-text-tertiary)]">
                          {mod.lessons.length} درس · مدت زمان: {mod.duration}
                        </div>
                      </div>
                      <span
                        aria-hidden="true"
                        className="inline-flex size-8 shrink-0 items-center justify-center rounded-full border border-[var(--stroke-stroke-quinary)] bg-[var(--surface-sf-primary)] text-body-sm font-bold text-[var(--content-text-primary)]"
                      >
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>

                    {isOpen && (
                      <ul className="divide-y divide-[var(--stroke-stroke-quinary)]">
                        {mod.lessons.map((lesson) => {
                          const canPlay = lesson.isFreeSample || hasAccess;
                          const isLockedNoticeOpen =
                            lockedHintLessonId === lesson.id && !canPlay;

                          return (
                            <li
                              key={lesson.id}
                              className="px-[var(--space-sm)] py-[var(--space-xs)] space-y-[var(--space-3xs)]"
                            >
                              <div className="flex flex-col gap-[var(--space-2xs)] sm:flex-row sm:items-center sm:justify-between">
                                <div className="space-y-0.5">
                                  <div className="flex flex-wrap items-center gap-[var(--space-4xs)]">
                                    <span className="text-body-sm font-semibold text-[var(--content-text-primary)]">
                                      {lesson.title}
                                    </span>
                                    {lesson.isFreeSample && (
                                      <Badge
                                        variant="subtle"
                                        color="blue"
                                        value="نمونه رایگان"
                                      />
                                    )}
                                  </div>
                                  <p className="text-body-xs text-[var(--content-text-tertiary)]">
                                    {lesson.summary}
                                  </p>
                                </div>

                                <div className="flex shrink-0 items-center gap-[var(--space-xs)]">
                                  <span
                                    dir="ltr"
                                    className="text-body-xs font-medium text-[var(--content-text-secondary)] tabular-nums"
                                  >
                                    {lesson.duration}
                                  </span>

                                  {canPlay ? (
                                    <Button
                                      appearance="solid"
                                      status={lesson.isFreeSample ? "warning" : "primary"}
                                      size="sm"
                                      className={
                                        lesson.isFreeSample ? "!text-[#141A3A] font-bold" : ""
                                      }
                                      label={
                                        lesson.isFreeSample && !hasAccess
                                          ? "پخش نمونه رایگان ▶"
                                          : "پخش درس ▶"
                                      }
                                      onClick={() => {
                                        setLockedHintLessonId(null);
                                        setActiveSampleLesson(lesson);
                                      }}
                                    />
                                  ) : (
                                    <button
                                      type="button"
                                      onClick={() =>
                                        setLockedHintLessonId((prev) =>
                                          prev === lesson.id ? null : lesson.id
                                        )
                                      }
                                      className="inline-flex items-center gap-1.5 rounded-[var(--radius-full)] border border-[var(--stroke-stroke-quinary)] bg-[var(--surface-sf-secondary)] px-3 py-1.5 text-body-xs font-medium text-[var(--content-text-secondary)] hover:border-[var(--stroke-stroke-quaternary)] cursor-pointer"
                                    >
                                      <span aria-hidden="true">🔒</span>
                                      <span>نیازمند دسترسی</span>
                                    </button>
                                  )}
                                </div>
                              </div>

                              {isLockedNoticeOpen && (
                                <div className="flex flex-wrap items-center justify-between gap-2 rounded-[14px] bg-[var(--surface-sf-secondary)] px-[var(--space-xs)] py-[var(--space-3xs)] text-body-xs text-[var(--content-text-secondary)]">
                                  <span>
                                    این درس با <strong>{course.accessType}</strong> باز می‌شه (یا می‌تونی درس‌های «نمونه رایگان» بالا رو همین الان ببینی).
                                  </span>
                                  <button
                                    type="button"
                                    onClick={() => setHasAccess(true)}
                                    className="font-bold text-[#5B7CFF] hover:underline cursor-pointer"
                                  >
                                    فعال‌سازی دسترسی دوره
                                  </button>
                                </div>
                              )}
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* P1 Bottom Split: Student Project Upload + Course Forum Bridge */}
        <section className="pt-[var(--space-xl)]">
          <div className="mx-auto max-w-[1152px] px-[var(--space-sm)] md:px-[var(--space-md)]">
            <div className="grid grid-cols-1 gap-[var(--space-md)] lg:grid-cols-12">
              {/* Student Project Upload Box (P1) */}
              <div className="rounded-[28px] border border-[var(--stroke-stroke-quinary)] bg-[var(--surface-sf-secondary)] p-[var(--space-md)] space-y-[var(--space-sm)] lg:col-span-5">
                <div className="space-y-1">
                  <Badge variant="solid" color="blue" value="تمرین و پروژه دوره" />
                  <h2 className="text-headline-sm font-extrabold text-[var(--content-text-primary)]">
                    {course.projectBrief.title}
                  </h2>
                  <p className="text-body-xs leading-relaxed text-[var(--content-text-secondary)]">
                    {course.projectBrief.description}
                  </p>
                </div>

                {projectSubmitted ? (
                  <div className="rounded-[18px] border border-[#5B7CFF]/40 bg-[var(--surface-sf-primary)] p-[var(--space-sm)] space-y-[var(--space-3xs)]">
                    <div className="text-body-sm font-extrabold text-[var(--content-text-primary)]">
                      فایل تمرینت با موفقیت ثبت شد ✓
                    </div>
                    <p className="text-body-xs text-[var(--content-text-secondary)]">
                      فایل «{selectedFileName}» ({selectedFileSize}) برای بازبینی مدرس ({course.instructorName}) ارسال شد.
                    </p>
                    <Button
                      appearance="stroke"
                      status="neutral"
                      size="sm"
                      label="ارسال نسخه جدید تمرین"
                      onClick={() => setProjectSubmitted(false)}
                    />
                  </div>
                ) : (
                  <form onSubmit={handleProjectSubmit} className="space-y-[var(--space-xs)]">
                    <label className="flex flex-col items-center justify-center gap-1 rounded-[18px] border border-dashed border-[var(--stroke-stroke-quaternary)] bg-[var(--surface-sf-primary)] px-[var(--space-sm)] py-[var(--space-md)] text-center transition-colors hover:border-[#5B7CFF] cursor-pointer">
                      <input
                        type="file"
                        className="sr-only"
                        onChange={handleFileChange}
                      />
                      <span className="text-body-sm font-bold text-[var(--content-text-primary)]">
                        {selectedFileName
                          ? `فایل انتخاب‌شده: ${selectedFileName} (${selectedFileSize})`
                          : "برای انتخاب فایل تمرین کلیک کن"}
                      </span>
                      <span className="text-[11px] text-[var(--content-text-tertiary)]">
                        فرمت‌های مجاز: {course.projectBrief.acceptedFormats}
                      </span>
                    </label>

                    <Input
                      label="توضیح کوتاه درباره تمرین (اختیاری)"
                      placeholder="مثلاً: این فایل خروجی پرامپت فصل دوم برای گزارش تیم فروش ماست"
                      value={projectNote}
                      onChange={(e) => setProjectNote(e.target.value)}
                    />

                    <Button
                      type="submit"
                      appearance="solid"
                      status="warning"
                      size="md"
                      fullWidth
                      className="!text-[#141A3A] font-bold"
                      label="ارسال فایل تمرین برای مدرس"
                    />
                  </form>
                )}
              </div>

              {/* Dedicated Course Forum Box (P1) */}
              <div className="rounded-[28px] border border-[var(--stroke-stroke-quinary)] bg-[var(--surface-sf-secondary)] p-[var(--space-md)] space-y-[var(--space-sm)] lg:col-span-7">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="space-y-1">
                    <span className="text-body-xs font-semibold text-[#5B7CFF]">
                      تالار اختصاصی این دوره
                    </span>
                    <h2 className="text-headline-sm font-extrabold text-[var(--content-text-primary)]">
                      پرسش و پاسخ دانشجوها و مدرس
                    </h2>
                  </div>

                  <Link
                    href="/forum"
                    className="text-body-xs font-bold text-[#5B7CFF] hover:underline"
                  >
                    مشاهده تالار کامل گفت‌وگو ←
                  </Link>
                </div>

                {/* New Posted Questions */}
                {postedQuestions.map((qText, index) => (
                  <div
                    key={`${qText}-${index}`}
                    className="rounded-[18px] border border-[#5B7CFF]/40 bg-[var(--surface-sf-primary)] p-[var(--space-sm)] space-y-1"
                  >
                    <div className="flex items-center justify-between gap-2 text-[11px] text-[#5B7CFF] font-bold">
                      <span>پرسش جدید تو</span>
                      <span>در انتظار پاسخ مدرس</span>
                    </div>
                    <p className="text-body-sm font-medium text-[var(--content-text-primary)]">
                      {qText}
                    </p>
                  </div>
                ))}

                {/* Existing Course Threads with "مدرس" Badge */}
                <div className="space-y-[var(--space-xs)]">
                  {course.forumThreads.map((thread) => {
                    const upvoted = Boolean(upvotedThreadIds[thread.id]);
                    const count = thread.upvotes + (upvoted ? 1 : 0);

                    return (
                      <article
                        key={thread.id}
                        className="rounded-[18px] border border-[var(--stroke-stroke-quinary)] bg-[var(--surface-sf-primary)] p-[var(--space-sm)] space-y-[var(--space-2xs)]"
                      >
                        <div className="flex items-start justify-between gap-2">
                          <div className="space-y-0.5">
                            <span className="text-[11px] text-[var(--content-text-tertiary)]">
                              پرسش از {thread.authorName}
                            </span>
                            <h3 className="text-body-sm font-bold text-[var(--content-text-primary)]">
                              {thread.question}
                            </h3>
                          </div>

                          <button
                            type="button"
                            aria-pressed={upvoted}
                            onClick={() =>
                              setUpvotedThreadIds((prev) => ({
                                ...prev,
                                [thread.id]: !prev[thread.id],
                              }))
                            }
                            className={`shrink-0 rounded-[var(--radius-full)] px-2.5 py-1 text-body-xs font-bold tabular-nums transition-colors cursor-pointer ${
                              upvoted
                                ? "bg-[#FFC53D] text-[#141A3A]"
                                : "border border-[var(--stroke-stroke-quinary)] bg-[var(--surface-sf-secondary)] text-[var(--content-text-secondary)]"
                            }`}
                          >
                            ▲ {count}
                          </button>
                        </div>

                        <div className="rounded-[14px] bg-[var(--surface-sf-secondary)] p-[var(--space-xs)] space-y-1">
                          <div className="flex items-center gap-1.5">
                            <span className="text-body-xs font-bold text-[var(--content-text-primary)]">
                              {thread.answerAuthor}
                            </span>
                            {thread.isInstructor && (
                              <span className="rounded-[var(--radius-full)] bg-[#141A3A] px-2 py-0.5 text-[10px] font-bold text-[#FFC53D]">
                                مدرس
                              </span>
                            )}
                          </div>
                          <p className="text-body-xs leading-relaxed text-[var(--content-text-secondary)]">
                            {thread.answer}
                          </p>
                        </div>
                      </article>
                    );
                  })}
                </div>

                {/* Inline Question Form */}
                <form
                  onSubmit={handlePostForumQuestion}
                  className="flex flex-col gap-[var(--space-3xs)] border-t border-[var(--stroke-stroke-quinary)] pt-[var(--space-xs)] sm:flex-row sm:items-end"
                >
                  <div className="flex-1">
                    <Input
                      label="پرسش تازه در تالار این دوره"
                      placeholder="سوالی درباره سرفصل یا اجرای این دوره داری؟ همین‌جا بنویس..."
                      value={newQuestionText}
                      onChange={(e) => setNewQuestionText(e.target.value)}
                    />
                  </div>
                  <Button
                    type="submit"
                    appearance="solid"
                    status="primary"
                    size="md"
                    label="ثبت در تالار دوره"
                  />
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <HomeFooter />
    </div>
  );
}
