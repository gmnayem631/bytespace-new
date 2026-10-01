import Image from "next/image";
import student from "@/assets/features/student-laptop.png";
import squiggle from "@/assets/features/squiggle-zigzag.png";
import figma from "@/public/images/courses/figma.png";

const shadow = "shadow-[0_8px_30px_rgba(0,0,0,0.06)]";

export const LearnerCollage: React.FC = () => (
  <div className="relative mx-auto h-104 w-107 origin-top scale-[0.8] sm:scale-100">
    {/* Course card (partly covered by the student) */}
    <div
      className={`absolute left-0 top-0 z-10 w-70 rounded-2xl border border-[#E4E4E7] bg-white p-2.5 ${shadow}`}
    >
      <div className="relative h-28 w-full overflow-hidden rounded-lg">
        {/* Reuses the thumbnail from the course cards */}
        <Image
          src={figma}
          alt="Learn Figma from Basics"
          fill
          sizes="277px"
          className="object-cover"
        />
        <div className="absolute inset-x-2 bottom-2 flex gap-1.5">
          {["17 Lessons", "2 hours 16 mins"].map((t) => (
            <span
              key={t}
              className="whitespace-nowrap rounded-full bg-white/50 px-2 py-1 text-[9px] text-[#6B6D73] backdrop-blur-sm"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
      <h3 className="font-poppins mt-4 whitespace-nowrap text-[15px] font-semibold text-[#0A0A1A]">
        Learn Figma from Basic
      </h3>
      <p className="mt-0.5 text-[9px] text-[#8A8C93]">
        by <span className="text-[#2F3A5F]">purepearl studio</span>
      </p>
      <span className="mt-4 inline-flex h-7 items-center rounded-lg bg-[#F4F4F5] px-2.5 text-[10px] text-[#3A3A3F]">
        Beginner
      </span>
      <p className="mt-3 flex items-baseline">
        <span className="font-poppins text-base font-semibold text-[#0038E0]">
          $25
        </span>
        <span className="text-[9px] text-[#8A8C93]">/lifetime</span>
      </p>
    </div>

    {/* Lime squiggle */}
    <Image
      src={squiggle}
      alt=""
      aria-hidden
      className="pointer-events-none absolute left-72 top-8.5 z-20 w-45 select-none"
    />

    {/* Student */}
    <Image
      src={student}
      alt="Student with headphones holding a laptop"
      className="absolute left-0 top-3 z-30 w-5xl select-none"
    />

    {/* Learning progress card */}
    <div
      className={`absolute left-64 top-40 z-40 w-44 rounded-xl bg-white p-3.5 ${shadow}`}
    >
      <p className="text-[10px] text-[#242528]">Learning Progress</p>
      <p className="font-poppins mt-1 text-[30px] font-semibold leading-none text-[#242528]">
        55%
      </p>
      <div className="mt-2.5 h-1.5 w-full overflow-hidden rounded-full bg-gray-200">
        <div className="h-full w-[55%] rounded-full bg-[#D4FB20]" />
      </div>
    </div>
  </div>
);

export default LearnerCollage;
