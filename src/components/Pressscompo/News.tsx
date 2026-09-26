import React from "react";

export interface NewsItem {
  id: string;
  date: string;
  title: string;
  source: string;
  sourceColor?: string; // Color for the bullet point and bottom indicator bar
  link: string;
}

// Data matching the Recent News section
const RECENT_NEWS: NewsItem[] = [
  {
    id: "1",
    date: "August 31, 2026",
    title:
      "PhonePe launches UPI 123Pay to let 200 million+ feature phone users make digital payments",
    source: "The Economic Times",
    sourceColor: "bg-purple-600",
    link: "#",
  },
  {
    id: "2",
    date: "August 21, 2026",
    title:
      "DPIIT signs MoUs with PhonePe, Shell India to boost startup ecosystem",
    source: "Moneycontrol",
    sourceColor: "bg-amber-400",
    link: "#",
  },
  {
    id: "3",
    date: "August 8, 2026",
    title:
      "UPI payments will remain free for consumers, PhonePe CEO Sameer Nigam assures",
    source: "Moneycontrol",
    sourceColor: "bg-rose-500",
    link: "#",
  },
  {
    id: "4",
    date: "August 6, 2026",
    title:
      "PhonePe adds fixed deposit investments on app, launches daily recurring deposit: How it works",
    source: "CNBC TV18",
    sourceColor: "bg-purple-400",
    link: "#",
  },
  {
    id: "5",
    date: "August 3, 2026",
    title:
      "PhonePe Daily SIP base crosses 500,000; CAMS profit jumps 17.6% to ₹127 cr",
    source: "Business Standard",
    sourceColor: "bg-blue-500",
    link: "#",
  },
  {
    id: "6",
    date: "July 30, 2026",
    title:
      "PhonePe to help businesses read India's market pulse in real time",
    source: "The Economic Times",
    sourceColor: "bg-purple-600",
    link: "#",
  },
];

export const News: React.FC = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Section Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
        Recent News
      </h2>

      {/* Grid Layout: 1 col (base) -> 2 cols (sm) -> 3 cols (md) -> 4 cols (lg) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {RECENT_NEWS.map((item) => (
          <a
            key={item.id}
            href={item.link}
            className="group relative flex flex-col justify-between bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden"
          >
            {/* Top Content Area */}
            <div>
              <p className="text-sm text-gray-500 font-medium mb-4">
                {item.date}
              </p>
              <h3 className="text-base font-medium text-gray-900 group-hover:text-purple-700 transition-colors line-clamp-4 leading-snug mb-6">
                {item.title}
              </h3>
            </div>

            {/* Bottom Source & Colored Bar */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span
                  className={`w-2 h-2 rounded-full ${
                    item.sourceColor || "bg-purple-600"
                  }`}
                  aria-hidden="true"
                />
                <span className="text-sm font-semibold text-gray-800">
                  {item.source}
                </span>
              </div>

              {/* Bottom Color Indicator Bar */}
              <div
                className={`h-1.5 w-full rounded-full ${
                  item.sourceColor || "bg-purple-600"
                }`}
              />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default News;