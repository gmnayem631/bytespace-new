"use client";

import { useState } from "react";

const ROWS: string[][] = [
  [
    "Featured",
    "Music",
    "Drawing & Painting",
    "Marketing",
    "Animation",
    "Social Media",
    "UI/UX Design",
    "Creative Marketing",
  ],
  [
    "Digital Illustration",
    "Film & Video",
    "Crafts",
    "Freelance & Entrepreneurship",
    "Graphic Design",
    "Photography",
  ],
  ["Productivity", "Web Development", "Data Science", "Cooking"],
];

export const CategorySection: React.FC = () => {
  const [active, setActive] = useState("Featured");

  return (
    <section className="bg-white px-6 py-14 lg:py-14">
      <div className="mx-auto max-w-6xl text-center">
        <h2 className="font-poppins text-3xl font-semibold leading-[1.1] text-[#0A0A1A] md:text-4xl md:leading-10">
          Discover Your Passion,
          <br />
          Build Your Skills
        </h2>

        <p className="mx-auto mt-4 max-w-172 text-sm leading-6 text-[#8A8C93]">
          At ByteSpace Courses, we bring you closer to life-changing knowledge.
          Explore a variety of courses across different fields, from technology
          to the arts, and make a difference in your career and life.
        </p>

        <div className="mt-7.5 flex flex-col gap-4">
          {ROWS.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="flex flex-wrap items-center justify-center gap-3"
            >
              {row.map((label) => {
                const isActive = label === active;
                return (
                  <button
                    key={label}
                    type="button"
                    onClick={() => setActive(label)}
                    aria-pressed={isActive}
                    className={`h-8 rounded-full px-3 text-[13px] text-[#3A3A3F] transition-colors ${
                      isActive
                        ? "bg-[#D4FB20] font-medium text-[#0A0A1A]"
                        : "bg-[#F4F4F5] hover:bg-[#EAEAEC]"
                    }`}
                  >
                    {label}
                  </button>
                );
              })}

              {rowIndex === ROWS.length - 1 && (
                <button
                  type="button"
                  className="ml-1 text-[13px] text-[#0038E0] hover:underline"
                >
                  + More
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
