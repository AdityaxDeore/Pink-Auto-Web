import { KOLHAPUR } from '@/data/kolhapur'
import { motion } from 'framer-motion'
import SectionHeading from '@/components/ui/SectionHeading'
import Button from '@/components/ui/Button'
import AnimatedCounter from '@/components/ui/AnimatedCounter'
import ScrollReveal from '@/components/ui/ScrollReveal'

const stats = [
  { value: 5000, suffix: '+', label: 'Rides Completed' },
  { value: 100, suffix: '+', label: 'Verified Drivers' },
  { value: 50, suffix: '+', label: 'Partner Schools' },
  { value: 98, suffix: '%', label: 'Customer Satisfaction' },
]

export default function AboutSection() {
  return (
    <section className="section-padding bg-white overflow-hidden">
      <div className="container-content">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal direction="left">
            <SectionHeading
              align="left"
              label="About Pink Auto"
              title="Built on trust, driven by care"
              description={`We started with one belief: every woman, student, and family in ${KOLHAPUR.city} deserves transport they can trust without hesitation.`}
              className="mb-8 !text-left"
            />
            <div className="space-y-6 text-text-secondary text-lg leading-relaxed max-w-prose">
              <p>
                <strong className="text-text-primary">Our mission</strong> is to provide safe, dignified, and reliable auto-rickshaw transportation while creating meaningful employment for women drivers.
              </p>
              <p>
                <strong className="text-text-primary">Our vision</strong> is a {KOLHAPUR.city} where no parent worries about their child's school commute, and no woman thinks twice before booking a ride home at night.
              </p>
            </div>
            <Button to="/about" className="mt-8">Read our full story</Button>
          </ScrollReveal>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="rounded-3xl overflow-hidden aspect-[4/3] shadow-card"
            >
              <img
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=900&q=80"
                alt="Pink Auto community and passengers"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </motion.div>
            <div className="grid grid-cols-2 gap-4 mt-6">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-pink-soft rounded-2xl p-5 text-center"
                >
                  <p className="text-2xl font-bold text-text-primary">
                    <AnimatedCounter value={s.value} suffix={s.suffix} />
                  </p>
                  <p className="text-sm text-text-secondary mt-1">{s.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
