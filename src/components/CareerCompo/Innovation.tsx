"use client";

import React, { useState } from "react";

interface Category {
  id: string;
  title: string;
  iconSvg: React.ReactNode;
}

const categories: Category[] = [
  {
    id: "sales",
    title: "Business Development & Sales",
    iconSvg: (
      <svg viewBox="0 0 100 100" className="h-[58px] w-[58px]">
        <circle cx="50" cy="50" r="16" className="fill-pink-400" />
        <ellipse cx="50" cy="22" rx="20" ry="10" className="fill-pink-300" />
        <ellipse cx="50" cy="78" rx="20" ry="10" className="fill-pink-500" />
        <ellipse cx="22" cy="50" rx="10" ry="20" className="fill-pink-400" />
        <ellipse cx="78" cy="50" rx="10" ry="20" className="fill-pink-400" />
      </svg>
    ),
  },
  {
    id: "engineering",
    title: "Engineering",
    iconSvg: (
      <svg viewBox="0 0 100 100" className="h-[58px] w-[58px]">
        <path d="M 20 40 A 30 30 0 0 1 80 40 Z" className="fill-amber-400" />
        <path d="M 30 60 A 20 20 0 0 1 70 60 Z" className="fill-amber-300" />
        <path d="M 38 78 A 12 12 0 0 1 62 78 Z" className="fill-amber-200" />
      </svg>
    ),
  },
  {
    id: "corporate",
    title: "Corporate",
    iconSvg: (
      <svg viewBox="0 0 100 100" className="h-[58px] w-[58px]">
        <circle cx="50" cy="50" r="24" className="fill-teal-500" />
        <path d="M 20 28 A 28 28 0 0 0 20 72 Z" className="fill-teal-300" />
        <path d="M 80 28 A 28 28 0 0 1 80 72 Z" className="fill-teal-300" />
      </svg>
    ),
  },
  {
    id: "tech-infra",
    title: "Tech Infra & IT",
    iconSvg: (
      <svg viewBox="0 0 100 100" className="h-[58px] w-[58px]">
        <rect x="25" y="25" width="30" height="30" rx="15" className="fill-indigo-400 rotate-45 transform origin-center" />
        <rect x="45" y="45" width="30" height="30" rx="15" className="fill-indigo-300 rotate-45 transform origin-center" />
      </svg>
    ),
  },
  {
    id: "pm",
    title: "Product Management",
    iconSvg: (
      <svg viewBox="0 0 100 100" className="h-[58px] w-[58px]">
        <circle cx="50" cy="50" r="22" className="fill-purple-700" />
        <path d="M 24 38 A 16 16 0 0 0 24 62 Z" className="fill-pink-400" />
        <path d="M 76 38 A 16 16 0 0 1 76 62 Z" className="fill-purple-300" />
      </svg>
    ),
  },
  {
    id: "data-science",
    title: "Data Science",
    iconSvg: (
      <svg viewBox="0 0 100 100" className="h-[58px] w-[58px]">
        <rect x="20" y="38" width="24" height="24" className="fill-indigo-500 rotate-45 transform origin-center" />
        <path d="M 60 30 A 20 20 0 0 1 60 70 Z" className="fill-amber-300" />
        <path d="M 80 30 A 20 20 0 0 1 80 70 Z" className="fill-cyan-200" />
      </svg>
    ),
  },
  {
    id: "design",
    title: "Design & Creative",
    iconSvg: (
      <svg viewBox="0 0 100 100" className="h-[58px] w-[58px]">
        <circle cx="35" cy="50" r="20" className="fill-rose-400 opacity-80" />
        <circle cx="65" cy="50" r="20" className="fill-violet-400 opacity-80" />
      </svg>
    ),
  },
  {
    id: "operations",
    title: "Operations & Logistics",
    iconSvg: (
      <svg viewBox="0 0 100 100" className="h-[58px] w-[58px]">
        <rect x="25" y="30" width="50" height="40" rx="8" className="fill-emerald-400" />
        <circle cx="50" cy="50" r="10" className="fill-emerald-200" />
      </svg>
    ),
  },
  {
    id: "legal",
    title: "Legal & Compliance",
    iconSvg: (
      <svg viewBox="0 0 100 100" className="h-[58px] w-[58px]">
        <path d="M 50 20 L 80 40 L 80 70 L 50 90 L 20 70 L 20 40 Z" className="fill-sky-400" />
      </svg>
    ),
  },
];

export default function InnovationCategories() {
  const [showAll, setShowAll] = useState(false);

  const visibleCategories = showAll ? categories : categories.slice(0, 6);

  return (
    <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      {/* Title */}
      <h2 className="mb-8 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
        Make a difference leading innovation at PhonePe
      </h2>

      {/* Grid Cards */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-5">
        {visibleCategories.map((item) => (
          <div
            key={item.id}
            className="group relative flex h-48 cursor-pointer flex-col items-center justify-center rounded-2xl bg-[#F6F5F8] p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:bg-[#F0EEF5] hover:shadow-lg"
          >
            {/* Top Right Arrow Hover Effect */}
            <div className="absolute right-4 top-4 text-[#5F259F] opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 17L17 7M17 7H9M17 7V15" />
              </svg>
            </div>

            {/* Icon */}
            <div className="mb-4 flex h-[68px] w-[68px] items-center justify-center transition-transform duration-300 group-hover:scale-105">
              {item.iconSvg}
            </div>

            {/* Category Title */}
            <h3 className="text-sm font-semibold text-gray-900 transition-colors duration-300 group-hover:text-[#5F259F] sm:text-base">
              {item.title}
            </h3>
          </div>
        ))}
      </div>

      {/* Toggle Button */}
      <div className="mt-8 flex justify-center">
        <button
          onClick={() => setShowAll(!showAll)}
          className="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#5F259F] transition-colors duration-200 hover:text-[#4B1E80]"
        >
          <span>{showAll ? "SEE LESS" : "SEE ALL"}</span>
          <svg
            className={`h-4 w-4 transition-transform duration-300 ${showAll ? "rotate-180" : "rotate-0"}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
    </section>
  );
}