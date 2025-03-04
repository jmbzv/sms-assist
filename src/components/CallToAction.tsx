'use client'; // Ensure this is added for client-side rendering

import { useState } from 'react';
import { Montserrat_Alternates, Montserrat } from 'next/font/google'; // Import both fonts
import HelixImage from '../assets/images/helix2.png';
import EmojiImage from '../assets/images/emojistar.png';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

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

export const CallToAction = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      // 1. Try to store email (if it doesn't exist)
      await fetch('/api/store-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      // 2. Trigger file download
      const link = document.createElement('a');
      link.href = '/downloads/sms-assist-plugin.zip'; // Updated path
      link.download = 'sms-assist-plugin.zip';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // 3. Clear form
      setEmail('');
      
    } catch (err) {
      setError('Грешка при изтеглянето. Моля опитайте отново.');
      console.error('Error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div 
      id="footer-section" 
      className="bg-black text-white py-[72px] sm:py-24" 
      ref={containerRef}
    >
      <div className="container max-w-xl relative">
        <motion.div style={{ translateY }}>
          <Image src={HelixImage} alt="helix" className="absolute top-6 left-[calc(100%+36px)]" />
        </motion.div>
        <motion.div style={{ translateY }}>
          <Image src={EmojiImage} alt="emoji" className="absolute -top-[120px] right-[calc(100%+30px)]" />
        </motion.div>

        {/* Title with Montserrat Alternates font */}
        <h2 className={`font-bold text-5xl sm:text-6xl tracking-tighter ${montserratAlternates.className}`}>
          НЕЗАБАВЕН ДОСТЪП
        </h2>

        {/* Body text with Montserrat font */}
        <p className={`text-xl text-white/70 mt-5 ${montserrat.className}`}>
          Въведете вашият имейл и ще получите веднага плъгинът с инструкции за инсталиране и интеграция.
        </p>

        <form onSubmit={handleSubmit} className="mt-10 flex flex-col gap-2.5 max-w-sm mx-auto sm:flex-row">
          <input 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email@gmail.com" 
            className="h-12 bg-white/20 rounded-lg px-5 font-medium placeholder:text-[#9CA3AF] sm:flex-1"
            required
          />
          <button 
            type="submit"
            disabled={isLoading}
            className={`
              bg-white text-black py-3 !font-bold px-5 rounded-lg 
              font-black text-center mb-24 text-l tracking-tighter
              transition-all duration-300
              ${isLoading ? 'opacity-70 cursor-not-allowed' : 'hover:bg-orange-500 hover:text-white'}
              ${montserratAlternates.className}
            `}
          >
            {isLoading ? 'Изчакайте...' : 'продължи'}
          </button>
        </form>

        {error && (
          <p className="text-red-500 text-center mt-2">{error}</p>
        )}
      </div>
    </div>
  );
};
