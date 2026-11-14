import type { Metadata } from "next";
import { MyPathwayPageView } from "@/components/pathway/MyPathwayPageView";

export const metadata: Metadata = {
  title: "مسیر یادگیری من و داشبورد دانشجو | ای‌آی تونل",
  description:
    "مدیریت هدف، چیدمان دوره‌ها، پیشنهادهای زمان‌بندی‌شده دستیار نِل، پیگیری پیشرفت، امتیاز تخفیف تمدید و گواهی‌های دیجیتال.",
};

export default function MyPathwayPage() {
  return <MyPathwayPageView />;
}
