import { useState, useEffect } from 'react';
import { REVIEWS } from '../types';
import { Sparkles, Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

interface ReviewsProps {
  language: 'en' | 'ar';
  isDarkMode: boolean;
}

export default function Reviews({ language, isDarkMode }: ReviewsProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto scroll testimonials every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % REVIEWS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % REVIEWS.length);
  };

  return (
    <section
      id="reviews"
      className={`py-24 transition-colors duration-300 relative overflow-hidden ${
        isDarkMode ? 'bg-charcoal-950 text-white' : 'bg-charcoal-50 text-charcoal-900'
      }`}
    >
      {/* Decorative floating gold quotes background */}
      <div className="absolute right-12 top-12 text-gold-500/5 select-none pointer-events-none hidden md:block">
        <Quote className="h-44 w-44" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-[0.25em] text-gold-500 uppercase mb-3 font-heading flex items-center justify-center space-x-1.5">
            <Sparkles className="h-4 w-4 text-gold-500" />
            <span>{language === 'en' ? 'PATRON TESTIMONIALS' : 'آراء عملائنا الأوفياء'}</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-sans font-light tracking-tight mb-4 text-white">
            {language === 'en' ? (
              <>
                What Our Clients <span className="text-gold-500 font-normal">Say About Us</span>
              </>
            ) : (
              <>
                ماذا يقول عملائنا <span className="text-gold-500 font-normal">عن خدماتنا</span>
              </>
            )}
          </h2>
          <p className={`text-xs sm:text-sm font-light leading-relaxed ${isDarkMode ? 'text-charcoal-300' : 'text-charcoal-600'}`}>
            {language === 'en'
              ? 'Read the five-star reviews from our esteemed patrons in Riyadh. Customer satisfaction is our greatest reward.'
              : 'اقرأ تقييمات خمس نجوم من عملائنا الكرام في الرياض. رضا العملاء هو مكافأتنا الأكبر.'}
          </p>
        </div>

        {/* Testimonial Slider Wrapper */}
        <div className="relative max-w-4xl mx-auto">
          {/* Main Card */}
          <div
            id="testimonial-slider-card"
            className={`p-8 sm:p-12 rounded-none border transition-all duration-500 ${
              isDarkMode
                ? 'bg-white/[0.01] border-white/5 shadow-none'
                : 'bg-white border-charcoal-200'
            }`}
          >
            {/* Top Row: Stars and Quote icon */}
            <div className="flex justify-between items-center mb-8">
              <div className="flex space-x-1">
                {[...Array(REVIEWS[activeIndex].rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-gold-500 text-gold-500" />
                ))}
              </div>
              <Quote className="h-6 w-6 text-gold-500/20 rotate-180" />
            </div>

            {/* Testimonial Text */}
            <blockquote className="mb-8">
              <p className={`text-sm sm:text-base md:text-lg font-light leading-relaxed italic ${
                isDarkMode ? 'text-charcoal-200' : 'text-charcoal-800'
              }`}>
                " {language === 'en' ? REVIEWS[activeIndex].text : REVIEWS[activeIndex].arabicText} "
              </p>
            </blockquote>

            {/* Author details */}
            <div className="flex items-center justify-between pt-6 border-t border-white/5">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-none bg-gold-500 text-charcoal-950 font-heading font-bold flex items-center justify-center text-sm border border-gold-200">
                  {REVIEWS[activeIndex].name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-gold-500 text-sm">
                    {REVIEWS[activeIndex].name}
                  </h4>
                  <p className="text-[10px] text-charcoal-400 mt-0.5 uppercase tracking-wider">
                    {REVIEWS[activeIndex].date}
                  </p>
                </div>
              </div>

              {/* Slider Navigation arrows */}
              <div className="flex space-x-2">
                <button
                  id="review-prev"
                  onClick={handlePrev}
                  className={`p-2.5 rounded-none border transition-all duration-300 cursor-pointer ${
                    isDarkMode
                      ? 'border-white/10 text-charcoal-300 hover:text-white hover:border-white/30'
                      : 'border-charcoal-200 text-charcoal-700 hover:text-black hover:border-charcoal-400'
                  }`}
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  id="review-next"
                  onClick={handleNext}
                  className={`p-2.5 rounded-none border transition-all duration-300 cursor-pointer ${
                    isDarkMode
                      ? 'border-white/10 text-charcoal-300 hover:text-white hover:border-white/30'
                      : 'border-charcoal-200 text-charcoal-700 hover:text-black hover:border-charcoal-400'
                  }`}
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Indicator dots */}
          <div className="flex justify-center space-x-2.5 mt-8">
            {REVIEWS.map((_, idx) => (
              <button
                key={idx}
                id={`review-indicator-${idx}`}
                onClick={() => setActiveIndex(idx)}
                className={`h-1.5 transition-all duration-300 cursor-pointer ${
                  activeIndex === idx ? 'w-8 bg-gold-500' : 'w-1.5 bg-white/10'
                }`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
