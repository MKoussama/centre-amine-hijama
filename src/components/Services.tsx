import React from 'react';
import { Language } from '../lib/types';
import { translations, socialLinks } from '../lib/translations';
import { Card, CardHeader, CardContent, CardFooter } from './ui/Card';
import { Button } from './ui/Button';

interface ServicesProps {
  language: Language;
}

export const Services: React.FC<ServicesProps> = ({ language }) => {
  const t = translations[language];

  const services = [
    {
      icon: '/images/icon-back.png',
      title: t.services.service1.title,
      packs: t.services.service1.packs,
    },
    {
      icon: '/images/icon-legs.png',
      title: t.services.service2.title,
      packs: t.services.service2.packs,
    },
    {
      icon: '/images/icon-colon.png',
      title: t.services.service3.title,
      packs: t.services.service3.packs,
    },
    {
      icon: '/images/icon-head.png',
      title: t.services.service4.title,
      packs: t.services.service4.packs,
    },
    {
      icon: '/images/icon-massage.png',
      title: t.services.service5.title,
      packs: t.services.service5.packs,
    },
  ];

  return (
    <section id="services" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-12 ${language === 'ar' ? 'text-right' : 'text-left'} lg:text-center`}>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
            {t.services.title}
          </h2>
          <h3 className="text-2xl lg:text-3xl font-bold text-teal-600 mb-4">
            {t.services.subtitle}
          </h3>
          <p className="text-lg lg:text-xl text-gray-600">
            {t.services.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-2xl">
              <CardHeader>
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-teal-100 to-cyan-100 rounded-full flex items-center justify-center">
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 text-center mb-4">
                  {service.title}
                </h3>
              </CardHeader>

              <CardContent>
                <div className="space-y-3">
                  {service.packs.map((pack: any, packIndex: number) => (
                    <div
                      key={packIndex}
                      className="p-3 bg-teal-50 rounded-lg border border-teal-100"
                    >
                      <p className={`text-sm text-gray-700 font-medium mb-1 ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                        {pack.name}
                      </p>
                      <p className="text-lg font-bold text-teal-600">{pack.price}</p>
                    </div>
                  ))}
                </div>
              </CardContent>

              <CardFooter>
                <a href={socialLinks.whatsapp} target="_blank" rel="noopener noreferrer" className="w-full">
                  <Button variant="default" className="w-full">
                    {t.services.bookButton}
                  </Button>
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
