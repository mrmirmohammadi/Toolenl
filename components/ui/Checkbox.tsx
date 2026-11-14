"use client";

import * as React from "react";
import { CheckIcon, MinusIcon } from "./icons";

export type CheckboxSize = "sm" | "md" | "lg";

export interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size" | "type"> {
  /** Box scale: sm (16px box / 20px halo), md (18px / 24px), lg (20px / 24px). */
  size?: CheckboxSize;
  /** Visual indeterminate state (renders horizontal minus line). */
  indeterminate?: boolean;
  /** Optional inline label next to the checkbox. */
  label?: React.ReactNode;
  /** Optional secondary helper text under the label. */
  description?: React.ReactNode;
  /** Optional click callback simplifying controlled state. */
  onCheckedChange?: (checked: boolean) => void;
}

const SIZE_MAP: Record<
  CheckboxSize,
  {
    halo: string;
    box: string;
    iconSize: number;
  }
> = {
  sm: {
    halo: "p-[var(--space-6xs)] rounded-[var(--radius-2xs)]",
    box: "size-[16px] rounded-[var(--radius-3xs)]",
    iconSize: 10,
  },
  md: {
    halo: "p-[3px] rounded-[var(--radius-xs)]",
    box: "size-[18px] rounded-[var(--radius-2xs)]",
    iconSize: 12,
  },
  lg: {
    halo: "p-[var(--space-6xs)] rounded-[var(--radius-xs)]",
    box: "size-[20px] rounded-[var(--radius-2xs)]",
    iconSize: 13,
  },
};

export function Checkbox({
  size = "md",
  checked,
  defaultChecked,
  indeterminate = false,
  disabled = false,
  label,
  description,
  onChange,
  onCheckedChange,
  className = "",
  id,
  ...props
}: CheckboxProps) {
  const generatedId = React.useId();
  const inputId = id ?? generatedId;
  const inputRef = React.useRef<HTMLInputElement>(null);

  const isControlled = checked !== undefined;
  const [uncontrolledChecked, setUncontrolledChecked] = React.useState(
    Boolean(defaultChecked)
  );
  const currentChecked = isControlled ? Boolean(checked) : uncontrolledChecked;

  React.useEffect(() => {
    if (inputRef.current) {
      inputRef.current.indeterminate = indeterminate;
    }
  }, [indeterminate]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isControlled) {
      setUncontrolledChecked(e.target.checked);
    }
    onChange?.(e);
    onCheckedChange?.(e.target.checked);
  };

  const isFilled = currentChecked || indeterminate;
  const sizeSpec = SIZE_MAP[size];

  const boxStateClasses = disabled
    ? isFilled
      ? "bg-[var(--surface-sf_disabled)] text-[var(--foreground-fg_disabled)] border border-[var(--stroke-stroke_disabled)]"
      : "bg-[var(--surface-sf_disabled)] border border-[var(--stroke-stroke_disabled)]"
    : isFilled
      ? "bg-[var(--surface-sf-accent-info)] text-[var(--foreground-fg-white)] border border-transparent group-hover/checkbox:bg-[var(--surface-sf-accent-info_hover)]"
      : "bg-[var(--surface-sf-primary)] border border-[var(--stroke-stroke-quaternary)] group-active/checkbox:border-[var(--stroke-stroke-accent-blue-subtle)]";

  return (
    <label
      htmlFor={inputId}
      className={[
        "group/checkbox inline-flex items-start gap-[var(--space-3xs)] select-none",
        disabled ? "cursor-not-allowed" : "cursor-pointer",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <span
        className={[
          "relative inline-flex shrink-0 items-center justify-center transition-colors duration-150",
          sizeSpec.halo,
          disabled
            ? ""
            : "group-hover/checkbox:bg-[var(--surface-sf-accent-blue-subtle)] group-active/checkbox:bg-[var(--surface-sf-accent-blue-subtle_hover)]",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        <input
          ref={inputRef}
          id={inputId}
          type="checkbox"
          checked={isControlled ? currentChecked : undefined}
          defaultChecked={!isControlled ? defaultChecked : undefined}
          disabled={disabled}
          onChange={handleChange}
          aria-checked={indeterminate ? "mixed" : currentChecked}
          className="peer sr-only"
          {...props}
        />
        <span
          aria-hidden="true"
          className={[
            "inline-flex items-center justify-center transition-all duration-150",
            "peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-[var(--stroke-stroke-brand-blue)]",
            sizeSpec.box,
            boxStateClasses,
          ].join(" ")}
        >
          {indeterminate ? (
            <MinusIcon size={sizeSpec.iconSize} />
          ) : currentChecked ? (
            <CheckIcon size={sizeSpec.iconSize} />
          ) : null}
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
