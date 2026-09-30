import type { ComponentType, SVGProps } from "react";

// Adjust these names/paths to match the files in /components/logos
import Logoipsum1 from "@/components/logos/Logoipsum1";
import Logoipsum2 from "@/components/logos/Logoipsum2";
import Logoipsum3 from "@/components/logos/Logoipsum3";
import Logoipsum4 from "@/components/logos/Logoipsum4";
import Logoipsum5 from "@/components/logos/Logoipsum5";

type Logo = { name: string; Component: ComponentType<SVGProps<SVGSVGElement>> };

const LOGOS: Logo[] = [
  { name: "Logoipsum 1", Component: Logoipsum1 },
  { name: "Logoipsum 2", Component: Logoipsum2 },
  { name: "Logoipsum 3", Component: Logoipsum3 },
  { name: "Logoipsum 4", Component: Logoipsum4 },
  { name: "Logoipsum 5", Component: Logoipsum5 },
];

export const LogoStrip: React.FC = () => {
  return (
    <section className="bg-[#F4F4F5]" aria-label="Trusted by">
      <ul className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-11.25 gap-y-6 px-6 py-12.5 text-[#8A8C93]">
        {LOGOS.map(({ name, Component }) => (
          <li
            key={name}
            className="flex gap-2 h-6.5 items-center text-[#82868E] font-black text-xl"
          >
            <Component
              aria-label={name}
              className="h-full w-auto"
              fill="currentColor"
            />
            Logoipsum
          </li>
        ))}
      </ul>
    </section>
  );
};

export default LogoStrip;
