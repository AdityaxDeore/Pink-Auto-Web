import { usePageSeo } from '@/hooks/usePageSeo'
import Hero from '@/components/home/Hero'
import KolhapurLocalTrust from '@/components/home/KolhapurLocalTrust'
import SafetyHighlights from '@/components/home/SafetyHighlights'
import WhyChooseUs from '@/components/home/WhyChooseUs'
import ServicesSection from '@/components/home/ServicesSection'
import KolhapurSchools from '@/components/home/KolhapurSchools'
import CoverageArea from '@/components/home/CoverageArea'
import KolhapurLandmarks from '@/components/home/KolhapurLandmarks'
import Testimonials from '@/components/home/Testimonials'
import PartnerLogos from '@/components/home/PartnerLogos'
import KolhapurPartners from '@/components/home/KolhapurPartners'
import CTABanner from '@/components/home/CTABanner'
import QuickBooking from '@/components/home/QuickBooking'
import AboutSection from '@/components/home/AboutSection'
import HowItWorks from '@/components/home/HowItWorks'
import Safety from '@/components/home/Safety'
import WomenEmpowerment from '@/components/home/WomenEmpowerment'
import GalleryPreview from '@/components/home/GalleryPreview'
import MediaPreview from '@/components/home/MediaPreview'
import DriverCTA from '@/components/home/DriverCTA'
import ContactBlock from '@/components/shared/ContactBlock'

export default function Home() {
  usePageSeo()

  return (
    <>
      <Hero />
      <KolhapurLocalTrust />
      <SafetyHighlights />
      <WhyChooseUs />
      <ServicesSection />
      <KolhapurSchools />
      <CoverageArea />
      <KolhapurLandmarks />
      <Testimonials />
      <PartnerLogos />
      <KolhapurPartners />
      <CTABanner />
      <QuickBooking />
      <AboutSection />
      <HowItWorks />
      <Safety />
      <WomenEmpowerment />
      <GalleryPreview />
      <MediaPreview />
      <DriverCTA />
      <ContactBlock />
    </>
  )
}
