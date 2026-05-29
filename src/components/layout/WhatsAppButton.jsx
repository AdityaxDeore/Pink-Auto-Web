import { MessageCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import { buildWhatsAppUrl } from '@/lib/utils'

export default function WhatsAppButton() {
  const url = buildWhatsAppUrl('Hi Pink Auto, I would like to book a ride.')

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 200 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-success text-white shadow-lg flex items-center justify-center hover:brightness-110 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-success focus-visible:ring-offset-2"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} fill="currentColor" />
    </motion.a>
  )
}
