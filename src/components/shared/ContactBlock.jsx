import { useForm } from 'react-hook-form'
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import Button from '@/components/ui/Button'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { SITE } from '@/data/content'
import { KOLHAPUR } from '@/data/kolhapur'
import { buildWhatsAppUrl } from '@/lib/utils'

export default function ContactBlock({ showHeading = true, compact = false }) {
  const { register, handleSubmit, reset } = useForm()

  const onSubmit = (data) => {
    const msg = `Contact from website:\nName: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone}\nMessage: ${data.message}`
    window.open(buildWhatsAppUrl(msg), '_blank')
    reset()
  }

  return (
    <section id="contact" className={compact ? '' : 'section-padding bg-gray-50'}>
      <div className="container-content">
        {showHeading && (
          <SectionHeading
            label="Contact"
            title="We're here to help"
            description="Book a ride, partner with us, or ask a question — reach out anytime."
          />
        )}
        <div className="grid lg:grid-cols-2 gap-12">
          <ScrollReveal direction="left">
            <div className="space-y-6">
              {[
                { icon: MapPin, label: 'Office Address', value: SITE.address },
                { icon: Phone, label: 'Phone', value: SITE.phone, href: `tel:${SITE.phone.replace(/\s/g, '')}` },
                { icon: Mail, label: 'Email', value: SITE.email, href: `mailto:${SITE.email}` },
                {
                  icon: MessageCircle,
                  label: 'WhatsApp',
                  value: 'Chat with us',
                  href: buildWhatsAppUrl('Hi Pink Auto!'),
                },
                ...Object.entries(SITE.social).map(([key, url]) => ({
                  icon: MessageCircle,
                  label: key.charAt(0).toUpperCase() + key.slice(1),
                  value: 'Follow us',
                  href: url,
                })),
              ].map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-pink-soft text-pink-primary flex items-center justify-center shrink-0">
                    <Icon size={22} />
                  </div>
                  <div>
                    <p className="text-sm text-text-secondary mb-1">{label}</p>
                    {href ? (
                      <a
                        href={href}
                        className="font-medium hover:text-pink-primary transition-colors"
                        target={href.startsWith('http') ? '_blank' : undefined}
                        rel="noopener noreferrer"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="font-medium">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
            {!compact && (
              <div className="mt-8 rounded-2xl overflow-hidden shadow-card aspect-video max-h-64">
                <iframe
                  title={`Pink Auto — ${KOLHAPUR.city}`}
                  src={KOLHAPUR.mapEmbedUrl}
                  className="w-full h-full min-h-[200px] border-0"
                  loading="lazy"
                  allowFullScreen
                />
              </div>
            )}
          </ScrollReveal>

          <ScrollReveal direction="right">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="bg-white rounded-3xl p-8 shadow-card border border-gray-100"
            >
              <h3 className="text-xl font-semibold mb-6">Send us a message</h3>
              <div className="space-y-4">
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-medium mb-2">Name</label>
                  <input id="contact-name" {...register('name', { required: true })} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-pink-primary focus:ring-2 focus:ring-pink-primary/20 outline-none" placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-sm font-medium mb-2">Email</label>
                  <input id="contact-email" type="email" {...register('email', { required: true })} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-pink-primary focus:ring-2 focus:ring-pink-primary/20 outline-none" placeholder="you@email.com" />
                </div>
                <div>
                  <label htmlFor="contact-phone" className="block text-sm font-medium mb-2">Phone</label>
                  <input id="contact-phone" type="tel" {...register('phone')} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-pink-primary focus:ring-2 focus:ring-pink-primary/20 outline-none" placeholder="+91" />
                </div>
                <div>
                  <label htmlFor="contact-message" className="block text-sm font-medium mb-2">Message</label>
                  <textarea id="contact-message" rows={4} {...register('message', { required: true })} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-pink-primary focus:ring-2 focus:ring-pink-primary/20 outline-none resize-none" placeholder="How can we help?" />
                </div>
              </div>
              <Button type="submit" className="w-full mt-6">Send Message</Button>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
