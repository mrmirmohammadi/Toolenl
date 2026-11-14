import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Badge } from "../../components/ui";

const meta: Meta<typeof Badge> = {
  title: "UI/Badge",
  component: Badge,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: {
    appearance: {
      control: "inline-radio",
      options: ["content", "shape"],
    },
    variant: {
      control: "inline-radio",
      options: ["solid", "subtle"],
    },
    color: {
      control: "select",
      options: ["default", "blue", "red", "neutral"],
    },
    size: {
      control: "inline-radio",
      options: ["default", "sm"],
    },
  },
  args: {
    value: "5",
    appearance: "content",
    variant: "solid",
    color: "blue",
    size: "default",
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Playground: Story = {};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4 p-4 rounded-xl bg-[var(--surface-sf-primary)]">
      <div className="flex items-center gap-3">
        <span className="text-label-sm w-32 text-[var(--content-text-secondary)]">Content Default:</span>
        <Badge appearance="content" variant="subtle" color="default" value="1" />
        <Badge appearance="content" variant="solid" color="blue" value="12" />
        <Badge appearance="content" variant="solid" color="red" value="99+" />
        <Badge appearance="content" variant="solid" color="neutral" value="3" />
      </div>

      <div className="flex items-center gap-3">
        <span className="text-label-sm w-32 text-[var(--content-text-secondary)]">Content Small:</span>
        <Badge appearance="content" variant="solid" color="blue" size="sm" value="1" />
        <Badge appearance="content" variant="solid" color="red" size="sm" value="4" />
        <Badge appearance="content" variant="solid" color="neutral" size="sm" value="8" />
      </div>

      <div className="flex items-center gap-3">
        <span className="text-label-sm w-32 text-[var(--content-text-secondary)]">Shape Dots:</span>
        <Badge appearance="shape" variant="subtle" color="default" />
        <Badge appearance="shape" variant="solid" color="blue" />
        <Badge appearance="shape" variant="solid" color="red" />
        <Badge appearance="shape" variant="solid" color="neutral" />
      </div>
    </div>
  ),
};
