"use client";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

const travel = [
    {
        id: 1,
        title: "Flights",
        image: "/assets/flight.svg",
    },
    {
        id: 2,
        title: "Bus",
        image: "/assets/bus.svg",
    },
    {
        id: 3,
        title: "Train",
        image: "/assets/train.svg",
    },
    {
        id: 4,
        title: "Stays & Hotels",
        image: "/assets/hotel.svg",
    },
];
const countries = [
    {
        name: "Singapore",
        flag: "/assets/singapore.png",
    },
    {
        name: "UAE",
        flag: "/assets/uae.png",
    },
    {
        name: "Nepal",
        flag: "/assets/nepal.png",
    },
    {
        name: "Sri Lanka",
        flag: "/assets/srilanka.png",
    },
    {
        name: "Bhutan",
        flag: "/assets/bhutan.png",
    },
    {
        name: "Mauritius",
        flag: "/assets/mauritius.png",
    },
];

export default function Travel() {
    const [visibleCards, setVisibleCards] = useState(1);
    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;

            if (scrollY > 200) setVisibleCards(1);
            if (scrollY > 820) setVisibleCards(2);
            if (scrollY > 840) setVisibleCards(3);
            if (scrollY > 860) setVisibleCards(4);
            if (scrollY > 880) setVisibleCards(5);
            if (scrollY > 900) setVisibleCards(6);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section className="bg-white py-20">
            <div className="mx-auto max-w-6xl px-10">

                {/* Heading */}
                <div className="text-center">
                    <h2 className="text-4xl font-bold text-[#39235f]">
                        Travel, stays & commute
                    </h2>

                    <p className="mx-auto mt-5 max-w-3xl text-xl text-gray-500">
                        Recharge FASTag, book flights, hotels, cabs, and metro tickets,
                        get roadside assistance and more seamlessly.
                    </p>
                </div>

                {/* Cards */}
                <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">

                    {travel.map((item) => (
                        <div
                            key={item.id}
                            className="group relative h-50 overflow-hidden rounded-[36px] border border-gray-200 bg-[#fafafa] transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                        >

                            <h3 className="p-8 text-2xl font-semibold text-[#3e236d]">
                                {item.title}
                            </h3>

                            <Image
                                src={item.image}
                                alt={item.title}
                                width={90}
                                height={90}
                                className="absolute bottom-0 right-0 transition-transform duration-300 group-hover:scale-105"
                            />
                        </div>
                    ))}

                </div>

                {/* Button */}

                <div className="mt-16 flex justify-center">
                    <button className="flex items-center gap-4 rounded-full bg-[#450fa2] px-8 py-2 text-lg text-white transition hover:bg-[#5728a6]">
                        Explore Now
                        <ArrowRight size={24} />
                    </button>
                </div>

            </div>
            <div className="relative mt-36 mx-auto w-[95%] max-w-6xl rounded-[55px] bg-[#452C75] px-10 pb-12 pt-24">
                <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">

                    {/* Left Waves */}

                    <div className="absolute right-full top-1/2 flex -translate-y-1/2 gap-6">
                        <div className="h-20 w-10 rounded-l-full bg-[#B58AE7]" />
                        <div className="h-32 w-14 rounded-l-full bg-[#8E63CB]" />
                    </div>

                    {/* Right Waves */}

                    <div className="absolute left-full top-1/2 flex -translate-y-1/2 gap-6">
                        <div className="h-32 w-14 rounded-r-full bg-[#8E63CB]" />
                        <div className="h-20 w-10 rounded-r-full bg-[#B58AE7]" />
                    </div>

                    <Image
                        src="/assets/globe.png"
                        alt="Globe"
                        width={200}
                        height={200}
                        priority
                    />
                </div>

                <h2 className="text-center mt-10 text-5xl font-semibold text-white">
                    PhonePe International
                </h2>

                <p className="mx-auto mt-8 max-w-4xl text-center text-xl leading-10 text-white/95">
                    Make UPI payments internationally at select merchants.
                    Now available in Singapore, UAE, Nepal, Sri Lanka,
                    Bhutan, and Mauritius.
                </p>

                <div className="mt-24 flex flex-wrap justify-center gap-12">

                    {countries.map((country, index) => (
                        <div
                            key={country.name}
                            className={`transition-all duration-700 flex flex-row justify-center items-center ${index < visibleCards
                                    ? "opacity-100 translate-y-0"
                                    : "opacity-0 translate-y-20"
                                }`}
                        >
                            <div className="h-28 w-28 overflow-hidden rounded-full border-white shadow-xl">
                                <Image
                                    src={country.flag}
                                    alt={country.name}
                                    width={128}
                                    height={128}
                                    className="h-full w-full object-cover"
                                />
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
}