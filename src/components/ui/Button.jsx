import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { forwardRef } from 'react'

const variants = {
  primary: 'bg-pink-primary text-white hover:bg-pink-deep shadow-card hover:shadow-card-hover border-transparent',
  secondary: 'bg-white/80 backdrop-blur-md text-text-primary border border-gray-200 hover:border-pink-primary/50 hover:bg-pink-soft shadow-sm hover:shadow-md',
  outline: 'border-2 border-pink-primary text-pink-primary hover:bg-pink-primary hover:text-white',
  ghost: 'text-text-primary hover:bg-gray-100/80',
  white: 'bg-white text-pink-primary hover:bg-pink-soft shadow-glass hover:shadow-card-hover',
}

const sizes = {
  sm: 'px-5 py-2.5 text-sm font-semibold tracking-wide',
  md: 'px-7 py-3.5 text-base font-semibold tracking-wide',
  lg: 'px-9 py-4 text-base md:text-lg font-bold tracking-wide',
}

const Button = forwardRef(({
  children,
  variant = 'primary',
  size = 'md',
  className,
  href,
  to,
  external,
  type = 'button',
  ...props
}, ref) => {
  const classes = cn(
    'relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-primary focus-visible:ring-offset-2',
    variants[variant],
    sizes[size],
    className,
  )

  const MotionLink = motion.create(Link)
  const MotionA = motion.create('a')

  const hoverProps = {
    whileHover: { scale: 1.03 },
    whileTap: { scale: 0.98 },
  }

  if (to) {
    return (
      <MotionLink to={to} className={classes} ref={ref} {...hoverProps} {...props}>
        <span className="relative z-10 flex items-center justify-center gap-2">{children}</span>
      </MotionLink>
    )
  }

  if (href) {
    return (
      <MotionA
        href={href}
        className={classes}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        ref={ref}
        {...hoverProps}
        {...props}
      >
        <span className="relative z-10 flex items-center justify-center gap-2">{children}</span>
      </MotionA>
    )
  }

  return (
    <motion.button type={type} className={classes} ref={ref} {...hoverProps} {...props}>
      <span className="relative z-10 flex items-center justify-center gap-2">{children}</span>
    </motion.button>
  )
})

Button.displayName = 'Button'

export default Button
