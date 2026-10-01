"use client";

import { useState } from "react";
import { Search, ChevronDown } from "lucide-react";

const courseFilters = [
  "All Courses",
  "Development",
  "Marketing",
  "Photography",
  "Business",
  "Design",
] as const;

export function CoursesHero() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<string>("Courses");
  const [open, setOpen] = useState(false);

  return (
    <section className="relative overflow-hidden bg-[#003BE2]">
      {/* Grid overlay */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.35) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.35) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative mx-auto flex max-w-5xl flex-col items-center px-6 pb-16 pt-10 sm:pb-20 sm:pt-14 lg:pb-24 lg:pt-16">
        <h1 className="text-center text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
          Find Your Next Course
        </h1>

        <form
          className="mt-8 flex w-full max-w-2xl flex-col items-stretch gap-3 sm:mt-10 sm:flex-row sm:items-center"
          onSubmit={(e) => {
            e.preventDefault();
            // wire search later
          }}
        >
          <label htmlFor="course-search" className="sr-only">
            Search courses
          </label>
          <div className="relative flex-1">
            <Search
              className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-neutral-400"
              strokeWidth={2}
            />
            <input
              id="course-search"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search"
              className="h-12 w-full rounded-full border-0 bg-white py-3 pl-12 pr-5 text-sm text-neutral-900 outline-none placeholder:text-neutral-400 shadow-sm"
            />
          </div>

          <div className="relative shrink-0">
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[#D4F54C] px-6 text-sm font-semibold text-neutral-900 transition-opacity hover:opacity-90 sm:w-auto"
              aria-haspopup="listbox"
              aria-expanded={open}
            >
              {filter === "All Courses" ? "Courses" : filter}
              <ChevronDown className="size-4" strokeWidth={2.5} />
            </button>

            {open && (
              <ul
                role="listbox"
                className="absolute right-0 z-20 mt-2 min-w-full overflow-hidden rounded-2xl bg-white py-2 shadow-lg ring-1 ring-black/5 sm:min-w-44"
              >
                {courseFilters.map((option) => (
                  <li key={option}>
                    <button
                      type="button"
                      role="option"
                      aria-selected={filter === option}
                      className="w-full px-4 py-2.5 text-left text-sm text-neutral-700 hover:bg-neutral-50"
                      onClick={() => {
                        setFilter(option);
                        setOpen(false);
                      }}
                    >
                      {option}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
