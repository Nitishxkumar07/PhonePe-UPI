"use client"
import React, { useState } from 'react';

export interface PressReleaseItem {
  id: string;
  title: string;
  date: string;
  imageUrl: string;
  linkUrl: string;
}

const sampleReleases: PressReleaseItem[] = [
  {
    id: '1',
    title: 'PhonePe announces big rural merchant expansion plans: To hire 20,000 additional on-roll sales employees in rural India and deploy 50 lakh+ payment devices',
    date: 'September 24, 2026',
    imageUrl: 'https://www.phonepe.com/pressstatic/Phone_Pe_Logo_PR_Dimension_07_bc523d392b.png',
    linkUrl: '#',
  },
  {
    id: '2',
    title: 'PhonePe Marks First International Footprint in UAE, Securing In-Principle Approval from Central Bank of UAE',
    date: 'September 22, 2026',
    imageUrl: 'https://www.phonepe.com/pressstatic/International_payments_press_release_bc7f58ccc9.png',
    linkUrl: '#',
  },
  {
    id: '3',
    title: 'PhonePe and Visa Partner to Power Comprehensive Cardless Payments for Millions of Indians Globally',
    date: 'September 9, 2026',
    imageUrl: 'https://www.phonepe.com/pressstatic/Phone_Pe_and_Visa_Partner_to_Power_Comprehensive_Cardless_Payments_for_Millions_of_Indians_Globally_2x_size_30084daed2.png',
    linkUrl: '#',
  },
  {
    id: '4',
    title: 'PhonePe Launches UPI Payments for India’s Feature Phone Users',
    date: 'August 31, 2026',
    imageUrl: 'https://www.phonepe.com/pressstatic/Press_Release_Opt_1_FEATURED_1_0f13f8344d.png',
    linkUrl: '#',
  },
  {
    id: '5',
    title: 'PhonePe Partners with DPIIT to Empower Emerging Indian Startups',
    date: 'August 21, 2026',
    imageUrl: 'https://www.phonepe.com/press/phonepe-partners-with-dpiit-to-empower-emerging-indian-startups',
    linkUrl: '#',
  },
];

export const Releases: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 40;

  const filteredReleases = sampleReleases.filter((release) =>
    release.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="w-full bg-white py-10 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto">
      {/* Header and Search Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#1F194C]">
          Press Releases
        </h2>

        <div className="relative w-full sm:w-80">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-gray-400">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </span>
          <input
            type="text"
            placeholder="Browse for press release"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-[#F0EEF8] text-sm text-gray-800 placeholder-gray-500 rounded-full focus:outline-none focus:ring-2 focus:ring-[#5f259f]"
          />
        </div>
      </div>

      {/* Cards List */}
      <div className="flex flex-col gap-6">
        {filteredReleases.map((release) => (
          <a
            key={release.id}
            href={release.linkUrl}
            className="group flex flex-col md:flex-row items-stretch justify-between bg-white border border-gray-200 rounded-2xl p-5 hover:shadow-md transition-shadow duration-200 gap-6"
          >
            {/* Content Left */}
            <div className="flex flex-col justify-between flex-1">
              <h3 className="text-base sm:text-lg font-medium text-[#1F194C] group-hover:text-[#5f259f] transition-colors line-clamp-3 leading-snug">
                {release.title}
              </h3>

              <div className="flex items-center text-xs sm:text-sm text-gray-400 font-normal mt-4">
                <span>{release.date}</span>
                <span className="ml-2 text-[#5f259f] font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  →
                </span>
              </div>
            </div>

            {/* Thumbnail Right */}
            <div className="w-full md:w-56 h-36 flex-shrink-0 bg-[#E8E1F8] rounded-xl overflow-hidden flex items-center justify-center">
              <img
                src={release.imageUrl}
                alt={release.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Releases;