"use client";

import React, { useState } from "react";

const images = [
  {
    id: 1,
    image:
      "https://www.phonepe.com/webstatic/14618/static/pin2016-429b1b866f3573ffef59c299d4ed17dc.svg",
    bgimage:
      "https://www.phonepe.com/static/2016-50bb39c20b8f7586df0ae02d9aedd9fb.svg",
    button: "2016",
  },
  {
    id: 2,
    image:
      "https://www.phonepe.com/webstatic/14618/static/pin2017-17faf26fd6156f19ac7ee09f8d4cf1d7.svg",
    bgimage:
      "https://www.phonepe.com/static/2017_mob-fa6fbcccebcf954e69b3f8f1f7088232.svg",
    button: "2017",
  },
  {
    id: 3,
    image:
      "https://www.phonepe.com/webstatic/14618/static/pin2018-7d15b1d22eceb337df8e88ae01a403a1.svg",
    bgimage:
      "https://www.phonepe.com/static/2018-5baab62be077da500f9654bbbb2a83bb.svg",
    button: "2018",
  },
  {
    id: 4,
    image:
      "https://www.phonepe.com/webstatic/14618/static/pin2019-2-68cd397ae288806cb245bab274bacc84.svg",
    bgimage:
      "https://www.phonepe.com/static/2019-804303e2a92efbf56facd9045f7a4638.svg",
    button: "2019",
  },
  {
    id: 5,
    image:
      "https://www.phonepe.com/webstatic/14618/static/pin2020-9c8243c0d01d4e22d60bbfbddd2d95f3.svg",
    bgimage:
      "https://www.phonepe.com/static/2020-5ffe7b23223100e7ca1dd53a21d1c35d.svg",
    button: "2020",
  },
  {
    id: 6,
    image:
      "https://www.phonepe.com/webstatic/14618/static/pin2021-2f18cfc1f347022985aef6b9e9af2f43.svg",
    bgimage:
      "https://www.phonepe.com/static/2021-90d6cae46d4d5750709b9c951ac61d54.svg",
    button: "2021",
  },
  {
    id: 7,
    image:
      "https://www.phonepe.com/webstatic/14618/static/pin2022-c9f5677d7216664a1352de89c2351abc.svg",
    bgimage:
      "https://www.phonepe.com/static/2022-5b3fcc4ef7277d11b373f84e4b212e8c.svg",
    button: "2022",
  },
  {
    id: 8,
    image:
      "https://www.phonepe.com/webstatic/14618/static/pin2023-97c4ec418b9337bffc9c5b74e8672880.svg",
    bgimage:
      "https://www.phonepe.com/static/2023-b9c961e00c47ae6a617ce6fc72a66f5f.svg",
    button: "2023",
  },
  {
    id: 9,
    image:
      "https://www.phonepe.com/webstatic/14618/static/pin2024-ad25c61682303a81cffe42127af1c412.svg",
    bgimage:
      "https://www.phonepe.com/static/2024-0e30ff31340a1f7dad50f05130d5aab0.svg",
    button: "2024",
  },
  {
    id: 10,
    image:
      "https://www.phonepe.com/webstatic/14618/static/pin2025-d4b30a78a8184feb63475ad1244ac11b.svg",
    bgimage:
      "https://www.phonepe.com/static/2025-3590483933d130891d0b1512a5080954.svg",
    button: "2025",
  },
];

const AboutHero = () => {
  const [current, setCurrent] = useState(0);

  return (
    <section className="mt-12 sm:mt-20 lg:mt-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Responsive Heading */}
        <p className="mx-auto max-w-5xl text-center text-lg sm:text-2xl lg:text-3xl font-semibold leading-snug text-purple-800">
          To offer every Indian an equal opportunity to accelerate their
          progress by unlocking the flow of money & democratizing access to
          services
        </p>

        {/* Responsive Image Display Container */}
        <div className="relative mt-8 sm:mt-12 w-full h-[45vh] sm:h-[60vh] lg:h-[75vh] overflow-hidden rounded-2xl sm:rounded-3xl">
          {images.map((item, index) => (
            <div
              key={item.id}
              className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                index === current
                  ? "opacity-100 visible z-10 scale-100"
                  : "opacity-0 invisible z-0 scale-95"
              }`}
            >
              <img
                src={item.bgimage}
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
              />
              <img
                src={item.image}
                alt={`Timeline year ${item.button}`}
                className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[70%] sm:h-[80%] max-w-[90%] object-contain z-10"
              />
            </div>
          ))}
        </div>

        {/* Responsive Timeline Navigation Bar */}
        <div className="mt-6 sm:mt-8 mx-auto w-full max-w-4xl rounded-2xl sm:rounded-full bg-white p-3 sm:p-4 shadow-xl border border-gray-100">
          <div className="flex flex-nowrap items-center justify-between gap-2 overflow-x-auto scrollbar-none px-2 py-1">
            {images.map((item, index) => {
              const isActive = index === current;
              return (
                <button
                  key={item.id}
                  onClick={() => setCurrent(index)}
                  className={`flex shrink-0 flex-col items-center justify-center gap-1.5 px-2.5 py-1.5 rounded-xl transition-all duration-300 focus:outline-none ${
                    isActive
                      ? "text-purple-800 font-bold scale-105"
                      : "text-gray-500 font-medium hover:text-purple-600"
                  }`}
                >
                  {/* Indicator Dot */}
                  <span
                    className={`h-2.5 w-2.5 rounded-full transition-colors duration-300 ${
                      isActive ? "bg-purple-800 ring-2 ring-purple-300" : "bg-gray-300"
                    }`}
                  />
                  {/* Year Label */}
                  <span className="text-xs sm:text-sm tracking-tight">
                    {item.button}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;