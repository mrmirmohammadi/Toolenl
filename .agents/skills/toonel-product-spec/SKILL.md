---
name: toonel-product-spec
description: >-
  Architectural and UX/UI specification for Toonel AI (ای‌آی تونل) 10 core pages,
  exact Persian microcopy/CTAs, prioritization (P0/P1/P2), and MoSCoW phased roadmap.
  Use when designing, scaffolding, implementing, updating, or reviewing any Toonel AI
  page, navigation flow, dashboard, checkout flow, or Persian UI copy.
---

# Toonel AI Website Architecture & Page Spec

Use this skill alongside the existing design tokens (`styles/`) and UI component primitives (`components/ui/*`) whenever implementing or reviewing product pages and user flows.

## Core Product Model
1. **Two Transparent Access Models:** Comprehensive subscription (`اشتراک جامع`) and single-course purchase (`خرید تک‌دوره`).
2. **Non-Coercive AI Assistant («نِل» / Nel):** Gives goal- and time-based recommendations (`۵`، `۱۰` یا `۲۰ دقیقه`) without locking or forcing user progression.
3. **Short-to-Long Funnel:** Short videos (`یک کار، یک دقیقه`) include ready-to-copy prompts, link directly to `تالار گفت‌وگو`, and cross-link the related comprehensive course (`[کار] با هوش مصنوعی`).
4. **Unified Engagement Economy:** Participation points from community voting/activity convert to subscription renewal discounts (`تخفیف تمدید`).

## 10 Core Pages Overview
1. **Home Page** (`صفحه اصلی`) — Brand promise, 3-step tunnel flow, curated short videos & courses, Nel chat invite, forum highlights.
2. **Short Videos Feed** (`صفحه ویدیوهای کوتاه`) — Goal-based search & category tabs, tool tags, likes (no stars), vertical player + prompt copy, guest limit (2–3 videos).
3. **Courses Catalog** (`صفحه آموزش‌ها و کاتالوگ دوره‌ها`) — Search + dismissible announcement banner, 3-axis filters (`موضوع`, `سطح`, `روش دسترسی`), sort (`پیشنهادی` / `پرطرفدار`), course cards with `[+ افزودن به مسیر یادگیری من]`.
4. **Single Course Details** (`صفحه معرفی و جزئیات دوره`) — Outcomes (`بعد از این دوره می‌تونی...`), collapsible syllabus with free sample playback, non-blocking prerequisites, project upload & course forum link.
5. **My Pathway & Student Dashboard** (`صفحه «مسیر یادگیری من»`) — Goal management & path reset without losing history, Nel time-budget widget, 3 status tabs (`در حال یادگیری`, `برای شروع`, `تمام‌شده`), resume from exact timestamp, points & verifiable digital certificates.
6. **Community Forum** (`صفحه تالار گفت‌وگو`) — New post (`سؤال دارم` / `تجربه به اشتراک می‌گذارم`) with live similar-thread detection, `مدرس` badge on instructor answers, upvotes/downvotes, follow notifications & abuse report.
7. **Instructor Public Profile** (`صفحه عمومی و اختصاصی مدرس`) — Custom URL, verified specialties (no private data or internal revenue tier), `[پیشنهاد من برای شروع]`, unified courses/videos/ratings tabs.
8. **About Us & Manifesto** (`صفحه «درباره ما» و مانیفست برند`) — Founders story (مهرنوش و وحیده), 6 practical values, Nel character introduction.
9. **Instructor Dashboard** (`داشبورد اختصاصی مدرس`) — Action-needed bar, course/video studio (autosave, mobile preview), review status tracking preserving live version on updates, financial breakdown (single vs subscription share, refunds, payout status, receipts).
10. **Checkout & System** (`صفحات خرید، تسویه‌حساب و وضعیت پرداخت`) — Pre-invoice with automatic level/points discount + promo code, success screen (`خریدت انجام شد` + `[شروع یادگیری]` / `[دیدن رسید خرید]`), pending/ambiguous payment screen (`در حال بررسی پرداخت` + `[بررسی دوباره]` / `[پشتیبانی]`).

## Detailed Specification & Implementation Checklist
For exact component lists, microcopy, button labels, filter options, priorities (`P0`/`P1`/`P2`), and the MoSCoW Phase 1–3 roadmap, read [pages-spec.md](./references/pages-spec.md).

## Verification Checklist
Before marking any page implementation complete:
- Confirm all P0 sections for the target page are present unless explicitly scoped out.
- Verify Persian copy uses informal «تو» without hype or fabricated metrics.
- Verify non-blocking guards (prerequisites do not block playback/purchase; ambiguous checkout offers retry/support; instructor public view omits internal tiers).
