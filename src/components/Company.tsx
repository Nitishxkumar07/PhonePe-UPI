"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const menuItems = [
  { label: "ABOUT US", href: "/aboutus" },
  { label: "CAREER", href: "/career" },
  { label: "PRESS", href: "/press" },
  { label: "BLOGS", href: "/blogs" },
];

export function Company() {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close menu when clicking outside the component
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Desktop hover handlers
  const handleMouseEnter = () => setIsOpen(true);
  const handleMouseLeave = () => setIsOpen(false);

  // Click toggle (Mobile & Desktop)
  const handleToggle = () => setIsOpen((prev) => !prev);

  return (
    <div
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative inline-block text-left"
    >
      {/* Dropdown Trigger Button */}
      <button
        onClick={handleToggle}
        type="button"
        aria-expanded={isOpen}
        className="flex items-center gap-1.5 px-3 py-2 text-sm font-semibold tracking-wide text-gray-800 hover:text-purple-700 focus:outline-none transition-colors"
      >
        <span>COMPANY</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="h-4 w-4 text-gray-500" />
        </motion.div>
      </button>

      {/* Dropdown Content */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Mobile Backdrop overlay (closes dropdown when tapped outside on small screens) */}
            <div
              className="fixed inset-0 z-40 sm:hidden"
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              initial={{ opacity: 0, y: 8, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.95 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              className="absolute left-0 top-full z-50 mt-1 w-44 rounded-2xl border border-gray-100 bg-white py-2 shadow-xl ring-1 ring-black/5 sm:w-48"
            >
              <ul className="flex flex-col space-y-0.5">
                {menuItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="block px-4 py-2.5 text-xs font-medium tracking-wider text-gray-700 hover:bg-purple-50 hover:text-purple-700 active:bg-purple-100 transition-colors rounded-lg mx-1"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}