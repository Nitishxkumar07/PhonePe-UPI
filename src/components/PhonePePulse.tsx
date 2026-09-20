"use client";

import Image from "next/image";

export default function PhonePePulse() {
  return (
    <section className="relative mt-16 sm:mt-24 lg:mt-28">
      {/* Top Spacer / Background Bridge */}
      <div className="h-28 sm:h-36 lg:h-44 bg-white" />

      {/* Main Container */}
      <div className="relative bg-[#3E296B] px-4 pt-32 sm:pt-36 lg:pt-40 pb-16 sm:pb-24 lg:pb-28">
        
        {/* Floating Security Banner */}
        <div className="absolute left-1/2 top-0 z-20 w-[92%] sm:w-[85%] max-w-4xl -translate-x-1/2 -translate-y-1/2">
          <div className="flex flex-col sm:flex-row overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-r from-[#A78BFA] via-[#7C3AED] to-[#5B21B6] shadow-2xl">
            
            {/* Security Icon Container */}
            <div className="flex w-full sm:w-44 lg:w-48 items-center justify-center bg-[#6F52B6] p-6 sm:p-4 shrink-0">
              <Image
                src="/assets/security.svg"
                width={130}
                height={130}
                alt="Security Shield"
                className="h-20 w-20 sm:h-28 sm:w-28 object-contain"
              />
            </div>

            {/* Banner Text & Accreditations */}
            <div className="flex flex-1 flex-col justify-center p-6 sm:p-8 lg:px-10 lg:py-8 text-white">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold leading-tight">
                Your money stays safe.
              </h2>
              <p className="mt-2 sm:mt-3 text-sm sm:text-base text-purple-100 leading-relaxed">
                PhonePe protects your money with security systems that help minimize frauds.
              </p>
              
              <div className="mt-5 sm:mt-6 flex items-center gap-6">
                <Image
                  src="/assets/pci.png"
                  width={80}
                  height={28}
                  alt="PCI DSS Certified"
                  className="h-6 sm:h-7 w-auto object-contain"
                />
                <Image
                  src="/assets/iso.png"
                  width={80}
                  height={28}
                  alt="ISO Certified"
                  className="h-6 sm:h-7 w-auto object-contain"
                />
              </div>
            </div>

          </div>
        </div>

        {/* Pulse Insights Content */}
        <div className="relative z-10 mx-auto max-w-5xl text-center text-white overflow-hidden">
          
          {/* Logo */}
          <div className="flex items-center justify-center gap-3">
            <Image
              src="/assets/logo.svg"
              width={100}
              height={80}
              alt="PhonePe Logo"
              className="h-10 sm:h-12 lg:h-14 w-auto object-contain"
            />
          </div>

          <p className="mt-3 sm:mt-4 text-base sm:text-xl lg:text-2xl text-purple-100 font-medium px-2">
            Get the latest data trends & insights on PhonePe Pulse!
          </p>

          {/* Stats Rings Layout (Grid on Mobile, Orbital Rings on Desktop) */}
          <div className="relative mt-10 sm:mt-12 lg:mt-16 flex min-h-[380px] sm:min-h-[440px] lg:h-[480px] items-center justify-center">
            
            {/* Concentric Pulse Rings (Scales visually on desktop) */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
              <div className="absolute h-[380px] w-[380px] sm:h-[500px] sm:w-[500px] lg:h-[600px] lg:w-[600px] rounded-full border-[20px] sm:border-[28px] lg:border-[32px] border-[#6B4DB3]/35" />
              <div className="absolute h-[300px] w-[300px] sm:h-[400px] sm:w-[400px] lg:h-[480px] lg:w-[480px] rounded-full border-[16px] sm:border-[22px] lg:border-[26px] border-[#6B4DB3]/35" />
              <div className="absolute h-[220px] w-[220px] sm:h-[300px] sm:w-[300px] lg:h-[360px] lg:w-[360px] rounded-full border-[12px] sm:border-[18px] lg:border-[22px] border-[#6B4DB3]/30" />
            </div>

            {/* Stat Callouts Container */}
            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 lg:gap-12 w-full max-w-4xl px-4 py-8 sm:py-0">
              
              {/* Stat 1 */}
              <div className="flex flex-col items-center justify-center text-center">
                <p className="text-xs sm:text-sm lg:text-base text-purple-200">Trusted by</p>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight my-1 text-white">
                  65+ Crore*
                </h3>
                <p className="text-xs sm:text-sm lg:text-base text-purple-200">Registered Users</p>
              </div>

              {/* Stat 2 */}
              <div className="flex flex-col items-center justify-center text-center">
                <p className="text-xs sm:text-sm lg:text-base text-purple-200">Accepted in</p>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight my-1 text-white">
                  98%*
                </h3>
                <p className="text-xs sm:text-sm lg:text-base text-purple-200">Postal Codes</p>
              </div>

              {/* Stat 3 */}
              <div className="flex flex-col items-center justify-center text-center">
                <p className="text-xs sm:text-sm lg:text-base text-purple-200">Accepted at over</p>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight my-1 text-white">
                  4.7+ Crore*
                </h3>
                <p className="text-xs sm:text-sm lg:text-base text-purple-200">Merchants</p>
              </div>

            </div>

            {/* CTA Button */}
            <div className="absolute bottom-2 sm:bottom-4 lg:bottom-6 z-20">
              <button className="rounded-full bg-white px-7 sm:px-9 py-3 sm:py-3.5 text-sm sm:text-base font-semibold text-[#3E296B] shadow-lg transition-transform duration-300 hover:scale-105 active:scale-95">
                Explore PhonePe Pulse
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}