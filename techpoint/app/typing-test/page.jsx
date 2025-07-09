
"use client"
import React, { useState, useEffect, useRef } from 'react';
import { Clock, RotateCcw, Target, Zap, Award, Globe, Keyboard } from 'lucide-react';

// Sample texts for typing
const sampleTexts = {
  english: {
    beginner: [
      "The quick brown fox jumps over the lazy dog. This sentence contains all letters of the alphabet and is perfect for typing practice.",
      "Technology has changed the way we live and work. Computers and smartphones have become essential tools in our daily lives.",
      "Learning to type fast is a valuable skill in today's digital world. Practice makes perfect when it comes to keyboard mastery.",
      "The sun rises in the east and sets in the west. Birds fly high in the blue sky while children play in the park below."
    ],
    intermediate: [
      "Artificial intelligence and machine learning are revolutionizing industries across the globe. From healthcare to finance, these technologies are creating unprecedented opportunities for innovation and growth.",
      "The rapid advancement of technology has transformed our society in ways that were unimaginable just a few decades ago. Social media platforms connect billions of people worldwide, enabling instant communication and information sharing.",
      "Cybersecurity has become increasingly important as more businesses and individuals rely on digital platforms for their daily operations. Protecting sensitive data and maintaining privacy are critical challenges in the modern era.",
      "Climate change represents one of the most pressing challenges of our time, requiring coordinated global action to reduce greenhouse gas emissions and transition to sustainable energy sources."
    ]
  },
  punjabi: {
    beginner: [
      "ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ। ਅਸੀਂ ਪੰਜਾਬੀ ਭਾਸ਼ਾ ਸਿੱਖ ਰਹੇ ਹਾਂ। ਇਹ ਬਹੁਤ ਸੁੰਦਰ ਭਾਸ਼ਾ ਹੈ।",
      "ਸਕੂਲ ਵਿੱਚ ਬੱਚੇ ਪੜ੍ਹਦੇ ਹਨ। ਉਹ ਖੇਡਦੇ ਅਤੇ ਹੱਸਦੇ ਹਨ। ਅਧਿਆਪਕ ਉਨ੍ਹਾਂ ਨੂੰ ਪੜ੍ਹਾਉਂਦੇ ਹਨ।",
      "ਅਸੀਂ ਰੋਜ਼ ਅਨਾਜ ਖਾਂਦੇ ਹਾਂ। ਰੋਟੀ, ਚਾਵਲ ਅਤੇ ਦਾਲ ਸਾਡਾ ਮੁੱਖ ਭੋਜਨ ਹੈ।",
      "ਪੰਜਾਬ ਵਿੱਚ ਖੇਤੀ ਬਹੁਤ ਮਸ਼ਹੂਰ ਹੈ। ਕਿਸਾਨ ਗੰਨੇ, ਕਣਕ ਅਤੇ ਚਾਵਲ ਉਗਾਉਂਦੇ ਹਨ।"
    ],
    intermediate: [
      "ਤਕਨੀਕੀ ਤਰੱਕੀ ਨੇ ਸਾਡੇ ਜੀਵਨ ਨੂੰ ਬਹੁਤ ਬਦਲ ਦਿੱਤਾ ਹੈ। ਕੰਪਿਊਟਰ ਅਤੇ ਸਮਾਰਟਫੋਨ ਹੁਣ ਸਾਡੇ ਰੋਜ਼ਾਨਾ ਜੀਵਨ ਦਾ ਹਿੱਸਾ ਬਣ ਗਏ ਹਨ।",
      "ਸਿੱਖਿਆ ਹਰ ਵਿਅਕਤੀ ਦਾ ਬੁਨਿਆਦੀ ਹੱਕ ਹੈ। ਅਸੀਂ ਸਾਰਿਆਂ ਨੂੰ ਮਿਲ ਕੇ ਸਿੱਖਿਆ ਦੇ ਖੇਤਰ ਵਿੱਚ ਸੁਧਾਰ ਲਿਆਉਣਾ ਚਾਹੀਦਾ ਹੈ।",
      "ਵਾਤਾਵਰਣ ਦੀ ਸੁਰੱਖਿਆ ਸਾਡੀ ਸਾਂਝੀ ਜ਼ਿੰਮੇਵਾਰੀ ਹੈ। ਅਸੀਂ ਪੇੜ ਲਗਾ ਕੇ ਅਤੇ ਪ੍ਰਦੂਸ਼ਣ ਘਟਾ ਕੇ ਧਰਤੀ ਨੂੰ ਬਚਾ ਸਕਦੇ ਹਾਂ।",
      "ਸਾਡੀ ਪੰਜਾਬੀ ਸਭਿਆਚਾਰ ਬਹੁਤ ਅਮੀਰ ਹੈ। ਸਾਡੇ ਤਿਉਹਾਰ, ਸੰਗੀਤ ਅਤੇ ਭੋਜਨ ਪੂਰੀ ਦੁਨੀਆਂ ਵਿੱਚ ਮਸ਼ਹੂਰ ਹਨ।"
    ]
  }
};

const TypingTest = () => {
  const [language, setLanguage] = useState('english');
  const [level, setLevel] = useState('beginner');
  const [currentText, setCurrentText] = useState('');
  const [userInput, setUserInput] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [isCompleted, setIsCompleted] = useState(false);
  const [mistakes, setMistakes] = useState(0);
  const [wpm, setWpm] = useState(0);
  const [accuracy, setAccuracy] = useState(100);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const inputRef = useRef(null);
  const textDisplayRef = useRef(null);

  // Initialize test
  useEffect(() => {
    resetTest();
  }, [language, level]);

  // Timer
  useEffect(() => {
    let interval;
    if (startTime && !endTime) {
      interval = setInterval(() => {
        setTimeElapsed(Math.floor((Date.now() - startTime) / 1000));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [startTime, endTime]);

  // Calculate WPM and accuracy
  useEffect(() => {
    if (userInput.length > 0 && timeElapsed > 0) {
      const words = userInput.trim().split(' ').length;
      const minutes = timeElapsed / 60;
      setWpm(Math.round(words / minutes));
      
      let correctChars = 0;
      for (let i = 0; i < userInput.length; i++) {
        if (userInput[i] === currentText[i]) {
          correctChars++;
        }
      }
      setAccuracy(Math.round((correctChars / userInput.length) * 100));
    }
  }, [userInput, timeElapsed, currentText]);

  const resetTest = () => {
    const texts = sampleTexts[language][level];
    const randomText = texts[Math.floor(Math.random() * texts.length)];
    setCurrentText(randomText);
    setUserInput('');
    setCurrentIndex(0);
    setStartTime(null);
    setEndTime(null);
    setIsCompleted(false);
    setMistakes(0);
    setWpm(0);
    setAccuracy(100);
    setTimeElapsed(0);
    setShowResults(false);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    
    if (!startTime) {
      setStartTime(Date.now());
    }

    if (value.length <= currentText.length) {
      setUserInput(value);
      setCurrentIndex(value.length);

      // Count mistakes
      let mistakeCount = 0;
      for (let i = 0; i < value.length; i++) {
        if (value[i] !== currentText[i]) {
          mistakeCount++;
        }
      }
      setMistakes(mistakeCount);

      // Check completion
      if (value === currentText) {
        setEndTime(Date.now());
        setIsCompleted(true);
        setShowResults(true);
      }
    }
  };

  const getCharacterClass = (index) => {
    if (index < userInput.length) {
      return userInput[index] === currentText[index] 
        ? 'text-green-600 bg-green-50' 
        : 'text-red-600 bg-red-50';
    } else if (index === currentIndex) {
      return 'bg-blue-200 animate-pulse';
    }
    return 'text-gray-600';
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const getFontFamily = () => {
    return language === 'punjabi' 
      ? { fontFamily: 'Noto Sans Gurmukhi, Mukta, sans-serif' }
      : { fontFamily: 'Montserrat, sans-serif' };
  };

  return (
    <main className="pt-20 min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Google Fonts */}
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&family=Noto+Sans+Gurmukhi:wght@300;400;500;600&family=Mukta:wght@300;400;500;600&display=swap" rel="stylesheet" />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Typing Test
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Improve your typing speed and accuracy with our interactive typing test
          </p>
        </div>

        {!showResults ? (
          <div className="max-w-5xl mx-auto">
            {/* Controls */}
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Language Selection */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-3">
                    <Globe className="w-4 h-4 inline mr-2" />
                    Language
                  </label>
                  <select
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                  >
                    <option value="english">English</option>
                    <option value="punjabi">ਪੰਜਾਬੀ (Punjabi)</option>
                  </select>
                </div>

                {/* Level Selection */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-3">
                    <Target className="w-4 h-4 inline mr-2" />
                    Level
                  </label>
                  <select
                    value={level}
                    onChange={(e) => setLevel(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                  >
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                  </select>
                </div>

                {/* Reset Button */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-3">
                    <RotateCcw className="w-4 h-4 inline mr-2" />
                    Action
                  </label>
                  <button
                    onClick={resetTest}
                    className="w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                  >
                    New Test
                  </button>
                </div>
              </div>
            </div>

            {/* Stats Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-white rounded-xl shadow-lg p-4 text-center">
                <div className="text-2xl font-bold text-blue-600" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  {formatTime(timeElapsed)}
                </div>
                <div className="text-sm text-slate-600 font-medium">Time</div>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-4 text-center">
                <div className="text-2xl font-bold text-green-600" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  {wpm}
                </div>
                <div className="text-sm text-slate-600 font-medium">WPM</div>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-4 text-center">
                <div className="text-2xl font-bold text-purple-600" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  {accuracy}%
                </div>
                <div className="text-sm text-slate-600 font-medium">Accuracy</div>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-4 text-center">
                <div className="text-2xl font-bold text-red-600" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  {mistakes}
                </div>
                <div className="text-sm text-slate-600 font-medium">Mistakes</div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
              <div className="mb-4">
                <div className="flex justify-between text-sm text-slate-600 mb-2">
                  <span>Progress</span>
                  <span>{Math.round((userInput.length / currentText.length) * 100)}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-gradient-to-r from-blue-600 to-purple-600 h-3 rounded-full transition-all duration-300"
                    style={{ width: `${(userInput.length / currentText.length) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Typing Area */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              {/* Text Display */}
              <div
                ref={textDisplayRef}
                className="mb-6 p-6 bg-gray-50 rounded-xl border-2 border-gray-200 min-h-[200px] text-xl leading-relaxed"
                style={getFontFamily()}
              >
                {currentText.split('').map((char, index) => (
                  <span
                    key={index}
                    className={`${getCharacterClass(index)} transition-all duration-150 ${
                      char === ' ' ? 'mx-1' : ''
                    }`}
                  >
                    {char === ' ' ? '\u00A0' : char}
                  </span>
                ))}
              </div>

              {/* Input Area */}
              <div className="relative">
                <Keyboard className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <textarea
                  ref={inputRef}
                  value={userInput}
                  onChange={handleInputChange}
                  placeholder={language === 'punjabi' ? 'ਇੱਥੇ ਟਾਈਪ ਕਰਨਾ ਸ਼ੁਰੂ ਕਰੋ...' : 'Start typing here...'}
                  className="w-full pl-12 pr-4 py-4 text-xl border-2 border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 resize-none"
                  style={{
                    ...getFontFamily(),
                    lineHeight: '1.6'
                  }}
                  rows="4"
                  disabled={isCompleted}
                />
              </div>
            </div>
          </div>
        ) : (
          /* Results Dashboard */
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl p-8 text-center">
              <div className="mb-8">
                <Award className="w-20 h-20 text-yellow-500 mx-auto mb-4 animate-bounce" />
                <h2 className="text-4xl font-bold text-slate-800 mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  Test Completed!
                </h2>
                <p className="text-xl text-slate-600">Great job! Here are your results:</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 transform hover:scale-105 transition-transform duration-300">
                  <Zap className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-blue-600 mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    {wpm}
                  </div>
                  <div className="text-sm text-blue-700 font-semibold">Words Per Minute</div>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 transform hover:scale-105 transition-transform duration-300">
                  <Target className="w-8 h-8 text-green-600 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-green-600 mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    {accuracy}%
                  </div>
                  <div className="text-sm text-green-700 font-semibold">Accuracy</div>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 transform hover:scale-105 transition-transform duration-300">
                  <Clock className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-purple-600 mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    {formatTime(timeElapsed)}
                  </div>
                  <div className="text-sm text-purple-700 font-semibold">Time Taken</div>
                </div>

                <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-6 transform hover:scale-105 transition-transform duration-300">
                  <div className="text-3xl font-bold text-red-600 mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    {mistakes}
                  </div>
                  <div className="text-sm text-red-700 font-semibold">Mistakes</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => setShowResults(false)}
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  <RotateCcw className="w-5 h-5 inline mr-2" />
                  Try Again
                </button>
                <button
                  onClick={resetTest}
                  className="px-8 py-4 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  New Test
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default TypingTest;
