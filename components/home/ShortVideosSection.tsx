"use client";

import * as React from "react";
import Link from "next/link";
import { Badge, Button } from "@/components/ui";
import { FEATURED_SHORT_VIDEOS, type ShortVideoItem } from "@/lib/data/home";

const CARD_SURFACE_BG: Record<ShortVideoItem["accent"], string> = {
  blue: "from-[#141A3A] via-[#1C2A63] to-[#2F49A8]",
  navy: "from-[#0E132B] via-[#141A3A] to-[#23326B]",
  yellow: "from-[#1A2147] via-[#263166] to-[#141A3A]",
  violet: "from-[#141A3A] via-[#2A265E] to-[#3B337A]",
};

export function ShortVideosSection() {
  const [likedIds, setLikedIds] = React.useState<Record<string, boolean>>({});

  const toggleLike = (id: string) => {
    setLikedIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section
      id="short-videos"
      aria-labelledby="short-videos-heading"
      className="bg-[var(--surface-sf-primary)] py-[var(--space-2xl)]"
    >
      <div className="mx-auto max-w-6xl space-y-[var(--space-md)] px-[var(--space-sm)] md:px-[var(--space-md)]">
        <div className="flex flex-col gap-[var(--space-2xs)] sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-[var(--space-4xs)]">
              <Badge variant="solid" color="blue" value="یک کار، یک دقیقه" />
              <span className="text-body-xs text-[var(--content-text-tertiary)]">
                آموزش‌های سریع با نتیجه قابل‌اجرا
              </span>
            </div>
            <h2
              id="short-videos-heading"
              className="text-headline-lg md:text-display-sm font-extrabold text-[var(--content-text-primary)]"
            >
              ویدیوهای کوتاه منتخب
            </h2>
          </div>

          <Link href="/short-videos" className="inline-flex">
            <Button
              appearance="stroke"
              status="neutral"
              size="sm"
              label="مشاهده همه ویدیوها ←"
            />
          </Link>
        </div>

        {/* Aurevo Vertical Showcase Cards (Tool tag + like counter only — NO star ratings) */}
        <div className="grid grid-cols-1 gap-[var(--space-sm)] sm:grid-cols-2 lg:grid-cols-4">
          {FEATURED_SHORT_VIDEOS.map((video) => {
            const isLiked = Boolean(likedIds[video.id]);
            const displayLikes = video.likes + (isLiked ? 1 : 0);

            return (
              <article
                key={video.id}
                className="group relative flex aspect-[4/5] flex-col justify-between overflow-hidden rounded-[24px] border border-[var(--stroke-stroke-quinary)] bg-[#141A3A] p-[var(--space-sm)] text-white shadow-sm transition-transform duration-200 hover:-translate-y-1"
              >
                {/* Layered Navy/Blue editorial gradient backdrop */}
                <div
                  aria-hidden="true"
                  className={`absolute inset-0 bg-gradient-to-b ${CARD_SURFACE_BG[video.accent]}`}
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,197,61,0.16),transparent_55%)]"
                />

                {/* Top pill bar: Tool tag & exact duration */}
                <div className="relative z-10 flex items-center justify-between gap-2">
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

                {/* Center play affordance */}
                <div className="relative z-10 flex items-center justify-center">
                  <span
                    aria-hidden="true"
                    className="inline-flex size-14 items-center justify-center rounded-full border border-white/25 bg-white/10 backdrop-blur-md transition-transform duration-200 group-hover:scale-105"
                  >
                    <svg width="20" height="20" viewBox="0 0 16 16" fill="currentColor">
                      <path d="M4.5 3.4C4.5 2.75 5.22 2.36 5.77 2.71L12.67 7.11C13.18 7.43 13.18 8.17 12.67 8.49L5.77 12.89C5.22 13.24 4.5 12.85 4.5 12.2V3.4Z" />
                    </svg>
                  </span>
                </div>

                {/* Bottom glass content + like counter */}
                <div className="relative z-10 space-y-[var(--space-2xs)] rounded-[18px] border border-white/15 bg-black/25 p-[var(--space-xs)] backdrop-blur-md">
                  <h3 className="text-title-xs font-bold leading-snug text-white">
                    {video.title}
                  </h3>

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
      </div>
    </section>
  );
}
