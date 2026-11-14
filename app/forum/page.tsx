import type { Metadata } from "next";
import { ForumPageView } from "@/components/forum/ForumPageView";

export const metadata: Metadata = {
  title: "تالار گفت‌وگو و پرسش‌وپاسخ | ای‌آی تونل",
  description:
    "فضای پرسش‌وپاسخ، اشتراک تجربه‌های واقعی کاربران، پاسخ مدرسان با نشان متمایز و امتیاز مشارکت متصل به تخفیف تمدید اشتراک.",
};

export default function ForumPage() {
  return <ForumPageView />;
}
