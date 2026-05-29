import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import PageHero from '@/components/shared/PageHero'
import SectionHeading from '@/components/ui/SectionHeading'
import Icon from '@/components/ui/Icon'
import Button from '@/components/ui/Button'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { SERVICES } from '@/data/content'
import { usePageSeo } from '@/hooks/usePageSeo'

const details = {
  daily: {
    title: 'Daily Local Rides',
    image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1000&q=80',
    points: ['Point-to-point city travel', 'On-demand or scheduled', 'Verified drivers every ride', 'GPS-tracked journeys'],
  },
  school: {
    title: 'School Pickup & Drop',
    image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1000&q=80',
    points: ['Punctual morning and afternoon routes', 'Parent notifications available', 'Background-verified drivers', 'Institutional billing options'],
  },
  college: {
    title: 'College Pickup & Drop',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1000&q=80',
    points: ['Campus commute schedules', 'Student-friendly pricing', 'Verified drivers for hostels', 'Monthly student packages'],
  },
  office: {
    title: 'Office Commute',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1000&q=80',
    points: ['Fixed daily pickup times', 'Corporate partnership plans', 'Comfortable, clean vehicles', 'Dedicated route management'],
  },
  women: {
    title: 'Women-Only Rides',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1000&q=80',
    points: ['Female drivers for female passengers', 'Enhanced safety protocols', 'Preferred by solo travelers', 'Available 24/7 in service areas'],
  },
  senior: {
    title: 'Senior Citizen Transport',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=1000&q=80',
    points: ['Patient, assisted boarding', 'Door-to-door support', 'Family ride tracking', 'Trained courteous drivers'],
  },
  event: {
    title: 'Event Transportation',
    image: 'https://images.unsplash.com/photo-1519167758481-322f49c7c7be?w=1000&q=80',
    points: ['Weddings and family functions', 'Institutional events', 'Group booking support', 'Multiple vehicle coordination'],
  },
  monthly: {
    title: 'Monthly Ride Packages',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1000&q=80',
    points: ['Cost-effective subscription plans', 'School and corporate bundles', 'Fixed routes and schedules', 'Dedicated account support'],
  },
}

export default function Services() {
  usePageSeo()

  return (
    <>
      <PageHero
        label="Services"
        title="Transportation tailored to you"
        description="From a single ride to institutional programs — every service is built around safety and reliability."
      />

      <section className="section-padding bg-white">
        <div className="container-content">
          <SectionHeading
            label="Overview"
            title="Six ways we serve you"
            description="Choose the service that fits your life — or contact us for a custom plan."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {SERVICES.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="group bg-gray-50 rounded-2xl p-6 hover:bg-pink-soft transition-colors"
              >
                <Icon name={s.icon} className="text-pink-primary mb-4" size={28} />
                <h3 className="font-semibold mb-2 group-hover:text-pink-primary transition-colors">{s.title}</h3>
                <p className="text-sm text-text-secondary">{s.description}</p>
              </a>
            ))}
          </div>

          <div className="space-y-24">
            {SERVICES.map((service, i) => {
              const detail = details[service.id] || {
                title: service.title,
                image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1000&q=80',
                points: [service.description],
              }
              const reversed = i % 2 === 1
              return (
                <ScrollReveal key={service.id}>
                  <article
                    id={service.id}
                    className={`grid lg:grid-cols-2 gap-12 items-center scroll-mt-28 ${reversed ? 'lg:flex-row-reverse' : ''}`}
                  >
                    <div className={reversed ? 'lg:order-2' : ''}>
                      <span className="text-sm font-semibold text-pink-primary uppercase tracking-wider">{service.title}</span>
                      <h2 className="text-3xl font-bold mt-2 mb-4">{detail.title}</h2>
                      <p className="text-text-secondary text-lg mb-6">{service.description}</p>
                      <ul className="space-y-3 mb-8">
                        {detail.points.map((point) => (
                          <li key={point} className="flex items-center gap-3 text-text-secondary">
                            <span className="w-1.5 h-1.5 rounded-full bg-pink-primary shrink-0" />
                            {point}
                          </li>
                        ))}
                      </ul>
                      <Button to="/#booking">
                        Book this service
                        <ArrowRight size={18} />
                      </Button>
                    </div>
                    <motion.div
                      className={reversed ? 'lg:order-1' : ''}
                      whileInView={{ opacity: 1, scale: 1 }}
                      initial={{ opacity: 0, scale: 0.98 }}
                      viewport={{ once: true }}
                    >
                      <img
                        src={detail.image}
                        alt={detail.title}
                        className="rounded-3xl shadow-card w-full aspect-[4/3] object-cover"
                        loading="lazy"
                      />
                    </motion.div>
                  </article>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
