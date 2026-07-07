import { ShieldCheck, Sparkles, HeartHandshake, Smile, Scissors, Compass } from 'lucide-react';

interface WhyChooseUsProps {
  language: 'en' | 'ar';
  isDarkMode: boolean;
}

export default function WhyChooseUs({ language, isDarkMode }: WhyChooseUsProps) {
  const features = [
    {
      icon: <Scissors className="h-6 w-6 text-gold-500" />,
      title: 'Professional Barbers',
      arTitle: 'حلاقون محترفون',
      desc: 'Our master barbers specialize in high-end classic cuts, modern fades, and custom styling tailored to your look.',
      arDesc: 'يتخصص حلاقونا المهرة في قصات الشعر الكلاسيكية الراقية، والتدرج العصري، والتصفيف المخصص لمظهرك.'
    },
    {
      icon: <Smile className="h-6 w-6 text-gold-500" />,
      title: 'Kids Hair Specialists',
      arTitle: 'أخصائيو قص شعر الأطفال',
      desc: 'Patient, gentle hair artists and custom car barber chairs ensure a fun, tear-free haircut experience for your children.',
      arDesc: 'فنانون حلاقة صبورون ولطيفون مع كراسي سيارات مخصصة للأطفال لتوفير تجربة ممتعة خالية من البكاء.'
    },
    {
      icon: <Compass className="h-6 w-6 text-gold-500" />,
      title: 'Luxury Salon Environment',
      arTitle: 'بيئة صالون فاخرة ومريحة',
      desc: 'Relax inside Riyadh Avenue Mall with ambient lighting, luxury custom barber chairs, and peaceful music.',
      arDesc: 'استرخِ داخل الرياض أفينيو مول مع إضاءة محيطية هادئة، وكراسي حلاقة فاخرة، وموسيقى هادئة.'
    },
    {
      icon: <ShieldCheck className="h-6 w-6 text-gold-500" />,
      title: 'Clean & Hygienic Equipment',
      arTitle: 'معدات نظيفة ومعقمة',
      desc: 'We enforce surgical-grade chemical and UV sterilization on all scissors, clippers, razors, and brushes after every use.',
      arDesc: 'نطبق تعقيمًا معمليًا كيميائيًا وبالأشعة فوق البنفسجية لجميع المقصات والملاقط والأمشاط بعد كل استخدام.'
    },
    {
      icon: <HeartHandshake className="h-6 w-6 text-gold-500" />,
      title: 'Premium Grooming Products',
      arTitle: 'منتجات عناية فائقة الجودة',
      desc: 'We use premium, organic, skin-safe shampoos, wax, beard oils, and face scrubs from leading international brands.',
      arDesc: 'نستخدم أنواع شامبو، واكس، زيوت لحية، ومقشرات وجه عضوية فائقة الجودة من علامات تجارية عالمية رائدة.'
    },
    {
      icon: <Sparkles className="h-6 w-6 text-gold-500" />,
      title: 'Affordable Luxury',
      arTitle: 'رفاهية بأسعار معقولة',
      desc: 'Get elite, five-star luxury treatment and exceptional standards without the premium price tag. Total value for Riyadh.',
      arDesc: 'احصل على معاملة راقية من فئة خمس نجوم ومعايير استثنائية دون مبالغة في الأسعار. قيمة حقيقية في الرياض.'
    }
  ];

  return (
    <section
      id="why-choose-us"
      className={`py-24 transition-colors duration-300 ${
        isDarkMode ? 'bg-charcoal-950 text-white' : 'bg-charcoal-50 text-charcoal-900'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-[0.25em] text-gold-500 uppercase mb-3 font-heading flex items-center justify-center space-x-1.5">
            <Sparkles className="h-4 w-4 text-gold-500" />
            <span>{language === 'en' ? 'THE ALBINIA STANDARD' : 'معيار ألبينيا الذهبي'}</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-sans font-light tracking-tight mb-4 text-white">
            {language === 'en' ? (
              <>
                Why Choose <span className="text-gold-500 font-normal">Albinia Salon</span>
              </>
            ) : (
              <>
                لماذا تختار <span className="text-gold-500 font-normal">صالون ألبينيا</span>
              </>
            )}
          </h2>
          <p className={`text-xs sm:text-sm font-light leading-relaxed ${isDarkMode ? 'text-charcoal-300' : 'text-charcoal-600'}`}>
            {language === 'en'
              ? 'We are committed to delivering the ultimate grooming experience where luxury meets precision and comfort meets state-of-the-art hygiene.'
              : 'نحن ملتزمون بتقديم تجربة العناية المثالية حيث تلتقي الفخامة بالدقة، وتجتمع الراحة مع أحدث معايير التعقيم والنظافة.'}
          </p>
        </div>

        {/* Features Staggered Bento Grid */}
        <div id="features-container" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              id={`feature-card-${idx}`}
              className={`p-8 rounded-none border transition-all duration-300 group ${
                isDarkMode
                  ? 'bg-white/[0.01] border-white/5 hover:border-gold-500/20'
                  : 'bg-white border-charcoal-200'
              }`}
            >
              {/* Icon Container with glowing gold border */}
              <div className="w-12 h-12 rounded-none bg-gold-500/5 text-gold-500 flex items-center justify-center mb-6 border border-gold-500/10 group-hover:bg-gold-500 group-hover:text-charcoal-950 transition-all duration-300">
                {feature.icon}
              </div>

              {/* Title (Dual Language) */}
              <h3 className="font-heading font-semibold text-base text-gold-500 mb-3">
                {language === 'en' ? feature.title : feature.arTitle}
              </h3>

              {/* Description (Dual Language) */}
              <p className={`text-xs font-light leading-relaxed ${
                isDarkMode ? 'text-charcoal-300' : 'text-charcoal-600'
              }`}>
                {language === 'en' ? feature.desc : feature.arDesc}
              </p>
            </div>
          ))}
        </div>

        {/* Elegant Stats Accent */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-24 max-w-4xl mx-auto text-center">
          <div className="p-6">
            <span className="text-4xl font-heading font-light text-gold-500 block">15,000+</span>
            <span className={`text-[10px] uppercase tracking-widest font-semibold mt-2 block ${isDarkMode ? 'text-charcoal-400' : 'text-charcoal-600'}`}>
              {language === 'en' ? 'Satisfied Clients' : 'عميل سعيد'}
            </span>
          </div>
          <div className="p-6 border-y sm:border-y-0 sm:border-x border-white/5">
            <span className="text-4xl font-heading font-light text-gold-500 block">100%</span>
            <span className={`text-[10px] uppercase tracking-widest font-semibold mt-2 block ${isDarkMode ? 'text-charcoal-400' : 'text-charcoal-600'}`}>
              {language === 'en' ? 'Sterilized Instruments' : 'أدوات معقمة بالكامل'}
            </span>
          </div>
          <div className="p-6">
            <span className="text-4xl font-heading font-light text-gold-500 block">5 Stars</span>
            <span className={`text-[10px] uppercase tracking-widest font-semibold mt-2 block ${isDarkMode ? 'text-charcoal-400' : 'text-charcoal-600'}`}>
              {language === 'en' ? 'Google Reviews Rating' : 'تقييم مراجعات جوجل'}
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
