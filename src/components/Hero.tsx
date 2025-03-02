'use client'; // Ensure this is added for client-side rendering

import React, { useState, useEffect } from 'react'; // Add this import
import { Montserrat_Alternates } from 'next/font/google'; // Import the Google Font
import CursorImage from "../assets/images/cursor.png";
import ArrowIcon from "../assets/icons/arrow-w.svg";
import MessageImage from "../assets/images/message.png";
import LogoMain from "../assets/images/logo-main.png";
import Image from "next/image"; // Ensure this import is present
import { motion } from "framer-motion";
import { AnimatedGradientTextDemo } from "./animatedtext";
import { RoughNotation } from "react-rough-notation"; // Use the React wrapper

// Initialize Montserrat Alternates font
const montserratAlternates = Montserrat_Alternates({
  weight: '400', // Default weight
  subsets: ['latin'], // You can add other subsets like 'cyrillic' if needed
  display: 'swap', // Improves font loading
});

export const Hero = () => {
  // Scroll effect state
  const [scrollY, setScrollY] = useState(0);

  // Listen for scroll events
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY); // Update scroll position
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="bg-black text-white bg-[linear-gradient(to_bottom,#000,#2B1208_34%,#803508_65%,#FF9054_82%)] py-[72px] sm:py-24 relative overflow-clip">
      <div className="flex justify-center mt-8 mb-[30px]">
        <div className="inline-flex relative">
          {/* Replace text with the logo */}
          <Image
            src={LogoMain}
            alt="SMS Assist Logo"
            width={200}
            height={100}
            className="inline-flex"
            draggable="false"
          />
        </div>
      </div>
      <div className="absolute h-[375px] w-[750px] sm:w-[1536px] sm:h-[768px] lg:w-[2400px] llg:h-[800px] rounded-[100%] bg-black left-1/2 -translate-x-1/2 border border-[#FF9054] bg-[radial-gradient(closest-side,#000_82%,#FF600A)] top-[calc(100%-96px)] sm:top-[calc(100%-120px)]"></div>
      <div className="container relative">
        <div className="flex items-center justify-center mb-[30px]">
          <AnimatedGradientTextDemo />
        </div>
        <div className="flex justify-center">
          <p className={`text-center !font-bold text-5xl sm:text-7xl tracking-tighter animate-pull-up ${montserratAlternates.className} text-white`}>
            <RoughNotation
              type="underline"
              show={true} // Automatically shows the animation
              color="rgba(255, 96, 10, 0.8)" // Set the underline color
              animationDuration={1500} // Animation duration in milliseconds
              animationDelay={1000}
              strokeWidth={6} // Thickness of the underline
            >
              <span className="inline-block text-8xl sm:text-7xl !font-black">#1</span>
            </RoughNotation>{" "}
            решение за бърза и ефективна комуникация с вашите клиенти
          </p>
        </div>
        <div className="flex justify-center mt-8">
          <button className={`bg-white text-black py-3 !font-bold px-5 rounded-lg font-black font- text-center mb-24 text-l tracking-tighter ${montserratAlternates.className}`}>
            ИНТЕГРИРАЙ ДНЕС
          </button>
        </div>
      </div>
    </div>
  );
};
