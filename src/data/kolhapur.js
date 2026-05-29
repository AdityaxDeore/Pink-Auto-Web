/**
 * Kolhapur launch localization — service areas, schools, NGOs, landmarks, partners.
 */

const officeLat = Number(import.meta.env.VITE_OFFICE_LAT) || 16.704987
const officeLng = Number(import.meta.env.VITE_OFFICE_LNG) || 74.243258

/** Pink Auto Kolhapur office — update lines when final shop number is confirmed */
export const OFFICE = {
  name: 'Pink Auto — Kolhapur Office',
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
  hours: 'Mon–Sat: 8:00 AM – 8:00 PM · Sun: 9:00 AM – 2:00 PM',
  get line1() {
    return `${this.shop}, ${this.building}`
  },
  get line2() {
    return `${this.street}, ${this.landmark}`
  },
  get line3() {
    return `${this.locality}, ${this.city} – ${this.pincode}`
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

// ... rest of file unchanged - I need to read full file and merge
