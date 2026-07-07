import { useState, useEffect } from 'react';
import { ArrowUp, Calendar, MessageSquare } from 'lucide-react';

interface FloatingButtonsProps {
  language: 'en' | 'ar';
  scrollToSection: (id: string) => void;
}

export default function FloatingButtons({ language, scrollToSection }: FloatingButtonsProps) {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappUrl = `https://wa.me/966550168253?text=Hello%20Albinia%20Salon,%20I%20would%20like%20to%20inquire%20about%20your%20grooming%20services%20and%20book%20an%20appointment.`;

  return (
    <div id="floating-widgets-wrapper" className="fixed bottom-6 right-6 left-6 z-40 pointer-events-none flex justify-between items-end">
      
      {/* Left side: WhatsApp (always visible) */}
      <div id="floating-left-social" className="pointer-events-auto">
        <a
          id="floating-whatsapp"
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="flex items-center space-x-2 bg-green-500 text-white font-semibold p-3.5 sm:px-5 sm:py-3 rounded-none shadow-xl hover:bg-green-600 transition-all duration-300"
          title={language === 'en' ? 'Chat on WhatsApp' : 'راسلنا على واتساب'}
        >
          <MessageSquare className="h-5 w-5" />
          <span className="text-xs hidden sm:inline uppercase tracking-widest">{language === 'en' ? 'WhatsApp' : 'راسلنا'}</span>
        </a>
      </div>

      {/* Right side: Book now & back-to-top stack */}
      <div id="floating-right-stack" className="pointer-events-auto flex flex-col space-y-3 items-end">
        {/* Floating Book Trigger (hides once inside the booking fold) */}
        <button
          id="floating-book"
          onClick={() => scrollToSection('booking')}
          className="flex items-center space-x-2 bg-gold-500 text-charcoal-950 font-bold px-5 py-3 rounded-none shadow-xl hover:bg-gold-600 transition-all duration-300"
        >
          <Calendar className="h-5 w-5 text-charcoal-950" />
          <span className="text-xs uppercase tracking-widest">{language === 'en' ? 'Book Session' : 'حجز موعد'}</span>
        </button>

        {/* Back to Top */}
        <button
          id="floating-back-to-top"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className={`p-3 bg-charcoal-900 border border-white/10 text-gold-500 rounded-none shadow-xl hover:bg-charcoal-850 hover:text-white transition-all duration-300 ${
            showScroll ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-75 pointer-events-none'
          }`}
          title={language === 'en' ? 'Back to Top' : 'الرجوع للأعلى'}
        >
          <ArrowUp className="h-4 w-4" />
        </button>
      </div>

    </div>
  );
}
