import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import PageHero from '@/components/shared/PageHero'
import SectionHeading from '@/components/ui/SectionHeading'
import { TESTIMONIALS } from '@/data/content'
import { usePageSeo } from '@/hooks/usePageSeo'

const categories = [
  { id: 'all', label: 'All' },
  { id: 'passenger', label: 'Women Passengers' },
  { id: 'parent', label: 'Parents' },
  { id: 'organization', label: 'Organizations' },
  { id: 'corporate', label: 'Corporate' },
]

export default function TestimonialsPage() {
  usePageSeo()
  const [filter, setFilter] = useState('all')

  const filtered =
    filter === 'all' ? TESTIMONIALS : TESTIMONIALS.filter((t) => t.category === filter)

  return (
    <>
      <PageHero
        label="Testimonials"
        title="What our community says"
        description="Reviews from women passengers, parents, organizations, and corporate clients."
      />
      <section className="section-padding bg-white">
        <div className="container-content">
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setFilter(cat.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === cat.id ? 'bg-pink-primary text-white' : 'bg-gray-100 text-text-secondary'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {filtered.map((t) => (
              <motion.blockquote
                key={t.name}
                layout
                className="bg-pink-soft/30 rounded-2xl p-8 border border-pink-100"
              >
                <p className="text-lg text-text-primary leading-relaxed mb-6">&ldquo;{t.quote}&rdquo;</p>
                <footer className="flex items-center gap-4">
                  <img src={t.image} alt="" className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <cite className="not-italic font-semibold text-text-primary">{t.name}</cite>
                    <p className="text-sm text-text-secondary">{t.role}</p>
                  </div>
                </footer>
              </motion.blockquote>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
