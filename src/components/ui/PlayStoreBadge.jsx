import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

function GooglePlayLogo({ className }) {
  return (
    <svg className={className} viewBox="0 0 512 512" aria-hidden="true">
      <path fill="#4285F4" d="M32.5 2.4C30 4.2 28.3 7.5 28.3 12v488c0 4.5 1.7 7.8 4.2 9.6l243.6-243.6L32.5 2.4z" />
      <path fill="#34A853" d="M276.1 266l-243.6 243.6c4.2 2.4 9.3 2.6 14.6 0l260.6-150.3L276.1 266z" />
      <path fill="#FBBC04" d="M307.7 234l-31.6 32 31.6 32 104.5-60.3c11.9-6.9 11.9-18.1 0-25L307.7 234z" />
      <path fill="#EA4335" d="M276.1 266l31.6-32L47.1 8.7C41.8 6.1 36.7 6.3 32.5 8.7L276.1 266z" />
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
    sm: 'px-4 py-2 gap-2.5 rounded-xl',
    md: 'px-5 py-2.5 gap-3 rounded-2xl',
    lg: 'px-6 py-3 gap-3.5 rounded-2xl',
  }

  const variants = {
    dark: 'bg-black text-white border border-white/10 hover:border-white/20 shadow-lg hover:shadow-xl hover:bg-gray-900',
    light: 'bg-white text-gray-900 border border-gray-200 hover:border-gray-300 shadow-card hover:bg-gray-50',
    outline: 'bg-transparent text-white border-2 border-white/50 hover:bg-white/10 backdrop-blur-sm',
  }

  return (
    <motion.a
      href={storeUrl}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.03, y: -2 }}
      whileTap={{ scale: 0.97 }}
      className={cn(
        'inline-flex items-center transition-all duration-300',
        'focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-primary focus-visible:ring-offset-2',
        sizes[size],
        variants[variant],
        className,
      )}
      aria-label="Get it on Google Play"
    >
      <GooglePlayLogo className="w-8 h-8 shrink-0 drop-shadow-sm" />
      <div className="flex flex-col items-start justify-center">
        <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.05em] uppercase opacity-80 leading-none mb-0.5">
          Get it on
        </span>
        <span className="text-[18px] sm:text-[20px] font-bold tracking-[-0.02em] leading-none" style={{ fontFamily: 'Product Sans, Inter, sans-serif' }}>
          Google Play
        </span>
      </div>
    </motion.a>
  )
}
