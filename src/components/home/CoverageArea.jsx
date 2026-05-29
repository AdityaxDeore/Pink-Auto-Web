import { MapPin } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import Button from '@/components/ui/Button'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { COVERAGE_ZONES, KOLHAPUR, SERVICE_AREAS } from '@/data/kolhapur'
import { SITE } from '@/data/content'

export default function CoverageArea() {
  return (
    <section id="coverage" className="section-padding bg-gray-50">
      <div className="container-content">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal direction="left">
            <SectionHeading
              align="left"
              label="Coverage Areas"
              title={`Serving ${KOLHAPUR.city}`}
              description={`Pink Auto operates across ${SERVICE_AREAS.length}+ neighbourhoods in Kolhapur — from Rajarampuri and Shahupuri to Shivaji University area. Request service in your locality.`}
              className="mb-8 !text-left"
            />
            <div className="space-y-6">
              {COVERAGE_ZONES.map((zone) => (
                <div key={zone.zone} className="bg-white rounded-2xl p-5 border border-gray-100">
                  <h3 className="font-semibold flex items-center gap-2 mb-3">
                    <MapPin className="w-4 h-4 text-pink-primary" />
                    {zone.zone}
                  </h3>
                  <ul className="flex flex-wrap gap-2">
                    {zone.areas.map((area) => (
                      <li
                        key={area}
                        className="text-sm text-text-secondary bg-pink-soft/50 px-3 py-1.5 rounded-lg border border-pink-100/80"
                      >
                        {area}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="text-sm text-text-secondary mt-6">
              Also serving: {SERVICE_AREAS.filter((a) => !COVERAGE_ZONES.some((z) => z.areas.includes(a))).join(', ')}
            </p>
            <Button to="/contact" className="mt-6">
              Request service in your area
            </Button>
          </ScrollReveal>
          <ScrollReveal direction="right">
            <div className="rounded-3xl overflow-hidden shadow-card aspect-video bg-gray-100">
              <iframe
                title={`Pink Auto service area — ${KOLHAPUR.city}`}
                src={KOLHAPUR.mapEmbedUrl}
                className="w-full h-full min-h-[320px] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <p className="text-xs text-text-secondary text-center mt-3">
              {SITE.address}
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
