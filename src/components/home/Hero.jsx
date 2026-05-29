import { motion } from 'framer-motion'
import { CheckCircle2, ChevronDown, Sparkles } from 'lucide-react'
import Button from '@/components/ui/Button'
import PlayStoreBadge from '@/components/ui/PlayStoreBadge'
import AnimatedCounter from '@/components/ui/AnimatedCounter'
import HeroPhoneMockup from '@/components/home/HeroPhoneMockup'
import { HERO, HERO_STATS, TRUST_INDICATORS, SITE } from '@/data/content'
import { KOLHAPUR } from '@/data/kolhapur'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
}

const item = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  const playStoreUrl = import.meta.env.VITE_PLAY_STORE_URL || SITE.playStoreUrl

  return (
    <section className="relative min-h-[100svh] flex flex-col overflow-hidden">
      {/* Immersive background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-pink-soft/40 to-white pointer-events-none" />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.35, 0.5, 0.35],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-32 -right-32 w-[min(80vw,560px)] h-[min(80vw,560px)] rounded-full bg-pink-primary/15 blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.2, 0.35, 0.2],
          }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute -bottom-48 -left-32 w-[min(70vw,480px)] h-[min(70vw,480px)] rounded-full bg-safety/10 blur-3xl"
        />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #161616 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Main content */}
      <div className="relative flex-1 flex items-center pt-28 pb-8 md:pt-32">
        <div className="container-content w-full px-5 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 xl:gap-16 items-center min-h-[calc(100svh-8rem)]">
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="max-w-2xl z-10"
            >
              <motion.div
                variants={item}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-pink-100 shadow-sm backdrop-blur-sm mb-8"
              >
                <Sparkles className="w-4 h-4 text-pink-primary" />
                <span className="text-xs font-semibold tracking-widest uppercase text-pink-primary">
                  {HERO.locationBadge || KOLHAPUR.launchLine}
                </span>
              </motion.div>

              <motion.h1
                variants={item}
                className="text-[clamp(2.25rem,5.5vw,4rem)] font-bold text-text-primary leading-[1.08] tracking-tight mb-4"
              >
                {HERO.headline}
              </motion.h1>

              <motion.p
                variants={item}
                className="text-base md:text-lg text-pink-primary font-medium mb-2"
              >
                {HERO.subheadline}
              </motion.p>

              <motion.p
                variants={item}
                className="text-lg md:text-xl text-text-secondary mb-10 max-w-prose leading-relaxed"
              >
                Women-focused auto-rickshaw service in {KOLHAPUR.city} — safe, reliable, and empowering. {HERO.values}
              </motion.p>

              {/* Primary actions */}
              <motion.div variants={item} className="flex flex-col sm:flex-row flex-wrap gap-4 mb-6">
                <Button to="/book" size="lg" className="shadow-card-hover">
                  Book Now
                </Button>
                <Button to="/driver-registration" variant="secondary" size="lg">
                  Become a Driver
                </Button>
              </motion.div>

              {/* App download */}
              <motion.div variants={item} className="mb-10">
                <p className="text-sm text-text-secondary mb-3 font-medium">
                  Download the Pink Auto app
                </p>
                <div className="flex flex-wrap items-center gap-4">
                  <PlayStoreBadge url={playStoreUrl} size="lg" variant="dark" />
                  <p className="text-xs text-text-secondary max-w-[140px] leading-snug">
                    Book rides, track trips &amp; get emergency support on the go
                  </p>
                </div>
              </motion.div>

              {/* Trust pills */}
              <motion.ul
                variants={item}
                className="flex flex-wrap gap-2"
              >
                {TRUST_INDICATORS.map((text) => (
                  <li
                    key={text}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/70 border border-gray-100 text-xs font-medium text-text-secondary backdrop-blur-sm"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-success shrink-0" />
                    {text}
                  </li>
                ))}
              </motion.ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="relative lg:min-h-[520px]"
            >
              <HeroPhoneMockup />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.7 }}
        className="relative border-t border-gray-100/80 bg-white/60 backdrop-blur-xl"
      >
        <div className="container-content px-5 md:px-8 py-6 md:py-8">
          <div className="grid grid-cols-3 divide-x divide-gray-200/80">
            {HERO_STATS.map((stat) => (
              <div key={stat.label} className="text-center px-4 first:pl-0 last:pr-0">
                <p className="text-2xl md:text-3xl font-bold text-text-primary tabular-nums">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-xs md:text-sm text-text-secondary mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Scroll cue */}
      <motion.a
        href="#booking"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-28 md:bottom-32 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-text-secondary hover:text-pink-primary transition-colors z-10 hidden md:flex"
        aria-label="Scroll to booking"
      >
        <span className="text-[10px] uppercase tracking-widest font-medium">Explore</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity }}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.span>
      </motion.a>
    </section>
  )
}
