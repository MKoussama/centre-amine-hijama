import { useState, useEffect } from 'react';
import { Language } from './lib/types';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { SectionFemmes } from './components/SectionFemmes';
import { Services } from './components/Services';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingButtons } from './components/FloatingButtons';

function App() {
  const [language, setLanguage] = useState<Language>('fr');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage) {
      setLanguage(savedLanguage);
    } else {
      const browserLang = navigator.language.toLowerCase();
      if (browserLang.startsWith('ar')) {
        setLanguage('ar');
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('language', language);
    
    if (language === 'ar') {
      document.documentElement.setAttribute('dir', 'rtl');
      document.documentElement.setAttribute('lang', 'ar');
    } else {
      document.documentElement.setAttribute('dir', 'ltr');
      document.documentElement.setAttribute('lang', 'fr');
    }
  }, [language]);

  return (
    <div className="min-h-screen">
      <Header language={language} setLanguage={setLanguage} />
      <Hero language={language} />
      <SectionFemmes language={language} />
      <Services language={language} />
      <WhyChooseUs language={language} />
      <Contact language={language} />
      <Footer language={language} />
      <FloatingButtons />
    </div>
  );
}

export default App;
