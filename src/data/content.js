/**
 * Central content store — update here for copy, services, testimonials, media.
 * Kolhapur-specific data: src/data/kolhapur.js
 */

import { KOLHAPUR, COVERAGE_ZONES, COMMUNITY_PARTNERS, SERVICE_AREAS } from './kolhapur'

export { KOLHAPUR, COVERAGE_ZONES, SERVICE_AREAS } from './kolhapur'

export const SITE = {
  name: 'Pink Auto',
  tagline: 'Safe Rides for Women',
  taglines: [
    'Safe Rides for Women',
    'Driven by Women, Trusted by Families',
    'Comfort • Safety • Empowerment',
  ],
  phone: '+91 90000 00000',
  email: 'hello@pinkauto.kolhapur.in',
  whatsapp: '919000000000',
  address: `Pink Auto Office, Rajarampuri, ${KOLHAPUR.city}, ${KOLHAPUR.state} — ${KOLHAPUR.pincode}`,
  city: KOLHAPUR.city,
  state: KOLHAPUR.state,
  playStoreUrl: 'https://play.google.com/store/apps/details?id=com.pinkauto.app',
  social: {
    facebook: 'https://facebook.com/pinkauto',
    instagram: 'https://instagram.com/pinkauto',
    linkedin: 'https://linkedin.com/company/pinkauto',
    youtube: 'https://youtube.com/@pinkauto',
  },
}

export const BRAND = {
  positioning: [
    'Women-focused transportation service',
    'Safe and reliable auto-rickshaw service',
    'Women empowerment initiative',
    'Employment opportunities for women drivers',
  ],
  audiences: [
    'Women commuters',
    'School & college students',
    'Working professionals',
    'Parents booking for daughters',
    'Senior citizens',
    'Families',
    'Corporate & government clients',
    'NGOs',
  ],
}

export const SEO = {
  defaultTitle: `Pink Auto Kolhapur — Ladies Auto Service | Safe Auto for Women`,
  description:
    `Pink Auto offers safe, women-friendly auto-rickshaw service in Kolhapur, Maharashtra. Ladies auto service with verified drivers, GPS tracking, school pickup near Rajarampuri, Shahupuri, and Shivaji University area. Book via app or WhatsApp.`,
  keywords: [
    'Pink Auto Service',
    'Pink Auto Kolhapur',
    'Ladies Auto Service Kolhapur',
    'Women Auto Rickshaw Kolhapur',
    'Safe Auto for Women',
    'Auto Service in Maharashtra',
    'Auto Service Kolhapur',
    'School Pickup Auto Kolhapur',
    'Women Only Auto Kolhapur',
  ],
}

export const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Safety', path: '/safety' },
  { label: 'Book Ride', path: '/book' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Media', path: '/media' },
  { label: 'Contact', path: '/contact' },
]

export const HERO = {
  headline: 'Safe & Reliable Auto Service for Women',
  subheadline: SITE.taglines[1],
  values: 'Comfort • Safety • Empowerment',
  locationBadge: `Launching in ${KOLHAPUR.city}, ${KOLHAPUR.state}`,
}

export const HERO_STATS = [
  { value: 5000, suffix: '+', label: 'Completed Rides' },
  { value: 100, suffix: '+', label: 'Verified Drivers' },
  { value: 98, suffix: '%', label: 'Satisfaction' },
]

export const TRUST_INDICATORS = [
  'Verified Drivers',
  'GPS Tracking',
  'Emergency Support',
  'Ride Monitoring',
]

export const SERVICES = [
  { id: 'daily', title: 'Daily Local Rides', description: 'Comfortable point-to-point rides across the city with verified drivers.', icon: 'MapPin' },
  { id: 'school', title: 'School Pickup', description: 'Student transport for Podar International, VIBGYOR, Nalanda & schools across Kolhapur — parent booking & GPS tracking.', icon: 'GraduationCap' },
  { id: 'college', title: 'College Pickup', description: 'Reliable campus commute for college students on fixed schedules.', icon: 'GraduationCap' },
  { id: 'office', title: 'Office Commute', description: 'Daily commute for working professionals with dedicated routes.', icon: 'Briefcase' },
  { id: 'women', title: 'Women-Only Rides', description: 'Female passengers with female drivers for maximum comfort and safety.', icon: 'Heart' },
  { id: 'senior', title: 'Senior Citizen Transport', description: 'Patient, assisted travel for elderly passengers and families.', icon: 'Users' },
  { id: 'event', title: 'Event Transportation', description: 'Group travel for weddings, functions, and institutional events.', icon: 'Calendar' },
  { id: 'monthly', title: 'Monthly Ride Packages', description: 'Affordable plans for schools, corporates, and regular commuters.', icon: 'Calendar' },
]

export const SAFETY_FEATURES = [
  { title: 'Verified Drivers', description: 'Background checks, license verification, and ongoing safety training for every driver.', icon: 'BadgeCheck' },
  { title: 'GPS Tracking', description: 'Real-time location sharing so families can follow rides with peace of mind.', icon: 'Navigation' },
  { title: 'Emergency Support', description: '24/7 safety team access during rides with one-tap emergency assistance.', icon: 'PhoneCall' },
  { title: 'Driver ID Verification', description: 'Passengers verify driver photo, ID, and vehicle details before boarding.', icon: 'IdCard' },
  { title: 'Customer Support', description: 'Dedicated helpline and WhatsApp support before, during, and after every ride.', icon: 'Headphones' },
  { title: 'Safe Ride Policies', description: 'Clear conduct standards, zero-tolerance rules, and transparent complaint resolution.', icon: 'FileCheck' },
]

export const WHY_CHOOSE = [
  { title: 'Verified Drivers', description: 'Background checks, license verification, and ongoing safety training.', icon: 'ShieldCheck' },
  { title: 'Safe Travel', description: 'Policies and technology built around passenger protection first.', icon: 'Shield' },
  { title: 'Reliable Support', description: '24/7 assistance when you need help before, during, or after a ride.', icon: 'Headphones' },
  { title: 'Women-Focused Service', description: 'Designed for what women and families need from transport.', icon: 'Sparkles' },
  { title: 'Easy Booking', description: 'Book via app, phone, WhatsApp, or our online form in seconds.', icon: 'Smartphone' },
  { title: 'Comfort & Trust', description: 'Clean vehicles, courteous drivers, and rides you can rely on.', icon: 'Star' },
]

export const HOW_IT_WORKS = [
  { step: 1, title: 'Book Ride', description: 'Share pickup, drop, date, and time via app, WhatsApp, or form.' },
  { step: 2, title: 'Driver Assigned', description: 'A verified driver is matched and you receive ride details.' },
  { step: 3, title: 'Travel Safely', description: 'GPS-tracked journey with emergency support available.' },
  { step: 4, title: 'Reach Destination', description: 'Arrive comfortably — rate your ride and book again anytime.' },
]

/** @deprecated Use COVERAGE_ZONES from kolhapur.js — kept for backward compatibility */
export const COVERAGE_AREAS = COVERAGE_ZONES

export const EMPOWERMENT_STATS = [
  { value: 100, suffix: '+', label: 'Women Drivers Employed' },
  { value: 5000, suffix: '+', label: 'Safe Rides Completed' },
  { value: 50, suffix: '+', label: 'Partner Institutions' },
  { value: 15, suffix: '+', label: 'Community Programs' },
]

export const TESTIMONIALS = [
  { name: 'Priya Sharma', role: 'Women Passenger', category: 'passenger', quote: 'I take Pink Auto every day to work. Verified drivers and ride tracking give me real peace of mind.', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop' },
  { name: 'Anita Desai', role: 'Parent', category: 'parent', quote: 'My daughter uses school pickup. Drivers are punctual and polite — I finally trust her daily commute.', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop' },
  { name: 'Parent, Tarabai Park', role: 'Parent — Kolhapur', category: 'parent', quote: 'Pink Auto school pickup from Tarabai Park to Podar International has been reliable. I can track my daughter\'s ride every morning.', image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=200&h=200&fit=crop' },
  { name: 'TechPark Solutions', role: 'Corporate Client', category: 'corporate', quote: 'Our employees use office commute packages. Reliable, safe, and excellent account management.', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop' },
  { name: 'Meera Krishnan', role: 'Senior Citizen', category: 'passenger', quote: 'Patient drivers who help me carefully. Pink Auto treats me with dignity every ride.', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop' },
  { name: 'Women Rise NGO', role: 'NGO Partner', category: 'organization', quote: 'Pink Auto supports our women employment program. A model for safe mobility and empowerment.', image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4c3f?w=200&h=200&fit=crop' },
]

export const PARTNER_LOGOS = COMMUNITY_PARTNERS.map((p) => ({
  name: p.name,
  type: p.type,
  subtitle: p.subtitle,
}))

export const MEDIA_ITEMS = [
  { id: 1, type: 'press', title: 'Pink Auto Launches Women-Safe Fleet in Kolhapur', source: 'Kolhapur Times', date: '2024-03-15', excerpt: 'Pink Auto expands verified driver program across Rajarampuri, Shahupuri, and Tarabai Park.', link: '#' },
  { id: 2, type: 'press', title: 'Ladies Auto Service Gains Trust in Kolhapur', source: 'City News Kolhapur', date: '2024-08-20', excerpt: 'Parents and schools choose Pink Auto for student transport and office commute.', link: '#' },
  { id: 3, type: 'award', title: 'Women Empowerment in Mobility Award', source: 'Safe City Summit', date: '2024-11-10', excerpt: 'Recognized for employment of women drivers and community programs.', link: '#' },
  { id: 4, type: 'event', title: 'Pink Auto Launch Ceremony', source: 'Pink Auto', date: '2023-06-01', excerpt: 'Official launch with fleet unveiling and driver training camp.', image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80' },
  { id: 5, type: 'event', title: 'NGO Collaboration — Women Drivers Program', source: 'Women Rise NGO', date: '2024-01-22', excerpt: 'Joint initiative for driver training and employment support.', image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4c3f?w=800&q=80' },
  { id: 6, type: 'recognition', title: 'ISO-Aligned Safety Standards', source: 'Industry Body', date: '2025-01-05', excerpt: 'Pink Auto adopts industry safety and verification benchmarks.', link: '#' },
]

export const GALLERY_ITEMS = [
  { id: 1, category: 'vehicles', title: 'Pink Auto Fleet', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80' },
  { id: 2, category: 'drivers', title: 'Women Driver', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80' },
  { id: 3, category: 'customers', title: 'Customer Interaction', image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&q=80' },
  { id: 4, category: 'events', title: 'Launch Ceremony', image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80' },
  { id: 5, category: 'ngo', title: 'NGO Collaboration', image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4c3f?w=800&q=80' },
  { id: 6, category: 'government', title: 'Government Event', image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80' },
  { id: 7, category: 'drivers', title: 'Driver Training', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80' },
  { id: 8, category: 'vehicles', title: 'Clean Auto', image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80' },
]

export const GALLERY_CATEGORIES = [
  { id: 'all', label: 'All' },
  { id: 'vehicles', label: 'Pink Auto Photos' },
  { id: 'drivers', label: 'Women Drivers' },
  { id: 'customers', label: 'Customer Interactions' },
  { id: 'events', label: 'Launch & Events' },
  { id: 'ngo', label: 'NGO Collaborations' },
  { id: 'government', label: 'Government Collaborations' },
]

export const TIMELINE = [
  { year: '2022', title: 'Founded', description: 'Pink Auto started with a mission to make urban transport safer for women in Maharashtra.' },
  { year: '2024', title: 'Kolhapur Launch', description: `Pink Auto begins operations in ${KOLHAPUR.city} — Rajarampuri, Shahupuri, and Shivaji University area.` },
  { year: '2024', title: 'Institutional Partnerships', description: 'Kolhapur schools, NGOs, and women\'s organizations onboarded for commute programs.' },
  { year: '2025', title: 'City Expansion', description: `Growing across ${SERVICE_AREAS.slice(0, 6).join(', ')}, and more Kolhapur neighbourhoods.` },
]

export const FOOTER_LINKS = {
  company: [
    { label: 'About Us', path: '/about' },
    { label: 'Our Story', path: '/about#story' },
    { label: 'Women Empowerment', path: '/about#empowerment' },
    { label: 'Media & Press', path: '/media' },
    { label: 'Contact', path: '/contact' },
  ],
  services: [
    { label: 'Daily Rides', path: '/services#daily' },
    { label: 'School Pickup', path: '/services#school' },
    { label: 'College Pickup', path: '/services#college' },
    { label: 'Women-Only Rides', path: '/services#women' },
    { label: 'Monthly Packages', path: '/services#monthly' },
  ],
  drivers: [
    { label: 'Become a Driver', path: '/driver-registration' },
    { label: 'Requirements', path: '/driver-registration#requirements' },
    { label: 'Apply Now', path: '/driver-registration' },
  ],
  support: [
    { label: 'Book a Ride', path: '/book' },
    { label: 'Safety Features', path: '/safety' },
    { label: 'Testimonials', path: '/testimonials' },
    { label: 'Media & Press', path: '/media' },
    { label: 'Privacy Policy', path: '/contact' },
  ],
}

export const PAGE_SEO = {
  '/': { title: `Pink Auto Kolhapur — Safe Auto for Women`, description: SEO.description },
  '/about': { title: `About Pink Auto — Kolhapur & Women Empowerment`, description: `Learn about Pink Auto in ${KOLHAPUR.city} — vision, mission, and community impact.` },
  '/services': { title: 'Services — School Pickup, Office Commute | Pink Auto', description: 'Daily rides, school & college pickup, women-only rides, and monthly packages.' },
  '/safety': { title: 'Safety Features — Verified Drivers & GPS | Pink Auto', description: 'Verified drivers, GPS tracking, emergency support, and safe ride policies.' },
  '/book': { title: 'Book a Ride — WhatsApp Booking | Pink Auto', description: 'Book Pink Auto online. Pickup, drop, date, time. WhatsApp booking available.' },
  '/gallery': { title: 'Gallery — Fleet, Drivers & Events | Pink Auto', description: 'Photos of Pink Auto fleet, women drivers, and community events.' },
  '/media': { title: 'Media & Events — Press & Awards | Pink Auto', description: 'Press coverage, news, awards, and recognitions for Pink Auto.' },
  '/testimonials': { title: 'Testimonials — Reviews | Pink Auto', description: 'Reviews from women passengers, parents, organizations, and corporates.' },
  '/contact': { title: 'Contact Pink Auto — Maharashtra', description: `Contact Pink Auto. Phone ${SITE.phone}. Office in ${SITE.state}.` },
}
