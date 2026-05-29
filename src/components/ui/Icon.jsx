import {
  MapPin,
  GraduationCap,
  Briefcase,
  Heart,
  Users,
  Calendar,
  ShieldCheck,
  Shield,
  Headphones,
  Sparkles,
  Smartphone,
  Star,
  BadgeCheck,
  Navigation,
  PhoneCall,
  Eye,
  IdCard,
  FileCheck,
} from 'lucide-react'

const icons = {
  MapPin,
  GraduationCap,
  Briefcase,
  Heart,
  Users,
  Calendar,
  ShieldCheck,
  Shield,
  Headphones,
  Sparkles,
  Smartphone,
  Star,
  BadgeCheck,
  Navigation,
  PhoneCall,
  Eye,
  IdCard,
  FileCheck,
}

export default function Icon({ name, className, size = 24 }) {
  const LucideIcon = icons[name]
  if (!LucideIcon) return null
  return <LucideIcon className={className} size={size} aria-hidden />
}
