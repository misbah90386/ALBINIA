import { useState, MouseEvent } from 'react';
import { Sparkles, Eye, X, ChevronLeft, ChevronRight } from 'lucide-react';

interface GalleryProps {
  language: 'en' | 'ar';
  isDarkMode: boolean;
}

interface GalleryItem {
  id: number;
  category: 'cuts' | 'kids' | 'spa' | 'interior';
  title: string;
  arabicTitle: string;
  image: string;
}

export default function Gallery({ language, isDarkMode }: GalleryProps) {
  const [activeFilter, setActiveFilter] = useState<'all' | 'cuts' | 'kids' | 'spa' | 'interior'>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: 0,
      category: 'cuts',
      title: "Precision Haircut",
      arabicTitle: "قصة شعر دقيقة",
      image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 1,
      category: 'kids',
      title: "Fun Kids Haircut",
      arabicTitle: "قص شعر ممتع للأطفال",
      image: "/src/assets/images/kids_haircut_1783416632721.jpg"
    },
    {
      id: 2,
      category: 'cuts',
      title: "Precision Beard Styling",
      arabicTitle: "تحديد وتصفيف اللحية بدقة",
      image: "/src/assets/images/mens_styling_1783416645578.jpg"
    },
    {
      id: 3,
      category: 'spa',
      title: "Luxury Pedicure & Foot Spa",
      arabicTitle: "باديكير وسبا القدمين الفاخر",
      image: "/src/assets/images/foot_care_1783416660542.jpg"
    },
    {
      id: 4,
      category: 'interior',
      title: "Luxury Barber Chairs",
      arabicTitle: "كراسي الحلاقة الفاخرة",
      image: "/src/assets/images/salon_hero_1783416616030.jpg"
    },
    {
      id: 5,
      category: 'cuts',
      title: "Modern Skin Fade",
      arabicTitle: "تدرج شعر حديث (فيت)",
      image: "https://images.unsplash.com/photo-1599351431247-f50940f06ed6?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 6,
      category: 'spa',
      title: "Relaxing Facial Clean-up",
      arabicTitle: "تنظيف مهدئ للوجه وبخار",
      image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 7,
      category: 'cuts',
      title: "Modern Beard Shave & Hot Towel",
      arabicTitle: "حلاقة لحية كلاسيكية بالمنشفة الساخنة",
      image: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 8,
      category: 'spa',
      title: "Nourishing Hand Manicure",
      arabicTitle: "مانيكير مغذي ومحدد لليدين",
      image: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&q=80&w=800"
    }
  ];

  const filters = [
    { id: 'all', label: 'All Images', arLabel: 'الكل' },
    { id: 'cuts', label: 'Hair & Beard', arLabel: 'قص وتشذيب' },
    { id: 'kids', label: 'Kids Section', arLabel: 'ركن الأطفال' },
    { id: 'spa', label: 'Spa & Care', arLabel: 'سبا وعناية' },
    { id: 'interior', label: 'Salon Interior', arLabel: 'الصالون من الداخل' }
  ];

  const filteredItems = activeFilter === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeFilter);

  const handlePrev = (e: MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      const prevIndex = (lightboxIndex - 1 + filteredItems.length) % filteredItems.length;
      setLightboxIndex(prevIndex);
    }
  };

  const handleNext = (e: MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      const nextIndex = (lightboxIndex + 1) % filteredItems.length;
      setLightboxIndex(nextIndex);
    }
  };

  return (
    <section
      id="gallery"
      className={`py-24 transition-colors duration-300 ${
        isDarkMode ? 'bg-charcoal-950 text-white' : 'bg-white text-charcoal-900'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-[0.25em] text-gold-500 uppercase mb-3 font-heading flex items-center justify-center space-x-1.5">
            <Sparkles className="h-4 w-4 text-gold-500" />
            <span>{language === 'en' ? 'OUR VISUAL PORTFOLIO' : 'معرض أعمالنا الفني'}</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-sans font-light tracking-tight mb-4 text-white">
            {language === 'en' ? (
              <>
                Gallery of <span className="text-gold-500 font-normal">Masterpieces</span>
              </>
            ) : (
              <>
                معرض متميز من <span className="text-gold-500 font-normal">إبداعاتنا</span>
              </>
            )}
          </h2>
          <p className={`text-xs sm:text-sm font-light leading-relaxed ${isDarkMode ? 'text-charcoal-300' : 'text-charcoal-600'}`}>
            {language === 'en'
              ? 'Explore our precision styling and luxury environments. Every photo displays our actual tools, specialized kids stations, or premium results.'
              : 'استكشف تصاميمنا الدقيقة وبيئتنا الفاخرة. تعرض كل صورة أدواتنا الحقيقية، أو ركن الأطفال المخصص، أو النتائج الممتازة التي يحصل عليها عملاؤنا.'}
          </p>
        </div>

        {/* Filter Badges */}
        <div id="gallery-filters" className="flex flex-wrap justify-center gap-2 mb-16">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => {
                setActiveFilter(f.id as any);
                setLightboxIndex(null);
              }}
              className={`px-6 py-2.5 rounded-none font-heading font-bold text-[10px] uppercase tracking-widest transition-all duration-300 cursor-pointer ${
                activeFilter === f.id
                  ? 'bg-gold-500 text-charcoal-950 border border-gold-500'
                  : isDarkMode
                    ? 'bg-transparent text-charcoal-300 border border-white/10 hover:border-white/20'
                    : 'bg-transparent text-charcoal-700 border border-charcoal-200 hover:border-charcoal-400'
              }`}
            >
              {language === 'en' ? f.label : f.arLabel}
            </button>
          ))}
        </div>

        {/* Gallery Grid (with lightboxes) */}
        <div id="gallery-grid" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              id={`gallery-item-${item.id}`}
              onClick={() => setLightboxIndex(index)}
              className="relative rounded-none overflow-hidden aspect-4/3 group cursor-pointer border border-white/5 hover:border-gold-500/20 transition-all duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-[1.03] transition-all duration-500"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              {/* Overlay on Hover */}
              <div className="absolute inset-0 bg-charcoal-950/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6">
                <div className="flex justify-end">
                  <div className="p-2.5 bg-gold-500 text-charcoal-950 rounded-none shadow-lg scale-90 group-hover:scale-100 transition-transform duration-300">
                    <Eye className="h-4 w-4" />
                  </div>
                </div>
                <div className="translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-[9px] text-gold-500 font-bold uppercase tracking-widest block mb-1">
                    {item.category.toUpperCase()}
                  </span>
                  <h4 className="text-white font-heading font-medium text-base">
                    {language === 'en' ? item.title : item.arabicTitle}
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic Lightbox Modal */}
        {lightboxIndex !== null && (
          <div
            id="gallery-lightbox"
            className="fixed inset-0 z-50 bg-charcoal-950/98 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setLightboxIndex(null)}
          >
            {/* Close Button */}
            <button
              id="lightbox-close"
              onClick={() => setLightboxIndex(null)}
              className="absolute top-6 right-6 text-white/70 hover:text-gold-400 p-3 rounded-none bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Prev Trigger */}
            <button
              id="lightbox-prev"
              onClick={handlePrev}
              className="absolute left-6 text-white/50 hover:text-gold-400 p-3 rounded-none bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            {/* Next Trigger */}
            <button
              id="lightbox-next"
              onClick={handleNext}
              className="absolute right-6 text-white/50 hover:text-gold-400 p-3 rounded-none bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Image Box */}
            <div
              className="max-w-4xl max-h-[80vh] relative flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={filteredItems[lightboxIndex].image}
                alt={filteredItems[lightboxIndex].title}
                className="max-w-full max-h-[70vh] object-contain rounded-none border border-white/10 shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="text-center mt-6">
                <p className="text-[10px] text-gold-500 uppercase tracking-widest font-bold">
                  {filteredItems[lightboxIndex].category}
                </p>
                <h3 className="text-white font-heading font-medium text-lg mt-1">
                  {language === 'en' ? filteredItems[lightboxIndex].title : filteredItems[lightboxIndex].arabicTitle}
                </h3>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
