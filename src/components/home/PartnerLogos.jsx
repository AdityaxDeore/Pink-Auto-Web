import { motion } from 'framer-motion'
import SectionHeading from '@/components/ui/SectionHeading'
import { PARTNER_LOGOS } from '@/data/content'

export default function PartnerLogos() {
  return (
    <section className="section-padding bg-gray-50 border-y border-gray-100">
      <div className="container-content">
        <SectionHeading
          label="Kolhapur Partners"
          title="Schools, NGOs & community partners"
          description="Institutions and organizations aligned with Pink Auto's mission in Kolhapur."
        />
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {PARTNER_LOGOS.map((partner, i) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="flex flex-col items-center justify-center min-w-[160px] max-w-[220px] px-5 py-5 rounded-2xl bg-white border border-gray-100 shadow-sm text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-pink-soft flex items-center justify-center text-pink-primary font-bold text-sm mb-2">
                {partner.name.charAt(0)}
              </div>
              <p className="text-sm font-semibold text-text-primary leading-snug">{partner.name}</p>
              <p className="text-xs text-pink-primary font-medium mt-1">{partner.type}</p>
              {partner.subtitle && (
                <p className="text-xs text-text-secondary mt-1 line-clamp-2">{partner.subtitle}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
