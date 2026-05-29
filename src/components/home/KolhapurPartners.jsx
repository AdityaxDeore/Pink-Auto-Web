import { motion } from 'framer-motion'
import { Handshake, Building2, Heart } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import { NGOS, WOMEN_ORGANIZATIONS, FUTURE_PARTNERSHIPS } from '@/data/kolhapur'

export default function KolhapurPartners() {
  return (
    <section className="section-padding bg-purple-soft/40 border-y border-purple-100/80">
      <div className="container-content">
        <SectionHeading
          label="Community Partners"
          title={FUTURE_PARTNERSHIPS.headline}
          description={FUTURE_PARTNERSHIPS.intro}
        />

        <div className="grid lg:grid-cols-2 gap-10 mb-12">
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Heart className="w-5 h-5 text-pink-primary" />
              NGOs & social organizations
            </h3>
            <ul className="space-y-3">
              {NGOS.map((ngo) => (
                <li
                  key={ngo.name}
                  className="flex items-start gap-3 p-4 rounded-xl bg-white border border-gray-100"
                >
                  <span className="w-2 h-2 rounded-full bg-pink-primary mt-2 shrink-0" />
                  <div>
                    <p className="font-medium text-text-primary">{ngo.name}</p>
                    <p className="text-sm text-text-secondary">{ngo.focus}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Building2 className="w-5 h-5 text-purple-600" />
              Women empowerment organizations
            </h3>
            <ul className="space-y-3">
              {WOMEN_ORGANIZATIONS.map((org) => (
                <li
                  key={org.name}
                  className="flex items-start gap-3 p-4 rounded-xl bg-white border border-pink-100/80"
                >
                  <span className="w-2 h-2 rounded-full bg-purple-600 mt-2 shrink-0" />
                  <div>
                    <p className="font-medium text-text-primary">{org.name}</p>
                    <p className="text-sm text-text-secondary">{org.focus}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {FUTURE_PARTNERSHIPS.categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="p-5 rounded-2xl bg-white shadow-sm border border-gray-100"
            >
              <Handshake className="w-5 h-5 text-pink-primary mb-3" />
              <h4 className="font-semibold mb-3">{cat.title}</h4>
              <ul className="space-y-1.5 text-sm text-text-secondary">
                {cat.items.slice(0, 4).map((item) => (
                  <li key={item} className="line-clamp-2">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
