import { useForm } from 'react-hook-form'
import { MessageCircle, Calculator, MapPin, Map, Calendar, Clock, Phone, Users, Send } from 'lucide-react'
import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'
import { buildWhatsAppUrl } from '@/lib/utils'
import { KOLHAPUR, SERVICE_AREAS } from '@/data/kolhapur'

const formItemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

const inputClass =
  'w-full pl-11 pr-4 py-3.5 rounded-2xl border border-gray-100/50 bg-white/70 backdrop-blur-sm focus:bg-white focus:border-pink-primary focus:ring-4 focus:ring-pink-primary/10 outline-none transition-all duration-300 text-text-primary placeholder:text-gray-400 font-medium'

const labelClass = "block text-sm font-semibold text-text-secondary mb-2 ml-1"
const iconWrapperClass = "absolute left-4 top-[42px] text-gray-400 pointer-events-none transition-colors group-focus-within:text-pink-primary"

export default function BookRideForm({ showInquiry = true, showFareEstimate = false, className = '' }) {
  const { register, handleSubmit, getValues, watch } = useForm()
  const passengers = watch('passengers') || '1'

  const buildMessage = (data, type = 'booking') => {
    if (type === 'inquiry') {
      return `Inquiry - Pink Auto\nName: ${data.inquiryName}\nPhone: ${data.inquiryPhone}\nMessage: ${data.inquiryMessage}`
    }
    return `Book Ride - Pink Auto\nPickup: ${data.pickup}\nDrop: ${data.drop}\nDate: ${data.date}\nTime: ${data.time}\nPhone: ${data.phone}\nPassengers: ${data.passengers}`
  }

  const onBookingSubmit = (data) => {
    window.open(buildWhatsAppUrl(buildMessage(data)), '_blank')
  }

  const onInquirySubmit = (data) => {
    window.open(buildWhatsAppUrl(buildMessage(data, 'inquiry')), '_blank')
  }

  const whatsappBooking = () => {
    onBookingSubmit(getValues())
  }

  const estimatedFare = () => {
    const base = 40
    const perPassenger = (Number(passengers) - 1) * 10
    return `₹${base + perPassenger} – ₹${base + perPassenger + 80}`
  }

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      <form onSubmit={handleSubmit(onBookingSubmit)} className="glass-panel p-8 md:p-12 relative z-10 w-full shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-white/80 to-pink-50/50 -z-10" />
        
        <div className="mb-8">
          <h3 className="text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600 mb-2">
            Book your ride
          </h3>
          <p className="text-text-secondary font-medium text-lg">Safe, quick, and reliable.</p>
        </div>

        <motion.div 
          className="grid md:grid-cols-2 gap-x-6 gap-y-7"
          variants={{ show: { transition: { staggerChildren: 0.05 } } }}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={formItemVariants} className="group relative">
            <label htmlFor="pickup" className={labelClass}>Pickup Location</label>
            <MapPin className={iconWrapperClass} size={18} />
            <input id="pickup" {...register('pickup', { required: true })} className={inputClass} placeholder={`e.g. ${SERVICE_AREAS[0]}`} />
          </motion.div>
          
          <motion.div variants={formItemVariants} className="group relative">
            <label htmlFor="drop" className={labelClass}>Drop Location</label>
            <Map className={iconWrapperClass} size={18} />
            <input id="drop" {...register('drop', { required: true })} className={inputClass} placeholder="Enter destination" />
          </motion.div>
          
          <motion.div variants={formItemVariants} className="group relative">
            <label htmlFor="date" className={labelClass}>Select Date</label>
            <Calendar className={iconWrapperClass} size={18} />
            <input id="date" type="date" {...register('date', { required: true })} className={inputClass} />
          </motion.div>
          
          <motion.div variants={formItemVariants} className="group relative">
            <label htmlFor="time" className={labelClass}>Select Time</label>
            <Clock className={iconWrapperClass} size={18} />
            <input id="time" type="time" {...register('time', { required: true })} className={inputClass} />
          </motion.div>
          
          <motion.div variants={formItemVariants} className="group relative">
            <label htmlFor="phone" className={labelClass}>Contact Number</label>
            <Phone className={iconWrapperClass} size={18} />
            <input id="phone" type="tel" {...register('phone', { required: true })} className={inputClass} placeholder="+91 98765 43210" />
          </motion.div>
          
          <motion.div variants={formItemVariants} className="group relative">
            <label htmlFor="passengers" className={labelClass}>Passengers</label>
            <Users className={iconWrapperClass} size={18} />
            <select id="passengers" {...register('passengers')} className={`${inputClass} appearance-none`}>
              {[1, 2, 3].map((n) => (
                <option key={n} value={n}>{n} Passenger{n > 1 ? 's' : ''}</option>
              ))}
            </select>
          </motion.div>
        </motion.div>

        {showFareEstimate && (
          <motion.div variants={formItemVariants} initial="hidden" animate="show" className="mt-8 flex items-center gap-4 p-5 rounded-2xl bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-100/50 shadow-inner">
            <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center shrink-0">
              <Calculator className="w-6 h-6 text-pink-primary" />
            </div>
            <div>
              <p className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-1">Estimated Fare</p>
              <p className="text-xl font-extrabold text-gray-900">{estimatedFare()}</p>
            </div>
          </motion.div>
        )}

        <div className="flex flex-col sm:flex-row gap-4 mt-10">
          <Button type="submit" size="lg" className="flex-1">
            Book Ride Now
          </Button>
          <Button type="button" variant="secondary" size="lg" className="flex-1 bg-green-50/50 hover:bg-green-50 border-green-200" onClick={whatsappBooking}>
            <MessageCircle size={20} className="text-success" />
            WhatsApp Booking
          </Button>
        </div>
        <p className="text-sm text-text-secondary mt-5 text-center font-medium">
          Live availability confirmed via WhatsApp · Serving {KOLHAPUR.city}, {KOLHAPUR.state}
        </p>
      </form>

      {showInquiry && (
        <form onSubmit={handleSubmit(onInquirySubmit)} className="mt-8 glass-panel p-8">
          <div className="absolute inset-0 bg-white/40 -z-10" />
          <h3 className="text-xl font-bold mb-6 text-gray-800">Have a general question?</h3>
          <div className="grid md:grid-cols-2 gap-5">
            <div className="group relative">
              <label htmlFor="inquiryName" className={labelClass}>Name</label>
              <input id="inquiryName" {...register('inquiryName', { required: true })} className={`${inputClass} pl-4`} placeholder="Your name" />
            </div>
            <div className="group relative">
              <label htmlFor="inquiryPhone" className={labelClass}>Phone</label>
              <input id="inquiryPhone" type="tel" {...register('inquiryPhone', { required: true })} className={`${inputClass} pl-4`} placeholder="+91" />
            </div>
            <div className="md:col-span-2 group relative">
              <label htmlFor="inquiryMessage" className={labelClass}>Message</label>
              <textarea id="inquiryMessage" rows={3} {...register('inquiryMessage', { required: true })} className={`${inputClass} pl-4 resize-none`} placeholder="Partnerships, corporate plans, special requests..." />
            </div>
          </div>
          <Button type="submit" variant="secondary" className="mt-6 w-full sm:w-auto">
            <Send size={18} className="text-pink-primary" />
            Send Inquiry
          </Button>
        </form>
      )}
    </motion.div>
  )
}
