import * as React from "react";
import { Button } from "./Button";
import {
  SolidCheckCircleIcon,
  SolidExclamationCircleIcon,
  SolidFlagIcon,
  SolidInfoCircleIcon,
  SolidWarningTriangleIcon,
} from "./icons";

export type AlertVariant = "info" | "success" | "warning" | "error" | "report";
export type AlertAppearance = "sticky" | "absolute";

export interface AlertProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  /** Semantic alert state: info, success, warning, error, or report. */
  variant?: AlertVariant;
  /** `sticky` renders inline bordered surface; `absolute` renders floating dark glassmorphic toast. */
  appearance?: AlertAppearance;
  /** Heading text. */
  title?: React.ReactNode;
  /** Body / helper description. */
  caption?: React.ReactNode;
  /** Whether to show the heading. */
  showTitle?: boolean;
  /** Whether to show the body caption. */
  showCaption?: boolean;
  /** Whether to render the action button row. */
  showButton?: boolean;
  /** Action button label. */
  actionLabel?: React.ReactNode;
  /** Action button click callback. */
  onAction?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  /** Optional custom icon overriding the default status icon. */
  icon?: React.ReactNode;
}

const VARIANT_ICONS: Record<
  AlertVariant,
  { colorClass: string; Icon: React.ComponentType<{ size?: number; className?: string }> }
> = {
  info: {
    colorClass: "text-[var(--components-icons-icon-accent-blue)]",
    Icon: SolidInfoCircleIcon,
  },
  success: {
    colorClass: "text-[var(--components-icons-icon-accent-brand)]",
    Icon: SolidCheckCircleIcon,
  },
  warning: {
    colorClass: "text-[var(--components-icons-icon-warning)]",
    Icon: SolidWarningTriangleIcon,
  },
  error: {
    colorClass: "text-[var(--components-icons-icon-error)]",
    Icon: SolidExclamationCircleIcon,
  },
  report: {
    colorClass: "text-[var(--components-icons-icon-accent-violet)]",
    Icon: SolidFlagIcon,
  },
};

export function Alert({
  variant = "info",
  appearance = "sticky",
  title = "متن عنوان",
  caption = "تنظیمات شما با موفقیت به‌روزرسانی شد و از این پس اعمال خواهد شد.",
  showTitle = true,
  showCaption = true,
  showButton = true,
  actionLabel = "دکمه",
  onAction,
  icon,
  className = "",
  ...props
}: AlertProps) {
  const isAbsolute = appearance === "absolute";
  const { colorClass, Icon } = VARIANT_ICONS[variant];

  const surfaceClasses = isAbsolute
    ? "backdrop-blur-[calc(var(--effects-apereance-3xl)/2)] bg-[rgba(13,18,28,0.92)] shadow-[0px_var(--effects-apereance-md)_var(--effects-apereance-4xl)_0px_var(--effects-shadows-sm)] border border-white/10"
    : "bg-[var(--surface-sf-secondary)] border border-[var(--stroke-stroke-secondary)]";

  const titleColor = isAbsolute
    ? "text-[#fcfcfd]"
    : "text-[var(--foreground-fg-primary)]";
  const captionColor = isAbsolute
    ? "text-[#eef2f6]"
    : "text-[var(--foreground-fg-secondary)]";

  return (
    <div
      role={variant === "error" || variant === "warning" ? "alert" : "status"}
      className={`flex flex-col gap-[var(--space-sm)] rounded-[var(--radius-lg)] p-[var(--space-xs)] w-full max-w-[312px] overflow-hidden ${surfaceClasses} ${className}`.trim()}
      {...props}
    >
      <div className="flex items-start gap-[var(--space-2xs)] w-full">
        <span className={`shrink-0 inline-flex items-center justify-center ${colorClass}`}>
          {icon ?? <Icon size={24} />}
        </span>

        <div className="flex flex-1 min-w-0 flex-col gap-[var(--space-5xs)] text-start">
          {showTitle && (
            <p className={`text-body-sm font-medium break-words ${titleColor}`}>
              {title}
            </p>
          )}
          {showCaption && (
            <p className={`text-body-xs break-words ${captionColor}`}>
              {caption}
            </p>
          )}
        </div>
      </div>

      {showButton && (
        <div className="flex items-center justify-end gap-[var(--space-3xs)] w-full">
          <Button
            size="sm"
            appearance="stroke"
            status={isAbsolute ? "white" : "neutral"}
            label={actionLabel}
            onClick={onAction}
          />
        </div>
      )}
    </div>
  );
}
