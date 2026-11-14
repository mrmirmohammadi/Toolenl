import * as React from "react";

export type BadgeAppearance = "content" | "shape";
export type BadgeVariant = "solid" | "subtle";
export type BadgeColor = "default" | "blue" | "red" | "neutral";
export type BadgeSize = "default" | "sm";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Number or text shown inside `appearance="content"`. */
  value?: React.ReactNode;
  children?: React.ReactNode;
  /** `content` shows text/counter badge; `shape` renders a compact 8px status dot. */
  appearance?: BadgeAppearance;
  /** `solid` uses high-contrast fill; `subtle` uses bordered tinted neutral fill. */
  variant?: BadgeVariant;
  /** Semantic color option. */
  color?: BadgeColor;
  /** Size scale for content badges (`default` 24px height, `sm` 16px circle/pill). */
  size?: BadgeSize;
}

const SOLID_COLOR_CLASSES: Record<BadgeColor, string> = {
  default: "bg-[var(--surface-sf-accent-info)] text-[var(--foreground-fg-white)]",
  blue: "bg-[var(--surface-sf-accent-info)] text-[var(--foreground-fg-white)]",
  red: "bg-[var(--surface-sf-error)] text-[var(--foreground-fg-white)]",
  neutral: "bg-[var(--surface-sf-primary-neutral)] text-[var(--foreground-fg-white)]",
};

const DOT_SOLID_CLASSES: Record<BadgeColor, string> = {
  default: "bg-[var(--surface-sf-accent-info)]",
  blue: "bg-[var(--surface-sf-accent-info)]",
  red: "bg-[var(--surface-sf-error)]",
  neutral: "bg-[var(--surface-sf-primary-neutral)]",
};

export function Badge({
  value,
  children,
  appearance = "content",
  variant = "solid",
  color = "blue",
  size = "default",
  className = "",
  ...props
}: BadgeProps) {
  if (appearance === "shape") {
    const dotClasses =
      variant === "subtle"
        ? "bg-[var(--surface-sf-secondary)] border border-[var(--stroke-stroke-quaternary)]"
        : DOT_SOLID_CLASSES[color];

    return (
      <span
        className={`inline-block size-2 shrink-0 rounded-[var(--radius-full)] ${dotClasses} ${className}`.trim()}
        {...props}
      />
    );
  }

  const displayValue = children ?? value ?? "1";
  const isSmall = size === "sm";

  const surfaceClasses =
    variant === "subtle" && !isSmall
      ? "border border-[var(--components-chips-stroke-subtle-neutral-chips-strokesubtle-neutral-stroke)] bg-[var(--components-chips-stroke-subtle-neutral-chips-strokesubtle-neutral-sf)] text-[var(--components-chips-stroke-subtle-neutral-chips-strokesubtle-neutral-fg)]"
      : SOLID_COLOR_CLASSES[color];

  const dimensionClasses = isSmall
    ? "min-w-4 h-4 px-[var(--space-5xs)] rounded-[var(--radius-2xs)] text-[10px] leading-[14px] font-medium"
    : "min-w-[25px] h-6 px-[var(--space-3xs)] rounded-[var(--radius-xs)] text-body-sm";

  return (
    <span
      className={[
        "inline-flex items-center justify-center shrink-0 whitespace-nowrap select-none",
        dimensionClasses,
        surfaceClasses,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {displayValue}
    </span>
  );
}
