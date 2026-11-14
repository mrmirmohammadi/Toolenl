"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Badge, Button, Chip } from "@/components/ui";
import { HomeHeader } from "@/components/home/HomeHeader";
import { HomeFooter } from "@/components/home/HomeFooter";
import { getInstructorSlugByName } from "@/lib/data/instructors";
import {
  CATALOG_ANNOUNCEMENT,
  CATALOG_COURSES,
  COURSE_ACCESS_FILTERS,
  COURSE_LEVEL_FILTERS,
  COURSE_TOPICS,
  type CatalogCourseDetail,
  type CourseAccessFilter,
  type CourseLevelFilter,
  type CourseSortOption,
  type CourseTopicCategory,
} from "@/lib/data/courses";

const COVER_SURFACES: Record<
  CatalogCourseDetail["frameAccent"],
  { bg: string; badgeBg: string; badgeText: string; orb: string }
> = {
  yellow: {
    bg: "bg-gradient-to-br from-[#FFF9EC] via-[#FFF3D1] to-[#FDE8B0] border border-[#FFE4A6]",
    badgeBg: "bg-[#141A3A] text-[#FFC53D]",
    badgeText: "text-[#141A3A]",
    orb: "bg-[#FFC53D]/30",
  },
  navy: {
    bg: "bg-gradient-to-br from-[#F1F3FA] via-[#E6EBF8] to-[#D8E0F4] border border-[#C8CFE9]",
    badgeBg: "bg-[#141A3A] text-white",
    badgeText: "text-[#141A3A]",
    orb: "bg-[#5B7CFF]/15",
  },
  blue: {
    bg: "bg-gradient-to-br from-[#EFF2FF] via-[#E1E8FF] to-[#D0DCFF] border border-[#CCD6FF]",
    badgeBg: "bg-[#5B7CFF] text-white",
    badgeText: "text-[#141A3A]",
    orb: "bg-[#5B7CFF]/25",
  },
};

function toPersianDigits(value: number | string): string {
  const digits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  return String(value).replace(/\d/g, (d) => digits[Number(d)] ?? d);
}

function extractSinglePurchaseAmount(priceLabel: string): string | null {
  const match = priceLabel.match(/([۰-۹0-9,،]+)\s*تومان/);
  return match ? match[1] : null;
}

export function CoursesCatalogPageView() {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [selectedCategory, setSelectedCategory] =
    React.useState<CourseTopicCategory>("همه");
  const [selectedSubgroup, setSelectedSubgroup] = React.useState<string>("همه");
  const [selectedLevel, setSelectedLevel] =
    React.useState<CourseLevelFilter>("همه سطوح");
  const [selectedAccess, setSelectedAccess] =
    React.useState<CourseAccessFilter>("همه");
  const [sortBy, setSortBy] = React.useState<CourseSortOption>("recommended");
  const [viewMode, setViewMode] = React.useState<"grid" | "list">("grid");
  const [pathwayIds, setPathwayIds] = React.useState<string[]>([
    "course-reporting",
  ]);
  const [mobileFiltersOpen, setMobileFiltersOpen] = React.useState(false);

  const activeTopicEntry =
    COURSE_TOPICS.find((t) => t.category === selectedCategory) ?? COURSE_TOPICS[0];

  const handleSelectCategory = (category: CourseTopicCategory) => {
    setSelectedCategory(category);
    setSelectedSubgroup("همه");
  };

  const togglePathway = (courseId: string) => {
    setPathwayIds((prev) =>
      prev.includes(courseId)
        ? prev.filter((id) => id !== courseId)
        : [...prev, courseId]
    );
  };

  const resetAllFilters = () => {
    setSearchQuery("");
    setSelectedCategory("همه");
    setSelectedSubgroup("همه");
    setSelectedLevel("همه سطوح");
    setSelectedAccess("همه");
    setSortBy("recommended");
  };

  const normalizedQuery = searchQuery.trim().toLowerCase();

  const filteredAndSortedCourses = React.useMemo(() => {
    const filtered = CATALOG_COURSES.filter((course) => {
      if (selectedCategory !== "همه" && course.category !== selectedCategory) {
        return false;
      }
      if (selectedSubgroup !== "همه" && course.subCategory !== selectedSubgroup) {
        return false;
      }
      if (selectedLevel !== "همه سطوح" && course.filterLevel !== selectedLevel) {
        return false;
      }
      if (selectedAccess !== "همه" && course.accessType !== selectedAccess) {
        return false;
      }
      if (!normalizedQuery) return true;

      const haystack = [
        course.title,
        course.outcome,
        course.instructorName,
        course.category,
        course.subCategory,
      ]
        .join(" ")
        .toLowerCase();

      return haystack.includes(normalizedQuery);
    });

    return [...filtered].sort((a, b) => {
      if (sortBy === "popular") {
        return b.studentsCount - a.studentsCount;
      }
      return a.recommendedRank - b.recommendedRank;
    });
  }, [
    normalizedQuery,
    selectedAccess,
    selectedCategory,
    selectedLevel,
    selectedSubgroup,
    sortBy,
  ]);

  const hasActiveFilters =
    searchQuery.trim() !== "" ||
    selectedCategory !== "همه" ||
    selectedSubgroup !== "همه" ||
    selectedLevel !== "همه سطوح" ||
    selectedAccess !== "همه" ||
    sortBy !== "recommended";

  return (
    <div id="top" className="min-h-screen bg-[var(--surface-sf-primary)]">
      <HomeHeader />

      <main className="pb-[var(--space-2xl)]">
        {/* Figma Hero Section: Centered Headline + Mascot Icon + Search Pill + Topic Chips */}
        <section className="bg-[var(--surface-sf-primary)] pt-[var(--space-2xl)] pb-[var(--space-lg)]">
          <div className="mx-auto flex max-w-[740px] flex-col items-center gap-[var(--space-lg)] px-[var(--space-sm)] text-center">
            <div className="flex flex-col items-center gap-[var(--space-xs)]">
              <div className="flex items-center justify-center gap-[var(--space-xs)]">
                <Image
                  src="/images/courses/hero-badge.png"
                  alt=""
                  width={52}
                  height={52}
                  className="size-[52px] shrink-0 rounded-[var(--radius-md)] object-cover"
                />
                <h1 className="text-headline-lg md:text-display-sm font-bold text-[var(--content-text-primary)]">
                  دوره‌های هوش مصنوعی
                </h1>
              </div>

              <p className="max-w-[696px] text-body-md md:text-body-lg leading-relaxed text-[var(--content-text-tertiary)]">
                {CATALOG_ANNOUNCEMENT.text}
              </p>
            </div>

            <div className="flex w-full flex-col items-center gap-[var(--space-sm)]">
              {/* Pill Search Bar */}
              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex h-[46px] w-full max-w-[582px] items-center justify-between gap-[var(--space-2xs)] rounded-[var(--radius-full)] border border-[var(--stroke-stroke-quinary)] bg-[var(--surface-sf-primary)] p-[var(--space-5xs)] ps-[var(--space-xs)] transition-colors focus-within:border-[var(--stroke-stroke-brand-blue)]"
              >
                <div className="flex min-w-0 flex-1 items-center gap-[var(--space-2xs)]">
                  <Image
                    src="/icons/courses/search.svg"
                    alt=""
                    width={24}
                    height={24}
                    unoptimized
                    className="shrink-0"
                  />
                  <input
                    type="search"
                    aria-label="جستجو در دوره‌های آموزشی"
                    placeholder="جستجو کنید..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full min-w-0 bg-transparent text-body-md text-[var(--content-text-primary)] placeholder:text-[var(--foreground-fg-placeholder)] outline-none"
                  />
                </div>
                <Button
                  type="submit"
                  appearance="solid"
                  status="primary"
                  size="sm"
                  label="جستجو"
                />
              </form>

              {/* Topic Chips Group */}
              <div className="flex max-w-[620px] flex-wrap items-center justify-center gap-[var(--space-3xs)]">
                {COURSE_TOPICS.map((topic) => {
                  const active = selectedCategory === topic.category;
                  return (
                    <Chip
                      key={topic.category}
                      variant={active ? "solid" : "stroke"}
                      status="neutral"
                      size="lg"
                      className={
                        active
                          ? ""
                          : "!border-[#cdd5df] !text-[var(--content-text-secondary)] hover:!bg-[var(--surface-sf-secondary)]"
                      }
                      label={topic.category}
                      onClick={() => handleSelectCategory(topic.category)}
                    />
                  );
                })}
              </div>

              {/* Dynamic Subgroups when a specific topic is selected */}
              {selectedCategory !== "همه" && (
                <div className="flex flex-wrap items-center justify-center gap-[var(--space-4xs)] rounded-[var(--radius-full)] border border-[var(--stroke-stroke-quinary)] bg-[var(--surface-sf-secondary)] px-[var(--space-xs)] py-[var(--space-5xs)]">
                  <span className="text-body-sm font-medium text-[var(--content-text-tertiary)]">
                    زیرگروه «{selectedCategory}»:
                  </span>
                  {activeTopicEntry.subgroups.map((sub) => (
                    <Chip
                      key={sub}
                      variant={selectedSubgroup === sub ? "solid" : "ghost"}
                      status={selectedSubgroup === sub ? "primary" : "neutral"}
                      size="sm"
                      label={sub}
                      onClick={() => setSelectedSubgroup(sub)}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Main Split Catalog Area: Right Courses Grid + Left Dashed Filters Sidebar */}
        <section
          aria-label="کاتالوگ دوره‌های آموزشی"
          className="border-t border-[var(--stroke-stroke-quinary)]"
        >
          <div className="mx-auto max-w-[1320px] px-[var(--space-sm)] md:px-[var(--space-md)]">
            {/* Mobile Filter Drawer Trigger */}
            <div className="flex items-center justify-between border-b border-dashed border-[var(--stroke-stroke-quinary)] py-[var(--space-2xs)] lg:hidden">
              <Button
                appearance="stroke"
                status="neutral"
                size="sm"
                label={mobileFiltersOpen ? "بستن فیلترها" : "فیلترها و مسیر من"}
                onClick={() => setMobileFiltersOpen((prev) => !prev)}
              />
              {hasActiveFilters && (
                <Button
                  appearance="ghost"
                  status="primary"
                  size="sm"
                  label="حذف همه"
                  onClick={resetAllFilters}
                />
              )}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_320px] xl:grid-cols-[minmax(0,1fr)_350px]">
              {/* Primary Catalog Column (Right in RTL) */}
              <div className="min-w-0 py-[var(--space-xs)] lg:pe-[var(--space-md)]">
                {/* Catalog Toolbar (88:7651) */}
                <div className="flex items-center justify-between gap-[var(--space-xs)] py-[var(--space-2xs)] pb-[var(--space-sm)]">
                  <div className="flex items-baseline gap-[var(--space-5xs)]">
                    <span className="text-title-md font-medium text-[var(--content-text-quaternary)]">
                      دوره آموزشی:
                    </span>
                    <span className="text-title-md font-medium text-[var(--content-text-tertiary)] tabular-nums">
                      {toPersianDigits(filteredAndSortedCourses.length)}
                    </span>
                  </div>

                  {/* Two Control View Switcher (Grid / List) */}
                  <div
                    role="group"
                    aria-label="حالت نمایش دوره‌ها"
                    className="inline-flex items-center gap-[var(--space-6xs)] rounded-[var(--radius-sm)] border border-[var(--stroke-stroke-quinary)] bg-white p-[var(--space-6xs)]"
                  >
                    <button
                      type="button"
                      onClick={() => setViewMode("grid")}
                      aria-label="نمایش شبکه‌ای"
                      aria-pressed={viewMode === "grid"}
                      className={`inline-flex h-[30px] w-[30px] items-center justify-center rounded-[var(--radius-xs)] transition-all cursor-pointer ${
                        viewMode === "grid"
                          ? "border border-[var(--stroke-stroke-quinary)] bg-white shadow-[0px_2px_4px_0px_var(--effects-shadows-3xs),inset_0px_0px_0px_1px_var(--effects-shadows-2xs)]"
                          : "bg-transparent opacity-70 hover:opacity-100"
                      }`}
                    >
                      <Image
                        src="/icons/courses/grid-square.svg"
                        alt=""
                        width={20}
                        height={20}
                        unoptimized
                      />
                    </button>
                    <button
                      type="button"
                      onClick={() => setViewMode("list")}
                      aria-label="نمایش فهرستی"
                      aria-pressed={viewMode === "list"}
                      className={`inline-flex h-[30px] w-[30px] items-center justify-center rounded-[var(--radius-xs)] transition-all cursor-pointer ${
                        viewMode === "list"
                          ? "border border-[var(--stroke-stroke-quinary)] bg-white shadow-[0px_2px_4px_0px_var(--effects-shadows-3xs),inset_0px_0px_0px_1px_var(--effects-shadows-2xs)]"
                          : "bg-transparent opacity-70 hover:opacity-100"
                      }`}
                    >
                      <Image
                        src="/icons/courses/list.svg"
                        alt=""
                        width={20}
                        height={20}
                        unoptimized
                      />
                    </button>
                  </div>
                </div>

                {/* Course Cards Grid or List */}
                {filteredAndSortedCourses.length === 0 ? (
                  <div className="rounded-[var(--radius-5xl)] border border-dashed border-[var(--stroke-stroke-quinary)] bg-[var(--surface-sf-secondary)] p-[var(--space-lg)] text-center space-y-[var(--space-xs)]">
                    <h2 className="text-headline-sm font-bold text-[var(--content-text-primary)]">
                      دوره‌ای با این ترکیب فیلتر پیدا نشد
                    </h2>
                    <p className="mx-auto max-w-[460px] text-body-md text-[var(--content-text-secondary)]">
                      فیلترهای سطح یا روش دسترسی رو کمی بازتر بذار یا جست‌وجو رو پاک کن تا همه دوره‌های مهارت‌محور رو ببینی.
                    </p>
                    <div className="pt-[var(--space-4xs)]">
                      <Button
                        appearance="solid"
                        status="primary"
                        size="md"
                        label="نمایش همه دوره‌ها"
                        onClick={resetAllFilters}
                      />
                    </div>
                  </div>
                ) : (
                  <div
                    className={
                      viewMode === "grid"
                        ? "grid grid-cols-1 gap-x-[var(--space-sm)] gap-y-[var(--space-md)] sm:grid-cols-2 xl:grid-cols-3"
                        : "flex flex-col gap-[var(--space-sm)]"
                    }
                  >
                    {filteredAndSortedCourses.map((course) => {
                      const inPathway = pathwayIds.includes(course.id);
                      const isSubscription = course.accessType === "اشتراک جامع";
                      const singleAmount = extractSinglePurchaseAmount(course.priceLabel);
                      const coverTheme = COVER_SURFACES[course.frameAccent];
                      const instructorSlug = getInstructorSlugByName(
                        course.instructorName
                      );

                      return (
                        <article
                          key={course.id}
                          className={`group flex pb-[var(--space-sm)] ${
                            viewMode === "list"
                              ? "flex-col gap-[var(--space-sm)] border-b border-dashed border-[var(--stroke-stroke-quinary)] md:flex-row md:items-stretch"
                              : "flex-col gap-[var(--space-xs)]"
                          }`}
                        >
                          {/* Product Cover Frame (224px height, radius-xs 8px) */}
                          <div
                            className={`relative overflow-hidden rounded-[var(--radius-xs)] p-[var(--space-xs)] flex flex-col justify-between ${coverTheme.bg} ${
                              viewMode === "list"
                                ? "h-[200px] md:h-auto md:min-h-[224px] md:w-[290px] shrink-0"
                                : "h-[224px] w-full"
                            }`}
                          >
                            <div
                              aria-hidden="true"
                              className={`pointer-events-none absolute -top-10 -start-10 size-36 rounded-full blur-2xl ${coverTheme.orb}`}
                            />

                            <div className="relative z-10 flex items-center justify-between gap-2">
                              <span
                                className={`inline-flex items-center rounded-[var(--radius-full)] px-2.5 py-0.5 text-[11px] font-bold ${coverTheme.badgeBg}`}
                              >
                                {course.accessType}
                              </span>

                              <button
                                type="button"
                                onClick={() => togglePathway(course.id)}
                                className={`rounded-[var(--radius-full)] px-2.5 py-1 text-[11px] font-semibold transition-colors cursor-pointer ${
                                  inPathway
                                    ? "bg-[#FFC53D] text-[#141A3A]"
                                    : "bg-white/85 text-[#141A3A] hover:bg-white"
                                }`}
                              >
                                {inPathway ? "✓ در مسیر من" : "+ مسیر من"}
                              </button>
                            </div>

                            <Link
                              href={`/courses/${course.id}`}
                              className="relative z-10 mt-auto space-y-1.5"
                            >
                              <div className="inline-flex items-center gap-1.5 rounded-[var(--radius-xs)] bg-white/80 px-2.5 py-1 text-[11px] font-semibold text-[#141A3A] backdrop-blur-xs">
                                <span>{course.coverTag}</span>
                              </div>
                              <p
                                className={`line-clamp-2 text-body-sm font-medium ${coverTheme.badgeText}`}
                              >
                                {course.outcome}
                              </p>
                            </Link>
                          </div>

                          {/* Card Body */}
                          <div className="flex flex-1 flex-col justify-between gap-[var(--space-xs)]">
                            <div className="space-y-[var(--space-3xs)]">
                              <Link
                                href={`/courses/${course.id}`}
                                className="block"
                              >
                                <h2 className="text-title-lg font-medium text-[var(--content-text-primary)] transition-colors group-hover:text-[var(--content-text-accent-brand)]">
                                  {course.title}
                                </h2>
                              </Link>

                              <Link
                                href={`/instructors/${instructorSlug}`}
                                className="inline-block text-body-md text-[var(--content-text-tertiary)] transition-colors hover:text-[var(--content-text-accent-brand)]"
                              >
                                {course.instructorName}
                              </Link>

                              {/* Tags Row */}
                              <div className="flex flex-wrap items-center gap-[var(--space-3xs)] pt-0.5">
                                <Chip
                                  variant="stroke"
                                  status="neutral"
                                  size="md"
                                  className="!border-[#cdd5df] !text-[var(--content-text-secondary)]"
                                  label={course.subCategory}
                                />
                                <Chip
                                  variant="stroke"
                                  status="neutral"
                                  size="md"
                                  className="!border-[#cdd5df] !text-[var(--content-text-secondary)]"
                                  label={course.filterLevel}
                                />
                                <Chip
                                  variant="stroke"
                                  status="neutral"
                                  size="md"
                                  className="!border-[#cdd5df] !text-[var(--content-text-secondary)]"
                                  label={course.accessType}
                                />
                              </div>
                            </div>

                            <div className="space-y-[var(--space-xs)]">
                              {/* Dashed Metrics Row: Lessons · Duration · Rating */}
                              <div className="grid grid-cols-3 items-center border-y border-dashed border-[var(--stroke-stroke-quinary)] py-[var(--space-3xs)] text-body-sm text-[var(--foreground-fg-tertiary)]">
                                <div className="flex items-center justify-center gap-[var(--space-4xs)] px-1">
                                  <Image
                                    src="/icons/courses/book-open-reader.svg"
                                    alt=""
                                    width={18}
                                    height={18}
                                    unoptimized
                                    className="shrink-0"
                                  />
                                  <span className="truncate">
                                    {toPersianDigits(course.lessonsCount)} درس
                                  </span>
                                </div>

                                <div className="flex items-center justify-center gap-[var(--space-4xs)] border-x border-[var(--stroke-stroke-quinary)] px-1">
                                  <Image
                                    src="/icons/courses/clock.svg"
                                    alt=""
                                    width={18}
                                    height={18}
                                    unoptimized
                                    className="shrink-0"
                                  />
                                  <span className="truncate">
                                    {course.duration}
                                  </span>
                                </div>

                                <div className="flex items-center justify-center gap-[var(--space-4xs)] px-1">
                                  <Image
                                    src="/icons/courses/star.svg"
                                    alt=""
                                    width={18}
                                    height={18}
                                    unoptimized
                                    className="shrink-0"
                                  />
                                  <span className="truncate tabular-nums">
                                    {course.rating} امتیاز
                                  </span>
                                </div>
                              </div>

                              {/* Non-blocking Advisory Prerequisite */}
                              <p className="text-[11px] leading-relaxed text-[var(--content-text-quaternary)]">
                                {course.advisoryPrerequisite}
                              </p>

                              {/* Footer Row: Transparent Access/Price + Arrow Button */}
                              <div className="flex items-center justify-between gap-[var(--space-2xs)]">
                                {isSubscription ? (
                                  <div className="flex items-center gap-[var(--space-3xs)]">
                                    <span className="text-title-sm font-medium text-[var(--content-text-primary)]">
                                      مشمول اشتراک جامع
                                    </span>
                                    <Badge
                                      variant="subtle"
                                      color="blue"
                                      size="sm"
                                      value="اشتراک"
                                    />
                                  </div>
                                ) : (
                                  <div className="flex items-baseline gap-[var(--space-5xs)]">
                                    <span className="text-title-lg font-medium text-[var(--content-text-primary)] tabular-nums">
                                      {singleAmount ?? course.priceLabel}
                                    </span>
                                    {singleAmount && (
                                      <span className="text-body-xs text-[var(--content-text-quinary)]">
                                        تومان
                                      </span>
                                    )}
                                    <Badge
                                      variant="subtle"
                                      color="neutral"
                                      size="sm"
                                      value="تک‌دوره"
                                    />
                                  </div>
                                )}

                                <Link
                                  href={`/courses/${course.id}`}
                                  aria-label={`مشاهده جزئیات ${course.title}`}
                                  className="inline-flex size-[36px] shrink-0 items-center justify-center rounded-[var(--radius-full)] transition-colors hover:bg-[var(--components-buttons-ghost-button-ghost-sf_hover)]"
                                >
                                  <Image
                                    src="/icons/courses/arrow-up-left.svg"
                                    alt=""
                                    width={20}
                                    height={20}
                                    unoptimized
                                  />
                                </Link>
                              </div>
                            </div>
                          </div>
                        </article>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Filters Sidebar Column (Left in RTL, separated by dashed border) */}
              <aside
                aria-label="فیلترهای دوره‌ها"
                className={`${
                  mobileFiltersOpen ? "block" : "hidden"
                } border-b border-dashed border-[var(--stroke-stroke-quinary)] py-[var(--space-sm)] lg:block lg:border-b-0 lg:border-s lg:border-dashed lg:border-[var(--stroke-stroke-quinary)] lg:ps-[var(--space-sm)]`}
              >
                <div className="space-y-[var(--space-md)] lg:sticky lg:top-[84px]">
                  {/* Sidebar Header matching Figma node 91:7766 */}
                  <div className="flex items-center justify-between gap-[var(--space-xs)]">
                    <h2 className="text-title-md font-medium text-[var(--content-text-primary)]">
                      فیلترها
                    </h2>
                    <Button
                      appearance="ghost"
                      status="primary"
                      size="sm"
                      label="حذف همه"
                      disabled={!hasActiveFilters}
                      onClick={resetAllFilters}
                    />
                  </div>

                  {/* Level Filter */}
                  <div className="space-y-[var(--space-2xs)] border-t border-dashed border-[var(--stroke-stroke-quinary)] pt-[var(--space-xs)]">
                    <div className="text-title-xs text-[var(--content-text-secondary)]">
                      سطح دوره
                    </div>
                    <div className="flex flex-wrap gap-[var(--space-4xs)]">
                      {COURSE_LEVEL_FILTERS.map((lvl) => (
                        <Chip
                          key={lvl}
                          variant={selectedLevel === lvl ? "solid" : "stroke"}
                          status={selectedLevel === lvl ? "primary" : "neutral"}
                          size="sm"
                          className={
                            selectedLevel === lvl
                              ? ""
                              : "!border-[#cdd5df] !text-[var(--content-text-secondary)]"
                          }
                          label={lvl}
                          onClick={() => setSelectedLevel(lvl)}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Access Model Filter */}
                  <div className="space-y-[var(--space-2xs)] border-t border-dashed border-[var(--stroke-stroke-quinary)] pt-[var(--space-xs)]">
                    <div className="text-title-xs text-[var(--content-text-secondary)]">
                      روش دسترسی
                    </div>
                    <div className="flex flex-wrap gap-[var(--space-4xs)]">
                      {COURSE_ACCESS_FILTERS.map((acc) => (
                        <Chip
                          key={acc}
                          variant={selectedAccess === acc ? "solid" : "stroke"}
                          status={selectedAccess === acc ? "primary" : "neutral"}
                          size="sm"
                          className={
                            selectedAccess === acc
                              ? ""
                              : "!border-[#cdd5df] !text-[var(--content-text-secondary)]"
                          }
                          label={acc}
                          onClick={() => setSelectedAccess(acc)}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Sort Order */}
                  <div className="space-y-[var(--space-2xs)] border-t border-dashed border-[var(--stroke-stroke-quinary)] pt-[var(--space-xs)]">
                    <div className="text-title-xs text-[var(--content-text-secondary)]">
                      مرتب‌سازی
                    </div>
                    <div className="grid grid-cols-2 gap-[var(--space-4xs)] rounded-[var(--radius-sm)] border border-[var(--stroke-stroke-quinary)] bg-white p-[var(--space-6xs)]">
                      <button
                        type="button"
                        onClick={() => setSortBy("recommended")}
                        aria-pressed={sortBy === "recommended"}
                        className={`rounded-[var(--radius-xs)] py-1.5 text-body-sm font-medium transition-colors cursor-pointer ${
                          sortBy === "recommended"
                            ? "bg-[#141A3A] text-white"
                            : "text-[var(--content-text-secondary)] hover:bg-[var(--surface-sf-secondary)]"
                        }`}
                      >
                        پیشنهادی
                      </button>
                      <button
                        type="button"
                        onClick={() => setSortBy("popular")}
                        aria-pressed={sortBy === "popular"}
                        className={`rounded-[var(--radius-xs)] py-1.5 text-body-sm font-medium transition-colors cursor-pointer ${
                          sortBy === "popular"
                            ? "bg-[#141A3A] text-white"
                            : "text-[var(--content-text-secondary)] hover:bg-[var(--surface-sf-secondary)]"
                        }`}
                      >
                        پرطرفدار
                      </button>
                    </div>
                  </div>

                  {/* My Pathway Quick Summary Box */}
                  <div className="rounded-[var(--radius-2xl)] bg-[#141A3A] p-[var(--space-xs)] text-white space-y-[var(--space-2xs)]">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-body-sm font-bold text-[#FFC53D]">
                        مسیر یادگیری من
                      </span>
                      <span className="rounded-[var(--radius-full)] bg-white/10 px-2 py-0.5 text-[11px] tabular-nums">
                        {toPersianDigits(pathwayIds.length)} دوره
                      </span>
                    </div>
                    <p className="text-[11px] leading-relaxed text-white/80">
                      {pathwayIds.length === 0
                        ? "روی دکمه «+ مسیر من» هر دوره بزن تا لیست اختصاصی خودت رو بچینی."
                        : "دوره‌های انتخابی‌ت همیشه در دسترس‌اند تا قدم‌به‌قدم پیش بری."}
                    </p>
                    <Link
                      href="/my-pathway"
                      className="inline-flex w-full items-center justify-center rounded-[var(--radius-full)] bg-[#FFC53D] px-3 py-2 text-body-sm font-bold text-[#141A3A] transition-opacity hover:opacity-90"
                    >
                      مشاهده مسیر من ←
                    </Link>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>

      <HomeFooter />
    </div>
  );
}
