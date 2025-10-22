import React from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle, Instagram } from 'lucide-react';
import { Language } from '../lib/types';
import { translations, socialLinks } from '../lib/translations';
import { Card, CardContent } from './ui/Card';
import { Button } from './ui/Button';

interface ContactProps {
  language: Language;
}

export const Contact: React.FC<ContactProps> = ({ language }) => {
  const t = translations[language];

  return (
    <section id="contact" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-12 ${language === 'ar' ? 'text-right' : 'text-left'} lg:text-center`}>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
            {t.contact.title}
          </h2>
          <h3 className="text-2xl lg:text-3xl font-bold text-green-600">
            {t.contact.subtitle}
          </h3>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <Card onClick={() => window.location.href = socialLinks.phone} className="cursor-pointer">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div className={`${language === 'ar' ? 'text-right' : 'text-left'}`}>
                    <p className="text-sm text-gray-600 font-semibold mb-1">
                      {t.contact.phone.label}
                    </p>
                    <p className="text-lg font-bold text-gray-900">
                      {t.contact.phone.value}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card onClick={() => window.open(socialLinks.email, '_blank')} className="cursor-pointer">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div className={`${language === 'ar' ? 'text-right' : 'text-left'} flex-1`}>
                    <p className="text-sm text-gray-600 font-semibold mb-1">
                      {t.contact.email.label}
                    </p>
                    <p className="text-sm lg:text-base font-bold text-gray-900 break-all">
                      {t.contact.email.value}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card onClick={() => window.open(socialLinks.maps, '_blank')} className="cursor-pointer">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div className={`${language === 'ar' ? 'text-right' : 'text-left'}`}>
                    <p className="text-sm text-gray-600 font-semibold mb-1">
                      {t.contact.address.label}
                    </p>
                    <p className="text-base font-bold text-gray-900">
                      {t.contact.address.value}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div className={`${language === 'ar' ? 'text-right' : 'text-left'}`}>
                    <p className="text-sm text-gray-600 font-semibold mb-1">
                      {t.contact.hours.label}
                    </p>
                    <p className="text-base font-bold text-gray-900">
                      {t.contact.hours.value}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex gap-4">
              <a href={socialLinks.whatsapp} target="_blank" rel="noopener noreferrer" className="flex-1">
                <Button variant="default" className="w-full flex items-center justify-center gap-2">
                  <MessageCircle className="w-5 h-5" />
                  {t.contact.whatsappButton}
                </Button>
              </a>
              <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="flex-1">
                <Button variant="outline" className="w-full flex items-center justify-center gap-2">
                  <Instagram className="w-5 h-5" />
                  {t.contact.instagramButton}
                </Button>
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <Card>
              <CardContent className="p-0">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3324.5487229898926!2d-7.6478!3d33.5829!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7d2d12345678%3A0x1234567890abcdef!2sCentre%20amine%20hijama!5e0!3m2!1sfr!2sma!4v1234567890"
                  width="100%"
                  height="400"
                  style={{ border: 0, borderRadius: '0.75rem' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Maps"
                ></iframe>
              </CardContent>
            </Card>

            <a href={socialLinks.maps} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="w-full flex items-center justify-center gap-2">
                <MapPin className="w-5 h-5" />
                {t.contact.mapsButton}
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
