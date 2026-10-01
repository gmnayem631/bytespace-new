import LearnerCollage from "./LearnerCollage";
import CreatorCollage from "./CreatorCollage";

const STATS = [
  { value: "12K", label: "Students" },
  { value: "70+", label: "Courses" },
  { value: "16", label: "Creators" },
];

const BENEFITS = [
  "Share Your Expertise",
  "Monetize Your Passion",
  "Flexibility and Autonomy",
  "Build a Community",
];

const CheckIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    aria-hidden
    className="shrink-0"
  >
    <circle cx="8" cy="8" r="8" fill="#0038E0" />
    <path
      d="m4.6 8.2 2.2 2.2 4.6-4.6"
      stroke="#fff"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Heading = ({ children }: { children: React.ReactNode }) => (
  <h2 className="font-poppins text-3xl font-semibold leading-tight text-[#242528] md:text-[34px]">
    {children}
  </h2>
);

export const GrowthSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-[#F8F8F9] py-20">
      <div className="max-w-6xl mx-auto">
        {/* Soft gradient blobs */}
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -left-24 -top-24 h-105 w-105 rounded-full bg-[#D4FB20]/30 blur-[110px]" />
          <div className="absolute -right-24 top-0 h-105 w-105 rounded-full bg-[#B9C7FF]/40 blur-[110px]" />
          <div className="absolute -left-32 top-[40%] h-80 w-[320px] rounded-full bg-[#C4D2FF]/40 blur-[110px]" />
          <div className="absolute -bottom-24 left-0 h-95 w-95 rounded-full bg-[#D4FB20]/30 blur-[110px]" />
          <div className="absolute -bottom-24 -right-16 h-95 w-95 rounded-full bg-[#B9C7FF]/40 blur-[110px]" />
        </div>

        <div className="relative mx-auto flex max-w105 flex-col gap-24 px-6">
          {/* Row 1: text + learner collage */}
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <Heading>
                Your Path to Professional
                <br />
                Growth Starts Here!
              </Heading>
              <p className="mt-8 max-w-105 text-sm leading-6 text-[#6B6D73]">
                Explore our curated selection of courses tailored to enhance
                your capabilities and accelerate your career journey. Whether
                you are looking to sharpen specific skills, gain industry
                expertise, or embark on a new career path entirely, we have the
                resources you need.
              </p>
              <dl className="mt-8 flex gap-12">
                {STATS.map(({ value, label }) => (
                  <div key={label}>
                    <dt className="font-poppins text-2xl font-medium text-[#0038E0]">
                      {value}
                    </dt>
                    <dd className="mt-0.5 text-xs text-[#6B6D73]">{label}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <LearnerCollage />
          </div>

          {/* Row 2: creator collage + text (collage first on desktop only) */}
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="lg:order-2">
              <Heading>
                Create &amp; Manage
                <br />
                Courses Easily.
              </Heading>
              <p className="mt-8 max-w-105 text-sm leading-6 text-[#6B6D73]">
                <strong className="font-bold text-[#242528]">ByteSpace</strong>{" "}
                supports individuals or entities in the creation, publication,
                and administration of educational courses.
              </p>
              <ul className="mt-8 flex flex-col gap-4">
                {BENEFITS.map((benefit) => (
                  <li
                    key={benefit}
                    className="flex items-center gap-2.5 text-sm text-[#242528]"
                  >
                    <CheckIcon />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:order-1">
              <CreatorCollage />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrowthSection;
