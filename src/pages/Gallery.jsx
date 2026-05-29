import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import PageHero from '@/components/shared/PageHero'
import { GALLERY_ITEMS, GALLERY_CATEGORIES } from '@/data/content'
import { cn } from '@/lib/utils'
import { usePageSeo } from '@/hooks/usePageSeo'

export default function Gallery() {
  usePageSeo()
  const [filter, setFilter] = useState('all')
  const [lightbox, setLightbox] = useState(null)

  const filtered =
    filter === 'all' ? GALLERY_ITEMS : GALLERY_ITEMS.filter((i) => i.category === filter)

  return (
    <>
      <PageHero
        label="Gallery"
        title="Moments from our journey"
        description="Our fleet, drivers, events, and the community we proudly serve."
      />

      <section className="section-padding bg-white">
        <div className="container-content">
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {GALLERY_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setFilter(cat.id)}
                className={cn(
                  'px-5 py-2 rounded-full text-sm font-medium transition-all',
                  filter === cat.id
                    ? 'bg-pink-primary text-white shadow-card'
                    : 'bg-gray-100 text-text-secondary hover:bg-pink-soft',
                )}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <motion.div layout className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            <AnimatePresence mode="popLayout">
              {filtered.map((item) => (
                <motion.button
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  type="button"
                  onClick={() => setLightbox(item)}
                  className="block w-full break-inside-avoid rounded-2xl overflow-hidden group focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-primary"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </motion.button>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
            role="dialog"
            aria-modal="true"
          >
            <button
              type="button"
              className="absolute top-6 right-6 text-white p-2 rounded-full hover:bg-white/10"
              onClick={() => setLightbox(null)}
              aria-label="Close"
            >
              <X size={28} />
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              src={lightbox.image}
              alt={lightbox.title}
              className="max-w-full max-h-[85vh] rounded-2xl object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
