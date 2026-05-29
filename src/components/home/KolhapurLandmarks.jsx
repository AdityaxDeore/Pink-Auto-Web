import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import { LANDMARKS, KOLHAPUR } from '@/data/kolhapur'

export default function KolhapurLandmarks() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-content">
        <SectionHeading
          label="Local Identity"
          title={`Known across ${KOLHAPUR.city}`}
          description="Landmarks and neighbourhoods that define Pink Auto's Kolhapur service network."
        />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {LANDMARKS.map((landmark, i) => (
            <motion.div
              key={landmark.name}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-sm"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-pink-soft to-purple-soft flex items-end p-4">
                <div>
                  <MapPin className="w-4 h-4 text-pink-primary mb-2" />
                  <p className="text-sm font-semibold text-text-primary leading-tight">
                    {landmark.name}
                  </p>
                  <p className="text-xs text-text-secondary mt-1">{landmark.note}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
