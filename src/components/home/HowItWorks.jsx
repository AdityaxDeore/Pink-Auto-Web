import { motion } from 'framer-motion'
import SectionHeading from '@/components/ui/SectionHeading'
import { HOW_IT_WORKS } from '@/data/content'

export default function HowItWorks() {
  return (
    <section className="section-padding bg-white">
      <div className="container-content">
        <SectionHeading
          label="How It Works"
          title="From booking to destination"
          description="A simple, transparent process designed for your peace of mind."
        />
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gray-200 md:-translate-x-px hidden md:block" />
          <div className="space-y-12 md:space-y-0">
            {HOW_IT_WORKS.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: i % 2 === 0 ? -24 : 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative md:grid md:grid-cols-2 md:gap-12 items-center ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className={`md:text-right ${i % 2 === 1 ? 'md:order-2 md:text-left' : ''} pl-16 md:pl-0`}>
                  <span className="text-sm font-semibold text-pink-primary">Step {step.step}</span>
                  <h3 className="text-2xl font-bold mt-1 mb-2">{step.title}</h3>
                  <p className="text-text-secondary">{step.description}</p>
                </div>
                <div className={`hidden md:block ${i % 2 === 1 ? 'md:order-1' : ''}`} />
                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-12 h-12 rounded-full bg-pink-primary text-white font-bold flex items-center justify-center shadow-card z-10">
                  {step.step}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
