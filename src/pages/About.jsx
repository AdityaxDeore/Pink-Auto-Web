import { motion } from 'framer-motion'
import PageHero from '@/components/shared/PageHero'
import SectionHeading from '@/components/ui/SectionHeading'
import Button from '@/components/ui/Button'
import AnimatedCounter from '@/components/ui/AnimatedCounter'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { TIMELINE, EMPOWERMENT_STATS, BRAND, SITE } from '@/data/content'
import { KOLHAPUR, WOMEN_ORGANIZATIONS } from '@/data/kolhapur'
import { usePageSeo } from '@/hooks/usePageSeo'

const stats = [
  { value: 5000, suffix: '+', label: 'Safe Rides' },
  { value: 100, suffix: '+', label: 'Women Drivers' },
  { value: 50, suffix: '+', label: 'Partners' },
  { value: 4, suffix: '+', label: 'Years of Service' },
]

export default function About() {
  usePageSeo()

  return (
    <>
      <PageHero
        label="About Us"
        title={`Pink Auto in ${KOLHAPUR.city}`}
        description={`Women-focused transportation launching in ${KOLHAPUR.city}, ${KOLHAPUR.state} — safe rides, women drivers, and community trust.`}
      />

      <section id="story" className="section-padding bg-white">
        <div className="container-content grid lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal direction="left">
            <SectionHeading
              align="left"
              label="Our Story"
              title="From one idea to thousands of safe rides"
              className="mb-6 !text-left"
            />
            <div className="space-y-5 text-text-secondary text-lg leading-relaxed max-w-prose">
              <p>
                Pink Auto began when our founders saw mothers, daughters, and working women choosing unsafe or inconvenient transport simply because they had no better option.
              </p>
              <p>
                We built a women-focused auto-rickshaw service with verified drivers, GPS tracking, and policies designed around passenger dignity — not corporate checkboxes.
              </p>
              <p>
                Today we serve women, students, and families across {KOLHAPUR.city} — from Rajarampuri and Shahupuri to Shivaji University area — and we are only getting started.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right">
            <img
              src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=900&q=80"
              alt="Pink Auto team and community"
              className="rounded-3xl shadow-card w-full aspect-[4/3] object-cover"
              loading="lazy"
            />
          </ScrollReveal>
        </div>
      </section>

      <section className="section-padding bg-pink-soft/40">
        <div className="container-content">
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <ScrollReveal>
              <h3 className="text-2xl font-bold mb-4">Mission</h3>
              <p className="text-text-secondary text-lg leading-relaxed">
                To provide safe, reliable, and dignified transportation for women, students, families, and senior citizens — while creating employment opportunities for women drivers.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h3 className="text-2xl font-bold mb-4">Vision</h3>
              <p className="text-text-secondary text-lg leading-relaxed">
                A city where every person can travel without fear — where parents trust the ride their child takes, and women never compromise on safety.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-content">
          <SectionHeading
            label="Founder"
            title="A message from our founder"
            description="This company was built for the people we love — and the communities we serve."
          />
          <ScrollReveal>
            <blockquote className="max-w-prose mx-auto text-center">
              <p className="text-xl md:text-2xl text-text-primary leading-relaxed font-medium mb-8">
                &ldquo;When I imagined Pink Auto, I asked one question: would I trust this service for my own family? Every decision we make must answer yes.&rdquo;
              </p>
              <footer className="text-text-secondary">
                <cite className="not-italic font-semibold text-text-primary">Founder, Pink Auto</cite>
              </footer>
            </blockquote>
          </ScrollReveal>
        </div>
      </section>

      <section id="impact" className="section-padding bg-pink-soft/40">
        <div className="container-content max-w-3xl mx-auto text-center">
          <SectionHeading
            label="Community Impact"
            title="Serving women, students & families"
            description="Pink Auto creates safer commutes and dignified employment across Maharashtra."
          />
          <ul className="grid sm:grid-cols-2 gap-3 text-left max-w-xl mx-auto mb-8">
            {BRAND.audiences.slice(0, 6).map((a) => (
              <li key={a} className="flex items-center gap-2 text-text-secondary bg-white rounded-xl px-4 py-3 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-pink-primary shrink-0" />
                {a}
              </li>
            ))}
          </ul>
          <h3 className="text-lg font-semibold text-center mb-4">Women empowerment partners in Kolhapur</h3>
          <ul className="grid sm:grid-cols-2 gap-2 max-w-xl mx-auto text-sm text-text-secondary">
            {WOMEN_ORGANIZATIONS.map((org) => (
              <li key={org.name} className="bg-white rounded-lg px-3 py-2 shadow-sm">{org.name}</li>
            ))}
          </ul>
        </div>
      </section>

      <section id="empowerment" className="section-padding bg-text-primary text-white">
        <div className="container-content">
          <SectionHeading
            dark
            label="Women Empowerment"
            title="Employment that changes lives"
            description="We train, support, and celebrate women drivers as professionals — not gig workers."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {EMPOWERMENT_STATS.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-white/10 rounded-2xl p-6 text-center border border-white/10"
              >
                <p className="text-3xl font-bold">
                  <AnimatedCounter value={s.value} suffix={s.suffix} />
                </p>
                <p className="text-sm text-white/70 mt-2">{s.label}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button to="/driver-registration" variant="white">Apply as a driver</Button>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-content">
          <SectionHeading label="Timeline" title="Our journey" />
          <div className="max-w-2xl mx-auto space-y-8">
            {TIMELINE.map((item, i) => (
              <ScrollReveal key={item.year} delay={i * 0.05}>
                <div className="flex gap-6">
                  <span className="text-pink-primary font-bold text-lg shrink-0 w-16">{item.year}</span>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                    <p className="text-text-secondary">{item.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-content">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="text-center p-6 rounded-2xl bg-pink-soft"
              >
                <p className="text-3xl font-bold text-text-primary">
                  <AnimatedCounter value={s.value} suffix={s.suffix} />
                </p>
                <p className="text-sm text-text-secondary mt-2">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
