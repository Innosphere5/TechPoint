"use client"
import React from 'react';
import { Search, Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 md:px-12 py-8 relative z-10 backdrop-blur-sm bg-white/10 border-b border-white/20">
      <div className="text-2xl md:text-3xl font-bold text-slate-800 tracking-tight" style={{ fontFamily: 'Montserrat, sans-serif' }}>
        TechPoint
      </div>

      <div className="hidden md:flex items-center space-x-10 text-slate-600" style={{ fontFamily: 'Montserrat, sans-serif' }}>
        <a href="#" className="hover:text-blue-600 transition-all duration-300 font-medium text-base relative group">
          Courses
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
        </a>
        <a href="#" className="hover:text-blue-600 transition-all duration-300 font-medium text-base relative group">
          Certificate Verify
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
        </a>
        <a href="#" className="hover:text-blue-600 transition-all duration-300 font-medium text-base relative group">
          Quiz Test
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
        </a>
        <a href="#" className="hover:text-blue-600 transition-all duration-300 font-medium text-base relative group">
          Syllabus Download
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
        </a>
      </div>

      <div className="flex items-center space-x-4">
        <div className="p-2 hover:bg-white/20 rounded-full transition-all duration-300 cursor-pointer">
          <Search className="w-6 h-6 text-slate-600 hover:text-blue-600 transition-colors" />
        </div>
        <div className="p-2 hover:bg-white/20 rounded-full transition-all duration-300 cursor-pointer md:hidden">
          <Menu className="w-6 h-6 text-slate-600 hover:text-blue-600 transition-colors" />
        </div>
      </div>
    </nav>
  );
}