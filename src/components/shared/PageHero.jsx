import { motion } from 'framer-motion'

export default function PageHero({ label, title, description, image }) {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-soft">
      {image && (
        <>
          <img src={image} alt="" className="absolute inset-0 w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/60 to-white" />
        </>
      )}
      <div className="container-content relative px-5 md:px-8 text-center max-w-3xl mx-auto">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-block text-sm font-semibold tracking-widest uppercase text-pink-primary mb-4"
        >
          {label}
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-hero font-bold text-text-primary mb-6"
        >
          {title}
        </motion.h1>
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-text-secondary leading-relaxed"
          >
            {description}
          </motion.p>
        )}
      </div>
    </section>
  )
}
