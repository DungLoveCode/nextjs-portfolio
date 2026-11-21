"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  ArrowUpRight,
  HeartHandshake,
  Flower2,
  Award,
  X,
  ZoomIn,
} from "lucide-react";
import { FaTableTennis } from "react-icons/fa";

const activities = [
  {
    number: "01",
    category: "COMMUNITY SERVICE",
    title: "Happy Meal for Hemodialysis Patients",
    description:
      "Organised a fundraising initiative to provide meals for hemodialysis patients at a local hospital. I reached out to classmates and shared the initiative on social media to collect donations and encourage participation.",
    image: "/images/activities/happy-meal.jpg",
    imageAlt: "Happy Meal fundraising activity",
    icon: HeartHandshake,
    tags: ["Fundraising", "Community Service", "Social Impact"],
    certificate: true,
  },
  {
    number: "02",
    category: "PERSONAL DEVELOPMENT",
    title: "Gosinga Meditation Course",
    description:
      "Participated in a 10-day meditation course, gaining exposure to Buddhist teachings and meditation practices. I explored the nature of thoughts and emotions and practised different meditation methods to develop a better response to difficult experiences.",
    image: "/images/activities/meditation.jpg",
    imageAlt: "Gosinga meditation course",
    icon: Flower2,
    tags: ["Meditation", "Self-awareness", "Personal Growth"],
    certificate: true,
  },
  {
    number: "03",
    category: "SPORTS & COMPETITIONS",
    title: "Table Tennis Club",
    description:
      "Joined Cuong Binh, a local table tennis club, where I participated in training sessions and attended several competitions alongside other club members.",
    image: "/images/activities/table-tennis.jpg",
    imageAlt: "Table tennis club and competitions",
    icon: FaTableTennis,
    tags: ["Table Tennis", "Teamwork", "Competitions"],
    certificate: false,
  },
];

type SelectedImage = {
  src: string;
  alt: string;
};

export default function Extracurricular() {
  const [selectedImage, setSelectedImage] =
    useState<SelectedImage | null>(null);

  // Close the lightbox with Escape and prevent background scrolling
  useEffect(() => {
    if (!selectedImage) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedImage(null);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedImage]);

  return (
    <section
      id="extracurricular"
      className="relative px-6 py-24 sm:py-32 lg:px-10"
    >
      <div className="mx-auto w-full max-w-7xl">
        {/* Section heading */}
        <div className="mb-14">
          <div className="mb-5 flex items-center gap-3">
            <span className="flex h-7 w-7 items-center justify-center rounded-md border border-primary/30 bg-primary/5 font-mono text-xs text-primary">
              05
            </span>

            <span className="font-mono text-xs tracking-wider text-muted">
              BEYOND THE CODE & STUDY
            </span>

            <span className="h-px flex-1 bg-border" />

            <span className="hidden font-mono text-[10px] text-muted sm:block">
              LIFE OUTSIDE TECHNOLOGY AND STUDY
            </span>
          </div>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            More than just{" "}
            <span className="text-primary">coding</span> & <span className="text-primary">studying.</span>
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-muted sm:text-base">
            Experiences that have shaped me beyond academics and
            programming, from contributing to my community to
            exploring personal growth and enjoying sports.
          </p>
        </div>

        {/* Activity cards */}
        <div className="grid items-start gap-6 lg:grid-cols-3">
          {activities.map((activity) => {
            const Icon = activity.icon;

            return (
              <article
                key={activity.number}
                className="group overflow-hidden rounded-xl border border-border bg-surface/50 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40"
              >
                {/* Image area */}
                <div className="group/image relative h-64 overflow-hidden bg-zinc-950 sm:h-72">
                  {/* Blurred background */}
                  <Image
                    src={activity.image}
                    alt=""
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="scale-110 object-cover opacity-50 blur-2xl transition-transform duration-700 group-hover/image:scale-125"
                    aria-hidden="true"
                  />

                  {/* Dark gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-black/20" />

                  {/* Main clickable image */}
                  <button
                    type="button"
                    onClick={() =>
                      setSelectedImage({
                        src: activity.image,
                        alt: activity.imageAlt,
                      })
                    }
                    className="absolute inset-0 z-10 cursor-zoom-in"
                    aria-label={`View full image: ${activity.imageAlt}`}
                  >
                    <Image
                      src={activity.image}
                      alt={activity.imageAlt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-contain p-3 transition-transform duration-700 group-hover/image:scale-[1.04]"
                    />

                    {/* View image indicator */}
                    <span className="absolute bottom-4 right-4 flex items-center gap-2 rounded-md border border-white/20 bg-black/60 px-3 py-2 font-mono text-[10px] text-white opacity-100 backdrop-blur-md transition-opacity sm:opacity-0 sm:group-hover/image:opacity-100">
                      <ZoomIn size={13} />
                      VIEW IMAGE
                    </span>
                  </button>

                  {/* Image number */}
                  <span className="pointer-events-none absolute left-4 top-4 z-20 rounded-md border border-white/20 bg-black/50 px-3 py-1.5 font-mono text-[10px] tracking-wider text-white backdrop-blur-md">
                    ACTIVITY_{activity.number}
                  </span>

                  {/* Bottom gradient */}
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-16 bg-gradient-to-t from-black/30 to-transparent" />
                </div>

                {/* Card content */}
                <div className="p-6">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="font-mono text-[10px] tracking-wider text-primary">
                      {activity.category}
                    </span>

                    <Icon
                      size={19}
                      className="text-primary transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                    />
                  </div>

                  <h3 className="text-xl font-semibold leading-snug text-foreground">
                    {activity.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-muted">
                    {activity.description}
                  </p>

                  {/* Tags */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {activity.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-border bg-background px-2.5 py-1 font-mono text-[10px] text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Certificate indicator */}
                  {activity.certificate && (
                    <div className="mt-6 flex items-center gap-2 border-t border-border pt-4">
                      <Award size={15} className="text-primary" />
                      <span className="font-mono text-xs text-primary">
                        Certificate available
                      </span>
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>

        {/* Closing detail */}
        <div className="mt-10 flex items-center gap-3 border-t border-border pt-6">
          <ArrowUpRight size={17} className="text-primary" />

          <p className="font-mono text-xs text-muted">
            // Growing through experiences, one step at a time.
          </p>
        </div>
      </div>

      {/* Full-size image lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-md"
          onClick={() => setSelectedImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Image preview"
        >
          {/* Close button */}
          <button
            type="button"
            onClick={() => setSelectedImage(null)}
            className="absolute right-5 top-5 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-colors hover:bg-white/20"
            aria-label="Close image preview"
          >
            <X size={22} />
          </button>

          {/* Full-size image */}
          <div
            className="relative h-[85vh] w-full max-w-6xl"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              fill
              sizes="100vw"
              className="object-contain"
              quality={100}
            />
          </div>

          {/* Instructions */}
          <p className="pointer-events-none absolute bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap font-mono text-[10px] text-white/50 sm:text-xs">
            PRESS ESC OR CLICK OUTSIDE TO CLOSE
          </p>
        </div>
      )}
    </section>
  );
}
