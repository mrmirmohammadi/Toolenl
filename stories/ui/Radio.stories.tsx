import * as React from "react";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Radio } from "../../components/ui";

const meta: Meta<typeof Radio> = {
  title: "UI/Radio",
  component: Radio,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: {
    size: {
      control: "inline-radio",
      options: ["sm", "md", "lg"],
    },
    disabled: { control: "boolean" },
    checked: { control: "boolean" },
  },
  args: {
    size: "md",
    label: "گزینه انتخابی",
    defaultChecked: true,
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof Radio>;

export const Playground: Story = {};

export const SizesAndStates: Story = {
  render: function RadioMatrix() {
    const [selected, setSelected] = React.useState("a");
    return (
      <div className="flex flex-col gap-5 p-4 rounded-xl bg-[var(--surface-sf-primary)]">
        <div className="flex items-center gap-6">
          <Radio size="sm" name="sm-group" label="کوچک (sm)" />
          <Radio size="sm" name="sm-group" defaultChecked label="انتخاب‌شده" />
          <Radio size="sm" disabled label="غیرفعال" />
          <Radio size="sm" disabled defaultChecked label="غیرفعال انتخاب" />
        </div>
        <div className="flex items-center gap-6">
          <Radio
            size="md"
            name="md-group"
            checked={selected === "a"}
            onCheckedChange={() => setSelected("a")}
            label="گزینه اول (md)"
          />
          <Radio
            size="md"
            name="md-group"
            checked={selected === "b"}
            onCheckedChange={() => setSelected("b")}
            label="گزینه دوم (md)"
          />
          <Radio size="md" disabled label="غیرفعال" />
          <Radio size="md" disabled defaultChecked label="غیرفعال انتخاب" />
        </div>
        <div className="flex items-center gap-6">
          <Radio size="lg" name="lg-group" label="بزرگ (lg)" />
          <Radio size="lg" name="lg-group" defaultChecked label="انتخاب‌شده" />
          <Radio size="lg" disabled label="غیرفعال" />
          <Radio size="lg" disabled defaultChecked label="غیرفعال انتخاب" />
        </div>
      </div>
    );
  },
};
