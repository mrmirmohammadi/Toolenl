import * as React from "react";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Input } from "../../components/ui";

const meta: Meta<typeof Input> = {
  title: "UI/Input",
  component: Input,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: {
    variant: {
      control: "select",
      options: ["text", "password", "phone", "money", "tag", "copy", "address", "pay"],
    },
    size: {
      control: "inline-radio",
      options: ["sm", "md", "lg"],
    },
    disabled: { control: "boolean" },
    required: { control: "boolean" },
    showLeadingIcon: { control: "boolean" },
    showTrailingIcon: { control: "boolean" },
  },
  args: {
    variant: "text",
    size: "md",
    label: "عنوان",
    subTitle: "زیر عنوان",
    required: true,
    placeholder: "مقدار",
    hint: "این متن برای راهنمایی کاربر است.",
    showLeadingIcon: true,
    showTrailingIcon: true,
    disabled: false,
  },
  decorators: [
    (Story) => (
      <div className="w-[340px]">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Playground: Story = {};

export const AllTypesAndStates: Story = {
  decorators: [
    (Story) => (
      <div className="w-full max-w-[720px]">
        <Story />
      </div>
    ),
  ],
  render: function InputShowcase() {
    const [tags, setTags] = React.useState(["کاربر اول", "ادمین"]);

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 rounded-xl bg-[var(--surface-sf-primary)]">
        <Input
          variant="text"
          size="md"
          label="متن ساده (Regular)"
          subTitle="زیر عنوان"
          required
          showLeadingIcon
          showTrailingIcon
          hint="این متن برای راهنمایی کاربر است."
        />
        <Input
          variant="text"
          size="md"
          label="حالت خطا (Error)"
          required
          defaultValue="مقدار اشتباه"
          error="لطفاً مقدار معتبر وارد کنید."
          showLeadingIcon
          showTrailingIcon
        />
        <Input
          variant="text"
          size="md"
          label="غیرفعال (Disabled)"
          required
          disabled
          defaultValue="مقدار غیرفعال"
          hint="امکان ویرایش وجود ندارد."
          showLeadingIcon
        />
        <Input
          variant="password"
          size="md"
          label="رمز عبور"
          required
          showLeadingIcon
          hint="حداقل ۸ کاراکتر وارد کنید."
        />
        <Input
          variant="phone"
          size="md"
          label="شماره موبایل"
          required
          hint="کد تایید به این شماره ارسال می‌شود."
        />
        <Input
          variant="money"
          size="md"
          label="مبلغ"
          required
          showTrailingIcon
          hint="مبلغ به ریال محاسبه می‌شود."
        />
        <Input
          variant="copy"
          size="md"
          label="آدرس دامنه (کپی)"
          required
          defaultValue="www.izmohmd.me"
          showTrailingIcon
        />
        <Input
          variant="address"
          size="md"
          label="آدرس دامنه"
          required
          defaultValue="www.izmohmd.me"
          showTrailingIcon
        />
        <Input
          variant="pay"
          size="md"
          label="شماره کارت"
          required
          showTrailingIcon
        />
        <Input
          variant="tag"
          size="md"
          label="کاربران (Enter برای افزودن)"
          required
          tags={tags}
          onTagsChange={setTags}
          showLeadingIcon
        />
      </div>
    );
  },
};
