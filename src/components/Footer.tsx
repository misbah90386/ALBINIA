import { useState } from 'react';
import { Scissors, MapPin, Phone, Clock, Facebook, Instagram, Twitter, ShieldCheck } from 'lucide-react';

interface FooterProps {
  language: 'en' | 'ar';
  isDarkMode: boolean;
  scrollToSection: (id: string) => void;
}

export default function Footer({ language, isDarkMode, scrollToSection }: FooterProps) {
  const [activeModal, setActiveModal] = useState<'privacy' | 'terms' | null>(null);

  const handleLinkClick = (id: string) => {
    scrollToSection(id);
  };

  const navLinks = [
    { id: 'about', label: 'About Us', ar: 'من نحن' },
    { id: 'services', label: 'Services', ar: 'خدماتنا' },
    { id: 'gallery', label: 'Gallery', ar: 'المعرض' },
    { id: 'reviews', label: 'Reviews', ar: 'التقييمات' },
    { id: 'contact', label: 'Contact', ar: 'اتصل بنا' }
  ];

  const quickServices = [
    { id: 'classic-haircut', label: 'Classic Haircut', ar: 'قص كلاسيكي' },
    { id: 'kids-haircut', label: 'Kids Haircut', ar: 'قص للأطفال' },
    { id: 'beard-trim', label: 'Beard Trim & Line', ar: 'تشذيب لحية' },
    { id: 'facial-treatment', label: 'Facial Treat & Spa', ar: 'علاج وتنظيف البشرة' },
    { id: 'pedicure', label: 'Luxury Pedicure', ar: 'باديكير فاخر' }
  ];

  return (
    <footer
      id="footer-section"
      className={`pt-20 pb-8 transition-colors duration-300 border-t ${
        isDarkMode
          ? 'bg-charcoal-950 text-white border-gold-500/10'
          : 'bg-charcoal-950 text-white border-gold-500/10' // Keep footer dark for premium aesthetic
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-charcoal-800">
          
          {/* Column 1: Brand Info */}
          <div id="footer-col-brand" className="space-y-6">
            <div
              className="flex items-center space-x-2 cursor-pointer group"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <div className="p-2.5 rounded-none bg-gold-500 text-charcoal-950 group-hover:scale-105 transition-transform duration-300">
                <Scissors className="h-5 w-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-semibold text-base tracking-[0.2em] text-white">
                  ALBINIA
                </span>
                <span className="text-[8px] uppercase tracking-[0.25em] font-medium text-charcoal-300">
                  {language === 'en' ? "Men's & Kids Salon" : 'صالون الرجال والأطفال'}
                </span>
              </div>
            </div>
            
            <p className="text-xs text-charcoal-400 leading-relaxed font-light">
              {language === 'en'
                ? 'High-end men’s and children’s salon located inside LuLu Hypermarket at Riyadh Avenue Mall. Dedicated to exceptional grooming in Riyadh.'
                : 'صالون راقٍ للرجال والأطفال يقع داخل لولو هايبر ماركت في الرياض أفينيو مول. ملتزمون بتقديم خدمات عناية استثنائية وبدقة متناهية.'}
            </p>

            {/* Social Icons */}
            <div className="flex space-x-3 pt-2">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="p-2 bg-transparent border border-white/5 rounded-none text-charcoal-400 hover:text-gold-500 hover:border-gold-500/20 transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="p-2 bg-transparent border border-white/5 rounded-none text-charcoal-400 hover:text-gold-500 hover:border-gold-500/20 transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="p-2 bg-transparent border border-white/5 rounded-none text-charcoal-400 hover:text-gold-500 hover:border-gold-500/20 transition-colors">
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div id="footer-col-nav" className="space-y-6">
            <h4 className="text-xs font-bold uppercase tracking-widest text-gold-500 font-heading">
              {language === 'en' ? 'Quick Navigation' : 'روابط سريعة'}
            </h4>
            <ul className="space-y-3 text-xs font-light">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleLinkClick(link.id)}
                    className="text-charcoal-400 hover:text-gold-400 transition-colors cursor-pointer"
                  >
                    {language === 'en' ? link.label : link.ar}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Featured Services */}
          <div id="footer-col-services" className="space-y-6">
            <h4 className="text-xs font-bold uppercase tracking-widest text-gold-500 font-heading">
              {language === 'en' ? 'Featured Services' : 'أبرز الخدمات'}
            </h4>
            <ul className="space-y-3 text-xs font-light">
              {quickServices.map((qs) => (
                <li key={qs.id}>
                  <button
                    onClick={() => handleLinkClick('services')}
                    className="text-charcoal-400 hover:text-gold-400 transition-colors text-left"
                  >
                    {language === 'en' ? qs.label : qs.ar}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Location & Hours */}
          <div id="footer-col-location" className="space-y-6">
            <h4 className="text-xs font-bold uppercase tracking-widest text-gold-500 font-heading">
              {language === 'en' ? 'Salon Location' : 'موقع الصالون'}
            </h4>
            <ul className="space-y-3.5 text-xs font-light">
              <li className="flex items-start space-x-2.5">
                <MapPin className="h-4 w-4 text-gold-500 shrink-0 mt-0.5" />
                <span className="text-charcoal-300">
                  {language === 'en'
                    ? 'Riyadh Avenue Mall, Al Murabba, Riyadh'
                    : 'الرياض أفينيو مول، حي المربع، الرياض'}
                </span>
              </li>
              <li className="flex items-center space-x-2.5">
                <Phone className="h-4 w-4 text-gold-500 shrink-0" />
                <a href="tel:0550168253" className="text-charcoal-300 hover:text-gold-400 transition-colors">
                  055 016 8253
                </a>
              </li>
              <li className="flex items-start space-x-2.5">
                <Clock className="h-4 w-4 text-gold-500 shrink-0 mt-0.5" />
                <span className="text-charcoal-300">
                  {language === 'en' ? '10:00 AM – 11:00 PM Daily' : 'يومياً 10:00 ص – 11:00 م'}
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Lower Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-charcoal-400 font-light">
          <div>
            <p>© {new Date().getFullYear()} Albinia Salon. All rights reserved.</p>
          </div>
          
          <div className="flex space-x-4">
            <button
              onClick={() => setActiveModal('privacy')}
              className="hover:text-gold-400 transition-colors cursor-pointer"
            >
              {language === 'en' ? 'Privacy Policy' : 'سياسة الخصوصية'}
            </button>
            <span className="text-charcoal-700">|</span>
            <button
              onClick={() => setActiveModal('terms')}
              className="hover:text-gold-400 transition-colors cursor-pointer"
            >
              {language === 'en' ? 'Terms & Conditions' : 'الشروط والأحكام'}
            </button>
          </div>
        </div>
      </div>

      {/* Privacy / Terms Modals */}
      {activeModal && (
        <div
          id="legal-modal-overlay"
          className="fixed inset-0 z-50 bg-charcoal-950/95 flex items-center justify-center p-4 text-white"
          onClick={() => setActiveModal(null)}
        >
          <div
            className="bg-charcoal-900 border border-white/10 rounded-none p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center space-x-2 text-gold-500 mb-4">
              <ShieldCheck className="h-5 w-5" />
              <h3 className="font-heading font-semibold text-base uppercase tracking-wider text-gold-500">
                {activeModal === 'privacy' 
                  ? (language === 'en' ? 'Privacy Policy' : 'سياسة الخصوصية') 
                  : (language === 'en' ? 'Terms & Conditions' : 'الشروط والأحكام')}
              </h3>
            </div>

            <div className="space-y-4 text-xs text-charcoal-300 leading-relaxed font-light pt-2">
              {activeModal === 'privacy' ? (
                <>
                  <p className="font-bold text-white text-[11px] uppercase tracking-wider">1. Introduction</p>
                  <p>Albinia Men's & Kids Salon ("we", "us", "our") respects your privacy. This Privacy Policy details how we protect your personal info, including name, phone number, and booking records.</p>
                  <p className="font-bold text-white text-[11px] uppercase tracking-wider">2. Information Collection</p>
                  <p>We only collect personal information when provided voluntarily through our booking or newsletter subscription forms. This information is saved securely on your device's browser local storage, or in our database, for booking confirmation purposes.</p>
                  <p className="font-bold text-white text-[11px] uppercase tracking-wider">3. Use of Information</p>
                  <p>Collected information is used exclusively to facilitate, confirm, or modify salon appointments. We will never sell, lease, or distribute your email or contact records to third-party marketing services.</p>
                  <p className="font-bold text-white text-[11px] uppercase tracking-wider">4. Location & Map API</p>
                  <p>This website utilizes standard iframe map embeds centered on Riyadh Avenue Mall. We do not track your real-time GPS locations unless authorized through your web browser.</p>
                </>
              ) : (
                <>
                  <p className="font-bold text-white text-[11px] uppercase tracking-wider">1. Appointment Terms</p>
                  <p>All bookings made online at Albinia Salon are real-time confirmations. We kindly request that you arrive at Riyadh Avenue Mall at least 10 minutes prior to your preferred scheduled slot.</p>
                  <p className="font-bold text-white text-[11px] uppercase tracking-wider">2. Cancellation Policy</p>
                  <p>Customers can easily cancel bookings for free directly from their local bookings panel on this website, or by dialing our contact line at 055 016 8253. We appreciate advanced notification.</p>
                  <p className="font-bold text-white text-[11px] uppercase tracking-wider">3. Pricing Estimates</p>
                  <p>All listed pricing is displayed in Saudi Riyals (SAR) and represents current starting base rates. Final pricing may vary slightly depending on hair texture, custom colors, or bespoke hair art.</p>
                  <p className="font-bold text-white text-[11px] uppercase tracking-wider">4. Kid-Safety Guidelines</p>
                  <p>Our salon provides custom, child-friendly grooming structures. For safety and absolute care, children must remain accompanied by an adult/guardian during their salon visit.</p>
                </>
              )}
            </div>

            <button
              onClick={() => setActiveModal(null)}
              className="mt-8 w-full bg-gold-500 text-charcoal-950 font-bold py-3.5 rounded-none cursor-pointer text-xs uppercase tracking-widest"
            >
              {language === 'en' ? 'Close & Return' : 'إغلاق وإرجاع'}
            </button>
          </div>
        </div>
      )}
    </footer>
  );
}
