"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { Company } from './Company'
import { Oursolutions } from './Oursolutions'

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-white shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-14">
        
        {/* Logo Container */}
        <Link href="/" className="flex-shrink-0">
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjv6Rqcu5sSEzpKHpGulYZ0NxXhEGQd2kMWCgmVpHGNw&s=10" 
            alt="Company Logo" 
            className="h-10 w-auto object-contain sm:h-12"
          />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden items-center mr-10 space-x-6 text-sm font-medium lg:flex xl:space-x-14">
          <Company />
          <Oursolutions />
          <Link href="#" className="hover:text-blue-600 transition-colors">INVESTORS RELATIONSHIP</Link>
          <Link href="#" className="hover:text-blue-600 transition-colors">CONTACT US</Link>
          <Link href="#" className="hover:text-blue-600 transition-colors">TRUST & SAFETY</Link>
        </nav>

        {/* Mobile Hamburger Button */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            aria-controls="mobile-menu"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? (
              // X icon
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Hamburger icon
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="border-t border-gray-200 bg-white lg:hidden" id="mobile-menu">
          <div className="flex flex-col space-y-4 px-4 pt-3 pb-6 text-sm font-medium text-gray-800">
            <div className="py-1">
              <Company />
            </div>
            <div className="py-1">
              <Oursolutions />
            </div>
            <Link 
              href="#" 
              onClick={() => setIsOpen(false)}
              className="py-1 hover:text-blue-600 transition-colors"
            >
              INVESTORS RELATIONSHIP
            </Link>
            <Link 
              href="#" 
              onClick={() => setIsOpen(false)}
              className="py-1 hover:text-blue-600 transition-colors"
            >
              CONTACT US
            </Link>
            <Link 
              href="#" 
              onClick={() => setIsOpen(false)}
              className="py-1 hover:text-blue-600 transition-colors"
            >
              TRUST & SAFETY
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}