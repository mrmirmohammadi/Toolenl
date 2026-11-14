"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Badge, Button, Chip, Input } from "@/components/ui";
import { HomeHeader } from "@/components/home/HomeHeader";
import { HomeFooter } from "@/components/home/HomeFooter";
import {
  DIGITAL_CERTIFICATES,
  INITIAL_LEARNING_GOAL,
  INITIAL_PATHWAY_COURSES,
  NEL_TIME_BUDGET_SUGGESTIONS,
  PATHWAY_GOAL_PRESETS,
  STUDENT_BADGES,
  STUDENT_PROGRESS_STATS,
  type PathwayCourseEntry,
  type PathwayTabStatus,
} from "@/lib/data/my-pathway";

const TAB_OPTIONS: { key: PathwayTabStatus; label: string }[] = [
  { key: "in-progress", label: "در حال یادگیری" },
  { key: "up-next", label: "برای شروع" },
  { key: "completed", label: "تمام‌شده" },
];

export function MyPathwayPageView() {
  const [goal, setGoal] = React.useState(INITIAL_LEARNING_GOAL);
  const [editGoalOpen, setEditGoalOpen] = React.useState(false);
  const [draftGoalTitle, setDraftGoalTitle] = React.useState(goal.title);
  const [freshPathOpen, setFreshPathOpen] = React.useState(false);
  const [pathRefreshNotice, setPathRefreshNotice] = React.useState<string | null>(
    null
  );

  // Nel time budget selector (۵ / ۱۰ / ۲۰ دقیقه)
  const [selectedTimeBudget, setSelectedTimeBudget] = React.useState<
    "۵ دقیقه" | "۱۰ دقیقه" | "۲۰ دقیقه"
  >("۱۰ دقیقه");

  // Pathway tabs & mutable courses queue
  const [activeTab, setActiveTab] =
    React.useState<PathwayTabStatus>("in-progress");
  const [courses, setCourses] = React.useState<PathwayCourseEntry[]>(
    INITIAL_PATHWAY_COURSES
  );

  // Non-blocking prerequisite warning when reordering "برای شروع"
  const [reorderAdvisory, setReorderAdvisory] = React.useState<{
    courseTitle: string;
    prerequisiteTitle: string;
  } | null>(null);

  // Resume timestamp player banner & quick checkout inside pathway
  const [resumedCourse, setResumedCourse] =
    React.useState<PathwayCourseEntry | null>(null);
  const [quickPurchaseCourse, setQuickPurchaseCourse] =
    React.useState<PathwayCourseEntry | null>(null);
  const [copiedCertCode, setCopiedCertCode] = React.useState<string | null>(
    null
  );

  const activeTimeSuggestion =
    NEL_TIME_BUDGET_SUGGESTIONS.find((s) => s.minutes === selectedTimeBudget) ??
    NEL_TIME_BUDGET_SUGGESTIONS[1];

  const handleSaveEditedGoal = (event: React.FormEvent) => {
    event.preventDefault();
    if (!draftGoalTitle.trim()) return;
    setGoal((prev) => ({ ...prev, title: draftGoalTitle.trim() }));
    setEditGoalOpen(false);
  };

  const handleStartFreshPath = (preset: (typeof PATHWAY_GOAL_PRESETS)[number]) => {
    setGoal((prev) => ({
      ...prev,
      title: preset.title,
      focusArea: preset.focusArea,
    }));
    setDraftGoalTitle(preset.title);
    setFreshPathOpen(false);
    setPathRefreshNotice(
      `مسیر تازه بر اساس «${preset.focusArea}» چیده شد؛ همه خریدها و سابقه تماشای قبلی‌ات کاملاً حفظ شدن.`
    );
  };

  const moveUpNextCourse = (courseId: string, direction: "up" | "down") => {
    const upNextList = courses.filter((c) => c.status === "up-next");
    const idx = upNextList.findIndex((c) => c.id === courseId);
    if (idx === -1) return;
    const swapIdx = direction === "up" ? idx - 1 : idx + 1;
    if (swapIdx < 0 || swapIdx >= upNextList.length) return;

    const targetCourse = upNextList[idx];
    const nextUpNext = [...upNextList];
    const [removed] = nextUpNext.splice(idx, 1);
    nextUpNext.splice(swapIdx, 0, removed);

    const others = courses.filter((c) => c.status !== "up-next");
    setCourses([...others, ...nextUpNext]);

    if (
      direction === "up" &&
      targetCourse.hasRecommendedPrerequisite &&
      targetCourse.recommendedPrerequisiteTitle
    ) {
      setReorderAdvisory({
        courseTitle: targetCourse.title,
        prerequisiteTitle: targetCourse.recommendedPrerequisiteTitle,
      });
    } else {
      setReorderAdvisory(null);
    }
  };

  const handleQuickUnlockCourse = (courseId: string) => {
    setCourses((prev) =>
      prev.map((c) =>
        c.id === courseId
          ? {
              ...c,
              isOwned: true,
              priceLabel: "فعال‌شده در مسیر یادگیری تو",
            }
          : c
      )
    );
    setQuickPurchaseCourse(null);
  };

  const handleCopyCertificateCode = async (code: string) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedCertCode(code);
      window.setTimeout(() => setCopiedCertCode(null), 2200);
    } catch {
      setCopiedCertCode(code);
    }
  };

  const filteredTabCourses = courses.filter((c) => c.status === activeTab);

  return (
    <div id="top" className="min-h-screen bg-[var(--surface-sf-primary)]">
      <HomeHeader />

      <main className="pb-[var(--space-2xl)]">
        {/* P0 Goal Header & Program Management + P0 Nel Time-Budget Widget */}
        <section className="border-b border-[var(--stroke-stroke-quinary)] bg-[var(--surface-sf-primary)] pt-[var(--space-md)] pb-[var(--space-lg)]">
          <div className="mx-auto max-w-[1152px] space-y-[var(--space-md)] px-[var(--space-sm)] md:px-[var(--space-md)]">
            {pathRefreshNotice && (
              <div
                role="status"
                className="flex flex-wrap items-center justify-between gap-2 rounded-[20px] bg-[#FFC53D] px-[var(--space-sm)] py-[var(--space-xs)] text-[#141A3A]"
              >
                <span className="text-body-xs md:text-body-sm font-bold">
                  {pathRefreshNotice}
                </span>
                <button
                  type="button"
                  onClick={() => setPathRefreshNotice(null)}
                  className="rounded-full bg-[#141A3A]/10 px-2.5 py-0.5 text-body-xs font-bold cursor-pointer"
                >
                  متوجه شدم ✕
                </button>
              </div>
            )}

            <div className="grid grid-cols-1 gap-[var(--space-sm)] lg:grid-cols-12">
              {/* Current Goal Header Card */}
              <div className="flex flex-col justify-between gap-[var(--space-sm)] rounded-[28px] border border-[var(--stroke-stroke-quinary)] bg-[var(--surface-sf-secondary)] p-[var(--space-md)] lg:col-span-7">
                <div className="space-y-[var(--space-xs)]">
                  <div className="flex flex-wrap items-center gap-[var(--space-4xs)]">
                    <Badge variant="solid" color="blue" value="مرکز فرماندهی دانشجو" />
                    <span className="text-body-xs text-[var(--content-text-tertiary)]">
                      حوزه تمرکز: {goal.focusArea}
                    </span>
                  </div>

                  <div className="space-y-1">
                    <span className="text-body-xs font-semibold text-[var(--content-text-secondary)]">
                      هدف یادگیری فعلی تو:
                    </span>
                    <h1 className="text-headline-md md:text-headline-lg font-extrabold leading-snug text-[var(--content-text-primary)]">
                      {goal.title}
                    </h1>
                  </div>
                </div>

                {/* Inline Edit Goal Form */}
                {editGoalOpen && (
                  <form
                    onSubmit={handleSaveEditedGoal}
                    className="rounded-[20px] border border-[var(--stroke-stroke-quinary)] bg-[var(--surface-sf-primary)] p-[var(--space-sm)] space-y-[var(--space-xs)]"
                  >
                    <Input
                      label="ویرایش عنوان هدف فعلی"
                      value={draftGoalTitle}
                      onChange={(e) => setDraftGoalTitle(e.target.value)}
                    />
                    <div className="flex flex-wrap gap-[var(--space-4xs)]">
                      <Button
                        type="submit"
                        appearance="solid"
                        status="warning"
                        size="sm"
                        className="!text-[#141A3A] font-bold"
                        label="ذخیره هدف جدید"
                      />
                      <Button
                        type="button"
                        appearance="stroke"
                        status="neutral"
                        size="sm"
                        label="انصراف"
                        onClick={() => setEditGoalOpen(false)}
                      />
                    </div>
                  </form>
                )}

                {/* Fresh Path Picker (Non-destructive to purchase/watch history) */}
                {freshPathOpen && (
                  <div className="rounded-[20px] border border-[#5B7CFF]/40 bg-[var(--surface-sf-primary)] p-[var(--space-sm)] space-y-[var(--space-xs)]">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-title-xs font-bold text-[var(--content-text-primary)]">
                        ساخت مسیر تازه با نِل (سوابق تماشا و خریدها پاک نمی‌شن)
                      </span>
                      <button
                        type="button"
                        onClick={() => setFreshPathOpen(false)}
                        className="text-body-xs text-[var(--content-text-tertiary)] cursor-pointer"
                      >
                        بستن ✕
                      </button>
                    </div>
                    <div className="grid grid-cols-1 gap-[var(--space-4xs)]">
                      {PATHWAY_GOAL_PRESETS.map((preset) => (
                        <button
                          key={preset.id}
                          type="button"
                          onClick={() => handleStartFreshPath(preset)}
                          className="rounded-[14px] border border-[var(--stroke-stroke-quinary)] bg-[var(--surface-sf-secondary)] p-[var(--space-xs)] text-start transition-colors hover:border-[#5B7CFF] cursor-pointer"
                        >
                          <div className="text-body-xs font-bold text-[#5B7CFF]">
                            {preset.focusArea}
                          </div>
                          <div className="text-body-sm font-semibold text-[var(--content-text-primary)]">
                            {preset.title}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Goal Management Action Buttons */}
                <div className="flex flex-wrap items-center gap-[var(--space-3xs)] border-t border-[var(--stroke-stroke-quinary)] pt-[var(--space-xs)]">
                  <Button
                    appearance="stroke"
                    status="neutral"
                    size="sm"
                    label="ویرایش هدف / مسیر"
                    onClick={() => {
                      setFreshPathOpen(false);
                      setEditGoalOpen((prev) => !prev);
                    }}
                  />
                  <Button
                    appearance="solid"
                    status="primary"
                    size="sm"
                    label="ساخت مسیر تازه"
                    onClick={() => {
                      setEditGoalOpen(false);
                      setFreshPathOpen((prev) => !prev);
                    }}
                  />
                  <Link href="/courses" className="ms-auto text-body-xs font-bold text-[#5B7CFF] hover:underline">
                    افزودن دوره جدید از کاتالوگ ←
                  </Link>
                </div>
              </div>

              {/* Nel Smart Time-Budget Widget (P0) */}
              <div className="rounded-[28px] bg-[#141A3A] p-[var(--space-xs)] text-white lg:col-span-5">
                <div className="flex h-full flex-col justify-between gap-[var(--space-xs)] rounded-[22px] border border-white/10 bg-[#182046] p-[var(--space-sm)]">
                  <div className="flex items-center gap-[var(--space-xs)]">
                    <div className="relative size-14 shrink-0 overflow-hidden rounded-[16px] border border-[#FFC53D]/50 bg-[#F7F5F0]">
                      <Image
                        src="/images/nel-mascot.jpg"
                        alt="مسکات نِل — دستیار هوشمند ای‌آی تونل"
                        width={56}
                        height={56}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="space-y-0.5">
                      <span className="inline-flex items-center gap-1 rounded-[var(--radius-full)] bg-[#FFC53D] px-2 py-0.5 text-[10px] font-extrabold text-[#141A3A]">
                        هم‌مسیر هوشمند «نِل» · بدون قفل
                      </span>
                      <h2 className="text-title-sm font-extrabold text-white">
                        الان چقدر وقت داری؟
                      </h2>
                    </div>
                  </div>

                  {/* 5 / 10 / 20 Minutes Chips */}
                  <div className="flex flex-wrap gap-[var(--space-4xs)]">
                    {(["۵ دقیقه", "۱۰ دقیقه", "۲۰ دقیقه"] as const).map(
                      (minutes) => {
                        const selected = selectedTimeBudget === minutes;
                        return (
                          <button
                            key={minutes}
                            type="button"
                            aria-pressed={selected}
                            onClick={() => setSelectedTimeBudget(minutes)}
                            className={`rounded-[var(--radius-full)] px-3.5 py-1.5 text-body-xs font-bold transition-colors cursor-pointer ${
                              selected
                                ? "bg-[#FFC53D] text-[#141A3A]"
                                : "border border-white/20 bg-white/10 text-white hover:bg-white/20"
                            }`}
                          >
                            {minutes}
                          </button>
                        );
                      }
                    )}
                  </div>

                  {/* Personalized Recommendation */}
                  <div className="rounded-[18px] border border-white/15 bg-black/25 p-[var(--space-xs)] space-y-1.5">
                    <div className="text-[11px] font-bold text-[#FFC53D]">
                      {activeTimeSuggestion.sourceLabel}
                    </div>
                    <div className="text-body-sm font-bold text-white">
                      {activeTimeSuggestion.recommendationTitle}
                    </div>
                    <p className="text-body-xs leading-relaxed text-white/75">
                      {activeTimeSuggestion.reason}
                    </p>
                    <div className="pt-1">
                      <button
                        type="button"
                        onClick={() => {
                          const match = courses.find(
                            (c) => c.id === activeTimeSuggestion.targetCourseId
                          );
                          if (match) setResumedCourse(match);
                        }}
                        className="inline-flex items-center rounded-[var(--radius-full)] bg-[#FFC53D] px-3.5 py-1.5 text-body-xs font-extrabold text-[#141A3A] hover:opacity-90 cursor-pointer"
                      >
                        {activeTimeSuggestion.ctaLabel}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Command Workspace: P0 Pathway Status Tabs & Cards + P1 Progress/Points/Badges/Certificates */}
        <section className="pt-[var(--space-lg)]">
          <div className="mx-auto max-w-[1152px] px-[var(--space-sm)] md:px-[var(--space-md)]">
            <div className="grid grid-cols-1 items-start gap-[var(--space-lg)] lg:grid-cols-12">
              {/* P0 Left/Start Column: Status Tabs & Course Queue */}
              <div className="space-y-[var(--space-sm)] lg:col-span-8">
                {/* Status Tabs */}
                <div className="flex flex-wrap items-center justify-between gap-[var(--space-xs)]">
                  <div
                    role="tablist"
                    aria-label="تب‌های وضعیت مسیر یادگیری"
                    className="flex flex-wrap gap-[var(--space-4xs)]"
                  >
                    {TAB_OPTIONS.map((tab) => {
                      const count = courses.filter(
                        (c) => c.status === tab.key
                      ).length;
                      const isActive = activeTab === tab.key;
                      return (
                        <Chip
                          key={tab.key}
                          variant={isActive ? "solid" : "stroke-subtle"}
                          status={isActive ? "primary" : "neutral"}
                          size="md"
                          label={`${tab.label} (${count})`}
                          onClick={() => setActiveTab(tab.key)}
                        />
                      );
                    })}
                  </div>

                  {activeTab === "up-next" && (
                    <span className="text-body-xs text-[var(--content-text-tertiary)]">
                      می‌تونی ترتیب صف رو با دکمه‌های بالا/پایین جابه‌جا کنی
                    </span>
                  )}
                </div>

                {/* Non-blocking Prerequisite Advisory Warning on Reorder */}
                {reorderAdvisory && activeTab === "up-next" && (
                  <div
                    role="note"
                    className="flex flex-wrap items-center justify-between gap-2 rounded-[20px] border border-[#FFC53D] bg-[#FFF9EC] px-[var(--space-sm)] py-[var(--space-xs)] text-[#141A3A]"
                  >
                    <p className="text-body-xs leading-relaxed">
                      <strong>یادآور غیرمسدودکننده نِل:</strong> دوره «
                      {reorderAdvisory.courseTitle}» یک پیش‌نیاز پیشنهادی («
                      {reorderAdvisory.prerequisiteTitle}») دارد؛ ترتیب جدیدت ذخیره شد و جلوی تماشا گرفته نمی‌شود.
                    </p>
                    <button
                      type="button"
                      onClick={() => setReorderAdvisory(null)}
                      className="text-body-xs font-bold underline cursor-pointer"
                    >
                      بستن
                    </button>
                  </div>
                )}

                {/* Active Exact-Timestamp Resume Stage */}
                {resumedCourse && (
                  <div className="rounded-[24px] bg-[#141A3A] p-[var(--space-sm)] text-white space-y-[var(--space-2xs)]">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="rounded-[var(--radius-full)] bg-[#FFC53D] px-2.5 py-0.5 text-[11px] font-bold text-[#141A3A]">
                        پخش دقیق از محل توقف قبلی
                      </span>
                      <button
                        type="button"
                        onClick={() => setResumedCourse(null)}
                        className="rounded-full bg-white/10 px-2.5 py-0.5 text-body-xs text-white hover:bg-white/20 cursor-pointer"
                      >
                        بستن ✕
                      </button>
                    </div>
                    <h3 className="text-headline-sm font-bold text-white">
                      {resumedCourse.title}
                    </h3>
                    <p className="text-body-xs text-white/85">
                      {resumedCourse.resumeChapter} — زمان شروع خودکار:{" "}
                      <strong className="text-[#FFC53D]">
                        {resumedCourse.resumeTimestamp}
                      </strong>
                    </p>
                  </div>
                )}

                {/* Course Queue Cards */}
                <div className="space-y-[var(--space-xs)]">
                  {filteredTabCourses.map((course, index) => (
                    <article
                      key={course.id}
                      className={`rounded-[24px] border p-[var(--space-sm)] space-y-[var(--space-xs)] ${
                        course.isOwned
                          ? "border-[var(--stroke-stroke-quinary)] bg-[var(--surface-sf-secondary)]"
                          : "border-[#FFC53D]/70 bg-[#FFFDF7]"
                      }`}
                    >
                      <div className="flex flex-col gap-[var(--space-2xs)] sm:flex-row sm:items-start sm:justify-between">
                        <div className="space-y-1">
                          <div className="flex flex-wrap items-center gap-[var(--space-4xs)]">
                            <Badge
                              variant="subtle"
                              color={course.isOwned ? "blue" : "default"}
                              value={
                                course.isOwned
                                  ? course.accessType
                                  : `🔒 قفل · ${course.accessType}`
                              }
                            />
                            <span className="text-body-xs text-[var(--content-text-tertiary)]">
                              مدرس: {course.instructorName} · {course.duration}
                            </span>
                          </div>

                          <Link
                            href={`/courses/${course.id}`}
                            className="block hover:text-[#5B7CFF] transition-colors"
                          >
                            <h3 className="text-headline-sm font-extrabold text-[var(--content-text-primary)]">
                              {course.title}
                            </h3>
                          </Link>

                          <p className="text-body-xs text-[var(--content-text-secondary)]">
                            {course.resumeChapter} ·{" "}
                            <span className="font-semibold text-[var(--content-text-primary)]">
                              {course.resumeTimestamp}
                            </span>
                          </p>
                        </div>

                        {/* Reorder controls strictly for "برای شروع" tab */}
                        {activeTab === "up-next" && (
                          <div className="flex shrink-0 items-center gap-1.5">
                            <button
                              type="button"
                              disabled={index === 0}
                              aria-label={`انتقال ${course.title} به بالا`}
                              onClick={() => moveUpNextCourse(course.id, "up")}
                              className="rounded-[var(--radius-full)] border border-[var(--stroke-stroke-quinary)] bg-[var(--surface-sf-primary)] px-2.5 py-1 text-body-xs font-bold text-[var(--content-text-primary)] disabled:opacity-40 cursor-pointer"
                            >
                              ↑ جلوتر
                            </button>
                            <button
                              type="button"
                              disabled={index === filteredTabCourses.length - 1}
                              aria-label={`انتقال ${course.title} به پایین`}
                              onClick={() =>
                                moveUpNextCourse(course.id, "down")
                              }
                              className="rounded-[var(--radius-full)] border border-[var(--stroke-stroke-quinary)] bg-[var(--surface-sf-primary)] px-2.5 py-1 text-body-xs font-bold text-[var(--content-text-primary)] disabled:opacity-40 cursor-pointer"
                            >
                              ↓ عقب‌تر
                            </button>
                          </div>
                        )}
                      </div>

                      {/* Progress Bar */}
                      <div className="space-y-1">
                        <div className="flex items-center justify-between text-[11px] font-medium text-[var(--content-text-tertiary)]">
                          <span>پیشرفت دوره</span>
                          <span className="tabular-nums font-bold text-[var(--content-text-primary)]">
                            {course.progressPercent}٪
                          </span>
                        </div>
                        <div className="h-2 w-full overflow-hidden rounded-full bg-[var(--stroke-stroke-quinary)]">
                          <div
                            className={`h-full rounded-full transition-all ${
                              course.progressPercent === 100
                                ? "bg-[#FFC53D]"
                                : "bg-[#5B7CFF]"
                            }`}
                            style={{ width: `${course.progressPercent}%` }}
                          />
                        </div>
                      </div>

                      {/* Action Footer: Continue from Exact Timestamp OR Quick Unlock inside Pathway */}
                      <div className="flex flex-wrap items-center justify-between gap-[var(--space-2xs)] border-t border-[var(--stroke-stroke-quinary)] pt-[var(--space-xs)]">
                        <span className="text-body-xs text-[var(--content-text-tertiary)]">
                          {course.priceLabel}
                        </span>

                        <div className="flex flex-wrap items-center gap-[var(--space-3xs)]">
                          {course.isOwned ? (
                            <Button
                              appearance="solid"
                              status={
                                course.status === "completed"
                                  ? "neutral"
                                  : "warning"
                              }
                              size="sm"
                              className={
                                course.status === "completed"
                                  ? ""
                                  : "!text-[#141A3A] font-bold"
                              }
                              label={
                                course.status === "completed"
                                  ? "مرور مجدد درس‌ها"
                                  : course.progressPercent > 0
                                    ? "ادامه یادگیری ←"
                                    : "شروع دوره ←"
                              }
                              onClick={() => setResumedCourse(course)}
                            />
                          ) : (
                            <Button
                              appearance="solid"
                              status="warning"
                              size="sm"
                              className="!text-[#141A3A] font-bold"
                              label="خرید سریع بدون خروج از مسیر"
                              onClick={() => setQuickPurchaseCourse(course)}
                            />
                          )}

                          <Link
                            href={`/courses/${course.id}`}
                            className="text-body-xs font-semibold text-[#5B7CFF] hover:underline"
                          >
                            سرفصل‌ها
                          </Link>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>

              {/* P1 Right/End Column: Overall Progress, Points -> Renewal Discount, Badges, Certificates */}
              <aside className="space-y-[var(--space-sm)] lg:col-span-4">
                {/* Progress & Points -> Renewal Discount Card */}
                <div className="rounded-[28px] bg-[#FFC53D] p-[var(--space-xs)] text-[#141A3A]">
                  <div className="rounded-[22px] bg-[var(--surface-sf-primary)] p-[var(--space-md)] space-y-[var(--space-sm)]">
                    <div className="flex items-center justify-between">
                      <h2 className="text-title-sm font-extrabold text-[var(--content-text-primary)]">
                        پیشرفت و امتیاز مشارکت
                      </h2>
                      <span className="rounded-[var(--radius-full)] bg-[#FFC53D] px-2.5 py-0.5 text-body-xs font-extrabold text-[#141A3A] tabular-nums">
                        {STUDENT_PROGRESS_STATS.overallProgressPercent}٪ کل مسیر
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-[var(--space-2xs)]">
                      <div className="rounded-[16px] border border-[var(--stroke-stroke-quinary)] bg-[var(--surface-sf-secondary)] p-[var(--space-xs)]">
                        <div className="text-[11px] text-[var(--content-text-tertiary)]">
                          مجموع تماشا
                        </div>
                        <div className="mt-0.5 text-headline-sm font-extrabold text-[var(--content-text-primary)] tabular-nums">
                          {STUDENT_PROGRESS_STATS.totalWatchedMinutes} دقیقه
                        </div>
                      </div>

                      <div className="rounded-[16px] border border-[var(--stroke-stroke-quinary)] bg-[var(--surface-sf-secondary)] p-[var(--space-xs)]">
                        <div className="text-[11px] text-[var(--content-text-tertiary)]">
                          امتیاز مشارکت
                        </div>
                        <div className="mt-0.5 text-headline-sm font-extrabold text-[#5B7CFF] tabular-nums">
                          {STUDENT_PROGRESS_STATS.participationPoints}
                        </div>
                      </div>
                    </div>

                    <div className="rounded-[16px] bg-[#141A3A] p-[var(--space-xs)] text-white space-y-1">
                      <div className="text-body-xs font-bold text-[#FFC53D]">
                        تبدیل مستقیم به تخفیف تمدید
                      </div>
                      <p className="text-body-xs leading-relaxed text-white/85">
                        امتیازهای مشارکت تو الان معادل{" "}
                        <strong>
                          {STUDENT_PROGRESS_STATS.renewalDiscountPercent}٪ تخفیف تمدید اشتراک
                        </strong>{" "}
                        هستن و موقع تسویه به‌صورت خودکار اعمال می‌شن.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Badges */}
                <div className="rounded-[24px] border border-[var(--stroke-stroke-quinary)] bg-[var(--surface-sf-secondary)] p-[var(--space-md)] space-y-[var(--space-xs)]">
                  <h2 className="text-title-sm font-extrabold text-[var(--content-text-primary)]">
                    نشان‌های کسب‌شده ({STUDENT_BADGES.length})
                  </h2>
                  <ul className="space-y-[var(--space-2xs)]">
                    {STUDENT_BADGES.map((badge) => (
                      <li
                        key={badge.id}
                        className="rounded-[16px] border border-[var(--stroke-stroke-quinary)] bg-[var(--surface-sf-primary)] p-[var(--space-xs)] space-y-0.5"
                      >
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-body-xs font-extrabold text-[var(--content-text-primary)]">
                            ★ {badge.title}
                          </span>
                          <span className="text-[10px] text-[var(--content-text-tertiary)]">
                            {badge.earnedDate}
                          </span>
                        </div>
                        <p className="text-[11px] leading-relaxed text-[var(--content-text-secondary)]">
                          {badge.description}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Verifiable Digital Certificates */}
                <div className="rounded-[24px] border border-[var(--stroke-stroke-quinary)] bg-[var(--surface-sf-secondary)] p-[var(--space-md)] space-y-[var(--space-xs)]">
                  <h2 className="text-title-sm font-extrabold text-[var(--content-text-primary)]">
                    گواهی‌های دیجیتال با استعلام
                  </h2>
                  {DIGITAL_CERTIFICATES.map((cert) => (
                    <div
                      key={cert.id}
                      className="rounded-[18px] border border-[#5B7CFF]/35 bg-[var(--surface-sf-primary)] p-[var(--space-sm)] space-y-[var(--space-2xs)]"
                    >
                      <div className="text-[11px] font-bold text-[#5B7CFF]">
                        صادرشده در {cert.issuedAt} · {cert.totalMinutes} دقیقه آموزش
                      </div>
                      <div className="text-body-sm font-extrabold text-[var(--content-text-primary)]">
                        {cert.courseTitle}
                      </div>
                      <div className="flex items-center justify-between gap-2 rounded-[12px] bg-[var(--surface-sf-secondary)] px-3 py-1.5">
                        <span
                          dir="ltr"
                          className="text-body-xs font-mono font-bold text-[var(--content-text-primary)]"
                        >
                          {cert.verificationCode}
                        </span>
                        <button
                          type="button"
                          onClick={() =>
                            handleCopyCertificateCode(cert.verificationCode)
                          }
                          className="text-[11px] font-bold text-[#5B7CFF] hover:underline cursor-pointer"
                        >
                          {copiedCertCode === cert.verificationCode
                            ? "کپی شد ✓"
                            : "کپی کد استعلام"}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>

      <HomeFooter />

      {/* Inline Quick Purchase Modal (Without leaving My Pathway!) */}
      {quickPurchaseCourse && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="quick-purchase-title"
          className="fixed inset-0 z-50 flex items-center justify-center bg-[var(--surface-sf-overlay)] p-[var(--space-sm)] backdrop-blur-xs"
        >
          <div className="w-full max-w-[460px] rounded-[28px] bg-[#FFC53D] p-[var(--space-3xs)] shadow-2xl">
            <div className="rounded-[24px] bg-[var(--surface-sf-primary)] p-[var(--space-md)] space-y-[var(--space-sm)]">
              <div className="flex items-start justify-between gap-2">
                <div className="space-y-1">
                  <Badge variant="solid" color="blue" value="خرید سریع داخل مسیر" />
                  <h2
                    id="quick-purchase-title"
                    className="text-headline-sm font-extrabold text-[var(--content-text-primary)]"
                  >
                    {quickPurchaseCourse.title}
                  </h2>
                </div>
                <button
                  type="button"
                  onClick={() => setQuickPurchaseCourse(null)}
                  className="rounded-full px-2 py-1 text-body-sm text-[var(--content-text-tertiary)] cursor-pointer"
                >
                  ✕
                </button>
              </div>

              <div className="rounded-[16px] border border-[var(--stroke-stroke-quinary)] bg-[var(--surface-sf-secondary)] p-[var(--space-sm)] space-y-1 text-body-xs">
                <div className="font-bold text-[var(--content-text-primary)]">
                  مبلغ و روش دسترسی: {quickPurchaseCourse.priceLabel}
                </div>
                <div className="text-[var(--content-text-secondary)]">
                  با تایید سریع، بدون خروج از «مسیر یادگیری من» دسترسی دوره برات باز می‌شه و سابقه مسیرت حفظ می‌مونه.
                </div>
              </div>

              <div className="flex flex-col gap-[var(--space-3xs)] sm:flex-row">
                <Button
                  appearance="solid"
                  status="warning"
                  size="md"
                  fullWidth
                  className="!text-[#141A3A] font-bold"
                  label="فعال‌سازی سریع و ادامه مسیر"
                  onClick={() => handleQuickUnlockCourse(quickPurchaseCourse.id)}
                />
                <Button
                  appearance="stroke"
                  status="neutral"
                  size="md"
                  fullWidth
                  label="انصراف"
                  onClick={() => setQuickPurchaseCourse(null)}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
