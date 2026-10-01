import DesignCat from "../logos/DesignCat";
import DevCat from "../logos/DevCat";
import ITCat from "../logos/ITCat";
import BusinessCat from "../logos/BusinessCat";
import MarketingCat from "../logos/MarketingCat";
import Photography from "../logos/Photography";
import { ComponentType, SVGProps } from "react";

const CourseCategories = () => {
  type logo = {
    name: string;
    Component: ComponentType<SVGProps<SVGSVGElement>>;
  };

  const CATEGORIES: logo[] = [
    { name: "Design", Component: DesignCat },
    { name: "Development", Component: DevCat },
    { name: "IT & Software", Component: ITCat },
    { name: "Business", Component: BusinessCat },
    { name: "Marketing", Component: MarketingCat },
    { name: "Photography", Component: Photography },
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex text-center flex-col gap-4 w-3/4 mx-auto">
        <h3 className="font-poppins font-semibold text-2xl md:text-3xl lg:text-4xl">
          Explore Diverse Learning Paths at ByteSpace
        </h3>
        <p className="text-[#82868E] text-base">
          At ByteSpace, we believe in empowering individuals through knowledge.
          Our diverse range of courses spans various fields, ensuring
          there&apos;s something for everyone. Unleash your potential and
          explore our carefully curated categories.
        </p>
      </div>

      <section className="bg-white px-6 py-12">
        <ul className="mx-auto flex max-w-6xl flex-wrap justify-around gap-2">
          {CATEGORIES.map(({ name, Component }) => (
            <li key={name}>
              <button
                type="button"
                className="flex h-25 w-25 flex-col items-center justify-center gap-4 rounded-[20px] border border-[#E4E4E7] bg-white transition hover:border-[#D4FB20] hover:shadow-sm"
              >
                <span className="flex size-9 items-center justify-center rounded-full bg-[#D4FB20] text-[#1E1E1E] px-2 py-2">
                  <Component
                    aria-hidden
                    className="size-6"
                    fill="currentColor"
                  />
                </span>
                <span className="text-[13px] leading-none text-[#242528]">
                  {name}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default CourseCategories;
