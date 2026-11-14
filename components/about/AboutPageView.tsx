import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Avatar, Badge, Button } from "@/components/ui";
import { HomeHeader } from "@/components/home/HomeHeader";
import { HomeFooter } from "@/components/home/HomeFooter";
import {
  FOUNDERS_STORY,
  NEL_IDENTITY_SPEC,
  SIX_BRAND_VALUES,
} from "@/lib/data/about";

const FRAME_BG = {
  yellow: "bg-[#FFC53D] text-[#141A3A]",
  navy: "bg-[#141A3A] text-white",
  blue: "bg-[#5B7CFF] text-white",
} as const;

export function AboutPageView() {
  return (
    <div id="top" className="min-h-screen bg-[var(--surface-sf-primary)]">
      <HomeHeader />

      <main className="pb-[var(--space-2xl)]">
        {/* Editorial Brand Promise Hero */}
        <section className="border-b border-[var(--stroke-stroke-quinary)] bg-[var(--surface-sf-primary)] pt-[var(--space-lg)] pb-[var(--space-xl)]">
          <div className="mx-auto max-w-[1152px] space-y-[var(--space-md)] px-[var(--space-sm)] md:px-[var(--space-md)]">
            <div className="inline-flex items-center gap-[var(--space-3xs)] rounded-[var(--radius-full)] border border-[var(--stroke-stroke-quinary)] bg-[var(--surface-sf-secondary)] px-[var(--space-xs)] py-[var(--space-5xs)] text-body-xs font-medium text-[var(--content-text-secondary)]">
              <span
                className="size-2.5 rounded-full bg-[#FFC53D]"
                aria-hidden="true"
              />
              <span>درباره ای‌آی تونل · مانیفست یادگیری کاربردی</span>
            </div>

            <h1 className="max-w-[820px] text-headline-lg md:text-display-lg font-extrabold leading-[1.18] text-[var(--content-text-primary)]">
              یادگیری هوش مصنوعی نباید گیج‌کننده یا پر از هیاهو باشه.
            </h1>

            <p className="max-w-[700px] text-body-md md:text-body-lg leading-relaxed text-[var(--content-text-secondary)]">
              قول ای‌آی تونل ساده است: سردرگمی آموزشی را کنار بگذاریم، کمک کنیم دقیقاً متناسب با کارت مسیر درست را پیدا کنی، قدم‌به‌قدم یاد بگیری و همان روز در کار و زندگی‌ات به‌کارش بگیری.
            </p>
          </div>
        </section>

        {/* P1 Founders Story: مهرنوش و وحیده */}
        <section
          aria-labelledby="founders-heading"
          className="border-b border-[var(--stroke-stroke-quinary)] bg-[var(--surface-sf-secondary)] py-[var(--space-2xl)]"
        >
          <div className="mx-auto max-w-[1152px] space-y-[var(--space-lg)] px-[var(--space-sm)] md:px-[var(--space-md)]">
            <div className="grid grid-cols-1 gap-[var(--space-lg)] lg:grid-cols-12">
              <div className="space-y-[var(--space-sm)] lg:col-span-5">
                <span className="text-body-xs font-bold text-[#5B7CFF]">
                  {FOUNDERS_STORY.eyebrow}
                </span>
                <h2
                  id="founders-heading"
                  className="text-headline-md md:text-headline-lg font-extrabold leading-snug text-[var(--content-text-primary)]"
                >
                  {FOUNDERS_STORY.headline}
                </h2>
                <div className="space-y-[var(--space-xs)] text-body-sm leading-relaxed text-[var(--content-text-secondary)]">
                  {FOUNDERS_STORY.paragraphs.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 gap-[var(--space-sm)] sm:grid-cols-2 lg:col-span-7">
                {FOUNDERS_STORY.founders.map((founder, idx) => (
                  <article
                    key={founder.name}
                    className={`flex flex-col rounded-[28px] p-[var(--space-xs)] ${
                      idx === 0 ? "bg-[#141A3A]" : "bg-[#5B7CFF]"
                    }`}
                  >
                    <div className="mb-[var(--space-3xs)] flex items-center justify-between px-2 text-white">
                      <span className="text-body-xs font-extrabold">
                        هم‌بنیان‌گذار تونل
                      </span>
                      <span className="text-[11px] opacity-85">
                        ای‌آی تونل
                      </span>
                    </div>

                    <div className="flex flex-1 flex-col justify-between rounded-[22px] bg-[var(--surface-sf-primary)] p-[var(--space-sm)] space-y-[var(--space-sm)]">
                      <div className="space-y-[var(--space-xs)]">
                        <div className="flex items-center gap-[var(--space-xs)]">
                          <Avatar
                            size="md"
                            mode="text"
                            text={founder.initials}
                          />
                          <div>
                            <h3 className="text-title-sm font-extrabold text-[var(--content-text-primary)]">
                              {founder.name}
                            </h3>
                            <div className="text-[11px] text-[var(--content-text-tertiary)]">
                              {founder.role}
                            </div>
                          </div>
                        </div>

                        <blockquote className="rounded-[16px] border-s-4 border-[#FFC53D] bg-[var(--surface-sf-secondary)] p-[var(--space-xs)] text-body-xs font-medium leading-relaxed text-[var(--content-text-primary)]">
                          «{founder.quote}»
                        </blockquote>

                        <p className="text-body-xs leading-relaxed text-[var(--content-text-secondary)]">
                          {founder.storyNote}
                        </p>
                      </div>

                      <Link
                        href={`/instructors/${founder.profileSlug}`}
                        className="inline-flex text-body-xs font-bold text-[#5B7CFF] hover:underline"
                      >
                        مشاهده صفحه عمومی و دوره‌ها ←
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* P0 Manifesto & Six Brand Values */}
        <section
          aria-labelledby="manifesto-heading"
          className="bg-[var(--surface-sf-primary)] py-[var(--space-2xl)]"
        >
          <div className="mx-auto max-w-[1152px] space-y-[var(--space-lg)] px-[var(--space-sm)] md:px-[var(--space-md)]">
            <div className="flex flex-col gap-[var(--space-2xs)] md:flex-row md:items-end md:justify-between">
              <div className="space-y-1">
                <Badge
                  variant="solid"
                  color="blue"
                  value="مانیفست ای‌آی تونل"
                />
                <h2
                  id="manifesto-heading"
                  className="text-headline-md md:text-display-sm font-extrabold text-[var(--content-text-primary)]"
                >
                  شش اصل عملی که تصمیم‌های ما رو می‌سازن
                </h2>
              </div>
              <p className="max-w-[440px] text-body-xs leading-relaxed text-[var(--content-text-secondary)]">
                این ۶ ارزش فقط شعار صفحه درباره ما نیستن؛ هر کدام مستقیماً در قوانین طراحی محصول و قیمت‌گذاری اجرا شده‌ان.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-[var(--space-sm)] md:grid-cols-2 lg:grid-cols-3">
              {SIX_BRAND_VALUES.map((val) => (
                <article
                  key={val.number}
                  className={`flex flex-col rounded-[28px] p-[var(--space-xs)] ${FRAME_BG[val.frame]}`}
                >
                  <div className="mb-[var(--space-3xs)] flex items-center justify-between px-2">
                    <span className="text-body-xs font-extrabold">
                      اصل {val.number}
                    </span>
                    <span className="text-[11px] font-bold opacity-90">
                      {val.title}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col justify-between rounded-[22px] bg-[var(--surface-sf-primary)] p-[var(--space-sm)] text-[var(--content-text-primary)] space-y-[var(--space-sm)]">
                    <div className="space-y-[var(--space-3xs)]">
                      <h3 className="text-headline-sm font-extrabold text-[var(--content-text-primary)]">
                        {val.title}
                      </h3>
                      <p className="text-body-sm leading-relaxed text-[var(--content-text-secondary)]">
                        {val.summary}
                      </p>
                    </div>

                    <div className="rounded-[14px] border border-[var(--stroke-stroke-quinary)] bg-[var(--surface-sf-secondary)] p-[var(--space-xs)] text-body-xs font-medium text-[var(--content-text-primary)]">
                      <span className="font-bold text-[#5B7CFF]">
                        نمونه در محصول:{" "}
                      </span>
                      {val.exampleInProduct}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* P2 Character "Nel" Introduction */}
        <section
          aria-labelledby="nel-story-heading"
          className="border-t border-[var(--stroke-stroke-quinary)] bg-[var(--surface-sf-secondary)] py-[var(--space-2xl)]"
        >
          <div className="mx-auto max-w-[1152px] px-[var(--space-sm)] md:px-[var(--space-md)]">
            <div className="grid grid-cols-1 items-center gap-[var(--space-lg)] rounded-[32px] bg-[#141A3A] p-[var(--space-md)] text-white md:p-[var(--space-lg)] lg:grid-cols-12">
              <div className="space-y-[var(--space-sm)] lg:col-span-7">
                <span className="inline-flex items-center gap-1.5 rounded-[var(--radius-full)] bg-[#FFC53D] px-3 py-1 text-[11px] font-extrabold text-[#141A3A]">
                  {NEL_IDENTITY_SPEC.badge}
                </span>

                <h2
                  id="nel-story-heading"
                  className="text-headline-md md:text-headline-lg font-extrabold leading-snug text-white"
                >
                  {NEL_IDENTITY_SPEC.title}
                </h2>

                <p className="text-body-sm md:text-body-md leading-relaxed text-white/85">
                  {NEL_IDENTITY_SPEC.description}
                </p>

                <ul className="space-y-[var(--space-2xs)] pt-1">
                  {NEL_IDENTITY_SPEC.promises.map((promise) => (
                    <li
                      key={promise}
                      className="flex items-start gap-[var(--space-2xs)] text-body-xs leading-relaxed text-white/90"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-[#FFC53D] text-[11px] font-black text-[#141A3A]"
                      >
                        ✓
                      </span>
                      <span>{promise}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-[var(--space-3xs)] pt-[var(--space-xs)]">
                  <Link href="/my-pathway">
                    <Button
                      appearance="solid"
                      status="warning"
                      size="md"
                      className="!text-[#141A3A] font-bold"
                      label="چیدن مسیر با کمک نِل ←"
                    />
                  </Link>
                  <Link href="/courses">
                    <Button
                      appearance="stroke"
                      status="neutral"
                      size="md"
                      className="!border-white/30 !text-white hover:!bg-white/10"
                      label="مرور کاتالوگ دوره‌ها"
                    />
                  </Link>
                </div>
              </div>

              {/* 3D Nel Portrait Frame */}
              <div className="lg:col-span-5">
                <div className="relative overflow-hidden rounded-[28px] border border-white/15 bg-[#F7F5F0] p-[var(--space-xs)] shadow-xl">
                  <Image
                    src="/images/nel-mascot.jpg"
                    alt="نِل — ماشین زمان کوچک با نور زرد، هم‌مسیر یادگیری در ای‌آی تونل"
                    width={560}
                    height={560}
                    className="aspect-square w-full rounded-[22px] object-cover"
                  />
                  <div className="mt-[var(--space-3xs)] flex items-center justify-between px-2 text-[#141A3A]">
                    <span className="text-body-xs font-extrabold">
                      نِل · راهنمای غیرقضاوتی
                    </span>
                    <span className="rounded-[var(--radius-full)] bg-[#FFC53D] px-2.5 py-0.5 text-[10px] font-bold">
                      همیشه بدون اجبار
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <HomeFooter />
    </div>
  );
}
