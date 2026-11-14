import type { Metadata } from "next";
import { Geist, Geist_Mono, Vazirmatn } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const vazirmatn = Vazirmatn({
  variable: "--font-vazirmatn",
  subsets: ["arabic", "latin"],
});

export const metadata: Metadata = {
  title: "ای‌آی تونل (Toonel AI) · از یادگیری تا به‌کارگیری هوش مصنوعی",
  description:
    "هوش مصنوعی رو برای کاری که داری یاد بگیر؛ مسیر درست آموزش، ویدیوهای یک‌دقیقه‌ای و دوره‌های کاربردی بدون سردرگمی.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fa"
      dir="rtl"
      data-theme="user-light"
      className={`${geistSans.variable} ${geistMono.variable} ${vazirmatn.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-sf-primary text-text-primary">
        {children}
      </body>
    </html>
  );
}
