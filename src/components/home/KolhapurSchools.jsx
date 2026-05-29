import { motion } from 'framer-motion'
import { GraduationCap, CheckCircle2 } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import Button from '@/components/ui/Button'
import { SCHOOLS, STUDENT_TRANSPORT_COPY } from '@/data/kolhapur'

export default function KolhapurSchools() {
  return (
    <section className="section-padding bg-white">
      <div className="container-content">
        <SectionHeading
          label="Student Transport"
          title="Schools & educational institutions in Kolhapur"
          description={STUDENT_TRANSPORT_COPY}
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SCHOOLS.map((school, i) => (
            <motion.article
              key={school.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="p-6 rounded-2xl border border-gray-100 bg-gray-50/50 hover:border-pink-200 hover:shadow-card transition-all"
            >
              <GraduationCap className="w-6 h-6 text-pink-primary mb-3" />
              <h3 className="font-semibold text-text-primary mb-1 leading-snug">{school.name}</h3>
              <p className="text-xs text-pink-primary font-medium mb-3">{school.board}</p>
              <ul className="space-y-1.5">
                {school.services.map((s) => (
                  <li key={s} className="flex items-center gap-2 text-sm text-text-secondary">
                    <CheckCircle2 className="w-3.5 h-3.5 text-success shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
        <div className="text-center mt-10 flex flex-wrap justify-center gap-4">
          <Button to="/book" size="lg">Book school pickup</Button>
          <Button to="/services#school" variant="secondary">
            View school services
          </Button>
        </div>
      </div>
    </section>
  )
}
