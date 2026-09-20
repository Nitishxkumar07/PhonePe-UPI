"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const sections = [
  {
    title: "UPI Lite",
    img: "https://www.phonepe.com/static/upi-lite-ccb4e1f27f3bde0043e7204bb98608b5.svg",
    des: "Make faster, low-value transactions with ease",
  },
  {
    title: "Credit Line on UPI",
    img: "https://www.phonepe.com/static/credit-line-6b570edb44a1ee92e602a889b5819bae.svg",
    des: "Link pre-sanctioned bank credit lines to UPI",
  },
  {
    title: "RuPay CC on UPI",
    img: "https://www.phonepe.com/static/rupay-5f9b90990171c9cba4a451a171b13f8c.svg",
    des: "Use your RuPay credit card for UPI transactions",
  },
  {
    title: "Split Expenses",
    img: "https://www.phonepe.com/static/wealthIconInsurance-21e1314143fd71543c9e041833e81dc3.svg",
    des: "Simplify group payments effortlessly",
  },
  {
    title: "PhonePe Gift Card",
    img: "https://www.phonepe.com/static/wealthIconPaymments-02b7e2e830614a7be41fc60d876f492b.svg",
    des: "The perfect gift for every occasion",
  },
  {
    title: "UPI Circle",
    img: "https://www.phonepe.com/static/upi-circle-1c99b834ff3fe2d4e56d24c17fafac74.svg",
    des: "Delegate payments with spending limits and full control",
  },
];

export function Qrsection() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track overall section scroll progress
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Phase 1: Background Zoom & Card Expansion (0% -> 30% scroll)
  const bgScale = useTransform(scrollYProgress, [0, 0.25], [0.3, 3.5]);
  const containerScale = useTransform(scrollYProgress, [0, 0.25], [0.8, 1]);
  const borderRadius = useTransform(scrollYProgress, [0, 0.25], [32, 24]);

  // Phase 2: Fade in Horizontal Card Stream (25% -> 35% scroll)
  const cardsOpacity = useTransform(scrollYProgress, [0.22, 0.32], [0, 1]);
  const cardsY = useTransform(scrollYProgress, [0.22, 0.32], [40, 0]);

  // Phase 3: Horizontal Card Scroll (35% -> 100% scroll)
  // Maps 35%-100% vertical scroll into -0% to -80% horizontal offset for card container
  const horizontalX = useTransform(scrollYProgress, [0.35, 1], ["0%", "-80%"]);

  return (
    <section ref={containerRef} className="relative h-[400vh] bg-slate-50">
      
      {/* Sticky Screen Viewport */}
      <div className="sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden">
        
        {/* PhonePe Dark Purple Concentric Background */}
        <motion.div
          style={{ scale: bgScale }}
          className="absolute h-80 w-80 sm:h-96 sm:w-96 rounded-full bg-[#2B164F] shadow-2xl"
        />

        {/* Ambient Ring Accents */}
        {[1, 2, 3, 4].map((i) => (
          <motion.div
            key={i}
            style={{ scale: bgScale }}
            className="absolute rounded-full border border-white/10 pointer-events-none"
          >
            <div
              style={{
                width: 120 + i * 180,
                height: 120 + i * 180,
              }}
            />
          </motion.div>
        ))}

        {/* Center PhonePe Container */}
        <motion.div
          style={{
            scale: containerScale,
            borderRadius: borderRadius,
          }}
          className="relative z-10 mx-4 flex w-full max-w-5xl flex-col lg:flex-row items-center justify-between gap-8 sm:gap-12 bg-white/95 backdrop-blur-md p-6 sm:p-10 shadow-2xl border border-gray-100"
        >
          
          {/* Left Side: Fixed QR Code Display */}
          <div className="flex flex-col items-center justify-center shrink-0 text-center lg:text-left border-b lg:border-b-0 lg:border-r border-gray-200/80 pb-6 lg:pb-0 lg:pr-10">
            <div className="relative rounded-2xl bg-slate-50 p-4 border border-gray-100 shadow-inner">
              <Image
                src="https://www.phonepe.com/static/qr-0131fe33699f25cd2e104a9c6535f5f5.svg"
                alt="PhonePe QR Code"
                width={180}
                height={180}
                priority
                className="h-36 w-36 sm:h-48 sm:w-48 object-contain"
              />
            </div>
            
            <h2 className="mt-4 text-xl sm:text-2xl font-bold text-[#2B164F]">
              Scan & Pay
            </h2>
            <p className="mt-1 text-xs sm:text-sm font-medium text-gray-500 max-w-xs">
              Accepted everywhere with fast, one-click UPI payments
            </p>
          </div>

          {/* Right Side: Horizontal Sliding Feature Cards */}
          <motion.div
            style={{
              opacity: cardsOpacity,
              y: cardsY,
            }}
            className="relative w-full lg:w-[520px] overflow-hidden"
          >
            {/* Scrollable Track */}
            <motion.div
              style={{ x: horizontalX }}
              className="flex gap-4 sm:gap-6 w-max py-2"
            >
              {sections.map((item, index) => (
                <div
                  key={index}
                  className="group flex w-64 sm:w-72 flex-col justify-between rounded-2xl border border-gray-100 bg-white p-6 shadow-md transition-all duration-300 hover:border-purple-200 hover:shadow-xl shrink-0"
                >
                  <div>
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-purple-50 p-3 transition-transform duration-300 group-hover:scale-110">
                      <img
                        src={item.img}
                        alt={item.title}
                        className="h-full w-full object-contain"
                      />
                    </div>

                    <h3 className="mt-5 text-lg font-bold text-gray-900 group-hover:text-[#5F259F] transition-colors">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                      {item.des}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-[#5F259F]">
                    <span>Learn More</span>
                    <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}