import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { InstructorProfilePageView } from "@/components/instructors/InstructorProfilePageView";
import {
  getAllInstructorSlugs,
  getInstructorProfileBySlug,
} from "@/lib/data/instructors";

export function generateStaticParams() {
  return getAllInstructorSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const instructor = getInstructorProfileBySlug(slug);
  if (!instructor) {
    return {
      title: "مدرس پیدا نشد | ای‌آی تونل",
    };
  }
  return {
    title: `${instructor.name} — ${instructor.role} | ای‌آی تونل`,
    description: instructor.shortBio,
  };
}

export default async function InstructorPublicProfilePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const instructor = getInstructorProfileBySlug(slug);

  if (!instructor) {
    notFound();
  }

  return <InstructorProfilePageView instructor={instructor} />;
}
