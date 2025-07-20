"use client"
import Link from 'next/link';
import Image from "next/image"
import techpoint from "./techpoint.png"
import { useState } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="bg-white shadow-sm border-b border-gray-100 relative z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Image
                  src={techpoint} 
                  alt="TechPoint Logo" 
                  className="w-10 h-10 sm:w-12 sm:h-12 object-contain rounded-lg shadow-sm"
                />
              </div>

            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-8">
              <Link 
                href="/" 
                className="text-gray-700 hover:text-[#6C63FF] font-medium font-montserrat transition-colors duration-200 relative group"
              >
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#6C63FF] transition-all duration-200 group-hover:w-full"></span>
              </Link>
              <Link 
                href="/about" 
                className="text-gray-700 hover:text-[#6C63FF] font-medium font-montserrat transition-colors duration-200 relative group"
              >
                About us
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#6C63FF] transition-all duration-200 group-hover:w-full"></span>
              </Link>
              <Link 
                href="/syllabus" 
                className="text-gray-700 hover:text-[#6C63FF] font-medium font-montserrat transition-colors duration-200 relative group"
              >
                Syllabus Download
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#6C63FF] transition-all duration-200 group-hover:w-full"></span>
              </Link>
              <Link 
                href="/contact" 
                className="text-gray-700 hover:text-[#6C63FF] font-medium font-montserrat transition-colors duration-200 relative group"
              >
                Contact us
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#6C63FF] transition-all duration-200 group-hover:w-full"></span>
              </Link>
            </div>

            {/* Certificate Verify Button - Desktop */}
            <div className="hidden sm:flex items-center">
              <button className="bg-[#6C63FF] text-white px-4 py-2 lg:px-6 lg:py-2 rounded-lg font-medium font-montserrat hover:bg-[#5b54e6] transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                Certificate-verify
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button 
                onClick={toggleMobileMenu}
                className="text-gray-700 hover:text-[#6C63FF] p-2 rounded-md transition-colors duration-200"
                aria-label="Toggle mobile menu"
              >
                <svg 
                  className={`w-6 h-6 transform transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-90' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            onClick={closeMobileMenu}
          ></div>
        )}

        {/* Mobile Menu */}
        <div className={`
          fixed top-16 right-0 h-full w-80 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-50 lg:hidden
          ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}
        `}>
          <div className="flex flex-col h-full">
            {/* Mobile Menu Header */}
            <div className="px-6 py-4 border-b border-gray-100">
              <div className="flex items-center justify-between">
                <span className="text-lg font-semibold text-gray-900 font-montserrat">Menu</span>
                <button 
                  onClick={closeMobileMenu}
                  className="p-2 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Mobile Navigation Links */}
            <div className="flex-1 px-6 py-4">
              <nav className="space-y-1">
                <Link 
                  href="/" 
                  onClick={closeMobileMenu}
                  className="flex items-center px-4 py-3 text-gray-700 hover:text-[#6C63FF] hover:bg-purple-50 font-medium font-montserrat rounded-lg transition-all duration-200 group"
                >
                  <span className="flex-1">Home</span>
                  <svg className="w-4 h-4 text-gray-400 group-hover:text-[#6C63FF] transform group-hover:translate-x-1 transition-all duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link 
                  href="/about" 
                  onClick={closeMobileMenu}
                  className="flex items-center px-4 py-3 text-gray-700 hover:text-[#6C63FF] hover:bg-purple-50 font-medium font-montserrat rounded-lg transition-all duration-200 group"
                >
                  <span className="flex-1">About us</span>
                  <svg className="w-4 h-4 text-gray-400 group-hover:text-[#6C63FF] transform group-hover:translate-x-1 transition-all duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link 
                  href="/syllabus" 
                  onClick={closeMobileMenu}
                  className="flex items-center px-4 py-3 text-gray-700 hover:text-[#6C63FF] hover:bg-purple-50 font-medium font-montserrat rounded-lg transition-all duration-200 group"
                >
                  <span className="flex-1">Syllabus Download</span>
                  <svg className="w-4 h-4 text-gray-400 group-hover:text-[#6C63FF] transform group-hover:translate-x-1 transition-all duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link 
                  href="/contact" 
                  onClick={closeMobileMenu}
                  className="flex items-center px-4 py-3 text-gray-700 hover:text-[#6C63FF] hover:bg-purple-50 font-medium font-montserrat rounded-lg transition-all duration-200 group"
                >
                  <span className="flex-1">Contact us</span>
                  <svg className="w-4 h-4 text-gray-400 group-hover:text-[#6C63FF] transform group-hover:translate-x-1 transition-all duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </nav>
            </div>

            {/* Mobile Certificate Button */}
            <div className="px-6 py-6 border-t border-gray-100">
              <button 
                onClick={closeMobileMenu}
                className="w-full bg-[#6C63FF] text-white px-6 py-3 rounded-lg font-medium font-montserrat hover:bg-[#5b54e6] transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                Certificate-verify
              </button>
            </div>

            {/* Mobile Menu Footer */}
            <div className="px-6 py-4 bg-gray-50">
              <div className="flex items-center space-x-3">
                <img 
                  src="/logo.jpg" 
                  alt="TechPoint Logo" 
                  className="w-8 h-8 object-contain rounded-md"
                />
                <span className="text-sm font-medium text-gray-600 font-montserrat">
                  TECH<span className="text-red-500">POINT</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;