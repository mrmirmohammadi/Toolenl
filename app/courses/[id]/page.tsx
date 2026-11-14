import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CourseDetailPageView } from "@/components/courses/CourseDetailPageView";
import {
  getAllCourseIds,
  getCourseDetailById,
} from "@/lib/data/course-details";

export function generateStaticParams() {
  return getAllCourseIds().map((id) => ({ id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const course = getCourseDetailById(id);
  if (!course) {
    return {
      title: "دوره پیدا نشد | ای‌آی تونل",
    };
  }
  return {
    title: `${course.title} | ای‌آی تونل`,
    description: course.outcome,
  };
}

export default async function SingleCourseDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const course = getCourseDetailById(id);

  if (!course) {
    notFound();
  }

  return <CourseDetailPageView course={course} />;
}
