"use client"
import React from 'react';
import Image from 'next/image';
import logo from '../images/logo.png';
import Navbar from "../components/Navbar/navbar"


export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Google Fonts - Montserrat */}
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute  left-20 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-indigo-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse delay-75"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-pulse delay-150"></div>
      </div>

      {/* Navigation */}
      <Navbar />

      {/* Hero Content */}
      <div className="px-6 md:px-12  md:py-12 relative z-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-10 animate-fadeInLeft">
            <div className="space-y-8">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-600 text-sm font-medium mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                ✨ Transform Your Career Today
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-800 leading-tight tracking-tight" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Empower Your 
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 animate-gradient">
                  Future
                </span>
                <span className="text-slate-700 text-4xl md:text-5xl lg:text-6xl font-semibold">
                  with Tech Skills
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-xl font-medium" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Master <span className="text-blue-600 font-semibold">MS Excel</span>, <span className="text-blue-600 font-semibold">Photoshop</span>, <span className="text-blue-600 font-semibold">Web Development</span>, and more to thrive in today's digital landscape.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
              <button className="group relative bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-10 py-5 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-blue-500/25 overflow-hidden" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                <span className="relative z-10">Certificate Verify</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>

              <button className="group relative border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-10 py-5 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25 backdrop-blur-sm bg-white/50" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                <span className="relative z-10">Syllabus Download</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
              </button>
            </div>

            {/* Stats */}
            <div className="flex items-center space-x-8 pt-8 border-t border-slate-200/50">
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-800" style={{ fontFamily: 'Montserrat, sans-serif' }}>10K+</div>
                <div className="text-sm text-slate-600 font-medium" style={{ fontFamily: 'Montserrat, sans-serif' }}>Students</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-800" style={{ fontFamily: 'Montserrat, sans-serif' }}>50+</div>
                <div className="text-sm text-slate-600 font-medium" style={{ fontFamily: 'Montserrat, sans-serif' }}>Courses</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-800" style={{ fontFamily: 'Montserrat, sans-serif' }}>95%</div>
                <div className="text-sm text-slate-600 font-medium" style={{ fontFamily: 'Montserrat, sans-serif' }}>Success Rate</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative flex justify-center lg:justify-end animate-fadeInRight">
            <div className="relative group">
              {/* Floating decorative elements */}
              <div className="absolute -top-6 -left-6 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl rotate-12 opacity-80 animate-bounce shadow-lg"></div>
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-70 animate-pulse delay-75 shadow-lg"></div>
              <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-3xl rotate-45 opacity-60 animate-bounce delay-150 shadow-lg"></div>
              <div className="absolute -bottom-4 -right-6 w-6 h-6 bg-gradient-to-r from-pink-500 to-red-500 rounded-full opacity-80 animate-pulse delay-300 shadow-lg"></div>

              {/* Main image container */}
              <div className="relative bg-gradient-to-br from-white/30 to-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20 group-hover:scale-105 transition-transform duration-500">
                <Image
                  src={logo}
                  alt="Tech Skills Learning Illustration" 
                  className="w-full max-w-md lg:max-w-lg h-auto object-contain drop-shadow-2xl"
                />

                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-60 animate-pulse shadow-lg"></div>
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-50 animate-pulse delay-75 shadow-lg"></div>
        <div className="absolute bottom-1/4 left-1/3 w-4 h-4 bg-gradient-to-r from-indigo-400 to-blue-400 rounded-full opacity-40 animate-pulse delay-150 shadow-lg"></div>
        <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full opacity-70 animate-pulse delay-300 shadow-lg"></div>
        <div className="absolute bottom-1/3 right-1/2 w-3 h-3 bg-gradient-to-r from-pink-400 to-red-400 rounded-full opacity-50 animate-pulse delay-500 shadow-lg"></div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-fadeInLeft {
          animation: fadeInLeft 0.8s ease-out;
        }

        .animate-fadeInRight {
          animation: fadeInRight 0.8s ease-out 0.2s both;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  );
}