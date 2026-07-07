import { useState } from 'react';
import { FAQS } from '../types';
import { Sparkles, ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

interface FAQProps {
  language: 'en' | 'ar';
  isDarkMode: boolean;
}

export default function FAQ({ language, isDarkMode }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className={`py-24 transition-colors duration-300 ${
        isDarkMode ? 'bg-charcoal-950 text-white' : 'bg-white text-charcoal-900'
      }`}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-[0.25em] text-gold-500 uppercase mb-3 font-heading flex items-center justify-center space-x-1.5">
            <Sparkles className="h-4 w-4 text-gold-500" />
            <span>{language === 'en' ? 'COMMON QUESTIONS' : 'الأسئلة الشائعة'}</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-sans font-light tracking-tight mb-4 text-white">
            {language === 'en' ? (
              <>
                Frequently Asked <span className="text-gold-500 font-normal">Questions</span>
              </>
            ) : (
              <>
                الأسئلة المكررة <span className="text-gold-500 font-normal">والأجوبة عليها</span>
              </>
            )}
          </h2>
          <p className={`text-xs sm:text-sm font-light leading-relaxed ${isDarkMode ? 'text-charcoal-300' : 'text-charcoal-600'}`}>
            {language === 'en'
              ? 'Find quick answers about reservations, services, kids grooming stations, and accepted payments at Albinia Salon.'
              : 'اعثر على إجابات سريعة ومختصرة حول الحجوزات، والخدمات، وركن العناية بالأطفال، وطرق الدفع في صالون ألبينيا.'}
          </p>
        </div>

        {/* Accordions */}
        <div id="faq-accordions" className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                id={`faq-item-${idx}`}
                className={`rounded-none border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? isDarkMode
                      ? 'bg-white/[0.01] border-gold-500/25'
                      : 'bg-charcoal-50 border-gold-500/50'
                    : isDarkMode
                      ? 'bg-transparent border-white/5 hover:border-gold-500/10'
                      : 'bg-white border-charcoal-200 hover:border-gold-500/20'
                }`}
              >
                {/* Trigger Row */}
                <button
                  id={`faq-trigger-${idx}`}
                  onClick={() => toggleAccordion(idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left cursor-pointer select-none"
                >
                  <div className="flex items-center space-x-4">
                    <HelpCircle className="h-5 w-5 text-gold-500 shrink-0" />
                    <span className="font-heading font-medium text-xs sm:text-sm text-white">
                      {language === 'en' ? faq.question : faq.arabicQuestion}
                    </span>
                  </div>
                  <div className="text-gold-500 shrink-0 ml-4">
                    {isOpen ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                  </div>
                </button>

                {/* Content Panel */}
                <div
                  id={`faq-panel-${idx}`}
                  className={`transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-[300px] border-t border-white/5 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className={`px-6 py-5 text-xs leading-relaxed font-light ${
                    isDarkMode ? 'text-charcoal-300' : 'text-charcoal-700'
                  }`}>
                    {language === 'en' ? faq.answer : faq.arabicAnswer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
