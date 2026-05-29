import { useForm } from 'react-hook-form'
import { Upload } from 'lucide-react'
import { CheckCircle2 } from 'lucide-react'
import PageHero from '@/components/shared/PageHero'
import SectionHeading from '@/components/ui/SectionHeading'
import Button from '@/components/ui/Button'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { buildWhatsAppUrl } from '@/lib/utils'
import { usePageSeo } from '@/hooks/usePageSeo'

const requirements = [
  'Valid driving license (auto-rickshaw category)',
  'Aadhaar card and government ID proof',
  'Vehicle registration and insurance documents',
  'Clean background verification',
  'Completion of Pink Auto safety training',
]

const inputClass =
  'w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-pink-primary focus:ring-2 focus:ring-pink-primary/20 outline-none transition'

export default function DriverRegistration() {
  usePageSeo()
  const { register, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = (data) => {
    const aadhaarNote = data.aadhaar?.[0]?.name ? `\nAadhaar file: ${data.aadhaar[0].name} (share on WhatsApp follow-up)` : ''
    const msg = `Driver Application - Pink Auto\nName: ${data.name}\nMobile: ${data.mobile}\nAddress: ${data.address}\nLicense: ${data.license}\nVehicle: ${data.vehicle}\nExperience: ${data.experience}${aadhaarNote}`
    window.open(buildWhatsAppUrl(msg), '_blank')
  }

  return (
    <>
      <PageHero
        label="Drive with Pink Auto"
        title="Join our team of verified drivers"
        description="Empowering women through dignified employment — apply today and start your journey with us."
        image="https://images.unsplash.com/photo-1573497019940-1c28c88b4c3f?w=1600&q=80"
      />

      <section id="requirements" className="section-padding bg-pink-soft/30">
        <div className="container-content max-w-3xl">
          <SectionHeading
            label="Requirements"
            title="What you need to apply"
            description="We maintain high standards because our passengers trust us with their safety."
          />
          <ul className="space-y-4">
            {requirements.map((req) => (
              <li key={req} className="flex items-start gap-3 bg-white rounded-xl p-4 shadow-card">
                <CheckCircle2 className="w-5 h-5 text-success shrink-0 mt-0.5" />
                <span className="text-text-secondary">{req}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-content max-w-2xl">
          <SectionHeading
            label="Application"
            title="Driver registration form"
            description="Complete the form below and our team will contact you within 48 hours."
          />
          <ScrollReveal>
            <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-3xl p-8 md:p-10 shadow-card border border-gray-100 space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Full Name *</label>
                <input id="name" {...register('name', { required: 'Name is required' })} className={inputClass} placeholder="Your full name" />
                {errors.name && <p className="text-sm text-pink-primary mt-1">{errors.name.message}</p>}
              </div>
              <div>
                <label htmlFor="mobile" className="block text-sm font-medium mb-2">Mobile Number *</label>
                <input id="mobile" type="tel" {...register('mobile', { required: 'Mobile is required' })} className={inputClass} placeholder="+91 98765 43210" />
                {errors.mobile && <p className="text-sm text-pink-primary mt-1">{errors.mobile.message}</p>}
              </div>
              <div>
                <label htmlFor="address" className="block text-sm font-medium mb-2">Address *</label>
                <textarea id="address" rows={3} {...register('address', { required: 'Address is required' })} className={`${inputClass} resize-none`} placeholder="Full residential address" />
                {errors.address && <p className="text-sm text-pink-primary mt-1">{errors.address.message}</p>}
              </div>
              <div>
                <label htmlFor="license" className="block text-sm font-medium mb-2">Driving License Number *</label>
                <input id="license" {...register('license', { required: 'License is required' })} className={inputClass} placeholder="License number" />
                {errors.license && <p className="text-sm text-pink-primary mt-1">{errors.license.message}</p>}
              </div>
              <div>
                <label htmlFor="vehicle" className="block text-sm font-medium mb-2">Vehicle Details *</label>
                <input id="vehicle" {...register('vehicle', { required: 'Vehicle details required' })} className={inputClass} placeholder="Make, model, registration number" />
                {errors.vehicle && <p className="text-sm text-pink-primary mt-1">{errors.vehicle.message}</p>}
              </div>
              <div>
                <label htmlFor="aadhaar" className="block text-sm font-medium mb-2">Aadhaar Upload *</label>
                <div className="relative">
                  <input
                    id="aadhaar"
                    type="file"
                    accept="image/*,.pdf"
                    {...register('aadhaar', { required: 'Aadhaar document is required' })}
                    className={`${inputClass} file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-pink-soft file:text-pink-primary file:font-semibold`}
                  />
                  <Upload className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-secondary pointer-events-none hidden sm:block" />
                </div>
                {errors.aadhaar && <p className="text-sm text-pink-primary mt-1">{errors.aadhaar.message}</p>}
                <p className="text-xs text-text-secondary mt-1">Upload Aadhaar card (JPG, PNG, or PDF). Max 5MB.</p>
              </div>
              <div>
                <label htmlFor="experience" className="block text-sm font-medium mb-2">Driving Experience *</label>
                <select id="experience" {...register('experience', { required: true })} className={`${inputClass} bg-white`}>
                  <option value="">Select experience</option>
                  <option value="Less than 1 year">Less than 1 year</option>
                  <option value="1-3 years">1–3 years</option>
                  <option value="3-5 years">3–5 years</option>
                  <option value="5+ years">5+ years</option>
                </select>
              </div>
              <Button type="submit" size="lg" className="w-full">Submit Application</Button>
              <p className="text-sm text-text-secondary text-center">
                By submitting, you agree to background verification and Pink Auto driver policies.
              </p>
            </form>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
