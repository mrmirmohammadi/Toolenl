"use client";

import * as React from "react";
import Link from "next/link";
import { Badge, Button, Input } from "@/components/ui";
import type { ShortVideoDetail } from "@/lib/data/short-videos";

interface ShortVideoPlayerModalProps {
  video: ShortVideoDetail | null;
  isLiked: boolean;
  isFullscreen: boolean;
  onToggleFullscreen: () => void;
  onToggleLike: (id: string) => void;
  onClose: () => void;
  onSelectCourse?: () => void;
}

export function ShortVideoPlayerModal({
  video,
  isLiked,
  isFullscreen,
  onToggleFullscreen,
  onToggleLike,
  onClose,
}: ShortVideoPlayerModalProps) {
  const [isPlaying, setIsPlaying] = React.useState(true);
  const [elapsedSec, setElapsedSec] = React.useState(0);
  const [promptCopied, setPromptCopied] = React.useState(false);
  const [forumComposerOpen, setForumComposerOpen] = React.useState(false);
  const [forumQuestion, setForumQuestion] = React.useState("");
  const [forumSubmitted, setForumSubmitted] = React.useState(false);

  React.useEffect(() => {
    if (!video || !isPlaying) return;
    const timer = window.setInterval(() => {
      setElapsedSec((prev) =>
        prev + 1 >= video.durationSeconds ? 0 : prev + 1
      );
    }, 1000);
    return () => window.clearInterval(timer);
  }, [video, isPlaying]);

  React.useEffect(() => {
    if (!video) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [video, onClose]);

  if (!video) return null;

  const progressPercent = Math.min(
    100,
    Math.round((elapsedSec / Math.max(1, video.durationSeconds)) * 100)
  );
  const activeStepIndex = Math.min(
    video.steps.length - 1,
    Math.floor((elapsedSec / Math.max(1, video.durationSeconds)) * video.steps.length)
  );
  const displayLikes = video.likes + (isLiked ? 1 : 0);

  const formatSeconds = (sec: number) => {
    const mins = Math.floor(sec / 60)
      .toString()
      .padStart(2, "0");
    const rem = (sec % 60).toString().padStart(2, "0");
    return `${mins}:${rem}`;
  };

  const handleCopyPrompt = async () => {
    try {
      await navigator.clipboard.writeText(video.promptText);
      setPromptCopied(true);
      window.setTimeout(() => setPromptCopied(false), 2200);
    } catch {
      setPromptCopied(true);
    }
  };

  const handleForumSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!forumQuestion.trim()) return;
    setForumSubmitted(true);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="short-video-player-title"
      className={`fixed inset-0 z-50 flex items-center justify-center bg-[#0D101B]/80 backdrop-blur-sm ${
        isFullscreen ? "p-0" : "p-[var(--space-xs)] md:p-[var(--space-md)]"
      }`}
    >
      <div
        className={`relative flex w-full flex-col overflow-hidden border border-[var(--stroke-stroke-quinary)] bg-[var(--surface-sf-primary)] shadow-2xl ${
          isFullscreen
            ? "h-full max-w-none rounded-none"
            : "max-h-[92vh] max-w-[1040px] rounded-[32px]"
        }`}
      >
        {/* Top Modal Controls */}
        <div className="flex items-center justify-between gap-[var(--space-xs)] border-b border-[var(--stroke-stroke-quinary)] px-[var(--space-sm)] py-[var(--space-2xs)] md:px-[var(--space-md)]">
          <div className="flex flex-wrap items-center gap-[var(--space-3xs)]">
            <Badge variant="solid" color="blue" value="یک کار، یک دقیقه" />
            <span className="rounded-[var(--radius-full)] bg-[#FFC53D] px-2.5 py-0.5 text-[11px] font-bold text-[#141A3A]">
              {video.tool}
            </span>
            <span className="text-body-xs text-[var(--content-text-tertiary)]">
              مدرس: {video.instructorName}
            </span>
          </div>

          <div className="flex items-center gap-[var(--space-3xs)]">
            <button
              type="button"
              onClick={onToggleFullscreen}
              aria-label={isFullscreen ? "خروج از حالت تمام‌صفحه" : "پخش تمام‌صفحه"}
              className="rounded-[var(--radius-full)] border border-[var(--stroke-stroke-quinary)] bg-[var(--surface-sf-secondary)] px-3 py-1.5 text-body-xs font-medium text-[var(--content-text-primary)] hover:bg-[var(--surface-sf-tertiary)] cursor-pointer"
            >
              {isFullscreen ? "نمای معمولی" : "تمام‌صفحه"}
            </button>
            <button
              type="button"
              onClick={onClose}
              aria-label="بستن پخش‌کننده"
              className="inline-flex size-8 items-center justify-center rounded-full border border-[var(--stroke-stroke-quinary)] bg-[var(--surface-sf-secondary)] text-[var(--content-text-primary)] hover:bg-[var(--surface-sf-tertiary)] cursor-pointer"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Body: Vertical Reel Stage + Prompt & Funnel Side Panel */}
        <div className="grid flex-1 grid-cols-1 gap-[var(--space-sm)] overflow-y-auto p-[var(--space-sm)] md:p-[var(--space-md)] lg:grid-cols-12">
          {/* Vertical 9:16 Player Stage */}
          <div className="flex flex-col items-center justify-center rounded-[28px] bg-[#141A3A] p-[var(--space-sm)] lg:col-span-5">
            <div className="relative flex aspect-[9/15] w-full max-w-[330px] flex-col justify-between overflow-hidden rounded-[24px] border border-white/15 bg-gradient-to-b from-[#1A2456] via-[#141A3A] to-[#0B0F24] p-[var(--space-sm)] text-white shadow-lg">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,197,61,0.2),transparent_55%)]"
              />

              {/* Reel top overlay */}
              <div className="relative z-10 flex items-center justify-between gap-2">
                <span className="rounded-[var(--radius-full)] bg-white/15 px-2.5 py-0.5 text-[11px] font-medium backdrop-blur-sm">
                  {video.category}
                </span>
                <span
                  dir="ltr"
                  className="rounded-[var(--radius-full)] bg-black/40 px-2.5 py-0.5 text-[11px] font-semibold tabular-nums"
                >
                  {formatSeconds(elapsedSec)} / {video.duration}
                </span>
              </div>

              {/* Active visual timeline step inside vertical screen */}
              <div className="relative z-10 my-auto space-y-[var(--space-xs)] text-center">
                <button
                  type="button"
                  onClick={() => setIsPlaying((prev) => !prev)}
                  aria-label={isPlaying ? "توقف موقت ویدیو" : "ادامه پخش ویدیو"}
                  className="mx-auto inline-flex size-16 items-center justify-center rounded-full border border-[#FFC53D]/60 bg-[#FFC53D] text-[#141A3A] shadow-md transition-transform hover:scale-105 cursor-pointer"
                >
                  {isPlaying ? (
                    <span className="text-body-md font-black">❚❚</span>
                  ) : (
                    <svg width="22" height="22" viewBox="0 0 16 16" fill="currentColor">
                      <path d="M4.5 3.4C4.5 2.75 5.22 2.36 5.77 2.71L12.67 7.11C13.18 7.43 13.18 8.17 12.67 8.49L5.77 12.89C5.22 13.24 4.5 12.85 4.5 12.2V3.4Z" />
                    </svg>
                  )}
                </button>

                <div className="rounded-[18px] border border-white/15 bg-black/35 p-[var(--space-xs)] text-start backdrop-blur-md">
                  <div className="text-[11px] font-bold text-[#FFC53D]">
                    مرحله فعال ({video.steps[activeStepIndex]?.time})
                  </div>
                  <p className="mt-1 text-body-sm font-semibold leading-snug text-white">
                    {video.steps[activeStepIndex]?.label}
                  </p>
                </div>
              </div>

              {/* Timeline scrubber + like bar */}
              <div className="relative z-10 space-y-[var(--space-3xs)]">
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/20">
                  <div
                    className="h-full rounded-full bg-[#FFC53D] transition-all duration-500"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
                <div className="flex items-center justify-between gap-2 pt-1">
                  <span className="text-[11px] text-white/75">سطح: {video.level}</span>
                  <button
                    type="button"
                    aria-pressed={isLiked}
                    onClick={() => onToggleLike(video.id)}
                    className={`inline-flex items-center gap-1 rounded-[var(--radius-full)] px-3 py-1 text-body-xs font-semibold transition-colors cursor-pointer ${
                      isLiked
                        ? "bg-[#FFC53D] text-[#141A3A]"
                        : "bg-white/15 text-white hover:bg-white/25"
                    }`}
                  >
                    <span aria-hidden="true">♥</span>
                    <span className="tabular-nums">{displayLikes}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right/Start Editorial Actions Column: Prompt + Forum + Related Course */}
          <div className="flex flex-col justify-between gap-[var(--space-sm)] lg:col-span-7">
            <div className="space-y-[var(--space-sm)]">
              <div className="space-y-[var(--space-4xs)]">
                <h2
                  id="short-video-player-title"
                  className="text-headline-md md:text-headline-lg font-extrabold leading-snug text-[var(--content-text-primary)]"
                >
                  {video.title}
                </h2>
                <p className="text-body-sm leading-relaxed text-[var(--content-text-secondary)]">
                  {video.outcomeSummary}
                </p>
              </div>

              {/* Steps Breakdown */}
              <div className="grid grid-cols-1 gap-[var(--space-4xs)] sm:grid-cols-3">
                {video.steps.map((step, idx) => (
                  <button
                    key={step.time}
                    type="button"
                    onClick={() =>
                      setElapsedSec(
                        Math.round((idx / video.steps.length) * video.durationSeconds)
                      )
                    }
                    className={`rounded-[16px] border p-[var(--space-2xs)] text-start transition-colors cursor-pointer ${
                      idx === activeStepIndex
                        ? "border-[#5B7CFF] bg-[color-mix(in_srgb,#5B7CFF_10%,var(--surface-sf-secondary))]"
                        : "border-[var(--stroke-stroke-quinary)] bg-[var(--surface-sf-secondary)] hover:border-[var(--stroke-stroke-quaternary)]"
                    }`}
                  >
                    <div
                      dir="ltr"
                      className="text-[11px] font-bold text-[#5B7CFF] tabular-nums text-end"
                    >
                      {step.time}
                    </div>
                    <div className="mt-1 text-body-xs font-medium leading-snug text-[var(--content-text-primary)]">
                      {step.label}
                    </div>
                  </button>
                ))}
              </div>

              {/* Ready-to-Copy Prompt Box */}
              <div className="rounded-[22px] border border-[var(--stroke-stroke-quinary)] bg-[#141A3A] p-[var(--space-sm)] text-white space-y-[var(--space-2xs)]">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-title-xs font-bold text-[#FFC53D]">
                    پرامپت آماده اجرا
                  </span>
                  <Button
                    appearance="solid"
                    status="warning"
                    size="sm"
                    className="!text-[#141A3A] font-bold"
                    label={promptCopied ? "کپی شد ✓" : "کپی پرامپت"}
                    onClick={handleCopyPrompt}
                  />
                </div>
                <pre className="whitespace-pre-wrap rounded-[14px] border border-white/10 bg-black/25 p-[var(--space-xs)] font-sans text-body-xs leading-relaxed text-white/95">
                  {video.promptText}
                </pre>
              </div>
            </div>

            {/* Funnel Bridge: Forum Question + Related Comprehensive Course */}
            <div className="space-y-[var(--space-xs)]">
              <div className="rounded-[22px] border border-[var(--stroke-stroke-quinary)] bg-[var(--surface-sf-secondary)] p-[var(--space-sm)] space-y-[var(--space-2xs)]">
                <div className="flex flex-col gap-[var(--space-2xs)] sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <div className="text-body-xs font-semibold text-[#5B7CFF]">
                      اتصال مستقیم به تالار گفت‌وگو ({video.forumQuestionCount} پرسش مرتبط)
                    </div>
                    <p className="text-body-xs text-[var(--content-text-secondary)]">
                      توی اجرا به خطا خوردی یا دنبال حالت خاص‌تری هستی؟ همین‌جا بپرس.
                    </p>
                  </div>
                  <Button
                    appearance="stroke"
                    status="primary"
                    size="sm"
                    label="طرح سوال درباره این ویدیو در تالار گفت‌وگو"
                    onClick={() => setForumComposerOpen((prev) => !prev)}
                  />
                </div>

                {forumComposerOpen && (
                  <form
                    onSubmit={handleForumSubmit}
                    className="space-y-[var(--space-3xs)] border-t border-[var(--stroke-stroke-quinary)] pt-[var(--space-xs)]"
                  >
                    {forumSubmitted ? (
                      <div className="flex flex-wrap items-center justify-between gap-2 rounded-[14px] bg-[var(--surface-sf-primary)] p-[var(--space-xs)]">
                        <span className="text-body-xs font-semibold text-[var(--content-text-primary)]">
                          پرسشت برای موضوع «{video.forumTopicLabel}» ثبت شد و مدرس با نشان «مدرس» بهش پاسخ می‌ده.
                        </span>
                        <Link
                          href="/forum"
                          onClick={onClose}
                          className="text-body-xs font-bold text-[#5B7CFF] hover:underline"
                        >
                          رفتن به تالار گفت‌وگو ←
                        </Link>
                      </div>
                    ) : (
                      <div className="flex flex-col gap-[var(--space-3xs)] sm:flex-row sm:items-end">
                        <div className="flex-1">
                          <Input
                            label={`پرسش درباره «${video.title}»`}
                            placeholder="سوالت رو درباره این کار بنویس..."
                            value={forumQuestion}
                            onChange={(e) => setForumQuestion(e.target.value)}
                          />
                        </div>
                        <Button
                          type="submit"
                          appearance="solid"
                          status="primary"
                          size="md"
                          label="ارسال به تالار"
                        />
                      </div>
                    )}
                  </form>
                )}
              </div>

              {/* Related Comprehensive Course Card (Aurevo Framed Motif) */}
              <div className="rounded-[22px] bg-[#FFC53D] p-[var(--space-3xs)]">
                <div className="flex flex-col gap-[var(--space-2xs)] rounded-[18px] bg-[var(--surface-sf-primary)] p-[var(--space-sm)] sm:flex-row sm:items-center sm:justify-between">
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-[var(--space-4xs)]">
                      <span className="text-[11px] font-bold text-[#5B7CFF]">
                        دوره جامع مرتبط
                      </span>
                      <Badge
                        variant="subtle"
                        color={video.relatedCourseAccess === "اشتراک جامع" ? "blue" : "default"}
                        value={video.relatedCourseAccess}
                      />
                    </div>
                    <h3 className="text-title-sm font-extrabold text-[var(--content-text-primary)]">
                      {video.relatedCourseTitle}
                    </h3>
                    <p className="text-body-xs text-[var(--content-text-tertiary)]">
                      مدت دوره کامل: {video.relatedCourseDuration} · پیش‌نیازها اختیاری هستن
                    </p>
                  </div>

                  <Link
                    href="/courses"
                    onClick={onClose}
                    className="inline-flex shrink-0 items-center justify-center rounded-[var(--radius-full)] bg-[#141A3A] px-4 py-2 text-body-xs font-bold text-white transition-opacity hover:opacity-90"
                  >
                    مشاهده دوره جامع ←
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
