"use client"
import Image from 'next/image';
import logo1 from "../images/logo1.png"
import logo2 from "../images/logo2.png"
import Link from "next/link"
import { useState, useEffect } from 'react';

const Home = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [elementsLoaded, setElementsLoaded] = useState(false);

  const texts = ['DCA', 'Programming', 'Tally', 'Photoshop',];

  useEffect(() => {
    const typeSpeed = isDeleting ? 80 : 150;
    const currentWord = texts[currentIndex];

    const timer = setTimeout(() => {
      if (!isDeleting && charIndex < currentWord.length) {
        setCurrentText(currentWord.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (isDeleting && charIndex > 0) {
        setCurrentText(currentWord.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else if (!isDeleting && charIndex === currentWord.length) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setCurrentIndex((currentIndex + 1) % texts.length);
      }
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [currentText, currentIndex, charIndex, isDeleting, texts]);

  // Trigger animations after component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      setElementsLoaded(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-purple-100 rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-red-100 rounded-full opacity-50 animate-bounce-slow"></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-blue-100 rounded-full opacity-40 animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-12 h-12 bg-green-100 rounded-full opacity-60 animate-float"></div>

        {/* Tech pattern dots */}
        <div className="absolute top-1/4 left-1/4 grid grid-cols-3 gap-2 opacity-20">
          {Array.from({length: 9}).map((_, i) => (
            <div key={i} className="w-2 h-2 bg-gray-400 rounded-full animate-pulse" style={{animationDelay: `${i * 0.2}s`}}></div>
          ))}
        </div>

        <div className="absolute bottom-1/4 right-1/4 grid grid-cols-4 gap-1 opacity-15">
          {Array.from({length: 16}).map((_, i) => (
            <div key={i} className="w-1 h-1 bg-purple-400 rounded-full animate-pulse" style={{animationDelay: `${i * 0.1}s`}}></div>
          ))}
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <a 
        href="https://wa.me/917340747117" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="28" 
          height="28" 
          viewBox="0 0 24 24" 
          fill="currentColor"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.506"/>
        </svg>
      </a>

      <main className="relative z-10 min-h-screen flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">

          {/* Mobile Layout */}
          <div className="block lg:hidden ">
            <div className="space-y-8">
              {/* Main Content */}
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl font-bold font-montserrat leading-tight">
                  <span className="text-[#1E293B]">Empower Your</span>
                  <br />
                  <span className="text-[#6C63FF]">Tech skill</span>
                  <span className="text-[#1E293B]"> with</span>
                  <br />
                  <span className="inline-block min-w-[300px] text-left">
                    <span className="text-red-500">{currentText}</span>
                    <span className="text-red-500 animate-pulse">|</span>
                  </span>
                  <span className="text-[#1E293B] block mt-2">at Techpoint</span>
                </h1>

                {/* ISO Certification Badge */}
                <div className="inline-flex items-center bg-gradient-to-r from-green-100 to-blue-100 px-4 py-2 rounded-full border border-green-200 shadow-sm">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                  <p className="text-sm font-semibold text-gray-700 font-montserrat">
                    ISO - 9001 Certified Government Registered Institute
                  </p>
                </div>
              </div>

              {/* CTA Button */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/certificate-verify"
                  className="bg-[#6C63FF] text-white px-8 py-4 rounded-lg font-semibold font-montserrat hover:bg-[#5b54e6] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-center relative overflow-hidden group"
                >
                  <span className="relative z-10">Certificate Verify</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                </Link>
              </div>

              {/* Mobile Logos */}
              <div className="flex justify-center items-center gap-6 pt-6">
                <div className="relative">
                  <Image
                    src={logo1}
                    alt="Partner Logo 1"
                    width={80}
                    height={60}
                    className="object-contain"
                  />
                </div>
                <div className="w-px h-12 bg-gray-300"></div>
                <div className="relative">
                  <Image
                    src={logo2}
                    alt="Partner Logo 2"
                    width={80}
                    height={60}
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#6C63FF] font-montserrat">1000+</div>
                  <div className="text-sm text-gray-600">Students</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-500 font-montserrat">15+</div>
                  <div className="text-sm text-gray-600">Courses</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-500 font-montserrat">95%</div>
                  <div className="text-sm text-gray-600">Success Rate</div>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Layout - Centered */}
          <div className="hidden lg:block">
            <div className="text-center space-y-12">

              {/* Main Heading */}
              <div className={`space-y-6 transform transition-all duration-1000 ${
                elementsLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}>
                <h1 className="text-5xl xl:text-7xl font-bold font-montserrat leading-tight max-w-4xl mx-auto">
                  <span className="text-[#1E293B]">Empower Your</span>
                  <br />
                  <span className="text-[#6C63FF]">Tech Skills</span>
                  <span className="text-[#1E293B]"> with</span>
                  <br />
                  <span className="inline-block min-w-[400px]">
                    <span className="text-red-500">{currentText}</span>
                    <span className="text-red-500 animate-pulse">|</span>
                  </span>
                  <br />
                  <span className="text-[#1E293B]">at Techpoint</span>
                </h1>

                {/* ISO Certification Badge */}
                <div className="flex justify-center">
                  <div className="inline-flex items-center bg-gradient-to-r from-green-100 to-blue-100 px-6 py-3 rounded-full border border-green-200 shadow-lg">
                    <div className="w-4 h-4 bg-green-500 rounded-full mr-3 animate-pulse"></div>
                    <p className="text-base font-semibold text-gray-700 font-montserrat">
                      ISO - 9001 Certified Government Registered Institute
                    </p>
                  </div>
                </div>
              </div>

              {/* Interactive Feature Cards */}
              <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto transform transition-all duration-1000 delay-300 ${
                elementsLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}>

                {/* Card 1 - Digital Skills */}
                <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-purple-100 hover:border-purple-200 group">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">💻</div>
                  <h3 className="text-xl font-bold text-[#6C63FF] mb-2 font-montserrat">Digital Skills</h3>
                  <p className="text-gray-600 text-sm">Modern computer courses for the digital age</p>
                  <div className="mt-4 h-1 bg-purple-200 rounded-full overflow-hidden">
                    <div className="h-full bg-[#6C63FF] rounded-full w-0 group-hover:w-full transition-all duration-500"></div>
                  </div>
                </div>

                {/* Card 2 - Creative Arts */}
                <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-red-100 hover:border-red-200 group">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🎨</div>
                  <h3 className="text-xl font-bold text-red-500 mb-2 font-montserrat">Creative Design</h3>
                  <p className="text-gray-600 text-sm">Photoshop and creative design mastery</p>
                  <div className="mt-4 h-1 bg-red-200 rounded-full overflow-hidden">
                    <div className="h-full bg-red-500 rounded-full w-0 group-hover:w-full transition-all duration-500"></div>
                  </div>
                </div>

                {/* Card 3 - Business Skills */}
                <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-green-100 hover:border-green-200 group">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">📊</div>
                  <h3 className="text-xl font-bold text-green-500 mb-2 font-montserrat">Business Tech</h3>
                  <p className="text-gray-600 text-sm">Accounting software and business solutions</p>
                  <div className="mt-4 h-1 bg-green-200 rounded-full overflow-hidden">
                    <div className="h-full bg-green-500 rounded-full w-0 group-hover:w-full transition-all duration-500"></div>
                  </div>
                </div>
              </div>

              {/* Stats Section */}
              <div className={`flex justify-center items-center gap-16 transform transition-all duration-1000 delay-500 ${
                elementsLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}>
                <div className="text-center group cursor-pointer">
                  <div className="text-4xl font-bold text-[#6C63FF] font-montserrat group-hover:scale-110 transition-transform duration-300">1000+</div>
                  <div className="text-lg text-gray-600 font-medium">Happy Students</div>
                  <div className="w-16 h-1 bg-[#6C63FF] mx-auto mt-2 rounded-full"></div>
                </div>

                <div className="w-px h-20 bg-gray-200"></div>

                <div className="text-center group cursor-pointer">
                  <div className="text-4xl font-bold text-red-500 font-montserrat group-hover:scale-110 transition-transform duration-300">15+</div>
                  <div className="text-lg text-gray-600 font-medium">Expert Courses</div>
                  <div className="w-16 h-1 bg-red-500 mx-auto mt-2 rounded-full"></div>
                </div>

                <div className="w-px h-20 bg-gray-200"></div>

                <div className="text-center group cursor-pointer">
                  <div className="text-4xl font-bold text-green-500 font-montserrat group-hover:scale-110 transition-transform duration-300">95%</div>
                  <div className="text-lg text-gray-600 font-medium">Success Rate</div>
                  <div className="w-16 h-1 bg-green-500 mx-auto mt-2 rounded-full"></div>
                </div>
              </div>

              {/* CTA Button */}
              <div className={`transform transition-all duration-1000 delay-700 ${
                elementsLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}>
                <Link 
                  href="/certificate-verify"
                  className="inline-block bg-[#6C63FF] text-white px-12 py-5 rounded-2xl font-bold font-montserrat hover:bg-[#5b54e6] transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 text-lg relative overflow-hidden group"
                >
                  <span className="relative z-10">Verify Your Certificate</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                </Link>
              </div>

              {/* Partner Logos */}
              <div className={`flex justify-center items-center gap-12 pt-8 transform transition-all duration-1000 delay-900 ${
                elementsLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}>
                <div className="relative hover:scale-110 transition-transform duration-300">
                  <Image
                    src={logo1}
                    alt="Partner Logo 1"
                    width={120}
                    height={90}
                    className="object-contain"
                  />
                </div>
                <div className="w-px h-20 bg-gray-300"></div>
                <div className="relative hover:scale-110 transition-transform duration-300">
                  <Image
                    src={logo2}
                    alt="Partner Logo 2"
                    width={120}
                    height={90}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.8; }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
        .shadow-3xl {
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
        }
      `}</style>
    </div>
  );
};

export default Home;