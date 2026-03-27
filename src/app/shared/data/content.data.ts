import { Project, Service } from '../models/content.model';

export const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Projects', path: '/projects' },
  { label: 'Services', path: '/services' },
  { label: 'HSMDA Courses', path: '/courses' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Insights', path: '/insights' },
  { label: 'Contact', path: '/contact' }
];

export const heroSlides = [
  {
    eyebrow: 'Signature Collection',
    title: 'Where Vision Becomes Velocity',
    subtitle:
      'A premium mobility studio shaping automotive concepts through bold storytelling and precision design.',
    image: '/assets/media/wp13795863.jpg'
  },
  {
    eyebrow: 'Clay + Digital',
    title: 'From Sketch To Sculpted Reality',
    subtitle: 'From early ideation to tactile 3D form, we transform ideas into production-focused design language.',
    image: '/assets/media/wp14806963.webp'
  },
  {
    eyebrow: 'Prototype Precision',
    title: 'Built For Impact, Engineered For Detail',
    subtitle: 'Automotive digital design, clay sculpting, and prototype execution crafted to global standards.',
    image: '/assets/media/wp3978403.jpg'
  },
  {
    eyebrow: 'Performance Aesthetics',
    title: 'Form Language With Intent',
    subtitle: 'Every surface, contour, and stance is tuned for emotion, clarity, and performance presence.',
    image: '/assets/media/wp3978397.jpg'
  },
  {
    eyebrow: 'Future Mobility',
    title: 'Design Experiences That People Remember',
    subtitle: 'We create concept stories and physical outcomes that make your brand unforgettable at first sight.',
    image: '/assets/media/wc1745112.webp'
  }
];

export const aboutHighlights = [
  'Highway Star Mobility (HSM) bridges concept and reality across transportation and product design.',
  'We combine digital design, clay sculpting, prototyping, and production support in one studio.',
  'Our academy nurtures the next generation of design professionals with industry-led mentorship.'
];

export const services: Service[] = [
  {
    title: 'Clay Modelling',
    description:
      'This programme translates a designer vision and concept into a tangible physical 3D model with precision and speed.',
    image: '/assets/media/cm2.jpeg'
  },
  {
    title: 'Prototyping',
    description:
      'We support product development from styling mockups to functional prototypes and final production parts.',
    image: '/assets/media/ptnew.jpeg'
  },
  {
    title: 'Show Models',
    description:
      'High-impact display models and hero assets crafted for launches, events, and brand storytelling.',
    image: '/assets/media/sm2.jpeg'
  }
];

export const projects: Project[] = [
  {
    id: 1,
    slug: 'shelby-cobra',
    title: 'Shelby Cobra',
    category: 'Automotive',
    tags: ['Digital Design', 'Show Model'],
    cover: '/assets/media/2.jpg',
    summary: 'A performance-driven concept with bold stance and sculpted surfaces.',
    description:
      'Shelby Cobra explores contemporary muscle-car language through digital surfacing and proportion studies before physical realization.',
    media: [
      { type: 'video', src: '/assets/media/ShelbyClip.mp4', alt: 'Shelby Cobra showcase video' },
      { type: 'image', src: '/assets/media/Duccati.jpeg', alt: 'Design rendering board' },
      { type: 'image', src: '/assets/media/s4.jpg', alt: 'Workshop detail' }
    ]
  },
  {
    id: 2,
    slug: 'clay-lab-series',
    title: 'Clay Lab Series',
    category: 'Clay Modelling',
    tags: ['Clay', 'Studio'],
    cover: '/assets/media/cm3.jpeg',
    summary: 'Hand-sculpted volumes developed for production-ready form evaluation.',
    description:
      'A sequence of clay studies that demonstrates transitions from rough ideation massing to refined Class-A intent.',
    media: [
      { type: 'image', src: '/assets/media/cm.jpeg', alt: 'Clay model base form' },
      { type: 'image', src: '/assets/media/cm2.jpeg', alt: 'Clay lab process' },
      { type: 'image', src: '/assets/media/cmfoundation.jpeg', alt: 'Clay modelling foundation' }
    ]
  },
  {
    id: 3,
    slug: 'prototype-track',
    title: 'Prototype Track',
    category: 'Prototyping',
    tags: ['Fabrication', 'R&D'],
    cover: '/assets/media/pt1.jpeg',
    summary: 'Rapid iterations from digital package to fabrication-ready prototype.',
    description:
      'Prototype Track combines digital reviews, physical mockups, and iterative refinements to reduce development risk and improve outcomes.',
    media: [
      { type: 'image', src: '/assets/media/ptnew.jpeg', alt: 'Prototype front view' },
      { type: 'image', src: '/assets/media/pt2new.jpeg', alt: 'Prototype detail' },
      { type: 'image', src: '/assets/media/pt3new.jpeg', alt: 'Prototype side view' }
    ]
  },
  {
    id: 4,
    slug: 'show-model-collection',
    title: 'Show Model Collection',
    category: 'Show Models',
    tags: ['Exhibition', 'Brand'],
    cover: '/assets/media/s5.jpeg',
    summary: 'Museum-grade presentation models made for launches and displays.',
    description:
      'An exhibition-focused model series produced for visual impact, proportion clarity, and close-up craftsmanship.',
    media: [
      { type: 'image', src: '/assets/media/s6.jpeg', alt: 'Show model studio shot' },
      { type: 'image', src: '/assets/media/s7.jpeg', alt: 'Show model lighting test' },
      { type: 'image', src: '/assets/media/services.jpg', alt: 'Service presentation board' }
    ]
  }
];

export const galleryMedia = [
  '/assets/media/c1.JPG',
  '/assets/media/c2.JPG',
  '/assets/media/c3.JPG',
  '/assets/media/c4.JPG',
  '/assets/media/c5.JPG',
  '/assets/media/c6.JPG',
  '/assets/media/c7.JPG',
  '/assets/media/course1.jpeg',
  '/assets/media/s2.jpg',
  '/assets/media/s3.jpg'
];

export const academyInfo = {
  headline:
    'Live your dream as a career in automotive digital design plus clay sculpting and prototyping.',
  courseTitle: 'Fundamentals of Transportation Design',
  level: 'Level 1 - Foundation',
  duration: '3 months, 4 hours/day',
  fee: 'INR 90,000 + GST'
};

export const coursePrograms = [
  {
    level: 'Level 1 - Foundation',
    title: 'Fundamentals of Transportation Design',
    duration: '3 months | 4 hours/day',
    fee: 'INR 90,000 + GST',
    focus: [
      'Design fundamentals, sketching language, proportion understanding',
      '2D to 3D ideation pipeline for transportation concepts',
      'Portfolio-ready foundation project with mentor reviews'
    ],
    image: '/assets/media/course1.jpeg'
  },
  {
    level: 'Level 2 - Intermediate',
    title: 'Digital Design + Clay Sculpting & Prototyping',
    duration: '3 months | studio-intensive format',
    fee: 'INR 90,000 + GST',
    focus: [
      'Advanced digital surfacing workflows and detailing',
      'Clay model development from concept freeze to refinement',
      'Prototype planning, finishing standards, and studio presentation'
    ],
    image: '/assets/media/cmfoundation.jpeg'
  }
];

export const upcomingBatches = [
  {
    name: 'Weekend Foundation Cohort',
    startDate: 'May 18, 2026',
    schedule: 'Saturday - Sunday | 10:00 AM - 2:00 PM',
    seatsLeft: 9
  },
  {
    name: 'Weekday Intensive Cohort',
    startDate: 'June 8, 2026',
    schedule: 'Monday - Friday | 2:00 PM - 6:00 PM',
    seatsLeft: 6
  },
  {
    name: 'Prototyping & Clay Lab Cohort',
    startDate: 'July 6, 2026',
    schedule: 'Monday - Thursday | 11:00 AM - 4:00 PM',
    seatsLeft: 12
  }
];

export const courseBenefits = [
  {
    title: 'Industry-Led Mentorship',
    description:
      'Learn directly from professionals with real project experience in automotive design and development.'
  },
  {
    title: 'Studio + Academy Integration',
    description:
      'Work in a production-like ecosystem where design, clay, prototyping, and visual storytelling happen together.'
  },
  {
    title: 'Portfolio-First Approach',
    description:
      'Every module contributes to a professional portfolio with guided critiques and measurable improvement milestones.'
  },
  {
    title: 'Hands-On Lab Practice',
    description:
      'Use clay lab and model-making workflows to translate ideas into tangible, high-quality physical outputs.'
  }
];

export const courseModelGallery = [
  '/assets/media/c1.JPG',
  '/assets/media/c2.JPG',
  '/assets/media/c3.JPG',
  '/assets/media/c4.JPG',
  '/assets/media/c5.JPG',
  '/assets/media/cm.jpeg',
  '/assets/media/sm1.jpeg',
  '/assets/media/sm2.jpeg'
];
