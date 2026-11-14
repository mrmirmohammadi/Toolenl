import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Chip, type ChipStatus, type ChipVariant } from "../../components/ui";

const meta: Meta<typeof Chip> = {
  title: "UI/Chip",
  component: Chip,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: {
    variant: {
      control: "select",
      options: ["subtle", "stroke-subtle", "stroke", "ghost", "solid", "blur"],
    },
    status: {
      control: "select",
      options: ["primary", "success", "warning", "error", "violet", "blue", "neutral", "white"],
    },
    appearance: {
      control: "inline-radio",
      options: ["regular", "icon"],
    },
    size: {
      control: "inline-radio",
      options: ["sm", "md", "lg"],
    },
    disabled: { control: "boolean" },
    showLeading: { control: "boolean" },
    showTrailing: { control: "boolean" },
  },
  args: {
    label: "برچسب",
    variant: "subtle",
    status: "primary",
    appearance: "regular",
    size: "md",
    showLeading: true,
    showTrailing: true,
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof Chip>;

export const Playground: Story = {};

const VARIANTS: ChipVariant[] = ["subtle", "stroke-subtle", "stroke", "ghost", "solid"];
const STATUSES: ChipStatus[] = ["primary", "success", "warning", "error", "violet", "blue", "neutral", "white"];

export const AllVariantsAndStatuses: Story = {
  render: () => (
    <div className="flex flex-col gap-6 p-4 bg-[var(--surface-sf-primary)] rounded-xl">
      {VARIANTS.map((variant) => (
        <div key={variant} className="flex flex-col gap-2">
          <span className="text-label-sm font-mono text-[var(--content-text-secondary)]">
            variant: {variant}
          </span>
          <div className="flex flex-wrap items-center gap-2 p-3 rounded-lg bg-[var(--surface-sf-secondary)]">
            {STATUSES.map((status) => (
              <Chip
                key={status}
                variant={variant}
                status={status}
                size="md"
                showLeading
                showTrailing
                label={status}
              />
            ))}
          </div>
        </div>
      ))}

      <div className="flex flex-col gap-2">
        <span className="text-label-sm font-mono text-[var(--content-text-secondary)]">
          variant: blur (on dark surface) & icon sizes & disabled
        </span>
        <div className="flex flex-wrap items-center gap-3 p-4 rounded-xl bg-slate-900">
          <Chip variant="blur" size="sm" showLeading showTrailing label="sm Blur" />
          <Chip variant="blur" size="md" showLeading showTrailing label="md Blur" />
          <Chip variant="blur" size="lg" showLeading showTrailing label="lg Blur" />
          <Chip variant="blur" size="md" appearance="icon" />
          <Chip variant="blur" size="md" disabled showLeading showTrailing label="Disabled" />
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <Chip variant="solid" size="sm" label="سایز sm" showLeading showTrailing />
        <Chip variant="solid" size="md" label="سایز md" showLeading showTrailing />
        <Chip variant="solid" size="lg" label="سایز lg" showLeading showTrailing />
        <Chip variant="solid" size="sm" appearance="icon" />
        <Chip variant="solid" size="md" appearance="icon" />
        <Chip variant="solid" size="lg" appearance="icon" />
        <Chip variant="solid" size="md" disabled label="غیرفعال" showLeading showTrailing />
      </div>
    </div>
  ),
};
