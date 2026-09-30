import Image from "next/image";

import shapes from "@/assets/hero/shapes.png";
import student from "@/assets/hero/student.png";

const AVATAR_COLORS = [
  "bg-rose-300",
  "bg-amber-300",
  "bg-sky-300",
  "bg-emerald-300",
  "bg-violet-300",
  "bg-orange-300",
];

export const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-[#003BE2]">
      {/* Grid lines */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* 3D shapes */}
      <Image
        src={shapes}
        alt=""
        aria-hidden
        priority
        className="pointer-events-none absolute left-0 top-44 h-auto w-full select-none"
      />

      {/* Copy + search */}
      <div className="relative z-10 mx-auto mt-12 max-w-3xl px-6 text-center lg:mt-16">
        <h1 className="font-poppins text-4xl font-semibold leading-[1.2] text-white md:text-6xl lg:text-[64px]">
          Get Access to Hundreds Courses Available
        </h1>
        <p className="mx-auto mt-8 max-w-xl text-sm text-white/90 md:text-base">
          Unlock your creativity, gain valuable knowledge, and grow your
          business with our wide range of courses.
        </p>

        <form
          role="search"
          className="mx-auto mt-10 flex max-w-lg items-center justify-center gap-3"
        >
          <label className="flex h-11 flex-1 items-center gap-2 rounded-xl bg-white px-4">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className="shrink-0 text-gray-500"
            >
              <circle
                cx="7"
                cy="7"
                r="5"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="m11 11 3.5 3.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
            <input
              type="text"
              placeholder="Course, topic, creator"
              className="w-full bg-transparent text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none"
            />
          </label>
          <button
            type="submit"
            className="h-10 rounded-full bg-[#D4FB20] px-6 text-sm font-medium text-[#242528] transition hover:brightness-95"
          >
            Search
          </button>
        </form>
      </div>

      {/* Stage: lime circle + student + floating cards */}
      <div className="relative z-10 mx-auto mt-10 h-85 w-full max-w-275 overflow-hidden md:h-110 lg:mt-14 lg:h-125">
        {/* Lime half-circle */}
        <div className="absolute left-1/2 top-[7%] aspect-square w-[92%] -translate-x-1/2 rounded-full bg-[#D4FB20] md:w-[77%]" />

        {/* Student */}
        <Image
          src={student}
          alt="Smiling student with headphones holding a laptop"
          priority
          className="absolute bottom-0 left-1/2 h-auto w-[75%] max-w-155 translate-x-[-48%] select-none md:w-[52%]"
        />

        {/* Card: UI/UX Design */}
        <div className="absolute left-[4%] top-[14%] rounded-xl bg-white px-4 py-3 shadow-sm md:left-[22%] md:top-[18%]">
          <p className="text-sm font-medium text-[#242528]">UI/UX Design</p>
          <p className="mt-0.5 text-[10px] text-gray-400">
            200 Courses &nbsp;•&nbsp; 1000+ Students
          </p>
        </div>

        {/* Card: Learning Progress */}
        <div className="absolute right-[3%] top-[26%] w-44 rounded-xl bg-white p-4 shadow-sm md:right-auto md:left-[58%] md:top-[21%] md:w-52">
          <p className="text-xs text-[#242528]">Learning Progress</p>
          <p className="font-poppins mt-1 text-4xl font-semibold text-[#242528]">
            55%
          </p>
          <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-gray-200">
            <div className="h-full w-[55%] rounded-full bg-[#D4FB20]" />
          </div>
        </div>

        {/* Card: Happy Students */}
        <div className="absolute bottom-[12%] left-[3%] rounded-xl bg-white px-4 py-3 shadow-sm md:bottom-auto md:left-[16%] md:top-[60%]">
          <p className="text-sm font-medium text-[#242528]">Happy Students</p>
          <p className="mt-0.5 flex items-center gap-1 text-[11px] text-gray-500">
            4.5 <span className="text-gray-400">(240)</span>
            <span className="text-[#D4FB20]" aria-hidden>
              ★
            </span>
          </p>
          <div className="mt-2 flex items-center">
            {AVATAR_COLORS.map((color, i) => (
              <span
                key={i}
                className={`-ml-2 h-7 w-7 rounded-full border-2 border-white first:ml-0 ${color}`}
              />
            ))}
            <span className="-ml-2 flex h-8 w-8 items-center justify-center rounded-full bg-[#D4FB20] text-[10px] font-bold text-[#242528]">
              2K+
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
