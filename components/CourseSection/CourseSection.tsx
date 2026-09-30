import Image from "next/image";

type Course = {
  title: string;
  author: string;
  image: string; // path in /public, e.g. "/images/courses/figma.png"
  rating: number;
  level: string;
  price: number;
  lessons: number;
  duration: string;
  comments: number;
};

const COURSES: Course[] = [
  { title: "Learn Figma from Basic", image: "/images/courses/figma.png" },
  { title: "Build Digital Asset", image: "/images/courses/assets.png" },
  { title: "the Power of Big Data", image: "/images/courses/big-data.png" },
  {
    title: "Balancing Productivity and Life",
    image: "/images/courses/productivity.png",
  },
  { title: "Mastering Money Management", image: "/images/courses/money.png" },
  {
    title: "From Idea to Startup Success",
    image: "/images/courses/startup.png",
  },
].map((c) => ({
  ...c,
  author: "purepearl studio",
  rating: 4.5,
  level: "Beginner",
  price: 25,
  lessons: 17,
  duration: "2 hours 16 mins",
  comments: 59,
}));

const AVATAR_COLORS = [
  "bg-rose-300",
  "bg-amber-300",
  "bg-sky-300",
  "bg-emerald-300",
  "bg-violet-300",
];

const Pill = ({ children }: { children: React.ReactNode }) => (
  <span className="whitespace-nowrap rounded-full bg-white/50 px-2 py-1 text-[9px] text-[#6B6D73] backdrop-blur-sm">
    {children}
  </span>
);

const CourseCard: React.FC<{ course: Course }> = ({ course }) => (
  <article className="rounded-2xl border border-[#E4E4E7] bg-white p-2">
    {/* Thumbnail */}
    <div className="relative aspect-200/114 w-full overflow-hidden rounded-lg">
      <Image
        src={course.image}
        alt={course.title}
        fill
        sizes="(min-width: 1024px) 320px, (min-width: 640px) 45vw, 100vw"
        className="object-cover"
      />
      <div className="absolute inset-x-2 bottom-2 flex items-center justify-between gap-1">
        <Pill>{course.lessons} Lessons</Pill>
        <Pill>{course.duration}</Pill>
        <Pill>{course.comments} Comments</Pill>
      </div>
    </div>

    <div className="px-1.5 pb-3 pt-3">
      {/* Title + rating */}
      <div className="flex items-start justify-between gap-2">
        <h3 className="font-poppins truncate text-[15px] font-semibold leading-5 text-[#0A0A1A]">
          {course.title}
        </h3>
        <span className="flex shrink-0 items-center gap-1 text-xs text-[#6B6D73]">
          {course.rating}
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="#C9CACE"
            aria-hidden
          >
            <path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1L12 2Z" />
          </svg>
        </span>
      </div>
      <p className="mt-0.5 text-[9px] text-[#8A8C93]">
        by <span className="text-[#2F3A5F]">{course.author}</span>
      </p>

      {/* Level + avatars */}
      <div className="mt-4 flex items-center justify-between">
        <span className="flex h-7 items-center gap-1.5 rounded-lg bg-[#F4F4F5] px-2.5 text-[10px] text-[#3A3A3F]">
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="#8A8C93"
            aria-hidden
          >
            <rect x="0" y="6" width="2" height="4" rx=".5" />
            <rect x="4" y="3" width="2" height="7" rx=".5" />
            <rect x="8" y="0" width="2" height="10" rx=".5" />
          </svg>
          {course.level}
        </span>
        <div className="flex items-center">
          {AVATAR_COLORS.map((color, i) => (
            <span
              key={i}
              className={`-ml-1.5 h-5.5 w-5.5 rounded-full border-2 border-white first:ml-0 ${color}`}
            />
          ))}
          <span className="-ml-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-[#D4FB20] text-[8px] font-bold text-[#242528]">
            26+
          </span>
        </div>
      </div>

      {/* Price */}
      <p className="mt-3 flex items-baseline">
        <span className="font-poppins text-base font-semibold text-[#0038E0]">
          ${course.price}
        </span>
        <span className="text-[9px] text-[#8A8C93]">/lifetime</span>
      </p>
    </div>
  </article>
);

export const CourseSection: React.FC = () => (
  <section className="bg-white px-6 pb-16">
    <div className="mx-auto grid max-w-250 gap-x-6 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
      {COURSES.map((course) => (
        <CourseCard key={course.title} course={course} />
      ))}
    </div>
  </section>
);

export default CourseSection;
