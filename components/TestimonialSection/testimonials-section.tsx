import { testimonials, type Testimonial } from "@/data/testimonials";
import Image from "next/image";

const INTRO =
  "At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform. Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished creators.";

export function TestimonialsSection() {
  return (
    <section className="testimonials-canvas relative overflow-hidden">
      <div className="mx-auto flex w-full max-w-7xl flex-col justify-center px-8 py-16 sm:py-20 lg:px-10 lg:py-24">
        <header className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between lg:gap-16">
          <h2 className="w-max max-w-full shrink-0 text-3xl font-extrabold leading-none tracking-tight text-neutral-950 sm:text-4xl lg:text-5xl">
            Discover What Our
            <br />
            Community Is Saying
          </h2>
          <p className="max-w-xl text-sm leading-relaxed text-neutral-500 text-pretty lg:pt-1 lg:text-base">
            {INTRO}
          </p>
        </header>

        <ul className="mt-16 grid list-none grid-cols-1 gap-8 p-0 md:grid-cols-3 md:items-start lg:mt-20 lg:gap-10">
          {testimonials.map((item) => (
            <li key={item.name}>
              <TestimonialCard testimonial={item} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <article className="rounded-3xl bg-white p-8 shadow-[0_1px_2px_rgb(15_23_42/0.03),0_10px_28px_rgb(15_23_42/0.04)] transition-transform duration-200 ease-out motion-safe:hover:-translate-y-1">
      <Image
        src={testimonial.avatar}
        alt={testimonial.avatarAlt}
        width={80}
        height={80}
        className="size-20 rounded-full object-cover"
      />
      <h3 className="mt-6 text-base font-bold leading-snug text-neutral-950">
        {testimonial.name}
      </h3>
      <p className="mt-1 text-sm font-medium leading-snug text-[#3b6ce9]">
        {testimonial.role}
      </p>
      <p className="mt-10 text-sm leading-relaxed text-neutral-600 text-pretty">
        &quot;{testimonial.quote}&quot;
      </p>
    </article>
  );
}
