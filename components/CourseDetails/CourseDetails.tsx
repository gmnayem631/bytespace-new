"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Share2,
  Star,
  Users,
  Signal,
  Play,
  BookOpen,
  Clapperboard,
  Award,
  MessageCircle,
  CheckCircle2,
  FileText,
} from "lucide-react";
import type { CourseDetail } from "@/data/course-details";
import { CourseReviewsTab } from "../CourseTabs/CourseReviewsTab";
import { CourseLessonsTab } from "../CourseTabs/CourseLessonsTab";

const tabs = ["About", "Lessons", "Reviews"] as const;

export function CourseDetails({ course }: { course: CourseDetail }) {
  const [tab, setTab] = useState<(typeof tabs)[number]>("About");

  return (
    <div className="bg-white">
      {/* Blue hero */}
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

        <div className="relative mx-auto max-w-7xl px-6 pb-28 pt-10 lg:px-10 lg:pb-36 lg:pt-12">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-3xl">
              <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[2.5rem] lg:leading-tight">
                {course.title}
              </h1>
              <p className="mt-3 text-base text-white/85 sm:text-lg">
                {course.subtitle}
              </p>
              <p className="mt-4 text-sm text-white/70">
                by{" "}
                <span className="font-medium text-white">{course.author}</span>
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                <Pill>
                  <Signal className="size-3.5" />
                  {course.level}
                </Pill>
                <Pill>
                  <Star className="size-3.5 fill-amber-300 text-amber-300" />
                  {course.rating.toFixed(1)} ({course.reviewCount} reviews)
                </Pill>
                <Pill>
                  <Users className="size-3.5" />
                  {course.students} Students
                </Pill>
              </div>
            </div>

            <button
              type="button"
              className="inline-flex h-11 shrink-0 items-center justify-center gap-2 self-start rounded-full bg-[#D4F54C] px-5 text-sm font-semibold text-neutral-900 hover:opacity-90"
            >
              <Share2 className="size-4" />
              Share
            </button>
          </div>
        </div>
      </section>

      {/* Overlapping media + sidebar */}
      <section className="relative z-10 mx-auto -mt-20 max-w-7xl px-6 lg:-mt-28 lg:px-10">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_340px] lg:items-start">
          {/* Preview */}
          <div className="overflow-hidden rounded-3xl bg-neutral-100 shadow-lg ring-1 ring-black/5">
            <div className="relative aspect-16/10">
              <Image
                src={course.previewImage}
                alt={course.title}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 66vw"
              />
              <button
                type="button"
                aria-label="Play preview"
                className="absolute left-1/2 top-1/2 flex size-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl bg-black/45 text-white backdrop-blur-sm transition hover:bg-black/55"
              >
                <Play className="size-7 fill-white" />
              </button>
            </div>
          </div>

          {/* Sidebar card */}
          <aside className="rounded-3xl border border-neutral-100 bg-white p-6 shadow-[0_16px_40px_rgb(15_23_42/0.08)] lg:sticky lg:top-6">
            <h2 className="text-base font-semibold text-neutral-900">
              {course.totalLessons} Lessons ({course.totalHours} hours)
            </h2>

            <ul className="mt-4 space-y-3">
              {course.lessons.map((lesson) => (
                <li
                  key={lesson.id}
                  className="flex items-start justify-between gap-3 text-sm"
                >
                  <span className="text-neutral-600">
                    <span className="mr-2 text-neutral-400">{lesson.id}</span>
                    {lesson.title}
                  </span>
                  <span className="shrink-0 text-[#3b6ce9]">
                    {lesson.duration}
                  </span>
                </li>
              ))}
            </ul>

            <p className="mt-3 text-sm text-neutral-400">
              {course.moreVideos} more videos
            </p>

            <p className="mt-5 text-sm text-neutral-500">
              Ready to Dive In? Enroll Now and Start Building Your Digital
              Future!
            </p>

            <p className="mt-4 text-3xl font-bold text-neutral-900">
              ${course.price}
              <span className="ml-1 text-sm font-normal text-neutral-400">
                /lifetime
              </span>
            </p>

            <button
              type="button"
              className="mt-4 flex h-12 w-full items-center justify-center rounded-full bg-[#D4F54C] text-sm font-semibold text-neutral-900 transition hover:opacity-90"
            >
              Enroll Now
            </button>

            <div className="mt-8">
              <h3 className="text-sm font-semibold text-neutral-900">
                This course include
              </h3>
              <ul className="mt-4 space-y-3">
                {course.includes.map((item) => (
                  <li
                    key={item.label}
                    className="flex items-center gap-3 text-sm text-neutral-600"
                  >
                    <IncludeIcon type={item.icon} />
                    {item.label}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 border-t border-neutral-100 pt-6">
              <div className="flex items-center gap-3">
                <div className="relative size-12 overflow-hidden rounded-full bg-neutral-200">
                  <Image
                    src={course.authorAvatar}
                    alt={course.author}
                    fill
                    className="object-cover"
                    sizes="48px"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold text-neutral-900">
                    {course.author}
                  </p>
                  <p className="text-xs text-neutral-400">
                    {course.authorRole}
                  </p>
                </div>
              </div>
              <p className="mt-4 text-sm text-neutral-500">
                Ready to Dive In? Enroll Now and Start Building Your Digital
                Future!
              </p>
              <Link
                href={`/creators/${course.author}`}
                className="mt-4 inline-flex h-10 items-center justify-center rounded-full border border-neutral-200 px-4 text-sm text-neutral-700 hover:border-neutral-300"
              >
                See Full Profile
              </Link>
            </div>
          </aside>
        </div>
      </section>

      {/* Tabs + body */}
      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-10 lg:py-16">
        <div className="max-w-3xl">
          <div className="flex flex-wrap gap-2">
            {tabs.map((item) => {
              const active = tab === item;
              return (
                <button
                  key={item}
                  type="button"
                  onClick={() => setTab(item)}
                  className={
                    active
                      ? "rounded-full bg-[#D4F54C] px-4 py-2 text-sm font-medium text-neutral-900"
                      : "rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm text-neutral-500 hover:border-neutral-300"
                  }
                >
                  {item}
                </button>
              );
            })}
          </div>

          {tab === "About" && (
            <div className="mt-8">
              <h2 className="text-lg font-semibold text-neutral-900">
                Description
              </h2>
              <div className="mt-4 space-y-4 text-sm leading-relaxed text-neutral-500">
                {course.description.map((paragraph) => (
                  <p key={paragraph.slice(0, 24)}>{paragraph}</p>
                ))}
              </div>

              <h2 className="mt-10 text-lg font-semibold text-neutral-900">
                Sneak Peak
              </h2>
              <ul className="mt-4 grid list-none grid-cols-2 gap-3 p-0 sm:grid-cols-4">
                {course.sneakPeaks.map((src, index) => (
                  <li
                    key={src}
                    className="relative aspect-4/3 overflow-hidden rounded-2xl bg-neutral-100"
                  >
                    <Image
                      src={src}
                      alt={`Sneak peak ${index + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 50vw, 180px"
                    />
                  </li>
                ))}
              </ul>

              <h2 className="mt-10 text-lg font-semibold text-neutral-900">
                Key Points
              </h2>
              <ul className="mt-4 space-y-3">
                {course.keyPoints.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-3 text-sm text-neutral-600"
                  >
                    <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-[#3b6ce9]" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {tab === "Lessons" && <CourseLessonsTab course={course} />}

          {tab === "Reviews" && <CourseReviewsTab course={course} />}
        </div>
      </section>
    </div>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-xs font-medium text-neutral-700 shadow-sm">
      {children}
    </span>
  );
}

function IncludeIcon({
  type,
}: {
  type: CourseDetail["includes"][number]["icon"];
}) {
  const className = "size-4 text-neutral-500";
  switch (type) {
    case "resources":
      return <FileText className={className} />;
    case "videos":
      return <Clapperboard className={className} />;
    case "certificate":
      return <Award className={className} />;
    case "consultation":
      return <MessageCircle className={className} />;
    default:
      return <BookOpen className={className} />;
  }
}
