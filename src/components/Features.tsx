'use client'; // Ensure this is added for client-side rendering

import { Montserrat_Alternates } from 'next/font/google'; // Import the Montserrat Alternates font
import Bentodemo from './bentogrid';

// Initialize Montserrat Alternates font
const montserratAlternates = Montserrat_Alternates({
  weight: '400', // Default weight
  subsets: ['latin'], // You can add other subsets like 'cyrillic' if needed
  display: 'swap', // Improves font loading
});

export const Features = () => {
  return (
    <div className="bg-black text-white py-[72px] sm:py-24 relative">
      <div className="container relative">
        
        {/* Heading and Paragraph inside a container with rounded corners and white border */}
        <div className="relative flex-1 border-white/30 rounded-xl mx-auto max-w-7xl">
          {/* Header text with Montserrat Alternates font */}
          <h2 className={`text-center text-4xl sm:text-5xl mt-36 mb-96 pb-32 !font-black sm:mt-48 sm:-mb-[10rem] sm:-pb-4 ${montserratAlternates.className}`}>
            ВСИЧКО ОТ КОЕТО ИМАТЕ НУЖДА
          </h2>
        </div>

        {/* Reduced gap between the heading and Bentodemo */}
        <div className="flex flex-col items-center justify-center pb-24 sm:flex-row gap-2">
          <Bentodemo />
        </div>

      </div>
    </div>
  );
};
