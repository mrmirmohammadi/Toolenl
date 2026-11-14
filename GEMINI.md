# Toonel AI (ای‌آی تونل) — Product & Brand Guardrails

These invariants apply across all UI components, pages, and copy in this repository.

## Brand Voice & Content Naming
- **Tone:** Friendly, clear, practical Persian using informal second-person («تو»). Avoid exaggeration, hype, or show-off marketing claims.
- **Core Brand Promise:** Eliminating learning confusion; helping users find the right path, learn step-by-step, and apply AI in work and life.
- **Course Naming Pattern:** `«[کار] با هوش مصنوعی»` (e.g., `گزارش‌نویسی با هوش مصنوعی`).
- **Short Video Pattern:** `«یک کار، یک دقیقه»` with outcome-explicit titles (e.g., `خلاصه کردن PDF در ۳۰ ثانیه`).

## Official Color Palette & Companion
- **Brand Palette:** Deep Navy `#141A3A`, Light Paper `#F7F5F0`, Toonel Yellow `#FFC53D` (primary CTA), Path Blue `#5B7CFF` — use alongside existing semantic design tokens in `styles/`.
- **AI Companion «نِل» (Nel):** Small time-machine character with warm yellow light; non-judgmental, advisory-only guide. Suggests learning items tailored to the user's goal/time and **never** forces a path or locks navigation.

## Non-Negotiable UX & Access Rules
- **Access Models:** Keep access simplified to two transparent models everywhere: جامع subscription (`اشتراک جامع`) and single-course purchase (`خرید تک‌دوره`).
- **Non-Blocking Prerequisites:** Course/pathway prerequisites are advisory only; missing a prerequisite must **never** block purchasing or watching a course.
- **Short Videos Rating:** Display tool tag and like counter only — **no star ratings** on short videos.
- **Guest Access:** Allow playing 2–3 curated short videos before showing a transparent subscription gate.
- **Community & Points:** Distinguish instructor replies with a dedicated `«مدرس»` badge; tie helpful upvotes/participation points directly to subscription renewal discounts (`تخفیف تمدید`).
- **Instructor Privacy & Versioning:** Never expose private details or internal revenue levels on `Instructor Public Profile`. Keep the previous published course/lesson version live while an update is under review.
- **Checkout Ambiguity Guard:** For uncertain bank/payment states, display `«در حال بررسی پرداخت»` with `[بررسی دوباره]` and `[پشتیبانی]` actions to prevent duplicate payments.

## Full Page & Roadmap Spec
- When designing, building, or reviewing specific pages, copy, filters, or MoSCoW phases (`P0`/`P1`/`P2`), read and follow the `toonel-product-spec` skill (`.agents/skills/toonel-product-spec/SKILL.md`).
