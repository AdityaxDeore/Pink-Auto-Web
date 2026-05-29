import { motion } from 'framer-motion'
import { ExternalLink, Award, Newspaper, Calendar } from 'lucide-react'
import PageHero from '@/components/shared/PageHero'
import SectionHeading from '@/components/ui/SectionHeading'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { MEDIA_ITEMS } from '@/data/content'
import { usePageSeo } from '@/hooks/usePageSeo'

const typeIcons = { press: Newspaper, award: Award, event: Calendar, recognition: Award }

export default function Media() {
  usePageSeo()

  const press = MEDIA_ITEMS.filter((m) => m.type === 'press')
  const awards = MEDIA_ITEMS.filter((m) => m.type === 'award' || m.type === 'recognition')
  const events = MEDIA_ITEMS.filter((m) => m.type === 'event')

  return (
    <>
      <PageHero
        label="Media & Events"
        title="Press, awards & recognitions"
        description="Coverage, news articles, launch events, and industry recognitions for Pink Auto."
      />

      <section className="section-padding bg-white">
        <div className="container-content space-y-20">
          <div>
            <SectionHeading align="left" label="Press" title="Press coverage" className="mb-8 !text-left" />
            <div className="grid md:grid-cols-2 gap-6">
              {press.map((item) => (
                <ScrollReveal key={item.id}>
                  <article className="p-6 rounded-2xl border border-gray-100 hover:shadow-card transition-shadow">
                    <div className="flex items-start gap-3 mb-3">
                      <Newspaper className="w-5 h-5 text-pink-primary shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-lg">{item.title}</h3>
                        <p className="text-sm text-text-secondary">{item.source} · {item.date}</p>
                      </div>
                    </div>
                    <p className="text-text-secondary mb-4">{item.excerpt}</p>
                    {item.link && (
                      <a href={item.link} className="text-sm font-semibold text-pink-primary inline-flex items-center gap-1 hover:underline">
                        Read article <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </article>
                </ScrollReveal>
              ))}
            </div>
          </div>

          <div>
            <SectionHeading align="left" label="Awards" title="Awards & recognitions" className="mb-8 !text-left" />
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {awards.map((item) => (
                <motion.div
                  key={item.id}
                  whileHover={{ y: -4 }}
                  className="p-6 rounded-2xl bg-purple-soft border border-purple-100"
                >
                  <Award className="w-8 h-8 text-purple-600 mb-3" />
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-text-secondary mb-2">{item.source}</p>
                  <p className="text-sm text-text-secondary">{item.excerpt}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <SectionHeading align="left" label="Events" title="Event photos" className="mb-8 !text-left" />
            <div className="grid md:grid-cols-2 gap-6">
              {events.map((item) => (
                <article key={item.id} className="rounded-2xl overflow-hidden shadow-card group">
                  {item.image && (
                    <img src={item.image} alt={item.title} className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                  )}
                  <div className="p-6 bg-white">
                    <h3 className="font-semibold mb-1">{item.title}</h3>
                    <p className="text-sm text-text-secondary">{item.source} · {item.date}</p>
                    <p className="text-sm text-text-secondary mt-2">{item.excerpt}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
