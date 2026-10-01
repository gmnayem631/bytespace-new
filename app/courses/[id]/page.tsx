import { CourseDetails } from "@/components/CourseDetails/CourseDetails";
import { getCourseById } from "@/data/course-details";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function CourseDetailsPage({ params }: Props) {
  const { id } = await params;
  const course = getCourseById(id);

  if (!course) notFound();

  return <CourseDetails course={course} />;
}
