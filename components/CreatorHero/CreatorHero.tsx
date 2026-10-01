import Image from "next/image";

export default function CreatorHero() {
  return (
    <section className="relative py-4 isolate min-h-54 overflow-hidden bg-[#0739d9]">
      {/* Grid background */}
      <div
        className="absolute inset-0 -z-10 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.22) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.22) 1px, transparent 1px)
          `,
          backgroundSize: "53px 53px",
        }}
      />

      {/* Top-left lime squiggle */}
      <Image
        src="/images/creator-hero/creator-squiggle-lime.png"
        alt=""
        width={334}
        height={199}
        className="
          absolute
          -left-17.5 -top-8.75
          w-34
          sm:-left-15 sm:-top-8.75
          sm:w-36
          lg:-left-16 lg:-top-10
          lg:w-39
        "
      />

      {/* Small white squiggle */}
      <Image
        src="/images/creator-hero/creator-squiggle-lime.png"
        alt=""
        width={334}
        height={199}
        className="
          absolute
          left-24 top-4
          w-12
          brightness-0 invert
          sm:left-26 sm:top-4.5
          sm:w-13
        "
      />

      {/* Top-right lime triangle */}
      <Image
        src="/images/creator-hero/creator-triangle-lime.png"
        alt=""
        width={190}
        height={189}
        className="
          absolute
          right-22.5 top-2.5
          w-15
          sm:right-27.5
          sm:w-17
        "
      />

      {/* Top-right white rounded shape */}
      <Image
        src="/images/creator-hero/creator-rounded-white.png"
        alt=""
        width={218}
        height={372}
        className="
          absolute
          -right-6 -top-2
          w-26
          sm:-right-7.5
          sm:w-29
        "
      />

      {/* Left white triangle */}
      <Image
        src="/images/creator-hero/creator-triangle-white.png"
        alt=""
        width={140}
        height={189}
        className="
          absolute
          -left-5 top-25
          w-19
          sm:-left-4
          sm:top-26
          sm:w-20.5
        "
      />

      {/* Bottom-left lime ring */}
      <Image
        src="/images/creator-hero/creator-ring-lime.png"
        alt=""
        width={346}
        height={190}
        className="
          absolute
          -left-4 -bottom-18
          w-30
          sm:-left-1
          sm:-bottom-19.5
          sm:w-34
        "
      />

      {/* Bottom-right lime squiggle */}
      <Image
        src="/images/creator-hero/creator-squiggle-lime.png"
        alt=""
        width={334}
        height={199}
        className="
          absolute
          -right-10 -bottom-17.5
          w-31
          rotate-[5deg]
          sm:-right-8.75
          sm:w-35
        "
      />

      <div className="relative z-10 mx-auto flex min-h-54 max-w-3/4 flex-col items-center justify-center px-8 text-center">
        <h1 className="max-w-3/4 text-2xl md:text-4xl font-bold leading-[1.15] tracking-[-0.4px] text-[#F5F5F6] ">
          Unlock Your Potential as a{/* <br /> */}
          Creator with ByteSpace
        </h1>

        <p className="mt-4  font-normal leading-normal text-[#F5F5F6] text-base">
          Experience the collaboration of numerous creators and an expanding
          selection of courses. Register now and become a part of a community
          comprising over 100,000 local and international creators. Utilize our
          Course Editor, and showcase your expertise by publishing your finest
          course on the ByteSpace Course Library.
        </p>

        <button
          type="button"
          className="
            mt-4
            rounded-full
            bg-[#d9ff00]
            px-4
            py-1.5
            text-lg
            font-medium
            text-[#111]
            transition
            hover:bg-[#c9ef00]
          "
        >
          Join as Creator
        </button>
      </div>
    </section>
  );
}
