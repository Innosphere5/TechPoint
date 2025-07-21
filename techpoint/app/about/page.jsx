"use client"
import Image from 'next/image';
import about from "../images/about.png"
import { useState } from 'react';


export default function TechpointLanding() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100">
      {/* Main Hero Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 max-w-6xl mx-auto">

          {/* Left Side - Image */}
          <div className="flex-1 relative">
            <div className="relative w-full max-w-lg mx-auto">
             

             

              {/* Main image container */}
              <div className="relative overflow-hidden rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <Image
                  src={about}
                  alt="Techpoint Institute Team"
                  width={500}
                  height={400}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>

           
              
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="flex-1 text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
                Hey I am <span className="text-[#6C63FF]">Gaurav Kumar</span>,
              </h1>
              <p className="text-xl lg:text-2xl text-gray-700">
                Founder of <span className="text-red-500 font-semibold">Techpoint</span>
              </p>
              <p className="text-xl lg:text-2xl text-gray-700 font-medium">
                Institute
              </p>
            </div>

            {/* Contact Button */}
            <div className="pt-4">
              <button 
                className="bg-[#6C63FF] text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg transform hover:scale-105 transition-all duration-200 hover:shadow-xl"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                Contact me!
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA Section */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8 leading-tight">
            Ready to start your tech<br />
            journey with Techpoint?
          </h2>

          <button className="bg-white text-[#6C63FF] px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 hover:bg-gray-50">
            Chat on WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
}