"use client";

import * as React from "react";
import { UserIcon } from "./icons";

export type AvatarSize = "3xs" | "2xs" | "xs" | "sm" | "md" | "lg" | "xl";
export type AvatarMode = "image" | "text" | "icon";

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Circle size: 3xs (16px) up to xl (64px). */
  size?: AvatarSize;
  /** Force image, initials text, or fallback user icon mode. Auto-detected if omitted. */
  mode?: AvatarMode;
  /** Image URL for `mode="image"`. Automatically falls back on load error. */
  src?: string;
  /** Alt text for image mode. */
  alt?: string;
  /** Initials or full name (if initials is omitted, initials can be passed directly in `text` or `name`). */
  name?: string;
  /** Explicit 1-2 character label rendered in `mode="text"`. */
  text?: string;
  /** Custom icon node for `mode="icon"`. */
  icon?: React.ReactNode;
}

const SIZE_MAP: Record<
  AvatarSize,
  {
    container: string;
    textClass: string;
    iconSize: number;
  }
> = {
  "3xs": { container: "size-[16px]", textClass: "text-[10px] leading-[14px]", iconSize: 8 },
  "2xs": { container: "size-[18px]", textClass: "text-[10px] leading-[14px]", iconSize: 9 },
  xs: { container: "size-[20px]", textClass: "text-[10px] leading-[14px]", iconSize: 12 },
  sm: { container: "size-[24px]", textClass: "text-[10px] leading-[14px]", iconSize: 12 },
  md: { container: "size-[40px]", textClass: "text-body-xs", iconSize: 16 },
  lg: { container: "size-[52px]", textClass: "text-body-sm", iconSize: 20 },
  xl: { container: "size-[64px]", textClass: "text-body-sm", iconSize: 24 },
};

function getInitials(value?: string): string {
  if (!value) return "ا";
  const parts = value.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "ا";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
}

export function Avatar({
  size = "md",
  mode,
  src,
  alt = "آواتار کاربر",
  name,
  text,
  icon,
  className = "",
  ...props
}: AvatarProps) {
  const [failedSrc, setFailedSrc] = React.useState<string | null>(null);
  const imgError = Boolean(src) && failedSrc === src;

  const resolvedMode: AvatarMode =
    mode ?? (src && !imgError ? "image" : text || name ? "text" : "icon");

  const sizeSpec = SIZE_MAP[size];
  const displayInitials = text ?? (name ? getInitials(name) : "AB");

  const showImage = resolvedMode === "image" && Boolean(src) && !imgError;

  return (
    <div
      className={[
        "relative inline-flex shrink-0 items-center justify-center overflow-hidden rounded-[var(--radius-full)] border border-[var(--stroke-stroke-quinary)] select-none",
        showImage
          ? "bg-[var(--surface-sf-primary)]"
          : "bg-[var(--surface-sf-accent-brand-subtle)] text-[var(--foreground-fg-accent-brand)]",
        sizeSpec.container,
        className,
      ].join(" ")}
      {...props}
    >
      {showImage ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={alt}
          onError={() => setFailedSrc(src ?? null)}
          className="size-full object-cover"
        />
      ) : resolvedMode === "text" || (resolvedMode === "image" && Boolean(text || name)) ? (
        <span className={`font-medium leading-none ${sizeSpec.textClass}`}>
          {displayInitials}
        </span>
      ) : (
        <span className="inline-flex items-center justify-center">
          {icon ?? <UserIcon size={sizeSpec.iconSize} />}
        </span>
      )}
    </div>
  );
}
