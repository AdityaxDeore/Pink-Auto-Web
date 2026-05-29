import { motion } from 'framer-motion'
import { Shield, MapPin, Phone, FileText } from 'lucide-react'
import PageHero from '@/components/shared/PageHero'
import SectionHeading from '@/components/ui/SectionHeading'
import Icon from '@/components/ui/Icon'
import Button from '@/components/ui/Button'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { SAFETY_FEATURES } from '@/data/content'
import { usePageSeo } from '@/hooks/usePageSeo'

const illustrations = [
  { icon: Shield, color: 'bg-pink-soft text-pink-primary', label: 'Verified' },
  { icon: MapPin, color: 'bg-purple-soft text-purple-600', label: 'GPS' },
  { icon: Phone, color: 'bg-green-50 text-success', label: 'SOS' },
  { icon: FileText, color: 'bg-gray-100 text-text-primary', label: 'Policy' },
]

export default function SafetyPage() {
  usePageSeo()

  return (
    <>
      <PageHero
        label="Safety Features"
        title="Your safety, our priority"
        description="Verified drivers, live tracking, emergency support, and clear policies on every ride."
      />

      <section className="section-padding bg-white">
        <div className="container-content">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <ScrollReveal direction="left">
              <SectionHeading
                align="left"
                label="Trust by design"
                title="Built for families who need proof of safety"
                description="Pink Auto combines technology, training, and policies so you can trust every ride."
                className="mb-6 !text-left"
              />
              <div className="grid grid-cols-2 gap-4">
                {illustrations.map(({ icon: IllusIcon, color, label }) => (
                  <div key={label} className={`flex flex-col items-center p-6 rounded-2xl ${color}`}>
                    <IllusIcon className="w-10 h-10 mb-2" />
                    <span className="text-sm font-semibold">{label}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-pink-soft via-purple-soft to-white flex items-center justify-center p-8 border border-pink-100">
                <div className="text-center">
                  <Shield className="w-24 h-24 text-pink-primary mx-auto mb-4 opacity-80" />
                  <p className="text-lg font-semibold text-text-primary">End-to-end ride protection</p>
                  <p className="text-text-secondary mt-2">From booking to drop-off</p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <SectionHeading label="Features" title="Complete safety toolkit" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SAFETY_FEATURES.map((feature, i) => (
              <motion.article
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:border-pink-primary/20 hover:shadow-card transition-all"
              >
                <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-pink-primary mb-5">
                  <Icon name={feature.icon} size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-text-secondary leading-relaxed">{feature.description}</p>
              </motion.article>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button to="/book" size="lg">Book a safe ride</Button>
          </div>
        </div>
      </section>
    </>
  )
}
