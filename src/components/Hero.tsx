import React from 'react';
import { Star, Phone, Instagram, Facebook, MessageCircle } from 'lucide-react';
import { Language } from '../lib/types';
import { translations, socialLinks } from '../lib/translations';
import { Button } from './ui/Button';
import { Badge } from './ui/Badge';

interface HeroProps {
  language: Language;
}

export const Hero: React.FC<HeroProps> = ({ language }) => {
  const t = translations[language];

  return (
    <section id="hero" className="pt-24 pb-16 lg:pt-32 lg:pb-24 bg-gradient-to-br from-teal-50 via-cyan-50 to-teal-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className={`${language === 'ar' ? 'text-right' : 'text-left'}`}>
            <Badge className="mb-6">
              <Star className="w-4 h-4" fill="currentColor" />
              {t.hero.badge}
            </Badge>

            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              {t.hero.title}
            </h1>
            <h2 className="text-3xl lg:text-4xl font-bold text-teal-600 mb-6">
              {t.hero.subtitle}
            </h2>

            <p className="text-lg lg:text-xl text-gray-700 mb-8 leading-relaxed">
              {t.hero.description}
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <a href={socialLinks.whatsapp} target="_blank" rel="noopener noreferrer">
                <Button variant="default">
                  {t.hero.bookButton}
                </Button>
              </a>
              <a href={socialLinks.phone}>
                <Button variant="outline">
                  {t.hero.callButton}
                </Button>
              </a>
            </div>

            <div className="flex items-center gap-6">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-teal-600" />
                <a href={socialLinks.phone} className="text-gray-700 font-semibold hover:text-teal-600 transition-colors">
                  0695933607
                </a>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href={socialLinks.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-600 hover:scale-110 transition-transform"
                >
                  <MessageCircle className="w-6 h-6" />
                </a>
                <a
                  href={socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-600 hover:scale-110 transition-transform"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a
                  href={socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:scale-110 transition-transform"
                >
                  <Facebook className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="/images/hero-image.jpg"
              alt="Centre Amine Hijama"
              className="w-full h-auto rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
