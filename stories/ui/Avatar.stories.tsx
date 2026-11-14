import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Avatar, type AvatarSize } from "../../components/ui";

const DEMO_AVATAR_SVG =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#875bf7"/>
          <stop offset="100%" stop-color="#5b7cff"/>
        </linearGradient>
      </defs>
      <rect width="128" height="128" fill="url(#g)"/>
      <circle cx="64" cy="48" r="22" fill="#ffffff" fill-opacity="0.9"/>
      <path d="M24 114c6-24 22-36 40-36s34 12 40 36" fill="#ffffff" fill-opacity="0.9"/>
    </svg>`
  );

const meta: Meta<typeof Avatar> = {
  title: "UI/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: {
    size: {
      control: "select",
      options: ["3xs", "2xs", "xs", "sm", "md", "lg", "xl"],
    },
    mode: {
      control: "inline-radio",
      options: ["image", "text", "icon"],
    },
  },
  args: {
    size: "lg",
    mode: "text",
    name: "علی محمدی",
    text: "AM",
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Playground: Story = {};

const SIZES: AvatarSize[] = ["3xs", "2xs", "xs", "sm", "md", "lg", "xl"];

export const AllSizesAndModes: Story = {
  render: () => (
    <div className="flex flex-col gap-5 p-4 rounded-xl bg-[var(--surface-sf-primary)]">
      <div className="flex items-center gap-4">
        <span className="text-label-sm w-20 text-[var(--content-text-secondary)]">Image:</span>
        {SIZES.map((size) => (
          <Avatar key={size} size={size} mode="image" src={DEMO_AVATAR_SVG} alt={`Avatar ${size}`} />
        ))}
      </div>
      <div className="flex items-center gap-4">
        <span className="text-label-sm w-20 text-[var(--content-text-secondary)]">Text:</span>
        {SIZES.map((size) => (
          <Avatar key={size} size={size} mode="text" text="AB" />
        ))}
      </div>
      <div className="flex items-center gap-4">
        <span className="text-label-sm w-20 text-[var(--content-text-secondary)]">Icon:</span>
        {SIZES.map((size) => (
          <Avatar key={size} size={size} mode="icon" />
        ))}
      </div>
    </div>
  ),
};
