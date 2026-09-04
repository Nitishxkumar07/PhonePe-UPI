"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const images = [
  {
    id: 1,
    src: "https://www.phonepe.com/webstatic/14723/static/40a7f2cfde4ec5b94532f05aa87f735f/c1ad2/hero-banner-slide-1.webp",
    alt: "Office workspace",
  },
  {
    id: 2,
    src: "https://www.phonepe.com/webstatic/14723/static/bfa5704165b374b0a7e569d8eb782c85/5a863/hero-banner-slide-2.webp",
    alt: "Office hallway",
  },
  {
    id: 3,
    src: "https://www.phonepe.com/webstatic/14723/static/e29e8368aa428da25032d66330304447/e5da5/hero-banner-slide-3.webp",
    alt: "Office workspace",
  },
  {
    id: 4,
    src: "https://www.phonepe.com/webstatic/14723/static/3abfbd8de838324eaa6378f4c0736c2b/e5da5/hero-banner-slide-4.webp",
    alt: "Office interior",
  },
  {
    id: 5,
    src: "https://www.phonepe.com/webstatic/14723/static/21617c6658158544423674bb5c841e6f/46aa6/hero-banner-slide-5.webp",
    alt: "Office room",
  },
];

const CareerHero = () => {
  return (
    <section className="relative w-full mt-18 overflow-hidden bg-white py-3 md:py-8">

      {/* top left */}
      <div className="absolute left-[18%] top-10 z-20 hidden h-14 w-14 rounded-full bg-[#b5e4e8] lg:block" />

      {/* bottom right */}
      <div className="absolute right-[18%] bottom-32 z-20 hidden h-12 w-12 rounded-full bg-[#e95224] lg:block" />

      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: ".gallery-next",
          prevEl: ".gallery-prev",
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={true}
        centeredSlides={true}
        slidesPerView={1.15}
        spaceBetween={18}

        breakpoints={{
          640: {
            slidesPerView: 1.5,
            spaceBetween: 20,
          },

          1024: {
            slidesPerView: 2.15,
            spaceBetween: 30,
          },

          1280: {
            slidesPerView: 2.45,
            spaceBetween: 35,
          },

          1536: {
            slidesPerView: 2.65,
            spaceBetween: 40,
          },
        }}
        className="gallery-swiper overflow-visible!"
      >
        {images.map((image, index) => (
          <SwiperSlide key={image.id}>
            {({ isActive }) => (
              <div
                className={`
                  relative mx-auto
                  h-[200px]
                  rounded-full
                  overflow-hidden
                  transition-all duration-500
                  md:h-[320px]
                  lg:h-[440px]
                  ${isActive
                    ? "w-full rounded-full hover:rounded-4xl"
                    : "w-full rounded-[100px]"
                  }
                `}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  priority={index === 1}
                  className="object-cover"
                  sizes="(max-width: 768px) 90vw, 65vw"
                />
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>

      {/* ================= NAVIGATION ================= */}

      <div className="relative z-30 mt-8 flex items-center justify-center gap-5 md:mt-12">

        {/* Previous */}
        <button
          className="
            gallery-prev
            flex h-12 w-12
            items-center justify-center
            rounded-full
            border-[3px] border-[#aaa5bc]
            bg-white
            text-[#aaa5bc]
            transition-all
            duration-300
            hover:bg-[#aaa5bc]
            hover:text-white
            md:h-[74px] md:w-[74px]
          "
          aria-label="Previous image"
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M19 12H5" />
            <path d="M12 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Next */}
        <button
          className="
            gallery-next
            flex h-12 w-12
            items-center justify-center
            rounded-full
            border-[3px] border-[#aaa5bc]
            bg-white
            text-[#aaa5bc]
            transition-all
            duration-300
            hover:bg-[#aaa5bc]
            hover:text-white
            md:h-[74px] md:w-[74px]
          "
          aria-label="Next image"
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M5 12h14" />
            <path d="M12 5l7 7-7 7" />
          </svg>
        </button>

      </div>
    </section>
  )
}

export default CareerHero
