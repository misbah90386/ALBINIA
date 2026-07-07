import { useState, useEffect } from 'react';
import { Scissors, Moon, Sun, Globe, Menu, X, Calendar } from 'lucide-react';

interface NavbarProps {
  isDarkMode: boolean;
  setIsDarkMode: (val: boolean) => void;
  language: 'en' | 'ar';
  setLanguage: (val: 'en' | 'ar') => void;
  scrollToSection: (id: string) => void;
}

export default function Navbar({
  isDarkMode,
  setIsDarkMode,
  language,
  setLanguage,
  scrollToSection,
}: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'about', label: 'About', arabicLabel: 'من نحن' },
    { id: 'services', label: 'Services', arabicLabel: 'خدماتنا' },
    { id: 'why-choose-us', label: 'Why Us', arabicLabel: 'لماذا نحن' },
    { id: 'gallery', label: 'Gallery', arabicLabel: 'المعرض' },
    { id: 'reviews', label: 'Reviews', arabicLabel: 'التقييمات' },
    { id: 'booking', label: 'Book Now', arabicLabel: 'احجز الآن' },
    { id: 'faq', label: 'FAQ', arabicLabel: 'الأسئلة الشائعة' },
    { id: 'contact', label: 'Contact', arabicLabel: 'اتصل بنا' },
  ];

  const handleLinkClick = (id: string) => {
    setIsOpen(false);
    scrollToSection(id);
  };

  return (
    <nav
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? isDarkMode
            ? 'bg-charcoal-950/90 border-b border-white/5 backdrop-blur-md'
            : 'bg-white/95 shadow-xs border-b border-charcoal-200 backdrop-blur-md'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div
            id="navbar-logo"
            className="flex items-center space-x-3 cursor-pointer group"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="w-10 h-10 border border-gold-500/50 rounded-full flex items-center justify-center text-gold-500 group-hover:scale-105 transition-transform duration-300">
              <Scissors className="h-4 w-4" />
            </div>
            <div className={`flex flex-col ${language === 'ar' ? 'items-end' : 'items-start'}`}>
              <span className="font-heading font-bold text-base tracking-[0.15em] text-white">
                ALBINIA
              </span>
              <span
                className={`text-[8px] uppercase tracking-[0.2em] font-medium ${
                  isDarkMode ? 'text-gold-500' : 'text-gold-600'
                }`}
              >
                {language === 'en' ? "Men's & Kids Salon" : 'صالون الرجال والأطفال'}
              </span>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <div id="desktop-nav" className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                id={`nav-link-${link.id}`}
                onClick={() => handleLinkClick(link.id)}
                className={`text-[10px] uppercase tracking-[0.2em] font-medium transition-all duration-200 cursor-pointer ${
                  isDarkMode
                    ? 'text-charcoal-300 hover:text-white'
                    : 'text-charcoal-700 hover:text-black'
                }`}
              >
                {language === 'en' ? link.label : link.arabicLabel}
              </button>
            ))}
          </div>

          {/* Controls & Actions */}
          <div id="navbar-controls" className="hidden lg:flex items-center space-x-4">
            {/* Language Toggle */}
            <button
              id="lang-toggle-desktop"
              onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
              className={`p-2 rounded-full transition-all border ${
                isDarkMode
                  ? 'border-white/10 text-charcoal-200 hover:border-gold-500/30'
                  : 'border-charcoal-200 text-charcoal-800 hover:border-gold-500/30'
              } flex items-center space-x-1 hover:scale-105 duration-200`}
              title={language === 'en' ? 'Switch to Arabic' : 'تحويل للغة الإنجليزية'}
            >
              <Globe className="h-3.5 w-3.5" />
              <span className="text-[10px] font-bold">{language === 'en' ? 'عربي' : 'EN'}</span>
            </button>

            {/* Dark Mode Toggle */}
            <button
              id="theme-toggle-desktop"
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`p-2 rounded-full transition-all border ${
                isDarkMode
                  ? 'border-white/10 text-gold-400 hover:border-gold-500/30'
                  : 'border-charcoal-200 text-charcoal-700 hover:border-gold-500/30'
              } hover:scale-105 duration-200`}
              title={isDarkMode ? 'Light Mode' : 'Dark Mode'}
            >
              {isDarkMode ? <Sun className="h-3.5 w-3.5" /> : <Moon className="h-3.5 w-3.5" />}
            </button>

            {/* Quick Book Button */}
            <button
              id="nav-book-button"
              onClick={() => handleLinkClick('booking')}
              className="bg-gold-500 text-charcoal-950 font-bold px-6 py-2.5 text-xs uppercase tracking-[0.1em] hover:bg-gold-600 transition-all duration-300 flex items-center space-x-2 cursor-pointer rounded-none"
            >
              <Calendar className="h-3.5 w-3.5 text-charcoal-950" />
              <span>{language === 'en' ? 'Book Appointment' : 'حجز موعد'}</span>
            </button>
          </div>

          {/* Mobile menu and controls toggle */}
          <div id="mobile-menu-controls" className="flex lg:hidden items-center space-x-2">
            {/* Language Toggle Mobile */}
            <button
              id="lang-toggle-mobile"
              onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
              className={`p-1.5 rounded-full border text-xs font-bold ${
                isDarkMode ? 'border-charcoal-800 text-charcoal-100' : 'border-charcoal-200 text-charcoal-800'
              } flex items-center`}
            >
              <Globe className="h-4 w-4 mr-0.5" />
              <span>{language === 'en' ? 'عربي' : 'EN'}</span>
            </button>

            {/* Dark Mode Toggle Mobile */}
            <button
              id="theme-toggle-mobile"
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`p-1.5 rounded-full border ${
                isDarkMode ? 'border-charcoal-800 text-gold-400' : 'border-charcoal-200 text-charcoal-800'
              }`}
            >
              {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              id="mobile-hamburger"
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg ${
                isDarkMode ? 'text-charcoal-100 hover:bg-charcoal-800' : 'text-charcoal-800 hover:bg-charcoal-100'
              }`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        id="mobile-drawer"
        className={`lg:hidden fixed inset-x-0 top-20 z-45 transition-all duration-300 ${
          isOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-4 invisible'
        }`}
      >
        <div
          className={`px-4 pt-4 pb-6 space-y-3 shadow-2xl border-b border-gold-500/10 ${
            isDarkMode ? 'bg-charcoal-950 text-charcoal-100' : 'bg-white text-charcoal-900'
          }`}
        >
          {navLinks.map((link) => (
            <button
              key={link.id}
              id={`nav-link-mobile-${link.id}`}
              onClick={() => handleLinkClick(link.id)}
              className={`block w-full text-left px-3 py-2 rounded-md text-base font-semibold transition-colors ${
                isDarkMode ? 'hover:bg-charcoal-800 hover:text-gold-400' : 'hover:bg-charcoal-100 hover:text-gold-600'
              }`}
            >
              {language === 'en' ? link.label : link.arabicLabel}
            </button>
          ))}
          <div className="pt-4 border-t border-gold-500/10">
            <button
              id="nav-book-button-mobile"
              onClick={() => handleLinkClick('booking')}
              className="w-full bg-gold-500 text-charcoal-950 font-bold py-3 px-4 rounded-none uppercase tracking-widest text-xs flex items-center justify-center space-x-2"
            >
              <Calendar className="h-5 w-5" />
              <span>{language === 'en' ? 'Book Appointment' : 'احجز موعد كلاسيكي'}</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
