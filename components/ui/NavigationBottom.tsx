"use client";

import * as React from "react";
import {
  GridCircleNavIcon,
  HouseNavIcon,
  PlaySquareNavIcon,
  UserNavIcon,
} from "./icons";

export type BottomNavKey = "home" | "courses" | "video" | "account";

export interface BottomNavItem {
  key: BottomNavKey | (string & {});
  label: React.ReactNode;
  icon?: (active: boolean) => React.ReactNode;
  href?: string;
}

export interface NavigationBottomProps
  extends Omit<React.HTMLAttributes<HTMLElement>, "onChange"> {
  /** Controlled active tab key (`home`, `courses`, `video`, `account`, or custom key). */
  value?: string;
  /** Initial active tab key for uncontrolled usage. */
  defaultValue?: string;
  /** Called whenever a navigation tab is selected. */
  onChange?: (key: string) => void;
  /** Custom navigation items overriding the default 4-tab layout. */
  items?: BottomNavItem[];
  /** Show bottom backdrop gradient behind the floating pill. */
  showBackdrop?: boolean;
  /** Show iOS-style bottom home indicator bar. */
  showHomeIndicator?: boolean;
}

const DEFAULT_ITEMS: BottomNavItem[] = [
  {
    key: "home",
    label: "خانه",
    icon: (active) => <HouseNavIcon size={20} active={active} />,
  },
  {
    key: "courses",
    label: "دوره ها",
    icon: (active) => <GridCircleNavIcon size={20} active={active} />,
  },
  {
    key: "video",
    label: "ویدئو",
    icon: (active) => <PlaySquareNavIcon size={20} active={active} />,
  },
  {
    key: "account",
    label: "حساب",
    icon: (active) => <UserNavIcon size={20} active={active} />,
  },
];

export function NavigationBottom({
  value,
  defaultValue = "home",
  onChange,
  items = DEFAULT_ITEMS,
  showBackdrop = true,
  showHomeIndicator = true,
  className = "",
  ...props
}: NavigationBottomProps) {
  const isControlled = value !== undefined;
  const [internalKey, setInternalKey] = React.useState(defaultValue);
  const activeKey = isControlled ? value : internalKey;

  const handleSelect = (key: string) => {
    if (!isControlled) {
      setInternalKey(key);
    }
    onChange?.(key);
  };

  return (
    <nav
      aria-label="ناوبری پایین صفحه"
      className={`relative flex w-full max-w-[384px] flex-col items-center justify-center rounded-t-[var(--radius-md)] ${className}`.trim()}
      {...props}
    >
      {showBackdrop && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-[116px] bg-gradient-to-b from-transparent to-[color-mix(in_srgb,var(--surface-sf-primary)_70%,transparent)]"
        />
      )}

      <div
        className={[
          "relative z-10 flex items-center justify-center gap-0 rounded-[var(--radius-full)] p-[var(--space-6xs)]",
          "backdrop-blur-[calc(var(--effects-apereance-2xl)/2)]",
          "bg-[color-mix(in_srgb,var(--surface-sf-primary)_92%,transparent)]",
          "border border-[var(--stroke-stroke-quinary)]",
          "shadow-[0px_var(--effects-apereance-xs)_var(--effects-apereance-xl)_0px_var(--effects-shadows-2xs)]",
        ].join(" ")}
      >
        {items.map((item) => {
          const isActive = item.key === activeKey;
          const commonClasses = [
            "flex w-[80px] shrink-0 flex-col items-center justify-center gap-[var(--space-5xs)] rounded-[var(--radius-full)] py-[var(--space-4xs)] transition-colors duration-150 select-none cursor-pointer",
            "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--stroke-stroke-brand-blue)]",
            isActive
              ? "bg-[var(--surface-sf-accent-blue-subtle)] text-[var(--components-icons-icon-accent-blue)]"
              : "bg-transparent text-[var(--foreground-fg-secondary)] hover:bg-[var(--surface-sf-secondary)]",
          ].join(" ");

          const content = (
            <>
              <span className="inline-flex size-[20px] shrink-0 items-center justify-center">
                {item.icon?.(isActive)}
              </span>
              <span className="text-[10px] leading-[14px] font-normal whitespace-nowrap text-center">
                {item.label}
              </span>
            </>
          );

          if (item.href) {
            return (
              <a
                key={item.key}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                onClick={(e) => {
                  if (onChange) {
                    e.preventDefault();
                    handleSelect(item.key);
                  }
                }}
                className={commonClasses}
              >
                {content}
              </a>
            );
          }

          return (
            <button
              key={item.key}
              type="button"
              aria-current={isActive ? "page" : undefined}
              onClick={() => handleSelect(item.key)}
              className={commonClasses}
            >
              {content}
            </button>
          );
        })}
      </div>

      {showHomeIndicator && (
        <div
          aria-hidden="true"
          className="relative z-10 flex h-[34px] w-full items-end justify-center pb-[8px]"
        >
          <span className="h-[5px] w-[144px] rounded-[var(--radius-full)] bg-[var(--foreground-fg-primary)]" />
        </div>
      )}
    </nav>
  );
}
