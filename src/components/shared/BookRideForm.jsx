import { useForm } from 'react-hook-form'
import { MessageCircle, Calculator } from 'lucide-react'
import Button from '@/components/ui/Button'
import { buildWhatsAppUrl } from '@/lib/utils'
import { KOLHAPUR, SERVICE_AREAS } from '@/data/kolhapur'

const inputClass =
  'w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-pink-primary focus:ring-2 focus:ring-pink-primary/20 outline-none transition bg-white'

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
    return `₹${base + perPassenger} – ₹${base + perPassenger + 80} (estimate)`
  }

  return (
    <div className={className}>
      <form onSubmit={handleSubmit(onBookingSubmit)} className="bg-white rounded-3xl shadow-card border border-gray-100 p-6 md:p-10">
        <h3 className="text-xl font-semibold mb-6">Book your ride</h3>
        <div className="grid md:grid-cols-2 gap-5">
          <div>
            <label htmlFor="pickup" className="block text-sm font-medium mb-2">Pickup Location *</label>
            <input id="pickup" {...register('pickup', { required: true })} className={inputClass} placeholder={`e.g. ${SERVICE_AREAS[0]}, ${KOLHAPUR.city}`} />
          </div>
          <div>
            <label htmlFor="drop" className="block text-sm font-medium mb-2">Drop Location *</label>
            <input id="drop" {...register('drop', { required: true })} className={inputClass} placeholder="Enter destination" />
          </div>
          <div>
            <label htmlFor="date" className="block text-sm font-medium mb-2">Date *</label>
            <input id="date" type="date" {...register('date', { required: true })} className={inputClass} />
          </div>
          <div>
            <label htmlFor="time" className="block text-sm font-medium mb-2">Time *</label>
            <input id="time" type="time" {...register('time', { required: true })} className={inputClass} />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium mb-2">Contact Number *</label>
            <input id="phone" type="tel" {...register('phone', { required: true })} className={inputClass} placeholder="+91 98765 43210" />
          </div>
          <div>
            <label htmlFor="passengers" className="block text-sm font-medium mb-2">Passengers</label>
            <select id="passengers" {...register('passengers')} className={inputClass}>
              {[1, 2, 3].map((n) => (
                <option key={n} value={n}>{n} Passenger{n > 1 ? 's' : ''}</option>
              ))}
            </select>
          </div>
        </div>

        {showFareEstimate && (
          <div className="mt-5 flex items-center gap-3 p-4 rounded-xl bg-purple-soft border border-purple-100">
            <Calculator className="w-5 h-5 text-purple-600 shrink-0" />
            <div>
              <p className="text-sm font-medium text-text-primary">Estimated fare (optional)</p>
              <p className="text-sm text-text-secondary">{estimatedFare()} — final fare confirmed on WhatsApp</p>
            </div>
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-3 mt-8">
          <Button type="submit" size="lg" className="flex-1 sm:flex-none">Book Ride</Button>
          <Button type="button" variant="secondary" size="lg" className="flex-1 sm:flex-none" onClick={whatsappBooking}>
            <MessageCircle size={20} className="text-success" />
            WhatsApp Booking
          </Button>
        </div>
        <p className="text-xs text-text-secondary mt-4 text-center">
          Live availability confirmed via WhatsApp · Serving {KOLHAPUR.city}, {KOLHAPUR.state}
        </p>
      </form>

      {showInquiry && (
        <form onSubmit={handleSubmit(onInquirySubmit)} className="mt-8 bg-gray-50 rounded-3xl p-6 md:p-8 border border-gray-100">
          <h3 className="text-lg font-semibold mb-4">General inquiry</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="inquiryName" className="block text-sm font-medium mb-2">Name</label>
              <input id="inquiryName" {...register('inquiryName', { required: true })} className={inputClass} placeholder="Your name" />
            </div>
            <div>
              <label htmlFor="inquiryPhone" className="block text-sm font-medium mb-2">Phone</label>
              <input id="inquiryPhone" type="tel" {...register('inquiryPhone', { required: true })} className={inputClass} placeholder="+91" />
            </div>
            <div className="md:col-span-2">
              <label htmlFor="inquiryMessage" className="block text-sm font-medium mb-2">Message</label>
              <textarea id="inquiryMessage" rows={3} {...register('inquiryMessage', { required: true })} className={`${inputClass} resize-none`} placeholder="Partnership, corporate plan, coverage area..." />
            </div>
          </div>
          <Button type="submit" variant="secondary" className="mt-4">Send Inquiry via WhatsApp</Button>
        </form>
      )}
    </div>
  )
}
