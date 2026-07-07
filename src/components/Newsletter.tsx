import { useState, FormEvent } from 'react';
import { Mail, Sparkles, Check } from 'lucide-react';

interface NewsletterProps {
  language: 'en' | 'ar';
  isDarkMode: boolean;
}

export default function Newsletter({ language, isDarkMode }: NewsletterProps) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    if (email.trim() && email.includes('@')) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <section
      id="newsletter-section"
      className={`py-20 transition-colors duration-300 relative overflow-hidden ${
        isDarkMode ? 'bg-charcoal-950 text-white' : 'bg-white text-charcoal-900'
      }`}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          id="newsletter-container-card"
          className={`p-8 sm:p-12 rounded-none border text-center relative overflow-hidden ${
            isDarkMode
              ? 'bg-white/[0.01] border-white/5'
              : 'bg-charcoal-50 border-charcoal-200'
          }`}
        >
          {/* Sparkles background */}
          <div className="absolute -top-10 -right-10 text-gold-500/5 select-none pointer-events-none">
            <Sparkles className="h-40 w-40" />
          </div>

          <div className="relative z-10 max-w-2xl mx-auto">
            <span className="text-xs font-semibold tracking-[0.25em] text-gold-500 uppercase mb-3 font-heading flex items-center justify-center space-x-1.5">
              <Mail className="h-4 w-4 text-gold-500" />
              <span>{language === 'en' ? 'EXCLUSIVE OFFERS' : 'عروض ومزايا حصرية'}</span>
            </span>

            <h2 className="text-2xl sm:text-3xl font-sans font-light tracking-tight mb-4 text-white">
              {language === 'en' ? (
                <>
                  Join the <span className="text-gold-500 font-normal">Albinia Elite Club</span>
                </>
              ) : (
                <>
                  انضم إلى <span className="text-gold-500 font-normal">نادي ألبينيا الذهبي</span>
                </>
              )}
            </h2>

            <p className={`text-xs sm:text-sm font-light leading-relaxed mb-8 ${isDarkMode ? 'text-charcoal-300' : 'text-charcoal-600'}`}>
              {language === 'en'
                ? 'Subscribe to our premium mailing list. Be the first to receive notifications on seasonal packages, grooming tutorials, and VIP promotions in Riyadh.'
                : 'اشترك في قائمتنا البريدية الممتازة. كن أول من يتلقى إشعارات حول الباقات الموسمية، ونصائح العناية، والخصومات الذهبية لأعضاء النادي في الرياض.'}
            </p>

            {subscribed ? (
              <div
                id="newsletter-success"
                className="p-5 rounded-none bg-gold-500/5 border border-gold-500/20 text-gold-400 flex flex-col items-center space-y-2"
              >
                <div className="p-2 bg-gold-500 text-charcoal-950 rounded-none">
                  <Check className="h-4 w-4" />
                </div>
                <h4 className="font-bold text-xs uppercase tracking-widest text-gold-500">
                  {language === 'en' ? 'Subscribed Successfully!' : 'تم الاشتراك بنجاح!'}
                </h4>
                <p className="text-[10px] text-charcoal-400 font-light">
                  {language === 'en' ? 'Thank you. You are now registered on our elite list.' : 'شكراً لك. لقد تم تسجيل بريدك في قائمتنا الحصرية.'}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={language === 'en' ? 'Enter your email address...' : 'أدخل بريدك الإلكتروني...'}
                  className={`flex-1 px-5 py-3.5 rounded-none border text-xs outline-none transition-all ${
                    isDarkMode
                      ? 'bg-transparent border-white/10 text-white placeholder-charcoal-600 focus:border-gold-500'
                      : 'bg-white border-charcoal-200 text-charcoal-900 placeholder-charcoal-400 focus:border-gold-500'
                  }`}
                />
                <button
                  id="newsletter-submit"
                  type="submit"
                  className="bg-gold-500 text-charcoal-950 font-bold px-6 py-3.5 rounded-none text-xs transition-all duration-300 hover:bg-gold-600 cursor-pointer uppercase tracking-widest whitespace-nowrap"
                >
                  {language === 'en' ? 'Subscribe' : 'اشترك الآن'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
