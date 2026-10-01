"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold tracking-tight text-white leading-tight">
                Sign in with ease
              </h1>
              <p className="text-sm sm:text-base text-white/80 max-w-md leading-relaxed">
                Experience a seamless and efficient sign-in process that grants
                you instant access to a world of knowledge.
              </p>
            </div>

            {/* Collage Graphic Component  */}
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

          {/* Right Column: Sign In White Card Form */}
          <div className="w-full max-w-lg mx-auto lg:ml-auto">
            <div className="rounded-[2.5rem] bg-white p-8 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.15)]">
              <div className="space-y-1">
                <span className="text-xs font-semibold text-[#003BE2] uppercase tracking-wider">
                  Sign In
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900">
                  Welcome Back
                </h2>
              </div>

              <form className="mt-8 space-y-5">
                {/* Email Field */}
                <div className="space-y-2">
                  <label className="block text-xs font-semibold text-neutral-700">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full h-12 rounded-2xl border border-neutral-200 px-4 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-[#003BE2] focus:outline-none focus:ring-2 focus:ring-[#003BE2]/10 transition"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full h-12 mt-2 rounded-full bg-[#D4F54C] text-sm font-semibold text-neutral-900 transition hover:opacity-90 shadow-sm flex items-center justify-center gap-2"
                >
                  Sign In
                </button>
              </form>

              {/* Divider */}
              <div className="relative my-8 text-center">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-neutral-200" />
                </div>
                <span className="relative bg-white px-4 text-xs text-neutral-400 uppercase tracking-wider">
                  or
                </span>
              </div>

              {/* Social Login Buttons */}
              <div className="flex items-center justify-center gap-4">
                <button
                  type="button"
                  aria-label="Sign in with Facebook"
                  className="size-12 rounded-full border border-neutral-200 flex items-center justify-center hover:bg-neutral-50 transition shadow-sm"
                >
                  <svg className="size-5 fill-neutral-800" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </button>

                <button
                  type="button"
                  aria-label="Sign in with Google"
                  className="size-12 rounded-full border border-neutral-200 flex items-center justify-center hover:bg-neutral-50 transition shadow-sm"
                >
                  <svg className="size-5" viewBox="0 0 24 24">
                    <path
                      fill="#4285F4"
                      d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.19v3.15C3.17 21.32 7.28 24 12 24z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.19C.43 8.1 0 9.81 0 12s.43 3.9 1.19 5.42l4.09-3.15z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.28 0 3.17 2.68 1.19 6.58l4.09 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
                    />
                  </svg>
                </button>
              </div>

              {/* Bottom Sign Up Link */}
              <p className="mt-8 text-center text-xs text-neutral-500">
                New user?{" "}
                <Link
                  href="/register"
                  className="font-semibold text-[#003BE2] hover:underline"
                >
                  Create an account
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
