import { useState, useEffect, FormEvent } from 'react';
import { SERVICES, Appointment } from '../types';
import { Calendar, User, Phone, Mail, Clock, FileText, Sparkles, CheckCircle2, Trash2 } from 'lucide-react';

interface BookingFormProps {
  language: 'en' | 'ar';
  isDarkMode: boolean;
  selectedServiceId: string;
  setSelectedServiceId: (val: string) => void;
}

export default function BookingForm({
  language,
  isDarkMode,
  selectedServiceId,
  setSelectedServiceId,
}: BookingFormProps) {
  // Form State
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [barber, setBarber] = useState('Any Barber');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [notes, setNotes] = useState('');

  // Error & Confirmation State
  const [error, setError] = useState('');
  const [successBooking, setSuccessBooking] = useState<Appointment | null>(null);
  const [myBookings, setMyBookings] = useState<Appointment[]>([]);

  // Load existing bookings from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('albinia_appointments');
    if (saved) {
      try {
        setMyBookings(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to load appointments', e);
      }
    }
  }, []);

  const saveBookings = (bookings: Appointment[]) => {
    setMyBookings(bookings);
    localStorage.setItem('albinia_appointments', JSON.stringify(bookings));
  };

  const clearForm = () => {
    setFullName('');
    setPhoneNumber('');
    setEmail('');
    setBarber('Any Barber');
    setDate('');
    setTime('');
    setNotes('');
    setError('');
  };

  const handleBookingSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError('');

    // Validations
    if (!fullName.trim()) {
      setError(language === 'en' ? 'Please enter your full name.' : 'يرجى إدخال الاسم الكامل.');
      return;
    }
    
    // Saudi Mobile Validator: matches 05xxxxxxxx, 9665xxxxxxxx, +9665xxxxxxxx, etc.
    const saudiMobileRegex = /^(05|5|\+9665|9665)\d{8}$/;
    if (!saudiMobileRegex.test(phoneNumber.replace(/\s+/g, ''))) {
      setError(
        language === 'en'
          ? 'Please enter a valid Saudi phone number starting with 05.'
          : 'يرجى إدخال رقم جوال سعودي صحيح يبدأ بـ 05.'
      );
      return;
    }

    if (!email.trim() || !email.includes('@')) {
      setError(language === 'en' ? 'Please enter a valid email address.' : 'يرجى إدخال بريد إلكتروني صحيح.');
      return;
    }

    if (!selectedServiceId) {
      setError(language === 'en' ? 'Please select a grooming service.' : 'يرجى اختيار الخدمة المطلوبة.');
      return;
    }

    if (!date) {
      setError(language === 'en' ? 'Please choose your preferred date.' : 'يرجى اختيار التاريخ المفضل.');
      return;
    }

    if (!time) {
      setError(language === 'en' ? 'Please choose your preferred time.' : 'يرجى اختيار الوقت المفضل.');
      return;
    }

    // Generate unique confirmation code
    const uniqueId = `ALB-${Math.floor(100000 + Math.random() * 900000)}`;

    const newAppointment: Appointment = {
      id: uniqueId,
      fullName: fullName.trim(),
      phoneNumber: phoneNumber.trim(),
      email: email.trim(),
      serviceId: selectedServiceId,
      barberPreference: barber,
      preferredDate: date,
      preferredTime: time,
      notes: notes.trim(),
      status: 'confirmed', // Real-time confirmed
      createdAt: new Date().toISOString()
    };

    const updatedBookings = [newAppointment, ...myBookings];
    saveBookings(updatedBookings);
    setSuccessBooking(newAppointment);
    clearForm();
  };

  const handleCancelBooking = (bookingId: string) => {
    const updated = myBookings.filter(b => b.id !== bookingId);
    saveBookings(updated);
  };

  const getServiceName = (id: string) => {
    const serv = SERVICES.find(s => s.id === id);
    if (!serv) return id;
    return language === 'en' ? serv.name : serv.arabicName;
  };

  const getServicePrice = (id: string) => {
    const serv = SERVICES.find(s => s.id === id);
    return serv ? `${serv.price} SAR` : '';
  };

  // Generate date parameters (Today or future dates only)
  const todayStr = new Date().toISOString().split('T')[0];

  // Generate 30 minute time intervals (10:00 AM to 11:00 PM)
  const timeSlots = [
    '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM',
    '01:00 PM', '01:30 PM', '02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM',
    '04:00 PM', '04:30 PM', '05:00 PM', '05:30 PM', '06:00 PM', '06:30 PM',
    '07:00 PM', '07:30 PM', '08:00 PM', '08:30 PM', '09:00 PM', '09:30 PM',
    '10:00 PM', '10:30 PM'
  ];

  const barbers = [
    { name: 'Any Barber', desc: 'Best Available', arDesc: 'الحلاق المتاح تلقائياً' },
    { name: 'Ahmad', desc: 'Senior Stylist & Fade Master', arDesc: 'خبير قصات شعر وتدرج' },
    { name: 'Tareq', desc: 'Kids Hair Specialist', arDesc: 'أخصائي التعامل مع الأطفال' },
    { name: 'Bilal', desc: 'Beard Design & Shave Artist', arDesc: 'أخصائي حلاقة وتصفيف لحية' },
    { name: 'Sameer', desc: 'Nail Care & Spa Expert', arDesc: 'خبير العناية بالبشرة والأظافر' }
  ];

  return (
    <section
      id="booking"
      className={`py-24 transition-colors duration-300 ${
        isDarkMode ? 'bg-charcoal-950 text-white' : 'bg-white text-charcoal-900'
      }`}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-[0.25em] text-gold-500 uppercase mb-3 font-heading flex items-center justify-center space-x-1.5">
            <Sparkles className="h-4 w-4 text-gold-500" />
            <span>{language === 'en' ? 'INSTANT RESERVATION' : 'حجز فوري ومؤكد'}</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-sans font-light tracking-tight mb-4 text-white">
            {language === 'en' ? (
              <>
                Book Your <span className="text-gold-500 font-normal">Luxury Session</span>
              </>
            ) : (
              <>
                احجز <span className="text-gold-500 font-normal">جلستك الفاخرة</span> الآن
              </>
            )}
          </h2>
          <p className={`text-xs sm:text-sm font-light leading-relaxed ${isDarkMode ? 'text-charcoal-300' : 'text-charcoal-600'}`}>
            {language === 'en'
              ? 'Schedule your elite appointment in minutes. Receive instant confirmation and skip waiting lines at Riyadh Avenue Mall.'
              : 'جدول موعدك المتميز في دقائق. احصل على تأكيد فوري وتخطى طوابير الانتظار في الرياض أفينيو مول.'}
          </p>
        </div>

        {/* Success Modal overlay style card */}
        {successBooking && (
          <div
            id="booking-receipt-card"
            className="mb-12 p-8 rounded-none border border-gold-500/20 bg-charcoal-900 text-white relative overflow-hidden shadow-2xl"
          >
            {/* Glowing top ribbon */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gold-500" />
            
            <div className="flex items-start space-x-4 mb-6">
              <div className="p-3 bg-gold-500/10 text-gold-500 rounded-none border border-gold-500/20">
                <CheckCircle2 className="h-6 w-6 text-gold-500" />
              </div>
              <div>
                <h3 className="text-xl font-heading font-medium text-gold-500">
                  {language === 'en' ? 'Appointment Confirmed!' : 'تم تأكيد الحجز بنجاح!'}
                </h3>
                <p className="text-[11px] text-charcoal-300 mt-1 font-light">
                  {language === 'en'
                    ? 'Your booking is registered in our database. We look forward to welcoming you.'
                    : 'لقد تم تسجيل موعدك في قاعدة بياناتنا. نتطلع للترحيب بك.'}
                </p>
              </div>
            </div>

            {/* Receipt Table */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-white/[0.01] p-6 rounded-none border border-white/5 mb-6 text-xs">
              <div>
                <p className="text-charcoal-400 text-[10px] uppercase font-bold tracking-wider">{language === 'en' ? 'Receipt ID' : 'رقم الحجز'}</p>
                <p className="text-gold-500 font-bold mt-0.5">{successBooking.id}</p>
              </div>
              <div>
                <p className="text-charcoal-400 text-[10px] uppercase font-bold tracking-wider">{language === 'en' ? 'Guest Name' : 'اسم الضيف'}</p>
                <p className="font-semibold text-white mt-0.5">{successBooking.fullName}</p>
              </div>
              <div>
                <p className="text-charcoal-400 text-[10px] uppercase font-bold tracking-wider">{language === 'en' ? 'Service Selected' : 'الخدمة المطلوبة'}</p>
                <p className="font-semibold text-white mt-0.5">{getServiceName(successBooking.serviceId)}</p>
              </div>
              <div>
                <p className="text-charcoal-400 text-[10px] uppercase font-bold tracking-wider">{language === 'en' ? 'Price Estimate' : 'السعر المتوقع'}</p>
                <p className="font-semibold text-gold-500 mt-0.5">{getServicePrice(successBooking.serviceId)}</p>
              </div>
              <div>
                <p className="text-charcoal-400 text-[10px] uppercase font-bold tracking-wider">{language === 'en' ? 'Assigned Barber' : 'الحلاق المفضل'}</p>
                <p className="font-semibold text-white mt-0.5">{successBooking.barberPreference}</p>
              </div>
              <div>
                <p className="text-charcoal-400 text-[10px] uppercase font-bold tracking-wider">{language === 'en' ? 'Date & Time' : 'التاريخ والوقت'}</p>
                <p className="font-semibold text-white mt-0.5">{successBooking.preferredDate} • {successBooking.preferredTime}</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] text-charcoal-400 pt-4 border-t border-white/5">
              <p>📍 {language === 'en' ? 'LuLu Mall, Al Murabba, Riyadh' : 'لولو مول، المربع، الرياض'}</p>
              <button
                id="receipt-close"
                onClick={() => setSuccessBooking(null)}
                className="bg-gold-500 text-charcoal-950 font-bold px-6 py-2.5 rounded-none cursor-pointer hover:bg-gold-400 transition-colors uppercase tracking-widest text-[10px]"
              >
                {language === 'en' ? 'Book Another Session' : 'حجز موعد جديد'}
              </button>
            </div>
          </div>
        )}

        {/* Booking Form Layout */}
        <div
          id="appointment-booking-card"
          className={`p-8 sm:p-12 rounded-none border ${
            isDarkMode
              ? 'bg-white/[0.01] border-white/5 shadow-none'
              : 'bg-charcoal-50 border-charcoal-200'
          }`}
        >
          {error && (
            <div id="booking-error-banner" className="mb-6 p-4 rounded-none bg-red-500/10 border border-red-500/20 text-red-400 text-xs tracking-wider">
              ⚠️ {error}
            </div>
          )}

          <form onSubmit={handleBookingSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Name */}
              <div id="field-name">
                <label className="block text-[10px] font-bold uppercase tracking-widest text-gold-500 mb-2 font-heading">
                  {language === 'en' ? 'Full Name' : 'الاسم بالكامل'} *
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-charcoal-400" />
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder={language === 'en' ? 'e.g. Abdulrahman Al-Sudais' : 'مثال: عبد الرحمن السديس'}
                    className={`w-full pl-12 pr-4 py-3.5 rounded-none border text-xs transition-all outline-none ${
                      isDarkMode
                        ? 'bg-transparent border-white/10 text-white placeholder-charcoal-600 focus:border-gold-500'
                        : 'bg-white border-charcoal-200 text-charcoal-900 placeholder-charcoal-400 focus:border-gold-500'
                    }`}
                  />
                </div>
              </div>

              {/* Phone */}
              <div id="field-phone">
                <label className="block text-[10px] font-bold uppercase tracking-widest text-gold-500 mb-2 font-heading">
                  {language === 'en' ? 'Saudi Phone Number' : 'رقم الجوال السعودي'} *
                </label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-charcoal-400" />
                  <input
                    type="tel"
                    required
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder={language === 'en' ? 'e.g. 055 016 8253' : 'مثال: 0550168253'}
                    className={`w-full pl-12 pr-4 py-3.5 rounded-none border text-xs transition-all outline-none ${
                      isDarkMode
                        ? 'bg-transparent border-white/10 text-white placeholder-charcoal-600 focus:border-gold-500'
                        : 'bg-white border-charcoal-200 text-charcoal-900 placeholder-charcoal-400 focus:border-gold-500'
                    }`}
                  />
                </div>
              </div>

              {/* Email */}
              <div id="field-email">
                <label className="block text-[10px] font-bold uppercase tracking-widest text-gold-500 mb-2 font-heading">
                  {language === 'en' ? 'Email Address' : 'البريد الإلكتروني'} *
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-charcoal-400" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={language === 'en' ? 'e.g. abdulrahman@example.com' : 'مثال: abdulrahman@example.com'}
                    className={`w-full pl-12 pr-4 py-3.5 rounded-none border text-xs transition-all outline-none ${
                      isDarkMode
                        ? 'bg-transparent border-white/10 text-white placeholder-charcoal-600 focus:border-gold-500'
                        : 'bg-white border-charcoal-200 text-charcoal-900 placeholder-charcoal-400 focus:border-gold-500'
                    }`}
                  />
                </div>
              </div>

              {/* Service Selection */}
              <div id="field-service">
                <label className="block text-[10px] font-bold uppercase tracking-widest text-gold-500 mb-2 font-heading">
                  {language === 'en' ? 'Service Required' : 'الخدمة المطلوبة'} *
                </label>
                <div className="relative">
                  <select
                    value={selectedServiceId}
                    onChange={(e) => setSelectedServiceId(e.target.value)}
                    required
                    className={`w-full px-4 py-3.5 rounded-none border text-xs outline-none appearance-none cursor-pointer ${
                      isDarkMode
                        ? 'bg-charcoal-950 border-white/10 text-white focus:border-gold-500'
                        : 'bg-white border-charcoal-200 text-charcoal-900 focus:border-gold-500'
                    }`}
                  >
                    <option value="">{language === 'en' ? '-- Select a Service --' : '-- اختر خدمة صالون --'}</option>
                    
                    {/* Groups */}
                    <optgroup label={language === 'en' ? 'Hair Services' : 'خدمات الشعر واللحية'}>
                      {SERVICES.filter(s => s.category === 'hair').map(s => (
                        <option key={s.id} value={s.id}>
                          {language === 'en' ? `${s.name} (${s.price} SAR)` : `${s.arabicName} (${s.price} ريال)`}
                        </option>
                      ))}
                    </optgroup>

                    <optgroup label={language === 'en' ? 'Grooming & Spas' : 'العناية بالبشرة والسبا'}>
                      {SERVICES.filter(s => s.category === 'grooming').map(s => (
                        <option key={s.id} value={s.id}>
                          {language === 'en' ? `${s.name} (${s.price} SAR)` : `${s.arabicName} (${s.price} ريال)`}
                        </option>
                      ))}
                    </optgroup>

                    <optgroup label={language === 'en' ? 'Hand & Foot Care' : 'العناية باليد والقدمين'}>
                      {SERVICES.filter(s => s.category === 'nails').map(s => (
                        <option key={s.id} value={s.id}>
                          {language === 'en' ? `${s.name} (${s.price} SAR)` : `${s.arabicName} (${s.price} ريال)`}
                        </option>
                      ))}
                    </optgroup>
                  </select>
                </div>
              </div>

              {/* Barber Preference */}
              <div id="field-barber">
                <label className="block text-[10px] font-bold uppercase tracking-widest text-gold-500 mb-2 font-heading">
                  {language === 'en' ? 'Barber Preference (Optional)' : 'الحلاق المفضل (اختياري)'}
                </label>
                <div className="relative">
                  <select
                    value={barber}
                    onChange={(e) => setBarber(e.target.value)}
                    className={`w-full px-4 py-3.5 rounded-none border text-xs outline-none appearance-none cursor-pointer ${
                      isDarkMode
                        ? 'bg-charcoal-950 border-white/10 text-white focus:border-gold-500'
                        : 'bg-white border-charcoal-200 text-charcoal-900 focus:border-gold-500'
                    }`}
                  >
                    {barbers.map((b) => (
                      <option key={b.name} value={b.name}>
                        {b.name === 'Any Barber'
                          ? language === 'en'
                            ? b.name
                            : 'أي حلاق متاح'
                          : language === 'en'
                            ? `Barber ${b.name} (${b.desc})`
                            : `الحلاق ${b.name} (${b.arDesc})`}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Preferred Date */}
              <div id="field-date">
                <label className="block text-[10px] font-bold uppercase tracking-widest text-gold-500 mb-2 font-heading">
                  {language === 'en' ? 'Preferred Date' : 'تاريخ الحجز المطلوب'} *
                </label>
                <div className="relative">
                  <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-charcoal-400 pointer-events-none" />
                  <input
                    type="date"
                    required
                    min={todayStr}
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className={`w-full pl-12 pr-4 py-3.5 rounded-none border text-xs transition-all outline-none cursor-pointer ${
                      isDarkMode
                        ? 'bg-transparent border-white/10 text-white focus:border-gold-500'
                        : 'bg-white border-charcoal-200 text-charcoal-900 focus:border-gold-500'
                    }`}
                  />
                </div>
              </div>

              {/* Preferred Time */}
              <div id="field-time">
                <label className="block text-[10px] font-bold uppercase tracking-widest text-gold-500 mb-2 font-heading">
                  {language === 'en' ? 'Preferred Time Slot' : 'الوقت المفضل'} *
                </label>
                <div className="relative">
                  <Clock className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-charcoal-400 pointer-events-none" />
                  <select
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    required
                    className={`w-full pl-12 pr-4 py-3.5 rounded-none border text-xs outline-none appearance-none cursor-pointer ${
                      isDarkMode
                        ? 'bg-charcoal-950 border-white/10 text-white focus:border-gold-500'
                        : 'bg-white border-charcoal-200 text-charcoal-900 focus:border-gold-500'
                    }`}
                  >
                    <option value="">{language === 'en' ? '-- Select a Time Slot --' : '-- اختر ساعة الحجز --'}</option>
                    {timeSlots.map((ts) => (
                      <option key={ts} value={ts}>
                        {ts}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

            </div>

            {/* Custom Notes */}
            <div id="field-notes">
              <label className="block text-[10px] font-bold uppercase tracking-widest text-gold-500 mb-2 font-heading">
                {language === 'en' ? 'Special Instructions / Notes (Optional)' : 'ملاحظات وتوجيهات خاصة (اختياري)'}
              </label>
              <div className="relative">
                <FileText className="absolute left-4 top-4 h-4 w-4 text-charcoal-400" />
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  rows={3}
                  placeholder={
                    language === 'en'
                      ? 'e.g. Any special request, hair length preference, or children instructions.'
                      : 'مثال: أي طلبات خاصة، أو إرشادات معينة للتعامل مع الطفل.'
                  }
                  className={`w-full pl-12 pr-4 py-3.5 rounded-none border text-xs transition-all outline-none ${
                    isDarkMode
                      ? 'bg-transparent border-white/10 text-white placeholder-charcoal-600 focus:border-gold-500'
                      : 'bg-white border-charcoal-200 text-charcoal-900 placeholder-charcoal-400 focus:border-gold-500'
                  }`}
                />
              </div>
            </div>

            {/* Book Button */}
            <button
              id="booking-form-submit"
              type="submit"
              className="w-full bg-gold-500 text-charcoal-950 font-bold py-4 rounded-none hover:bg-gold-600 transition-all duration-300 flex items-center justify-center space-x-2.5 cursor-pointer text-xs uppercase tracking-widest font-heading"
            >
              <span>{language === 'en' ? 'Confirm Appointment Booking' : 'تأكيد حجز الموعد الفاخر'}</span>
            </button>
          </form>
        </div>

        {/* Local Bookings Dashboard (Highly Premium Feature) */}
        {myBookings.length > 0 && (
          <div
            id="my-bookings-dashboard"
            className={`mt-16 p-8 rounded-none border ${
              isDarkMode ? 'bg-white/[0.01] border-white/5' : 'bg-charcoal-50 border-charcoal-200'
            }`}
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <h3 className="text-lg font-heading font-semibold text-gold-500">
                  {language === 'en' ? 'My Active Bookings' : 'حجوزاتي النشطة'}
                </h3>
                <p className="text-[11px] font-light text-charcoal-400 mt-1">
                  {language === 'en'
                    ? 'Review, track, or cancel your upcoming scheduled slots at Riyadh Avenue Mall.'
                    : 'استعرض أو تتبع أو ألغِ مواعيدك القادمة المجدولة في الرياض أفينيو مول.'}
                </p>
              </div>
              <span className="self-start sm:self-center text-[9px] uppercase font-bold bg-gold-500/10 border border-gold-500/20 px-3 py-1.5 rounded-none text-gold-300">
                {myBookings.length} {language === 'en' ? 'Active' : 'نشط'}
              </span>
            </div>

            <div className="space-y-4 max-h-[350px] overflow-y-auto pr-2">
              {myBookings.map((bk) => (
                <div
                  key={bk.id}
                  id={`my-booking-card-${bk.id}`}
                  className={`p-5 rounded-none border flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 transition-all ${
                    isDarkMode
                      ? 'bg-charcoal-950 border-white/5 hover:border-gold-500/20'
                      : 'bg-white border-charcoal-200 hover:border-gold-500'
                  }`}
                >
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <span className="text-gold-500 font-bold text-xs">{bk.id}</span>
                      <span className="w-1 h-1 rounded-none bg-green-500 animate-ping" />
                      <span className="text-[9px] text-green-500 font-semibold uppercase">{language === 'en' ? 'Confirmed' : 'مؤكد'}</span>
                    </div>
                    <h4 className="font-bold text-xs text-white/90">
                      {getServiceName(bk.serviceId)}
                    </h4>
                    <p className="text-[11px] text-charcoal-400 font-light">
                      📅 {bk.preferredDate} • ⏰ {bk.preferredTime}
                    </p>
                    <p className="text-[11px] text-charcoal-400 font-light">
                      👤 {language === 'en' ? `Barber: ${bk.barberPreference}` : `الحلاق: ${bk.barberPreference}`}
                    </p>
                  </div>
                  
                  <button
                    id={`cancel-booking-${bk.id}`}
                    onClick={() => handleCancelBooking(bk.id)}
                    className="p-2.5 text-red-500 hover:bg-red-500/5 rounded-none border border-transparent hover:border-red-500/10 transition-all flex items-center space-x-1.5 text-[10px] font-bold uppercase tracking-wider self-end sm:self-center cursor-pointer"
                  >
                    <Trash2 className="h-3.5 w-3.5" />
                    <span>{language === 'en' ? 'Cancel' : 'إلغاء'}</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
