import { motion } from 'framer-motion'
import SectionHeading from '@/components/ui/SectionHeading'
import Icon from '@/components/ui/Icon'
import { WHY_CHOOSE } from '@/data/content'

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-pink-soft/50">
      <div className="container-content">
        <SectionHeading
          label="Why Choose Us"
          title="Why families trust Pink Auto"
          description="Every detail — from driver verification to ride monitoring — is designed so you feel safe."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="bg-white rounded-2xl p-8 text-center shadow-card hover:shadow-card-hover transition-shadow"
            >
              <div className="w-14 h-14 rounded-2xl bg-pink-soft text-pink-primary flex items-center justify-center mx-auto mb-5">
                <Icon name={item.icon} size={28} />
              </div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-text-secondary text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
