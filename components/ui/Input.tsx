"use client";

import * as React from "react";
import {
  AngleDownIcon,
  CopyIcon,
  ExclamationCircleIcon,
  EyeIcon,
  EyeSlashIcon,
  InfoCircleIcon,
  LockIcon,
  PaymentCardBrandIcon,
  PlusIcon,
  QuestionCircleIcon,
  XMarkIcon,
} from "./icons";

export type InputSize = "sm" | "md" | "lg";
export type InputType =
  | "text"
  | "password"
  | "phone"
  | "money"
  | "tag"
  | "copy"
  | "address"
  | "pay";

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size" | "type" | "onCopy"> {
  /** Specialized Figma Input variant. */
  variant?: InputType;
  /** Height & corner radius scale: sm (36px / 10px), md (44px / 12px), lg (48px / 14px). */
  size?: InputSize;
  /** Primary field label. */
  label?: React.ReactNode;
  /** Optional subtitle rendered under the label. */
  subTitle?: React.ReactNode;
  /** Required/optional indicator badge beside the label (defaults to `*` when `required`). */
  requiredMark?: React.ReactNode;
  /** Helper or error message displayed below the input. */
  hint?: React.ReactNode;
  /** Error state (applies 2px error stroke & red hint icon). */
  error?: boolean | string;
  /** Icon slot on the inline-start side of the field. */
  leadingIcon?: React.ReactNode;
  /** Icon slot on the inline-end side of the field. */
  trailingIcon?: React.ReactNode;
  /** Toggle visibility of default decorative leading icon. */
  showLeadingIcon?: boolean;
  /** Toggle visibility of default decorative trailing icon. */
  showTrailingIcon?: boolean;
  /** Toggle visibility of the hint icon. */
  showHintIcon?: boolean;
  /** Country prefix label used by `variant="phone"`. */
  countryCode?: string;
  /** Currency selector code + unit suffix used by `variant="money"`. */
  currencyCode?: string;
  currencyUnit?: string;
  /** Static scheme prefix used by `variant="address"`. */
  protocolPrefix?: string;
  /** Label on the copy button used by `variant="copy"`. */
  copyLabel?: string;
  copiedLabel?: string;
  /** Callback invoked after `variant="copy"` button is clicked. */
  onCopy?: (value: string) => void;
  /** Interactive tag items for `variant="tag"`. */
  tags?: string[];
  /** Callback when a tag is removed or added in `variant="tag"`. */
  onTagsChange?: (tags: string[]) => void;
  /** HTML `<input type>` override when `variant="text"`. */
  htmlType?: React.HTMLInputTypeAttribute;
}

const SIZE_MAP: Record<
  InputSize,
  {
    height: string;
    radius: string;
    splitStartRadius: string;
    splitEndRadius: string;
    textClass: string;
    labelClass: string;
    trailingIconSize: number;
  }
> = {
  sm: {
    height: "min-h-[36px]",
    radius: "rounded-[var(--radius-sm)]",
    splitStartRadius: "rounded-s-[var(--radius-sm)]",
    splitEndRadius: "rounded-e-[var(--radius-sm)]",
    textClass: "text-body-xs",
    labelClass: "text-body-xs",
    trailingIconSize: 18,
  },
  md: {
    height: "min-h-[44px]",
    radius: "rounded-[var(--radius-md)]",
    splitStartRadius: "rounded-s-[var(--radius-md)]",
    splitEndRadius: "rounded-e-[var(--radius-md)]",
    textClass: "text-body-sm",
    labelClass: "text-body-sm",
    trailingIconSize: 22,
  },
  lg: {
    height: "min-h-[48px]",
    radius: "rounded-[var(--radius-lg)]",
    splitStartRadius: "rounded-s-[var(--radius-lg)]",
    splitEndRadius: "rounded-e-[var(--radius-lg)]",
    textClass: "text-body-sm",
    labelClass: "text-body-sm",
    trailingIconSize: 24,
  },
};

export function Input({
  variant = "text",
  size = "md",
  label,
  subTitle,
  required,
  requiredMark,
  hint,
  error = false,
  disabled = false,
  leadingIcon,
  trailingIcon,
  showLeadingIcon = false,
  showTrailingIcon = false,
  showHintIcon = true,
  countryCode = "IR +98",
  currencyCode = "RI",
  currencyUnit = "ریال",
  protocolPrefix = "https://",
  copyLabel = "کپی",
  copiedLabel = "کپی شد",
  onCopy,
  tags,
  onTagsChange,
  htmlType,
  value,
  defaultValue,
  onChange,
  onKeyDown,
  placeholder,
  className = "",
  id,
  ...props
}: InputProps) {
  const generatedId = React.useId();
  const inputId = id ?? generatedId;

  const [showPassword, setShowPassword] = React.useState(false);
  const [copied, setCopied] = React.useState(false);
  const [internalValue, setInternalValue] = React.useState(
    String(defaultValue ?? "")
  );

  const isControlled = value !== undefined;
  const currentValue = isControlled ? String(value) : internalValue;
  const hasError = Boolean(error);
  const resolvedHint = typeof error === "string" && error.length > 0 ? error : hint;
  const sizeSpec = SIZE_MAP[size];

  const isSplitAddon =
    variant === "phone" ||
    variant === "money" ||
    variant === "copy" ||
    variant === "address" ||
    variant === "pay";

  const frameBorderClass = disabled
    ? "bg-[var(--surface-sf_disabled)] border border-[var(--stroke-stroke_disabled)]"
    : hasError
      ? "bg-[var(--surface-sf-primary)] border-[length:var(--stroke-lg)] border-[var(--stroke-stroke-error)]"
      : "bg-[var(--surface-sf-primary)] border border-[var(--stroke-stroke-quaternary)] hover:border-[var(--stroke-stroke-secondary)] focus-within:border-[var(--stroke-stroke-brand-blue)]";

  const resolvedHtmlType: React.HTMLInputTypeAttribute =
    htmlType ??
    (variant === "password"
      ? showPassword
        ? "text"
        : "password"
      : variant === "phone"
        ? "tel"
        : "text");

  const defaultPlaceholder =
    placeholder ??
    (variant === "password"
      ? "کلمه عبور شما"
      : variant === "phone"
        ? "+98 (123) 456 7890"
        : variant === "money"
          ? "1,000,000"
          : variant === "tag"
            ? "افزودن مورد جدید..."
            : variant === "copy" || variant === "address"
              ? "www.example.com"
              : variant === "pay"
                ? "0000 - 0000 - 0000 - 0000"
                : "مقدار را وارد کنید");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isControlled) {
      setInternalValue(e.target.value);
    }
    onChange?.(e);
  };

  const handleCopy = async () => {
    const val = currentValue || defaultPlaceholder;
    try {
      if (typeof navigator !== "undefined" && navigator.clipboard) {
        await navigator.clipboard.writeText(val);
      }
      setCopied(true);
      onCopy?.(val);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      onCopy?.(val);
    }
  };

  const handleTagKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (variant === "tag" && e.key === "Enter" && currentValue.trim() && onTagsChange) {
      e.preventDefault();
      const next = currentValue.trim();
      const list = tags ?? [];
      if (!list.includes(next)) {
        onTagsChange([...list, next]);
      }
      if (!isControlled) {
        setInternalValue("");
      }
    }
    onKeyDown?.(e);
  };

  const renderTrailingSlot = () => {
    if (variant === "password") {
      return (
        <button
          type="button"
          disabled={disabled}
          onClick={() => setShowPassword((prev) => !prev)}
          aria-label={showPassword ? "مخفی کردن رمز" : "نمایش رمز"}
          className="inline-flex shrink-0 items-center justify-center text-[var(--components-icons-icon-tertiary)] hover:text-[var(--components-icons-icon-primary)] disabled:pointer-events-none"
        >
          {showPassword ? <EyeSlashIcon size={20} /> : <EyeIcon size={20} />}
        </button>
      );
    }
    if (trailingIcon) {
      return (
        <span className="inline-flex shrink-0 items-center justify-center text-[var(--components-icons-icon-tertiary)]">
          {trailingIcon}
        </span>
      );
    }
    if (showTrailingIcon) {
      return (
        <span className="inline-flex shrink-0 items-center justify-center text-[var(--components-icons-icon-tertiary)]">
          {variant === "money" || variant === "address" || variant === "copy" || variant === "pay" ? (
            <QuestionCircleIcon size={16} />
          ) : (
            <PlusIcon size={sizeSpec.trailingIconSize} />
          )}
        </span>
      );
    }
    return null;
  };

  const renderLeadingSlot = () => {
    if (leadingIcon) {
      return (
        <span className="inline-flex shrink-0 items-center justify-center text-[var(--components-icons-icon-tertiary)]">
          {leadingIcon}
        </span>
      );
    }
    if (showLeadingIcon) {
      if (variant === "password") {
        return (
          <span className="inline-flex shrink-0 items-center justify-center text-[var(--components-icons-icon-tertiary)]">
            <LockIcon size={20} />
          </span>
        );
      }
      return (
        <span className="inline-flex shrink-0 items-center justify-center text-[var(--components-icons-icon-tertiary)]">
          <InfoCircleIcon size={16} />
        </span>
      );
    }
    return null;
  };

  return (
    <div className={`flex flex-col gap-[var(--space-3xs)] w-full ${className}`.trim()}>
      {(label || subTitle) && (
        <div className="flex flex-col gap-[var(--space-5xs)] text-start">
          {label && (
            <label
              htmlFor={inputId}
              className={`inline-flex items-center gap-[var(--space-5xs)] text-[var(--content-text-primary)] ${sizeSpec.labelClass}`}
            >
              <span>{label}</span>
              {(required || requiredMark !== undefined) && (
                <span className="text-body-xs text-[var(--content-text-accent-brand)]">
                  {requiredMark ?? "*"}
                </span>
              )}
            </label>
          )}
          {subTitle && (
            <p className="text-body-xs text-[var(--content-text-tertiary)]">
              {subTitle}
            </p>
          )}
        </div>
      )}

      <div
        className={`flex items-stretch w-full overflow-hidden transition-colors duration-150 ${sizeSpec.radius} ${frameBorderClass}`}
      >
        {/* Inline-start split addon for Phone, Money, Address, Pay */}
        {variant === "phone" && (
          <div className="flex items-center gap-[var(--space-4xs)] px-[var(--space-xs)] border-e border-[var(--stroke-stroke-quinary)] shrink-0 text-body-sm text-[var(--foreground-fg-primary)]">
            <span>{countryCode}</span>
            <AngleDownIcon size={16} className="text-[var(--components-icons-icon-tertiary)]" />
          </div>
        )}

        {variant === "money" && (
          <div className="flex items-center gap-[var(--space-4xs)] px-[var(--space-xs)] border-e border-[var(--stroke-stroke-quinary)] shrink-0 text-body-sm text-[var(--foreground-fg-primary)]">
            <span>{currencyCode}</span>
            <AngleDownIcon size={16} className="text-[var(--components-icons-icon-tertiary)]" />
          </div>
        )}

        {variant === "address" && (
          <div
            dir="ltr"
            className="flex items-center px-[var(--space-xs)] border-e border-[var(--stroke-stroke-quinary)] shrink-0 text-body-sm text-[var(--foreground-fg-secondary)]"
          >
            {protocolPrefix}
          </div>
        )}

        {variant === "pay" && (
          <div className="flex items-center px-[var(--space-xs)] border-e border-[var(--stroke-stroke-quinary)] shrink-0">
            <PaymentCardBrandIcon size={22} />
          </div>
        )}

        {/* Main input core */}
        <div
          className={`flex flex-1 min-w-0 items-center gap-[var(--space-3xs)] px-[var(--space-xs)] ${sizeSpec.height}`}
        >
          {renderLeadingSlot()}

          {variant === "tag" && tags && tags.length > 0 && (
            <div className="flex flex-wrap items-center gap-1 py-1">
              {tags.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-1 rounded-[var(--radius-full)] bg-[var(--surface-sf-accent-blue-subtle)] px-2 py-0.5 text-body-xs text-[var(--foreground-fg-primary)]"
                >
                  <span>{item}</span>
                  {onTagsChange && !disabled && (
                    <button
                      type="button"
                      onClick={() => onTagsChange(tags.filter((t) => t !== item))}
                      aria-label={`حذف ${item}`}
                      className="inline-flex items-center justify-center text-[var(--foreground-fg-tertiary)] hover:text-[var(--foreground-fg-primary)]"
                    >
                      <XMarkIcon size={12} />
                    </button>
                  )}
                </span>
              ))}
            </div>
          )}

          <input
            id={inputId}
            type={resolvedHtmlType}
            disabled={disabled}
            required={required}
            aria-invalid={hasError || undefined}
            placeholder={defaultPlaceholder}
            value={isControlled ? value : undefined}
            defaultValue={!isControlled ? defaultValue : undefined}
            onChange={handleInputChange}
            onKeyDown={handleTagKeyDown}
            className={[
              "w-full min-w-0 flex-1 bg-transparent outline-none",
              sizeSpec.textClass,
              disabled
                ? "cursor-not-allowed text-[var(--foreground-fg_disabled)] placeholder:text-[var(--foreground-fg_disabled)]"
                : "text-[var(--foreground-fg-primary)] placeholder:text-[var(--foreground-fg-placeholder)]",
              isSplitAddon ? "text-start" : "",
            ]
              .filter(Boolean)
              .join(" ")}
            {...props}
          />

          {variant === "money" && (
            <span className="shrink-0 text-body-sm text-[var(--foreground-fg-secondary)]">
              {currencyUnit}
            </span>
          )}

          {renderTrailingSlot()}
        </div>

        {/* Inline-end split addon for Copy */}
        {variant === "copy" && (
          <button
            type="button"
            disabled={disabled}
            onClick={handleCopy}
            className="flex items-center gap-[var(--space-4xs)] px-[var(--space-xs)] border-s border-[var(--stroke-stroke-quinary)] shrink-0 text-body-sm text-[var(--foreground-fg-secondary)] hover:bg-[var(--surface-sf-secondary)] transition-colors disabled:pointer-events-none disabled:opacity-50"
          >
            <CopyIcon size={18} />
            <span>{copied ? copiedLabel : copyLabel}</span>
          </button>
        )}
      </div>

      {resolvedHint && (
        <div
          className={`flex items-center gap-[var(--space-3xs)] text-body-xs ${
            hasError
              ? "text-[var(--content-text-error)]"
              : disabled
                ? "text-[var(--content-text_disabled)]"
                : "text-[var(--content-text-tertiary)]"
          }`}
        >
          {showHintIcon && (
            <span className="shrink-0 inline-flex items-center justify-center">
              {hasError ? (
                <ExclamationCircleIcon size={16} />
              ) : (
                <InfoCircleIcon size={16} />
              )}
            </span>
          )}
          <span>{resolvedHint}</span>
        </div>
      )}
    </div>
  );
}
