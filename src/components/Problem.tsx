'use client'; // Ensure this is added for client-side rendering

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // Add this import
import './style.css'; // Ensure you have a CSS file for animations
import { Montserrat_Alternates, Montserrat } from 'next/font/google'; // Import both fonts

// Initialize Montserrat Alternates for headings
const montserratAlternates = Montserrat_Alternates({
  weight: '700', // Use bold weight for the heading
  subsets: ['latin', 'cyrillic'], // Include Cyrillic for Bulgarian text
  display: 'swap', // Improves font loading
});

// Initialize Montserrat for normal text
const montserrat = Montserrat({
  weight: ['400', '500'], // Include regular and medium weights
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
});

export const Problem = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const texts = [
    "През 2024г. наблюдаваме магазини, които работят с над 40% непотърсени пратки.",
    "Това означава, че за всеки 10 продажби, търговците плащат общо 14 доставки.",
    "За продукти с по-нисък ценови диапазон това води до значителни загуби за бизнеса.",
    "Автоматичните SMS известия създават персонализиран контакт и напомнят за пратките на клиентите.",
    "Нашият плъгин води до повишена ангажираност и отговорност от страна на клиентите.",
    "Честото изпращане на SMS съобщения увеличава вероятността клиентите да вземат пратките навреме.",
    "Персонализираната комуникация е основа за увеличаване на клиентската удовлетвореност и лоялност.",
    "Намаляването на невзетите пратки води до спестяване на значителни разходи за доставка.",
    "Бързото и ефективно уведомяване чрез SMS намалява пропуснатите доставки и забавянията.",
  ];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % texts.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + texts.length) % texts.length);
  };

  if (!isMounted) {
    return null;
  }

  return (
    <div className="bg-black text-white py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col w-full max-w-7xl mx-auto">
          <h2
            className={`text-center mb-24 text-4xl !font-black tracking-tighter ${montserratAlternates.className}`}
          >
            ЗАЩО SMS ASSIST ?
          </h2>

          <div className="relative">
            {/* Progress dots */}
            <div className="flex justify-center gap-2 mb-8">
              {texts.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-500 ease-in-out ${
                    idx === currentIndex 
                      ? 'w-8 bg-orange-500' 
                      : 'w-2 bg-gray-700 hover:bg-gray-600'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Content card */}
            <div className="relative w-full">
              <div 
                className={`
                  relative bg-[#000] rounded-xl border border-white/30 p-8 md:p-12
                  transform transition-all duration-500
                  ${montserrat.className}
                `}
              >
                {/* Mobile navigation */}
                <div className="flex md:hidden justify-center items-center gap-8 mb-8">
                  <button
                    onClick={handlePrevious}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <svg 
                      className="w-6 h-6 transform rotate-180" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7-7 7" />
                    </svg>
                  </button>

                  <div className="flex items-center gap-2">
                    <motion.span 
                      key={currentIndex}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-3xl font-bold text-orange-500"
                    >
                      {String(currentIndex + 1).padStart(2, '0')}
                    </motion.span>
                    <span className="text-gray-500 text-lg">
                      / {String(texts.length).padStart(2, '0')}
                    </span>
                  </div>

                  <button
                    onClick={handleNext}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <svg 
                      className="w-6 h-6" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>

                {/* Desktop navigation */}
                <div className="hidden md:flex justify-between items-center mb-8">
                  <div className="flex items-center gap-4">
                    <motion.span 
                      key={currentIndex}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-4xl font-bold text-orange-500"
                    >
                      {String(currentIndex + 1).padStart(2, '0')}
                    </motion.span>
                    <span className="text-gray-500 text-lg">
                      / {String(texts.length).padStart(2, '0')}
                    </span>
                  </div>
                  
                  <div className="flex gap-4">
                    <button
                      onClick={handlePrevious}
                      className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                    >
                      <span className="text-sm uppercase tracking-wider">Предишен</span>
                      <svg 
                        className="w-4 h-4 transform rotate-180 transition-transform group-hover:-translate-x-1" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7-7 7" />
                      </svg>
                    </button>
                    <button
                      onClick={handleNext}
                      className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                    >
                      <span className="text-sm uppercase tracking-wider">Следващ</span>
                      <svg 
                        className="w-4 h-4 transition-transform group-hover:translate-x-1" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Animated text content */}
                <AnimatePresence mode="wait">
                  <motion.p
                    key={currentIndex}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="text-xl md:text-2xl lg:text-3xl leading-relaxed text-gray-100 text-center md:text-left"
                  >
                    {texts[currentIndex]}
                  </motion.p>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
