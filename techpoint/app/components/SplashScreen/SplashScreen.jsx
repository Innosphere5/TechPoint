
"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import techpoint from '../Navbar/techpoint.png';

const SplashScreen = ({ onFinish }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => {
        onFinish();
      }, 500); // Wait for fade out animation
    }, 3000); // Show splash for 3 seconds

    return () => clearTimeout(timer);
  }, [onFinish]);

  if (!isVisible) {
    return (
      <div className={`fixed inset-0 bg-white z-50 flex flex-col items-center justify-center transition-opacity duration-500 opacity-0`}>
        <div className="text-center space-y-8">
          <div className="relative">
            <Image
              src={techpoint}
              alt="TechPoint Logo"
              width={300}
              height={200}
              className="h-32 w-auto object-contain animate-pulse"
              priority
            />
          </div>
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-[#6C63FF] font-montserrat">
              Tech Learning Institute
            </h2>
            <div className="flex justify-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#6C63FF]"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-[#6C63FF] via-purple-600 to-indigo-700 z-50 flex flex-col items-center justify-center">
      <div className="text-center space-y-8">
        <div className="relative">
          <div className="absolute -inset-4 bg-white/20 rounded-full blur-xl animate-pulse"></div>
          <div className="relative bg-white rounded-2xl p-6 shadow-2xl transform hover:scale-105 transition-transform duration-300">
            <Image
              src={techpoint}
              alt="TechPoint Logo"
              width={300}
              height={200}
              className="h-32 w-auto object-contain"
              priority
            />
          </div>
        </div>
        
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-white font-montserrat tracking-wide">
            Tech Learning Institute
          </h2>
          
          {/* Loading animation */}
          <div className="flex justify-center space-x-2">
            <div className="w-3 h-3 bg-white rounded-full animate-bounce"></div>
            <div className="w-3 h-3 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-3 h-3 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>
        </div>
      </div>
      
      {/* Background animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
    </div>
  );
};

export default SplashScreen;
