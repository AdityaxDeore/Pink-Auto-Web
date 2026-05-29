import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { Link } from 'react-router-dom'
import SectionHeading from '@/components/ui/SectionHeading'
import Button from '@/components/ui/Button'
import { TESTIMONIALS } from '@/data/content'

export default function Testimonials() {
  const [index, setIndex] = useState(0)
  const current = TESTIMONIALS[index]

  const next = () => setIndex((i) => (i + 1) % TESTIMONIALS.length)
  const prev = () => setIndex((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)

  return (
    <section className="section-padding bg-pink-soft/30">
      <div className="container-content">
        <SectionHeading
          label="Testimonials"
          title="Stories from our community"
          description="Hear from passengers, parents, and partners who trust Pink Auto every day."
        />
        <div className="max-w-3xl mx-auto relative">
          <Quote className="w-12 h-12 text-pink-primary/30 absolute -top-4 left-0" />
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={index}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-3xl p-8 md:p-12 shadow-card text-center"
            >
              <p className="text-xl md:text-2xl text-text-primary leading-relaxed mb-8 font-medium">
                &ldquo;{current.quote}&rdquo;
              </p>
              <div className="flex flex-col items-center gap-4">
                <img
                  src={current.image}
                  alt=""
                  className="w-16 h-16 rounded-full object-cover ring-4 ring-pink-soft"
                  loading="lazy"
                />
                <div>
                  <cite className="not-italic font-semibold text-text-primary">{current.name}</cite>
                  <p className="text-sm text-text-secondary">{current.role}</p>
                </div>
              </div>
            </motion.blockquote>
          </AnimatePresence>
          <div className="flex justify-center gap-4 mt-8">
            <button
              type="button"
              onClick={prev}
              className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-white hover:shadow-card transition-all"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex items-center gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setIndex(i)}
                  className={`w-2 h-2 rounded-full transition-all ${i === index ? 'bg-pink-primary w-6' : 'bg-gray-300'}`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={next}
              className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-white hover:shadow-card transition-all"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
        <div className="text-center mt-10">
          <Button to="/testimonials" variant="secondary">
            Read all testimonials
          </Button>
        </div>
      </div>
    </section>
  )
}
