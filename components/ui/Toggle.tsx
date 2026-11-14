"use client";

import * as React from "react";

export type ToggleSize = "sm" | "md" | "lg";

export interface ToggleProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onChange"> {
  /** Switch scale: sm (28x16 track), md (32x18 track), lg (36x20 track). */
  size?: ToggleSize;
  /** Controlled active state. */
  checked?: boolean;
  /** Initial state for uncontrolled usage. */
  defaultChecked?: boolean;
  /** Called whenever the toggle state flips. */
  onCheckedChange?: (checked: boolean) => void;
  /** Optional native form field name (renders a hidden checkbox input). */
  name?: string;
  /** Optional inline label next to the switch. */
  label?: React.ReactNode;
  /** Optional secondary helper text under the label. */
  description?: React.ReactNode;
}

const SIZE_MAP: Record<
  ToggleSize,
  {
    track: string;
    thumb: string;
    translateOn: string;
  }
> = {
  sm: {
    track: "w-[28px] h-[16px]",
    thumb: "size-[12px]",
    translateOn: "ltr:translate-x-[12px] rtl:-translate-x-[12px]",
  },
  md: {
    track: "w-[32px] h-[18px]",
    thumb: "size-[14px]",
    translateOn: "ltr:translate-x-[14px] rtl:-translate-x-[14px]",
  },
  lg: {
    track: "w-[36px] h-[20px]",
    thumb: "size-[16px]",
    translateOn: "ltr:translate-x-[16px] rtl:-translate-x-[16px]",
  },
};

export function Toggle({
  size = "md",
  checked,
  defaultChecked = false,
  onCheckedChange,
  disabled = false,
  name,
  label,
  description,
  className = "",
  id,
  onClick,
  ...props
}: ToggleProps) {
  const generatedId = React.useId();
  const switchId = id ?? generatedId;

  const isControlled = checked !== undefined;
  const [uncontrolledChecked, setUncontrolledChecked] =
    React.useState(defaultChecked);
  const currentChecked = isControlled ? checked : uncontrolledChecked;

  const sizeSpec = SIZE_MAP[size];

  const handleToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled) return;
    const next = !currentChecked;
    if (!isControlled) {
      setUncontrolledChecked(next);
    }
    onClick?.(e);
    onCheckedChange?.(next);
  };

  const trackClasses = disabled
    ? "bg-[var(--surface-sf_disabled)]"
    : currentChecked
      ? "bg-[var(--surface-sf-accent-info)] group-hover/toggle:bg-[var(--surface-sf-accent-info_hover)]"
      : "bg-[var(--surface-sf-tertiary)] group-hover/toggle:bg-[var(--surface-sf-tertiary_hover)]";

  const thumbClasses = disabled
    ? "bg-[var(--foreground-fg_disabled)]"
    : "bg-[var(--foreground-fg-white)] [box-shadow:0px_1px_2px_0px_var(--effects-shadows-2xs)]";

  const switchButton = (
    <button
      id={switchId}
      type="button"
      role="switch"
      aria-checked={currentChecked}
      disabled={disabled}
      onClick={handleToggle}
      className={[
        "group/toggle inline-flex shrink-0 items-center justify-center rounded-[var(--radius-full)] p-[2px] transition-colors duration-150",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--stroke-stroke-brand-blue)]",
        disabled
          ? "cursor-not-allowed"
          : "cursor-pointer hover:bg-[var(--surface-sf-accent-blue-subtle)] active:bg-[var(--surface-sf-accent-blue-subtle_hover)]",
        !label && !description ? className : "",
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      <span
        aria-hidden="true"
        className={`relative inline-flex items-center rounded-[var(--radius-full)] p-[2px] transition-colors duration-200 ${sizeSpec.track} ${trackClasses}`}
      >
        <span
          className={`inline-block rounded-[var(--radius-full)] transition-transform duration-200 ease-out ${sizeSpec.thumb} ${thumbClasses} ${
            currentChecked ? sizeSpec.translateOn : "translate-x-0"
          }`}
        />
      </span>
    </button>
  );

  return (
    <span className={`inline-flex items-start gap-[var(--space-3xs)] ${label || description ? className : ""}`.trim()}>
      {name && (
        <input
          type="checkbox"
          name={name}
          checked={currentChecked}
          disabled={disabled}
          readOnly
          className="sr-only"
          tabIndex={-1}
        />
      )}
      {switchButton}
      {(label || description) && (
        <label
          htmlFor={switchId}
          className={`flex flex-col gap-0.5 select-none text-start ${
            disabled ? "cursor-not-allowed" : "cursor-pointer"
          }`}
        >
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
        </label>
      )}
    </span>
  );
}
