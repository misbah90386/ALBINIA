import { Check, Shield, Award, Sparkles } from 'lucide-react';

interface AboutProps {
  language: 'en' | 'ar';
  isDarkMode: boolean;
  scrollToSection: (id: string) => void;
}

export default function About({ language, isDarkMode, scrollToSection }: AboutProps) {
  const points = [
    {
      title: 'Premium Quality',
      arabicTitle: 'جودة متميزة',
      desc: 'We use premium, certified grooming products.',
      arabicDesc: 'نستخدم منتجات عناية ممتازة ومثبتة الفعالية.',
    },
    {
      title: 'Supreme Hygiene',
      arabicTitle: 'تعقيم كامل للبيئة والمعدات',
      desc: 'Surgical-grade sterilization for every client.',
      arabicDesc: 'نلتزم بأعلى معايير النظافة والتعقيم لكل زبون.',
    },
    {
      title: 'Elite Barbers',
      arabicTitle: 'خبراء حلاقة وتصفيف نخبة',
      desc: 'Talented artists with years of styling mastery.',
      arabicDesc: 'فنانون موهوبون لديهم سنوات طويلة من الإتقان والخبرة.',
    },
  ];

  return (
    <section
      id="about"
      className={`py-24 transition-colors duration-300 ${
        isDarkMode ? 'bg-charcoal-950 text-white' : 'bg-charcoal-50 text-charcoal-900'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Column */}
          <div id="about-image-column" className="relative group">
            {/* Elegant framing borders */}
            <div className="absolute -inset-3 rounded-none border border-gold-500/10 scale-95 group-hover:scale-100 transition-all duration-500" />
            <div className="absolute inset-0 rounded-none bg-white/[0.01] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative rounded-none overflow-hidden border border-white/10 bg-charcoal-950">
              <img
                src="/src/assets/images/mens_styling_1783416645578.jpg"
                alt="Expert Barber styling beard"
                className="w-full h-[450px] object-cover scale-100 group-hover:scale-[1.03] transition-transform duration-700 opacity-90 group-hover:opacity-100"
                referrerPolicy="no-referrer"
              />
              {/* Gold gradient tag */}
              <div className="absolute bottom-6 left-6 right-6 bg-charcoal-950/95 backdrop-blur-md p-6 rounded-none border border-white/10 flex items-center justify-between">
                <div>
                  <p className="text-gold-500 font-heading font-medium tracking-[0.1em] text-lg">LULU HYPERMARKET</p>
                  <p className="text-[10px] uppercase tracking-widest text-charcoal-400 mt-1">{language === 'en' ? 'Riyadh Avenue Mall Branch' : 'فرع الرياض أفينيو مول'}</p>
                </div>
                <div className="p-2.5 bg-gold-500/10 text-gold-500 rounded-none border border-gold-500/20">
                  <Award className="h-5 w-5" />
                </div>
              </div>
            </div>

            {/* Experience badge */}
            <div className="absolute -top-6 -right-6 bg-gold-500 text-charcoal-950 font-bold px-6 py-4 rounded-none flex flex-col items-center shadow-lg">
              <span className="text-3xl font-heading font-bold tracking-tight">10+</span>
              <span className="text-[9px] uppercase font-bold tracking-widest text-center leading-tight">
                {language === 'en' ? 'Years of\nExcellence' : 'سنوات من\nالتميز'}
              </span>
            </div>
          </div>

          {/* Text Column */}
          <div id="about-text-column" className="flex flex-col justify-center">
            {/* Mini gold subtitle */}
            <span className="text-xs font-semibold tracking-[0.25em] text-gold-500 uppercase mb-3 font-heading flex items-center space-x-1.5">
              <Sparkles className="h-4 w-4 text-gold-500" />
              <span>{language === 'en' ? 'WELCOME TO ALBINIA SALON' : 'مرحباً بكم في صالون ألبينيا'}</span>
            </span>

            {/* Main Section Headings */}
            <h2 className="text-3xl sm:text-4xl font-sans font-light tracking-tight mb-6 text-white">
              {language === 'en' ? (
                <>
                  Crafting Your <span className="text-gold-500 font-normal">Signature Style</span> with Sophistication
                </>
              ) : (
                <>
                  نصنع <span className="text-gold-500 font-normal">أسلوبك الخاص</span> بدقة وعناية واحترافية فائقة
                </>
              )}
            </h2>

            {/* Main Paragraph Description */}
            <p className={`text-xs sm:text-sm leading-relaxed mb-8 font-light ${isDarkMode ? 'text-charcoal-300' : 'text-charcoal-700'}`}>
              {language === 'en'
                ? "At Albinia Men's & Kids Salon, we believe every customer deserves exceptional grooming in a clean, comfortable, and relaxing environment. Our experienced barbers and grooming specialists provide stylish haircuts, precision beard trims, relaxing spa services, and professional care for both men and children. We combine modern techniques with premium products to deliver a grooming experience that leaves every client looking and feeling their best."
                : 'في صالون ألبينيا للرجال والأطفال، نؤمن بأن كل عميل يستحق عناية استثنائية في بيئة نظيفة ومريحة ومريحة للأعصاب. يقدم الحلاقون ومتخصصو العناية ذوو الخبرة لدينا قصات شعر أنيقة، وتشذيب اللحية بدقة، وخدمات سبا مريحة، وعناية احترافية لكل من الرجال والأطفال. نحن نجمع بين التقنيات الحديثة والمنتجات الفاخرة لتقديم تجربة حلاقة تجعل كل عميل يبدو ويشعر بأفضل حالاته.'}
            </p>

            {/* Points checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
              {points.map((p, idx) => (
                <div
                  key={idx}
                  className={`p-5 rounded-none border transition-all duration-300 ${
                    isDarkMode
                      ? 'bg-white/[0.01] border-white/5 hover:border-gold-500/20'
                      : 'bg-white border-charcoal-200 shadow-none hover:border-gold-500/50'
                  }`}
                >
                  <div className="w-8 h-8 rounded-none bg-gold-500/5 text-gold-500 flex items-center justify-center mb-3 border border-gold-500/10">
                    <Shield className="h-4 w-4" />
                  </div>
                  <h4 className="font-heading font-semibold text-xs text-gold-500 mb-1">
                    {language === 'en' ? p.title : p.arabicTitle}
                  </h4>
                  <p className="text-[10px] text-charcoal-400 leading-relaxed font-light">
                    {language === 'en' ? p.desc : p.arabicDesc}
                  </p>
                </div>
              ))}
            </div>

            {/* Booking Trigger Link */}
            <div className="flex items-center space-x-6">
              <button
                id="about-book-cta"
                onClick={() => scrollToSection('booking')}
                className="bg-gold-500 text-charcoal-950 font-bold px-8 py-3.5 rounded-none uppercase tracking-widest text-xs hover:bg-gold-600 transition-colors cursor-pointer"
              >
                {language === 'en' ? 'Book Appointment' : 'احجز موعداً'}
              </button>
              
              <button
                id="about-services-cta"
                onClick={() => scrollToSection('services')}
                className={`font-bold text-xs uppercase tracking-wider cursor-pointer transition-colors ${
                  isDarkMode ? 'text-charcoal-300 hover:text-white' : 'text-charcoal-700 hover:text-black'
                }`}
              >
                {language === 'en' ? 'View Our Menu →' : 'عرض قائمة الخدمات ←'}
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
