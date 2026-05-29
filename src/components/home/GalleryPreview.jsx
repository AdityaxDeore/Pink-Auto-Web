import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import Button from '@/components/ui/Button'
import { GALLERY_ITEMS } from '@/data/content'

export default function GalleryPreview() {
  const [lightbox, setLightbox] = useState(null)
  const preview = GALLERY_ITEMS.slice(0, 6)

  return (
    <section className="section-padding bg-white">
      <div className="container-content">
        <SectionHeading
          label="Gallery"
          title="Life at Pink Auto"
          description="Our fleet, drivers, events, and the community we serve."
        />
        <div className="columns-2 md:columns-3 gap-4 space-y-4">
          {preview.map((item, i) => (
            <motion.button
              key={item.id}
              type="button"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
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
        </div>
        <div className="text-center mt-12">
          <Button to="/gallery" variant="secondary">View full gallery</Button>
        </div>
      </div>

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
            aria-label="Image lightbox"
          >
            <button
              type="button"
              className="absolute top-6 right-6 text-white p-2 rounded-full hover:bg-white/10"
              onClick={() => setLightbox(null)}
              aria-label="Close lightbox"
            >
              <X size={28} />
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={lightbox.image}
              alt={lightbox.title}
              className="max-w-full max-h-[85vh] rounded-2xl object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
