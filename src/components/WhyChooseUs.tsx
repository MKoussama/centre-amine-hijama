import React from 'react';
import { Award, Shield, Sparkles, Heart, Clock, Users } from 'lucide-react';
import { Language } from '../lib/types';
import { translations } from '../lib/translations';
import { Card, CardContent } from './ui/Card';

interface WhyChooseUsProps {
  language: Language;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ language }) => {
  const t = translations[language];

  const features = [
    {
      icon: Award,
      gradient: 'from-green-400 to-emerald-500',
      title: t.why.features[0].title,
      description: t.why.features[0].description,
    },
    {
      icon: Shield,
      gradient: 'from-blue-400 to-cyan-500',
      title: t.why.features[1].title,
      description: t.why.features[1].description,
    },
    {
      icon: Sparkles,
      gradient: 'from-violet-400 to-pink-500',
      title: t.why.features[2].title,
      description: t.why.features[2].description,
    },
    {
      icon: Heart,
      gradient: 'from-orange-400 to-red-500',
      title: t.why.features[3].title,
      description: t.why.features[3].description,
    },
    {
      icon: Clock,
      gradient: 'from-green-400 to-teal-500',
      title: t.why.features[4].title,
      description: t.why.features[4].description,
    },
    {
      icon: Users,
      gradient: 'from-indigo-400 to-violet-500',
      title: t.why.features[5].title,
      description: t.why.features[5].description,
    },
  ];

  return (
    <section id="why" className="py-16 lg:py-24 bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-12 ${language === 'ar' ? 'text-right' : 'text-left'} lg:text-center`}>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
            {t.why.title}
          </h2>
          <h3 className="text-2xl lg:text-3xl font-bold text-green-600">
            {t.why.subtitle}
          </h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="hover:shadow-2xl">
                <CardContent className="pt-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white shadow-lg flex items-center justify-center">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${feature.gradient} flex items-center justify-center`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className={`text-gray-600 leading-relaxed ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
