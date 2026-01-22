
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Mail, Phone, MapPin, Globe } from 'lucide-react';
import { NAVIGATION_LINKS, COMPANY_NAME, EMAIL, PHONE, ADDRESS, FULL_LEGAL_NAME } from '../constants';
import { useLanguage } from '../LanguageContext';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { lang, setLang, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 rainbow-bg rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">M</span>
          </div>
          <span className={`text-2xl font-extrabold tracking-tight ${isScrolled ? 'text-gray-900' : 'text-gray-900 md:text-white'}`}>
            {COMPANY_NAME}
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {NAVIGATION_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition-colors hover:rainbow-text ${
                location.pathname === link.path 
                  ? 'rainbow-text border-b-2 border-orange-500' 
                  : (isScrolled ? 'text-gray-700' : 'text-gray-700 md:text-white/90')
              }`}
            >
              {t(link.name)}
            </Link>
          ))}
          
          <div className="flex items-center space-x-2 border-l border-gray-300 pl-6 ml-4">
            <button 
              onClick={() => setLang('tr')} 
              className={`text-xs font-bold px-2 py-1 rounded transition-colors ${lang === 'tr' ? 'rainbow-bg text-white' : (isScrolled ? 'text-gray-500 hover:text-gray-900' : 'text-white/60 hover:text-white')}`}
            >
              TR
            </button>
            <button 
              onClick={() => setLang('en')} 
              className={`text-xs font-bold px-2 py-1 rounded transition-colors ${lang === 'en' ? 'rainbow-bg text-white' : (isScrolled ? 'text-gray-500 hover:text-gray-900' : 'text-white/60 hover:text-white')}`}
            >
              EN
            </button>
          </div>
        </nav>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className={`md:hidden ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-xl py-6 md:hidden">
          <nav className="flex flex-col items-center space-y-4">
            {NAVIGATION_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`text-lg font-medium ${location.pathname === link.path ? 'rainbow-text' : 'text-gray-800'}`}
              >
                {t(link.name)}
              </Link>
            ))}
            <div className="flex space-x-4 pt-4 border-t border-gray-100 w-full justify-center">
              <button onClick={() => { setLang('tr'); setIsOpen(false); }} className={`px-4 py-2 rounded-lg font-bold ${lang === 'tr' ? 'rainbow-bg text-white' : 'bg-gray-100 text-gray-600'}`}>TR</button>
              <button onClick={() => { setLang('en'); setIsOpen(false); }} className={`px-4 py-2 rounded-lg font-bold ${lang === 'en' ? 'rainbow-bg text-white' : 'bg-gray-100 text-gray-600'}`}>EN</button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

const Footer: React.FC = () => {
  const { t } = useLanguage();
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 rainbow-bg rounded-md flex items-center justify-center">
                <span className="text-white font-bold text-sm">M</span>
              </div>
              <span className="text-xl font-bold tracking-tight">{COMPANY_NAME}</span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              {t({
                en: "Leading the industry in opto-electronic innovation and high-quality LED lighting solutions from the heart of Istanbul.",
                tr: "İstanbul'un kalbinden opto-elektronik inovasyon ve yüksek kaliteli LED aydınlatma çözümlerinde sektöre liderlik ediyoruz."
              })}
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors cursor-pointer"><Globe size={16} /></div>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-gray-900">{t({ en: "Quick Links", tr: "Hızlı Bağlantılar" })}</h4>
            <ul className="space-y-4">
              {NAVIGATION_LINKS.map(link => (
                <li key={link.path}>
                  <Link to={link.path} className="text-gray-600 hover:rainbow-text transition-colors text-sm">{t(link.name)}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-gray-900">{t({ en: "Our Solutions", tr: "Çözümlerimiz" })}</h4>
            <ul className="space-y-4">
              <li><Link to="/products" className="text-gray-600 hover:rainbow-text transition-colors text-sm">{t({ en: "Industrial LED Lighting", tr: "Endüstriyel LED Aydınlatma" })}</Link></li>
              <li><Link to="/products" className="text-gray-600 hover:rainbow-text transition-colors text-sm">{t({ en: "Electronic Components", tr: "Elektronik Bileşenler" })}</Link></li>
              <li><Link to="/products" className="text-gray-600 hover:rainbow-text transition-colors text-sm">{t({ en: "OEM Manufacturing", tr: "OEM Üretimi" })}</Link></li>
              <li><Link to="/products" className="text-gray-600 hover:rainbow-text transition-colors text-sm">{t({ en: "Bespoke R&D", tr: "Özel Tasarım Ar-Ge" })}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-gray-900">{t({ en: "Contact Details", tr: "İletişim Bilgileri" })}</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-sm text-gray-600">
                <MapPin size={18} className="text-gray-400 mt-0.5 flex-shrink-0" />
                <span>{ADDRESS}</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-gray-600">
                <Phone size={18} className="text-gray-400 flex-shrink-0" />
                <span>{PHONE}</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-gray-600">
                <Mail size={18} className="text-gray-400 flex-shrink-0" />
                <span>{EMAIL}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:row justify-between items-center text-xs text-gray-500 space-y-4 md:space-y-0">
          <p>© {new Date().getFullYear()} {FULL_LEGAL_NAME}. {t({ en: "All rights reserved.", tr: "Tüm hakları saklıdır." })}</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-gray-900">{t({ en: "Privacy Policy", tr: "Gizlilik Politikası" })}</a>
            <a href="#" className="hover:text-gray-900">{t({ en: "Terms of Service", tr: "Hizmet Şartları" })}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-0">
        {children}
      </main>
      <Footer />
    </div>
  );
};
