import { motion } from 'framer-motion'
import { Shield } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import Icon from '@/components/ui/Icon'
import { SAFETY_FEATURES } from '@/data/content'

export default function Safety() {
  return (
    <section id="safety" className="section-padding bg-text-primary text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-pink-primary blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-safety blur-3xl" />
      </div>
      <div className="container-content relative">
        <SectionHeading
          dark
          label="Your Safety"
          title="Safety is not a feature. It's our foundation."
          description="Every ride is backed by verification, tracking, and support — because your peace of mind is non-negotiable."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SAFETY_FEATURES.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-7 hover:bg-white/10 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-safety/20 text-safety flex items-center justify-center mb-5">
                <Icon name={feature.icon} size={24} className="text-safety" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 flex items-center justify-center gap-3 text-gray-400"
        >
          <Shield className="w-5 h-5 text-success" />
          <span className="text-sm">Trusted by thousands of families across the city</span>
        </motion.div>
      </div>
    </section>
  )
}
