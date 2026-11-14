import * as React from "react";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Toggle } from "../../components/ui";

const meta: Meta<typeof Toggle> = {
  title: "UI/Toggle",
  component: Toggle,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: {
    size: {
      control: "inline-radio",
      options: ["sm", "md", "lg"],
    },
    checked: { control: "boolean" },
    disabled: { control: "boolean" },
  },
  args: {
    size: "md",
    defaultChecked: true,
    label: "فعال‌سازی اعلان‌ها",
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof Toggle>;

export const Playground: Story = {};

export const SizesAndStates: Story = {
  render: function ToggleMatrix() {
    const [active, setActive] = React.useState(true);
    return (
      <div className="flex flex-col gap-5 p-4 rounded-xl bg-[var(--surface-sf-primary)]">
        <div className="flex items-center gap-6">
          <Toggle size="sm" label="کوچک (sm)" />
          <Toggle size="sm" defaultChecked label="روشن" />
          <Toggle size="sm" disabled label="غیرفعال" />
          <Toggle size="sm" disabled defaultChecked label="غیرفعال روشن" />
        </div>
        <div className="flex items-center gap-6">
          <Toggle size="md" checked={active} onCheckedChange={setActive} label="متوسط (md)" />
          <Toggle size="md" defaultChecked={false} label="خاموش" />
          <Toggle size="md" disabled label="غیرفعال" />
          <Toggle size="md" disabled defaultChecked label="غیرفعال روشن" />
        </div>
        <div className="flex items-center gap-6">
          <Toggle size="lg" label="بزرگ (lg)" />
          <Toggle size="lg" defaultChecked label="روشن" />
          <Toggle size="lg" disabled label="غیرفعال" />
          <Toggle size="lg" disabled defaultChecked label="غیرفعال روشن" />
        </div>
      </div>
    );
  },
};
