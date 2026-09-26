"use client"
import React, { useState, useMemo } from "react";
import { CATEGORIES, FEATURED_POSTS, BlogPost } from "./Featuredata";

export const BlogHero: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [visibleCount, setVisibleCount] = useState<number>(5);

  // Filter blog posts by category
  const filteredPosts = useMemo(() => {
    if (activeCategory === "All") return FEATURED_POSTS;
    return FEATURED_POSTS.filter((post) => post.category === activeCategory);
  }, [activeCategory]);

  // Main featured banner post
  const mainFeatured = useMemo(() => {
    return filteredPosts.find((p) => p.isMainFeatured) || filteredPosts[0];
  }, [filteredPosts]);

  // Secondary grid posts excluding the main featured item
  const gridPosts = useMemo(() => {
    const list = filteredPosts.filter((p) => p.id !== mainFeatured?.id);
    return list.slice(0, visibleCount);
  }, [filteredPosts, mainFeatured, visibleCount]);

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setVisibleCount(5); // Reset pagination on category switch
  };

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 4);
  };

  return (
    <div className="w-full bg-white text-gray-900 font-sans">
      {/* Hero Header Section */}
      <section className="relative w-full bg-gradient-to-r from-purple-900 via-purple-800 to-indigo-900 text-white py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center py-12 relative z-10">
          <img src="https://www.phonepe.com/webstatic/15016/static/0ee06b9fa43ed40250b14af6529a2c41/3b5e7/blogs-main-hero-banner-desktop.webp" alt="" />
        </div>
      </section>

      {/* Main Content Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Horizontal Scrollable Category Filter Buttons */}
        <div className="flex items-center gap-2 overflow-x-auto scrollbar-none pb-4 mb-10 border-b border-gray-100">
          {CATEGORIES.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`px-5 py-2.5 rounded-xl text-sm font-medium whitespace-nowrap transition-all duration-200 border ${
                  isActive
                    ? "bg-purple-800 text-white border-purple-800 shadow-md"
                    : "bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100 hover:border-gray-300"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Section Heading */}
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
          Featured
        </h2>

        {filteredPosts.length === 0 ? (
          <div className="text-center py-16 text-gray-500 font-medium">
            No articles found for this category.
          </div>
        ) : (
          <>
            {/* Main Featured Hero Card */}
            {mainFeatured && (
              <a
                href={mainFeatured.redirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group block mb-12 bg-gray-50 rounded-3xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
                  {/* Card Image */}
                  <div className="lg:col-span-7 aspect-[16/9] lg:aspect-auto h-full overflow-hidden bg-gray-200">
                    <img
                      src={mainFeatured.imageUrl}
                      alt={mainFeatured.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Card Info Content */}
                  <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between h-full">
                    <div>
                      <span className="text-xs font-semibold text-purple-700 uppercase tracking-wider mb-2 block">
                        {mainFeatured.category}
                      </span>
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 group-hover:text-purple-700 leading-snug mb-4 transition-colors">
                        {mainFeatured.title}
                      </h3>
                      <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6 line-clamp-3">
                        {mainFeatured.description}
                      </p>
                    </div>

                    <div className="text-xs sm:text-sm text-gray-500 font-medium flex items-center gap-2">
                      <span>{mainFeatured.author}</span>
                      <span>•</span>
                      <span>{mainFeatured.readTime}</span>
                      <span>•</span>
                      <span>{mainFeatured.date}</span>
                    </div>
                  </div>
                </div>
              </a>
            )}

            {/* Grid for Other Featured Cards */}
            {gridPosts.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {gridPosts.map((post) => (
                  <a
                    key={post.id}
                    href={post.redirectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col justify-between bg-white border border-gray-200 rounded-3xl p-4 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 overflow-hidden"
                  >
                    <div>
                      {/* Post Thumbnail */}
                      <div className="w-full aspect-[16/10] bg-gray-100 rounded-2xl overflow-hidden mb-4">
                        <img
                          src={post.imageUrl}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>

                      {/* Post Category & Title */}
                      <span className="text-xs font-semibold text-purple-700 uppercase tracking-wider mb-1 block">
                        {post.category}
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-gray-900 group-hover:text-purple-700 leading-snug line-clamp-2 mb-3 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 text-sm line-clamp-3 mb-4 leading-relaxed">
                        {post.description}
                      </p>
                    </div>

                    {/* Meta Footer */}
                    <div className="text-xs text-gray-500 font-medium pt-2 border-t border-gray-100 flex items-center justify-between">
                      <span>{post.author}</span>
                      <span>{post.date}</span>
                    </div>
                  </a>
                ))}
              </div>
            )}

            {/* Show More Button */}
            {filteredPosts.length - 1 > gridPosts.length && (
              <div className="flex justify-center mt-12">
                <button
                  onClick={handleShowMore}
                  className="px-8 py-3 bg-purple-700 hover:bg-purple-800 text-white font-semibold text-sm rounded-xl shadow-md hover:shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                >
                  Show More
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default BlogHero;