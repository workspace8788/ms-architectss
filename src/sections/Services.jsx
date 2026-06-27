import { motion } from 'framer-motion'
import { Building2, Home, Briefcase, Sofa, HardHat, RefreshCw, Cuboid, Map, Layers } from 'lucide-react'

const services = [
  { icon: Building2, title: 'Architectural Design', desc: 'Holistic design that fuses form, function, and the poetry of built space — from concept to construction documentation.' },
  { icon: Sofa, title: 'Interior Design', desc: 'Curated interior environments where materiality, light, and proportion create spaces of enduring beauty.' },
  { icon: Home, title: 'Residential Projects', desc: 'Private homes crafted to reflect the lives and aspirations of their inhabitants, delivered with meticulous care.' },
  { icon: Briefcase, title: 'Commercial Projects', desc: 'Office buildings, retail environments, and hospitality spaces designed to perform, inspire, and distinguish.' },
  { icon: HardHat, title: 'Buildership & Development', desc: 'End-to-end development solutions combining design excellence with rigorous project management and delivery.' },
  { icon: RefreshCw, title: 'Renovation Projects', desc: 'Transformative interventions that honour a building\'s character while elevating it for contemporary living.' },
  { icon: Cuboid, title: '3D Visualization', desc: 'Photorealistic renders and immersive walkthroughs that communicate design intent with cinematic clarity.' },
  { icon: Map, title: 'Town Planning', desc: 'Urban and township planning strategies that create liveable, sustainable, and economically vibrant communities.' },
  { icon: Layers, title: 'Turnkey Projects', desc: 'Comprehensive turnkey delivery — architecture, interiors, and construction under a single accountable partner.' },
]

export default function Services() {
  return (
    <section id="services" className="py-32 md:py-48 bg-[#090909]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-14">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-8 h-px bg-[#B89B72]" />
              <span className="text-[#B89B72] text-[9px] tracking-[0.5em] uppercase font-light">What We Do</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.9 }}
              className="font-display text-[clamp(2.2rem,5vw,4rem)] text-[#F5F5F5] font-light leading-[1.1]"
            >
              Services &<br /><em className="text-[#B89B72]">Disciplines</em>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-[#8E8E8E] text-sm font-light leading-relaxed max-w-[280px]"
          >
            From the first sketch to the final handover — an integrated suite across the full spectrum of design and development.
          </motion.p>
        </div>

        {/* Floating panels */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.7, delay: i * 0.06 }}
              className="service-panel group bg-[#111111] border border-white/5 p-8 md:p-10 relative overflow-hidden cursor-default"
            >
              {/* Hover gold glow */}
              <div className="absolute inset-0 bg-[#B89B72]/0 group-hover:bg-[#B89B72]/3 transition-colors duration-500" />

              {/* Gold line bottom */}
              <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-gradient-to-r from-[#B89B72] to-transparent group-hover:w-full transition-all duration-600" />

              {/* Number */}
              <div className="text-[9px] tracking-[0.5em] text-[#B89B72]/50 font-light mb-8">
                {String(i + 1).padStart(2, '0')}
              </div>

              <Icon size={26} strokeWidth={1} className="text-[#8E8E8E] group-hover:text-[#B89B72] transition-colors duration-400 mb-6" />

              <h3 className="font-display text-lg text-[#F5F5F5] font-light mb-4 leading-snug group-hover:text-[#B89B72] transition-colors duration-300">
                {title}
              </h3>
              <p className="text-[#8E8E8E]/80 text-[13px] font-light leading-relaxed">
                {desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
