import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { NAV_LINKS, SITE } from '@/data/content'
import { useScrollHeader } from '@/hooks/useScrollHeader'
import Button from '@/components/ui/Button'
import { cn } from '@/lib/utils'

const primaryNav = NAV_LINKS.filter((l) => !['/testimonials'].includes(l.path))

export default function Header() {
  const scrolled = useScrollHeader()
  const [mobileOpen, setMobileOpen] = useState(false)
  const { pathname } = useLocation()
  const playStoreUrl = import.meta.env.VITE_PLAY_STORE_URL || SITE.playStoreUrl

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        scrolled
          ? 'bg-white/70 backdrop-blur-2xl shadow-glass border-b border-white/50 py-3'
          : 'bg-transparent py-5 lg:py-6',
      )}
    >
      <div className="container-content flex items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-3 group" aria-label="Pink Auto home">
          <motion.div 
            whileHover={{ rotate: 10, scale: 1.1 }}
            className="w-10 h-10 rounded-2xl bg-gradient-to-br from-pink-primary to-pink-deep flex items-center justify-center text-white font-black text-sm shadow-glow"
          >
            PA
          </motion.div>
          <span className="font-extrabold text-xl tracking-tight text-gray-900 group-hover:text-pink-primary transition-colors duration-300">
            Pink Auto
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-1 bg-white/40 backdrop-blur-md rounded-full px-2 py-1 shadow-sm border border-white/60" aria-label="Main navigation">
          {primaryNav.map((link) => {
            const isActive = pathname === link.path
            return (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  'relative px-5 py-2 font-semibold text-sm transition-all duration-300 rounded-full',
                  isActive ? 'text-white' : 'text-gray-600 hover:text-gray-900 hover:bg-white/60'
                )}
              >
                {isActive && (
                  <motion.div
                    layoutId="header-active-nav"
                    className="absolute inset-0 bg-pink-primary rounded-full -z-10 shadow-md"
                    initial={false}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {link.label}
              </Link>
            )
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a
            href={playStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-bold text-gray-600 hover:text-pink-primary transition-colors px-2"
          >
            Get App
          </a>
          <Button to="/book" variant="secondary" size="md" className="rounded-full">
            Book Now
          </Button>
          <Button to="/driver-registration" size="md" className="shadow-glow">
            Become Driver
          </Button>
        </div>

        {/* Mobile menu trigger */}
        <button
          type="button"
          className="lg:hidden relative z-50 p-2.5 rounded-full bg-white shadow-sm border border-gray-100 text-gray-900 hover:bg-gray-50 flex items-center justify-center transition-transform active:scale-95"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          <motion.div animate={{ rotate: mobileOpen ? 180 : 0 }}>
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </motion.div>
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <nav className="flex flex-col p-5 gap-1" aria-label="Mobile navigation">
              {primaryNav.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    'py-3 px-4 rounded-xl font-medium',
                    pathname === link.path ? 'bg-pink-soft text-pink-primary' : 'text-text-primary',
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/testimonials"
                onClick={() => setMobileOpen(false)}
                className="py-3 px-4 rounded-xl font-medium text-text-primary"
              >
                Testimonials
              </Link>
              <div className="flex flex-col gap-2 pt-4 mt-2 border-t border-gray-100">
                <a
                  href={playStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-4 rounded-xl font-semibold text-center bg-pink-soft text-pink-primary"
                  onClick={() => setMobileOpen(false)}
                >
                  Get App on Google Play
                </a>
                <Button to="/book" variant="secondary" className="w-full" onClick={() => setMobileOpen(false)}>
                  Book Now
                </Button>
                <Button to="/driver-registration" className="w-full" onClick={() => setMobileOpen(false)}>
                  Become Driver
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
