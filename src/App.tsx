import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import BookingForm from './components/BookingForm';
import Contact from './components/Contact';
import FAQ from './components/FAQ';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [language, setLanguage] = useState<'en' | 'ar'>('en');
  const [selectedServiceId, setSelectedServiceId] = useState<string>('');

  // Handle Dark Mode configuration globally
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      document.body.style.backgroundColor = '#0a0a0a';
      document.body.style.color = '#f6f6f6';
    } else {
      document.documentElement.classList.remove('dark');
      document.body.style.backgroundColor = '#faf9f6'; // Luxurious soft cream-white
      document.body.style.color = '#0a0a0a';
    }
  }, [isDarkMode]);

  // Smooth scroll handler
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Triggered when a guest clicks "Book Now" on a service card
  const handleBookService = (serviceId: string) => {
    setSelectedServiceId(serviceId);
    scrollToSection('booking');
  };

  return (
    <div
      id="albinia-salon-app"
      className={`min-h-screen font-sans ${isDarkMode ? 'dark text-white' : 'text-charcoal-900'}`}
      dir={language === 'ar' ? 'rtl' : 'ltr'}
    >
      {/* Navigation */}
      <Navbar
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        language={language}
        setLanguage={setLanguage}
        scrollToSection={scrollToSection}
      />

      {/* Hero Section */}
      <Hero language={language} scrollToSection={scrollToSection} />

      {/* About Us Section */}
      <About
        language={language}
        isDarkMode={isDarkMode}
        scrollToSection={scrollToSection}
      />

      {/* Services Section */}
      <Services
        language={language}
        isDarkMode={isDarkMode}
        onBookService={handleBookService}
      />

      {/* Why Choose Us Section */}
      <WhyChooseUs language={language} isDarkMode={isDarkMode} />

      {/* Visual Gallery with Lightbox */}
      <Gallery language={language} isDarkMode={isDarkMode} />

      {/* Client Reviews & Testimonials Slider */}
      <Reviews language={language} isDarkMode={isDarkMode} />

      {/* Appointment Booking Panel */}
      <BookingForm
        language={language}
        isDarkMode={isDarkMode}
        selectedServiceId={selectedServiceId}
        setSelectedServiceId={setSelectedServiceId}
      />

      {/* Contact, Map, Hours */}
      <Contact language={language} isDarkMode={isDarkMode} />

      {/* FAQ Accordions */}
      <FAQ language={language} isDarkMode={isDarkMode} />

      {/* Elite Newsletter Club */}
      <Newsletter language={language} isDarkMode={isDarkMode} />

      {/* Complete Footer */}
      <Footer
        language={language}
        isDarkMode={isDarkMode}
        scrollToSection={scrollToSection}
      />

      {/* Floating Buttons: WhatsApp, Book Now, Back to Top */}
      <FloatingButtons language={language} scrollToSection={scrollToSection} />
    </div>
  );
}
