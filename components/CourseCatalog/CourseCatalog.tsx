"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Filter, Signal, Shapes, ChevronDown, Star } from "lucide-react";
import { courseCategories, courses, type Course } from "@/data/courses";

const sortOptions = [
  "Most relevant",
  "Highest rated",
  "Newest",
  "Price: low to high",
] as const;

export function CourseCatalog() {
  const [category, setCategory] = useState<string>("Featured");
  const [sort, setSort] =
    useState<(typeof sortOptions)[number]>("Most relevant");
  const [sortOpen, setSortOpen] = useState(false);

  const filtered = useMemo(() => {
    let list =
      category === "Featured"
        ? courses.filter((c) => c.featured)
        : courses.filter((c) => c.category === category);

    // If a chip has no matches, fall back to all so the grid never looks empty
    if (list.length === 0) list = [...courses];

    // Always show 18 cards on Featured by filling from the full list
    if (category === "Featured") {
      const ids = new Set(list.map((c) => c.id));
      for (const c of courses) {
        if (list.length >= 18) break;
        if (!ids.has(c.id)) list.push(c);
      }
    }

    return list.slice(0, 18);
  }, [category]);

  return (
    <section className="bg-white px-6 py-12 lg:px-10 lg:py-16">
      <div className="mx-auto max-w-7xl">
        {/* Top controls */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-2">
            <ControlPill icon={<Filter className="size-4" />} label="Filter" />
            <ControlPill icon={<Signal className="size-4" />} label="Level" />
            <ControlPill
              icon={<Shapes className="size-4" />}
              label="Category"
            />
          </div>

          <div className="relative self-start sm:self-auto">
            <button
              type="button"
              onClick={() => setSortOpen((v) => !v)}
              className="flex h-10 items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 text-sm text-neutral-600 hover:border-neutral-300"
            >
              {sort}
              <ChevronDown className="size-4" />
            </button>
            {sortOpen && (
              <ul className="absolute right-0 z-20 mt-2 min-w-44 overflow-hidden rounded-2xl bg-white py-2 shadow-lg ring-1 ring-black/5">
                {sortOptions.map((option) => (
                  <li key={option}>
                    <button
                      type="button"
                      className="w-full px-4 py-2.5 text-left text-sm text-neutral-700 hover:bg-neutral-50"
                      onClick={() => {
                        setSort(option);
                        setSortOpen(false);
                      }}
                    >
                      {option}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* Category chips */}
        <div className="mt-6 flex gap-2 overflow-x-auto pb-2">
          {courseCategories.map((chip) => {
            const active = category === chip;
            return (
              <button
                key={chip}
                type="button"
                onClick={() => setCategory(chip)}
                className={
                  active
                    ? "shrink-0 rounded-full bg-[#D4F54C] px-4 py-2 text-sm font-medium text-neutral-900"
                    : "shrink-0 rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm text-neutral-500 hover:border-neutral-300 hover:text-neutral-800"
                }
              >
                {chip}
              </button>
            );
          })}
        </div>

        {/* Grid */}
        <ul className="mt-10 grid list-none grid-cols-1 gap-6 p-0 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((course) => (
            <li key={course.id}>
              <CourseCard course={course} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function ControlPill({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <button
      type="button"
      className="flex h-10 items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 text-sm text-neutral-600 hover:border-neutral-300"
    >
      {icon}
      {label}
    </button>
  );
}

function CourseCard({ course }: { course: Course }) {
  return (
    <article className="overflow-hidden rounded-3xl border border-neutral-100 bg-white shadow-[0_8px_30px_rgb(15_23_42/0.04)] transition-shadow hover:shadow-[0_12px_36px_rgb(15_23_42/0.08)]">
      <Link href={`/courses/${course.id}`} className="block">
        <div className="relative aspect-16/10 overflow-hidden">
          <Image
            src={course.image}
            alt={course.title}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>

        <div className="p-5">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <h3 className="truncate text-base font-semibold text-neutral-900">
                {course.title}
              </h3>
              <p className="mt-1 text-sm text-neutral-400">
                by {course.author}
              </p>
            </div>
            <div className="flex shrink-0 items-center gap-1 text-sm font-medium text-neutral-700">
              {course.rating.toFixed(1)}
              <Star className="size-3.5 fill-amber-400 text-amber-400" />
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1.5 text-sm text-neutral-500">
                <Signal className="size-3.5 text-[#3b6ce9]" />
                {course.level}
              </span>
              <span className="flex items-center gap-1.5">
                <span className="flex -space-x-2">
                  {[0, 1, 2].map((i) => (
                    <span
                      key={i}
                      className="inline-block size-6 rounded-full border-2 border-white bg-neutral-200"
                      style={{
                        backgroundImage: `url(https://i.pravatar.cc/48?img=${Number(course.id) + i})`,
                        backgroundSize: "cover",
                      }}
                    />
                  ))}
                </span>
                <span className="flex size-6 items-center justify-center rounded-full bg-[#D4F54C] text-[10px] font-semibold text-neutral-900">
                  {course.students}+
                </span>
              </span>
            </div>
          </div>

          <p className="mt-4 text-lg font-bold text-neutral-900">
            ${course.price}
            <span className="ml-1 text-sm font-normal text-neutral-400">
              lifetime
            </span>
          </p>
        </div>
      </Link>
    </article>
  );
}

function MetaChip({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full bg-black/55 px-2.5 py-1 text-[11px] font-medium text-white backdrop-blur-sm">
      {children}
    </span>
  );
}
