"use client";

import React, { useState } from "react";
import Image from "next/image";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
  img: string;
  cardBg: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "AKANKSHA GUPTA",
    role: "SOFTWARE DEVELOPMENT ENGINEER",
    quote:
      "Where I joined as a backend engineer and had the opportunity to contribute to a project from its infancy, witnessing its transformation into India's largest merchant network. At PhonePe, we foster a culture that embraces failure as an opportunity for growth, encouraging us to push boundaries and constantly improve.",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop",
    cardBg: "bg-[#8AE8E3]",
  },
  {
    id: 2,
    name: "RAHUL SHARMA",
    role: "PRINCIPAL PRODUCT MANAGER",
    quote:
      "Working at scale here means solving problems for millions of users daily. The autonomy given to teams allows us to innovate rapidly while taking full ownership of our products and customer outcomes.",
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop",
    cardBg: "bg-[#FED7AA]",
  },
  {
    id: 3,
    name: "PRIYA NAIR",
    role: "DATA SCIENCE LEAD",
    quote:
      "The collaborative energy across cross-functional teams makes solving complex financial inclusion challenges hugely rewarding. You are constantly surrounded by curious minds who inspire you to grow.",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop",
    cardBg: "bg-[#DDD6FE]",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevCard = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextCard = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const current = testimonials[currentIndex];
  const prevIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
  const nextIndex = (currentIndex + 1) % testimonials.length;

  return (
    <section className="mx-auto w-full max-w-7xl overflow-hidden px-4 py-12 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-10 text-center">
        <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#5F259F] sm:text-sm">
          TESTIMONIALS
        </p>
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl md:text-4xl">
          Here’s what our employees <br className="hidden sm:block" /> have to say
        </h2>
      </div>

      {/* Cards Container with Side Previews */}
      <div className="relative flex items-center justify-center py-4">
        {/* Left Visible Side Card (Previous) */}
        <div className="absolute -left-[420px] top-1/2 flex h-[85%] w-[550px] -translate-y-1/2 scale-90 items-center justify-end rounded-[36px] bg-gray-100 p-8 opacity-40 shadow-sm transition-all duration-500 sm:-left-[380px] md:-left-[280px] lg:-left-[180px]">
          <p className="line-clamp-4 max-w-xs text-xs text-gray-700">{testimonials[prevIndex].quote}</p>
        </div>

        {/* Main Active Center Card */}
        <div className={`relative z-10 flex w-full max-w-3xl flex-col items-center gap-6 rounded-[36px] ${current.cardBg} p-6 shadow-md transition-all duration-500 ease-in-out sm:p-10 md:flex-row md:gap-8`}>
          {/* Circular Profile Image */}
          <div className="relative h-40 w-40 shrink-0 overflow-hidden rounded-full border-4 border-white/60 shadow-inner sm:h-48 sm:w-48">
            <Image
              src={current.img}
              alt={current.name}
              fill
              className="object-cover"
              unoptimized
            />
          </div>

          {/* Card Content */}
          <div className="flex flex-col text-left">
            <h3 className="text-base font-bold tracking-wide text-gray-900 sm:text-lg">
              {current.name}
            </h3>
            <p className="text-[11px] font-semibold tracking-wider text-gray-700 uppercase sm:text-xs">
              {current.role}
            </p>
            <p className="mt-4 text-xs leading-relaxed text-gray-800 sm:text-sm sm:leading-7">
              {current.quote}
            </p>
          </div>
        </div>

        {/* Right Visible Side Card (Next) */}
        <div className="absolute -right-[420px] top-1/2 flex h-[85%] w-[550px] -translate-y-1/2 scale-90 items-center justify-start rounded-[36px] bg-gray-100 p-8 opacity-40 shadow-sm transition-all duration-500 sm:-right-[380px] md:-right-[280px] lg:-right-[180px]">
          <p className="line-clamp-4 max-w-xs text-xs text-gray-700">{testimonials[nextIndex].quote}</p>
        </div>
      </div>

      {/* Navigation Buttons Below Cards */}
      <div className="mt-8 flex items-center justify-center gap-6">
        {/* Previous Button (Orange Circle) */}
        <button
          onClick={prevCard}
          aria-label="Previous card"
          className="flex h-11 w-11 items-center justify-center rounded-full bg-[#E05328] text-white shadow-md transition-transform hover:scale-110 active:scale-95"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Page Dots Indicator */}
        <div className="flex gap-2">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                currentIndex === idx ? "w-7 bg-[#5F259F]" : "w-2.5 bg-gray-300"
              }`}
            />
          ))}
        </div>

        {/* Next Button (Purple Diamond) */}
        <button
          onClick={nextCard}
          aria-label="Next card"
          className="flex h-11 w-11 rotate-45 items-center justify-center rounded-md bg-[#817CB9] text-white shadow-md transition-transform hover:scale-110 active:scale-95"
        >
          <svg className="-rotate-45 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
}