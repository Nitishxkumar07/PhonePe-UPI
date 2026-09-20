"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

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
  { name: "Singapore", flag: "/assets/singapore.png" },
  { name: "UAE", flag: "/assets/uae.png" },
  { name: "Nepal", flag: "/assets/nepal.png" },
  { name: "Sri Lanka", flag: "/assets/srilanka.png" },
  { name: "Bhutan", flag: "/assets/bhutan.png" },
  { name: "Mauritius", flag: "/assets/mauritius.png" },
];

export default function Travel() {
  const [isInternationalVisible, setIsInternationalVisible] = useState(false);
  const internationalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInternationalVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (internationalRef.current) {
      observer.observe(internationalRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-white py-12 md:py-20 overflow-x-hidden">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        
        {/* Main Section Heading */}
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-[#39235f] sm:text-4xl md:text-5xl">
            Travel, Stays & Commute
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-gray-600 sm:text-lg md:text-xl">
            Recharge FASTag, book flights, hotels, cabs, and metro tickets, get
            roadside assistance, and more seamlessly.
          </p>
        </div>

        {/* Travel Services Grid */}
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 sm:gap-6">
          {travel.map((item) => (
            <div
              key={item.id}
              className="group relative flex h-44 sm:h-52 flex-col justify-between overflow-hidden rounded-3xl border border-gray-100 bg-[#fafafa] p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-purple-200 hover:shadow-xl hover:shadow-purple-900/5"
            >
              <h3 className="text-xl font-bold text-[#3e236d] sm:text-2xl">
                {item.title}
              </h3>

              <div className="absolute -bottom-2 -right-2 h-24 w-24 sm:h-28 sm:w-28 transition-transform duration-300 group-hover:scale-110">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-contain object-bottom-right"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Button */}
        <div className="mt-10 sm:mt-14 flex justify-center">
          <button className="group inline-flex items-center gap-3 rounded-full bg-[#450fa2] px-8 py-3.5 text-base font-medium text-white shadow-lg transition-all duration-300 hover:bg-[#5728a6] hover:shadow-purple-900/25 active:scale-95 sm:text-lg">
            <span>Explore Now</span>
            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>

      {/* PhonePe International Banner */}
      <div
        ref={internationalRef}
        className="relative mt-28 sm:mt-36 mx-auto w-[92%] max-w-6xl rounded-[36px] sm:rounded-[48px] bg-gradient-to-b from-[#452C75] to-[#341d5d] px-6 pb-12 pt-20 sm:px-10 sm:pt-24 shadow-2xl"
      >
        {/* Floating Globe & Side Waves */}
        <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
          
          {/* Decorative Waves (Hidden on small mobile screens to prevent overflow) */}
          <div className="hidden sm:flex absolute right-full top-1/2 -translate-y-1/2 items-center gap-3 pr-4">
            <div className="h-12 w-6 rounded-l-full bg-[#B58AE7]/60 md:h-20 md:w-10" />
            <div className="h-20 w-8 rounded-l-full bg-[#8E63CB]/80 md:h-28 md:w-12" />
          </div>

          <div className="hidden sm:flex absolute left-full top-1/2 -translate-y-1/2 items-center gap-3 pl-4">
            <div className="h-20 w-8 rounded-r-full bg-[#8E63CB]/80 md:h-28 md:w-12" />
            <div className="h-12 w-6 rounded-r-full bg-[#B58AE7]/60 md:h-20 md:w-10" />
          </div>

          {/* Globe Icon */}
          <div className="relative h-28 w-28 sm:h-36 sm:w-36 md:h-44 md:w-44 drop-shadow-2xl">
            <Image
              src="/assets/globe.png"
              alt="Globe"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Section Heading & Subtitle */}
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            PhonePe International
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-sm font-normal leading-relaxed text-purple-100 sm:text-base md:text-lg">
            Make UPI payments internationally at select merchants.
            <br className="hidden sm:inline" />
            Available in Singapore, UAE, Nepal, Sri Lanka, Bhutan, and Mauritius.
          </p>
        </div>

        {/* Supported Countries List */}
        <div className="mt-12 sm:mt-16 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-6 lg:gap-8">
          {countries.map((country, index) => (
            <div
              key={country.name}
              style={{
                transitionDelay: `${index * 100}ms`,
              }}
              className={`flex flex-col items-center justify-center transition-all duration-700 ease-out ${
                isInternationalVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div className="group relative h-20 w-20 sm:h-24 sm:w-24 overflow-hidden rounded-full border-2 border-white/20 p-1 shadow-xl transition-all duration-300 hover:scale-105 hover:border-white/80">
                <div className="relative h-full w-full overflow-hidden rounded-full">
                  <Image
                    src={country.flag}
                    alt={country.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <span className="mt-3 text-xs sm:text-sm font-medium text-purple-100">
                {country.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}