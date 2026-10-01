import Image from "next/image";
import AvatarStack from "@/components/ui/AvatarStack";
import creator from "@/assets/features/student-tablet.png";
import squiggle from "@/assets/features/squiggle-spring.png";

const shadow = "shadow-[0_8px_30px_rgba(0,0,0,0.06)]";

export const CreatorCollage: React.FC = () => (
  <div className="relative mx-auto h-110 w-107 origin-top scale-[0.8] sm:scale-100">
    {/* Creator */}
    <Image
      src={creator}
      alt="Course creator with headphones holding a tablet"
      className="absolute left-10 top-0 z-10 w-100 select-none"
    />

    {/* Lime squiggle */}
    <Image
      src={squiggle}
      alt=""
      aria-hidden
      className="pointer-events-none absolute left-60 top-12 z-20 w-45 select-none"
    />

    {/* Total revenue */}
    <div className="absolute left-0 top-1 z-30 w-40 rounded-xl bg-[#0038E0] p-3 text-white">
      <p className="text-[10px]">Total Revenue</p>
      <p className="text-[7px] text-white/70">July 1-20</p>
      <p className="font-poppins mt-1 text-lg font-semibold leading-tight">
        $120.29
      </p>
      <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-white/30">
        <div className="h-full w-[60%] rounded-full bg-[#D4FB20]" />
      </div>
    </div>

    {/* Year to date */}
    <div className="absolute left-0 top-28 z-30 w-30 rounded-xl bg-[#0038E0] p-3 text-white">
      <p className="text-[10px]">Year to Date</p>
      <p className="text-[7px] text-white/70">2023</p>
      <p className="font-poppins mt-1 text-sm font-semibold leading-tight">
        $1,200.38
      </p>
      <span className="mt-1.5 inline-block rounded-full bg-[#D4FB20] px-1.5 py-px text-[8px] font-bold text-[#242528]">
        +10%
      </span>
    </div>

    {/* Happy students */}
    <div
      className={`absolute left-53.5 top-70 z-30 w-48 rounded-xl bg-white p-3 ${shadow}`}
    >
      <p className="text-[11px] font-medium text-[#242528]">Happy Students</p>
      <p className="mt-0.5 flex items-center gap-1 text-[8px] text-[#6B6D73]">
        4.8 <span className="text-[#9A9CA3]">(240)</span>
        <span className="text-[#D4FB20]" aria-hidden>
          ★
        </span>
      </p>
      <div className="mt-2">
        <AvatarStack count={6} badge="2K+" size={22} />
      </div>
    </div>
  </div>
);

export default CreatorCollage;
