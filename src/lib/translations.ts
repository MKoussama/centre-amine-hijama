import { Language } from './types';

export const translations: Record<Language, any> = {
  fr: {
    nav: {
      home: 'Accueil',
      women: 'Section Femmes',
      services: 'Services',
      why: 'Pourquoi Nous',
      contact: 'Contact',
    },
    hero: {
      badge: 'Service de médecine holistique et alternative',
      title: 'Centre Amine Hijama',
      subtitle: 'مركز أمين للحجامة',
      description: 'Découvrez la puissance de la guérison naturelle par la hijama thérapeutique. Votre bien-être est notre priorité.',
      bookButton: 'Réservez votre séance',
      callButton: 'Appelez maintenant',
      locationButton: 'Voir la localisation',
      phone: 'Téléphone',
    },
    women: {
      title: 'Section Femmes',
      subtitle: 'قسم السيدات',
      description: 'Section dédiée aux femmes avec une équipe féminine spécialisée et professionnelle',
    },
    services: {
      title: 'Nos Services',
      subtitle: 'خدماتنا',
      description: 'Des soins personnalisés pour votre bien-être',
      bookButton: 'Réserver',
      service1: {
        title: 'Hijama du Dos',
        packs: [
          { name: 'Pack 1: Hijama seule', price: '150 DH' },
          { name: 'Pack 2: Massage, hijama (sèche ou sanguine)', price: '200 DH' },
          { name: 'Pack 3: Massage, fomentation, hijama sèche & sanguine', price: '300 DH' },
        ],
      },
      service2: {
        title: 'Hijama des Jambes',
        packs: [
          { name: 'Pack 1: Hijama seule', price: '150 DH' },
          { name: 'Pack 2: Massage, hijama (sèche ou sanguine)', price: '200 DH' },
          { name: 'Pack 3: Massage, fomentation, hijama sèche & sanguine', price: '300 DH' },
        ],
      },
      service3: {
        title: 'Hijama pour le Côlon',
        packs: [
          { name: 'Pack 1: Hijama seule', price: '150 DH' },
          { name: 'Pack 2: Massage, hijama (sèche ou sanguine)', price: '200 DH' },
          { name: 'Pack 3: Massage, fomentation, hijama sèche & sanguine', price: '300 DH' },
        ],
      },
      service4: {
        title: 'Hijama de la Tête',
        packs: [
          { name: 'Séance simple', price: '150 DH' },
        ],
      },
      service5: {
        title: 'Massage',
        packs: [
          { name: 'Pack 1: Sportif ou relaxant - 30 min', price: '200 DH' },
          { name: 'Pack 2: Sportif ou relaxant - 50 min', price: '300 DH' },
        ],
      },
    },
    why: {
      title: 'Pourquoi nous choisir?',
      subtitle: 'لماذا تختارنا؟',
      features: [
        {
          title: 'Équipe spécialisée',
          description: 'Praticiens certifiés et expérimentés en hijama thérapeutique',
        },
        {
          title: 'Hygiène & Sécurité',
          description: 'Environnement stérilisé avec matériel médical à usage unique',
        },
        {
          title: 'Équipements modernes',
          description: 'Technologies récentes pour des soins efficaces et confortables',
        },
        {
          title: 'Suivi personnalisé',
          description: 'Accompagnement individuel pour chaque patient',
        },
        {
          title: 'Horaires flexibles',
          description: 'Ouvert 7 jours sur 7 pour votre confort',
        },
        {
          title: 'Sections séparées',
          description: 'Espaces dédiés hommes et femmes pour plus d\'intimité',
        },
      ],
    },
    contact: {
      title: 'Contactez-nous',
      subtitle: 'اتصل بنا',
      phone: {
        label: 'Téléphone',
        value: '0695933607',
      },
      email: {
        label: 'Email',
        value: 'centre.amine.hijama@gmail.com',
      },
      address: {
        label: 'Adresse',
        value: '206, 212 Bd de Témara, Casablanca, Maroc',
      },
      hours: {
        label: 'Horaires d\'ouverture',
        value: '7 jours sur 7, de 9h00 à 20h00',
      },
      whatsappButton: 'WhatsApp',
      instagramButton: 'Instagram',
      mapsButton: 'Ouvrir dans Google Maps',
    },
    footer: {
      tagline: 'صحتك أولويتنا - الشفاء الطبيعي بالحجامة',
      bookButton: 'Réserver maintenant',
      copyright: '© 2025 Centre Amine Hijama. جميع الحقوق محفوظة',
    },
  },
  ar: {
    nav: {
      home: 'الرئيسية',
      women: 'قسم السيدات',
      services: 'الخدمات',
      why: 'لماذا نحن',
      contact: 'اتصل بنا',
    },
    hero: {
      badge: 'خدمات الطب البديل والشمولي',
      title: 'مركز أمين للحجامة',
      subtitle: 'Centre Amine Hijama',
      description: 'اكتشف قوة الشفاء الطبيعي من خلال الحجامة العلاجية. صحتك هي أولويتنا.',
      bookButton: 'احجز جلستك',
      callButton: 'اتصل الآن',
      locationButton: 'عرض الموقع',
      phone: 'الهاتف',
    },
    women: {
      title: 'قسم السيدات',
      subtitle: 'Section Femmes',
      description: 'قسم مخصص للنساء مع فريق نسائي متخصص ومحترف',
    },
    services: {
      title: 'خدماتنا',
      subtitle: 'Nos Services',
      description: 'رعاية شخصية لراحتك',
      bookButton: 'احجز',
      service1: {
        title: 'حجامة الظهر',
        packs: [
          { name: 'الباقة 1: الحجامة فقط', price: '150 درهم' },
          { name: 'الباقة 2: تدليك، حجامة (جافة أو دموية)', price: '200 درهم' },
          { name: 'الباقة 3: تدليك، تدفئة، حجامة جافة ودموية', price: '300 درهم' },
        ],
      },
      service2: {
        title: 'حجامة الساقين',
        packs: [
          { name: 'الباقة 1: الحجامة فقط', price: '150 درهم' },
          { name: 'الباقة 2: تدليك، حجامة (جافة أو دموية)', price: '200 درهم' },
          { name: 'الباقة 3: تدليك، تدفئة، حجامة جافة ودموية', price: '300 درهم' },
        ],
      },
      service3: {
        title: 'حجامة القولون',
        packs: [
          { name: 'الباقة 1: الحجامة فقط', price: '150 درهم' },
          { name: 'الباقة 2: تدليك، حجامة (جافة أو دموية)', price: '200 درهم' },
          { name: 'الباقة 3: تدليك، تدفئة، حجامة جافة ودموية', price: '300 درهم' },
        ],
      },
      service4: {
        title: 'حجامة الرأس',
        packs: [
          { name: 'جلسة بسيطة', price: '150 درهم' },
        ],
      },
      service5: {
        title: 'التدليك',
        packs: [
          { name: 'الباقة 1: رياضي أو استرخائي - 30 دقيقة', price: '200 درهم' },
          { name: 'الباقة 2: رياضي أو استرخائي - 50 دقيقة', price: '300 درهم' },
        ],
      },
    },
    why: {
      title: 'لماذا تختارنا؟',
      subtitle: 'Pourquoi nous choisir?',
      features: [
        {
          title: 'فريق متخصص',
          description: 'ممارسون معتمدون وذوو خبرة في الحجامة العلاجية',
        },
        {
          title: 'النظافة والسلامة',
          description: 'بيئة معقمة مع معدات طبية للاستخدام مرة واحدة',
        },
        {
          title: 'معدات حديثة',
          description: 'تقنيات حديثة للعناية الفعالة والمريحة',
        },
        {
          title: 'متابعة شخصية',
          description: 'مرافقة فردية لكل مريض',
        },
        {
          title: 'مواعيد مرنة',
          description: 'مفتوح 7 أيام في الأسبوع لراحتك',
        },
        {
          title: 'أقسام منفصلة',
          description: 'مساحات مخصصة للرجال والنساء لمزيد من الخصوصية',
        },
      ],
    },
    contact: {
      title: 'اتصل بنا',
      subtitle: 'Contactez-nous',
      phone: {
        label: 'الهاتف',
        value: '0695933607',
      },
      email: {
        label: 'البريد الإلكتروني',
        value: 'centre.amine.hijama@gmail.com',
      },
      address: {
        label: 'العنوان',
        value: '206، 212 شارع تمارة، الدار البيضاء، المغرب',
      },
      hours: {
        label: 'ساعات العمل',
        value: '7 أيام في الأسبوع، من 9:00 صباحاً إلى 8:00 مساءً',
      },
      whatsappButton: 'واتساب',
      instagramButton: 'إنستغرام',
      mapsButton: 'افتح في خرائط جوجل',
    },
    footer: {
      tagline: 'صحتك أولويتنا - الشفاء الطبيعي بالحجامة',
      bookButton: 'احجز الآن',
      copyright: '© 2025 مركز أمين للحجامة. جميع الحقوق محفوظة',
    },
  },
};

export const socialLinks = {
  whatsapp: 'https://api.whatsapp.com/send?phone=%2B212695933607',
  instagram: 'https://www.instagram.com/centre.amine.hijama/',
  facebook: 'https://www.facebook.com/share/17Bd6gVcgo/',
  phone: 'tel:0695933607',
  email: 'https://mail.google.com/mail/?view=cm&to=centre.amine.hijama@gmail.com',
  maps: 'https://www.google.com/maps/place/Centre+amine+hijama+Casablanca+%2F%D9%85%D8%B1%D9%83%D8%B2+%D8%A3%D9%85%D9%8A%D9%86+%D9%84%D9%84%D8%AD%D8%AC%D8%A7%D9%85%D8%A9+%D8%A7%D9%84%D8%AF%D8%A7%D8%B1+%D8%A7%D9%84%D8%A8%D9%8A%D8%B6%D8%A7%D8%A1%E2%80%AD/@33.5476603,-7.5999447,683m/data=!3m2!1e3!4b1!4m6!3m5!1s0xda7cd44d267b725:0x8788c15fcf17eb45!8m2!3d33.5476603!4d-7.5999447!16s%2Fg%2F11sf3wfjyl?entry=ttu&g_ep=EgoyMDI1MTAyMC4wIKXMDSoASAFQAw%3D%3D',
};
