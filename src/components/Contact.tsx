import { Sparkles, MapPin, Phone, Clock, Compass, MessageSquare } from 'lucide-react';

interface ContactProps {
  language: 'en' | 'ar';
  isDarkMode: boolean;
}

export default function Contact({ language, isDarkMode }: ContactProps) {
  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3625.549216067756!2d46.70773827606784!3d24.67389275266854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f0367bf611df9%3A0xc33b8b64e83fdf08!2sLulu%20Hypermarket%20-%20Riyadh%20Avenue%20Mall!5e0!3m2!1sen!2ssa!4v1720330000000!5m2!1sen!2ssa";
  const directionsUrl = "https://maps.app.goo.gl/B9WqXW3Q6NpxH8S2A";
  const phoneNumber = "0550168253";
  const phoneDisplay = "055 016 8253";
  const whatsappUrl = `https://wa.me/966550168253?text=Hello%20Albinia%20Salon,%20I%20would%20like%20to%20inquire%20about%20your%20grooming%20services%20and%20book%20an%20appointment.`;

  return (
    <section
      id="contact"
      className={`py-24 transition-colors duration-300 ${
        isDarkMode ? 'bg-charcoal-950 text-white' : 'bg-charcoal-50 text-charcoal-900'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-[0.25em] text-gold-500 uppercase mb-3 font-heading flex items-center justify-center space-x-1.5">
            <Sparkles className="h-4 w-4 text-gold-500" />
            <span>{language === 'en' ? 'LOCATION & DIRECTIONS' : 'اتصل بنا وموقعنا'}</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-sans font-light tracking-tight mb-4 text-white">
            {language === 'en' ? (
              <>
                Visit <span className="text-gold-500 font-normal">Albinia Salon</span>
              </>
            ) : (
              <>
                تفضل بزيارة <span className="text-gold-500 font-normal">صالون ألبينيا</span>
              </>
            )}
          </h2>
          <p className={`text-xs sm:text-sm font-light leading-relaxed ${isDarkMode ? 'text-charcoal-300' : 'text-charcoal-600'}`}>
            {language === 'en'
              ? 'Conveniently located inside LuLu Hypermarket – Riyadh Avenue Mall in Al Murabba. Ample basement and ground parking is available.'
              : 'موقعنا متميز داخل لولو هايبر ماركت – الرياض أفينيو مول في حي المربع. تتوفر مواقف سيارات واسعة في الطابق الأرضي والقبو.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Details Card */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div
              className={`p-8 rounded-none border h-full flex flex-col justify-between space-y-8 ${
                isDarkMode
                  ? 'bg-white/[0.01] border-white/5 shadow-none'
                  : 'bg-white border-charcoal-200'
              }`}
            >
              <div className="space-y-6">
                <h3 className="text-lg font-heading font-semibold text-gold-500">
                  {language === 'en' ? 'Contact Details' : 'تفاصيل الاتصال'}
                </h3>
                
                {/* Address */}
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-white/[0.01] text-gold-500 rounded-none border border-white/5 shrink-0 mt-1">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-heading font-medium text-xs uppercase tracking-wider text-charcoal-400">{language === 'en' ? 'Address' : 'العنوان'}</h4>
                    <p className={`text-xs leading-relaxed mt-1.5 ${isDarkMode ? 'text-charcoal-300' : 'text-charcoal-600'}`}>
                      {language === 'en'
                        ? 'King Faisal Road, Al Murabba, LuLu Hypermarket – Riyadh Avenue Mall, Riyadh, Saudi Arabia'
                        : 'طريق الملك فيصل، حي المربع، لولو هايبر ماركت - الرياض أفينيو مول، الرياض، المملكة العربية السعودية'}
                    </p>
                  </div>
                </div>

                {/* Telephone */}
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-white/[0.01] text-gold-500 rounded-none border border-white/5 shrink-0 mt-1">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-heading font-medium text-xs uppercase tracking-wider text-charcoal-400">{language === 'en' ? 'Phone Number' : 'رقم الهاتف'}</h4>
                    <p className="text-xl font-sans font-light text-white mt-1.5">
                      <a href={`tel:${phoneNumber}`} className="hover:text-gold-500 transition-colors">
                        {phoneDisplay}
                      </a>
                    </p>
                    <p className="text-[10px] text-charcoal-400 mt-0.5">
                      {language === 'en' ? 'Call us to book directly' : 'اتصل بنا للحجز المباشر والسريع'}
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-white/[0.01] text-gold-500 rounded-none border border-white/5 shrink-0 mt-1">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-heading font-medium text-xs uppercase tracking-wider text-charcoal-400">{language === 'en' ? 'Business Hours' : 'ساعات العمل'}</h4>
                    <p className="text-xs font-light text-white mt-1.5">
                      {language === 'en' ? 'Open Daily: 10:00 AM – 11:00 PM' : 'مفتوح يومياً: 10:00 صباحاً – 11:00 مساءً'}
                    </p>
                    <p className="text-[10px] text-charcoal-400 mt-0.5">
                      {language === 'en' ? 'Including weekends and public holidays' : 'بما في ذلك عطلات نهاية الأسبوع والأعياد'}
                    </p>
                  </div>
                </div>
              </div>

              {/* Instant Call / Social CTAs */}
              <div className="pt-6 border-t border-white/5 grid grid-cols-2 gap-4">
                <a
                  id="contact-call-btn"
                  href={`tel:${phoneNumber}`}
                  className="bg-gold-500 text-charcoal-950 font-bold py-3.5 px-4 rounded-none text-xs transition-all duration-300 text-center flex items-center justify-center space-x-2 uppercase tracking-widest"
                >
                  <Phone className="h-4 w-4 text-charcoal-950" />
                  <span>{language === 'en' ? 'Call Now' : 'اتصل الآن'}</span>
                </a>

                <a
                  id="contact-whatsapp-btn"
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-transparent border border-green-500/30 text-green-400 hover:bg-green-500/10 font-bold py-3.5 px-4 rounded-none text-xs transition-all duration-300 text-center flex items-center justify-center space-x-2 uppercase tracking-widest"
                >
                  <MessageSquare className="h-4 w-4" />
                  <span>{language === 'en' ? 'WhatsApp' : 'واتساب'}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Map & Direction Actions */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div
              className={`p-6 rounded-none border h-full flex flex-col justify-between space-y-6 ${
                isDarkMode
                  ? 'bg-white/[0.01] border-white/5 shadow-none'
                  : 'bg-white border-charcoal-200'
              }`}
            >
              {/* Google Map IFrame */}
              <div className="relative w-full h-[320px] rounded-none overflow-hidden border border-white/5 bg-charcoal-950">
                <iframe
                  title="Albinia Salon Google Map"
                  src={mapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 grayscale contrast-125 opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                />
              </div>

              {/* Get Directions Button */}
              <a
                id="contact-directions-btn"
                href={directionsUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full bg-gold-500 text-charcoal-950 font-bold py-4 rounded-none text-xs transition-all duration-300 text-center flex items-center justify-center space-x-2 uppercase tracking-widest"
              >
                <Compass className="h-4 w-4 text-charcoal-950" />
                <span>{language === 'en' ? 'Get Directions on Google Maps' : 'احصل على الاتجاهات على خرائط جوجل'}</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
