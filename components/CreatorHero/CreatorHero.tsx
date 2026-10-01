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

      {/* ================= DECORATIONS ================= */}

      {/* Top-left lime squiggle */}
      <Image
        src="/images/creator-hero/creator-squiggle-lime.png"
        alt=""
        width={334}
        height={199}
        className="
          absolute
          -left-[70px] -top-[35px]
          w-[135px]
          sm:-left-[60px] sm:-top-[35px]
          sm:w-[145px]
          lg:-left-[65px] lg:-top-[40px]
          lg:w-[155px]
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
          left-[95px] top-[17px]
          w-[48px]
          brightness-0 invert
          sm:left-[105px] sm:top-[18px]
          sm:w-[52px]
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
          right-[90px] top-[10px]
          w-[60px]
          sm:right-[110px]
          sm:w-[68px]
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
          -right-[25px] -top-[8px]
          w-[105px]
          sm:-right-[30px]
          sm:w-[115px]
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
          -left-[20px] top-[100px]
          w-[75px]
          sm:-left-[15px]
          sm:top-[105px]
          sm:w-[82px]
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
          -left-[15px] bottom-[-72px]
          w-[120px]
          sm:-left-[5px]
          sm:bottom-[-78px]
          sm:w-[135px]
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
          -right-[40px] bottom-[-70px]
          w-[125px]
          rotate-[5deg]
          sm:-right-[35px]
          sm:w-[140px]
        "
      />

      {/* ================= CONTENT ================= */}

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
