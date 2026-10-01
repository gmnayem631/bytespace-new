import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex-1 bg-white">
      {/* Blue Hero Grid Section matching the screenshot */}
      <section className="relative overflow-hidden bg-[#003BE2] py-24 lg:py-36">
        {/* Background Grid Pattern */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.16]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.35) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.35) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />

        <div className="relative mx-auto max-w-5xl px-6 text-center lg:px-10">
          {/* Giant 404 Neon Lime-Green Text */}
          <div className="relative select-none">
            <span className="block text-[120px] font-black tracking-wider text-[#D4F54C] sm:text-[180px] lg:text-[220px] leading-none opacity-90 drop-shadow-sm">
              404
            </span>
          </div>

          {/* Heading */}
          <h1 className="mt-4 text-2xl font-bold tracking-tight text-white sm:text-4xl lg:text-[2.5rem]">
            The page you are looking for doesn’t exist
          </h1>

          {/* Subtitle description */}
          <p className="mt-4 text-sm text-white/80 sm:text-base">
            Try to use a correct url or go back to homepage to start again
          </p>

          {/* Back to Home CTA Button */}
          <div className="mt-8">
            <Link
              href="/"
              className="inline-flex h-12 items-center justify-center rounded-full bg-[#D4F54C] px-8 text-sm font-semibold text-neutral-900 transition hover:opacity-90 shadow-lg"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
