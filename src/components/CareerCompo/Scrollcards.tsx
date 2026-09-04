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
    <section className="bg-purple-950 px-4 py-16 sm:px-6 md:px-10 lg:px-16 xl:px-20">
      {/* Heading */}
      <div className="mx-auto mb-12 max-w-7xl text-center text-white md:mb-16">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-purple-300 sm:text-base">
          Initiatives
        </p>

        <h2 className="text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
          Together We Grow :
          <br className="hidden sm:block" />
          <span className="text-purple-200">
            {" "}
            A Community Driven by Shared Purpose
          </span>
        </h2>
      </div>

      {/* Cards */}
      <div className="relative mx-auto max-w-7xl">
        {cards.map((item, index) => (
          <div
            key={item.title}
            className="sticky top-16 flex min-h-[85vh] items-center justify-center py-8 sm:top-20 md:min-h-[90vh]"
          >
            <div
              className="
                flex w-full max-w-6xl
                flex-col overflow-hidden
                rounded-[28px]
                bg-white shadow-2xl
                sm:rounded-[36px]
                md:flex-row
                lg:rounded-[50px]
              "
            >
              {/* Content */}
              <div
                className="
                  flex w-full flex-col justify-center
                  px-6 py-10
                  sm:px-10 sm:py-12
                  md:w-1/2 md:px-10
                  lg:px-16 lg:py-16
                "
              >

                <h3
                  className="
                    text-2xl font-semibold leading-tight text-gray-900
                    sm:text-3xl
                    md:text-3xl
                    lg:text-4xl
                  "
                >
                  {item.title}
                </h3>

                <p
                  className="
                    mt-5 text-sm leading-7 text-gray-500
                    sm:mt-6 sm:text-base sm:leading-8
                    lg:mt-8
                  "
                >
                  {item.description}
                </p>

                <Link
                  href="#"
                  className="
                    mt-7 inline-flex w-fit
                    items-center gap-2
                    rounded-full
                    bg-[#5F259F]
                    px-6 py-3
                    text-sm font-medium text-white
                    transition-all duration-300
                    hover:bg-[#4B1E80]
                    hover:px-7
                    sm:mt-8 sm:px-8 sm:py-3
                  "
                >
                  Know More
                  <span className="text-lg">→</span>
                </Link>
              </div>

              {/* Image */}
              <div
                className="
                  flex w-full
                  min-h-[280px]
                  items-center justify-center
                  bg-gray-50
                  px-6 py-8
                  sm:min-h-[350px]
                  sm:px-10
                  md:w-1/2
                  md:min-h-[500px]
                  lg:min-h-[600px]
                "
              >
                <Image
                  src={item.img}
                  width={600}
                  height={600}
                  alt={item.title}
                  className="
                    h-auto
                    max-h-[280px]
                    w-full
                    max-w-[280px]
                    object-contain
                    sm:max-h-[350px]
                    sm:max-w-[350px]
                    md:max-h-[420px]
                    md:max-w-[420px]
                    lg:max-h-[500px]
                    lg:max-w-125
                  "
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