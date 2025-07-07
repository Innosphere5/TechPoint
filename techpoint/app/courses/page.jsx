
import React from "react";

const CoursesPage = () => {
  return (
    <main className="pt-20 min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Our Courses
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Explore our comprehensive range of digital courses designed to enhance your skills.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Course cards would go here */}
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-bold text-slate-800 mb-4">Digital Computer Application</h3>
            <p className="text-slate-600 mb-4">Master essential computer applications and digital skills.</p>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Learn More
            </button>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-bold text-slate-800 mb-4">Spoken English</h3>
            <p className="text-slate-600 mb-4">Improve your English communication skills.</p>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Learn More
            </button>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-bold text-slate-800 mb-4">Web Development</h3>
            <p className="text-slate-600 mb-4">Build modern websites and web applications.</p>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CoursesPage;
