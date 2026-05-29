import { motion } from 'framer-motion'
import { MapPin, Heart, GraduationCap } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import Button from '@/components/ui/Button'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { LOCAL_TRUST, KOLHAPUR, SERVICE_AREAS, LANDMARKS } from '@/data/kolhapur'

export default function KolhapurLocalTrust() {
  return (
    <section id="kolhapur-trust" className="section-padding bg-gradient-to-b from-pink-soft/60 to-white">
      <div className="container-content">
        <ScrollReveal>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-primary/10 text-pink-primary text-xs font-semibold uppercase tracking-wider mb-4">
                <MapPin className="w-3.5 h-3.5" />
                {KOLHAPUR.launchLine}
              </span>
              <SectionHeading
                align="left"
                label="Kolhapur"
                title={LOCAL_TRUST.headline}
                description={LOCAL_TRUST.paragraphs[0]}
                className="mb-6 !text-left"
              />
              <p className="text-text-secondary text-lg leading-relaxed mb-6">
                {LOCAL_TRUST.paragraphs[1]}
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  { icon: Heart, text: 'Women-focused service built for Kolhapur families' },
                  { icon: GraduationCap, text: 'Student transport for leading schools & colleges' },
                  { icon: MapPin, text: `Coverage across ${SERVICE_AREAS.length}+ local areas` },
                ].map(({ icon: Icon, text }) => (
                  <li key={text} className="flex items-center gap-3 text-text-secondary">
                    <span className="w-9 h-9 rounded-lg bg-white shadow-sm flex items-center justify-center text-pink-primary shrink-0">
                      <Icon className="w-4 h-4" />
                    </span>
                    {text}
                  </li>
                ))}
              </ul>
              <Button to="/about">Our Kolhapur story</Button>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-card"
            >
              <img
                src="https://images.unsplash.com/photo-1582510003544-4d00f4949606?w=900&q=80"
                alt="Kolhapur city — Rankala Lake and local streets"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-text-primary/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <p className="text-sm opacity-90 mb-2">Known landmarks</p>
                <div className="flex flex-wrap gap-2">
                  {LANDMARKS.slice(0, 4).map((l) => (
                    <span key={l.name} className="text-xs bg-white/20 backdrop-blur px-2.5 py-1 rounded-lg">
                      {l.name.split(',')[0]}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
