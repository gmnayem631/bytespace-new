import { Star } from "lucide-react";
import Image from "next/image";
import type { CourseDetail } from "@/data/course-details";

const filterButtons = ["All rating", "5", "4", "3", "2", "1"];

const mockReviews = [
  {
    id: 1,
    name: "PurePearl Studio",
    role: "UI/UX Designer",
    date: "A year ago",
    rating: 5,
    avatar: "/images/avatar-1.jpg", // Replace with actual paths or course author avatar
    comment:
      "The course provides me with a comprehensive understanding of digital asset creation. The lessons are in-depth, practical, and immediately applicable to my work. Highly recommend!",
  },
  {
    id: 2,
    name: "Albert Flores",
    role: "UI/UX Designer",
    date: "A year ago",
    rating: 5,
    comment:
      "This course transformed my approach to digital design. The combination of theory, hands-on exercises, and real-world applications made it a truly enriching experience. Excited to implement what I've learned!",
  },
  {
    id: 3,
    name: "Cody Fisher",
    role: "UI/UX Designer",
    date: "A year ago",
    rating: 5,
    comment:
      "The project showcase and critique module created a collaborative environment where I could showcase my work, receive valuable feedback, and refine my skills. It added a unique and valuable dimension to the learning process.",
  },
  {
    id: 4,
    name: "Brooklyn Simmons",
    role: "UI/UX Designer",
    date: "A year ago",
    rating: 5,
    comment:
      "The lessons on optimizing digital assets for various platforms were particularly insightful. The course adapts to a working digital landscape, and the engaging content kept me motivated throughout.",
  },
];

export function CourseReviewsTab({ course }: { course: CourseDetail }) {
  return (
    <div className="mt-8 space-y-8">
      <div>
        <h2 className="text-lg font-semibold text-neutral-900">
          What Learners Are Saying
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-neutral-500">
          Discover what our learners have to say about their experience with{" "}
          {course.title}. Read reviews and insights from individuals who have
          embarked on the transformational journey of mastering digital asset
          creation.
        </p>
      </div>

      {/* Ratings Overview Card */}
      <div className="grid grid-cols-1 gap-6 rounded-2xl border border-neutral-100 bg-white p-6 shadow-sm sm:grid-cols-[200px_1fr] sm:items-center">
        <div className="flex flex-col items-center justify-center rounded-xl bg-[#D4F54C]/15 p-6 text-center">
          <span className="text-4xl font-bold text-neutral-900">
            {course.rating.toFixed(1)}
          </span>
          <div className="mt-1 flex gap-0.5 text-amber-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="size-4 fill-amber-400" />
            ))}
          </div>
          <span className="mt-1 text-xs text-neutral-500">
            {course.reviewCount} reviews
          </span>
        </div>

        <div className="space-y-2">
          {[
            { stars: 5, count: 120, width: "100%" },
            { stars: 4, count: 20, width: "25%" },
            { stars: 3, count: 5, width: "8%" },
            { stars: 2, count: 2, width: "4%" },
            { stars: 1, count: 1, width: "2%" },
          ].map((row) => (
            <div
              key={row.stars}
              className="flex items-center gap-3 text-xs text-neutral-600"
            >
              <div className="flex items-center gap-1 w-12">
                <span>{row.stars}</span>
                <Star className="size-3.5 fill-amber-400 text-amber-400" />
              </div>
              <div className="h-2 flex-1 overflow-hidden rounded-full bg-neutral-100">
                <div
                  className="h-full rounded-full bg-amber-400"
                  style={{ width: row.width }}
                />
              </div>
              <span className="w-8 text-right text-neutral-400">
                {row.count}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Filter Chips */}
      <div>
        <h3 className="text-sm font-semibold text-neutral-900">
          Individual Reviews:
        </h3>
        <div className="mt-3 flex flex-wrap gap-2">
          {filterButtons.map((btn, index) => (
            <button
              key={btn}
              type="button"
              className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-medium transition ${
                index === 0
                  ? "bg-[#D4F54C] text-neutral-900"
                  : "border border-neutral-200 bg-white text-neutral-700 hover:border-neutral-300"
              }`}
            >
              {index === 0 ? (
                btn
              ) : (
                <>
                  {btn}{" "}
                  <Star className="size-3 fill-amber-400 text-amber-400" />
                </>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Review Cards List */}
      <div className="space-y-4">
        {mockReviews.map((review) => (
          <div
            key={review.id}
            className="rounded-2xl border border-neutral-100 bg-white p-6 shadow-sm space-y-4"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="relative size-10 overflow-hidden rounded-full bg-neutral-200">
                  <Image
                    src={course.authorAvatar}
                    alt={review.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-neutral-900">
                    {review.name}
                  </h4>
                  <p className="text-xs text-neutral-400">{review.role}</p>
                </div>
              </div>
              <span className="text-xs text-neutral-400">{review.date}</span>
            </div>

            <div className="flex gap-1 text-amber-400">
              {[...Array(review.rating)].map((_, i) => (
                <Star key={i} className="size-4 fill-amber-400" />
              ))}
            </div>

            <p className="text-sm leading-relaxed text-neutral-600">
              &ldquo;{review.comment}&rdquo;
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
