import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import SectionHeading from '@/components/ui/SectionHeading'
import Icon from '@/components/ui/Icon'
import Button from '@/components/ui/Button'
import { SAFETY_FEATURES } from '@/data/content'

export default function SafetyHighlights() {
  const highlights = SAFETY_FEATURES.slice(0, 4)

  return (
    <section className="section-padding bg-white">
      <div className="container-content">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <SectionHeading
            align="left"
            label="Safety First"
            title="Safety highlights"
            description="Every Pink Auto ride is backed by verification, tracking, and support."
            className="mb-0 !text-left"
          />
          <Button to="/safety" variant="secondary" className="shrink-0">
            All safety features
            <ArrowRight size={18} />
          </Button>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="p-6 rounded-2xl bg-pink-soft/50 border border-pink-100 hover:shadow-card transition-shadow"
            >
              <div className="w-11 h-11 rounded-xl bg-white text-pink-primary flex items-center justify-center mb-4 shadow-sm">
                <Icon name={item.icon} size={22} />
              </div>
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
