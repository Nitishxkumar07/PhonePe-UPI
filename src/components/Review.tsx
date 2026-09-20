"use client"
import { ArrowLeft, ArrowRight, X } from 'lucide-react'
import React, { useEffect, useState } from 'react'

export const Review = () => {
    const data = [
        { id: 1, image: "/assets/one.webp", button: "/assets/button.svg", link: "https://www.youtube.com/embed/4SpalEoD1qw?autoplay=1" },
        { id: 2, image: "/assets/two.webp", button: "/assets/button.svg", link: "https://www.youtube.com/embed/27U7oEesKn8?autoplay=1" },
        { id: 3, image: "/assets/three.webp", button: "/assets/button.svg", link: "https://www.youtube.com/embed/7CF3I7Os2x0?autoplay=1" },
        { id: 4, image: "/assets/four.webp", button: "/assets/button.svg", link: "https://www.youtube.com/embed/KsV1hqG__2g?autoplay=1" },
    ]
    const [current, setCurrent] = useState(0);
    const [selectedVideo, setSelectedVideo] = useState("");
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (open) return;

        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % data.length)
        }, 5000)
        return () => clearInterval(timer)
    }, [data.length, open])

    return (
        <section className="px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
            <div className="text-center">
                <h1 className="mx-auto max-w-3xl text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl lg:text-4xl">
                    Payments on PhonePe are safe, reliable, and quick
                </h1>
                <p className="mx-auto mt-4 max-w-4xl text-sm leading-relaxed text-gray-700 sm:text-base sm:leading-7 lg:text-lg">
                    One in three Indians uses the PhonePe app to send money, recharge, pay bills, and more — all in just a few clicks. PhonePe also offers a wide range of financial services, including Insurance, Investments, and Lending, giving every Indian an equal opportunity to unlock the flow of money and access to services.
                </p>
            </div>

            <div className="mt-8 sm:mt-12 lg:mt-16 flex flex-col items-center justify-center">
                <div className="relative aspect-video w-full max-w-4xl overflow-hidden rounded-2xl sm:rounded-3xl lg:rounded-[40px] shadow-xl">
                    {data.map((item, index) => (
                        <div
                            key={item.id}
                            className={`absolute inset-0 transition-all duration-700 ${
                                current === index
                                    ? "opacity-100 scale-100 z-10"
                                    : "opacity-0 scale-95 z-0"
                            }`}
                        >
                            <img
                                src={item.image}
                                alt={`Review slide ${item.id}`}
                                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                            />

                            <button 
                                onClick={() => { 
                                    setSelectedVideo(item.link); 
                                    setOpen(true); 
                                }} 
                                aria-label="Play review video"
                                className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 shadow-xl backdrop-blur-sm transition-transform duration-300 hover:scale-110 sm:h-16 sm:w-16"
                            >
                                <img
                                    src={item.button}
                                    alt="Play"
                                    className="h-6 w-6 sm:h-8 sm:w-8"
                                />
                            </button>
                        </div>
                    ))}
                </div>

                <div className="mt-6 flex items-center justify-center gap-4">
                    <button
                        onClick={() =>
                            setCurrent((prev) => (prev === 0 ? data.length - 1 : prev - 1))
                        }
                        aria-label="Previous slide"
                        className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-gray-300 bg-white text-gray-700 shadow-md transition hover:bg-[#5F259F] hover:text-white"
                    >
                        <ArrowLeft size={20} />
                    </button>

                    <button
                        onClick={() =>
                            setCurrent((prev) => (prev + 1) % data.length)
                        }
                        aria-label="Next slide"
                        className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-gray-300 bg-white text-gray-700 shadow-md transition hover:bg-[#5F259F] hover:text-white"
                    >
                        <ArrowRight size={20} />
                    </button>
                </div>
            </div>

            {open && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm">
                    <div className="relative w-full max-w-4xl">
                        <button 
                            onClick={() => setOpen(false)} 
                            aria-label="Close video modal"
                            className="absolute -top-12 right-0 flex h-10 w-10 items-center justify-center rounded-full bg-white text-black shadow-lg transition hover:bg-gray-200"
                        >
                            <X size={22} />
                        </button>

                        <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-black shadow-2xl">
                            <iframe
                                src={selectedVideo}
                                title="YouTube Video"
                                className="absolute inset-0 h-full w-full"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}

export default Review