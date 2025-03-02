'use client'; // Ensure this is added for client-side rendering

import { useState } from "react";
import PlusIcon from "../assets/icons/plus.svg";
import MinusIcon from "../assets/icons/minus.svg";
import clsx from "clsx";
import { motion, AnimatePresence } from 'framer-motion';
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

const items = [
  {
    question: "Как ще се обработват данните от сайта ми?",
    answer:
      "Вашите данни се обработват сигурно чрез API на Twilio. Всички изпратени SMS съобщения преминават през защитена връзка, а чувствителната информация, като ключове и номера, не се съхранява извън настройките на плъгина.",
  },
  {
    question: "Мога ли да персонализирам текста на съобщенията?",
    answer:
      "Да, можете лесно да персонализирате текста на съобщенията директно от настройките на плъгина. Просто попълнете желаните текстове в съответните полета.",
  },
  {
    question: "Съвместим ли е плъгинът с други WooCommerce добавки?",
    answer:
      "Да, плъгинът е съвместим с повечето WooCommerce добавки. Ако все пак срещнете проблеми, моля, свържете се с поддръжката за съдействие.",
  },
  {
    question: "Колко струва?",
    answer:
      "От наша страна plugin-ът е 100% безплатен. Ще платите само минимална сума за изпращане на СМС, която е приблизително 2ст. за СМС",
  },
];

const AccordinationItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="py-7 border-b border-white/30" onClick={() => setIsOpen(!isOpen)}>
      <div className="flex items-center">
        <span className={`flex-1 text-lg font-bold ${montserrat.className}`}>{question}</span>
        {isOpen ? <MinusIcon /> : <PlusIcon />}
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, marginTop: 0 }}
            animate={{ opacity: 1, height: "auto", marginTop: '16px' }}
            exit={{ opacity: 0, height: 0, marginTop: 0 }}
          >
            <p className={`${montserrat.className}`}>{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const FAQs = () => {
  return (
    <div className="bg-black text-white py-[72px] sm:py-24 bg-gradient-to-b from-[#ff600a] to-black">
      <div className="container">
        <h2 className={`text-center mt-36 sm:mt-4 text-5xl font-bold tracking-tighter uppercase ${montserratAlternates.className}`}>
          ЧЕСТО ЗАДАВАНИ ВЪПРОСИ
        </h2>
        <div className="mt-12 max-w-[648px] mx-auto">
          {items.map(({ question, answer }) => (
            <AccordinationItem question={question} answer={answer} key={question} />
          ))}
        </div>
      </div>
    </div>
  );
};
