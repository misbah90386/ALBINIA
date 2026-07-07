import { Calendar, Compass } from 'lucide-react';

interface HeroProps {
  language: 'en' | 'ar';
  scrollToSection: (id: string) => void;
}

export default function Hero({ language, scrollToSection }: HeroProps) {
  return (
    <div
      id="hero-section"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-charcoal-950 pt-20"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/salon_hero_1783416616030.jpg"
          alt="Albinia Luxury Salon"
          className="w-full h-full object-cover object-center scale-100 opacity-30"
          referrerPolicy="no-referrer"
        />
        {/* Deep luxurious vignette and gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/90 to-transparent" />
      </div>

      {/* Vertical Side Text Accent */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 [writing-mode:vertical-rl] rotate-180 hidden xl:flex text-[9px] tracking-[0.4em] uppercase text-gold-500 opacity-60 pointer-events-none select-none font-medium">
        Established 2024 • Riyadh • Luxury Men's & Kids Salon
      </div>

      {/* Decorative Gold Sparkles or Lights */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold-500/5 rounded-full filter blur-[150px] animate-pulse" />

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-10 pb-20">
        {/* Subtle Luxury Ribbon */}
        <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-none mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-gold-500 animate-ping" />
          <span className="text-[10px] font-semibold tracking-[0.25em] text-gold-500 uppercase font-heading">
            {language === 'en' ? 'LULU HYPERMARKET • AL MURABBA, RIYADH' : 'لولو هايبر ماركت • المربع، الرياض'}
          </span>
        </div>

        {/* Big Dual Headlines */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-sans font-light text-white tracking-tight leading-tight mb-4">
          {language === 'en' ? (
            <>
              Premium Men's & <br />
              <span className="text-gold-500 font-normal">Kids Salon</span> in Riyadh
            </>
          ) : (
            <>
              <span className="text-gold-500 font-normal">صالون فاخر</span> للرجال والأطفال
            </>
          )}
        </h1>

        <h2 className="text-sm sm:text-base md:text-lg font-heading font-medium tracking-[0.3em] uppercase text-gold-200/80 mb-8">
          {language === 'en' ? 'Riyadh Avenue Mall' : 'الرياض أفينيو مول'}
        </h2>

        {/* Description text */}
        <p className="max-w-2xl mx-auto text-xs sm:text-sm md:text-base text-charcoal-300 font-light leading-relaxed mb-12 px-2">
          {language === 'en'
            ? "Experience exceptional haircuts, precision beard styling, organic facials, relaxing foot spas, and custom kids' hair care delivered by Riyadh's premium grooming professionals."
            : 'استمتع بقصات الشعر الاستثنائية، وتصفيف اللحية الدقيق، وعلاجات الوجه العضوية، وسبا القدمين المريح، والعناية المخصصة بشعر الأطفال على أيدي أفضل خبراء العناية بالرياض.'}
        </p>

        {/* Call To Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 max-w-lg mx-auto">
          <button
            id="hero-book-now"
            onClick={() => scrollToSection('booking')}
            className="w-full sm:w-auto flex-1 bg-gold-500 text-charcoal-950 font-bold px-8 py-4 rounded-none hover:bg-gold-600 transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer text-xs uppercase tracking-widest group"
          >
            <Calendar className="h-4 w-4 text-charcoal-950 group-hover:rotate-12 transition-transform" />
            <span>{language === 'en' ? 'Book Appointment' : 'احجز موعدك الآن'}</span>
          </button>

          <button
            id="hero-explore-services"
            onClick={() => scrollToSection('services')}
            className="w-full sm:w-auto flex-1 bg-transparent border border-white/20 text-white hover:bg-white/5 font-bold px-8 py-4 rounded-none transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer text-xs uppercase tracking-widest"
          >
            <Compass className="h-4 w-4" />
            <span>{language === 'en' ? 'Explore Services' : 'استكشف خدماتنا'}</span>
          </button>
        </div>

        {/* Store Highlights Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20 max-w-4xl mx-auto pt-8 border-t border-white/5">
          <div className="text-center p-4 rounded-none bg-white/[0.01] border border-white/5 backdrop-blur-xs">
            <p className="text-gold-500 text-xl font-medium tracking-tight">10am - 11pm</p>
            <p className="text-[10px] text-charcoal-400 uppercase tracking-widest mt-1">
              {language === 'en' ? 'Open Daily' : 'مفتوح يومياً'}
            </p>
          </div>
          <div className="text-center p-4 rounded-none bg-white/[0.01] border border-white/5 backdrop-blur-xs">
            <p className="text-gold-500 text-xl font-medium tracking-tight">LuLu Mall</p>
            <p className="text-[10px] text-charcoal-400 uppercase tracking-widest mt-1">
              {language === 'en' ? 'Riyadh Avenue' : 'الرياض أفينيو'}
            </p>
          </div>
          <div className="text-center p-4 rounded-none bg-white/[0.01] border border-white/5 backdrop-blur-xs">
            <p className="text-gold-500 text-xl font-medium tracking-tight">15+</p>
            <p className="text-[10px] text-charcoal-400 uppercase tracking-widest mt-1">
              {language === 'en' ? 'Elite Specialists' : 'أخصائيين نخبة'}
            </p>
          </div>
          <div className="text-center p-4 rounded-none bg-white/[0.01] border border-white/5 backdrop-blur-xs">
            <p className="text-gold-500 text-xl font-medium tracking-tight">100%</p>
            <p className="text-[10px] text-charcoal-400 uppercase tracking-widest mt-1">
              {language === 'en' ? 'Hygienic Care' : 'عناية معقمة كاملة'}
            </p>
          </div>
        </div>
      </div>

      {/* Elegant scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center cursor-pointer animate-bounce" onClick={() => scrollToSection('about')}>
        <span className="text-[10px] tracking-widest text-gold-400/70 uppercase mb-2">
          {language === 'en' ? 'Scroll Down' : 'انزل للأسفل'}
        </span>
        <div className="w-1 h-8 rounded-full bg-gradient-to-b from-gold-500 to-transparent" />
      </div>
    </div>
  );
}
