import React from "react";

const QuizTestPage = () => {
  return (
    <main className="pt-20 min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Quiz Test
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Test your knowledge with our interactive quizzes and assessments.
          </p>
        </div>

        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">Available Tests</h2>
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
              <h3 className="font-semibold text-slate-800">Computer Basics Quiz</h3>
              <p className="text-slate-600 text-sm mt-1">Test your fundamental computer knowledge</p>
              <button className="mt-3 bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700 transition-colors">
                Start Quiz
              </button>
            </div>

            <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
              <h3 className="font-semibold text-slate-800">English Proficiency Test</h3>
              <p className="text-slate-600 text-sm mt-1">Assess your English language skills</p>
              <button className="mt-3 bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700 transition-colors">
                Start Quiz
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default QuizTestPage;