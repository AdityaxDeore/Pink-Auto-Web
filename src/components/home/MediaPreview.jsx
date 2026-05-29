import { Link } from 'react-router-dom'
import { ArrowRight, Award, Newspaper } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import Button from '@/components/ui/Button'
import { MEDIA_ITEMS } from '@/data/content'

export default function MediaPreview() {
  const preview = MEDIA_ITEMS.slice(0, 3)

  return (
    <section className="section-padding bg-purple-soft/30">
      <div className="container-content">
        <SectionHeading
          label="Media"
          title="Press & recognitions"
          description="Latest coverage, awards, and events from Pink Auto."
        />
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {preview.map((item) => (
            <article key={item.id} className="bg-white rounded-2xl p-6 shadow-card border border-purple-100">
              {item.type === 'press' ? (
                <Newspaper className="w-6 h-6 text-pink-primary mb-3" />
              ) : (
                <Award className="w-6 h-6 text-purple-600 mb-3" />
              )}
              <h3 className="font-semibold mb-2 line-clamp-2">{item.title}</h3>
              <p className="text-sm text-text-secondary line-clamp-2">{item.excerpt}</p>
            </article>
          ))}
        </div>
        <div className="text-center">
          <Button to="/media" variant="secondary">
            View all media
            <ArrowRight size={18} />
          </Button>
        </div>
      </div>
    </section>
  )
}
