import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'

export default function DriverCTA() {
  return (
    <section className="section-padding">
      <div className="container-content">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden min-h-[400px] flex items-center"
        >
          <img
            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=1400&q=80"
            alt="Join Pink Auto as a woman driver"
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-text-primary/95 via-text-primary/80 to-transparent" />
          <div className="relative p-10 md:p-16 max-w-xl text-white">
            <span className="text-sm font-semibold tracking-widest uppercase text-pink-primary mb-4 block">
              Drive with purpose
            </span>
            <h2 className="text-section font-bold mb-4">
              Become a Pink Auto driver
            </h2>
            <p className="text-lg text-white/85 leading-relaxed mb-8">
              Join a platform that values your safety, dignity, and growth. Fair earnings, training, and a supportive community await.
            </p>
            <Button to="/driver-registration" variant="white" size="lg">
              Apply Now
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
