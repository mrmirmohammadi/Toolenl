import * as React from "react";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Checkbox } from "../../components/ui";

const meta: Meta<typeof Checkbox> = {
  title: "UI/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: {
    size: {
      control: "inline-radio",
      options: ["sm", "md", "lg"],
    },
    indeterminate: { control: "boolean" },
    disabled: { control: "boolean" },
    checked: { control: "boolean" },
  },
  args: {
    size: "md",
    label: "قوانین و مقررات را می‌پذیرم",
    defaultChecked: true,
    indeterminate: false,
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Playground: Story = {};

export const SizesAndStates: Story = {
  render: function CheckboxMatrix() {
    const [val, setVal] = React.useState(true);
    return (
      <div className="flex flex-col gap-5 p-4 rounded-xl bg-[var(--surface-sf-primary)]">
        <div className="flex items-center gap-6">
          <Checkbox size="sm" label="کوچک (sm)" />
          <Checkbox size="sm" defaultChecked label="انتخاب‌شده" />
          <Checkbox size="sm" indeterminate label="نیمه‌انتخاب" />
          <Checkbox size="sm" disabled label="غیرفعال" />
          <Checkbox size="sm" disabled defaultChecked label="غیرفعال انتخاب" />
        </div>
        <div className="flex items-center gap-6">
          <Checkbox size="md" label="متوسط (md)" />
          <Checkbox size="md" checked={val} onCheckedChange={setVal} label="کنترل‌شده" />
          <Checkbox size="md" indeterminate label="نیمه‌انتخاب" />
          <Checkbox size="md" disabled label="غیرفعال" />
          <Checkbox size="md" disabled defaultChecked label="غیرفعال انتخاب" />
        </div>
        <div className="flex items-center gap-6">
          <Checkbox size="lg" label="بزرگ (lg)" />
          <Checkbox size="lg" defaultChecked label="انتخاب‌شده" />
          <Checkbox size="lg" indeterminate label="نیمه‌انتخاب" />
          <Checkbox size="lg" disabled label="غیرفعال" />
          <Checkbox size="lg" disabled indeterminate label="غیرفعال خط‌تیره" />
        </div>
      </div>
    );
  },
};
