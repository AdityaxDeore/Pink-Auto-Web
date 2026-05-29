import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'
import PlayStoreBadge from '@/components/ui/PlayStoreBadge'
import { SITE, HERO } from '@/data/content'
import { KOLHAPUR } from '@/data/kolhapur'

export default function CTABanner() {
  const playStoreUrl = import.meta.env.VITE_PLAY_STORE_URL || SITE.playStoreUrl

  return (
    <section className="section-padding">
      <div className="container-content">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-pink-primary to-purple-600 p-10 md:p-14 text-center text-white"
        >
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSIxIiBmaWxsPSJ3aGl0ZSIgZmlsbC1vcGFjaXR5PSIwLjA4Ii8+PC9zdmc+')] opacity-50" />
          <div className="relative max-w-2xl mx-auto">
            <p className="text-sm font-semibold tracking-widest uppercase opacity-90 mb-3">{HERO.values}</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready for a safe ride?</h2>
            <p className="text-lg text-white/90 mb-8 leading-relaxed">
              Book now in {KOLHAPUR.city} via app, WhatsApp, or online. {HERO.subheadline}
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4">
              <Button to="/book" variant="white" size="lg">Book Now</Button>
              <Button to="/driver-registration" variant="white" size="lg" className="!bg-white/15 !text-white border border-white/30 hover:!bg-white/25">
                Become a Driver
              </Button>
            </div>
            <div className="mt-8 flex justify-center">
              <PlayStoreBadge url={playStoreUrl} variant="outline" size="md" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
