const COLORS = [
  "bg-rose-300",
  "bg-amber-300",
  "bg-sky-300",
  "bg-emerald-300",
  "bg-violet-300",
  "bg-orange-300",
  "bg-teal-300",
];

type AvatarStackProps = {
  /** Number of avatar circles to show */
  count?: number;
  /** Text inside the lime badge, e.g. "2K+" */
  badge: string;
  /** Avatar diameter in px */
  size?: number;
};

// Placeholder circles. Swap the <span> for <Image> once you have avatar assets.
export const AvatarStack: React.FC<AvatarStackProps> = ({
  count = 6,
  badge,
  size = 22,
}) => (
  <div className="flex items-center">
    {COLORS.slice(0, count).map((color, i) => (
      <span
        key={i}
        style={{ width: size, height: size }}
        className={`-ml-1.5 rounded-full border-2 border-white first:ml-0 ${color}`}
      />
    ))}
    <span
      style={{ width: size + 4, height: size + 4 }}
      className="-ml-1.5 flex items-center justify-center rounded-full bg-[#D4FB20] text-[8px] font-bold text-[#242528]"
    >
      {badge}
    </span>
  </div>
);

export default AvatarStack;
