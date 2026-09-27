"use client"
import React from 'react'
import Link from 'next/link'

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
            { name: "Merchant Partners", href: "#" },
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
            { name: "Indus Appstore", href: "#", external: true },
            { name: "Share.Market", href: "#", external: true },
        ],
    },
]

export const credit = [
    {
        creditCards: {
            title: "Credit Cards",
            links: [
                { name: "PhonePe HDFC Bank Co-Branded Credit Cards", href: "#" },
                { name: "PhonePe SBI Card Co-Branded Credit Cards", href: "#" },
                { name: "Wish Credit Card", href: "#" },
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
        <footer className="w-full bg-white border-t border-gray-200 mt-12 py-10 px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                
                {/* Logo & Category Grid */}
                <div className="flex flex-col lg:flex-row gap-8 justify-between">
                    
                    {/* Brand Logo */}
                    <div className="flex-shrink-0 mb-4 lg:mb-0">
                        <Link href="/">
                            <img 
                                src="/assets/logo1.svg" 
                                alt="Company Logo" 
                                className="h-10 w-auto object-contain sm:h-12" 
                            />
                        </Link>
                    </div>

                    {/* Dynamic Footer Links Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 sm:gap-8 w-full">
                        {footerData.map((section) => (
                            <div key={section.title} className="flex flex-col">
                                <h3 className="font-semibold text-sm sm:text-base text-gray-900 mb-3 sm:mb-4">
                                    {section.title}
                                </h3>

                                <ul className="space-y-2 mb-4">
                                    {section.links.map((link) => (
                                        <li key={link.name}>
                                            <Link
                                                href={link.href}
                                                className="text-xs sm:text-sm text-gray-600 hover:text-purple-600 transition-colors block leading-snug"
                                            >
                                                {link.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>

                                {/* Nested Sub-section rendering (e.g. Lending) */}
                                {section.subSection && (
                                    <div className="mt-2">
                                        <h4 className="font-semibold text-sm sm:text-base text-gray-900 mb-2">
                                            {section.subSection.title}
                                        </h4>
                                        <ul className="space-y-2">
                                            {section.subSection.links.map((subLink) => (
                                                <li key={subLink.name}>
                                                    <Link
                                                        href={subLink.href}
                                                        className="text-xs sm:text-sm text-gray-600 hover:text-purple-600 transition-colors block leading-snug"
                                                    >
                                                        {subLink.name}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {/* Optional CTA Button */}
                                {section.button && (
                                    <div className="mt-4">
                                        <Link
                                            href={section.button.href}
                                            className="inline-block rounded-full bg-purple-600 px-4 py-2 text-xs font-semibold text-white transition hover:bg-purple-700"
                                        >
                                            {section.button.text}
                                        </Link>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Divider Line */}
                <hr className="my-8 border-gray-200" />

                {/* Footer Bottom Disclaimer */}
                <div className="text-center space-y-1">
                    <p className="text-xs sm:text-sm text-gray-600">
                        *These are company numbers as of September, 2025
                    </p>
                    <p className="text-xs sm:text-sm font-medium text-gray-800">
                        © 2026, All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}