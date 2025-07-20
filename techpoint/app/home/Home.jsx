import Image from 'next/image';


const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
 

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 lg:pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-montserrat leading-tight">
                <span className="text-[#1E293B]">Empower Your</span>
                <br />
                <span className="text-[#6C63FF]">Tech skill</span>
                <span className="text-[#1E293B]"> with -</span>
                <br />
                <span className="text-red-500">Techpoint</span>
              </h1>

              <p className="text-lg text-gray-600 font-montserrat max-w-md leading-relaxed">
                Learn DCA, Programming, Designing, Tally and get certified
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[#6C63FF] text-white px-8 py-4 rounded-lg font-semibold font-montserrat hover:bg-[#5b54e6] transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                Certificate-verify
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold font-montserrat hover:border-[#6C63FF] hover:text-[#6C63FF] transition-colors duration-200">
                Syllabus Download
              </button>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="relative">
            <div className="relative z-10">
              {/* Main Computer/Monitor */}
              <div className="bg-[#6C63FF] rounded-3xl p-8 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="bg-white rounded-2xl p-6 aspect-video">
                  {/* Screen Content */}
                  <div className="grid grid-cols-2 gap-4 h-full">
                    <div className="bg-red-400 rounded-lg flex items-center justify-center">
                      <div className="w-8 h-8 bg-white rounded opacity-80"></div>
                    </div>
                    <div className="bg-blue-300 rounded-lg flex items-center justify-center">
                      <div className="w-6 h-6 bg-white rounded-full opacity-80"></div>
                    </div>
                    <div className="bg-yellow-300 rounded-lg flex items-center justify-center">
                      <div className="w-8 h-6 bg-white rounded opacity-80"></div>
                    </div>
                    <div className="bg-green-300 rounded-lg flex items-center justify-center">
                      <div className="w-6 h-8 bg-white rounded opacity-80"></div>
                    </div>
                  </div>
                </div>

                {/* Monitor Stand */}
                <div className="w-16 h-6 bg-[#5b54e6] rounded-b-lg mx-auto -mb-2"></div>
                <div className="w-24 h-4 bg-[#4c45d9] rounded-full mx-auto"></div>
              </div>

              {/* Floating Elements */}
              {/* Graduation Cap */}
              <div className="absolute -top-8 -left-8 w-16 h-16 bg-[#1E293B] rounded-lg transform -rotate-12 shadow-lg">
                <div className="absolute inset-2 bg-[#6C63FF] rounded"></div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#1E293B] transform rotate-45"></div>
              </div>

              {/* Floating Person Icons */}
              <div className="absolute -right-12 top-12 w-12 h-12 bg-[#6C63FF] rounded-full shadow-lg flex items-center justify-center">
                <div className="w-6 h-6 bg-white rounded-full"></div>
              </div>

              <div className="absolute -left-6 bottom-12 w-10 h-10 bg-orange-400 rounded-full shadow-lg flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>

              {/* Books Stack */}
              <div className="absolute -bottom-6 -left-12 space-y-1">
                <div className="w-20 h-3 bg-[#6C63FF] rounded shadow-md"></div>
                <div className="w-18 h-3 bg-red-400 rounded shadow-md ml-1"></div>
                <div className="w-16 h-3 bg-blue-400 rounded shadow-md ml-2"></div>
              </div>

              {/* Floating Geometric Shapes */}
              <div className="absolute top-1/4 -right-16 w-8 h-8 bg-pink-300 rounded-full opacity-60 animate-bounce"></div>
              <div className="absolute bottom-1/4 -left-8 w-6 h-6 bg-blue-300 transform rotate-45 opacity-60"></div>
              <div className="absolute top-3/4 right-8 w-4 h-4 bg-yellow-300 rounded-full opacity-60"></div>
            </div>

            {/* Background Decorative Elements */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-12 left-12 w-32 h-32 bg-purple-200 rounded-full opacity-30 blur-xl"></div>
              <div className="absolute bottom-12 right-12 w-40 h-40 bg-blue-200 rounded-full opacity-30 blur-xl"></div>
              <div className="absolute top-1/2 left-0 w-24 h-24 bg-pink-200 rounded-full opacity-30 blur-xl"></div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;