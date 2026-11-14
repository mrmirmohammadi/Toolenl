import * as React from "react";
import { NavigationBottom } from "@/components/ui";
import { HomeHeader } from "./HomeHeader";
import { HomeHero } from "./HomeHero";
import { ThreeStepPath } from "./ThreeStepPath";
import { ShortVideosSection } from "./ShortVideosSection";
import { CoursesSection } from "./CoursesSection";
import { HomeFooter } from "./HomeFooter";

export function HomePageView() {
  return (
    <div id="top" className="min-h-screen bg-[var(--surface-sf-primary)] text-[var(--content-text-primary)] pb-24 md:pb-0">
      <HomeHeader />
      <main>
        <HomeHero />
        <ThreeStepPath />
        <ShortVideosSection />
        <CoursesSection />
      </main>
      <HomeFooter />

      {/* Mobile bottom navigation pill aligned with design system */}
      <div className="fixed inset-x-0 bottom-0 z-30 flex justify-center pointer-events-none md:hidden">
        <div className="pointer-events-auto w-full flex justify-center">
          <NavigationBottom showBackdrop showHomeIndicator={false} />
        </div>
      </div>
    </div>
  );
}
