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
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-white/80 backdrop-blur-xl shadow-glass border-b border-gray-100/80 py-3'
          : 'bg-transparent py-5',
      )}
    >
      <div className="container-content flex items-center justify-between gap-4 px-5 md:px-8">
        <Link to="/" className="flex items-center gap-2 group" aria-label="Pink Auto home">
          <span className="w-9 h-9 rounded-xl bg-pink-primary flex items-center justify-center text-white font-bold text-sm shadow-card">
            PA
          </span>
          <span className="font-bold text-lg text-text-primary group-hover:text-pink-primary transition-colors">
            Pink Auto
          </span>
        </Link>

        <nav className="hidden xl:flex items-center gap-6" aria-label="Main navigation">
          {primaryNav.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                'text-sm font-medium transition-colors',
                pathname === link.path ? 'text-pink-primary' : 'text-text-secondary hover:text-text-primary',
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href={playStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-pink-primary hover:text-pink-primary/80 transition-colors px-2"
          >
            Get App
          </a>
          <Button to="/book" variant="secondary" size="sm">
            Book Now
          </Button>
          <Button to="/driver-registration" size="sm">
            Become Driver
          </Button>
        </div>

        <button
          type="button"
          className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
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
