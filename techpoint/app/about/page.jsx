"use client"
import Image from 'next/image';
import about from "../images/about.png"
import { useState } from 'react';
import Link from "next/link"

// WhatsApp Icon Component
const WhatsAppIcon = () => (
  <svg 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="currentColor"
    className="mr-2"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.63"/>
  </svg>
);

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
              <Link href="/contact">
                <button
                className="bg-[#6C63FF] text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg transform hover:scale-105 transition-all duration-200 hover:shadow-xl"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                Contact me!
                  </button>
              </Link>
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
          <a 
            href="https://wa.me/917340747117" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white text-[#6C63FF] px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 hover:bg-gray-50 flex items-center justify-center mx-auto inline-flex"
          >
            <WhatsAppIcon />
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}