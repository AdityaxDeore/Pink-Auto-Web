export function cn(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function buildWhatsAppUrl(message) {
  const phone = import.meta.env.VITE_WHATSAPP_NUMBER || '919000000000'
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
}
