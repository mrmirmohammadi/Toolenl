"use client";

import * as React from "react";

export type RadioSize = "sm" | "md" | "lg";

export interface RadioProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size" | "type"> {
  /** Circle scale: sm (16px / 20px halo), md (18px / 22px halo), lg (20px / 24px halo). */
  size?: RadioSize;
  /** Optional inline label next to the radio circle. */
  label?: React.ReactNode;
  /** Optional secondary helper text under the label. */
  description?: React.ReactNode;
  /** Controlled selection helper. */
  onCheckedChange?: (checked: boolean) => void;
}

const SIZE_MAP: Record<
  RadioSize,
  {
    halo: string;
    circle: string;
    dot: string;
  }
> = {
  sm: {
    halo: "p-[2px]",
    circle: "size-[16px]",
    dot: "size-[6px]",
  },
  md: {
    halo: "p-[2.5px]",
    circle: "size-[18px]",
    dot: "size-[7px]",
  },
  lg: {
    halo: "p-[2px]",
    circle: "size-[20px]",
    dot: "size-[8px]",
  },
};

export function Radio({
  size = "md",
  checked,
  defaultChecked,
  disabled = false,
  label,
  description,
  onChange,
  onCheckedChange,
  className = "",
  id,
  ...props
}: RadioProps) {
  const generatedId = React.useId();
  const inputId = id ?? generatedId;

  const isControlled = checked !== undefined;
  const [uncontrolledChecked, setUncontrolledChecked] = React.useState(
    Boolean(defaultChecked)
  );
  const currentChecked = isControlled ? Boolean(checked) : uncontrolledChecked;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isControlled) {
      setUncontrolledChecked(e.target.checked);
    }
    onChange?.(e);
    onCheckedChange?.(e.target.checked);
  };

  const sizeSpec = SIZE_MAP[size];

  const circleClasses = disabled
    ? currentChecked
      ? "bg-[var(--stroke-stroke_disabled)] border-transparent"
      : "bg-[var(--surface-sf_disabled)] border border-[var(--stroke-stroke_disabled)]"
    : currentChecked
      ? "bg-[var(--surface-sf-accent-info)] border-transparent group-hover/radio:bg-[var(--surface-sf-accent-info_hover)]"
      : "bg-[var(--surface-sf-primary)] border-[length:var(--stroke-md)] border-[var(--stroke-stroke-secondary)] group-active/radio:border-[var(--stroke-stroke-brand-blue)]";

  return (
    <label
      htmlFor={inputId}
      className={[
        "group/radio inline-flex items-start gap-[var(--space-3xs)] select-none",
        disabled ? "cursor-not-allowed" : "cursor-pointer",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <span
        className={[
          "relative inline-flex shrink-0 items-center justify-center rounded-[var(--radius-full)] transition-colors duration-150",
          sizeSpec.halo,
          disabled
            ? ""
            : "group-hover/radio:bg-[var(--surface-sf-accent-blue-subtle)] group-active/radio:bg-[var(--surface-sf-accent-blue-subtle_hover)]",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        <input
          id={inputId}
          type="radio"
          checked={isControlled ? currentChecked : undefined}
          defaultChecked={!isControlled ? defaultChecked : undefined}
          disabled={disabled}
          onChange={handleChange}
          className="peer sr-only"
          {...props}
        />
        <span
          aria-hidden="true"
          className={[
            "inline-flex items-center justify-center rounded-[var(--radius-full)] transition-all duration-150",
            "peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-[var(--stroke-stroke-brand-blue)]",
            sizeSpec.circle,
            circleClasses,
          ].join(" ")}
        >
          {currentChecked && (
            <span
              className={`rounded-[var(--radius-full)] ${
                disabled
                  ? "bg-[var(--surface-sf-primary)]"
                  : "bg-[var(--foreground-fg-white)]"
              } ${sizeSpec.dot}`}
            />
          )}
        </span>
      </span>

      {(label || description) && (
        <span className="flex flex-col gap-0.5 pt-0.5 text-start">
          {label && (
            <span
              className={`text-body-sm ${
                disabled
                  ? "text-[var(--content-text_disabled)]"
                  : "text-[var(--content-text-primary)]"
              }`}
            >
              {label}
            </span>
          )}
          {description && (
            <span
              className={`text-body-xs ${
                disabled
                  ? "text-[var(--content-text_disabled)]"
                  : "text-[var(--content-text-tertiary)]"
              }`}
            >
              {description}
            </span>
          )}
        </span>
      )}
    </label>
  );
}
