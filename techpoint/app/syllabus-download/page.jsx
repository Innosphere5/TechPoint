
import React from "react";
import { Download, FileText } from "lucide-react";

const SyllabusDownloadPage = () => {
  const syllabusFiles = [
    { name: "Digital Computer Application", file: "dca-syllabus.pdf" },
    { name: "Spoken English", file: "spoken-english-syllabus.pdf" },
    { name: "Web Development", file: "web-dev-syllabus.pdf" },
    { name: "MS Excel Advanced", file: "excel-syllabus.pdf" },
  ];

  return (
    <main className="pt-20 min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Syllabus Download
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Download course syllabuses to understand the curriculum and learning objectives.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {syllabusFiles.map((syllabus, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 rounded-lg p-3">
                    <FileText className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-800 mb-2">{syllabus.name}</h3>
                    <p className="text-slate-600 mb-4">Complete course curriculum and objectives</p>
                    <button className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                      <Download className="w-4 h-4" />
                      <span>Download PDF</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default SyllabusDownloadPage;
