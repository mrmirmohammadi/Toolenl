import * as React from "react";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { NavigationBottom } from "../../components/ui";

const meta: Meta<typeof NavigationBottom> = {
  title: "UI/NavigationBottom",
  component: NavigationBottom,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: {
    value: {
      control: "inline-radio",
      options: ["home", "courses", "video", "account"],
    },
    showBackdrop: { control: "boolean" },
    showHomeIndicator: { control: "boolean" },
  },
  args: {
    defaultValue: "home",
    showBackdrop: true,
    showHomeIndicator: true,
  },
};

export default meta;
type Story = StoryObj<typeof NavigationBottom>;

export const Playground: Story = {
  decorators: [
    (Story) => (
      <div className="w-[384px]">
        <Story />
      </div>
    ),
  ],
};

export const AllStates: Story = {
  render: function NavigationBottomShowcase() {
    const [active, setActive] = React.useState("home");

    return (
      <div className="flex flex-col gap-6 p-6 rounded-xl bg-[var(--surface-sf-secondary)] w-[432px]">
        <div className="flex flex-col gap-2">
          <span className="text-label-sm font-mono text-[var(--content-text-secondary)]">
            Interactive ({active})
          </span>
          <NavigationBottom value={active} onChange={setActive} />
        </div>

        {(["home", "courses", "video", "account"] as const).map((tab) => (
          <NavigationBottom key={tab} value={tab} />
        ))}
      </div>
    );
  },
};
