import PageHero from '@/components/shared/PageHero'
import ContactBlock from '@/components/shared/ContactBlock'
import { usePageSeo } from '@/hooks/usePageSeo'

export default function Contact() {
  usePageSeo()
  return (
    <>
      <PageHero
        label="Contact"
        title="Let's connect"
        description="Book a ride, become a partner, or reach our team — we're always happy to help."
      />
      <ContactBlock showHeading={false} />
    </>
  )
}
