import { useEffect, useRef, useState } from 'react'
import { useInView, motion } from 'framer-motion'

export default function AnimatedCounter({ value, suffix = '', duration = 2 }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-40px' })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return

    let start = 0
    const end = value
    const startTime = performance.now()

    const tick = (now) => {
      const progress = Math.min((now - startTime) / (duration * 1000), 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      start = Math.floor(eased * end)
      setCount(start)
      if (progress < 1) requestAnimationFrame(tick)
      else setCount(end)
    }

    requestAnimationFrame(tick)
  }, [isInView, value, duration])

  return (
    <motion.span ref={ref} className="tabular-nums">
      {count.toLocaleString()}
      {suffix}
    </motion.span>
  )
}
