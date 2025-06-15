// Contact Information
export const CONTACT_INFO = {
  address: {
    street: 'Ul. Sandžačka 123',
    city: '36300 Novi Pazar',
    country: 'Srbija',
    full: 'Ul. Sandžačka 123, 36300 Novi Pazar, Srbija'
  },
  phone: {
    display: '+381 20 123 456',
    href: 'tel:+38120123456'
  },
  email: {
    general: 'info@institutsandzak.org',
    media: 'mediji@institutsandzak.org',
    privacy: 'privatnost@institutsandzak.org'
  },
  workingHours: {
    weekdays: 'Ponedjeljak - Petak: 9:00 - 17:00',
    weekend: 'Subota - Nedjelja: Zatvoreno',
    shortWeekdays: '9:00 - 17:00'
  }
};

// Social Media Links (update with actual URLs when available)
export const SOCIAL_LINKS = {
  facebook: 'https://facebook.com/institutsandzak',
  twitter: 'https://twitter.com/institutsandzak',
  linkedin: 'https://linkedin.com/company/institut-sandzak',
  youtube: 'https://youtube.com/institutsandzak'
};

// Site Statistics (should be fetched from API/CMS in production)
export const SITE_STATS = {
  publications: 25,
  workshops: 150,
  participants: 3000,
  partners: 20
};

// Navigation Links
export const NAV_LINKS = {
  about: {
    main: '/o-nama',
    mission: '/o-nama', // Mission is shown on main about page
    team: '/o-nama/tim',
    history: '/o-nama/historija' // Separate history page exists
  },
  research: {
    main: '/istrazivanja',
    publications: '/istrazivanja/publikacije',
    projects: '/istrazivanja/projekti',
    database: '/istrazivanja/podaci',
    collaboration: '/istrazivanja/saradnja'
  },
  news: '/vijesti',
  events: '/dogadjaji',
  contact: '/kontakt',
  media: '/mediji',
  newsletter: '/newsletter',
  privacy: '/privatnost',
  faq: '/pitanja'
};