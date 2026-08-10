"use client";
import Marquee from "react-fast-marquee";
import Image from "next/image";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      marquee: React.HTMLAttributes<HTMLElement>;
    }
  }
}

const services = [
  { id: 1, title: "DTH", image: "/assets/download.svg" },
  { id: 2, title: "Cable Television", image: "/assets/tv.svg" },
  { id: 3, title: "Mobile Recharge", image: "/assets/mobile.svg" },
  { id: 4, title: "FASTag Recharge", image: "/assets/fasttag.svg" },
];

const home = [
  { id: 1, title: "Water", image: "/assets/download.svg" },
  { id: 2, title: "Rent Payment", image: "/assets/tv.svg" },
  { id: 3, title: "Piped Gas", image: "/assets/mobile.svg" },
  { id: 4, title: "Credit Card", image: "/assets/fasttag.svg" },
  { id: 5, title: "Book Cylinder", image: "/assets/fasttag.svg" },
  { id: 6, title: "Electricity", image: "/assets/fasttag.svg" },
];

const bank = [
  {
    id: 1, title: "Municipal Tax", image: "/assets/download.svg",
  },
  {
    id: 2, title: "Loan Repayment", image: "/assets/tv.svg",
  },
  {
    id: 3, title: "Insurance", image: "/assets/mobile.svg",
  },
  {
    id: 4, title: "Recurring Deposit", image: "/assets/fasttag.svg",
  },
];

const Card = ({ item }: any) => (
  <div className="flex items-center gap-4">
    <div className="flex items-center gap-4 rounded-full border border-purple-200 bg-white/90 px-5 py-3 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-purple-100">
        <Image
          src={item.image}
          alt={item.title}
          width={34}
          height={34}
        />
      </div>

      <p className="whitespace-nowrap text-lg font-semibold text-gray-800">
        {item.title}
      </p>
    </div>

    <div className="h-3 w-3 rounded-full bg-purple-500"></div>
  </div>
);

export default function Country() {
  return (
    <section className="overflow-hidden bg-gradient-to-br from-violet-50 via-white to-purple-100 py-16">

      <div className="mx-auto max-w-7xl space-y-8">

        <Marquee
          gradient={false}
          speed={40}
          autoFill={true}
          pauseOnHover={true}
        >
          <div className="flex items-center gap-8 px-4">
            {services.map((item) => (
              <Card key={item.id} item={item} />
            ))}
          </div>
        </Marquee>

        <Marquee
          gradient={false}
          speed={40}
          autoFill={true}
          pauseOnHover={true}
          direction="right"
        >
          <div className="flex items-center gap-8 px-4">
            {home.map((item) => (
              <Card key={item.id} item={item} />
            ))}
          </div>
        </Marquee>

        <Marquee
          gradient={false}
          speed={40}
          autoFill={true}
          pauseOnHover={true}
        >
          <div className="flex items-center gap-8 px-4">
            {bank.map((item) => (
              <Card key={item.id} item={item} />
            ))}
          </div>
        </Marquee>

      </div>
    </section>
  );
}