import { motion } from 'framer-motion'
import SectionHeading from '@/components/ui/SectionHeading'
import Button from '@/components/ui/Button'
import AnimatedCounter from '@/components/ui/AnimatedCounter'
import { EMPOWERMENT_STATS } from '@/data/content'

export default function WomenEmpowerment() {
  return (
    <section className="relative section-padding overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1573497019940-1c28c88b4c3f?w=1600&q=80"
          alt="Women drivers empowered through Pink Auto"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-text-primary/85" />
      </div>
      <div className="container-content relative text-white">
        <SectionHeading
          dark
          label="Women Empowerment"
          title="Driving change, one woman at a time"
          description="Pink Auto isn't only about safe rides — it's about creating dignified employment and economic independence for women drivers."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {EMPOWERMENT_STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/10"
            >
              <p className="text-3xl md:text-4xl font-bold mb-2">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-sm text-white/80">{stat.label}</p>
            </motion.div>
          ))}
        </div>
        <div className="max-w-prose mx-auto text-center">
          <p className="text-lg text-white/90 leading-relaxed mb-8">
            We provide training, fair earnings, insurance support, and a respectful work environment — because empowered drivers create safer communities.
          </p>
          <Button to="/driver-registration" variant="white" size="lg">
            Join as a driver
          </Button>
        </div>
      </div>
    </section>
  )
}
