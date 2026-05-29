import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

function GooglePlayLogo({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden>
      <path fill="#EA4335" d="M1.04 1.21l10.24 10.24L1.04 22.69A1.49 1.49 0 0 1 0 21.35V2.65a1.49 1.49 0 0 1 1.04-1.44z" />
      <path fill="#FBBC04" d="M11.28 12L22.96 1.21a1.49 1.49 0 0 1 1.04 1.44v19.7a1.49 1.49 0 0 1-1.04 1.44L11.28 12z" />
      <path fill="#4285F4" d="M11.28 12L1.04 1.21l10.24 10.79L11.28 12z" />
      <path fill="#34A853" d="M11.28 12l10.24 10.79L1.04 22.69 11.28 12z" />
    </svg>
  )
}

export default function PlayStoreBadge({
  url,
  className,
  size = 'md',
  variant = 'dark',
}) {
  const storeUrl = url || import.meta.env.VITE_PLAY_STORE_URL || '#'

  const sizes = {
    sm: 'px-4 py-2.5 gap-3',
    md: 'px-5 py-3 gap-3.5',
    lg: 'px-6 py-3.5 gap-4',
  }

  const variants = {
    dark: 'bg-text-primary text-white hover:bg-black border border-white/10 shadow-lg',
    light: 'bg-white text-text-primary hover:bg-gray-50 border border-gray-200 shadow-card',
    outline: 'bg-white/10 text-white border-2 border-white/35 hover:bg-white/20 backdrop-blur-sm',
  }

  return (
    <motion.a
      href={storeUrl}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.03, y: -2 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        'inline-flex items-center rounded-2xl transition-all duration-300',
        'focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-primary focus-visible:ring-offset-2',
        sizes[size],
        variants[variant],
        className,
      )}
      aria-label="Download Pink Auto on Google Play"
    >
      <GooglePlayLogo className="w-8 h-8 shrink-0" />
      <div className="text-left leading-tight">
        <span className="block text-[10px] uppercase tracking-wider opacity-75 font-medium">
          Get it on
        </span>
        <span className="block text-[17px] font-semibold tracking-tight -mt-0.5">Google Play</span>
      </div>
    </motion.a>
  )
}
