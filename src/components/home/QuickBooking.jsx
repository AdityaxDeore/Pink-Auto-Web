import SectionHeading from '@/components/ui/SectionHeading'
import Button from '@/components/ui/Button'
import BookRideForm from '@/components/shared/BookRideForm'
import ScrollReveal from '@/components/ui/ScrollReveal'

export default function QuickBooking() {
  return (
    <section id="booking" className="section-padding bg-white">
      <div className="container-content">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <SectionHeading
            align="left"
            label="Quick Booking"
            title="Book your ride in seconds"
            description="Fill in your trip details or continue on WhatsApp."
            className="mb-0 !text-left"
          />
          <Button to="/book" variant="secondary" className="shrink-0">
            Full booking page
          </Button>
        </div>
        <ScrollReveal>
          <BookRideForm showInquiry={false} showFareEstimate />
        </ScrollReveal>
      </div>
    </section>
  )
}
