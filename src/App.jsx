import { HashRouter, Routes, Route } from 'react-router-dom'
import Layout from '@/components/layout/Layout'
import Home from '@/pages/Home'
import About from '@/pages/About'
import Services from '@/pages/Services'
import SafetyPage from '@/pages/SafetyPage'
import BookRide from '@/pages/BookRide'
import DriverRegistration from '@/pages/DriverRegistration'
import Gallery from '@/pages/Gallery'
import TestimonialsPage from '@/pages/TestimonialsPage'
import Media from '@/pages/Media'
import Contact from '@/pages/Contact'

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="safety" element={<SafetyPage />} />
          <Route path="book" element={<BookRide />} />
          <Route path="driver-registration" element={<DriverRegistration />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="testimonials" element={<TestimonialsPage />} />
          <Route path="media" element={<Media />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}
