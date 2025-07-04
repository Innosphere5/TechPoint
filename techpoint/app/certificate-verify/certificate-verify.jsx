"use client"
import React, { useState, useEffect } from 'react';
import { CheckCircle, Shield, Award, Sparkles, Lock, Search } from 'lucide-react';


const CertificateVerify = () => {
  const [registrationNumber, setRegistrationNumber] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [particles, setParticles] = useState([]);

  // Generate floating particles for background animation
  useEffect(() => {
    const generateParticles = () => {
      const newParticles = [];
      for (let i = 0; i < 20; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 4 + 2,
          delay: Math.random() * 4,
        });
      }
      setParticles(newParticles);
    };
    generateParticles();
  }, []);

  const handleVerify = async () => {
    if (!registrationNumber.trim()) return;

    setIsVerifying(true);
    setShowSuccess(false);

    // Simulate verification process
    setTimeout(() => {
      setIsVerifying(false);
      setIsVerified(true);
      setShowSuccess(true);

      // Reset after 3 seconds
      setTimeout(() => {
        setShowSuccess(false);
        setIsVerified(false);
      }, 3000);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 relative overflow-hidden">
    
      {/* Floating geometric shapes */}
    
      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
      

        {/* Main Card */}
        <div className="w-full max-w-md mx-4">
          <div className="relative group">
            {/* Card Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-pulse"></div>

            {/* Main Card */}
            <div className="relative bg-white rounded-3xl shadow-2xl p-8 transform hover:scale-105 transition-all duration-300">
              {/* Certificate Icon */}
              <div className="text-center mb-8">
                <div className="relative inline-block">
                  <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 shadow-lg">
                    <div className="relative">
                      <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-4 shadow-lg">
                        <CheckCircle className="w-8 h-8 text-white" />
                      </div>
                      <div className="absolute -top-1 -right-1 bg-green-400 rounded-full w-6 h-6 flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                    </div>
                  </div>

                  {/* Floating elements */}
                  <div className="absolute -top-2 left-12 w-3 h-3 bg-blue-400 rounded-full animate-bounce opacity-60"></div>
                  <div className="absolute -bottom-2 right-12 w-2 h-2 bg-purple-400 rounded-full animate-bounce opacity-60" style={{ animationDelay: '0.5s' }}></div>
                </div>
              </div>

              {/* Form */}
              <div className="space-y-6">
                <div className="relative">
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Registration Number
                  </label>
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
                    <input
                      type="text"
                      value={registrationNumber}
                      onChange={(e) => setRegistrationNumber(e.target.value)}
                      placeholder="Enter your certificate number"
                      className="relative w-full px-6 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:bg-white transition-all duration-300 text-gray-700 placeholder-gray-400"
                      disabled={isVerifying}
                    />
                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                      <Lock className="w-5 h-5 text-gray-400" />
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleVerify}
                  disabled={!registrationNumber.trim() || isVerifying}
                  className="w-full relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl opacity-100 group-hover:opacity-90 transition duration-300"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl opacity-0 group-hover:opacity-100 transition duration-300"></div>

                  <div className="relative px-8 py-4 text-white font-semibold text-lg rounded-xl flex items-center justify-center space-x-3 transform group-hover:scale-105 transition-transform duration-200">
                    {isVerifying ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        <span>Verifying...</span>
                      </>
                    ) : (
                      <>
                        <Search className="w-5 h-5" />
                        <span>Verify</span>
                      </>
                    )}
                  </div>

                  {/* Button shine effect */}
                  <div className="absolute inset-0 -top-1 -left-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform -skew-x-12 transition-all duration-700 group-hover:translate-x-full"></div>
                </button>
              </div>

              {/* Security Badge */}
              <div className="mt-8 text-center">
                <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-50 to-emerald-50 px-4 py-2 rounded-full border border-green-200">
                  <Shield className="w-4 h-4 text-green-600" />
                  <span className="text-sm font-medium text-green-700">SSL Secured</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
       
        
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes fade-in-up {
          from { 
            opacity: 0;
            transform: translateY(20px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scale-in {
          from { 
            opacity: 0;
            transform: scale(0.8);
          }
          to { 
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out;
        }

        .animate-scale-in {
          animation: scale-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default CertificateVerify;