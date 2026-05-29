import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { SEO, PAGE_SEO, SITE } from '@/data/content'

function setMeta(name, content, attr = 'name') {
  let el = document.querySelector(`meta[${attr}="${name}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, name)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

export function usePageSeo(customTitle, customDescription) {
  const { pathname } = useLocation()
  const pageMeta = PAGE_SEO[pathname] || PAGE_SEO['/']
  const title = customTitle || pageMeta?.title || `${SITE.name} — ${SITE.tagline}`
  const description = customDescription || pageMeta?.description || SEO.description

  useEffect(() => {
    document.title = title
    setMeta('description', description)
    setMeta('keywords', SEO.keywords.join(', '))
    setMeta('og:title', title, 'property')
    setMeta('og:description', description, 'property')
    setMeta('og:site_name', SITE.name, 'property')
  }, [pathname, title, description])

  return { title, description }
}
