'use client'; // Ensure this is added for client-side rendering

import { Montserrat_Alternates, Montserrat } from 'next/font/google'; // Import both fonts
import InstaIcon from '../assets/icons/insta.svg'
import XIcon from '../assets/icons/x-social.svg'
import LinkedInIcon from '../assets/icons/linkedin.svg'
import YoutubeIcon from '../assets/icons/youtube.svg'

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

export const Footer = () => {
  return (
    <footer className="py-5 bg-black text-white/60 border-t border-white/20">
      <div className="container">
        <div className="flex flex-col gap-5 sm:flex-row sm:justify-between">
          <div className={`text-center ${montserrat.className}`}>
            SMS Assist 2024 Разработен от А. Джамбазов
          </div>
        </div>
      </div>
    </footer>
  );
};
