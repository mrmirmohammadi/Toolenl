"use client";

import * as React from "react";
import Link from "next/link";
import { Badge, Button, Chip, Input } from "@/components/ui";
import { HomeHeader } from "@/components/home/HomeHeader";
import { HomeFooter } from "@/components/home/HomeFooter";
import {
  FORUM_LINKABLE_COURSES,
  FORUM_TOPICS,
  INITIAL_FORUM_THREADS,
  REPORT_REASONS,
  type ForumPostKind,
  type ForumSortOption,
  type ForumThreadItem,
  type ForumTopic,
} from "@/lib/data/forum";

export function ForumPageView() {
  const [threads, setThreads] = React.useState<ForumThreadItem[]>(
    INITIAL_FORUM_THREADS
  );
  const [selectedTopic, setSelectedTopic] = React.useState<ForumTopic>("همه");
  const [sortBy, setSortBy] = React.useState<ForumSortOption>("helpful");
  const [searchQuery, setSearchQuery] = React.useState("");

  // New Thread Composer (P0)
  const [composerOpen, setComposerOpen] = React.useState(false);
  const [postKind, setPostKind] = React.useState<ForumPostKind>("question");
  const [draftTitle, setDraftTitle] = React.useState("");
  const [draftBody, setDraftBody] = React.useState("");
  const [draftResourceIdx, setDraftResourceIdx] = React.useState(0);

  // Voting, Following & Notifications, Moderation Reports (P0 & P1)
  const [votesByThread, setVotesByThread] = React.useState<
    Record<string, "up" | "down" | undefined>
  >({});
  const [followedIds, setFollowedIds] = React.useState<string[]>(["th-1"]);
  const [showFollowNotifications, setShowFollowNotifications] =
    React.useState(true);
  const [activeReplyThreadId, setActiveReplyThreadId] = React.useState<
    string | null
  >(null);
  const [replyDraft, setReplyDraft] = React.useState("");
  const [reportTargetThread, setReportTargetThread] =
    React.useState<ForumThreadItem | null>(null);
  const [selectedReportReason, setSelectedReportReason] =
    React.useState<string>(REPORT_REASONS[0]);
  const [reportedThreadIds, setReportedThreadIds] = React.useState<string[]>(
    []
  );

  // Live Similar-Thread Detection while typing inside New Post Title (P0)
  const similarThreads = React.useMemo(() => {
    const trimmed = draftTitle.trim().toLowerCase();
    if (trimmed.length < 3) return [];
    const tokens = trimmed.split(/\s+/).filter((t) => t.length >= 2);
    if (tokens.length === 0) return [];

    return threads
      .filter((thread) => {
        const hay = [
          thread.title,
          thread.body,
          thread.topic,
          ...thread.keywords,
        ]
          .join(" ")
          .toLowerCase();
        return tokens.some((tok) => hay.includes(tok));
      })
      .slice(0, 3);
  }, [draftTitle, threads]);

  const handlePublishThread = (event: React.FormEvent) => {
    event.preventDefault();
    if (!draftTitle.trim() || !draftBody.trim()) return;

    const linked =
      FORUM_LINKABLE_COURSES[draftResourceIdx] ?? FORUM_LINKABLE_COURSES[0];

    const newThread: ForumThreadItem = {
      id: `th-custom-${Date.now()}`,
      kind: postKind,
      title: draftTitle.trim(),
      body: draftBody.trim(),
      authorName: "تو (دانشجوی تونل)",
      topic: linked.topic,
      linkedResourceTitle: linked.label,
      linkedResourceHref: linked.href,
      createdAtLabel: "هم‌اکنون",
      newestRank: 0,
      upvotes: 1,
      downvotes: 0,
      keywords: draftTitle.trim().split(/\s+/),
      replies: [],
    };

    setThreads((prev) => [newThread, ...prev]);
    setFollowedIds((prev) => [newThread.id, ...prev]);
    setDraftTitle("");
    setDraftBody("");
    setComposerOpen(false);
    setSortBy("newest");
  };

  const handleVote = (threadId: string, dir: "up" | "down") => {
    setVotesByThread((prev) => ({
      ...prev,
      [threadId]: prev[threadId] === dir ? undefined : dir,
    }));
  };

  const toggleFollow = (threadId: string) => {
    setFollowedIds((prev) =>
      prev.includes(threadId)
        ? prev.filter((id) => id !== threadId)
        : [...prev, threadId]
    );
  };

  const handleAddReply = (event: React.FormEvent, threadId: string) => {
    event.preventDefault();
    const trimmed = replyDraft.trim();
    if (!trimmed) return;

    setThreads((prev) =>
      prev.map((t) =>
        t.id === threadId
          ? {
              ...t,
              replies: [
                ...t.replies,
                {
                  id: `reply-${Date.now()}`,
                  authorName: "تو (عضو تالار)",
                  isInstructor: false,
                  body: trimmed,
                  createdAt: "هم‌اکنون",
                },
              ],
            }
          : t
      )
    );
    setReplyDraft("");
    setActiveReplyThreadId(null);
  };

  const handleConfirmReport = (event: React.FormEvent) => {
    event.preventDefault();
    if (!reportTargetThread) return;
    setReportedThreadIds((prev) => [...prev, reportTargetThread.id]);
    setReportTargetThread(null);
  };

  const normalizedSearch = searchQuery.trim().toLowerCase();

  const visibleThreads = React.useMemo(() => {
    const filtered = threads.filter((thread) => {
      if (selectedTopic !== "همه" && thread.topic !== selectedTopic) {
        return false;
      }
      if (!normalizedSearch) return true;
      const hay = [
        thread.title,
        thread.body,
        thread.linkedResourceTitle,
        thread.authorName,
      ]
        .join(" ")
        .toLowerCase();
      return hay.includes(normalizedSearch);
    });

    return [...filtered].sort((a, b) => {
      if (sortBy === "newest") {
        return a.newestRank - b.newestRank;
      }
      const aScore =
        a.upvotes +
        (votesByThread[a.id] === "up" ? 1 : 0) -
        (a.downvotes + (votesByThread[a.id] === "down" ? 1 : 0));
      const bScore =
        b.upvotes +
        (votesByThread[b.id] === "up" ? 1 : 0) -
        (b.downvotes + (votesByThread[b.id] === "down" ? 1 : 0));
      return bScore - aScore;
    });
  }, [normalizedSearch, selectedTopic, sortBy, threads, votesByThread]);

  const userHelpfulScore = React.useMemo(() => {
    const voteCount = Object.values(votesByThread).filter(Boolean).length;
    const customPostsCount = threads.length - INITIAL_FORUM_THREADS.length;
    return 450 + voteCount * 5 + customPostsCount * 20;
  }, [threads.length, votesByThread]);

  return (
    <div id="top" className="min-h-screen bg-[var(--surface-sf-primary)]">
      <HomeHeader />

      <main className="pb-[var(--space-2xl)]">
        {/* Top Community Header + Participation Points + Yellow CTA */}
        <section className="border-b border-[var(--stroke-stroke-quinary)] bg-[var(--surface-sf-primary)] pt-[var(--space-md)] pb-[var(--space-lg)]">
          <div className="mx-auto max-w-[1152px] space-y-[var(--space-md)] px-[var(--space-sm)] md:px-[var(--space-md)]">
            <div className="flex flex-col gap-[var(--space-sm)] lg:flex-row lg:items-end lg:justify-between">
              <div className="space-y-[var(--space-3xs)]">
                <div className="inline-flex items-center gap-[var(--space-3xs)] rounded-[var(--radius-full)] border border-[var(--stroke-stroke-quinary)] bg-[var(--surface-sf-secondary)] px-[var(--space-xs)] py-[var(--space-5xs)] text-body-xs font-medium text-[var(--content-text-secondary)]">
                  <span
                    className="size-2.5 rounded-full bg-[#FFC53D]"
                    aria-hidden="true"
                  />
                  <span>پرسش‌وپاسخ کاربردی · پاسخ مدرسان با نشان «مدرس»</span>
                </div>

                <h1 className="max-w-[780px] text-headline-lg md:text-display-md font-extrabold leading-[1.2] text-[var(--content-text-primary)]">
                  تالار گفت‌وگوی ای‌آی تونل
                </h1>

                <p className="max-w-[660px] text-body-md leading-relaxed text-[var(--content-text-secondary)]">
                  جایی برای پرسیدن گیرهای واقعی در کار، به‌اشتراک‌گذاری تجربه‌های عملی و گرفتن پاسخ مستقیم از مدرس‌ها؛ هر مشارکت مفید امتیاز تو رو برای تخفیف تمدید بیشتر می‌کنه.
                </p>
              </div>

              {/* Action CTA & Participation Points Bento Pill */}
              <div className="flex flex-col gap-[var(--space-2xs)] sm:flex-row sm:items-center lg:shrink-0">
                <div className="rounded-[20px] bg-[#141A3A] px-[var(--space-sm)] py-[var(--space-xs)] text-white">
                  <div className="text-[11px] font-bold text-[#FFC53D]">
                    امتیاز مشارکت تو
                  </div>
                  <div className="text-body-xs text-white/90 tabular-nums">
                    {userHelpfulScore} امتیاز · قابل تبدیل به تخفیف تمدید
                  </div>
                </div>

                <Button
                  appearance="solid"
                  status="warning"
                  size="lg"
                  className="!text-[#141A3A] font-extrabold shadow-xs"
                  label={
                    composerOpen
                      ? "بستن فرم ثبت مطلب ✕"
                      : "+ ثبت پرسش یا تجربه جدید"
                  }
                  onClick={() => setComposerOpen((prev) => !prev)}
                />
              </div>
            </div>

            {/* P0 New Post Composer with Kind Selector + Live Similar-Thread Detection */}
            {composerOpen && (
              <form
                onSubmit={handlePublishThread}
                className="rounded-[28px] bg-[#FFC53D] p-[var(--space-3xs)] shadow-md"
              >
                <div className="rounded-[24px] bg-[var(--surface-sf-primary)] p-[var(--space-md)] space-y-[var(--space-sm)]">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h2 className="text-headline-sm font-extrabold text-[var(--content-text-primary)]">
                      مطلب جدید در تالار گفت‌وگو
                    </h2>
                    <span className="text-body-xs text-[var(--content-text-tertiary)]">
                      ثبت سؤال یا تجربه واقعی = +۲۰ امتیاز مشارکت
                    </span>
                  </div>

                  {/* Content Kind Selector: «سؤال دارم» or «تجربه به اشتراک می‌گذارم» */}
                  <div className="flex flex-wrap items-center gap-[var(--space-3xs)]">
                    <span className="text-body-xs font-bold text-[var(--content-text-primary)]">
                      نوع مطلب:
                    </span>
                    <Chip
                      variant={postKind === "question" ? "solid" : "stroke-subtle"}
                      status={postKind === "question" ? "primary" : "neutral"}
                      size="md"
                      label="سؤال دارم"
                      onClick={() => setPostKind("question")}
                    />
                    <Chip
                      variant={
                        postKind === "experience" ? "solid" : "stroke-subtle"
                      }
                      status={postKind === "experience" ? "warning" : "neutral"}
                      size="md"
                      label="تجربه به اشتراک می‌گذارم"
                      onClick={() => setPostKind("experience")}
                    />
                  </div>

                  {/* Linked Topic / Course Selector */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="forum-resource-select"
                      className="block text-body-xs font-bold text-[var(--content-text-primary)]"
                    >
                      اتصال به موضوع یا دوره مرتبط
                    </label>
                    <select
                      id="forum-resource-select"
                      value={draftResourceIdx}
                      onChange={(e) =>
                        setDraftResourceIdx(Number(e.target.value))
                      }
                      className="w-full rounded-[16px] border border-[var(--stroke-stroke-quaternary)] bg-[var(--surface-sf-secondary)] px-[var(--space-sm)] py-[var(--space-xs)] text-body-sm text-[var(--content-text-primary)] focus:outline-2 focus:outline-[#5B7CFF]"
                    >
                      {FORUM_LINKABLE_COURSES.map((item, idx) => (
                        <option key={item.label} value={idx}>
                          {item.topic} — {item.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Title Input + Live Similar Thread Detection */}
                  <div className="space-y-[var(--space-3xs)]">
                    <Input
                      label={
                        postKind === "question"
                          ? "عنوان پرسش (کوتاه و مشخص)"
                          : "عنوان تجربه‌ای که به کار بستی"
                      }
                      placeholder={
                        postKind === "question"
                          ? "مثلاً: مشکل به‌هم‌ریختگی جدول فارسی اکسل یا خلاصه فایل PDF..."
                          : "مثلاً: چطور زمان گزارش هفتگی تیم رو به ۱۰ دقیقه رسوندم"
                      }
                      value={draftTitle}
                      onChange={(e) => setDraftTitle(e.target.value)}
                    />

                    {/* Automatic Live Similar-Thread Matches */}
                    {similarThreads.length > 0 && (
                      <div
                        role="region"
                        aria-label="گفت‌وگوهای مشابه یافت‌شده"
                        className="rounded-[18px] border border-[#5B7CFF]/40 bg-[color-mix(in_srgb,#5B7CFF_8%,var(--surface-sf-secondary))] p-[var(--space-xs)] space-y-1.5"
                      >
                        <div className="text-[11px] font-extrabold text-[#5B7CFF]">
                          گفت‌وگوهای مشابه قبلی پیدا شدن (شاید جوابت همین‌جا باشه):
                        </div>
                        <ul className="space-y-1">
                          {similarThreads.map((sim) => (
                            <li
                              key={sim.id}
                              className="flex items-center justify-between gap-2 rounded-[12px] bg-[var(--surface-sf-primary)] px-3 py-1.5 text-body-xs"
                            >
                              <a
                                href={`#${sim.id}`}
                                className="font-semibold text-[var(--content-text-primary)] hover:text-[#5B7CFF]"
                              >
                                {sim.title}
                              </a>
                              <span className="shrink-0 text-[11px] text-[var(--content-text-tertiary)]">
                                {sim.replies.length} پاسخ
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* Body Textarea */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="forum-post-body"
                      className="block text-body-xs font-bold text-[var(--content-text-primary)]"
                    >
                      توضیح کامل و مثال واقعی
                    </label>
                    <textarea
                      id="forum-post-body"
                      rows={3}
                      value={draftBody}
                      onChange={(e) => setDraftBody(e.target.value)}
                      placeholder="دقیق بنویس از چه ابزاری استفاده کردی یا چه نتیجه‌ای گرفتی تا هم‌مسیرها و مدرس سریع راهنمایی کنن..."
                      className="w-full rounded-[18px] border border-[var(--stroke-stroke-quaternary)] bg-[var(--surface-sf-primary)] p-[var(--space-xs)] text-body-sm text-[var(--content-text-primary)] placeholder:text-[var(--content-text-tertiary)] focus:outline-2 focus:outline-[#5B7CFF]"
                    />
                  </div>

                  <div className="flex flex-wrap items-center justify-end gap-[var(--space-3xs)]">
                    <Button
                      type="button"
                      appearance="stroke"
                      status="neutral"
                      size="md"
                      label="انصراف"
                      onClick={() => setComposerOpen(false)}
                    />
                    <Button
                      type="submit"
                      appearance="solid"
                      status="warning"
                      size="md"
                      className="!text-[#141A3A] font-bold"
                      label="انتشار در تالار گفت‌وگو"
                    />
                  </div>
                </div>
              </form>
            )}

            {/* P0 Topic Filters + Search + Sort Bar */}
            <div className="rounded-[28px] border border-[var(--stroke-stroke-quinary)] bg-[var(--surface-sf-secondary)] p-[var(--space-sm)] space-y-[var(--space-sm)]">
              <Input
                label="جست‌وجو در پرسش‌ها و تجربه‌ها"
                placeholder="جست‌وجوی کلمه کلیدی (مثلاً: اکسل، PDF، پرامپت، گزارش...)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />

              <div className="flex flex-wrap items-center justify-between gap-[var(--space-xs)] border-t border-[var(--stroke-stroke-quinary)] pt-[var(--space-xs)]">
                <div className="flex flex-wrap gap-[var(--space-4xs)]">
                  {FORUM_TOPICS.map((topic) => (
                    <Chip
                      key={topic}
                      variant={
                        selectedTopic === topic ? "solid" : "stroke-subtle"
                      }
                      status={selectedTopic === topic ? "primary" : "neutral"}
                      size="md"
                      label={topic}
                      onClick={() => setSelectedTopic(topic)}
                    />
                  ))}
                </div>

                <div className="flex items-center gap-[var(--space-2xs)]">
                  <div className="inline-flex items-center gap-1 rounded-[var(--radius-full)] border border-[var(--stroke-stroke-quinary)] bg-[var(--surface-sf-primary)] p-1">
                    <button
                      type="button"
                      onClick={() => setSortBy("helpful")}
                      aria-pressed={sortBy === "helpful"}
                      className={`rounded-[var(--radius-full)] px-3 py-1 text-[11px] font-bold transition-colors cursor-pointer ${
                        sortBy === "helpful"
                          ? "bg-[#141A3A] text-white"
                          : "text-[var(--content-text-secondary)]"
                      }`}
                    >
                      مفیدترین
                    </button>
                    <button
                      type="button"
                      onClick={() => setSortBy("newest")}
                      aria-pressed={sortBy === "newest"}
                      className={`rounded-[var(--radius-full)] px-3 py-1 text-[11px] font-bold transition-colors cursor-pointer ${
                        sortBy === "newest"
                          ? "bg-[#141A3A] text-white"
                          : "text-[var(--content-text-secondary)]"
                      }`}
                    >
                      تازه‌ترین
                    </button>
                  </div>
                  <span className="text-body-xs text-[var(--content-text-tertiary)]">
                    {visibleThreads.length} گفت‌وگو
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* P1 Followed-Thread Notification Inbox + P0 Thread List */}
        <section aria-label="فهرست گفت‌وگوها" className="pt-[var(--space-lg)]">
          <div className="mx-auto max-w-[1152px] space-y-[var(--space-md)] px-[var(--space-sm)] md:px-[var(--space-md)]">
            {/* Notification Inbox for Followed Threads (P1) */}
            {showFollowNotifications && followedIds.length > 0 && (
              <div className="flex flex-col gap-[var(--space-3xs)] rounded-[22px] border border-[#5B7CFF]/35 bg-[var(--surface-sf-secondary)] px-[var(--space-sm)] py-[var(--space-xs)] sm:flex-row sm:items-center sm:justify-between">
                <div className="flex flex-wrap items-center gap-[var(--space-3xs)]">
                  <span className="rounded-[var(--radius-full)] bg-[#5B7CFF] px-2.5 py-0.5 text-[11px] font-bold text-white">
                    اعلان گفت‌وگوهای دنبال‌شده ({followedIds.length})
                  </span>
                  <span className="text-body-xs text-[var(--content-text-primary)]">
                    یک پاسخ جدید با نشان <strong>«مدرس»</strong> روی گفت‌وگوی «جلوگیری از به‌هم‌ریختگی جدول فارسی» ثبت شده است.
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => setShowFollowNotifications(false)}
                  className="self-end text-body-xs font-bold text-[var(--content-text-tertiary)] hover:text-[var(--content-text-primary)] sm:self-center cursor-pointer"
                >
                  بستن اعلان ✕
                </button>
              </div>
            )}

            {/* Threads Feed */}
            <div className="space-y-[var(--space-sm)]">
              {visibleThreads.map((thread) => {
                const userVote = votesByThread[thread.id];
                const netUpvotes =
                  thread.upvotes + (userVote === "up" ? 1 : 0);
                const netDownvotes =
                  thread.downvotes + (userVote === "down" ? 1 : 0);
                const isFollowing = followedIds.includes(thread.id);
                const isReported = reportedThreadIds.includes(thread.id);

                return (
                  <article
                    key={thread.id}
                    id={thread.id}
                    className="rounded-[26px] border border-[var(--stroke-stroke-quinary)] bg-[var(--surface-sf-secondary)] p-[var(--space-md)] space-y-[var(--space-sm)]"
                  >
                    {/* Header Metadata + Voting */}
                    <div className="flex flex-col gap-[var(--space-xs)] sm:flex-row sm:items-start sm:justify-between">
                      <div className="space-y-1.5">
                        <div className="flex flex-wrap items-center gap-[var(--space-4xs)]">
                          <Badge
                            variant="solid"
                            color={
                              thread.kind === "experience" ? "blue" : "default"
                            }
                            value={
                              thread.kind === "question"
                                ? "سؤال"
                                : "تجربه واقعی"
                            }
                          />
                          <Chip
                            variant="stroke-subtle"
                            status="neutral"
                            size="sm"
                            label={thread.topic}
                          />
                          <Link
                            href={thread.linkedResourceHref}
                            className="text-body-xs font-semibold text-[#5B7CFF] hover:underline"
                          >
                            مرتبط با: {thread.linkedResourceTitle}
                          </Link>
                        </div>

                        <h2 className="text-headline-sm font-extrabold leading-snug text-[var(--content-text-primary)]">
                          {thread.title}
                        </h2>

                        <div className="text-[11px] text-[var(--content-text-tertiary)]">
                          نوشته {thread.authorName} · {thread.createdAtLabel}
                        </div>
                      </div>

                      {/* Upvote / Downvote Controls (Participation Points -> Renewal Discount) */}
                      <div className="flex shrink-0 items-center gap-1.5">
                        <button
                          type="button"
                          aria-pressed={userVote === "up"}
                          aria-label={`رأی مثبت به ${thread.title}`}
                          onClick={() => handleVote(thread.id, "up")}
                          className={`inline-flex items-center gap-1 rounded-[var(--radius-full)] px-3 py-1.5 text-body-xs font-bold tabular-nums transition-colors cursor-pointer ${
                            userVote === "up"
                              ? "bg-[#FFC53D] text-[#141A3A]"
                              : "border border-[var(--stroke-stroke-quinary)] bg-[var(--surface-sf-primary)] text-[var(--content-text-primary)] hover:border-[#FFC53D]"
                          }`}
                        >
                          <span aria-hidden="true">▲</span>
                          <span>{netUpvotes}</span>
                        </button>

                        <button
                          type="button"
                          aria-pressed={userVote === "down"}
                          aria-label={`رأی منفی به ${thread.title}`}
                          onClick={() => handleVote(thread.id, "down")}
                          className={`inline-flex items-center gap-1 rounded-[var(--radius-full)] px-2.5 py-1.5 text-body-xs font-semibold tabular-nums transition-colors cursor-pointer ${
                            userVote === "down"
                              ? "bg-[#141A3A] text-white"
                              : "border border-[var(--stroke-stroke-quinary)] bg-[var(--surface-sf-primary)] text-[var(--content-text-tertiary)]"
                          }`}
                        >
                          <span aria-hidden="true">▼</span>
                          <span>{netDownvotes}</span>
                        </button>
                      </div>
                    </div>

                    {/* Readable Body */}
                    <p className="text-body-sm leading-relaxed text-[var(--content-text-secondary)]">
                      {thread.body}
                    </p>

                    {/* Replies List with Distinct «مدرس» Badge */}
                    {thread.replies.length > 0 && (
                      <div className="space-y-[var(--space-2xs)] border-s-2 border-[#FFC53D] ps-[var(--space-sm)]">
                        {thread.replies.map((reply) => (
                          <div
                            key={reply.id}
                            className="rounded-[18px] border border-[var(--stroke-stroke-quinary)] bg-[var(--surface-sf-primary)] p-[var(--space-xs)] space-y-1"
                          >
                            <div className="flex flex-wrap items-center justify-between gap-2">
                              <div className="flex flex-wrap items-center gap-1.5">
                                <span className="text-body-xs font-extrabold text-[var(--content-text-primary)]">
                                  {reply.authorName}
                                </span>
                                {reply.isInstructor && (
                                  <span className="rounded-[var(--radius-full)] bg-[#141A3A] px-2.5 py-0.5 text-[10px] font-bold text-[#FFC53D]">
                                    مدرس
                                  </span>
                                )}
                                {reply.authorRole && (
                                  <span className="text-[11px] text-[var(--content-text-tertiary)]">
                                    · {reply.authorRole}
                                  </span>
                                )}
                              </div>
                              <span className="text-[11px] text-[var(--content-text-tertiary)]">
                                {reply.createdAt}
                              </span>
                            </div>

                            <p className="text-body-xs leading-relaxed text-[var(--content-text-secondary)]">
                              {reply.body}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Inline Reply Box */}
                    {activeReplyThreadId === thread.id && (
                      <form
                        onSubmit={(e) => handleAddReply(e, thread.id)}
                        className="flex flex-col gap-[var(--space-3xs)] rounded-[18px] bg-[var(--surface-sf-primary)] p-[var(--space-xs)] sm:flex-row sm:items-end"
                      >
                        <div className="flex-1">
                          <Input
                            label="پاسخ یا تجربه کمکی تو"
                            placeholder="پاسخ دقیق و کاربردی‌ات رو بنویس..."
                            value={replyDraft}
                            onChange={(e) => setReplyDraft(e.target.value)}
                          />
                        </div>
                        <Button
                          type="submit"
                          appearance="solid"
                          status="primary"
                          size="md"
                          label="ارسال پاسخ"
                        />
                      </form>
                    )}

                    {/* Thread Footer Controls: Reply, Follow, Abuse Report (P1) */}
                    <div className="flex flex-wrap items-center justify-between gap-2 border-t border-[var(--stroke-stroke-quinary)] pt-[var(--space-xs)] text-body-xs">
                      <div className="flex flex-wrap items-center gap-[var(--space-xs)]">
                        <button
                          type="button"
                          onClick={() =>
                            setActiveReplyThreadId((prev) =>
                              prev === thread.id ? null : thread.id
                            )
                          }
                          className="font-bold text-[#5B7CFF] hover:underline cursor-pointer"
                        >
                          {activeReplyThreadId === thread.id
                            ? "بستن پاسخ"
                            : `ثبت پاسخ (${thread.replies.length})`}
                        </button>

                        <button
                          type="button"
                          aria-pressed={isFollowing}
                          onClick={() => toggleFollow(thread.id)}
                          className={`rounded-[var(--radius-full)] px-3 py-1 font-semibold transition-colors cursor-pointer ${
                            isFollowing
                              ? "bg-[#5B7CFF]/15 text-[#5B7CFF]"
                              : "text-[var(--content-text-secondary)] hover:bg-[var(--surface-sf-primary)]"
                          }`}
                        >
                          {isFollowing
                            ? "دنبال می‌کنی ✓ (اعلان فعال)"
                            : "دنبال‌کردن گفت‌وگو"}
                        </button>
                      </div>

                      {isReported ? (
                        <span className="text-[11px] font-semibold text-[var(--content-text-tertiary)]">
                          گزارش برای بررسی مدیر تالار ثبت شد ✓
                        </span>
                      ) : (
                        <button
                          type="button"
                          onClick={() => setReportTargetThread(thread)}
                          className="text-[11px] font-medium text-[var(--content-text-tertiary)] hover:text-[var(--content-text-primary)] cursor-pointer"
                        >
                          گزارش محتوای نامناسب
                        </button>
                      )}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <HomeFooter />

      {/* P1 Report Abuse Modal */}
      {reportTargetThread && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="report-dialog-title"
          className="fixed inset-0 z-50 flex items-center justify-center bg-[var(--surface-sf-overlay)] p-[var(--space-sm)] backdrop-blur-xs"
        >
          <form
            onSubmit={handleConfirmReport}
            className="w-full max-w-[460px] rounded-[28px] border border-[var(--stroke-stroke-quinary)] bg-[var(--surface-sf-primary)] p-[var(--space-md)] shadow-2xl space-y-[var(--space-sm)]"
          >
            <div className="flex items-start justify-between gap-2">
              <div className="space-y-1">
                <h2
                  id="report-dialog-title"
                  className="text-headline-sm font-extrabold text-[var(--content-text-primary)]"
                >
                  گزارش محتوای نامناسب
                </h2>
                <p className="text-body-xs text-[var(--content-text-tertiary)]">
                  دلیل گزارش درباره «{reportTargetThread.title}» را انتخاب کن تا مدیر تالار بررسی کند.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setReportTargetThread(null)}
                className="rounded-full px-2 py-1 text-body-sm text-[var(--content-text-tertiary)] cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="space-y-[var(--space-4xs)]">
              {REPORT_REASONS.map((reason) => (
                <label
                  key={reason}
                  className="flex items-center gap-2 rounded-[14px] border border-[var(--stroke-stroke-quinary)] bg-[var(--surface-sf-secondary)] px-[var(--space-xs)] py-[var(--space-3xs)] text-body-xs font-medium text-[var(--content-text-primary)] cursor-pointer"
                >
                  <input
                    type="radio"
                    name="report-reason"
                    checked={selectedReportReason === reason}
                    onChange={() => setSelectedReportReason(reason)}
                  />
                  <span>{reason}</span>
                </label>
              ))}
            </div>

            <div className="flex flex-col gap-[var(--space-3xs)] sm:flex-row">
              <Button
                type="submit"
                appearance="solid"
                status="primary"
                size="md"
                fullWidth
                label="ارسال گزارش به مدیر تالار"
              />
              <Button
                type="button"
                appearance="stroke"
                status="neutral"
                size="md"
                fullWidth
                label="انصراف"
                onClick={() => setReportTargetThread(null)}
              />
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
