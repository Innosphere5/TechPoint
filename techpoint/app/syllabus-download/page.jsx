
"use client"
import React from "react";
import { Download, FileText, Palette, FileSpreadsheet, Calculator, Image } from "lucide-react";

const SyllabusDownloadPage = () => {
  const syllabusFiles = [
    { 
      name: "CorelDRAW", 
      file: "/Syllabus/CORAL DRAW SYLLABUS (1).pdf",
      icon: Palette,
      description: "Complete graphics design and vector illustration course"
    },
    { 
      name: "MS Word", 
      file: "/Syllabus/MS WORD SYLLABUS.pdf",
      icon: FileText,
      description: "Master document creation and formatting skills"
    },
    { 
      name: "Tally", 
      file: "/Syllabus/TALLY SYLLABUS.pdf",
      icon: Calculator,
      description: "Comprehensive accounting and ERP software training"
    },
    { 
      name: "Photoshop", 
      file: "/Syllabus/photoshop syllabus.pdf",
      icon: Image,
      description: "Professional photo editing and digital design course"
    },
  ];

  const handleDownload = async (syllabus) => {
    try {
      // Check if file exists first
      const response = await fetch(syllabus.file);
      if (!response.ok) {
        alert('Syllabus file not found. Please contact support.');
        return;
      }

      // Create download link
      const link = document.createElement('a');
      link.href = syllabus.file;
      link.download = `${syllabus.name.replace(/\s+/g, '_')}_Syllabus.pdf`;
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Download failed:', error);
      alert('Failed to download syllabus. Please try again.');
    }
  };

  return (
    <main className="pt-20 min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="relative inline-block mb-6">
            <h1 className="text-4xl md:text-6xl font-bold text-slate-800" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Download Your Course 
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block mt-2">
                Syllabus
              </span>
            </h1>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-400 rounded-full opacity-20 animate-bounce"></div>
            <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-purple-400 rounded-full opacity-30 animate-bounce" style={{ animationDelay: '0.5s' }}></div>
          </div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Access comprehensive course syllabuses to understand curriculum, learning objectives, and course structure for all our professional programs.
          </p>
        </div>
        
        {/* Syllabus Cards Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {syllabusFiles.map((syllabus, index) => {
              const IconComponent = syllabus.icon;
              return (
                <div 
                  key={index} 
                  className="group relative"
                  style={{ 
                    animationDelay: `${index * 150}ms`,
                    animation: 'fadeInUp 0.6s ease-out forwards'
                  }}
                >
                  {/* Card Glow Effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
                  
                  {/* Main Card */}
                  <div className="relative bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                    {/* Icon Section */}
                    <div className="flex items-start space-x-6">
                      <div className="relative">
                        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-4 shadow-lg group-hover:shadow-xl transition-all duration-300">
                          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-3 transform group-hover:scale-110 transition-transform duration-300">
                            <IconComponent className="w-8 h-8 text-white" />
                          </div>
                        </div>
                        {/* Floating badge */}
                        <div className="absolute -top-1 -right-1 bg-green-400 rounded-full w-5 h-5 flex items-center justify-center shadow-md">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                      </div>
                      
                      {/* Content Section */}
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                          {syllabus.name}
                        </h3>
                        <p className="text-slate-600 mb-6 leading-relaxed">
                          {syllabus.description}
                        </p>
                        
                        {/* Download Button */}
                        <button 
                          onClick={() => handleDownload(syllabus)}
                          className="group/btn relative overflow-hidden w-full"
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl opacity-100 group-hover/btn:opacity-90 transition duration-300"></div>
                          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl opacity-0 group-hover/btn:opacity-100 transition duration-300"></div>
                          
                          <div className="relative flex items-center justify-center space-x-3 px-6 py-4 text-white font-semibold text-lg rounded-xl transform group-hover/btn:scale-105 transition-transform duration-200">
                            <Download className="w-5 h-5 group-hover/btn:animate-bounce" />
                            <span>Download Syllabus</span>
                          </div>
                          
                          {/* Button shine effect */}
                          <div className="absolute inset-0 -top-1 -left-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover/btn:opacity-20 transform -skew-x-12 transition-all duration-700 group-hover/btn:translate-x-full"></div>
                        </button>
                      </div>
                    </div>
                    
                    {/* Card Border Gradient */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Additional Info Section */}
        <div className="mt-16 text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg max-w-4xl mx-auto border border-gray-100">
            <div className="flex items-center justify-center mb-4">
              <FileText className="w-8 h-8 text-blue-600 mr-3" />
              <h3 className="text-2xl font-semibold text-slate-800" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Course Information
              </h3>
            </div>
            <p className="text-slate-600 leading-relaxed">
              All syllabuses are regularly updated to reflect current industry standards and best practices. 
              Each course includes practical assignments, projects, and assessments to ensure comprehensive learning.
            </p>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </main>
  );
};

export default SyllabusDownloadPage;
