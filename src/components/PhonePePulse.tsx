"use client";

import Image from "next/image";

export default function PhonePePulse() {
    return (
        <section className="relative mt-32">
            <div className="h-56 bg-white"></div>
            <div className="relative bg-[#3E296B] py-32">
                <div className="absolute left-1/2 top-0 z-20 w-200 -translate-x-1/2 -translate-y-1/2">
                    <div className="flex overflow-hidden rounded-[30px] bg-linear-to-r from-[#A78BFA] via-[#7C3AED] to-[#5B21B6] shadow-2xl">
                        <div className="flex w-50 items-center justify-center bg-[#6F52B6]">
                            <Image
                                src="/assets/security.svg"
                                width={170}
                                height={170}
                                alt=""
                            />
                        </div>
                        <div className="flex flex-1 flex-col justify-center px-12 py-10 text-white">
                            <h2 className="text-4xl font-bold">
                                Your money stays safe.
                            </h2>
                            <p className="mt-5 text-lg text-purple-100">
                                PhonePe protects your money with security systems that
                                help minimize frauds.
                            </p>
                            <div className="mt-10 flex gap-8">
                                <Image
                                    src="/assets/pci.png"
                                    width={100}
                                    height={35}
                                    alt=""
                                />
                                <Image
                                    src="/assets/iso.png"
                                    width={100}
                                    height={35}
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative z-10 mx-auto max-w-6xl text-center text-white overflow-hidden">
                    <div className="flex items-center justify-center gap-4 mt-2.5">
                        <Image
                            src="/assets/logo.svg"
                            width={120}
                            height={100}
                            alt=""
                        />
                    </div>
                    <p className="mt-5 text-2xl text-purple-100">
                        Get the latest data trends & insights on PhonePe Pulse!
                    </p>
                    <div className="relative mt-16 flex h-150 items-center justify-center">
                        <div className="absolute h-200 w-200 rounded-full border-40 border-[#6B4DB3]/40"></div>
                        <div className="absolute h-160 w-160 rounded-full border-35 border-[#6B4DB3]/40"></div>
                        <div className="absolute h-125 w-125 rounded-full border-30 border-[#6B4DB3]/35"></div>
                        <div className="absolute h-80 w-80 rounded-full border-25 border-[#6B4DB3]/35"></div>
                        <div className="absolute left-20 top-20">
                            <p className="text-xl">Trusted by</p>
                            <h2 className="text-4xl font-bold">
                                65+ Crore*
                            </h2>
                            <p className="text-xl">
                                Registered Users
                            </p>
                        </div>
                        <div className="absolute top-20">
                            <p className="text-xl">
                                Accepted in
                            </p>
                            <h2 className="text-4xl font-bold">
                                98%*
                            </h2>
                            <p className="text-xl">
                                Postal Codes
                            </p>
                        </div>
                        <div className="absolute right-10 top-20">
                            <p className="text-xl">
                                Accepted at over
                            </p>
                            <h2 className="text-4xl font-bold">
                                4.7+ Crore*
                            </h2>
                            <p className="text-xl">
                                Merchants
                            </p>
                        </div>
                        <button className="absolute mt-10 rounded-full bg-white px-10 py-4 text-base font-semibold text-black transition hover:scale-105">
                            Explore PhonePe Pulse
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}