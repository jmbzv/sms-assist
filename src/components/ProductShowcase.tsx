'use client'; // Ensure this is added for client-side rendering

import React from 'react';
import { Montserrat_Alternates, Montserrat } from 'next/font/google'; // Import both fonts
import appScreen from "../assets/images/product.png";
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from "react";

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

export const ProductShowcase = () => {
  const appImage = useRef<HTMLImageElement>(null);
  const { scrollYProgress } = useScroll({
    target: appImage,
    offset: ["start end", "end end"],
  });

  const rotateX = useTransform(scrollYProgress, [0, 1], [15, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.3, 1]);

  return (
    <div className="bg-black text-white bg-gradient-to-b from-black to-[#ff600a] py-[72px] sm:py-24">
      <div className="container">
        
        {/* Header with Montserrat Alternates */}
        <h2 className={`text-center mt-96 md:mt-12 text-5xl font-bold tracking-tighter ${montserratAlternates.className}`}>
          ИНТУИТИВЕН ИНТЕРФЕЙС
        </h2>

        <div className="max-w-xl mx-auto">
          {/* Paragraph with Montserrat */}
          <p className={`text-xl text-white/70 text-center mt-5 ${montserrat.className}`}>
            SMS Assistant позволява на всеки, независимо от техническите умения, бързо и лесно да настройва и управлява своите SMS известия.
          </p>
        </div>

        <div className="flex justify-center">
          <motion.div
            style={{
              opacity: opacity,
              rotateX: rotateX,
              transformPerspective: "800px",
            }}
          >
            <Image
              src={appScreen}
              ref={appImage}
              alt="app screen"
              className="mt-14"
            />
          </motion.div>
        </div>

      </div>
    </div>
  );
};
