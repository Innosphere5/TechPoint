import Image from 'next/image';
import hero from "../images/hero.png"
import Link from "next/link"

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
            {/* CTA Links */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/certificate-verify"
                className="bg-[#6C63FF] text-white px-8 py-4.5 rounded-lg font-semibold font-montserrat hover:bg-[#5b54e6] transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-center"
              >
                Certificate-verify
              </Link>
              <Link 
                href="/syllabus-download"
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold font-montserrat hover:border-[#6C63FF] hover:text-[#6C63FF] transition-colors duration-200 text-center"
              >
                Syllabus Download
              </Link>
            </div>
          </div>
          {/* Right Hero Image */}
          <div className="relative">
            <div className="relative z-10">
              <Image
                src={hero}
                alt="Techpoint Education Hero"
                width={600}
                height={450}
                className="w-full h-auto max-w-lg mx-auto transform hover:scale-105 transition-transform duration-300 drop-shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;