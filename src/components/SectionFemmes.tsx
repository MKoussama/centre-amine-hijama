import React from 'react';
import { Language } from '../lib/types';
import { translations } from '../lib/translations';

interface SectionFemmesProps {
  language: Language;
}

export const SectionFemmes: React.FC<SectionFemmesProps> = ({ language }) => {
  const t = translations[language];

  return (
    <section id="women" className="py-16 lg:py-24 bg-gradient-to-br from-pink-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <div className="relative w-32 h-32 mx-auto mb-6">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full opacity-20 animate-pulse"></div>
            <div className="relative w-full h-full bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center">
              <img
                src="/images/femmes.png"
                alt="Section Femmes"
                className="w-20 h-20 object-contain"
              />
            </div>
          </div>

          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
            {t.women.title}
          </h2>
          <h3 className="text-2xl lg:text-3xl font-bold text-purple-600 mb-6">
            {t.women.subtitle}
          </h3>

          <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
            {t.women.description}
          </p>
        </div>
      </div>
    </section>
  );
};
