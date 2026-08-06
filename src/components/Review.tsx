"use client"
import { ArrowLeft, ArrowRight, X, Triangle } from 'lucide-react'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const Review = () => {
    const data = [
        { id: 1, image: "/assets/one.webp", button: "/assets/button.svg", link: "https://www.youtube.com/embed/4SpalEoD1qw" },
        { id: 2, image: "/assets/two.webp", button: "/assets/button.svg", link: "https://www.youtube.com/embed/27U7oEesKn8" },
        { id: 3, image: "/assets/three.webp", button: "/assets/button.svg", link: "https://www.youtube.com/embed/7CF3I7Os2x0" },
        { id: 4, image: "/assets/four.webp", button: "/assets/button.svg", link: "https://www.youtube.com/embed/KsV1hqG__2g" },
    ]
    const [current, setCurrent] = useState(0);
    const [selectedVideo, setSelectedVideo] = useState("");
    const [open, setOpen] = useState(false)
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % data.length)
        }, 5000)
        return () => clearInterval(timer)
    }, [data.length])
    return (
        <div>
            <div className='text-center'>
                <h1 className='text-4xl font-semibold mx-auto max-w-3xl self-center justify-center items-center'>Payments on PhonePe are safe,reliable, and quick</h1>
                <p className='text-xl text-gray-800 max-w-4xl mt-6 items-center justify-center self-center mx-auto'>One in three Indians uses the PhonePe app to send money, recharge, pay bills, and more — all in just a few clicks. PhonePe also offers a wide range of financial services, including Insurance, Investments, and Lending, giving every Indian an equal opportunity to unlock the flow of money and access to services.</p>
            </div>
            <div>
                <div className="mt-16 flex flex-col justify-center items-center">
                    <div className="relative w-200 h-125 overflow-hidden rounded-[40px]">
                        {data.map((item, index) => (
                            <div
                                key={item.id}
                                className={`absolute inset-0 transition-all duration-700 ${current === index
                                    ? "opacity-100 scale-100"
                                    : "opacity-0 scale-95"
                                    }`}
                            >
                                <img
                                    src={item.image}
                                    alt=""
                                    className="h-full w-full rounded-[40px] object-cover transition-all duration-500 hover:scale-105"
                                />

                                <button onClick={() => { setOpen(true); setSelectedVideo(item.link) }} className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-xl transition hover:scale-110">
                                    <Link href={"#"}>
                                        <img
                                            src={item.button}
                                            alt=""
                                            className="h-8 w-8"
                                        />
                                    </Link>
                                </button>
                            </div>
                        ))}
                        <div>
                            {open && (
                                <div className='fixed inset-0 z-40 flex flex-col items-center justify-center bg-black/70'>
                                    <iframe
                                        width="900"
                                        height="500"
                                        src={selectedVideo}
                                        title="Youtube Video"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    />
                                    <button onClick={() => setOpen(false)} className='z-50 p-2 rounded-full mt-5 bg-white border border-black'><X size={24} /></button>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="mt-6 flex justify-center gap-4">
                        <button
                            onClick={() =>
                                setCurrent((prev) => (prev === 0 ? data.length - 1 : prev - 1))
                            }
                            className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-300 bg-white shadow-md transition hover:bg-purple-600 hover:text-white"
                        >
                            <ArrowLeft size={22} />
                        </button>

                        <button
                            onClick={() =>
                                setCurrent((prev) => (prev + 1) % data.length)
                            }
                            className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-300 bg-white shadow-md transition hover:bg-purple-600 hover:text-white"
                        >
                            <ArrowRight size={22} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Review
