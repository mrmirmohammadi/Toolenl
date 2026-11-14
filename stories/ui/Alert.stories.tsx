import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Alert, type AlertVariant } from "../../components/ui";

const meta: Meta<typeof Alert> = {
  title: "UI/Alert",
  component: Alert,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: {
    variant: {
      control: "select",
      options: ["info", "success", "warning", "error", "report"],
    },
    appearance: {
      control: "inline-radio",
      options: ["sticky", "absolute"],
    },
    showTitle: { control: "boolean" },
    showCaption: { control: "boolean" },
    showButton: { control: "boolean" },
  },
  args: {
    variant: "info",
    appearance: "sticky",
    title: "متن عنوان",
    caption: "تنظیمات شما با موفقیت به‌روزرسانی شد و از این پس اعمال خواهد شد.",
    actionLabel: "دکمه",
    showTitle: true,
    showCaption: true,
    showButton: true,
  },
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Playground: Story = {};

const VARIANTS: AlertVariant[] = ["info", "success", "warning", "error", "report"];

export const AllStatesAndAppearances: Story = {
  render: () => (
    <div className="flex flex-col gap-6 p-4 rounded-xl bg-[var(--surface-sf-primary)]">
      <div className="flex flex-col gap-2">
        <span className="text-label-sm font-mono text-[var(--content-text-secondary)]">
          appearance: absolute (Floating Toast)
        </span>
        <div className="flex flex-wrap gap-4">
          {VARIANTS.map((variant) => (
            <Alert key={variant} variant={variant} appearance="absolute" />
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <span className="text-label-sm font-mono text-[var(--content-text-secondary)]">
          appearance: sticky (Inline Surface)
        </span>
        <div className="flex flex-wrap gap-4">
          {VARIANTS.map((variant) => (
            <Alert key={variant} variant={variant} appearance="sticky" />
          ))}
        </div>
      </div>
    </div>
  ),
};
