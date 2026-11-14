import * as React from "react";
import { AngleLeftIcon, AngleRightIcon, AnglesUpDownIcon } from "./icons";

export type ButtonAppearance = "solid" | "stroke" | "ghost" | "blur";
export type ButtonStatus =
  | "primary"
  | "success"
  | "warning"
  | "error"
  | "neutral"
  | "white";
export type ButtonSize = "sm" | "md" | "lg";
export type ButtonVariant = "content" | "icon";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Button label text when `children` is not provided. */
  label?: React.ReactNode;
  /** Figma Appearance property: Solid, Stroke, Ghost, or Blur. */
  appearance?: ButtonAppearance;
  /** Semantic color palette. Blur uses frosted overlay tokens. */
  status?: ButtonStatus;
  /** Content shows text + optional leading/trailing icons; icon renders a circular icon button. */
  variant?: ButtonVariant;
  /** Height scale: sm (36px), md (44px), lg (48px). */
  size?: ButtonSize;
  /** Icon rendered before the label. */
  leading?: React.ReactNode;
  /** Icon rendered after the label. */
  trailing?: React.ReactNode;
  /** Icon rendered in `variant="icon"`. */
  icon?: React.ReactNode;
  /** Show default chevron when leading is omitted. */
  showLeading?: boolean;
  /** Show default chevron when trailing is omitted. */
  showTrailing?: boolean;
  /** Display spinner & disable interaction. */
  loading?: boolean;
  /** Stretch button to full container width. */
  fullWidth?: boolean;
}

const SIZE_STYLES: Record<
  ButtonSize,
  {
    contentHeight: string;
    contentPadding: string;
    iconOnlySize: string;
    labelClass: string;
    iconSize: number;
  }
> = {
  sm: {
    contentHeight: "h-[36px]",
    contentPadding: "px-[var(--space-2xs)]",
    iconOnlySize: "size-[36px] p-[var(--space-4xs)]",
    labelClass: "text-body-sm",
    iconSize: 20,
  },
  md: {
    contentHeight: "h-[44px]",
    contentPadding: "px-[var(--space-xs)]",
    iconOnlySize: "size-[44px] p-[var(--space-4xs)]",
    labelClass: "text-body-sm",
    iconSize: 24,
  },
  lg: {
    contentHeight: "h-[48px]",
    contentPadding: "px-[var(--space-xs)]",
    iconOnlySize: "size-[48px] p-[var(--space-3xs)]",
    labelClass: "text-body-md",
    iconSize: 24,
  },
};

const SOLID_CLASSES: Record<ButtonStatus, string> = {
  primary:
    "bg-[var(--components-buttons-solid-button-solid-primary-sf)] text-[var(--components-buttons-solid-button-solid-fg)] hover:bg-[var(--components-buttons-solid-button-solid-primary-sf_hover)]",
  success:
    "bg-[var(--components-chips-solid-success-chips-solid-success-sf)] text-[var(--components-buttons-solid-button-solid-fg)] hover:bg-[var(--components-chips-solid-success-chips-solid-success-sf_hover)]",
  warning:
    "bg-[var(--components-buttons-solid-button-solid-warning-sf)] text-[var(--components-buttons-solid-button-solid-fg)] hover:bg-[var(--components-buttons-solid-button-solid-warning-sf_hover)]",
  error:
    "bg-[var(--components-buttons-solid-button-solid-error-sf)] text-[var(--components-buttons-solid-button-solid-fg)] hover:bg-[var(--components-buttons-solid-button-solid-error-sf_hover)]",
  neutral:
    "bg-[var(--components-buttons-solid-button-solid-neutral-sf)] text-[var(--components-buttons-solid-button-solid-neutral-fg)] hover:bg-[var(--components-buttons-solid-button-solid-neutral-sf_hover)]",
  white:
    "bg-[var(--components-buttons-solid-button-solid-white-sf)] text-[var(--components-buttons-solid-button-solid-white-fg)] hover:bg-[var(--components-buttons-solid-button-solid-white-sf_hover)]",
};

const STROKE_CLASSES: Record<ButtonStatus, string> = {
  primary:
    "border border-[var(--components-buttons-stroke-button-stroke-primary-stroke)] text-[var(--components-buttons-stroke-button-stroke-primary-fg)] hover:border-[var(--components-buttons-stroke-button-stroke-primary-strok_hover)] hover:bg-[var(--components-buttons-ghost-button-ghost-sf_hover)]",
  success:
    "border border-[var(--components-buttons-stroke-button-stroke-success-stroke)] text-[var(--components-buttons-stroke-button-stroke-success-fg)] hover:border-[var(--components-buttons-stroke-button-stroke-success-strok_hover)] hover:bg-[var(--components-buttons-ghost-button-ghost-sf_hover)]",
  warning:
    "border border-[var(--components-buttons-stroke-button-stroke-warning-stroke)] text-[var(--components-buttons-stroke-button-stroke-warning-fg)] hover:border-[var(--components-buttons-stroke-button-stroke-warning-strok_hover)] hover:bg-[var(--components-buttons-ghost-button-ghost-sf_hover)]",
  error:
    "border border-[var(--components-buttons-stroke-button-stroke-error-stroke)] text-[var(--components-buttons-stroke-button-stroke-error-fg)] hover:border-[var(--components-buttons-stroke-button-stroke-error-strok_hover)] hover:bg-[var(--components-buttons-ghost-button-ghost-sf_hover)]",
  neutral:
    "border border-[var(--components-buttons-stroke-button-stroke-neutral-stroke)] text-[var(--components-buttons-stroke-button-stroke-neutral-fg)] hover:border-[var(--components-buttons-stroke-button-stroke-neutral-strok_hover)] hover:bg-[var(--components-buttons-ghost-button-ghost-sf_hover)]",
  white:
    "border border-[var(--components-buttons-stroke-button-stroke-white-stroke)] text-[var(--components-buttons-stroke-button-stroke-white-fg)] hover:border-[var(--components-buttons-stroke-button-stroke-white-stroke_hover)] hover:bg-[var(--components-buttons-ghost-button-ghost-sf_hover)]",
};

const GHOST_CLASSES: Record<ButtonStatus, string> = {
  primary:
    "bg-[var(--surface-sf-transparent)] text-[var(--components-buttons-ghost-button-ghost-primary-fg)] hover:bg-[var(--components-buttons-ghost-button-ghost-sf_hover)] hover:text-[var(--components-buttons-ghost-button-ghost-primary-fg_hover)]",
  success:
    "bg-[var(--surface-sf-transparent)] text-[var(--components-buttons-ghost-button-ghost-success-fg)] hover:bg-[var(--components-buttons-ghost-button-ghost-sf_hover)] hover:text-[var(--components-buttons-ghost-button-ghost-success-fg_hover)]",
  warning:
    "bg-[var(--surface-sf-transparent)] text-[var(--components-buttons-ghost-button-ghost-warning-fg)] hover:bg-[var(--components-buttons-ghost-button-ghost-sf_hover)] hover:text-[var(--components-buttons-ghost-button-ghost-warning-fg_hover)]",
  error:
    "bg-[var(--surface-sf-transparent)] text-[var(--components-buttons-ghost-button-ghost-error-fg)] hover:bg-[var(--components-buttons-ghost-button-ghost-sf_hover)] hover:text-[var(--components-buttons-ghost-button-ghost-error-fg_hover)]",
  neutral:
    "bg-[var(--surface-sf-transparent)] text-[var(--components-buttons-ghost-button-ghost-neutral-fg)] hover:bg-[var(--components-buttons-ghost-button-ghost-sf_hover)] hover:text-[var(--components-buttons-ghost-button-ghost-neutral-fg_hover)]",
  white:
    "bg-[var(--surface-sf-transparent)] text-[var(--components-buttons-ghost-button-ghost-white-fg)] hover:bg-[var(--components-buttons-ghost-button-ghost-sf_hover)] hover:text-[var(--components-buttons-ghost-button-ghost-white-fg_hover)]",
};

function getButtonAppearanceClasses(
  appearance: ButtonAppearance,
  status: ButtonStatus,
  isDisabled: boolean
) {
  if (isDisabled) {
    if (appearance === "blur") {
      return "backdrop-blur-[calc(var(--effects-apereance-4xl)/2)] border border-[var(--components-buttons-blur-button-blur-stroke)] bg-[var(--components-buttons-blur-button-blur-sf_disabled)] text-[var(--components-buttons-blur-button-blur-fg_disabled)]";
    }
    if (appearance === "stroke") {
      return "border border-[var(--components-buttons-stroke-button-stroke_disabled)] bg-[var(--surface-sf-transparent)] text-[var(--components-buttons-stroke-button-stroke-fg_disabled)]";
    }
    if (appearance === "ghost") {
      return "bg-[var(--surface-sf-transparent)] text-[var(--components-buttons-ghost-button-ghost-fg_disabled)]";
    }
    return "border border-[var(--stroke-stroke_disabled)] bg-[var(--components-buttons-solid-button-solid-sf_disabled)] text-[var(--components-buttons-solid-button-solid-fg_disabled)]";
  }

  switch (appearance) {
    case "solid":
      return `${SOLID_CLASSES[status]} border-[length:var(--stroke-lg)] border-white/15 [box-shadow:0px_var(--effects-apereance-xs)_var(--effects-apereance-sm)_0px_var(--effects-shadows-3xs),inset_0px_0px_0px_var(--effects-apereance-3xs)_var(--effects-shadows-2xs),inset_0px_var(--effects-apereance-xs-nagative)_var(--effects-apereance-md)_0px_var(--effects-shadows-2xs)]`;
    case "stroke":
      return STROKE_CLASSES[status];
    case "ghost":
      return GHOST_CLASSES[status];
    case "blur":
      return "backdrop-blur-[calc(var(--effects-apereance-4xl)/2)] border border-[var(--components-chips-blur-chips-blur-stroke)] bg-[var(--components-buttons-blur-button-blur-sf)] text-[var(--components-buttons-blur-button-blur-fg)] hover:bg-[var(--components-buttons-blur-button-blur-sf_hover)] [box-shadow:0px_var(--effects-apereance-xs)_var(--effects-apereance-sm)_0px_var(--effects-shadows-2xs),inset_0px_var(--effects-apereance-sm)_var(--effects-apereance-md)_0px_rgba(255,255,255,0.08),inset_0px_0px_0px_var(--effects-apereance-3xs)_var(--effects-shadows-3xs),inset_0px_var(--effects-apereance-xs-nagative)_var(--effects-apereance-md)_0px_var(--effects-shadows-3xs)]";
  }
}

export function Button({
  children,
  label = "دکمه",
  appearance = "solid",
  status = "primary",
  variant = "content",
  size = "md",
  leading,
  trailing,
  icon,
  showLeading = false,
  showTrailing = false,
  loading = false,
  fullWidth = false,
  disabled = false,
  type = "button",
  className = "",
  ...props
}: ButtonProps) {
  const isDisabled = disabled || loading;
  const sizeSpec = SIZE_STYLES[size];
  const appearanceClasses = getButtonAppearanceClasses(
    appearance,
    status,
    isDisabled
  );
  const content = children ?? label;

  return (
    <button
      type={type}
      disabled={isDisabled}
      aria-busy={loading || undefined}
      className={[
        "inline-flex items-center justify-center rounded-[var(--radius-full)] transition-all duration-150 select-none overflow-hidden shrink-0",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--stroke-stroke-brand-blue)]",
        isDisabled ? "cursor-not-allowed" : "cursor-pointer active:scale-[0.98]",
        fullWidth ? "w-full" : "",
        appearanceClasses,
        variant === "icon"
          ? sizeSpec.iconOnlySize
          : `${sizeSpec.contentHeight} ${sizeSpec.contentPadding}`,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {variant === "icon" ? (
        <span className="inline-flex items-center justify-center">
          {loading ? (
            <span
              className="size-4 animate-spin rounded-full border-2 border-current border-t-transparent"
              aria-hidden="true"
            />
          ) : (
            icon ?? <AnglesUpDownIcon size={sizeSpec.iconSize} />
          )}
        </span>
      ) : (
        <span className="inline-flex items-center justify-center">
          {loading ? (
            <span
              className="me-1.5 size-4 animate-spin rounded-full border-2 border-current border-t-transparent"
              aria-hidden="true"
            />
          ) : (
            (leading || showLeading) && (
              <span className="inline-flex shrink-0 items-center justify-center">
                {leading ?? <AngleLeftIcon size={sizeSpec.iconSize} className="rtl:rotate-180" />}
              </span>
            )
          )}
          <span className={`inline-flex items-center justify-center px-[var(--space-3xs)] whitespace-nowrap ${sizeSpec.labelClass}`}>
            {content}
          </span>
          {(trailing || showTrailing) && (
            <span className="inline-flex shrink-0 items-center justify-center">
              {trailing ?? <AngleRightIcon size={sizeSpec.iconSize} className="rtl:rotate-180" />}
            </span>
          )}
        </span>
      )}
    </button>
  );
}
