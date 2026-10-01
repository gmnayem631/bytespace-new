"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ByteSpaceLogo from "../logos/ByteSpaceLogo";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "Creators", href: "/creators" },
] as const;

export const Navbar: React.FC = () => {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="w-full bg-[#003BE2]">
      <nav className="relative z-20 mx-auto flex max-w-7xl items-center justify-between px-6 pt-8 text-sm text-white lg:px-10">
        <div className="flex items-center justify-center gap-1">
          <Link href="/" aria-label="ByteSpace home">
            <ByteSpaceLogo />
          </Link>
          <span className="text-2xl font-extrabold text-[#F5F5F6]">
            ByteSpace
          </span>
        </div>

        <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-6 md:flex">
          {NAV_LINKS.map(({ label, href }) => {
            const active = isActive(href);
            return (
              <li key={label}>
                <Link
                  href={href}
                  className={
                    active
                      ? "font-medium text-white"
                      : "text-white/80 hover:text-white"
                  }
                  aria-current={active ? "page" : undefined}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-5 text-white/80">
          <Link href="/login" className="hover:text-white">
            Sign In
          </Link>
          <Link href="/register" className="hover:text-white">
            Join Us
          </Link>
          <button aria-label="Cart" className="text-white hover:opacity-80">
            <svg width="16" height="18" viewBox="0 0 16 18" fill="none">
              <path
                d="M2.5 5.5h11l.9 10.2a.8.8 0 0 1-.8.8H2.4a.8.8 0 0 1-.8-.8L2.5 5.5Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
              <path
                d="M5.5 7V4.5a2.5 2.5 0 0 1 5 0V7"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
};
