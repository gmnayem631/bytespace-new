"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Filter,
  Signal,
  ArrowUpDown,
  Star,
  BookOpen,
  Clock,
  MessageSquare,
} from "lucide-react";
import { mockCreator, type CreatorProfile } from "@/data/creator";

export default function CreatorProfilePage() {
  const [creator] = useState<CreatorProfile>(mockCreator);
  const [isFollowing, setIsFollowing] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Blue Hero Header Section */}
      <section className="relative overflow-hidden bg-[#003BE2]">
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

        <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-10 lg:px-10 lg:pb-28 lg:pt-12">
          {/* Creator Profile Info */}
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <div className="space-y-4 max-w-3xl">
              <div className="flex items-center gap-4">
                <div className="relative size-16 overflow-hidden rounded-2xl bg-white/20 shadow-inner sm:size-20">
                  <Image
                    src={creator.avatar}
                    alt={creator.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-3">
                    <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                      {creator.name}
                    </h1>
                    <span className="rounded-full bg-[#D4F54C] px-3 py-1 text-xs font-semibold text-neutral-900">
                      Creator
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-white/80">{creator.role}</p>
                </div>
              </div>

              <p className="text-sm leading-relaxed text-white/85 sm:text-base">
                {creator.bio}
              </p>

              {/* Stats & Follow Action Bar */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold text-neutral-900 shadow-sm">
                  <span>{creator.productCount} Products</span>
                </div>
                <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold text-neutral-900 shadow-sm">
                  <span>{creator.followerCount} Followers</span>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsFollowing(!isFollowing)}
              className={`inline-flex h-11 shrink-0 items-center justify-center rounded-full px-7 text-sm font-semibold transition ${
                isFollowing
                  ? "bg-white text-neutral-900"
                  : "bg-[#D4F54C] text-neutral-900 hover:opacity-90"
              }`}
            >
              {isFollowing ? "Following" : "Follow"}
            </button>
          </div>
        </div>
      </section>

      {/* Filter & Content Section */}
      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-10 lg:py-14">
        {/* Filter & Sort Bar */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-2 text-xs font-medium text-neutral-700 shadow-sm hover:border-neutral-300"
            >
              <Filter className="size-3.5 text-neutral-500" />
              Filter
            </button>
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-2 text-xs font-medium text-neutral-700 shadow-sm hover:border-neutral-300"
            >
              <Signal className="size-3.5 text-neutral-500" />
              Level
            </button>
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-2 text-xs font-medium text-neutral-700 shadow-sm hover:border-neutral-300"
            >
              <BookOpen className="size-3.5 text-neutral-500" />
              Category
            </button>
          </div>

          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-2 text-xs font-medium text-neutral-700 shadow-sm hover:border-neutral-300 self-start sm:self-auto"
          >
            <ArrowUpDown className="size-3.5 text-neutral-500" />
            Most relevant
          </button>
        </div>

        {/* Course Cards Grid (3 columns) */}
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {creator.courses.map((course) => (
            <Link
              key={course.id}
              href={`/courses/${course.id}`}
              className="group flex flex-col overflow-hidden rounded-3xl border border-neutral-100 bg-white p-4 shadow-[0_10px_30px_rgb(0,0,0,0.04)] transition hover:shadow-md"
            >
              {/* Thumbnail */}
              <div className="relative aspect-16/10 overflow-hidden rounded-2xl bg-neutral-100">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover transition duration-300 group-hover:scale-105"
                />
              </div>

              {/* Course Meta Info Bar */}
              <div className="mt-3 flex items-center justify-between text-[11px] text-neutral-400">
                <span className="flex items-center gap-1">
                  <BookOpen className="size-3 text-neutral-400" />{" "}
                  {course.lessonsCount} Lessons
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="size-3 text-neutral-400" />{" "}
                  {course.hoursCount} hours 16 mins
                </span>
                <span className="flex items-center gap-1">
                  <MessageSquare className="size-3 text-neutral-400" />{" "}
                  {course.commentsCount} Comments
                </span>
              </div>

              {/* Title & Rating */}
              <div className="mt-3 flex items-start justify-between gap-2">
                <h3 className="text-sm font-semibold text-neutral-900 group-hover:text-[#003BE2] transition">
                  {course.title}
                </h3>
                <div className="flex items-center gap-1 text-xs font-medium text-neutral-700 shrink-0">
                  <Star className="size-3.5 fill-amber-400 text-amber-400" />
                  {course.rating.toFixed(1)}
                </div>
              </div>

              <p className="mt-1 text-xs text-neutral-400">
                by <span className="text-neutral-600">{course.author}</span>
              </p>

              {/* Badges / Level & Students Stack */}
              <div className="mt-4 flex items-center justify-between border-t border-neutral-100 pt-3">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1 rounded-full bg-neutral-100 px-3 py-1 text-[11px] font-medium text-neutral-600">
                    <Signal className="size-3" /> {course.level}
                  </span>
                  {/* Overlapping student avatar previews */}
                  <div className="flex -space-x-1.5 overflow-hidden">
                    <div className="relative size-5 rounded-full border border-white bg-neutral-300" />
                    <div className="relative size-5 rounded-full border border-white bg-neutral-400" />
                    <div className="relative size-5 rounded-full border border-white bg-neutral-500" />
                    <span className="flex size-5 items-center justify-center rounded-full border border-white bg-[#D4F54C] text-[9px] font-bold text-neutral-900">
                      26+
                    </span>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-sm font-bold text-neutral-900">
                    ${course.price}
                  </span>
                  <span className="text-[10px] text-neutral-400">
                    /lifetime
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
