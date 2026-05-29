/**
 * Kolhapur launch localization - service areas, schools, NGOs, landmarks, partners.
 */

const officeLat = Number(import.meta.env.VITE_OFFICE_LAT) || 16.704987
const officeLng = Number(import.meta.env.VITE_OFFICE_LNG) || 74.243258

/** Pink Auto Kolhapur office - update lines when final shop number is confirmed. */
export const OFFICE = {
  name: 'Pink Auto - Kolhapur Office',
  shop: 'Shop No. 4, Ground Floor',
  building: 'Rajarampuri Commercial Complex',
  street: 'Rajarampuri Main Road',
  landmark: 'Near Desai Hospital, Rajarampuri Chowk',
  locality: 'Rajarampuri',
  city: 'Kolhapur',
  district: 'Kolhapur',
  state: 'Maharashtra',
  pincode: '416008',
  country: 'India',
  lat: officeLat,
  lng: officeLng,
  hours: 'Mon-Sat: 8:00 AM - 8:00 PM | Sun: 9:00 AM - 2:00 PM',
  get line1() {
    return `${this.shop}, ${this.building}`
  },
  get line2() {
    return `${this.street}, ${this.landmark}`
  },
  get line3() {
    return `${this.locality}, ${this.city} - ${this.pincode}`
  },
  get fullAddress() {
    return `${this.name}\n${this.line1}\n${this.line2}\n${this.line3}\n${this.state}, ${this.country}`
  },
  get singleLine() {
    return `${this.line1}, ${this.street}, ${this.locality}, ${this.city}, ${this.state} ${this.pincode}`
  },
  get mapsSearchQuery() {
    return `${this.street}, ${this.locality}, ${this.city}, ${this.state} ${this.pincode}`
  },
  get mapsSearchUrl() {
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(this.mapsSearchQuery)}`
  },
  get mapsDirectionsUrl() {
    return `https://www.google.com/maps/dir/?api=1&destination=${this.lat},${this.lng}&travelmode=driving`
  },
  get mapEmbedUrl() {
    return `https://maps.google.com/maps?q=${encodeURIComponent(this.mapsSearchQuery)}&hl=en&z=16&ie=UTF8&iwloc=B&output=embed`
  },
}

export const KOLHAPUR = {
  city: 'Kolhapur',
  district: 'Kolhapur District',
  state: 'Maharashtra',
  pincode: OFFICE.pincode,
  launchLine: 'Now launching in Kolhapur',
  mapQuery: OFFICE.mapsSearchQuery,
  mapEmbedUrl: OFFICE.mapEmbedUrl,
  office: OFFICE,
}

export const SERVICE_AREAS = [
  'Rajarampuri',
  'Shahupuri',
  'Tarabai Park',
  'Sadar Bazar',
  'Ruikar Colony',
  'Mahalaxminagar',
  'Kalamba',
  'Kasaba Bawada',
  'Madhav Nagar',
  'University Road',
  'Vikramnagar',
  'Devkar Panand',
  'Pratibhanagar',
  'Nagala Park',
  'Bindu Chowk',
  'Mangalwar Peth',
  'Kawala Naka',
  'Rankala',
]

export const COVERAGE_ZONES = [
  {
    zone: 'Core city zone',
    areas: ['Rajarampuri', 'Shahupuri', 'Tarabai Park', 'Sadar Bazar', 'Ruikar Colony', 'Mahalaxminagar'],
  },
  {
    zone: 'Educational zone',
    areas: ['University Road', 'Vikramnagar', 'Pratibhanagar', 'Devkar Panand', 'Madhav Nagar'],
  },
  {
    zone: 'City expansion zone',
    areas: ['Kalamba', 'Kasaba Bawada', 'Nagala Park', 'Bindu Chowk', 'Mangalwar Peth', 'Kawala Naka', 'Rankala'],
  },
]

export const LANDMARKS = [
  { name: 'Rankala Lake', area: 'Rankala' },
  { name: 'Mahalaxmi Temple', area: 'Mahalaxminagar' },
  { name: 'Shivaji University', area: 'University Road' },
  { name: 'Tarabai Park', area: 'Tarabai Park' },
  { name: 'Bindu Chowk', area: 'Bindu Chowk' },
  { name: 'Kawala Naka', area: 'Kawala Naka' },
]

export const LOCAL_TRUST = {
  headline: 'Trusted by women, students, and families across Kolhapur',
  paragraphs: [
    'Pink Auto is designed for women who want a safer daily commute without giving up convenience or affordability.',
    'From school pickups to office rides and evening returns home, we keep the journey transparent with verified drivers and support that stays available throughout the trip.',
  ],
}

export const NGOS = [
  { name: 'Women Rise NGO', focus: 'Women empowerment, training, and livelihood support' },
  { name: 'Safe City Collective', focus: 'Community safety and mobility awareness programs' },
  { name: 'Kolhapur Social Foundation', focus: 'Local outreach and student support initiatives' },
]

export const WOMEN_ORGANIZATIONS = [
  { name: 'Women Entrepreneurs Forum', focus: 'Business leadership and mentorship' },
  { name: 'Maharashtra Mahila Mandal', focus: 'Women safety, rights, and community programs' },
  { name: 'Kolhapur Womens Network', focus: 'Employment and skill-building for women' },
]

export const FUTURE_PARTNERSHIPS = {
  headline: 'Building partnerships that strengthen safe mobility',
  intro:
    'We work with schools, NGOs, and institutions to extend safe transport, women employment, and family-friendly mobility across Kolhapur.',
  categories: [
    {
      title: 'Schools and colleges',
      items: ['Daily pickup routes', 'Parent communication', 'Fixed schedule transport', 'Student safety programs'],
    },
    {
      title: 'Community groups',
      items: ['Women safety workshops', 'Driver awareness sessions', 'Neighborhood outreach', 'Local support networks'],
    },
    {
      title: 'Employers and institutions',
      items: ['Office commute support', 'Staff transport plans', 'Corporate safety policies', 'Special event coordination'],
    },
  ],
}

export const SCHOOLS = [
  {
    name: 'Podar International School',
    board: 'CBSE',
    services: ['Morning pickup', 'After-school drop', 'Parent updates', 'Verified driver allocation'],
  },
  {
    name: 'VIBGYOR High',
    board: 'CBSE',
    services: ['Fixed routes', 'Student commute', 'GPS monitoring', 'Safe handover support'],
  },
  {
    name: 'Nalanda Public School',
    board: 'State / English medium',
    services: ['Daily school runs', 'Term transport plans', 'Parent assistance', 'On-time pickup'],
  },
  {
    name: 'Shri Balaji School',
    board: 'State board',
    services: ['Morning and evening transport', 'Neighbourhood routes', 'Student-friendly service'],
  },
  {
    name: 'Shivaji University',
    board: 'University campus',
    services: ['College commute', 'Exam-day rides', 'Group transport', 'Flexible timing'],
  },
  {
    name: 'D. Y. Patil Education Hub',
    board: 'Higher education',
    services: ['Campus commute', 'Internship travel', 'Evening return rides', 'Family booking support'],
  },
]

export const STUDENT_TRANSPORT_COPY =
  'Safe and reliable pickup for school and college students across Kolhapur, with route planning, punctual pickups, and parent-friendly support.'

export const COMMUNITY_PARTNERS = [
  { name: 'Women Rise NGO', type: 'NGO', subtitle: 'Women employment and safety initiatives' },
  { name: 'Podar International School', type: 'School', subtitle: 'Student commute and parent assurance' },
  { name: 'VIBGYOR High', type: 'School', subtitle: 'School transport coordination' },
  { name: 'Kolhapur Social Foundation', type: 'Community', subtitle: 'Local outreach and family support' },
]

export const COVERAGE_AREAS = SERVICE_AREAS
