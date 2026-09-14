"use client";

import Link from "next/link";
import Image from "next/image";
import React from "react";

const Scrollcards = () => {
  const cards = [
    {
      title: "Learning & Growth",
      description:
        "PhonePe thrives on solving complex challenges at scale by fostering a culture of continuous learning. Through initiatives like PhonePe University and Manager Development Programs, we integrate learning into daily work, empowering employees to own their growth, deepen expertise, and drive meaningful impact in the digital and financial revolution.",
      img: "https://www.phonepe.com/webstatic/14723/static/105be27f4e6012c38134303bcafb0e60/6e89e/learningAtPhonepe.webp",
    },
    {
      title: "Life at PhonePe",
      description:
        "At PhonePe, a vibrant culture fuels creativity and connection. From Hackathons to hobby clubs, musical evenings to cultural events, we create spaces for passion, bonding, and recharging. These experiences foster belonging, joy, and collaboration—making PhonePe not just a workplace, but a community where people grow and thrive together.",
      img: "https://www.phonepe.com/webstatic/14723/static/bf74afaddad36263bc45449d3a0049e7/6e89e/lifeAtPhonepe.webp",
    },
    {
      title: "Diversity & Inclusion",
      description:
        "At PhonePe, inclusion is a daily commitment. We foster a culture where diverse voices thrive through equitable support, inclusive policies, and dedicated programs for women, mothers, LGBTQ+ individuals, and people with disabilities. With accessible infrastructure and ongoing education, everyone is empowered to belong, grow, and be their authentic selves.",
      img: "https://www.phonepe.com/webstatic/14723/static/f76dd3ab64e8dba3c7ae89791a6de176/6e89e/gender.webp",
    },
  ];

  return (
    <section className="bg-purple-950 px-4 py-12 sm:px-6 md:px-10">
      {/* Heading */}
      <div className="mx-auto mb-8 max-w-3xl text-center text-white md:mb-12">
        <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-purple-300 sm:text-sm">
          Initiatives
        </p>

        <h2 className="text-2xl font-semibold leading-tight sm:text-3xl md:text-4xl">
          Together We Grow :{" "}
          <span className="text-purple-200">
            A Community Driven by Shared Purpose
          </span>
        </h2>
      </div>

      {/* Cards */}
      <div className="relative mx-auto max-w-3xl">
        {cards.map((item) => (
          <div key={item.title} className="sticky top-20 flex items-center justify-center py-4">
            <div className="flex w-full flex-col overflow-hidden rounded-2xl bg-white shadow-xl sm:rounded-3xl md:flex-row">
              {/* Content */}
              <div className="flex w-full flex-col justify-center p-5 sm:p-7 md:w-1/2">
                <h3 className="text-lg font-bold leading-tight text-gray-900 sm:text-xl">
                  {item.title}
                </h3>

                <p className="mt-3 text-xs leading-relaxed text-gray-600 sm:mt-4 sm:text-sm sm:leading-6">
                  {item.description}
                </p>

                <Link href="#" className="mt-5 inline-flex w-fit items-center gap-2 rounded-full bg-[#5F259F] px-4 py-2 text-xs font-medium text-white transition-all duration-300 hover:bg-[#4B1E80] sm:mt-6 sm:px-6 sm:py-2.5 sm:text-sm">
                  Know More
                  <span className="text-sm">→</span>
                </Link>
              </div>

              {/* Image */}
              <div className="flex w-full items-center justify-center bg-gray-50 p-6 md:w-1/2">
                <Image
                  src={item.img}
                  width={400}
                  height={400}
                  alt={item.title}
                  className="h-auto max-h-44 w-full max-w-45 object-contain sm:max-h-56 sm:max-w-60"
                  unoptimized
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Scrollcards;