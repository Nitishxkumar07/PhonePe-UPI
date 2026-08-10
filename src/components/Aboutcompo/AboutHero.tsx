"use client"
import { image } from 'framer-motion/client';
import React, { useState } from 'react'

const AboutHero = () => {
    const images = [
        {
            id: 1,
            image: "https://www.phonepe.com/webstatic/14618/static/pin2016-429b1b866f3573ffef59c299d4ed17dc.svg",
            bgimage: "https://www.phonepe.com/static/2016-50bb39c20b8f7586df0ae02d9aedd9fb.svg",
            button: "2016"
        },
        {
            id: 2,
            image: "https://www.phonepe.com/webstatic/14618/static/pin2017-17faf26fd6156f19ac7ee09f8d4cf1d7.svg",
            bgimage: "https://www.phonepe.com/static/2017_mob-fa6fbcccebcf954e69b3f8f1f7088232.svg",
            button: "2017"
        },
        {
            id: 3,
            image: "https://www.phonepe.com/webstatic/14618/static/pin2018-7d15b1d22eceb337df8e88ae01a403a1.svg",
            bgimage: "https://www.phonepe.com/static/2018-5baab62be077da500f9654bbbb2a83bb.svg",
            button: "2018"
        },
        {
            id: 4,
            image: "https://www.phonepe.com/webstatic/14618/static/pin2019-2-68cd397ae288806cb245bab274bacc84.svg",
            bgimage: "https://www.phonepe.com/static/2019-804303e2a92efbf56facd9045f7a4638.svg",
            button: "2019"
        },
        {
            id: 5,
            image: "https://www.phonepe.com/webstatic/14618/static/pin2020-9c8243c0d01d4e22d60bbfbddd2d95f3.svg",
            bgimage: "https://www.phonepe.com/static/2020-5ffe7b23223100e7ca1dd53a21d1c35d.svg",
            button: "2020"
        },
        {
            id: 6,
            image: "https://www.phonepe.com/webstatic/14618/static/pin2021-2f18cfc1f347022985aef6b9e9af2f43.svg",
            bgimage: "https://www.phonepe.com/static/2021-90d6cae46d4d5750709b9c951ac61d54.svg",
            button: "2021"
        },
        {
            id: 7,
            image: "https://www.phonepe.com/webstatic/14618/static/pin2022-c9f5677d7216664a1352de89c2351abc.svg",
            bgimage: "https://www.phonepe.com/static/2022-5b3fcc4ef7277d11b373f84e4b212e8c.svg",
            button: "2022"
        },
        {
            id: 8,
            image: "https://www.phonepe.com/webstatic/14618/static/pin2023-97c4ec418b9337bffc9c5b74e8672880.svg",
            bgimage: "https://www.phonepe.com/static/2023-b9c961e00c47ae6a617ce6fc72a66f5f.svg",
            button: "2023"
        },
        {
            id: 9,
            image: "https://www.phonepe.com/webstatic/14618/static/pin2024-ad25c61682303a81cffe42127af1c412.svg",
            bgimage: "https://www.phonepe.com/static/2024-0e30ff31340a1f7dad50f05130d5aab0.svg",
            button: "2024"
        },
        {
            id: 10,
            image: "https://www.phonepe.com/webstatic/14618/static/pin2025-d4b30a78a8184feb63475ad1244ac11b.svg",
            bgimage: "https://www.phonepe.com/static/2025-3590483933d130891d0b1512a5080954.svg",
            button: "2025"
        },
    ];
    const [current, setCurrent] = useState(0)
    return (
        <div className='mt-24'>
            <div>
                <p className='text-center text-3xl font-semibold text-purple-800'>To offer every Indian an equal opportunity to accelerate their progress by unlocking the flow of money & democratizing access to services</p>
                <div className="relative w-full h-[80vh] overflow-hidden">
                    {images.map((item, index) => (
                        <div
                            key={item.id}
                            className={`absolute inset-0 transition-all duration-700 ${index === current
                                    ? "opacity-100 visible z-10"
                                    : "opacity-0 invisible z-0"
                                }`}
                        >
                            <img
                                src={item.bgimage}
                                alt=""
                                className="absolute inset-0 w-full h-[80vh] object-cover"
                            />
                            <img
                                src={item.image}
                                alt=""
                                className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[75%] object-contain z-10"
                            />
                        </div>
                    ))}
                </div>
                <div className='flex flex-row gap-2 rounded-4xl p-4 mt-4 max-w-3xl justify-center mx-auto border border-transparent bg-white shadow-2xl'>
                    {images.map((item, index) => (
                        <div key={index} onClick={() => setCurrent(index)} className={`flex flex-col items-center justify-center`}>
                            <div className='flex flex-row'><span className={`p-2 rounded-full h-2 w-2 bg-gray-800 ${index == current ? "bg-purple-800" : "bg-gray-800"}`}></span></div>
                            <button className='flex flex-row'>{item.button}</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default AboutHero
