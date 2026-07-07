export interface Service {
  id: string;
  name: string;
  arabicName: string;
  category: 'hair' | 'grooming' | 'nails';
  price: number; // in SAR
  duration: number; // in minutes
  description: string;
  arabicDescription: string;
  image: string;
}

export interface Review {
  id: string;
  name: string;
  avatar?: string;
  rating: number;
  text: string;
  arabicText: string;
  date: string;
}

export interface Appointment {
  id: string;
  fullName: string;
  phoneNumber: string;
  email: string;
  serviceId: string;
  barberPreference: string;
  preferredDate: string;
  preferredTime: string;
  notes?: string;
  status: 'pending' | 'confirmed' | 'cancelled';
  createdAt: string;
}

export interface FAQItem {
  question: string;
  arabicQuestion: string;
  answer: string;
  arabicAnswer: string;
}

export const SERVICES: Service[] = [
  // Hair Services
  {
    id: 'classic-haircut',
    name: 'Classic Haircut',
    arabicName: 'قصة شعر كلاسيكية',
    category: 'hair',
    price: 45,
    duration: 30,
    description: 'A traditional and timeless haircut tailored to your head shape and personal style preference.',
    arabicDescription: 'قصة شعر تقليدية وخالدة مصممة خصيصًا لتناسب شكل رأسك وأسلوبك الشخصي.',
    image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'modern-haircut',
    name: 'Modern Haircut',
    arabicName: 'قصة شعر عصرية',
    category: 'hair',
    price: 55,
    duration: 40,
    description: 'Latest trendy haircuts including pompadour, undercut, or textured styles based on current trends.',
    arabicDescription: 'أحدث قصات الشعر العصرية بما في ذلك البومبادور أو الأندركت أو الأنماط المزخرفة بناءً على الصيحات الحالية.',
    image: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'kids-haircut',
    name: 'Kids Haircut',
    arabicName: 'قص شعر للأطفال',
    category: 'hair',
    price: 35,
    duration: 30,
    description: 'Fun, gentle, and stylish haircuts for kids in a comfortable and child-friendly environment.',
    arabicDescription: 'قصات شعر ممتعة ولطيفة وأنيقة للأطفال في بيئة مريحة ومناسبة للطفل.',
    image: '/src/assets/images/kids_haircut_1783416632721.jpg'
  },
  {
    id: 'fade-haircut',
    name: 'Fade Haircut',
    arabicName: 'قصة شعر تدرج (فيت)',
    category: 'hair',
    price: 60,
    duration: 45,
    description: 'Precision skin fade, drop fade, or taper fade crafted by our master barbers.',
    arabicDescription: 'تدرج دقيق للبشرة (سكين فيد) أو دروب فيد أو تيبر فيد مصنوع بأيدي حلاقين محترفين.',
    image: 'https://images.unsplash.com/photo-1599351431247-f50940f06ed6?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'beard-trim',
    name: 'Beard Trim',
    arabicName: 'تشذيب اللحية',
    category: 'hair',
    price: 30,
    duration: 20,
    description: 'Quick beard shape-up and line clean-up to keep your facial hair looking sharp.',
    arabicDescription: 'تحديد سريع وشحذ لخطوط اللحية للحفاظ على مظهر حاد ولائق لشعر وجهك.',
    image: '/src/assets/images/mens_styling_1783416645578.jpg'
  },
  {
    id: 'beard-styling',
    name: 'Beard Styling',
    arabicName: 'تصفيف وتحديد اللحية',
    category: 'hair',
    price: 45,
    duration: 30,
    description: 'Luxury hot towel beard shave, shape, and grooming with premium beard oil.',
    arabicDescription: 'حلاقة لحية فاخرة بالمنشفة الساخنة وتشكيلها وتزيينها بزيت اللحية الفاخر.',
    image: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'hair-wash',
    name: 'Hair Wash & Styling',
    arabicName: 'غسيل وتصفيف الشعر',
    category: 'hair',
    price: 20,
    duration: 15,
    description: 'Refreshing wash with nourishing shampoo followed by blow dry and premium hair wax/clay.',
    arabicDescription: 'غسيل منعش بشامبو مغذٍ متبوعًا بالتجفيف بالسيشوار واستخدام واكس أو كريم شعر فاخر.',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'hair-coloring',
    name: 'Hair & Beard Coloring',
    arabicName: 'تلوين الشعر واللحية',
    category: 'hair',
    price: 80,
    duration: 50,
    description: 'Professional color application or grey coverage for hair and beard using skin-safe organic dye.',
    arabicDescription: 'تطبيق احترافي للون أو تغطية الشيب للشعر واللحية باستخدام صبغة عضوية آمنة على البشرة.',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'hair-treatment',
    name: 'Hair Keratin Treatment',
    arabicName: 'علاج الشعر بالكيراتين',
    category: 'hair',
    price: 150,
    duration: 60,
    description: 'Smoothens, hydrates, and strengthens frizzy or damaged hair with premium protein formula.',
    arabicDescription: 'ينعم ويرطب ويقوي الشعر المجعد أو التالف بتركيبة البروتين الفاخرة.',
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=600'
  },

  // Grooming Services
  {
    id: 'facial-treatment',
    name: 'Facial Treatment & Spa',
    arabicName: 'علاج الوجه والسبا',
    category: 'grooming',
    price: 90,
    duration: 40,
    description: 'Complete multi-step facial with exfoliating scrub, pore extraction, mask, and moisturization.',
    arabicDescription: 'عناية كاملة للوجه متعددة الخطوات مع تقشير واستخراج الرؤوس السوداء وقناع وترطيب.',
    image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'face-cleanup',
    name: 'Face Clean-up',
    arabicName: 'تنظيف البشرة السريع',
    category: 'grooming',
    price: 50,
    duration: 25,
    description: 'Quick refreshing facial clean-up to remove oil, dust, and impurities with steam and charcoal mask.',
    arabicDescription: 'تنظيف سريع ومنعش للوجه لإزالة الزيوت والأتربة والشوائب بالبخار وقناع الفحم.',
    image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'head-massage',
    name: 'Head Massage (Aroma)',
    arabicName: 'تدليك الرأس (أروما)',
    category: 'grooming',
    price: 40,
    duration: 20,
    description: 'Ultra-relaxing traditional head massage using organic oils to relieve tension and stress.',
    arabicDescription: 'تدليك تقليدي مريح للغاية للرأس باستخدام زيوت عضوية لتخفيف التوتر والإجهاد.',
    image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'hair-spa',
    name: 'Nourishing Hair Spa',
    arabicName: 'سبا الشعر المغذي',
    category: 'grooming',
    price: 75,
    duration: 35,
    description: 'Deep hair conditioning steam session and massage to restore hair shine and scalp health.',
    arabicDescription: 'جلسة بخار وتكييف عميق للشعر وتدليك لاستعادة لمعان الشعر وصحة فروة الرأس.',
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'shaving',
    name: 'Classic Shave',
    arabicName: 'حلاقة كلاسيكية بالشفط',
    category: 'grooming',
    price: 30,
    duration: 20,
    description: 'Smooth straight-razor clean shave with luxurious hot towel and soothing aftershave balm.',
    arabicDescription: 'حلاقة ناعمة ونظيفة بموس الحلاقة المستقيم مع منشفة ساخنة فاخرة وبلسم مهدئ بعد الحلاقة.',
    image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'royal-grooming-package',
    name: 'Albinia Royal Grooming Package',
    arabicName: 'باقة البينيا الملكية',
    category: 'grooming',
    price: 220,
    duration: 120,
    description: 'Premium haircut, beard styling, charcoal facial treatment, pedicure, manicures, and relaxing head massage.',
    arabicDescription: 'قص شعر فاخر، تصفيف لحية، علاج الفحم للوجه، باديكير، مانيكير، وتدليك مريح للرأس.',
    image: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&q=80&w=600'
  },

  // Hand & Foot Care
  {
    id: 'manicure',
    name: 'Premium Manicure',
    arabicName: 'مانيكير ممتاز',
    category: 'nails',
    price: 50,
    duration: 30,
    description: 'Nail shaping, cuticle trimming, exfoliating scrub, and hand massage with deeply hydrating cream.',
    arabicDescription: 'تشكيل الأظافر، تقليم الجلد الزائد، تقشير اليدين، وتدليك اليد بكريم ترطيب عميق.',
    image: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'pedicure',
    name: 'Luxury Pedicure',
    arabicName: 'باديكير فاخر',
    category: 'nails',
    price: 70,
    duration: 40,
    description: 'Relaxing foot soak, nail shaping, callus removal, luxury scrub, and calf/foot massage.',
    arabicDescription: 'نقع القدمين للاسترخاء، تشكيل الأظافر، إزالة الجلد الميت، تقشير فاخر، وتدليك الساق والقدم.',
    image: '/src/assets/images/foot_care_1783416660542.jpg'
  },
  {
    id: 'foot-spa',
    name: 'Foot Spa Treatment',
    arabicName: 'علاج سبا القدمين',
    category: 'nails',
    price: 90,
    duration: 50,
    description: 'A soothing thermal foot bath with Epsom salts, essential oils, intensive skin masking, and massage.',
    arabicDescription: 'حمام قدم حراري مهدئ بأملاح إبسوم والزيوت العطرية، وقناع مكثف للبشرة وتدليك.',
    image: '/src/assets/images/foot_care_1783416660542.jpg'
  },
  {
    id: 'foot-massage',
    name: 'Relaxing Foot Massage',
    arabicName: 'تدليك مريح للقدمين',
    category: 'nails',
    price: 45,
    duration: 30,
    description: 'Concentrated pressure-point foot reflexology massage to stimulate circulation and relieve tiredness.',
    arabicDescription: 'تدليك مركّز لنقاط الضغط الانعكاسية في القدمين لتنشيط الدورة الدموية وتخفيف التعب.',
    image: '/src/assets/images/foot_care_1783416660542.jpg'
  },
  {
    id: 'nail-care',
    name: 'Basic Nail Care',
    arabicName: 'العناية الأساسية بالأظافر',
    category: 'nails',
    price: 30,
    duration: 20,
    description: 'Simple hygienic cleaning, precise nail trimming, buffing, and cuticle hydration for hands or feet.',
    arabicDescription: 'تنظيف صحي بسيط، تقليم أظافر دقيق، تلميع وترطيب الجلد حول الأظافر لليدين أو القدمين.',
    image: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&q=80&w=600'
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'rev-1',
    name: 'Abdulrahman Al-Sudais',
    rating: 5,
    text: 'The best men\'s salon in Riyadh! Professional staff and amazing service. The ambiance is incredibly luxurious and clean.',
    arabicText: 'أفضل صالون رجالي في الرياض! طاقم عمل محترف وخدمة رائعة. الأجواء فاخرة للغاية ونظيفة.',
    date: 'July 5, 2026'
  },
  {
    id: 'rev-2',
    name: 'Fahad Al-Otaibi',
    rating: 5,
    text: 'My son absolutely loves getting his haircut here in the cool car seats. Extremely friendly team and excellent patience with kids.',
    arabicText: 'ابني يحب الحصول على قصة شعره هنا في كراسي السيارات الرائعة. فريق ودود للغاية وصبر ممتاز مع الأطفال.',
    date: 'June 29, 2026'
  },
  {
    id: 'rev-3',
    name: 'Mohammad Al-Sari',
    rating: 5,
    text: 'Very clean salon with experienced barbers. The hot towel shave and facial massage is a must-try after a long week.',
    arabicText: 'صالون نظيف جداً مع حلاقين ذوي خبرة. الحلاقة بالمنشفة الساخنة ومساج الوجه تجربة لابد منها بعد أسبوع طويل.',
    date: 'June 22, 2026'
  },
  {
    id: 'rev-4',
    name: 'Suhail Ahmed',
    rating: 5,
    text: 'I booked the Royal Grooming Package. Exceptional quality, clean equipment, friendly welcome, and highly skilled team. Absolutely worth every Riyal.',
    arabicText: 'لقد حجزت الباقة الملكية. جودة استثنائية، معدات معقمة ونظيفة، ترحيب ودود وفريق ماهر للغاية. يستحق كل ريال.',
    date: 'June 15, 2026'
  }
];

export const FAQS: FAQItem[] = [
  {
    question: 'Do I need an appointment?',
    arabicQuestion: 'هل أحتاج إلى حجز موعد مسبق؟',
    answer: 'While we highly recommend booking an appointment online to secure your preferred slot and skip waiting times, we do welcome walk-in customers.',
    arabicAnswer: 'بينما نوصي بشدة بحجز موعد عبر الإنترنت لضمان وقتك المفضل وتجنب أوقات الانتظار، فإننا نرحب أيضًا بزبائن الحضور المباشر.'
  },
  {
    question: 'Do you accept walk-ins?',
    arabicQuestion: 'هل تقبلون الزوار بدون موعد؟',
    answer: 'Yes, we accept walk-in clients daily. However, there might be a short waiting time during peak evening hours or weekends.',
    arabicAnswer: 'نعم، نستقبل الزوار بدون موعد مسبق يومياً. ومع ذلك، قد يكون هناك وقت انتظار قصير خلال ساعات الذروة المسائية أو عطلات نهاية الأسبوع.'
  },
  {
    question: 'Do you provide kids\' haircuts?',
    arabicQuestion: 'هل تقدمون خدمات قص الشعر للأطفال؟',
    answer: 'Absolutely! We have specialized kids\' haircut stations (including fun car barber chairs) and experienced barbers who are amazing with children.',
    arabicAnswer: 'بالتأكيد! لدينا محطات مخصصة لقص شعر الأطفال (بما في ذلك كراسي السيارات الممتعة) وحلاقون ذوو خبرة رائعة في التعامل مع الأطفال.'
  },
  {
    question: 'What grooming services are available?',
    arabicQuestion: 'ما هي خدمات العناية الشخصية المتاحة؟',
    answer: 'We provide a complete range of grooming services: precision haircuts, beard styling, organic facials, head massages, hair spas, pedicures, manicures, and our comprehensive Royal Grooming Package.',
    arabicAnswer: 'نقدم مجموعة كاملة من خدمات العناية: قصات شعر دقيقة، تصفيف اللحية، علاجات الوجه العضوية، مساج الرأس، سبا الشعر، باديكير، مانيكير، وباقة العناية الملكية الشاملة.'
  },
  {
    question: 'Which payment methods are accepted?',
    arabicQuestion: 'ما هي طرق الدفع المقبولة لديكم؟',
    answer: 'We accept Cash, Mada cards, Visa, Mastercard, Apple Pay, and STC Pay for a seamless payment experience.',
    arabicAnswer: 'نقبل الدفع نقدًا، وبطاقات مدى، وفيزا، وماستركارد، وأبل باي (Apple Pay)، وإس تي سي باي (STC Pay) لتوفير تجربة دفع سلسة.'
  }
];
