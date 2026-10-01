"use client";

import ByteSpaceLogo from "@/components/logos/ByteSpaceLogo";
import Image from "next/image";
import Link from "next/link";

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-[#003BE2] relative overflow-hidden flex flex-col justify-between">
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

      {/* Main Container */}
      <div className="relative mx-auto max-w-7xl w-full px-6 py-12 lg:px-10 lg:py-20 flex-1 flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">
          {/* Left Column: Branding, Text & Collage Graphic */}
          <div className="space-y-8">
            {/* Logo */}
            <Link href="/" className="inline-block">
              <ByteSpaceLogo />
            </Link>

            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold tracking-tight text-white leading-tight">
                Sign up and come in
              </h1>
              <p className="text-sm sm:text-base text-white/80 max-w-md leading-relaxed">
                The registration process is straightforward, uncomplicated, and
                efficient, allowing users to sign up quickly, easily, and at no
                cost.
              </p>
            </div>

            {/* Collage Graphic Component */}
            <div className="relative w-full max-w-md pt-4">
              <div className="relative aspect-square w-full">
                <Image
                  src="/images/signin-hero-graphic.png"
                  alt="Auth Collage Graphic"
                  fill
                  priority
                  className="object-contain drop-shadow-2xl"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Sign Up White Card Form */}
          <div className="w-full max-w-lg mx-auto lg:ml-auto">
            <div className="rounded-[2.5rem] bg-white p-8 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.15)]">
              <div className="space-y-1">
                <span className="text-xs font-semibold text-[#003BE2] uppercase tracking-wider">
                  Create an Account
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900">
                  Welcome to ByteSpace
                </h2>
              </div>

              <form className="mt-8 space-y-5">
                {/* Full Name Field */}
                <div className="space-y-2">
                  <label className="block text-xs font-semibold text-neutral-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Jamie Davis"
                    className="w-full h-12 rounded-2xl border border-neutral-200 px-4 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-[#003BE2] focus:outline-none focus:ring-2 focus:ring-[#003BE2]/10 transition"
                  />
                </div>

                {/* Email Field */}
                <div className="space-y-2">
                  <label className="block text-xs font-semibold text-neutral-700">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="designer@example.com"
                    className="w-full h-12 rounded-2xl border border-neutral-200 px-4 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-[#003BE2] focus:outline-none focus:ring-2 focus:ring-[#003BE2]/10 transition"
                  />
                </div>

                {/* Password Field */}
                <div className="space-y-2">
                  <label className="block text-xs font-semibold text-neutral-700">
                    Password
                  </label>
                  <input
                    type="password"
                    placeholder="••••••••"
                    className="w-full h-12 rounded-2xl border border-neutral-200 px-4 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-[#003BE2] focus:outline-none focus:ring-2 focus:ring-[#003BE2]/10 transition"
                  />
                </div>

                {/* Continue Submit Button */}
                <button
                  type="submit"
                  className="w-full h-12 mt-4 rounded-full bg-[#D4F54C] text-sm font-semibold text-neutral-900 transition hover:opacity-90 shadow-sm flex items-center justify-center gap-2"
                >
                  Continue
                </button>
              </form>

              {/* Bottom Login Link */}
              <p className="mt-8 text-center text-xs text-neutral-500">
                Already have an account?{" "}
                <Link
                  href="/login"
                  className="font-semibold text-[#003BE2] hover:underline"
                >
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
