"use client"
import React, { useState, useMemo } from "react";
import { ChevronDown, ChevronUp, ChevronLeft, ChevronRight } from "lucide-react";

// Types
export interface PressRelease {
  id: string;
  title: string;
  date: string;
  imageUrl: string;
  link: string;
  category: string;
}

// Sample Data Matching the View
const SAMPLE_DATA: PressRelease[] = [
  {
    id: "1",
    title:
      "PhonePe announces big rural merchant expansion plans: To hire 20,000 additional on-roll sales employees in rural India and deploy 50 lakh+ payment devices",
    date: "September 24, 2026",
    imageUrl: "https://www.phonepe.com/pressstatic/Phone_Pe_Logo_PR_Dimension_07_bc523d392b.png",
    link: "#",
    category: "Announcements",
  },
  {
    id: "2",
    title:
      "PhonePe Marks First International Footprint in UAE, Securing In-Principle Approval from Central Bank of UAE",
    date: "September 22, 2026",
    imageUrl: "https://www.phonepe.com/pressstatic/International_payments_press_release_bc7f58ccc9.png",
    link: "#",
    category: "Expansion",
  },
  {
    id: "3",
    title:
      "PhonePe and Visa Partner to Power Comprehensive Cardless Payments for Millions of Indians Globally",
    date: "September 9, 2026",
    imageUrl: "https://www.phonepe.com/pressstatic/Phone_Pe_and_Visa_Partner_to_Power_Comprehensive_Cardless_Payments_for_Millions_of_Indians_Globally_2x_size_30084daed2.png",
    link: "#",
    category: "Partnerships",
  },
  {
    id: "4",
    title:
      "PhonePe Launches UPI Payments for India's Feature Phone Users",
    date: "August 31, 2026",
    imageUrl: "https://www.phonepe.com/pressstatic/Press_Release_Opt_1_FEATURED_1_0f13f8344d.png",
    link: "#",
    category: "Product",
  },
  {
    id: "5",
    title:
      "PhonePe Partners with DPIIT to Empower Emerging Indian Startups",
    date: "August 21, 2026",
    imageUrl: "https://www.phonepe.com/pressstatic/Frame_14_c451dd2c41.jpg",
    link: "#",
    category: "Partnerships",
  },
  {
    id: "6",
    title:
      "PhonePe PulsePro signs MoU with MeitY to power PM GatiShakti",
    date: "August 20, 2026",
    imageUrl: "https://www.phonepe.com/pressstatic/L_to_R_Shivnath_Thukral_Vice_President_Policy_and_Govt_Affairs_Phone_Pe_S_Krishnan_Secretary_Ministry_of_Electronics_and_IT_Meit_Y_Dr_Vinay_Thakur_Director_General_BISAG_N_2717ae6000.jpeg",
    link: "#",
    category: "Announcements",
  },
  {
    id: "7",
    title:
      "PhonePe Crosses 500 Million Registered Users Milestone Across India",
    date: "August 12, 2026",
    imageUrl: "https://www.phonepe.com/pressstatic/Phone_Pe_500M_Users_Milestone_89a0b12c.png",
    link: "#",
    category: "Announcements",
  },
  {
    id: "8",
    title:
      "PhonePe Introduces Zero-Commission Wealth Management Portfolio for Retail Investors",
    date: "July 28, 2026",
    imageUrl: "https://www.phonepe.com/pressstatic/Wealth_Management_Launch_1a2b3c4d.png",
    link: "#",
    category: "Product",
  },
  {
    id: "9",
    title:
      "PhonePe Expands Cross-Border QR Payments Support to Sri Lanka and Nepal",
    date: "July 15, 2026",
    imageUrl: "https://www.phonepe.com/pressstatic/Cross_Border_Expansion_Asia_5e6f7g8h.png",
    link: "#",
    category: "Expansion",
  },
  {
    id: "10",
    title:
      "PhonePe Partners with NPCI to Deploy Voice-Activated Soundboxes Across 10 Million Merchants",
    date: "July 02, 2026",
    imageUrl: "https://www.phonepe.com/pressstatic/Voice_Soundbox_NPCI_9i0j1k2l.jpeg",
    link: "#",
    category: "Partnerships",
  },
  {
    id: "11",
    title:
      "PhonePe Launches Credit on UPI Services in Collaboration with Major Public Sector Banks",
    date: "June 20, 2026",
    imageUrl: "https://www.phonepe.com/pressstatic/Credit_On_UPI_Launch_3m4n5o6p.png",
    link: "#",
    category: "Product",
  },
  {
    id: "12",
    title:
      "PhonePe Report Highlights 120% YoY Growth in Digital Payment Adoption Across Tier-3 and Tier-4 Cities",
    date: "June 08, 2026",
    imageUrl: "https://www.phonepe.com/pressstatic/Pulse_Report_Tier3_Growth_7q8r9s0t.png",
    link: "#",
    category: "Announcements",
  },
  {
    id: "13",
    title:
      "PhonePe Payment Gateway Launches Instant Refunds Feature for E-commerce Merchants",
    date: "May 27, 2026",
    imageUrl: "https://www.phonepe.com/pressstatic/PG_Instant_Refunds_1u2v3w4x.jpg",
    link: "#",
    category: "Product",
  },
  {
    id: "14",
    title:
      "PhonePe Insurance Broking Partners with Top Insurers to Offer Affordable Health Covers Starting at ₹99/Month",
    date: "May 14, 2026",
    imageUrl: "https://www.phonepe.com/pressstatic/Insurance_Micro_Health_5y6z7a8b.png",
    link: "#",
    category: "Partnerships",
  },
  {
    id: "15",
    title:
      "PhonePe Receives RBI Approval for Operating as a Bharat Bill Payment Operating Unit (BBPOU)",
    date: "April 30, 2026",
    imageUrl: "https://www.phonepe.com/pressstatic/RBI_BBPOU_Approval_9c0d1e2f.png",
    link: "#",
    category: "Announcements",
  },
  {
    id: "16",
    title:
      "PhonePe Expands Merchant Solutions: Rolls Out AI-Powered Inventory Management Tool",
    date: "April 18, 2026",
    imageUrl: "https://www.phonepe.com/pressstatic/AI_Inventory_Merchant_3g4h5i6j.jpeg",
    link: "#",
    category: "Product",
  },
  {
    id: "17",
    title:
      "PhonePe Collaborates with Singapore's PayNow for Seamless Real-Time Remittances",
    date: "April 05, 2026",
    imageUrl: "https://www.phonepe.com/pressstatic/Singapore_PayNow_Integration_7k8l9m0n.png",
    link: "#",
    category: "Expansion",
  },
  {
    id: "18",
    title:
      "PhonePe Pledges Net-Zero Carbon Footprint Operations Across All Corporate Offices by 2028",
    date: "March 22, 2026",
    imageUrl: "https://www.phonepe.com/pressstatic/ESG_Net_Zero_Pledge_1o2p3q4r.jpg",
    link: "#",
    category: "Announcements",
  },
  {
    id: "19",
    title:
      "PhonePe Integrates ONDC for Hyperlocal Grocery and Food Delivery Services Nationwide",
    date: "March 10, 2026",
    imageUrl: "https://www.phonepe.com/pressstatic/ONDC_Hyperlocal_Launch_5s6t7u8v.png",
    link: "#",
    category: "Product",
  },
  {
    id: "20",
    title:
      "PhonePe and Axis Bank Partner to Expand Merchant QR Acceptance Network",
    date: "February 25, 2026",
    imageUrl: "https://www.phonepe.com/pressstatic/Axis_Bank_Partnership_9w0x1y2z.png",
    link: "#",
    category: "Partnerships",
  },
  {
    id: "21",
    title:
      "PhonePe Introduces Multi-Lingual AI Assistant to Simplify Bill Payments for Rural Users",
    date: "February 11, 2026",
    imageUrl: "https://www.phonepe.com/pressstatic/AI_Multilingual_Assistant_3a4b5c6d.jpeg",
    link: "#",
    category: "Product",
  },
  {
    id: "22",
    title:
      "PhonePe Secures Payment Aggregator (PA) License from the Reserve Bank of India",
    date: "January 29, 2026",
    imageUrl: "https://www.phonepe.com/pressstatic/RBI_PA_License_Approval_7e8f9g0h.png",
    link: "#",
    category: "Announcements",
  },
  {
    id: "23",
    title:
      "PhonePe Processes over 6 Billion Monthly UPI Transactions in Record-Breaking Quarter",
    date: "January 15, 2026",
    imageUrl: "https://www.phonepe.com/pressstatic/UPI_Record_Quarter_1i2j3k4l.png",
    link: "#",
    category: "Announcements",
  },
  {
    id: "24",
    title:
      "PhonePe Extends In-Store QR Acceptance to Select Retail Outlets in Europe for Indian Tourists",
    date: "December 20, 2025",
    imageUrl: "https://www.phonepe.com/pressstatic/Europe_Travel_Payments_5m6n7o8p.png",
    link: "#",
    category: "Expansion",
  },
  {
    id: "25",
    title:
      "PhonePe Rolls Out Smart Speaker 2.0 with Dual-Display and Battery Backup for High-Volume Outlets",
    date: "December 05, 2025",
    imageUrl: "https://www.phonepe.com/pressstatic/Smart_Speaker_2_0_Launch_9q0r1s2t.jpg",
    link: "#",
    category: "Product",
  },
  {
    id: "26",
    title:
      "PhonePe Partners with HDFC Bank to Facilitate Instant Digital Personal Loans",
    date: "November 18, 2025",
    imageUrl: "https://www.phonepe.com/pressstatic/HDFC_Personal_Loans_3u4v5w6x.png",
    link: "#",
    category: "Partnerships",
  },
  {
    id: "27",
    title:
      "PhonePe Hosts National FinTech Hackathon to Encourage Innovation in Rural Financial Inclusion",
    date: "November 02, 2025",
    imageUrl: "https://www.phonepe.com/pressstatic/Fintech_Hackathon_2025_7y8z9a0b.jpeg",
    link: "#",
    category: "Announcements",
  },
  {
    id: "28",
    title:
      "PhonePe Launches 'SafePay' Biometric Authentication for High-Value Online Transactions",
    date: "October 21, 2025",
    imageUrl: "https://www.phonepe.com/pressstatic/Biometric_SafePay_1c2d3e4f.png",
    link: "#",
    category: "Product",
  },
  {
    id: "29",
    title:
      "PhonePe Expands Payment Services to Bhutan and Mauritius in Regional Digital Push",
    date: "October 09, 2025",
    imageUrl: "https://www.phonepe.com/pressstatic/Bhutan_Mauritius_Expansion_5g6h7i8j.png",
    link: "#",
    category: "Expansion",
  },
  {
    id: "30",
    title:
      "PhonePe Partners with State Governments to Enable Seamless Digital Tax Collections",
    date: "September 25, 2025",
    imageUrl: "https://www.phonepe.com/pressstatic/Govt_Tax_Collection_9k0l1m2n.jpg",
    link: "#",
    category: "Partnerships",
  },
  {
    id: "31",
    title:
      "PhonePe Wealth Tech Launches Automated SIP Options for Digital Gold and Mutual Funds",
    date: "September 11, 2025",
    imageUrl: "https://www.phonepe.com/pressstatic/Digital_Gold_SIP_3o4p5q6r.png",
    link: "#",
    category: "Product",
  },
  {
    id: "32",
    title:
      "PhonePe Celebrates 8 Years of Building India’s Digital Payments Infrastructure",
    date: "August 28, 2025",
    imageUrl: "https://www.phonepe.com/pressstatic/8_Years_Anniversary_7s8t9u0v.png",
    link: "#",
    category: "Announcements",
  },
  {
    id: "33",
    title:
      "PhonePe Partners with Leading EV Ecosystem Players to Enable One-Tap Charging Payments",
    date: "August 14, 2025",
    imageUrl: "https://www.phonepe.com/pressstatic/EV_Charging_Payments_1w2x3y4z.jpeg",
    link: "#",
    category: "Partnerships",
  },
  {
    id: "34",
    title:
      "PhonePe Unveils Advanced Fraud Detection Engine 'Shield AI' for Enhanced User Security",
    date: "July 30, 2025",
    imageUrl: "https://www.phonepe.com/pressstatic/Shield_AI_Security_5a6b7c8d.png",
    link: "#",
    category: "Product",
  },
  {
    id: "35",
    title:
      "PhonePe Expands Merchant POS Lineup with Portable Android Payment Terminals",
    date: "July 16, 2025",
    imageUrl: "https://www.phonepe.com/pressstatic/Android_POS_Terminal_9e0f1g2h.jpg",
    link: "#",
    category: "Product",
  },
  {
    id: "36",
    title:
      "PhonePe Signs Strategic Alliance with ICICI Lombard for Motor and Travel Insurance Offerings",
    date: "July 01, 2025",
    imageUrl: "https://www.phonepe.com/pressstatic/ICICI_Lombard_Alliance_3i4j5k6l.png",
    link: "#",
    category: "Partnerships",
  },
];
const CATEGORIES = ["All", "Announcements", "Expansion", "Partnerships", "Product"];
const ITEMS_PER_PAGE = 6;

export const Archive: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [currentPage, setCurrentPage] = useState<number>(1);

  // Filter items based on selected category
  const filteredItems = useMemo(() => {
    if (selectedCategory === "All") return SAMPLE_DATA;
    return SAMPLE_DATA.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  // Calculate pagination details
  const totalPages = Math.ceil(filteredItems.length / ITEMS_PER_PAGE) || 1;
  const paginatedItems = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredItems.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredItems, currentPage]);

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value);
    setCurrentPage(1); // Reset to first page on filter change
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-4 md:p-6">
      {/* Container Card */}
      <div className="bg-gray-50 border border-gray-200 rounded-3xl overflow-hidden shadow-sm transition-all duration-300">
        
        {/* Top Header Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 p-4 md:px-8 border-b border-gray-200/60 bg-gray-50/50">
          
          {/* Category Filter Dropdown */}
          <div className="relative inline-block text-left">
            <select
              value={selectedCategory}
              onChange={handleCategoryChange}
              className="appearance-none bg-transparent pr-8 pl-3 py-1.5 text-sm font-semibold text-gray-700 cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-500 rounded-lg"
              aria-label="Filter category"
            >
              {CATEGORIES.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
            <ChevronDown className="w-4 h-4 text-gray-600 absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>

          {/* Archive Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-2 text-base font-semibold text-gray-900 hover:text-purple-700 transition-colors focus:outline-none"
          >
            <span>View Archive</span>
            {isOpen ? (
              <ChevronUp className="w-5 h-5 text-gray-700" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-700" />
            )}
          </button>

          {/* Pagination Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className="p-1.5 rounded-full border border-gray-300 bg-white text-gray-600 hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
              aria-label="Previous Page"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="text-sm font-medium text-gray-600 px-1">
              {currentPage} / {totalPages}
            </span>
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className="p-1.5 rounded-full border border-gray-300 bg-white text-gray-600 hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
              aria-label="Next Page"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Collapsible Content Section */}
        {isOpen && (
          <div className="p-4 md:p-8">
            {paginatedItems.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {paginatedItems.map((item) => (
                  <a
                    key={item.id}
                    href={item.link}
                    className="group flex flex-col justify-between bg-transparent rounded-2xl overflow-hidden transition-transform duration-200 hover:-translate-y-1"
                  >
                    <div>
                      {/* Image Thumbnail */}
                      <div className="w-full aspect-[16/10] bg-gray-200 rounded-2xl overflow-hidden mb-4">
                        <img
                          src={item.imageUrl}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>

                      {/* Card Title */}
                      <h3 className="text-base md:text-lg font-semibold text-gray-900 group-hover:text-purple-700 line-clamp-3 leading-snug mb-3 transition-colors">
                        {item.title}
                      </h3>
                    </div>

                    {/* Date Footer */}
                    <p className="text-sm text-gray-500 font-medium">
                      {item.date}
                    </p>
                  </a>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 text-gray-500 font-medium">
                No press releases found for this category.
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Archive;