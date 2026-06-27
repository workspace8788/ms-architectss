import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Instagram } from 'lucide-react'

const info = [
  { icon: Phone, label: 'Phone', value: '+91 7776936193', href: 'tel:+917776936193', sub: 'Mon–Sat, 9am–7pm' },
  { icon: Mail, label: 'Email', value: 'info@msarchitectss.com', href: 'mailto:info@msarchitectss.com', sub: 'We reply within 24 hrs' },
  { icon: MapPin, label: 'Studio', value: 'Millat Colony, Akola\nMaharashtra, India', href: '#', sub: 'Visit by appointment' },
  { icon: Instagram, label: 'Instagram', value: '@ms.architects__', href: 'https://www.instagram.com/ms.architects__/', sub: 'Follow our work' },
]

export default function Contact() {
  return (
    <section id="contact" className="py-32 md:py-48 bg-[#090909]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-14">

        {/* Header */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-8 h-px bg-[#B89B72]" />
            <span className="text-[#B89B72] text-[9px] tracking-[0.5em] uppercase font-light">Get In Touch</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.9 }}
            className="font-display text-[clamp(2.2rem,5vw,4rem)] text-[#F5F5F5] font-light leading-[1.1] max-w-xl"
          >
            Every great space begins<br />with a <em className="text-[#B89B72]">conversation</em>
          </motion.h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {info.map(({ icon: Icon, label, value, href, sub }, i) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              className="group bg-[#111111] border border-white/5 p-8 relative overflow-hidden hover:border-[#B89B72]/20 transition-all duration-400 hover:-translate-y-1"
            >
              <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-[#B89B72] to-transparent group-hover:w-full transition-all duration-500" />

              <Icon size={20} strokeWidth={1} className="text-[#B89B72] mb-6" />
              <div className="text-[9px] tracking-[0.4em] text-[#8E8E8E] uppercase mb-3 font-light">{label}</div>
              <div className="font-display text-[#F5F5F5] text-base font-light whitespace-pre-line leading-snug group-hover:text-[#B89B72] transition-colors duration-300 mb-2">
                {value}
              </div>
              <div className="text-[11px] text-[#8E8E8E]/50 font-light">{sub}</div>
            </motion.a>
          ))}
        </div>

        {/* Website link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 pt-10 border-t border-white/5"
        >
          <div className="w-8 h-px bg-[#B89B72]/40" />
          <a
            href="https://www.msarchitectss.com"
            target="_blank"
            rel="noreferrer"
            className="text-[#8E8E8E] hover:text-[#B89B72] text-[11px] tracking-[0.3em] uppercase font-light transition-colors duration-300"
          >
            www.msarchitectss.com
          </a>
        </motion.div>
      </div>
    </section>
  )
}
