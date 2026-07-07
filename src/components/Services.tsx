import { useState } from 'react';
import { SERVICES, Service } from '../types';
import { Sparkles, Clock, CirclePlay, Landmark } from 'lucide-react';

interface ServicesProps {
  language: 'en' | 'ar';
  isDarkMode: boolean;
  onBookService: (serviceId: string) => void;
}

export default function Services({ language, isDarkMode, onBookService }: ServicesProps) {
  const [activeCategory, setActiveCategory] = useState<'all' | 'hair' | 'grooming' | 'nails'>('all');

  const categories = [
    { id: 'all', label: 'All Services', arLabel: 'كل الخدمات' },
    { id: 'hair', label: 'Hair & Beard', arLabel: 'الشعر واللحية' },
    { id: 'grooming', label: 'Facial & Spa', arLabel: 'الوجه والسبا' },
    { id: 'nails', label: 'Hand & Foot Care', arLabel: 'اليد والقدمين' },
  ];

  const filteredServices = activeCategory === 'all'
    ? SERVICES
    : SERVICES.filter(s => s.category === activeCategory);

  return (
    <section
      id="services"
      className={`py-24 transition-colors duration-300 ${
        isDarkMode ? 'bg-charcoal-950 text-white' : 'bg-white text-charcoal-900'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-[0.25em] text-gold-500 uppercase mb-3 font-heading flex items-center justify-center space-x-1.5">
            <Sparkles className="h-4 w-4 text-gold-500" />
            <span>{language === 'en' ? 'OUR EXQUISITE MENU' : 'قائمة خدماتنا الراقية'}</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-sans font-light tracking-tight mb-4 text-white">
            {language === 'en' ? (
              <>
                Luxury Grooming <span className="text-gold-500 font-normal">Services</span>
              </>
            ) : (
              <>
                خدمات العناية <span className="text-gold-500 font-normal">الفاخرة</span>
              </>
            )}
          </h2>
          <p className={`text-xs sm:text-sm font-light leading-relaxed ${isDarkMode ? 'text-charcoal-300' : 'text-charcoal-600'}`}>
            {language === 'en'
              ? 'Select from our wide range of professional grooming therapies. We design hairstyles, beard trims, and skincare rituals using globally acclaimed organic brands.'
              : 'اختر من بين مجموعتنا الواسعة من خدمات العناية الاحترافية. نصمم قصات الشعر، ونحدد اللحية، ونقدم طقوس العناية بالبشرة باستخدام منتجات عالمية راقية.'}
          </p>
        </div>

        {/* Category Tabs */}
        <div id="service-tabs" className="flex flex-wrap justify-center gap-2 mb-16">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as any)}
              className={`px-6 py-3 rounded-none font-heading font-bold text-[10px] uppercase tracking-widest transition-all duration-300 cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-gold-500 text-charcoal-950 border border-gold-500'
                  : isDarkMode
                    ? 'bg-transparent text-charcoal-300 border border-white/10 hover:border-white/20'
                    : 'bg-transparent text-charcoal-700 border border-charcoal-200 hover:border-charcoal-400'
              }`}
            >
              {language === 'en' ? cat.label : cat.arLabel}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div id="services-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              id={`service-card-${service.id}`}
              className={`rounded-none overflow-hidden border transition-all duration-300 group ${
                isDarkMode
                  ? 'bg-white/[0.01] border-white/5 hover:border-gold-500/20'
                  : 'bg-white border-charcoal-200'
              }`}
            >
              {/* Service Image Section */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 to-transparent" />
                
                {/* Duration Badge */}
                <div className="absolute top-4 right-4 bg-charcoal-950/90 backdrop-blur-md text-gold-300 text-[9px] font-bold px-3 py-1.5 rounded-none flex items-center space-x-1 border border-white/10">
                  <Clock className="h-3.5 w-3.5 text-gold-500" />
                  <span>{service.duration} {language === 'en' ? 'Mins' : 'دقيقة'}</span>
                </div>

                {/* Category tag */}
                <div className="absolute bottom-4 left-4 bg-gold-500 text-charcoal-950 text-[9px] font-extrabold px-3 py-1 rounded-none uppercase tracking-wider">
                  {service.category === 'hair' ? (language === 'en' ? 'Hair' : 'شعر') : 
                   service.category === 'grooming' ? (language === 'en' ? 'Grooming' : 'عناية') : 
                   (language === 'en' ? 'Nails' : 'أظافر')}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <h3 className="font-heading font-semibold text-base text-gold-500 leading-snug">
                      {language === 'en' ? service.name : service.arabicName}
                    </h3>
                  </div>
                  <div className="text-right ml-2 shrink-0">
                    <span className="text-lg font-bold text-gold-500">
                      {service.price}
                    </span>
                    <span className="text-[9px] font-bold text-charcoal-400 block uppercase tracking-wider">
                      {language === 'en' ? 'SAR' : 'ريال'}
                    </span>
                  </div>
                </div>

                <p className={`text-xs font-light leading-relaxed mb-6 h-12 overflow-hidden text-ellipsis ${
                  isDarkMode ? 'text-charcoal-300' : 'text-charcoal-600'
                }`}>
                  {language === 'en' ? service.description : service.arabicDescription}
                </p>

                {/* Book Now trigger */}
                <button
                  id={`book-service-${service.id}`}
                  onClick={() => onBookService(service.id)}
                  className="w-full bg-transparent border border-white/10 text-white font-bold py-3.5 px-4 rounded-none text-[10px] uppercase tracking-widest transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer hover:bg-gold-500 hover:text-charcoal-950 hover:border-gold-500"
                >
                  <CirclePlay className="h-4 w-4" />
                  <span>{language === 'en' ? 'Book Service' : 'احجز الخدمة الآن'}</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Promo banner inside services */}
        <div className={`mt-16 p-8 rounded-none border flex flex-col md:flex-row items-center justify-between gap-6 ${
          isDarkMode ? 'bg-white/[0.01] border-white/5' : 'bg-charcoal-50 border-charcoal-200'
        }`}>
          <div className="flex items-center space-x-4">
            <div className="p-4 bg-gold-500/5 border border-gold-500/10 rounded-none text-gold-500 hidden sm:block">
              <Landmark className="h-6 w-6" />
            </div>
            <div>
              <h4 className="font-heading font-medium text-base text-gold-500">
                {language === 'en' ? 'Looking for the complete VIP luxury experience?' : 'تبحث عن تجربة ملكية فاخرة ومتكاملة؟'}
              </h4>
              <p className="text-[11px] font-light text-charcoal-400 mt-1 max-w-xl">
                {language === 'en' 
                  ? 'Our Royal Grooming Package offers over 2 hours of pure rejuvenation including full haircut, beard, charcoal facial spa, pedicure, and manicure services at a premium bundled rate.'
                  : 'تقدم باقة البينيا الملكية أكثر من ساعتين من الاستجمام التام تشمل قص الشعر، اللحية، سبا الفحم للوجه، باديكير، ومانيكير بسعر خاص مدمج.'}
              </p>
            </div>
          </div>
          <button
            id="book-royal-pack"
            onClick={() => onBookService('royal-grooming-package')}
            className="whitespace-nowrap bg-gold-500 text-charcoal-950 font-bold px-8 py-3.5 rounded-none hover:bg-gold-600 transition-colors cursor-pointer text-xs uppercase tracking-wider"
          >
            {language === 'en' ? 'Book Royal Package' : 'حجز الباقة الملكية'}
          </button>
        </div>

      </div>
    </section>
  );
}
