import PageHero from '@/components/shared/PageHero'
import BookRideForm from '@/components/shared/BookRideForm'
import SectionHeading from '@/components/ui/SectionHeading'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { usePageSeo } from '@/hooks/usePageSeo'

export default function BookRide() {
  usePageSeo()

  return (
    <>
      <PageHero
        label="Book a Ride"
        title="Book your Pink Auto ride"
        description="Enter trip details, get a fare estimate, or send your booking directly on WhatsApp."
      />
      <section className="section-padding bg-white -mt-8">
        <div className="container-content max-w-4xl mx-auto">
          <ScrollReveal>
            <BookRideForm showInquiry showFareEstimate />
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
