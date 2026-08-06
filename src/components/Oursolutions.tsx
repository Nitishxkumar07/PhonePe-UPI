"use client"
import { useState } from "react"
import Link from "next/link"
export const megaMenu = [
  {
    id: 1,
    title: "For Businesses",
    active: false,

    sections: [
      {
        title: "OFFLINE MERCHANT SOLUTIONS",
        items: [
          {
            title: "Offline Payments",
            icon: "/icons/offline-payments.svg",
            link: "/offline-payments",
          },
          {
            title: "Offline Partner Program",
            icon: "/icons/offline-partner.svg",
            link: "/offline-partner-program",
          },
        ],
      },

      {
        title: "ONLINE MERCHANT SOLUTIONS",
        items: [
          {
            title: "Payment Gateway",
            icon: "/icons/payment-gateway.svg",
            link: "/payment-gateway",
          },
          {
            title: "Payment Gateway Partner",
            icon: "/icons/payment-gateway-partner.svg",
            link: "/payment-gateway-partner",
          },
          {
            title: "Payment Aggregator",
            icon: "/icons/payment-aggregator.svg",
            link: "/payment-aggregator",
          },
          {
            title: "Payment Links",
            icon: "/icons/payment-links.svg",
            link: "/payment-links",
          },
        ],
      },

      {
        title: "MORE SOLUTIONS",
        items: [
          {
            title: "Merchant Lending",
            icon: "/icons/merchant-lending.svg",
            link: "/merchant-lending",
          },
          {
            title: "PhonePe Ads",
            icon: "/icons/phonepe-ads.svg",
            link: "/phonepe-ads",
          },
        ],
      },
    ],
  },

  {
    id: 2,
    title: "For Consumers",
    active: true,

    sections: [
      {
        title: "CONSUMER PAYMENTS",
        items: [
          {
            title: "All Payment Instruments",
            icon: "/icons/payment-instruments.svg",
            link: "/payments",
          },
          {
            title: "NRI Payments by PhonePe",
            icon: "/icons/nri-payments.svg",
            link: "/nri-payments",
          },
        ],
      },

      {
        title: "LENDING",
        items: [
          {
            title: "Consumer Lending",
            icon: "/icons/consumer-lending.svg",
            link: "/consumer-lending",
          },
          {
            title: "Secured Lending",
            icon: "/icons/secured-lending.svg",
            link: "/secured-lending",
          },
        ],
      },

      {
        title: "CO-BRANDED CREDIT CARDS",
        items: [
          {
            title: "PhonePe SBI Card Credit Cards",
            icon: "/icons/sbi-card.svg",
            link: "/sbi-card",
          },
          {
            title: "Wish Credit Card",
            icon: "/icons/wish-card.svg",
            link: "/wish-credit-card",
          },
          {
            title: "PhonePe HDFC Bank Credit Cards",
            icon: "/icons/hdfc-card.svg",
            link: "/hdfc-card",
          },
        ],
      },

    ],
  },
];
export function Oursolutions() {
  const [open, setOpen] = useState(0)
  const [box, setBox] = useState(false)

  return (
    <div className="relative group">
      <button>
        <div className="text-sm">OUR SOLUTIONS</div>
      </button>
      <div className="absolute -left-12 top-full m-1 w-3xl h-fit bg-white shadow-lg border-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
        <div className="flex">
          {/* Left Menu */}
          <div className="w-64 border-r">
            {megaMenu.map((item, index) => (
              <div
                key={item.id}
                onMouseEnter={() => setOpen(index)}
                className={`cursor-pointer px-10 py-8 font-semibold transition
        ${open === index
                    ? "bg-purple-200 text-purple-900"
                    : "bg-white hover:bg-gray-100"
                  }`}
              >
                {item.title}
              </div>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex-1 p-8">
            <div className="grid grid-cols-3 gap-10">
              {megaMenu[open].sections.map((section, index) => (
                <div key={index}>
                  <h3 className="mb-5 text-xs font-bold text-blue-700">
                    {section.title}
                  </h3>

                  <div className="space-y-4">
                    {section.items.map((item, idx) => (
                      <Link
                        key={idx}
                        href={item.link}
                        className="block text-sm font-semibold hover:text-purple-700"
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
