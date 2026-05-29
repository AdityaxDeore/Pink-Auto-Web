import { Link } from 'react-router-dom'
import { cn } from '@/lib/utils'

const variants = {
  primary: 'bg-pink-primary text-white hover:bg-pink-primary/90 shadow-card hover:shadow-card-hover',
  secondary: 'bg-white text-text-primary border border-gray-200 hover:border-pink-primary/30 hover:bg-pink-soft',
  outline: 'border-2 border-pink-primary text-pink-primary hover:bg-pink-soft',
  ghost: 'text-text-primary hover:bg-gray-100',
  white: 'bg-white text-pink-primary hover:bg-pink-soft shadow-card',
}

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-3.5 text-base',
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className,
  href,
  to,
  external,
  type = 'button',
  ...props
}) {
  const classes = cn(
    'inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-primary focus-visible:ring-offset-2',
    variants[variant],
    sizes[size],
    className,
  )

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        {...props}
      >
        {children}
      </a>
    )
  }

  return (
    <button type={type} className={classes} {...props}>
      {children}
    </button>
  )
}
