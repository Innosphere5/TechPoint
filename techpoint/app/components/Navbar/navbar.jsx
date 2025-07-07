"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, Mail, MapPin, ChevronRight } from 'lucide-react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { href: '/courses', label: 'Courses' },
    { href: '/certificate-verify', label: 'Certificate Verify' },
    { href: '/quiz-test', label: 'Quiz Test' },
    { href: '/syllabus-download', label: 'Syllabus Download' },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6  md:px-12 py-4 transition-all duration-300 ${
        isScrolled 
          ? 'backdrop-blur-md bg-white/90 shadow-lg border-b border-white/30' 
          : 'backdrop-blur-sm bg-white/10 border-b border-white/20'
      }`}>
        <Link href="/" className="text-2xl md:text-3xl font-bold text-slate-800 tracking-tight hover:text-blue-600 transition-colors duration-300" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          TechPoint
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-10 text-slate-600" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          {navLinks.map((link) => (
            <Link 
              key={link.href}
              href={link.href} 
              className="hover:text-blue-600 transition-all duration-300 font-medium text-base relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* Desktop Contact & Mobile Menu Button */}
        <div className="flex items-center space-x-4">
          {/* Contact Us Button - Desktop */}
          <Link 
            href="/contact" 
            className="hidden md:flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <Phone className="w-4 h-4" />
            <span>Contact Us</span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-3 hover:bg-white/20 rounded-full transition-all duration-300 relative z-50"
            aria-label="Toggle mobile menu"
          >
            <div className="relative w-6 h-6">
              <Menu 
                className={`w-6 h-6 text-slate-600 absolute transition-all duration-300 ${
                  isMobileMenuOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'
                }`} 
              />
              <X 
                className={`w-6 h-6 text-slate-600 absolute transition-all duration-300 ${
                  isMobileMenuOpen ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'
                }`} 
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-40 transition-all duration-300 md:hidden ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={closeMobileMenu}
      >
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
      </div>

      {/* Mobile Menu */}
      <div 
        className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] z-50 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out md:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Menu Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <h2 className="text-xl font-bold text-slate-800" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Menu
            </h2>
            <button
              onClick={closeMobileMenu}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
              aria-label="Close menu"
            >
              <X className="w-6 h-6 text-slate-600" />
            </button>
          </div>

          {/* Navigation Links */}
          <div className="flex-1 overflow-y-auto">
            <div className="p-6 space-y-2">
              {navLinks.map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMobileMenu}
                  className="flex items-center justify-between p-4 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-300 group"
                  style={{ 
                    animationDelay: `${index * 100}ms`,
                    animation: isMobileMenuOpen ? 'slideInFromRight 0.3s ease-out forwards' : 'none'
                  }}
                >
                  <span className="text-slate-700 font-medium text-lg group-hover:text-blue-600 transition-colors">
                    {link.label}
                  </span>
                  <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-blue-600 transform group-hover:translate-x-1 transition-all duration-300" />
                </Link>
              ))}
            </div>

            {/* Contact Section */}
            <div className="p-6 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-slate-800 mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Get in Touch
              </h3>
              <div className="space-y-4">
                <Link
                  href="/contact"
                  onClick={closeMobileMenu}
                  className="flex items-center space-x-3 p-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <Phone className="w-5 h-5" />
                  <span className="font-medium">Contact Us</span>
                </Link>

                <div className="flex items-center space-x-3 p-4 rounded-xl bg-gray-50 text-slate-600">
                  <Mail className="w-5 h-5 text-blue-600" />
                  <span className="text-sm">gktechp931@gmail.com</span>
                </div>

                <div className="flex items-center space-x-3 p-4 rounded-xl bg-gray-50 text-slate-600">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  <span className="text-sm">Bassi Pathana, F.G.S</span>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="p-6 border-t border-gray-200">
            <p className="text-center text-sm text-slate-500">
              © 2025 TechPoint. All rights reserved.
            </p>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes slideInFromRight {
          0% {
            opacity: 0;
            transform: translateX(20px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
}