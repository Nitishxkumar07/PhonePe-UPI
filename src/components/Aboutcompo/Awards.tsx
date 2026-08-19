"use client";

import React, { useState } from "react";

const awards = [
  {
    index: 0,
    cards: [
      {
        id: 1,
        image:
          "https://www.phonepe.com/webstatic/14672/static/IAMAI-awards-d222d2dd1f6fe6f4237f3b9748495cfd.png",
        title: "Best Fintech App 2024",
        description:
          "Best Mobile & App Awards category at IAMAI’s 14th India Digital Awards 2024",
      },
      {
        id: 2,
        image:
          "https://www.phonepe.com/webstatic/14672/static/Bharat-Fintech-Summit-5a40cd760fb945c1c4f0025c53a7c3a3.png",
        title: "Best Payments Fintech",
        description:
          "Bharat Fintech Summit 2024 for excellence in the payments space",
      },
      {
        id: 3,
        image:
          "https://www.phonepe.com/webstatic/14672/static/BFSI-Fintech-Summit-ef741b3d394d2be5f46233d0d5045571.png",
        title: "Excellence in Payment Solutions",
        description:
          "Dun & Bradstreet BFSI & Fintech Summit 2024 for excellence in payment solutions",
      },
      {
        id: 4,
        image:
          "https://www.phonepe.com/webstatic/14672/static/Business-world-2023-75f54d4441cb9467b56acbb04201b0a9.png",
        title: "Best Payments Solutions 2023",
        description:
          "Business World's 4th Edition - Festival of Fintech Conclave & Awards",
      },
    ],
  },

  {
    index: 1,
    cards: [
      {
        id: 1,
        image:
          "https://www.phonepe.com/webstatic/14672/static/Business-world-2023-75f54d4441cb9467b56acbb04201b0a9.png",
        title: "Best Insurtech 2023",
        description:
          "Business World's 4th Edition - Festival of Fintech Conclave & Award",
      },
      {
        id: 2,
        image:
          "https://www.phonepe.com/webstatic/14672/static/BFSI-2023-4c9bc47666dee61afd30057ea15e973c.png",
        title: "BFSI Best Brand 2023",
        description:
          "ET BFSI's Best Brand Conclave in its 6th edition",
      },
      {
        id: 3,
        image:
          "https://www.phonepe.com/webstatic/14672/static/BFSI-2023-4c9bc47666dee61afd30057ea15e973c.png",
        title: "Best Product / Service Innovation",
        description:
          "Campaign on end-to-end digital journey for motor insurance at ET BFSI Excellence Award 2022",
      },
      {
        id: 4,
        image:
          "https://www.phonepe.com/webstatic/14672/static/Financial-Express-53c3b3e217446915d5602acbd81131bb.png",
        title: "Best Bank Awards 2023",
        description:
          "Excellence in Payment Category for the year 2021-22 at Financial Express",
      },
    ],
  },

  {
    index: 2,
    cards: [
      {
        id: 1,
        image:
          "https://www.phonepe.com/webstatic/14672/static/Financial-Express-53c3b3e217446915d5602acbd81131bb.png",
        title: "Best Bank Awards 2023",
        description:
          "Excellence in Payment Category for the year 2021-22 at Financial Express",
      },
      {
        id: 2,
        image:
          "https://www.phonepe.com/webstatic/14672/static/BFSI-Fintech-Summit-ef741b3d394d2be5f46233d0d5045571.png",
        title: "Fintech of the Year 2022",
        description:
          "Business World's 3rd Edition - Festival of Fintech Conclave Awards",
      },
      {
        id: 3,
        image:
          "https://www.phonepe.com/webstatic/14672/static/ASSOCHAM-e5ad936ef06310e52312a0dbc63c422e.png",
        title: "Excellence in Insurtech",
        description:
          "Excellence in Insurtech category at Assocham's Fintech & Digital Payments Awards 2021",
      },
      {
        id: 4,
        image:
          "https://www.phonepe.com/webstatic/14672/static/India-Retail-e-retail-awards-2019-e03ef7c00fe0f6dd2258f53ba5cccb55.png",
        title: "Best Online Commerce",
        description:
          "Best campaign under the online commerce category at the India Award 2019",
      },
    ],
  },

  {
    index: 3,
    cards: [
      {
        id: 1,
        image:
          "https://www.phonepe.com/webstatic/14672/static/best-compliance-framework-2a14f2d659f1d87951e4c52922046d89.png",
        title: "Best Compliance Framework",
        description:
          "Recognition for excellence in compliance framework and fintech practices",
      },
      {
        id: 2,
        image:
          "https://www.phonepe.com/webstatic/14672/static/silver-winner-e17733a79c2ab0c61ffaf4cfb6efc9db.png",
        title: "Silver Winner",
        description:
          "Silver winner recognition for excellence in digital payments and fintech",
      },
      {
        id: 3,
        image:
          "https://www.phonepe.com/webstatic/14672/static/BFSI-Fintech-Summit-ef741b3d394d2be5f46233d0d5045571.png",
        title: "Excellence in Payment Solutions",
        description:
          "Dun & Bradstreet BFSI & Fintech Summit recognition for payment solutions",
      },
      {
        id: 4,
        image:
          "https://www.phonepe.com/webstatic/14672/static/Business-world-2023-75f54d4441cb9467b56acbb04201b0a9.png",
        title: "Best Payments Solutions",
        description:
          "Recognition for excellence in fintech and payment solutions",
      },
    ],
  },
];

const Awards = () => {
  const [block, setBlock] = useState(0);

  const currentAwards = awards[block];

  const previousBlock = () => {
    setBlock((prev) => (prev === 0 ? awards.length - 1 : prev - 1));
  };

  const nextBlock = () => {
    setBlock((prev) => (prev === awards.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="w-full bg-white px-4 py-12 sm:px-6 md:px-10 lg:px-16 lg:py-20">
      <div className="mx-auto max-w-7xl">

        <div className="mb-10 text-center md:mb-14">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-purple-600 sm:text-sm">
            Recognition
          </p>

          <h1 className="text-3xl font-bold tracking-tight text-purple-800 sm:text-4xl md:text-5xl lg:text-6xl">
            Awards & Accolades
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-gray-500 sm:text-base">
            Our achievements and recognitions that reflect our commitment to
            innovation and excellence.
          </p>
        </div>
        <div className="flex w-full items-center gap-2 sm:gap-4 md:gap-6">

          <button
            type="button"
            onClick={previousBlock}
            aria-label="Previous awards"
            className="group flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gray-200 bg-white text-lg text-purple-700 shadow-sm transition-all duration-300 hover:border-purple-700 hover:bg-purple-700 hover:text-white hover:shadow-lg sm:h-11 sm:w-11 sm:text-xl md:h-12 md:w-12"
          >
            <span className="transition-transform duration-300 group-hover:-translate-x-1">
              ←
            </span>
          </button>
          <div className="min-w-0 flex-1">
            <div
              key={block}
              className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
            >
              {currentAwards.cards.map((card) => (
                <article
                  key={card.id}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-purple-200 hover:shadow-xl"
                >
                  <div className="flex h-40 items-center justify-center bg-gray-50 p-5 sm:h-44 md:h-48">
                    <img
                      src={card.image}
                      alt={card.title}
                      loading="lazy"
                      className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-5 sm:p-6">

                    <h2 className="text-lg font-semibold leading-7 text-purple-700 sm:text-xl">
                      {card.title}
                    </h2>

                    <p className="mt-3 text-sm leading-6 text-gray-500 sm:text-base">
                      {card.description}
                    </p>

                  </div>
                </article>
              ))}
            </div>
          </div>
          <button
            type="button"
            onClick={nextBlock}
            aria-label="Next awards"
            className="group flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gray-200 bg-white text-lg text-purple-700 shadow-sm transition-all duration-300 hover:border-purple-700 hover:bg-purple-700 hover:text-white hover:shadow-lg sm:h-11 sm:w-11 sm:text-xl md:h-12 md:w-12"
          >
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </button>
        </div>
        <div className="mt-4 text-center text-xs font-medium text-gray-400">
          {block + 1} / {awards.length}
        </div>

      </div>
    </section>
  );
};

export default Awards;