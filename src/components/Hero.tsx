"use client"
import React, { useState, useEffect } from 'react'
import Link from 'next/link';
export const Hero = () => {
    const sections = [
        {
            id: 1,
            title: "Fast Payments",
            subtitle: "Send and receive money instantly with a secure flow.",
            button: "Get Started",
            image: "https://www.phonepe.com/webstatic/14558/static/8f964c553681953eb4229fa0b4fd6cd8/38bc9/desktop.webp",
            bgimage: "https://www.phonepe.com/static/desktopGradient-168c698d5b44fa7e2487ddc7cfc89bdb.png"
        },
        {
            id: 2,
            title: "Bill Payments",
            subtitle: "Pay electricity, mobile, recharge, and other bills easily.",
            button: "Pay Now",
            image: "https://www.phonepe.com/webstatic/14573/static/6de1f5478f580af06fe5fb1caf8e3779/a237d/desktop.webp",
            bgimage: "https://www.phonepe.com/static/desktopGradient-168c698d5b44fa7e2487ddc7cfc89bdb.png"
        },
        {
            id: 3,
            title: "Business Tools",
            subtitle: "Manage collections, payouts, and business reports in one place.",
            button: "Explore",
            image: "https://www.phonepe.com/webstatic/14573/static/09f9a6b52de99366da25a1c4bfcca266/ab1fd/bannerImage.webp",
            bgimage: "https://www.phonepe.com/static/desktopGradient-168c698d5b44fa7e2487ddc7cfc89bdb.png"
        },
        {
            id: 4,
            title: "Business Tools",
            subtitle: "Manage collections, payouts, and business reports in one place.",
            button: "Explore",
            image: "https://www.phonepe.com/webstatic/14573/static/b3d7c6e728c0bc39bee93e872e2a02aa/515aa/bannerImage.webp",
            bgimage: "https://www.phonepe.com/static/desktopGradient-168c698d5b44fa7e2487ddc7cfc89bdb.png"
        },
        {
            id: 5,
            title: "Business Tools",
            subtitle: "Manage collections, payouts, and business reports in one place.",
            button: "Explore",
            image: "https://www.phonepe.com/webstatic/14573/static/b0a689b21cde32035081b0d67993f6b7/81a35/hero-sbi-banner-image-desktop.webp",
            bgimage: "https://www.phonepe.com/static/desktopGradient-168c698d5b44fa7e2487ddc7cfc89bdb.png"
        },
        {
            id: 6,
            title: "Business Tools",
            subtitle: "Manage collections, payouts, and business reports in one place.",
            button: "Explore",
            image: "https://www.phonepe.com/webstatic/14573/static/4a69d0c59eebf5bed419c64bed212879/0f810/desktop.webp",
            bgimage: "https://www.phonepe.com/static/desktopGradient-168c698d5b44fa7e2487ddc7cfc89bdb.png"
        },
    ];

    const [current, setCurrent] = useState(0);
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev === sections.length - 1 ? 0 : prev + 1))
        }, 9000)
        return () => clearInterval(timer)
    }, [])

    return (
        <section className="relative h-175 overflow-hidden bg-white mt-20">
            {/* Background */}
            <img
                src={sections[current].bgimage}
                alt=""
                className="hero inset-0 h-full w-full object-cover -z-10"
            />

            <div className="mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center">

                {/* Text */}
                <h1 className="max-w-3xl text-3xl font-bold text-[#3D246C] lg:text-4xl">
                    {sections[current].title}
                </h1>

                <p className="mt-5 max-w-2xl text-base leading-8 text-gray-600">
                    {sections[current].subtitle}
                </p>

                <Link
                    href="#"
                    className="mt-3 rounded-full bg-[#6739B7] px-8 py-3 text-lg font-semibold text-white transition hover:scale-105 hover:bg-[#5b2fb3]"
                >
                    {sections[current].button}
                </Link>

                {/* Image */}
                <div className="mt-2 flex justify-center">
                    <img
                        src={sections[current].image}
                        alt=""
                        className="max-h-90 w-auto object-contain"
                    />
                </div>

                {/* Dots */}
                <div className="mt-12 flex gap-4">
                    {sections.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrent(index)}
                            className={`h-3 rounded-full transition-all duration-300 ${current === index
                                    ? "w-10 bg-[#6739B7]"
                                    : "w-3 bg-gray-300 hover:bg-gray-400"
                                }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

