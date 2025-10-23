import React, { useState, useEffect } from 'react';
import { Droplet, Menu, X, Phone, Instagram, Facebook, MessageCircle } from 'lucide-react';
import { Language } from '../lib/types';
import { translations, socialLinks } from '../lib/translations';

interface HeaderProps {
  language: Language;
  setLanguage: (lang: Language) => void;
}

export const Header: React.FC<HeaderProps> = ({ language, setLanguage }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const t = translations[language];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ${
        isScrolled ? 'shadow-md' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollToSection('hero')}>
            <img 
              src="/images/logo.jpg" 
              alt="Centre Amine Hijama Logo" 
              className="w-12 h-12 object-contain"
            />
            <div className={`${language === 'ar' ? 'text-right' : 'text-left'}`}>
              <h1 className="text-lg font-bold text-gray-900">Centre Amine Hijama</h1>
              <p className="text-xs text-gray-600">مركز أمين للحجامة</p>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-gray-700 hover:text-teal-600 font-semibold transition-colors"
            >
              {t.nav.home}
            </button>
            <button
              onClick={() => scrollToSection('women')}
              className="text-gray-700 hover:text-teal-600 font-semibold transition-colors"
            >
              {t.nav.women}
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-teal-600 font-semibold transition-colors"
            >
              {t.nav.services}
            </button>
            <button
              onClick={() => scrollToSection('why')}
              className="text-gray-700 hover:text-teal-600 font-semibold transition-colors"
            >
              {t.nav.why}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-teal-600 font-semibold transition-colors"
            >
              {t.nav.contact}
            </button>
          </nav>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-3">
              <a
                href={socialLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-teal-600 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-pink-600 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href={socialLinks.phone}
                className="text-gray-600 hover:text-teal-600 transition-colors"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>

            <button
              onClick={() => setLanguage(language === 'fr' ? 'ar' : 'fr')}
              className="px-4 py-2 rounded-lg bg-teal-50 text-teal-600 font-semibold hover:bg-teal-100 transition-colors"
            >
              {language === 'fr' ? 'العربية' : 'Français'}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-gray-700"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <nav className="flex flex-col py-4">
            <button
              onClick={() => scrollToSection('hero')}
              className="px-6 py-3 text-left text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-colors"
            >
              {t.nav.home}
            </button>
            <button
              onClick={() => scrollToSection('women')}
              className="px-6 py-3 text-left text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-colors"
            >
              {t.nav.women}
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="px-6 py-3 text-left text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-colors"
            >
              {t.nav.services}
            </button>
            <button
              onClick={() => scrollToSection('why')}
              className="px-6 py-3 text-left text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-colors"
            >
              {t.nav.why}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-6 py-3 text-left text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-colors"
            >
              {t.nav.contact}
            </button>
            
            <div className="flex items-center gap-4 px-6 py-3 border-t border-gray-200 mt-2">
              <a
                href={socialLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-teal-600 transition-colors"
              >
                <MessageCircle className="w-6 h-6" />
              </a>
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-pink-600 transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href={socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href={socialLinks.phone}
                className="text-gray-600 hover:text-teal-600 transition-colors"
              >
                <Phone className="w-6 h-6" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
