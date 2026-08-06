"use client";

import Image from "next/image";

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
        <section className="relative bg-gray-100">
            {cards.map((item, index) => (
                <div
                    key={index}
                    className={`sticky top-20 flex h-[80vh] items-center justify-center`}
                >
                    <div className="flex h-100 w-240 overflow-hidden rounded-[50px] bg-white shadow-2xl">

                        {/* Left */}
                        <div className="flex w-1/2 flex-col justify-center px-16">

                            <h2 className="text-4xl font-semibold">
                                {item.title}
                            </h2>

                            <p className="mt-8 text-base leading-8 text-gray-500">
                                {item.desc}
                            </p>
                            <button className="mt-10 w-fit rounded-full bg-[#5F259F] px-8 py-3 text-white transition hover:bg-[#4B1E80]">
                                Know More →
                            </button>

                        </div>
                        <div className="flex w-1/2 items-center justify-center bg-gray-50">

                            <Image
                                src={item.image}
                                width={420}
                                height={420}
                                alt={item.title}
                                className="object-contain"
                            />

                        </div>

                    </div>
                </div>
            ))}
            <div className="h-[80vh] mb-5" />
        </section>
    );
}