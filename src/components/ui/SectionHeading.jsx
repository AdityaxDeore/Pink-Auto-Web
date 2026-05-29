import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

export default function SectionHeading({
  label,
  title,
  description,
  align = 'center',
  className,
  dark = false,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        'mb-12 md:mb-16',
        align === 'center' && 'text-center mx-auto max-w-prose',
        align === 'left' && 'text-left max-w-prose',
        className,
      )}
    >
      {label && (
        <span
          className={cn(
            'inline-block text-sm font-semibold tracking-widest uppercase mb-4',
            dark ? 'text-pink-soft' : 'text-pink-primary',
          )}
        >
          {label}
        </span>
      )}
      <h2
        className={cn(
          'text-section font-bold mb-4',
          dark ? 'text-white' : 'text-text-primary',
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            'text-lg leading-relaxed',
            dark ? 'text-white/80' : 'text-text-secondary',
          )}
        >
          {description}
        </p>
      )}
    </motion.div>
  )
}
