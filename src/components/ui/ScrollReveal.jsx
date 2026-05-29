import { motion } from 'framer-motion'

export default function ScrollReveal({
  children,
  className,
  delay = 0,
  direction = 'up',
  amount = 32,
  ...props
}) {
  const offsets = {
    up: { y: amount },
    down: { y: -amount },
    left: { x: amount },
    right: { x: -amount },
  }

  return (
    <motion.div
      initial={{ opacity: 0, ...offsets[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}
