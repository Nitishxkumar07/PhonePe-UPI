"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Plus, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const investmentData = [
  {
    id: 1,
    title: "Gold",
    image: "/assets/gold.svg",
    description:
      "Buy 24K pure gold securely, starting from just ₹5. Manage, sell, or gift gold digitally anytime.",
  },
  {
    id: 2,
    title: "Monthly Gold SIP",
    image: "/assets/sip.svg",
    description:
      "Invest in 24K pure gold every month, starting from just ₹100. Set up a Gold SIP and grow your savings effortlessly.",
  },
  {
    id: 3,
    title: "Recurring Deposit",
    image: "/assets/deposit.svg",
    description:
      "Save smartly with a Recurring Deposit. Start small, earn interest and build a secure future with easy monthly contributions.",
  },
  {
    id: 4,
    title: "NPS Contribution",
    image: "/assets/nps.svg",
    description:
      "Secure your retirement with NPS. Contribute flexibly, enjoy tax benefits, and grow your wealth for a worry-free future.",
  },
];

const hardwareProducts = [
  {
    id: 0,
    image: "/assets/smartspkr.png",
    title: "SmartSpeaker",
    description:
      "Empower your business with multi-language instant payment confirmations, making it easier to track and manage every transaction.",
    btn: "Know More",
    position: "top",
    desktopCss: "top-12 left-1/2 -translate-x-1/2",
  },
  {
    id: 1,
    image: "/assets/pod.png",
    title: "PhonePe Smart Pod",
    description:
      "Simplify transactions and multiply opportunities by accepting all major payment modes fast and efficiently.",
    btn: "Know More",
    position: "left",
    desktopCss: "top-1/2 left-[20%] -translate-y-1/2",
  },
  {
    id: 2,
    image: "/assets/edc.png",
    title: "EDC Machine",
    description:
      "Accept card and UPI payments seamlessly at your checkout counter with quick settlement options.",
    btn: "Know More",
    position: "right",
    desktopCss: "top-1/2 right-[20%] -translate-y-1/2",
  },
  {
    id: 3,
    image: "/assets/code.png",
    title: "QR Code Standee",
    description:
      "Make UPI payments effortless with durable QR stickers and standees designed for high merchant traffic.",
    btn: "Know More",
    position: "bottom",
    desktopCss: "bottom-12 left-1/2 -translate-x-1/2",
  },
];

export default function InvestmentSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
      
      {/* ----------------- Section Header ----------------- */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12 text-center"
      >
        <h2 className="text-3xl font-extrabold text-[#4B2E83] sm:text-4xl md:text-5xl">
          Invest & Grow Your Wealth
        </h2>
        <p className="mt-3 text-base text-gray-600 sm:text-lg">
          Simple, secure, and smart ways to start building your long-term wealth.
        </p>
      </motion.div>

      {/* ----------------- Staggered Investment Cards ----------------- */}
      <div className="space-y-4 md:space-y-6">
        {investmentData.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -4 }}
            className="group flex flex-col overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition-shadow duration-300 hover:border-purple-200 hover:shadow-xl md:flex-row md:items-center md:rounded-full"
          >
            {/* Left Block */}
            <div className="flex items-center gap-4 bg-purple-50/50 p-6 md:w-[35%] md:justify-center md:border-r md:border-gray-200 md:bg-transparent md:p-8">
              <motion.div
                whileHover={{ scale: 1.15, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative h-16 w-16 shrink-0 md:h-20 md:w-20"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-contain"
                />
              </motion.div>
              <h3 className="text-xl font-bold text-[#4B2E83] sm:text-2xl">
                {item.title}
              </h3>
            </div>

            {/* Right Block */}
            <div className="p-6 md:w-[65%] md:px-12 md:py-8">
              <p className="text-sm font-normal leading-relaxed text-gray-600 sm:text-base md:text-lg">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ----------------- Merchant Devices Interactive Section ----------------- */}
      <div className="mt-20 md:mt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-extrabold text-[#4B2E83] sm:text-4xl">
            Accept Payments Anywhere
          </h2>
          <p className="mt-2 text-gray-600">
            Smart payment devices tailored for every business size.
          </p>
        </motion.div>

        {/* --- Desktop View (Motion Conic Background + Interactive Popovers) --- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative mx-auto hidden h-[600px] w-full max-w-4xl overflow-hidden rounded-[40px] bg-slate-900 p-8 shadow-2xl lg:block"
        >
          {/* Continuous Motion Rotating Conic Gradient Background */}
          <div className="absolute inset-4 rounded-[32px] overflow-hidden opacity-30">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
              className="absolute -inset-[100%] bg-[conic-gradient(from_0deg,#2563EB,#FACC15,#9333EA,#2563EB)]"
            />
          </div>

          {/* Inner Circle Backdrop */}
          <div className="absolute inset-16 rounded-[28px] border border-white/10 bg-slate-950/85 backdrop-blur-md" />

          {/* Hardware Hotspots */}
          {hardwareProducts.map((item, index) => (
            <div
              key={item.id}
              className={`absolute flex flex-col items-center ${item.desktopCss}`}
            >
              {/* Product Image Floating Animation */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 3 + index,
                  ease: "easeInOut",
                }}
                className="relative h-28 w-28 drop-shadow-2xl"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-contain"
                />
              </motion.div>

              {/* Plus Button */}
              <motion.button
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
                onMouseEnter={() => setActiveIndex(index)}
                onClick={() =>
                  setActiveIndex(activeIndex === index ? null : index)
                }
                className="mt-2 flex h-9 w-9 items-center justify-center rounded-full bg-white text-purple-900 shadow-lg transition-colors hover:bg-purple-600 hover:text-white"
              >
                <motion.div
                  animate={{ rotate: activeIndex === index ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Plus size={20} />
                </motion.div>
              </motion.button>

              {/* Animated Popover Card with AnimatePresence */}
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: item.position === "bottom" ? 10 : -10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: item.position === "bottom" ? 10 : -10 }}
                    transition={{ type: "spring", stiffness: 350, damping: 25 }}
                    onMouseEnter={() => setActiveIndex(index)}
                    onMouseLeave={() => setActiveIndex(null)}
                    className="absolute z-50 w-72 rounded-2xl border border-gray-100 bg-white p-5 shadow-2xl"
                    style={{
                      top: item.position === "bottom" ? "auto" : "100%",
                      bottom: item.position === "bottom" ? "100%" : "auto",
                      marginTop: item.position === "bottom" ? "0" : "12px",
                      marginBottom: item.position === "bottom" ? "12px" : "0",
                    }}
                  >
                    <h4 className="text-lg font-bold text-[#4B2E83]">
                      {item.title}
                    </h4>
                    <p className="mt-2 text-xs leading-relaxed text-gray-600">
                      {item.description}
                    </p>
                    <Link
                      href="#"
                      className="group mt-4 inline-flex items-center gap-1 text-xs font-semibold text-[#5F259F] hover:underline"
                    >
                      <span>{item.btn}</span>
                      <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>

        {/* --- Mobile & Tablet Staggered Cards --- */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:hidden">
          {hardwareProducts.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="flex flex-col items-center rounded-3xl border border-gray-100 bg-slate-900 p-6 text-center text-white shadow-xl"
            >
              <div className="relative h-32 w-32">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-contain"
                />
              </div>

              <h3 className="mt-4 text-xl font-bold text-purple-200">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-gray-300">{item.description}</p>

              <Link
                href="#"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-purple-600 px-6 py-2 text-sm font-semibold text-white transition-colors hover:bg-purple-700"
              >
                <span>{item.btn}</span>
                <ArrowRight size={16} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}