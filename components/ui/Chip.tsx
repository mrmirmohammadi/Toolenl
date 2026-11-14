import * as React from "react";
import { AnglesUpDownIcon, AngleLeftIcon, AngleRightIcon, XMarkIcon } from "./icons";

export type ChipVariant =
  | "subtle"
  | "stroke-subtle"
  | "stroke"
  | "ghost"
  | "solid"
  | "blur";

export type ChipStatus =
  | "primary"
  | "success"
  | "warning"
  | "error"
  | "violet"
  | "blue"
  | "neutral"
  | "white";

export type ChipSize = "sm" | "md" | "lg";
export type ChipAppearance = "regular" | "icon";

export interface ChipProps
  extends Omit<React.HTMLAttributes<HTMLElement>, "children"> {
  /** Text or custom content displayed inside regular chips. */
  label?: React.ReactNode;
  /** Alternative shorthand for label text. */
  children?: React.ReactNode;
  /** Figma Style property: Subtle, Strok Subtle, Strok, Ghost, Solid, or Blur. */
  variant?: ChipVariant;
  /** Semantic color palette. Blur uses its dedicated frosted neutral surface. */
  status?: ChipStatus;
  /** Regular displays label + optional icons; icon displays a circular icon-only chip. */
  appearance?: ChipAppearance;
  /** Height & typography scale: sm (24px), md (32px), lg (36px). */
  size?: ChipSize;
  /** Leading icon element (placed on the inline-start edge). */
  leading?: React.ReactNode;
  /** Trailing icon element (placed on the inline-end edge). */
  trailing?: React.ReactNode;
  /** Icon rendered inside `appearance="icon"` chips. */
  icon?: React.ReactNode;
  /** Show default chevron if leading is not provided. */
  showLeading?: boolean;
  /** Show default chevron or remove icon if trailing is not provided. */
  showTrailing?: boolean;
  /** Optional remove handler rendered as a trailing dismiss action. */
  onRemove?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  /** Accessible label for the remove button. */
  removeAriaLabel?: string;
  /** Disabled appearance & interaction state. */
  disabled?: boolean;
}

const SIZE_STYLES: Record<
  ChipSize,
  {
    regularContainer: string;
    iconContainer: string;
    labelPadding: string;
    textClass: string;
    iconSize: number;
  }
> = {
  sm: {
    regularContainer: "h-[24px] px-[var(--space-3xs)]",
    iconContainer: "size-[24px] px-[var(--space-4xs)]",
    labelPadding: "px-[var(--space-5xs)]",
    textClass: "text-label-xs",
    iconSize: 14,
  },
  md: {
    regularContainer: "h-[32px] px-[var(--space-2xs)]",
    iconContainer: "size-[32px] px-[var(--space-4xs)]",
    labelPadding: "px-[var(--space-5xs)]",
    textClass: "text-label-sm",
    iconSize: 16,
  },
  lg: {
    regularContainer: "h-[36px] px-[var(--space-2xs)]",
    iconContainer: "size-[36px] px-[var(--space-4xs)]",
    labelPadding: "px-[var(--space-5xs)]",
    textClass: "text-label-md",
    iconSize: 20,
  },
};

const SUBTLE_STATUS_CLASSES: Record<ChipStatus, string> = {
  primary:
    "bg-[var(--components-chips-subtle-primary-chips-subtle-primary-sf)] text-[var(--components-chips-subtle-primary-chips-subtle-primary-fg)] hover:bg-[var(--components-chips-subtle-primary-chips-subtle-primary-sf_hover)]",
  success:
    "bg-[var(--components-chips-subtle-success-chips-subtle-success-sf)] text-[var(--components-chips-subtle-success-chips-subtle-success-fg)] hover:bg-[var(--components-chips-subtle-success-chips-subtle-success-sf_hover)]",
  warning:
    "bg-[var(--components-chips-subtle-warning-chips-subtle-warning-sf)] text-[var(--components-chips-subtle-warning-chips-subtle-warning-fg)] hover:bg-[var(--components-chips-subtle-warning-chips-subtle-warning-sf_hover)]",
  error:
    "bg-[var(--components-chips-subtle-error-chips-subtle-error-sf)] text-[var(--components-chips-subtle-error-chips-subtle-error-fg)] hover:bg-[var(--components-chips-subtle-error-chips-subtle-error-sf_hover)]",
  violet:
    "bg-[var(--components-chips-subtle-violet-chips-subtle-violet-sf)] text-[var(--components-chips-subtle-violet-chips-subtle-violet-fg)] hover:bg-[var(--components-chips-subtle-violet-chips-subtle-violet-sf_hover)]",
  blue:
    "bg-[var(--components-chips-subtle-blue-chips-subtle-blue-sf)] text-[var(--components-chips-subtle-blue-chips-subtle-blue-fg)] hover:bg-[var(--components-chips-subtle-blue-chips-subtle-blue-sf_hover)]",
  neutral:
    "bg-[var(--components-chips-subtle-neutral-chips-subtle-neutral-sf)] text-[var(--components-chips-subtle-neutral-chips-subtle-neutral-fg)] hover:bg-[var(--components-chips-subtle-neutral-chips-subtle-neutral-sf_hover)]",
  white:
    "bg-[var(--components-chips-subtle-white-chips-subtle-white-sf)] text-[var(--components-chips-subtle-white-chips-subtle-white-fg)] hover:bg-[var(--components-chips-subtle-white-chips-subtle-white-sf_hover)]",
};

const STROKE_SUBTLE_STATUS_CLASSES: Record<ChipStatus, string> = {
  primary:
    "border border-[var(--components-chips-stroke-subtle-primary-chips-strokesubtle-primary-stroke)] bg-[var(--components-chips-stroke-subtle-primary-chips-strokesubtle-primary-sf)] text-[var(--components-chips-stroke-subtle-primary-chips-strokesubtle-primary-fg)] hover:bg-[var(--components-chips-stroke-subtle-primary-chips-strokesubtle-primary-sf_hover)]",
  success:
    "border border-[var(--components-chips-stroke-subtle-success-chips-strokesubtle-success-stroke)] bg-[var(--components-chips-stroke-subtle-success-chips-strokesubtle-success-sf)] text-[var(--components-chips-stroke-subtle-success-chips-strokesubtle-success-fg)] hover:bg-[var(--components-chips-stroke-subtle-success-chips-strokesubtle-success-sf_hover)]",
  warning:
    "border border-[var(--components-chips-stroke-subtle-warning-chips-strokesubtle-warning-stroke)] bg-[var(--components-chips-stroke-subtle-warning-chips-strokesubtle-warning-sf)] text-[var(--components-chips-stroke-subtle-warning-chips-strokesubtle-warning-fg)] hover:bg-[var(--components-chips-stroke-subtle-warning-chips-strokesubtle-warning-sf_hover)]",
  error:
    "border border-[var(--components-chips-stroke-subtle-error-chips-strokesubtle-error-stroke)] bg-[var(--components-chips-stroke-subtle-error-chips-strokesubtle-error-sf)] text-[var(--components-chips-stroke-subtle-error-chips-strokesubtle-error-fg)] hover:bg-[var(--components-chips-stroke-subtle-error-chips-strokesubtle-error-sf_hover)]",
  violet:
    "border border-[var(--components-chips-stroke-subtle-violet-chips-strokesubtle-violet-stroke)] bg-[var(--components-chips-stroke-subtle-violet-chips-strokesubtle-violet-sf)] text-[var(--components-chips-stroke-subtle-violet-chips-strokesubtle-violet-fg)] hover:bg-[var(--components-chips-stroke-subtle-violet-chips-strokesubtle-violet-sf_hover)]",
  blue:
    "border border-[var(--components-chips-stroke-subtle-blue-chips-strokesubtle-blue-stroke)] bg-[var(--components-chips-stroke-subtle-blue-chips-strokesubtle-blue-sf)] text-[var(--components-chips-stroke-subtle-blue-chips-strokesubtle-blue-fg)] hover:bg-[var(--components-chips-stroke-subtle-blue-chips-strokesubtle-blue-sf_hover)]",
  neutral:
    "border border-[var(--components-chips-stroke-subtle-neutral-chips-strokesubtle-neutral-stroke)] bg-[var(--components-chips-stroke-subtle-neutral-chips-strokesubtle-neutral-sf)] text-[var(--components-chips-stroke-subtle-neutral-chips-strokesubtle-neutral-fg)] hover:bg-[var(--components-chips-stroke-subtle-neutral-chips-strokesubtle-neutral-sf_hover)]",
  white:
    "border border-[var(--components-chips-stroke-subtle-white-chips-strokesubtle-white-stroke)] bg-[var(--components-chips-stroke-subtle-white-chips-strokesubtle-white-sf)] text-[var(--components-chips-stroke-subtle-white-chips-strokesubtle-white-fg)] hover:bg-[var(--components-chips-stroke-subtle-white-chips-strokesubtle-white-sf_hover)]",
};

const STROKE_STATUS_CLASSES: Record<ChipStatus, string> = {
  primary:
    "border border-[var(--components-chips-stroke-primary-chips-stroke-primary-stroke)] bg-[var(--surface-sf-transparent)] text-[var(--components-chips-stroke-primary-chips-stroke-primary-fg)] hover:bg-[var(--surface-sf-secondary)]",
  success:
    "border border-[var(--components-chips-stroke-success-chips-stroke-success-stroke)] bg-[var(--surface-sf-transparent)] text-[var(--components-chips-stroke-success-chips-stroke-success-fg)] hover:bg-[var(--surface-sf-secondary)]",
  warning:
    "border border-[var(--components-chips-stroke-warning-chips-stroke-warning-stroke)] bg-[var(--surface-sf-transparent)] text-[var(--components-chips-stroke-warning-chips-stroke-warning-fg)] hover:bg-[var(--surface-sf-secondary)]",
  error:
    "border border-[var(--components-chips-stroke-error-chips-stroke-error-stroke)] bg-[var(--surface-sf-transparent)] text-[var(--components-chips-stroke-error-chips-stroke-error-fg)] hover:bg-[var(--surface-sf-secondary)]",
  violet:
    "border border-[var(--components-chips-stroke-violet-chips-stroke-violet-stroke)] bg-[var(--surface-sf-transparent)] text-[var(--components-chips-stroke-violet-chips-stroke-violet-fg)] hover:bg-[var(--surface-sf-secondary)]",
  blue:
    "border border-[var(--components-chips-stroke-blue-chips-stroke-blue-stroke)] bg-[var(--surface-sf-transparent)] text-[var(--components-chips-stroke-blue-chips-stroke-blue-fg)] hover:bg-[var(--surface-sf-secondary)]",
  neutral:
    "border border-[var(--components-chips-stroke-neutral-chips-stroke-neutral-stroke)] bg-[var(--surface-sf-transparent)] text-[var(--components-chips-stroke-neutral-chips-stroke-neutral-fg)] hover:bg-[var(--surface-sf-secondary)]",
  white:
    "border border-[var(--components-chips-stroke-white-chips-stroke-white-stroke)] bg-[var(--surface-sf-transparent)] text-[var(--components-chips-stroke-white-chips-stroke-white-fg)] hover:bg-[var(--surface-sf-secondary)]",
};

const GHOST_STATUS_CLASSES: Record<ChipStatus, string> = {
  primary:
    "bg-[var(--surface-sf-transparent)] text-[var(--components-chips-ghost-primary-chips-ghost-primary-fg)] hover:bg-[var(--components-chips-subtle-primary-chips-subtle-primary-sf)]",
  success:
    "bg-[var(--surface-sf-transparent)] text-[var(--components-chips-ghost-success-chips-ghost-success-fg)] hover:bg-[var(--components-chips-subtle-success-chips-subtle-success-sf)]",
  warning:
    "bg-[var(--surface-sf-transparent)] text-[var(--components-chips-ghost-warning-chips-ghost-warning-fg)] hover:bg-[var(--components-chips-subtle-warning-chips-subtle-warning-sf)]",
  error:
    "bg-[var(--surface-sf-transparent)] text-[var(--components-chips-ghost-error-chips-ghost-error-fg)] hover:bg-[var(--components-chips-subtle-error-chips-subtle-error-sf)]",
  violet:
    "bg-[var(--surface-sf-transparent)] text-[var(--components-chips-ghost-violet-chips-ghost-violet-fg)] hover:bg-[var(--components-chips-subtle-violet-chips-subtle-violet-sf)]",
  blue:
    "bg-[var(--surface-sf-transparent)] text-[var(--components-chips-ghost-blue-chips-ghost-blue-fg)] hover:bg-[var(--components-chips-subtle-blue-chips-subtle-blue-sf)]",
  neutral:
    "bg-[var(--surface-sf-transparent)] text-[var(--components-chips-ghost-neutral-chips-ghost-neutral-fg)] hover:bg-[var(--components-chips-subtle-neutral-chips-subtle-neutral-sf)]",
  white:
    "bg-[var(--surface-sf-transparent)] text-[var(--components-chips-ghost-white-chips-ghost-white-fg)] hover:bg-[var(--components-chips-subtle-white-chips-subtle-white-sf)]",
};

const SOLID_STATUS_CLASSES: Record<ChipStatus, string> = {
  primary:
    "bg-[var(--components-chips-solid-primary-chips-solid-primary-sf)] text-[var(--components-chips-solid-primary-chips-solid-primary-fg)] hover:bg-[var(--components-chips-solid-primary-chips-solid-primary-sf_hover)]",
  success:
    "bg-[var(--components-chips-solid-success-chips-solid-success-sf)] text-[var(--components-chips-solid-success-chips-solid-success-fg)] hover:bg-[var(--components-chips-solid-success-chips-solid-success-sf_hover)]",
  warning:
    "bg-[var(--components-chips-solid-warning-chips-solid-warning-sf)] text-[var(--components-chips-solid-warning-chips-solid-warning-fg)] hover:bg-[var(--components-chips-solid-warning-chips-solid-warning-sf_hover)]",
  error:
    "bg-[var(--components-chips-solid-error-chips-solid-error-sf)] text-[var(--components-chips-solid-error-chips-solid-error-fg)] hover:bg-[var(--components-chips-solid-error-chips-solid-error-sf_hover)]",
  violet:
    "bg-[var(--components-chips-solid-violet-chips-solid-violet-sf)] text-[var(--components-chips-solid-violet-chips-solid-violet-fg)] hover:bg-[var(--components-chips-solid-violet-chips-solid-violet-sf_hover)]",
  blue:
    "bg-[var(--components-chips-solid-blue-chips-solid-blue-sf)] text-[var(--components-chips-solid-blue-chips-solid-blue-fg)] hover:bg-[var(--components-chips-solid-blue-chips-solid-blue-sf_hover)]",
  neutral:
    "bg-[var(--components-chips-solid-neutral-chips-solid-neutral-sf)] text-[var(--components-chips-solid-neutral-chips-solid-neutral-fg)] hover:bg-[var(--components-chips-solid-neutral-chips-solid-neutral-sf_hover)]",
  white:
    "bg-[var(--components-chips-solid-white-chips-solid-white-sf)] text-[var(--components-chips-solid-white-chips-solid-white-fg)] hover:bg-[var(--components-chips-solid-white-chips-solid-white-sf_hover)]",
};

function getVariantClasses(variant: ChipVariant, status: ChipStatus, disabled: boolean) {
  if (disabled) {
    if (variant === "blur") {
      return "backdrop-blur-[var(--blur-3xs)] border border-[var(--components-chips-blur-chips-blur-stroke_disabled)] bg-[var(--components-chips-blur-chips-blur-sf_disabled)] text-[var(--components-chips-blur-chips-blur-fg_disabled)]";
    }
    if (variant === "stroke" || variant === "stroke-subtle") {
      return "border border-[var(--stroke-stroke_disabled)] bg-[var(--surface-sf_disabled)] text-[var(--foreground-fg_disabled)]";
    }
    if (variant === "ghost") {
      return "bg-[var(--surface-sf-transparent)] text-[var(--foreground-fg_disabled)]";
    }
    return "bg-[var(--surface-sf_disabled)] text-[var(--foreground-fg_disabled)]";
  }

  switch (variant) {
    case "subtle":
      return SUBTLE_STATUS_CLASSES[status];
    case "stroke-subtle":
      return STROKE_SUBTLE_STATUS_CLASSES[status];
    case "stroke":
      return STROKE_STATUS_CLASSES[status];
    case "ghost":
      return GHOST_STATUS_CLASSES[status];
    case "solid":
      return SOLID_STATUS_CLASSES[status];
    case "blur":
      return "backdrop-blur-[var(--blur-3xs)] border border-[var(--components-chips-blur-chips-blur-stroke)] bg-[var(--components-chips-blur-chips-blur-sf)] text-[var(--components-chips-blur-chips-blur-fg)] hover:bg-[var(--components-chips-blur-chips-blur-sf_hover)]";
  }
}

export function Chip({
  label,
  children,
  variant = "subtle",
  status = "primary",
  appearance = "regular",
  size = "sm",
  leading,
  trailing,
  icon,
  showLeading = false,
  showTrailing = false,
  onRemove,
  removeAriaLabel = "حذف",
  disabled = false,
  onClick,
  className = "",
  ...rest
}: ChipProps) {
  const sizeSpec = SIZE_STYLES[size];
  const colorClasses = getVariantClasses(variant, status, disabled);
  const content = children ?? label ?? "برچسب";
  const isClickable = Boolean(onClick);

  const sharedClassName = [
    "inline-flex items-center justify-center rounded-[var(--radius-full)] transition-colors duration-150 select-none overflow-hidden shrink-0",
    disabled ? "cursor-not-allowed" : isClickable ? "cursor-pointer" : "",
    colorClasses,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const innerContent =
    appearance === "icon" ? (
      <span className={`inline-flex items-center justify-center ${sizeSpec.iconContainer}`}>
        {icon ?? <AnglesUpDownIcon size={sizeSpec.iconSize} />}
      </span>
    ) : (
      <span className={`inline-flex items-center justify-center ${sizeSpec.regularContainer}`}>
        {(leading || showLeading) && (
          <span className="inline-flex shrink-0 items-center justify-center">
            {leading ?? <AngleLeftIcon size={sizeSpec.iconSize} className="rtl:rotate-180" />}
          </span>
        )}
        <span className={`inline-flex items-center justify-center whitespace-nowrap ${sizeSpec.labelPadding} ${sizeSpec.textClass}`}>
          {content}
        </span>
        {onRemove ? (
          <button
            type="button"
            disabled={disabled}
            aria-label={removeAriaLabel}
            onClick={(e) => {
              e.stopPropagation();
              onRemove(e);
            }}
            className="inline-flex shrink-0 items-center justify-center rounded-full opacity-80 hover:opacity-100 focus-visible:outline-none disabled:pointer-events-none"
          >
            <XMarkIcon size={sizeSpec.iconSize - 2} />
          </button>
        ) : (
          (trailing || showTrailing) && (
            <span className="inline-flex shrink-0 items-center justify-center">
              {trailing ?? <AngleRightIcon size={sizeSpec.iconSize} className="rtl:rotate-180" />}
            </span>
          )
        )}
      </span>
    );

  if (isClickable) {
    return (
      <button
        type="button"
        disabled={disabled}
        onClick={onClick as React.MouseEventHandler<HTMLButtonElement>}
        className={`${sharedClassName} focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--stroke-stroke-brand-blue)]`}
        {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}
      >
        {innerContent}
      </button>
    );
  }

  return (
    <span
      aria-disabled={disabled || undefined}
      className={sharedClassName}
      {...(rest as React.HTMLAttributes<HTMLSpanElement>)}
    >
      {innerContent}
    </span>
  );
}
