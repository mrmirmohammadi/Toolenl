import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import {
  PRIMITIVE_COLOR_TOKENS,
  RADIUS_TOKENS,
  SEMANTIC_COLOR_TOKENS,
  SPACING_TOKENS,
  TEXT_STYLE_TOKENS,
  THEME_MODES,
} from "../lib/design-tokens";

function FoundationShowcase() {
  return null;
}

const meta: Meta<typeof FoundationShowcase> = {
  title: "Foundation/Tokens & Typography",
  component: FoundationShowcase,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof FoundationShowcase>;

export const TextStyles: Story = {
  render: () => (
    <div className="bg-sf-primary text-text-primary p-md flex flex-col gap-sm">
      <div className="flex flex-col gap-5xs border-b border-stroke-secondary pb-xs">
        <h1 className="text-headline-lg text-text-primary">
          تایپوگرافی و استایل‌های متن (Text Styles)
        </h1>
        <p className="text-body-md text-text-secondary">
          ۲۴ استایل رسمی فیگما + نسخه‌های بدون خط‌خوردگی Body Small و Body XSmall
        </p>
      </div>

      <div className="flex flex-col divide-y divide-stroke-tertiary border border-stroke-secondary rounded-lg overflow-hidden bg-sf-primary">
        {TEXT_STYLE_TOKENS.map((style) => (
          <div
            key={style.className}
            className="p-xs flex flex-col gap-4xs md:flex-row md:items-center md:justify-between"
          >
            <div className="flex flex-col gap-6xs min-w-56" dir="ltr">
              <span className="text-label-sm text-text-accent-blue font-mono">
                {style.figmaName}
              </span>
              <code className="text-body-xs text-text-tertiary font-mono">
                .{style.className}
              </code>
              <span className="text-body-xs text-text-secondary">
                {style.specs.font} · {style.specs.weightName} ({style.specs.weight}) ·{" "}
                {style.specs.sizePx}px / {style.specs.linePx}px
              </span>
            </div>

            <p className={`${style.className} text-text-primary`}>
              تجربه‌ای ساده، خوانا و قابل اعتماد
            </p>
          </div>
        ))}
      </div>
    </div>
  ),
};

export const SemanticColors: Story = {
  render: () => {
    const categories = Array.from(
      new Set(SEMANTIC_COLOR_TOKENS.map((token) => token.category)),
    );

    return (
      <div className="bg-sf-primary text-text-primary p-md flex flex-col gap-md">
        <div className="flex flex-col gap-5xs border-b border-stroke-secondary pb-xs">
          <h1 className="text-headline-lg text-text-primary">
            رنگ‌های معنایی (Semantic Colors — 325 Tokens × 4 Modes)
          </h1>
          <p className="text-body-md text-text-secondary">
            برای تغییر زنده تم، از منوی Theme Mode در نوار بالای Storybook استفاده کنید.
          </p>
        </div>

        {categories.map((category) => {
          const items = SEMANTIC_COLOR_TOKENS.filter((t) => t.category === category);
          return (
            <section key={category} className="flex flex-col gap-2xs">
              <h2 className="text-title-lg text-text-primary" dir="ltr">
                {category} ({items.length})
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2xs">
                {items.map((token) => (
                  <div
                    key={token.cssVar}
                    dir="ltr"
                    className="border border-stroke-secondary rounded-md p-2xs bg-sf-secondary flex flex-col gap-4xs"
                  >
                    <div className="flex items-center justify-between gap-4xs">
                      <span
                        className="w-8 h-8 rounded-xs border border-stroke-primary shrink-0"
                        style={{ backgroundColor: `var(${token.cssVar})` }}
                      />
                      <div className="flex-1 min-w-0">
                        <div className="text-label-sm text-text-primary truncate">
                          {token.figmaName}
                        </div>
                        <div className="text-body-xs text-text-tertiary font-mono truncate">
                          var({token.cssVar})
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-6xs text-body-xs font-mono text-text-secondary">
                      {THEME_MODES.map((mode) => (
                        <div key={mode.id} className="flex items-center gap-6xs truncate">
                          <span
                            className="inline-block w-3 h-3 rounded-4xs border border-stroke-primary shrink-0"
                            style={{ backgroundColor: token.values[mode.label as keyof typeof token.values] }}
                          />
                          <span className="truncate">
                            {mode.label}: {token.values[mode.label as keyof typeof token.values]}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    );
  },
};

export const PrimitiveColors: Story = {
  render: () => {
    const groups = Array.from(new Set(PRIMITIVE_COLOR_TOKENS.map((t) => t.group)));

    return (
      <div className="bg-sf-primary text-text-primary p-md flex flex-col gap-md" dir="ltr">
        <h1 className="text-headline-lg text-text-primary">
          Primitive Colors ({PRIMITIVE_COLOR_TOKENS.length} Tokens)
        </h1>
        {groups.map((group) => {
          const items = PRIMITIVE_COLOR_TOKENS.filter((t) => t.group === group);
          return (
            <section key={group} className="flex flex-col gap-2xs">
              <h2 className="text-title-md text-text-primary">{group}</h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-4xs">
                {items.map((item) => (
                  <div
                    key={item.cssVar}
                    className="border border-stroke-secondary rounded-xs overflow-hidden bg-sf-secondary"
                  >
                    <div
                      className="h-12 w-full border-b border-stroke-tertiary"
                      style={{ backgroundColor: `var(${item.cssVar})` }}
                    />
                    <div className="p-5xs">
                      <div className="text-label-xs text-text-primary">{item.step}</div>
                      <div className="text-body-xs font-mono text-text-tertiary truncate">
                        {item.value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    );
  },
};

export const SpacingAndRadius: Story = {
  render: () => (
    <div className="bg-sf-primary text-text-primary p-md flex flex-col gap-md" dir="ltr">
      <section className="flex flex-col gap-2xs">
        <h2 className="text-headline-md text-text-primary">
          Spacing ({SPACING_TOKENS.length} Tokens)
        </h2>
        <div className="flex flex-col gap-4xs border border-stroke-secondary rounded-md p-xs bg-sf-secondary">
          {SPACING_TOKENS.map((sp) => (
            <div key={sp.name} className="flex items-center gap-xs">
              <code className="w-32 text-label-sm font-mono text-text-primary">{sp.name}</code>
              <span className="w-28 text-body-xs font-mono text-text-secondary">
                {sp.px}px ({sp.rem})
              </span>
              <div
                className="h-4 rounded-4xs bg-sf-accent-brand"
                style={{ width: `var(${sp.cssVar})` }}
              />
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-2xs">
        <h2 className="text-headline-md text-text-primary">
          Corner Radius ({RADIUS_TOKENS.length} Tokens)
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-2xs">
          {RADIUS_TOKENS.map((rad) => (
            <div
              key={rad.name}
              className="border border-stroke-secondary rounded-md p-2xs bg-sf-secondary flex flex-col items-center gap-4xs"
            >
              <div
                className="w-16 h-16 border-2 border-stroke-brand-blue bg-sf-accent-blue-subtle"
                style={{ borderRadius: `var(${rad.cssVar})` }}
              />
              <code className="text-label-sm font-mono text-text-primary">{rad.name}</code>
              <span className="text-body-xs font-mono text-text-tertiary">
                {rad.px}px ({rad.rem})
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  ),
};
