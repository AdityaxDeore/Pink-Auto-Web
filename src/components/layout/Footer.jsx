import { Link } from 'react-router-dom'
import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react'
import { FOOTER_LINKS, SITE } from '@/data/content'
import PlayStoreBadge from '@/components/ui/PlayStoreBadge'

function FooterColumn({ title, links }) {
  return (
    <div>
      <h3 className="font-semibold text-white mb-4">{title}</h3>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <Link to={link.path} className="text-sm text-gray-400 hover:text-white transition-colors">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

const socialIcons = [
  { key: 'facebook', Icon: Facebook },
  { key: 'instagram', Icon: Instagram },
  { key: 'linkedin', Icon: Linkedin },
  { key: 'youtube', Icon: Youtube },
]

export default function Footer() {
  const year = new Date().getFullYear()
  const playStoreUrl = import.meta.env.VITE_PLAY_STORE_URL || SITE.playStoreUrl

  return (
    <footer className="bg-text-primary text-gray-400">
      <div className="section-padding pb-12">
        <div className="container-content">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 lg:gap-8 mb-16">
            <div className="col-span-2 md:col-span-3 lg:col-span-2">
              <Link to="/" className="flex items-center gap-2 mb-4">
                <span className="w-9 h-9 rounded-xl bg-pink-primary flex items-center justify-center text-white font-bold text-sm">
                  PA
                </span>
                <span className="font-bold text-lg text-white">{SITE.name}</span>
              </Link>
              <p className="text-sm leading-relaxed max-w-xs mb-4">
                {SITE.tagline}. Safe and reliable auto-rickshaw service for women, students, and families in {SITE.state}.
              </p>
              <PlayStoreBadge url={playStoreUrl} size="sm" variant="outline" className="!border-white/20 mb-6" />
              <div className="flex gap-3">
                {socialIcons.map(({ key, Icon }) => (
                  <a
                    key={key}
                    href={SITE.social[key] || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-pink-primary transition-colors text-white"
                    aria-label={key}
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
            <FooterColumn title="Company" links={FOOTER_LINKS.company} />
            <FooterColumn title="Services" links={FOOTER_LINKS.services} />
            <FooterColumn title="Drivers" links={FOOTER_LINKS.drivers} />
            <FooterColumn title="Support" links={FOOTER_LINKS.support} />
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between gap-4 text-sm">
            <p>
              &copy; {year} {SITE.name}. {SITE.state}, India.
            </p>
            <div className="flex flex-wrap gap-6">
              <Link to="/contact" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/contact" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <a href={`tel:${SITE.phone.replace(/\s/g, '')}`} className="hover:text-white transition-colors">
                {SITE.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
