"use client";

import { Plus } from "lucide-react";
import Link from "next/link";
import { title } from "process";
import { useState } from "react";

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
const images = [
    { image: "/assets/smartspkr.png", title: "SmartSpeaker", description: "Empower your business with the PhonePe SmartSpeaker’s multi-language instant payment confirmations, making it easier to track, understand, and manage every transaction.", btn: "Know More", css: "absolute left-1/2 top-16 h-40 w-40 -translate-x-1/2", css2: "absolute left-1/2 top-16 -translate-x-1/2 translate-y-32 rounded-4xl" },
    { image: "/assets/pod.png", title: "PhonePe Smart Pod", description: "Simplify transactions and multiply opportunities by accepting all major payment modes, helping you serve customers faster and more efficiently.", btn: "Know More", css: "absolute left-[28%] top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2", css2: "absolute left-[28%] top-1/2 translate-y-16 rounded-4xl" },
    { image: "/assets/edc.png", title: "Edc", description: "Simplify transactions and multiply opportunities by accepting all major payment modes, helping you serve customers faster and more efficiently.", btn: "Know More", css: "absolute left-[72%] top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2", css2: "absolute left-[72%] top-1/2 translate-y-16 rounded-4xl" },
    { image: "/assets/code.png", title: "QR Code", description: "Make UPI payments easy with QR stickers and standees that enable smooth, hassle-free transactions for your business.", btn: "Know More", css: "absolute bottom-16 left-1/2 h-40 w-40 -translate-x-1/2", css2: "absolute bottom-16 left-1/2 translate-y-2 rounded-4xl" },
]
export default function InvestmentSection() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    return (
        <section className="mx-auto max-w-5xl py-16">
            <div className="space-y-1">
                {investmentData.map((item) => (
                    <div
                        key={item.id}
                        className="flex h-40 overflow-hidden rounded-full border border-gray-300 bg-white"
                    >
                        {/* Left */}
                        <div className="flex w-[40%] items-center justify-center border-r border-gray-300">
                            <div className="flex flex-col items-center">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="h-20 w-20 object-contain"
                                />

                                <h3 className="mt-4 text-xl font-medium text-[#4B2E83]">
                                    {item.title}
                                </h3>
                            </div>
                        </div>

                        {/* Right */}
                        <div className="flex w-[60%] items-center px-20">
                            <p className="max-w-xl text-base leading-6 text-gray-600">
                                {item.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="relative mx-auto h-175 w-full max-w-5xl overflow-hidden mt-20">
                {/* Background */}
                <img
                    src="/assets/back.png"
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover  rounded-[100%] animate-color-rotate bg-[conic-gradient(from_180deg,#2563EB_0deg,#2563EB_80deg,#FACC15_120deg,#FACC15_220deg,#2563EB_360deg)]"
                />
                {images.map((item, index) => (
                    <div key={index}>
                        <img
                            src={item.image}
                            alt={item.title}
                            className={item.css}
                        />

                        <button
                            onMouseEnter={() => setActiveIndex(index)}
                            onMouseLeave={() => setActiveIndex(null)}
                            className={`${item.css2} z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black text-blue-200 transition-all duration-300 hover:rotate-45`}
                        >
                            <Plus size={24} />
                        </button>
                    </div>
                ))}
                {activeIndex !== null && (
                    <div
                        onMouseEnter={() => setActiveIndex(activeIndex)}
                        onMouseLeave={() => setActiveIndex(null)}
                        className={`absolute z-40 w-70 ${images[activeIndex].css2} -translate-x-1/4  bg-white p-6 shadow-2xl`}
                    >
                        <h2 className="text-lg font-bold text-[#4B2E83]">
                            {images[activeIndex].title}
                        </h2>

                        <p className="mt-2 text-gray-600 leading-4">
                            {images[activeIndex].description}
                        </p>

                        <Link
                            href="/"
                            className="mt-3 inline-block rounded-full bg-[#5F259F] px-4 py-2 text-white transition hover:bg-[#4B1D82]"
                        >
                            {images[activeIndex].btn}
                        </Link>
                    </div>
                )}
            </div>
        </section>
    );
}