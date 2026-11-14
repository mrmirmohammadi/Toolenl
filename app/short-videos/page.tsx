import type { Metadata } from "next";
import { ShortVideosPageView } from "@/components/short-videos/ShortVideosPageView";

export const metadata: Metadata = {
  title: "ویدیوهای کوتاه: یک کار، یک دقیقه | ای‌آی تونل",
  description:
    "آموزش‌های سریع و کاربردی هوش مصنوعی در قالب یک کار، یک دقیقه با پرامپت آماده کپی، اتصال به تالار گفت‌وگو و معرفی دوره‌های جامع.",
};

export default function ShortVideosPage() {
  return <ShortVideosPageView />;
}
