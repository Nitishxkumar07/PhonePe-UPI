"use client"
import React from 'react'
import Link from 'next/link';
export const footerData = [
    {
        title: "Business Solutions",
        links: [
            { name: "Payment Gateway", href: "#" },
            { name: "E-commerce PG", href: "#" },
            { name: "UPI Payment Gateway", href: "#" },
            { name: "Express Checkout", href: "#" },
            { name: "Offline Merchant", href: "#" },
            { name: "Offline Payment Partner", href: "#" },
            { name: "Advertise on PhonePe", href: "#" },
            { name: "SmartSpeaker", href: "#" },
            { name: "POS Machine", href: "#" },
            { name: "Payment Links", href: "#" },
            { name: "Travel and Commute", href: "#" },
        ],
    },

    {
        title: "Insurance",
        links: [
            { name: "Motor Insurance", href: "#" },
            { name: "Bike Insurance", href: "#" },
            { name: "Car Insurance", href: "#" },
            { name: "Health Insurance", href: "#" },
            { name: "Life Insurance", href: "#" },
            { name: "Term Life Insurance", href: "#" },
            { name: "Personal Accident Insurance", href: "#" },
            { name: "Travel Insurance", href: "#" },
            { name: "International Travel Insurance", href: "#" },
        ],
    },

    {
        title: "Investments",
        links: [
            { name: "24K Gold", href: "#" },
            { name: "Liquid Funds", href: "#" },
            { name: "Tax Saving Funds", href: "#" },
            { name: "Equity Funds", href: "#" },
            { name: "Debt Funds", href: "#" },
            { name: "Hybrid Funds", href: "#" },
        ],
        subSection: {
            title: "Lending",
            links: [
                { name: "Consumer Lending", href: "#" },
                { name: "Merchant Lending", href: "#" },
                { name: "Secured Loans", href: "#" },
            ],
        },
    },

    {
        title: "General",
        links: [
            { name: "About Us", href: "#" },
            { name: "Careers", href: "#" },
            { name: "Investors Relations", href: "#" },
            { name: "Contact Us", href: "#" },
            { name: "Press", href: "#" },
            { name: "Ethics", href: "#" },
            { name: "Report Vulnerability", href: "#" },
            {
                name: "Merchant Partners",
                href: "#",
            },
            { name: "Blog", href: "#" },
            { name: "Tech Blog", href: "#" },
            { name: "PhonePe Pulse", href: "#" },
            { name: "Merchant Onboarding Guidelines", href: "#" },
        ],
    },

    {
        title: "Legal",
        links: [
            { name: "Terms & Conditions", href: "#" },
            { name: "Privacy Policy", href: "#" },
            { name: "Grievance Policy", href: "#" },
            { name: "How to Pay", href: "#" },
            { name: "E-Waste Policy", href: "#" },
            { name: "Trust & Safety", href: "#" },
            { name: "Global Anti-Corruption Policy", href: "#" },
            { name: "PhonePe Account Aggregator Notice", href: "#" },
        ],
        button: {
            title: "See All Apps",
            text: "DOWNLOAD NOW",
            href: "#",
        },
    },

    {
        title: "PhonePe Group",

        links: [
            {
                name: "Indus Appstore",
                href: "#",
                external: true,
            },
            {
                name: "Share.Market",
                href: "#",
                external: true,
            },
        ],
    },
]
export const credit = [
    {
        creditCards: {
            title: "Credit Cards",
            links: [
                {
                    name: "PhonePe HDFC Bank Co-Branded Credit Cards",
                    href: "#",
                },
                {
                    name: "PhonePe SBI Card Co-Branded Credit Cards",
                    href: "#",
                },
                {
                    name: "Wish Credit Card",
                    href: "#",
                },
            ],
        },
    },

    {
        certification: {
            title: "Certification",
            image: "/assets/pci-dss.png",
            href: "#",
            external: true,
        },
    },
]

export const Footer = () => {
    return (
        <div className='border border-transparent shadow-4xl mt-12'>
            <div className='flex flex-row gap-6 justify-evenly p-8 w-screen mb-5'>
                <Link href={"/"}><img src="/assets/logo1.svg" alt="" className='h-12 w-24' /></Link>
                {footerData.map((section) => (
                    <div key={section.title} className='flex flex-col mx-auto'>
                        <h3 className="font-semibold text-lg  mb-6">
                            {section.title}
                        </h3>

                        <ul className="space-y-2 flex flex-col max-w-32">
                            {section.links.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className={`${"text-gray-900 text-sm"} hover:text-purple-400`}
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            <p className='text-lg text-gray-700 text-center'>*These are company numbers as of September, 2025</p>
            <p className='text-sm text-gray-800 text-center'>© 2026, All rights reserved.</p>
        </div>
    )
}