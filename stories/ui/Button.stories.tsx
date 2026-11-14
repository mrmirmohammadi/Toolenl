import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import {
  Button,
  type ButtonAppearance,
  type ButtonStatus,
} from "../../components/ui";

const meta: Meta<typeof Button> = {
  title: "UI/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: {
    appearance: {
      control: "select",
      options: ["solid", "stroke", "ghost", "blur"],
    },
    status: {
      control: "select",
      options: ["primary", "success", "warning", "error", "neutral", "white"],
    },
    variant: {
      control: "inline-radio",
      options: ["content", "icon"],
    },
    size: {
      control: "inline-radio",
      options: ["sm", "md", "lg"],
    },
    disabled: { control: "boolean" },
    loading: { control: "boolean" },
    showLeading: { control: "boolean" },
    showTrailing: { control: "boolean" },
  },
  args: {
    label: "دکمه",
    appearance: "solid",
    status: "primary",
    variant: "content",
    size: "md",
    showLeading: true,
    showTrailing: true,
    disabled: false,
    loading: false,
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Playground: Story = {};

const APPEARANCES: ButtonAppearance[] = ["solid", "stroke", "ghost"];
const STATUSES: ButtonStatus[] = ["primary", "success", "warning", "error", "neutral", "white"];

export const AllAppearancesAndStatuses: Story = {
  render: () => (
    <div className="flex flex-col gap-6 p-4 bg-[var(--surface-sf-primary)] rounded-xl">
      {APPEARANCES.map((appearance) => (
        <div key={appearance} className="flex flex-col gap-2">
          <span className="text-label-sm font-mono text-[var(--content-text-secondary)]">
            appearance: {appearance}
          </span>
          <div className="flex flex-wrap items-center gap-3 p-3 rounded-lg bg-[var(--surface-sf-secondary)]">
            {STATUSES.filter((s) => s !== "white").map((status) => (
              <Button
                key={status}
                appearance={appearance}
                status={status}
                size="md"
                showLeading
                showTrailing
                label={status}
              />
            ))}
            <span className="p-2 rounded-lg bg-slate-900 inline-flex">
              <Button
                appearance={appearance}
                status="white"
                size="md"
                showLeading
                showTrailing
                label="white"
              />
            </span>
          </div>
        </div>
      ))}

      <div className="flex flex-col gap-2">
        <span className="text-label-sm font-mono text-[var(--content-text-secondary)]">
          appearance: blur & sizes & icon-only & states
        </span>
        <div className="flex flex-wrap items-center gap-3 p-4 rounded-xl bg-slate-900">
          <Button appearance="blur" size="sm" label="Blur sm" showLeading showTrailing />
          <Button appearance="blur" size="md" label="Blur md" showLeading showTrailing />
          <Button appearance="blur" size="lg" label="Blur lg" showLeading showTrailing />
          <Button appearance="blur" size="md" variant="icon" aria-label="Blur icon" />
          <Button appearance="blur" size="md" disabled label="Disabled" />
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <Button appearance="solid" size="sm" label="سایز sm" showLeading showTrailing />
        <Button appearance="solid" size="md" label="سایز md" showLeading showTrailing />
        <Button appearance="solid" size="lg" label="سایز lg" showLeading showTrailing />
        <Button appearance="solid" size="sm" variant="icon" aria-label="Icon sm" />
        <Button appearance="solid" size="md" variant="icon" aria-label="Icon md" />
        <Button appearance="solid" size="lg" variant="icon" aria-label="Icon lg" />
        <Button appearance="solid" size="md" loading label="در حال ارسال" />
        <Button appearance="solid" size="md" disabled label="غیرفعال" />
      </div>
    </div>
  ),
};
