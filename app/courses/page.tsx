import type { Metadata } from "next";
import { CoursesCatalogPageView } from "@/components/courses/CoursesCatalogPageView";

export const metadata: Metadata = {
  title: "کاتالوگ دوره‌های جامع و مهارت‌محور | ای‌آی تونل",
  description:
    "جست‌وجو، فیلتر و مقایسه شفاف دوره‌های جامع هوش مصنوعی بر اساس موضوع، سطح و روش دسترسی (اشتراک جامع یا خرید تک‌دوره).",
};

export default function CoursesPage() {
  return <CoursesCatalogPageView />;
}
