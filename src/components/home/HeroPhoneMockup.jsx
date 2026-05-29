import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { MapPin, Shield, Navigation, Star } from 'lucide-react'

export default function HeroPhoneMockup() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], [0, 80])
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 4])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.92])

  return (
    <div ref={ref} className="relative flex justify-center lg:justify-end perspective-[1200px]">
      {/* Ambient glow behind phone */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] md:w-[420px] md:h-[420px] rounded-full bg-pink-primary/20 blur-[80px] pointer-events-none" />

      {/* Floating cards */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -left-4 md:-left-12 top-[18%] z-20 bg-white rounded-2xl px-4 py-3 shadow-card border border-gray-100/80 backdrop-blur-sm"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-success/15 flex items-center justify-center">
            <Shield className="w-5 h-5 text-success" />
          </div>
          <div>
            <p className="text-xs text-text-secondary">Driver verified</p>
            <p className="text-sm font-semibold">Priya K. · 4.9★</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        className="absolute -right-2 md:-right-8 top-[42%] z-20 bg-white rounded-2xl px-4 py-3 shadow-card border border-gray-100/80"
      >
        <div className="flex items-center gap-2 text-safety">
          <Navigation className="w-4 h-4" />
          <span className="text-sm font-semibold text-text-primary">Live GPS active</span>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute left-1/2 -translate-x-1/2 -bottom-2 md:bottom-4 z-20 bg-pink-primary text-white rounded-2xl px-5 py-3 shadow-card-hover"
      >
        <p className="text-xs opacity-90">Ride arriving in</p>
        <p className="text-lg font-bold">3 min</p>
      </motion.div>

      {/* Phone frame */}
      <motion.div style={{ y, rotate, scale }} className="relative z-10">
        <motion.div
          animate={{ y: [0, -14, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          className="relative w-[260px] sm:w-[280px] md:w-[300px]"
        >
          <div className="rounded-[2.75rem] bg-text-primary p-2.5 shadow-2xl shadow-pink-primary/20 ring-1 ring-white/10">
            <div className="rounded-[2.25rem] overflow-hidden bg-white aspect-[9/19.5] relative">
              {/* Status bar */}
              <div className="absolute top-0 inset-x-0 h-11 bg-gradient-to-b from-pink-soft to-white z-10 flex items-end justify-center pb-1">
                <div className="w-20 h-5 bg-text-primary rounded-full" />
              </div>

              {/* App UI */}
              <div className="pt-12 px-4 pb-4 h-full flex flex-col bg-gradient-to-b from-pink-soft/80 to-white">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-[10px] text-text-secondary">Good morning</p>
                    <p className="text-sm font-bold text-text-primary">Book a safe ride</p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-pink-primary flex items-center justify-center text-white text-[10px] font-bold">
                    PA
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-3 shadow-card border border-pink-100/80 mb-3">
                  <div className="flex items-start gap-2 mb-2">
                    <MapPin className="w-3.5 h-3.5 text-pink-primary shrink-0 mt-0.5" />
                    <div className="min-w-0">
                      <p className="text-[9px] text-text-secondary">Pickup</p>
                      <p className="text-[11px] font-medium truncate">Home — Sector 12</p>
                    </div>
                  </div>
                  <div className="h-px bg-gray-100 my-2 ml-5" />
                  <div className="flex items-start gap-2">
                    <MapPin className="w-3.5 h-3.5 text-safety shrink-0 mt-0.5" />
                    <div>
                      <p className="text-[9px] text-text-secondary">Drop</p>
                      <p className="text-[11px] font-medium truncate">City Mall</p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 mb-3">
                  {['Women Only', 'School'].map((label) => (
                    <div
                      key={label}
                      className="bg-white rounded-xl py-2 px-2 text-center text-[10px] font-medium border border-gray-100"
                    >
                      {label}
                    </div>
                  ))}
                </div>

                <div className="mt-auto">
                  <div className="w-full py-2.5 rounded-xl bg-pink-primary text-white text-center text-xs font-semibold shadow-lg shadow-pink-primary/30">
                    Book Pink Auto
                  </div>
                  <div className="flex items-center justify-center gap-1 mt-2">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-2.5 h-2.5 fill-amber-400 text-amber-400" />
                    ))}
                    <span className="text-[9px] text-text-secondary ml-1">4.9 · 2k+ rides</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Background photo - subtle */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="absolute inset-0 -z-10 rounded-[3rem] overflow-hidden opacity-40 lg:opacity-60 max-w-md mx-auto"
      >
        <img
          src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80"
          alt=""
          className="w-full h-full object-cover blur-sm scale-110"
          aria-hidden
        />
      </motion.div>
    </div>
  )
}
