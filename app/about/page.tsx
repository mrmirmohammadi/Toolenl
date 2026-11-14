import type { Metadata } from "next";
import { AboutPageView } from "@/components/about/AboutPageView";

export const metadata: Metadata = {
  title: "درباره ما و مانیفست برند | ای‌آی تونل",
  description:
    "داستان شکل‌گیری ای‌آی تونل توسط مهرنوش و وحیده، شش ارزش عملی برند و معرفی کاراکتر نِل به عنوان هم‌مسیر بدون فشار.",
};

export default function AboutPage() {
  return <AboutPageView />;
}
