import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import Icon from '@/components/ui/Icon'
import Button from '@/components/ui/Button'
import { SERVICES } from '@/data/content'

export default function ServicesSection() {
  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container-content">
        <SectionHeading
          label="Our Services"
          title="Transportation for every need"
          description="From daily commutes to institutional programs — safe rides tailored to you."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => (
            <motion.article
              key={service.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="group bg-white rounded-2xl p-8 shadow-card border border-transparent hover:border-pink-primary/20 hover:shadow-card-hover transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-pink-soft flex items-center justify-center text-pink-primary mb-6 group-hover:scale-110 transition-transform">
                <Icon name={service.icon} size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-text-secondary leading-relaxed">{service.description}</p>
            </motion.article>
          ))}
        </div>
        <div className="text-center mt-12 flex flex-wrap justify-center gap-4">
          <Button to="/book" size="lg">Book Now</Button>
          <Button to="/services" variant="secondary">
            View all services
            <ArrowRight size={18} />
          </Button>
        </div>
      </div>
    </section>
  )
}
