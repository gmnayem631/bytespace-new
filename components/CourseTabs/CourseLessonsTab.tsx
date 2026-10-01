import type { CourseDetail } from "@/data/course-details";
import { PlayCircle } from "lucide-react";

export function CourseLessonsTab({ course }: { course: CourseDetail }) {
  return (
    <div className="mt-8 space-y-8">
      <div>
        <h2 className="text-lg font-semibold text-neutral-900">
          Explore the Modules
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-neutral-500">
          Immerse yourself in the course content as we break down each module
          into comprehensive lessons, providing practical insights and hands-on
          experiences.
        </p>
      </div>

      {/* Lesson List with Modules */}
      <div className="space-y-3">
        {course.lessons.map((lesson) => (
          <div
            key={lesson.id}
            className="flex items-start justify-between gap-4 rounded-2xl border border-neutral-100 bg-white p-4 shadow-sm transition hover:border-neutral-200"
          >
            <div className="flex items-start gap-3">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#D4F54C]/20 text-neutral-900">
                <PlayCircle className="size-5 text-neutral-900" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-neutral-900">
                  {lesson.id}: {lesson.title}
                </h3>
                <p className="mt-1 text-xs text-neutral-500">
                  Master the principles that drive impactful designs with
                  lessons such as foundational concepts and real-world
                  applications.
                </p>
              </div>
            </div>
            <span className="shrink-0 text-xs font-medium text-[#3b6ce9]">
              {lesson.duration}
            </span>
          </div>
        ))}
      </div>

      {/* Lesson Content Description */}
      <div>
        <h3 className="text-base font-semibold text-neutral-900">
          Lesson Content
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-neutral-500">
          Engage with each lesson through captivating video content, detailed
          manual explanations, interactive elements, download resources,
          complete assignments, and test your understanding with quizzes.
        </p>
      </div>

      {/* Lesson Progress Tracking */}
      <div className="rounded-2xl border border-neutral-100 bg-white p-6 shadow-sm">
        <h3 className="text-base font-semibold text-neutral-900">
          Lesson Progress Tracking
        </h3>
        <p className="mt-1 text-sm text-neutral-500">
          Witness your growth as you complete lessons, with an intuitive
          progress tracking feature guiding you through your learning journey.
        </p>
        <div className="mt-5">
          <div className="flex justify-between text-sm font-semibold text-neutral-900">
            <span>Learning Progress</span>
            <span>55%</span>
          </div>
          <div className="mt-2 h-2.5 w-full overflow-hidden rounded-full bg-neutral-100">
            <div
              className="h-full rounded-full bg-[#D4F54C]"
              style={{ width: "55%" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
