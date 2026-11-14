"use client";

import * as React from "react";
import { Badge, Button, Chip, Input } from "@/components/ui";
import { HomeHeader } from "@/components/home/HomeHeader";
import { HomeFooter } from "@/components/home/HomeFooter";
import {
  GUEST_FREE_PREVIEW_LIMIT,
  SHORT_VIDEOS_FEED,
  SHORT_VIDEO_CATEGORIES,
  type ShortVideoCategory,
  type ShortVideoDetail,
} from "@/lib/data/short-videos";
import type { ShortVideoItem } from "@/lib/data/home";
import { GuestGateModal } from "./GuestGateModal";
import { ShortVideoPlayerModal } from "./ShortVideoPlayerModal";

const CARD_SURFACE_BG: Record<ShortVideoItem["accent"], string> = {
  blue: "from-[#141A3A] via-[#1C2A63] to-[#2F49A8]",
  navy: "from-[#0E132B] via-[#141A3A] to-[#23326B]",
  yellow: "from-[#1A2147] via-[#263166] to-[#141A3A]",
  violet: "from-[#141A3A] via-[#2A265E] to-[#3B337A]",
};

export function ShortVideosPageView() {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [activeCategory, setActiveCategory] =
    React.useState<ShortVideoCategory>("همه");
  const [likedIds, setLikedIds] = React.useState<Record<string, boolean>>({});

  // Guest vs Subscriber state (defaults to Guest with 3 curated free videos)
  const [hasSubscription, setHasSubscription] = React.useState(false);
  const [guestWatchedIds, setGuestWatchedIds] = React.useState<string[]>([]);

  // Active video player & gate modal state
  const [activeVideoId, setActiveVideoId] = React.useState<string | null>(null);
  const [isFullscreen, setIsFullscreen] = React.useState(false);
  const [gateState, setGateState] = React.useState<{
    open: boolean;
    reason: "locked-item" | "limit-reached";
    targetVideoTitle?: string;
  }>({ open: false, reason: "locked-item" });

  const normalizedQuery = searchQuery.trim().toLowerCase();

  const filteredVideos = React.useMemo(() => {
    return SHORT_VIDEOS_FEED.filter((video) => {
      const matchesCategory =
        activeCategory === "همه" || video.category === activeCategory;
      if (!matchesCategory) return false;

      if (!normalizedQuery) return true;

      const searchable = [
        video.title,
        video.outcomeSummary,
        video.tool,
        video.category,
        video.relatedCourseTitle,
      ]
        .join(" ")
        .toLowerCase();

      return searchable.includes(normalizedQuery);
    });
  }, [activeCategory, normalizedQuery]);

  const activeVideo: ShortVideoDetail | null =
    SHORT_VIDEOS_FEED.find((v) => v.id === activeVideoId) ?? null;

  const remainingGuestViews = Math.max(
    0,
    GUEST_FREE_PREVIEW_LIMIT - guestWatchedIds.length
  );

  const toggleLike = (id: string) => {
    setLikedIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleOpenVideo = (video: ShortVideoDetail) => {
    if (hasSubscription) {
      setActiveVideoId(video.id);
      return;
    }

    const alreadyWatched = guestWatchedIds.includes(video.id);

    if (!video.freeForGuest) {
      setGateState({
        open: true,
        reason: "locked-item",
        targetVideoTitle: video.title,
      });
      return;
    }

    if (!alreadyWatched && guestWatchedIds.length >= GUEST_FREE_PREVIEW_LIMIT) {
      setGateState({
        open: true,
        reason: "limit-reached",
        targetVideoTitle: video.title,
      });
      return;
    }

    if (!alreadyWatched) {
      setGuestWatchedIds((prev) => [...prev, video.id]);
    }
    setActiveVideoId(video.id);
  };

  const lockedCount = SHORT_VIDEOS_FEED.filter((v) => !v.freeForGuest).length;

  return (
    <div id="top" className="min-h-screen bg-[var(--surface-sf-primary)]">
      <HomeHeader />

      <main className="pb-[var(--space-2xl)]">
        {/* Editorial Header & Goal-Based Search Stage */}
        <section className="border-b border-[var(--stroke-stroke-quinary)] bg-[var(--surface-sf-primary)] pt-[var(--space-lg)] pb-[var(--space-lg)]">
          <div className="mx-auto max-w-[1152px] space-y-[var(--space-md)] px-[var(--space-sm)] md:px-[var(--space-md)]">
            <div className="flex flex-col gap-[var(--space-sm)] lg:flex-row lg:items-end lg:justify-between">
              <div className="space-y-[var(--space-3xs)]">
                <div className="inline-flex items-center gap-[var(--space-3xs)] rounded-[var(--radius-full)] border border-[var(--stroke-stroke-quinary)] bg-[var(--surface-sf-secondary)] px-[var(--space-xs)] py-[var(--space-5xs)] text-body-xs font-medium text-[var(--content-text-secondary)]">
                  <span
                    className="size-2.5 rounded-full bg-[#FFC53D]"
                    aria-hidden="true"
                  />
                  <span>آموزش سریع و کاربردی · بدون حاشیه و تئوری اضافه</span>
                </div>

                <h1 className="max-w-[760px] text-headline-lg md:text-display-md font-extrabold leading-[1.2] text-[var(--content-text-primary)]">
                  ویدیوهای کوتاه: یک کار، یک دقیقه
                </h1>

                <p className="max-w-[660px] text-body-md leading-relaxed text-[var(--content-text-secondary)]">
                  این‌جا هر ویدیو دقیقاً یک مسئله واقعی از کار روزانه‌ات رو زیر یک دقیقه حل می‌کنه؛ با پرامپت آماده کپی، بدون امتیاز ستاره‌ای نمایشی و متصل به تالار گفت‌وگو.
                </p>
              </div>

              {/* Guest Preview Status Card (Aurevo Bento Framed Pill) */}
              <div className="rounded-[24px] bg-[#141A3A] p-[var(--space-xs)] text-white lg:max-w-[360px] lg:shrink-0">
                <div className="flex items-center justify-between gap-[var(--space-xs)]">
                  <div className="space-y-0.5">
                    <div className="text-[11px] font-bold text-[#FFC53D]">
                      {hasSubscription ? "وضعیت: اشتراک جامع فعال" : "وضعیت: بازدید مهمان"}
                    </div>
                    <div className="text-body-xs text-white/90">
                      {hasSubscription
                        ? `همه ${SHORT_VIDEOS_FEED.length} ویدیوی کوتاه برات بازه`
                        : `${remainingGuestViews} از ${GUEST_FREE_PREVIEW_LIMIT} ویدیوی منتخب رایگان باقی‌مانده`}
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setHasSubscription((prev) => !prev)}
                    className="shrink-0 rounded-[var(--radius-full)] border border-white/20 bg-white/10 px-3 py-1.5 text-[11px] font-semibold text-white transition-colors hover:bg-white/20 cursor-pointer"
                  >
                    {hasSubscription ? "مشاهده حالت مهمان" : "تست با اشتراک"}
                  </button>
                </div>
              </div>
            </div>

            {/* Search Box + Category Tabs Bento Frame */}
            <div className="rounded-[28px] border border-[var(--stroke-stroke-quinary)] bg-[var(--surface-sf-secondary)] p-[var(--space-sm)] space-y-[var(--space-sm)]">
              <div className="flex flex-col gap-[var(--space-2xs)] md:flex-row md:items-end">
                <div className="flex-1">
                  <Input
                    label="جست‌وجوی کاربردی بر اساس کاری که می‌خوای انجام بدی"
                    placeholder="چه کاری می‌خوای انجام بدی؟ (مثلاً: خلاصه فایل، جدول فروش...)"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                {searchQuery.trim() !== "" && (
                  <Button
                    appearance="stroke"
                    status="neutral"
                    size="md"
                    label="پاک کردن جست‌وجو"
                    onClick={() => setSearchQuery("")}
                  />
                )}
              </div>

              {/* Horizontal Goal Categories */}
              <div className="flex flex-wrap items-center justify-between gap-[var(--space-xs)] border-t border-[var(--stroke-stroke-quinary)] pt-[var(--space-xs)]">
                <div
                  role="tablist"
                  aria-label="دسته‌بندی موضوعی ویدیوهای کوتاه"
                  className="flex flex-wrap items-center gap-[var(--space-4xs)]"
                >
                  {SHORT_VIDEO_CATEGORIES.map((category) => {
                    const selected = activeCategory === category;
                    return (
                      <Chip
                        key={category}
                        variant={selected ? "solid" : "stroke-subtle"}
                        status={selected ? "primary" : "neutral"}
                        size="md"
                        label={category}
                        onClick={() => setActiveCategory(category)}
                      />
                    );
                  })}
                </div>

                <span className="text-body-xs font-medium text-[var(--content-text-tertiary)]">
                  نمایش {filteredVideos.length} از {SHORT_VIDEOS_FEED.length} ویدیو
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Short Videos Vertical Feed Grid */}
        <section
          aria-label="فید ویدیوهای کوتاه"
          className="pt-[var(--space-lg)]"
        >
          <div className="mx-auto max-w-[1152px] space-y-[var(--space-lg)] px-[var(--space-sm)] md:px-[var(--space-md)]">
            {filteredVideos.length === 0 ? (
              <div className="rounded-[28px] border border-[var(--stroke-stroke-quinary)] bg-[var(--surface-sf-secondary)] p-[var(--space-lg)] text-center space-y-[var(--space-xs)]">
                <h2 className="text-headline-sm font-bold text-[var(--content-text-primary)]">
                  ویدیویی با این جست‌وجو پیدا نشد
                </h2>
                <p className="mx-auto max-w-[460px] text-body-sm text-[var(--content-text-secondary)]">
                  عبارت ساده‌تری مثل «PDF»، «اکسل»، «ایمیل» یا «پرامپت» رو امتحان کن یا دسته‌بندی رو روی «همه» بذار.
                </p>
                <div className="pt-[var(--space-4xs)]">
                  <Button
                    appearance="solid"
                    status="warning"
                    size="md"
                    className="!text-[#141A3A] font-bold"
                    label="نمایش همه ویدیوها"
                    onClick={() => {
                      setSearchQuery("");
                      setActiveCategory("همه");
                    }}
                  />
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-[var(--space-sm)] sm:grid-cols-2 lg:grid-cols-4">
                {filteredVideos.map((video) => {
                  const isLiked = Boolean(likedIds[video.id]);
                  const displayLikes = video.likes + (isLiked ? 1 : 0);
                  const isLockedForGuest = !hasSubscription && !video.freeForGuest;

                  return (
                    <article
                      key={video.id}
                      className={`group relative flex aspect-[4/5] flex-col justify-between overflow-hidden rounded-[24px] border p-[var(--space-sm)] text-white shadow-sm transition-transform duration-200 hover:-translate-y-1 ${
                        video.freeForGuest && !hasSubscription
                          ? "border-[#FFC53D]/70 ring-1 ring-[#FFC53D]/40"
                          : "border-[var(--stroke-stroke-quinary)]"
                      } bg-[#141A3A]`}
                    >
                      <div
                        aria-hidden="true"
                        className={`absolute inset-0 bg-gradient-to-b ${CARD_SURFACE_BG[video.accent]}`}
                      />
                      <div
                        aria-hidden="true"
                        className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,197,61,0.16),transparent_55%)]"
                      />

                      {/* Top bar: Tool + Guest Free/Locked indicator + Duration */}
                      <div className="relative z-10 space-y-[var(--space-4xs)]">
                        <div className="flex items-center justify-between gap-2">
                          <span className="rounded-[var(--radius-full)] bg-[#FFC53D] px-2.5 py-0.5 text-[11px] font-bold text-[#141A3A]">
                            {video.tool}
                          </span>
                          <span
                            dir="ltr"
                            className="rounded-[var(--radius-full)] bg-white/15 px-2.5 py-0.5 text-[11px] font-medium tabular-nums text-white backdrop-blur-sm"
                          >
                            {video.duration}
                          </span>
                        </div>

                        <div className="flex items-center justify-between gap-1">
                          <span className="text-[11px] font-medium text-white/75">
                            {video.category}
                          </span>
                          {!hasSubscription && (
                            <span
                              className={`rounded-[var(--radius-full)] px-2 py-0.5 text-[10px] font-semibold ${
                                video.freeForGuest
                                  ? "bg-[#5B7CFF] text-white"
                                  : "bg-black/45 text-white/90 border border-white/15"
                              }`}
                            >
                              {video.freeForGuest ? "رایگان مهمان" : "اشتراک جامع"}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Center Play or Transparent Lock Button */}
                      <div className="relative z-10 flex items-center justify-center">
                        <button
                          type="button"
                          onClick={() => handleOpenVideo(video)}
                          aria-label={
                            isLockedForGuest
                              ? `باز کردن راهنمای اشتراک برای ویدیوی ${video.title}`
                              : `پخش ویدیوی ${video.title}`
                          }
                          className={`inline-flex size-14 items-center justify-center rounded-full border backdrop-blur-md transition-transform duration-200 group-hover:scale-105 cursor-pointer ${
                            isLockedForGuest
                              ? "border-[#FFC53D]/60 bg-black/45 text-[#FFC53D]"
                              : "border-white/30 bg-white/15 text-white hover:bg-[#FFC53D] hover:text-[#141A3A]"
                          }`}
                        >
                          {isLockedForGuest ? (
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              aria-hidden="true"
                            >
                              <rect x="5" y="11" width="14" height="10" rx="2" />
                              <path d="M8 11V7a4 4 0 0 1 8 0v4" />
                            </svg>
                          ) : (
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 16 16"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path d="M4.5 3.4C4.5 2.75 5.22 2.36 5.77 2.71L12.67 7.11C13.18 7.43 13.18 8.17 12.67 8.49L5.77 12.89C5.22 13.24 4.5 12.85 4.5 12.2V3.4Z" />
                            </svg>
                          )}
                        </button>
                      </div>

                      {/* Bottom Glass Content + Outcome + Like Counter ONLY (no stars) */}
                      <div className="relative z-10 space-y-[var(--space-3xs)] rounded-[18px] border border-white/15 bg-black/35 p-[var(--space-xs)] backdrop-blur-md">
                        <button
                          type="button"
                          onClick={() => handleOpenVideo(video)}
                          className="text-start cursor-pointer"
                        >
                          <h2 className="text-title-xs font-bold leading-snug text-white hover:text-[#FFC53D] transition-colors">
                            {video.title}
                          </h2>
                        </button>

                        <div className="flex items-center justify-between gap-2 pt-1">
                          <span className="rounded-[var(--radius-full)] bg-white/15 px-2.5 py-0.5 text-[11px] text-white/90">
                            سطح: {video.level}
                          </span>

                          <button
                            type="button"
                            aria-pressed={isLiked}
                            aria-label={`پسندیدن ویدیوی ${video.title}`}
                            onClick={() => toggleLike(video.id)}
                            className={`inline-flex items-center gap-1 rounded-[var(--radius-full)] px-2.5 py-1 text-body-xs font-semibold transition-colors cursor-pointer ${
                              isLiked
                                ? "bg-[#FFC53D] text-[#141A3A]"
                                : "bg-white/15 text-white hover:bg-white/25"
                            }`}
                          >
                            <svg
                              width="14"
                              height="14"
                              viewBox="0 0 24 24"
                              fill={isLiked ? "currentColor" : "none"}
                              stroke="currentColor"
                              strokeWidth="2"
                              aria-hidden="true"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 20.5C12 20.5 4 15.2 4 9.2C4 6.5 6.1 4.5 8.6 4.5C10.2 4.5 11.4 5.3 12 6.4C12.6 5.3 13.8 4.5 15.4 4.5C17.9 4.5 20 6.5 20 9.2C20 15.2 12 20.5 12 20.5Z"
                              />
                            </svg>
                            <span className="tabular-nums">{displayLikes}</span>
                          </button>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            )}

            {/* Transparent Guest Gate Section Banner */}
            {!hasSubscription && (
              <div className="rounded-[28px] bg-[#141A3A] p-[var(--space-xs)] text-white shadow-sm">
                <div className="flex flex-col gap-[var(--space-sm)] rounded-[22px] border border-white/10 bg-[#182046] p-[var(--space-md)] md:flex-row md:items-center md:justify-between">
                  <div className="space-y-[var(--space-3xs)]">
                    <div className="flex flex-wrap items-center gap-[var(--space-4xs)]">
                      <Badge
                        variant="solid"
                        color="blue"
                        value="دسترسی کامل فید با اشتراک جامع"
                      />
                      <span className="text-body-xs text-white/75">
                        {GUEST_FREE_PREVIEW_LIMIT} ویدیوی منتخب بدون اشتراک همیشه قابل پخش است
                      </span>
                    </div>
                    <h2 className="text-headline-sm font-extrabold text-white">
                      {lockedCount} ویدیوی تخصصی‌تر همین صفحه با اشتراک جامع باز می‌شن
                    </h2>
                    <p className="max-w-[640px] text-body-sm leading-relaxed text-white/80">
                      با فعال‌کردن اشتراک جامع، به همه ویدیوهای کوتاه «یک کار، یک دقیقه»، باکس پرامپت‌های آماده و تمام دوره‌های اشتراکی بدون هیچ پیچیدگی دسترسی داری.
                    </p>
                  </div>

                  <div className="flex shrink-0 flex-wrap items-center gap-[var(--space-3xs)]">
                    <Button
                      appearance="solid"
                      status="warning"
                      size="lg"
                      className="!text-[#141A3A] font-bold"
                      label="خرید اشتراک جامع"
                      onClick={() => setHasSubscription(true)}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>

      <HomeFooter />

      {/* Vertical Player Modal + Ready Prompt + Forum Bridge + Related Course */}
      <ShortVideoPlayerModal
        key={activeVideo?.id ?? "closed"}
        video={activeVideo}
        isLiked={activeVideo ? Boolean(likedIds[activeVideo.id]) : false}
        isFullscreen={isFullscreen}
        onToggleFullscreen={() => setIsFullscreen((prev) => !prev)}
        onToggleLike={toggleLike}
        onClose={() => {
          setActiveVideoId(null);
          setIsFullscreen(false);
        }}
      />

      {/* Transparent Guest Gate Dialog */}
      <GuestGateModal
        open={gateState.open}
        reason={gateState.reason}
        targetVideoTitle={gateState.targetVideoTitle}
        watchedCount={guestWatchedIds.length}
        previewLimit={GUEST_FREE_PREVIEW_LIMIT}
        onClose={() => setGateState((prev) => ({ ...prev, open: false }))}
        onEnableSubscriberPreview={() => {
          setHasSubscription(true);
          setGateState((prev) => ({ ...prev, open: false }));
        }}
      />
    </div>
  );
}
