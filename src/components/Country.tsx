"use client";

import Marquee from "react-fast-marquee";
import Image from "next/image";

interface ServiceItem {
  id: number;
  title: string;
  image: string;
}

const services: ServiceItem[] = [
  { id: 1, title: "DTH", image: "/assets/download.svg" },
  { id: 2, title: "Cable Television", image: "/assets/tv.svg" },
  { id: 3, title: "Mobile Recharge", image: "/assets/mobile.svg" },
  { id: 4, title: "FASTag Recharge", image: "/assets/fasttag.svg" },
];

const home: ServiceItem[] = [
  { id: 1, title: "Water", image: "/assets/download.svg" },
  { id: 2, title: "Rent Payment", image: "/assets/tv.svg" },
  { id: 3, title: "Piped Gas", image: "/assets/mobile.svg" },
  { id: 4, title: "Credit Card", image: "/assets/fasttag.svg" },
  { id: 5, title: "Book Cylinder", image: "/assets/fasttag.svg" },
  { id: 6, title: "Electricity", image: "/assets/fasttag.svg" },
];

const bank: ServiceItem[] = [
  { id: 1, title: "Municipal Tax", image: "/assets/download.svg" },
  { id: 2, title: "Loan Repayment", image: "/assets/tv.svg" },
  { id: 3, title: "Insurance", image: "/assets/mobile.svg" },
  { id: 4, title: "Recurring Deposit", image: "/assets/fasttag.svg" },
];

const Card = ({ item }: { item: ServiceItem }) => (
  <div className="flex items-center gap-3 sm:gap-4">
    <div className="flex items-center gap-3 sm:gap-4 rounded-full border border-purple-200/80 bg-white/95 px-3.5 py-2 sm:px-5 sm:py-3 shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-lg">
      <div className="flex h-10 w-10 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-full bg-purple-100/80">
        <Image
          src={item.image}
          alt={item.title}
          width={28}
          height={28}
          className="h-5 w-5 sm:h-7 sm:w-7 object-contain"
        />
      </div>

      <p className="whitespace-nowrap text-sm sm:text-base lg:text-lg font-semibold text-gray-800">
        {item.title}
      </p>
    </div>

    <div className="h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-purple-400/80 shrink-0"></div>
  </div>
);

export default function Country() {
  return (
    <section className="overflow-hidden bg-gradient-to-br from-violet-50 via-white to-purple-100 py-10 sm:py-16 ">
      <div className="mx-auto w-full space-y-4 sm:space-y-6 lg:space-y-8">
        
        {/* Row 1 */}
        <Marquee
          gradient={false}
          speed={35}
          autoFill={true}
          pauseOnHover={true}
        >
          <div className="flex items-center gap-4 sm:gap-6 lg:gap-8 px-2 sm:px-4">
            {services.map((item) => (
              <Card key={item.id} item={item} />
            ))}
          </div>
        </Marquee>

        {/* Row 2 */}
        <Marquee
          gradient={false}
          speed={35}
          autoFill={true}
          pauseOnHover={true}
          direction="right"
        >
          <div className="flex items-center gap-4 sm:gap-6 lg:gap-8 px-2 sm:px-4">
            {home.map((item) => (
              <Card key={item.id} item={item} />
            ))}
          </div>
        </Marquee>

        {/* Row 3 */}
        <Marquee
          gradient={false}
          speed={35}
          autoFill={true}
          pauseOnHover={true}
        >
          <div className="flex items-center gap-4 sm:gap-6 lg:gap-8 px-2 sm:px-4">
            {bank.map((item) => (
              <Card key={item.id} item={item} />
            ))}
          </div>
        </Marquee>

      </div>
    </section>
  );
}