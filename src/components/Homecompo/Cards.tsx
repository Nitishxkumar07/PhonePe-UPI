"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

type Card = {
  title: string;
  desc: string;
  image: string;
};

type CardItemProps = {
  item: Card;
  index: number;
  totalCards: number;
};

function CardItem({ item, index, totalCards }: CardItemProps) {
  const containerRef = useRef(null);

  // Track scroll position per individual card wrapper
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "start start"],
  });

  // Calculate subtle 3D scale down & opacity transition as newer cards cover previous ones
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.94 - (totalCards - index) * 0.015]);
  const opacity = useTransform(scrollYProgress, [0.85, 1], [1, 0.88]);

  return (
    <div
      ref={containerRef}
      className="sticky top-20 sm:top-24 lg:top-28 flex min-h-[75vh] sm:min-h-[80vh] items-center justify-center px-4 sm:px-6 lg:px-8 py-4"
    >
      <motion.div
        style={{ scale, opacity }}
        className="group relative flex flex-col-reverse lg:flex-row min-h-[440px] lg:h-[460px] w-full max-w-5xl overflow-hidden rounded-3xl lg:rounded-[44px] bg-white border border-gray-100 shadow-[0_20px_50px_rgba(8,_112,_184,_0.07)] transition-all duration-300 hover:shadow-[0_25px_60px_rgba(95,_37,_159,_0.12)]"
      >
        {/* Left Content Side */}
        <div className="flex w-full lg:w-1/2 flex-col justify-center p-6 sm:p-8 md:p-10 lg:p-14 z-10">
          <span className="inline-block w-fit text-xs font-semibold tracking-wider text-[#5F259F] uppercase mb-2 bg-[#5F259F]/10 px-3 py-1 rounded-full">
            0{index + 1} / 0{totalCards}
          </span>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900 leading-tight">
            {item.title}
          </h2>

          <p className="mt-3 sm:mt-5 text-sm sm:text-base leading-relaxed text-gray-600">
            {item.desc}
          </p>

          <div className="mt-6 sm:mt-8 lg:mt-10">
            <button className="group/btn relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-[#5F259F] px-7 sm:px-8 py-3 text-sm sm:text-base font-semibold text-white shadow-md transition-all duration-300 hover:bg-[#4B1E80] hover:shadow-lg active:scale-95">
              <span>Know More</span>
              <span className="transition-transform duration-300 group-hover/btn:translate-x-1">→</span>
            </button>
          </div>
        </div>

        {/* Right Image Container */}
        <div className="relative flex w-full lg:w-1/2 items-center justify-center bg-gradient-to-br from-slate-50 via-gray-50 to-purple-50/30 p-6 sm:p-8 overflow-hidden">
          {/* Ambient Glow Accent */}
          <div className="absolute h-48 w-48 rounded-full bg-purple-200/40 blur-3xl transition-transform duration-500 group-hover:scale-150" />

          <div className="relative h-44 sm:h-56 md:h-64 lg:h-full w-full flex items-center justify-center">
            <Image
              src={item.image}
              width={420}
              height={420}
              alt={item.title}
              priority={index === 0}
              className="max-h-full w-auto object-contain transition-transform duration-500 ease-out group-hover:scale-105"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function Cards() {
  const cards = [
    {
      title: "Offline Payments",
      desc: "Accept payments effortlessly at your store with SmartSpeakers for real-time alerts, secure QR codes, and EDC machines for card payments.",
      image: "/assets/offline.webp",
    },
    {
      title: "Payment Gateway",
      desc: "Collect payments for your online business with zero-cost integration and multiple payment methods for your customers.",
      image: "/assets/gateway.webp",
    },
    {
      title: "Payment Links",
      desc: "Generate secure payment links to collect money effortlessly.",
      image: "/assets/links.webp",
    },
    {
      title: "Merchant Lending",
      desc: "Fuel your growth with quick and flexible loans tailored for businesses.",
      image: "/assets/merchant.webp",
    },
    {
      title: "PhonePe Ads",
      desc: "Advertise your brand to millions on the PhonePe app.",
      image: "/assets/ads.webp",
    },
  ];

  return (
    <section className="relative bg-slate-100/70 py-8 sm:py-12 lg:py-16">
      {cards.map((item, index) => (
        <CardItem 
          key={index} 
          item={item} 
          index={index} 
          totalCards={cards.length} 
        />
      ))}
      <div className="h-[30vh] sm:h-[50vh]" />
    </section>
  );
}