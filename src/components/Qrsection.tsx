"use client";

import { motion, useScroll, useTransform } from "motion/react";
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
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const qrScale = useTransform(scrollYProgress, [0, 0.35], [0.2, 1]);
  const circleScale = useTransform(scrollYProgress, [0, 0.35], [1, 2.8]);
  const radius = useTransform(scrollYProgress, [0, 0.35], [28, 0]);

  const cardsOpacity = useTransform(scrollYProgress, [0.32, 0.45], [0, 1]);
  const cardsY = useTransform(scrollYProgress, [0.35, 0.55], [80, 0]);

  const currentIndex = useTransform(scrollYProgress, [0.45, 1], [0, sections.length - 1]);

  return (
    <section ref={ref} className="relative h-[320vh] bg-white">
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
        <motion.div
          style={{ scale: circleScale }}
          className="absolute h-105 w-105 rounded-full bg-[#2B164F]"
        />

        {[1, 2, 3, 4, 5].map((i) => (
          <motion.div
            key={i}
            style={{ scale: circleScale }}
            className="absolute rounded-full border border-white/10"
          >
            <div
              style={{
                width: 60 + i * 150,
                height: 60 + i * 150,
              }}
            />
          </motion.div>
        ))}

        <motion.div
          style={{
            scale: qrScale,
            borderRadius: radius,
          }}
          className="relative overflow-hidden bg-white p-3 shadow-2xl"
        >
          <div className="flex items-center gap-6">
            <div className="shrink-0">
              <Image
                src="https://www.phonepe.com/static/qr-0131fe33699f25cd2e104a9c6535f5f5.svg"
                alt="qr"
                width={220}
                height={220}
              />
            </div>

            <motion.div
              style={{
                opacity: cardsOpacity,
                y: cardsY,
              }}
              className="relative h-80 w-85 overflow-hidden"
            >
              {sections.map((item, index) => (
                <motion.div
                  key={index}
                  className="sticky left-0 top-0 h-full w-full rounded-2xl bg-white p-6 shadow-sm"
                  initial={{ opacity: 0, y: 50, scale: 0.95 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  }}
                  transition={{
                    delay: index * 8000,
                    duration: 2,
                  }}
                  style={{
                    opacity: useTransform(
                      scrollYProgress,
                      [0.45 + index * 0.08, 0.55 + index * 0.08],
                      [0, 1]
                    ),
                  }}
                >
                  <img src={item.img} alt={item.title} className="mb-4 h-12 w-12" />
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm text-gray-600">{item.des}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}