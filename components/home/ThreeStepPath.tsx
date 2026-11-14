import * as React from "react";
import { Badge } from "@/components/ui";
import { TUNNEL_STEPS } from "@/lib/data/home";

const OUTER_FRAME_STYLES = [
  "bg-[#FFC53D] text-[#141A3A]",
  "bg-[#141A3A] text-white",
  "bg-[#5B7CFF] text-white",
] as const;

export function ThreeStepPath() {
  return (
    <section
      aria-labelledby="three-step-heading"
      className="border-y border-[var(--stroke-stroke-quinary)] bg-[var(--surface-sf-secondary)] py-[var(--space-2xl)]"
    >
      <div className="mx-auto max-w-6xl space-y-[var(--space-lg)] px-[var(--space-sm)] md:px-[var(--space-md)]">
        <div className="flex flex-col gap-[var(--space-3xs)] md:flex-row md:items-end md:justify-between">
          <div className="space-y-1">
            <span className="text-body-xs font-semibold text-[var(--content-text-accent-brand)]">
              فرآیند یادگیری بدون سردرگمی
            </span>
            <h2
              id="three-step-heading"
              className="text-headline-lg md:text-display-sm font-extrabold text-[var(--content-text-primary)]"
            >
              مسیر سه‌قدمی تونل
            </h2>
          </div>
          <p className="max-w-[448px] text-body-sm text-[var(--content-text-secondary)]">
            از نقطه شروع تا اجرای واقعی، هر مرحله دقیقاً مشخص است تا وقتت بین آموزش‌های پراکنده تلف نشود.
          </p>
        </div>

        {/* Aurevo Signature Framed Container Cards wrapping nested crisp inner white/paper cards */}
        <ol className="grid grid-cols-1 gap-[var(--space-sm)] md:grid-cols-3">
          {TUNNEL_STEPS.map((item, index) => (
            <li
              key={item.step}
              className={`flex flex-col rounded-[28px] p-[var(--space-sm)] ${OUTER_FRAME_STYLES[index % OUTER_FRAME_STYLES.length]}`}
            >
              <div className="mb-[var(--space-xs)] flex items-center justify-between px-1">
                <span className="text-title-md font-extrabold tabular-nums">
                  قدم {item.step}
                </span>
                <span className="rounded-[var(--radius-full)] bg-white/90 px-2.5 py-0.5 text-[11px] font-semibold text-[#141A3A]">
                  {item.badgeText}
                </span>
              </div>

              <div className="flex flex-1 flex-col justify-between gap-[var(--space-2xs)] rounded-[20px] bg-[var(--surface-sf-primary)] p-[var(--space-sm)] text-[var(--content-text-primary)] shadow-2xs">
                <h3 className="text-headline-sm font-bold text-[var(--content-text-primary)]">
                  {item.title}
                </h3>
                <p className="text-body-sm leading-relaxed text-[var(--content-text-secondary)]">
                  {item.description}
                </p>
                <div className="pt-1">
                  <Badge variant="subtle" color="neutral" value={`گام ${item.step} از ۳`} />
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
