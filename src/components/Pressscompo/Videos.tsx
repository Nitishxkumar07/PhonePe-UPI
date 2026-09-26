"use client"
import React, { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Play, X } from "lucide-react";

export interface VideoItem {
  id: string;
  title: string;
  date: string;
  thumbnailUrl: string;
  videoEmbedUrl: string;
}

const VIDEO_ITEMS: VideoItem[] = [
  {
    id: "1",
    title:
      "PhonePe Set To Move Beyond Payments With PulsePro Launch | India Today Impact Feature",
    date: "August 5, 2026",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80",
    videoEmbedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "2",
    title:
      "400 million daily transactions scale: How PhonePe balances AI, automation & trust",
    date: "August 1, 2026",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
    videoEmbedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "3",
    title:
      "Know all about PhonePe's PulsePro! Strategy Head Karthik Raghupathy shares key insights",
    date: "July 30, 2026",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
    videoEmbedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "4",
    title:
      "AI at Scale: Powering 650M+ Users | Tech Transformers with Rahul Chari, PhonePe",
    date: "April 15, 2026",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80",
    videoEmbedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "5",
    title: "Building Bharat: Engineering the future of Fintech with AI",
    date: "May 30, 2026",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80",
    videoEmbedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "6",
    title:
      "India's campaign for an open app ecosystem | In conversation with Priya Narasimhan",
    date: "April 20, 2026",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=800&q=80",
    videoEmbedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
];

export const Video: React.FC = () => {
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Scroll left/right handler for single-row layout
  const handleScroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const scrollAmount = clientWidth * 0.8;
      scrollContainerRef.current.scrollTo({
        left:
          direction === "left"
            ? scrollLeft - scrollAmount
            : scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Section Header with Navigation Controls */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Videos
        </h2>

        {/* Right Side Carousel Buttons */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => handleScroll("left")}
            className="p-3 rounded-full border border-gray-300 bg-white text-gray-600 hover:bg-gray-50 transition-colors focus:outline-none"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => handleScroll("right")}
            className="p-3 rounded-full border border-gray-300 bg-white text-gray-600 hover:bg-gray-50 transition-colors focus:outline-none"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Single-Row Horizontal Carousel Container */}
      <div
        ref={scrollContainerRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {VIDEO_ITEMS.map((item) => (
          <div
            key={item.id}
            onClick={() => setActiveVideo(item)}
            className="group cursor-pointer flex-shrink-0 flex flex-col justify-between w-[85%] sm:w-[45%] lg:w-[31.5%]"
          >
            {/* Thumbnail Card */}
            <div className="relative w-full aspect-[16/9] bg-gray-900 rounded-3xl overflow-hidden mb-4 shadow-sm group-hover:shadow-md transition-shadow">
              <img
                src={item.thumbnailUrl}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-90"
              />

              {/* Play Button Icon */}
              <div className="absolute left-4 bottom-4 bg-white rounded-full p-3 shadow-lg group-hover:scale-110 transition-transform">
                <Play className="w-5 h-5 text-black fill-black ml-0.5" />
              </div>
            </div>

            {/* Content Info */}
            <div>
              <h3 className="text-base md:text-lg font-semibold text-gray-900 group-hover:text-purple-700 transition-colors line-clamp-2 leading-snug mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-500 font-medium">{item.date}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Video Modal with Close Button */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm">
          <div className="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden shadow-2xl">
            {/* Close Button */}
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors focus:outline-none"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Embedded Iframe */}
            <div className="relative w-full aspect-video">
              <iframe
                src={`${activeVideo.videoEmbedUrl}?autoplay=1`}
                title={activeVideo.title}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Video;