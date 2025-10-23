import React from 'react';
import { Droplet, MessageCircle, Instagram, Facebook, Phone } from 'lucide-react';
import { Language } from '../lib/types';
import { translations, socialLinks } from '../lib/translations';
import { Button } from './ui/Button';

interface FooterProps {
  language: Language;
}

export const Footer: React.FC<FooterProps> = ({ language }) => {
  const t = translations[language];

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div className={`${language === 'ar' ? 'text-right' : 'text-left'}`}>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
                <Droplet className="w-5 h-5 text-white" fill="white" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Centre Amine Hijama</h3>
                <p className="text-sm text-gray-400">مركز أمين للحجامة</p>
              </div>
            </div>
            <p className="text-sm text-gray-400 mt-4">{t.footer.tagline}</p>
          </div>

          <div className="flex items-center justify-center gap-6">
            <a
              href={socialLinks.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
            >
              <MessageCircle className="w-6 h-6 text-white" />
            </a>
            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
            >
              <Instagram className="w-6 h-6 text-white" />
            </a>
            <a
              href={socialLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
            >
              <Facebook className="w-6 h-6 text-white" />
            </a>
            <a
              href={socialLinks.phone}
              className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
            >
              <Phone className="w-6 h-6 text-white" />
            </a>
          </div>

          <div className="flex justify-center md:justify-end">
            <a href={socialLinks.whatsapp} target="_blank" rel="noopener noreferrer">
              <Button variant="default" className="bg-teal-600 hover:bg-teal-700">
                {t.footer.bookButton}
              </Button>
            </a>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="text-sm text-gray-400">{t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
};
