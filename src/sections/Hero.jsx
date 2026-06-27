import { motion } from 'framer-motion'
import { ArrowDownRight } from 'lucide-react'

// Premium dark architecture image — modern luxury residence
const HERO_IMG = 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=2000&q=85&auto=format&fit=crop'

const line = {
  hidden: { y: '105%', opacity: 0 },
  show: (i) => ({
    y: 0, opacity: 1,
    transition: { duration: 1.1, delay: 0.2 + i * 0.14, ease: [0.76,0,0.24,1] },
  }),
}

export default function Hero() {
  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="hero" className="relative h-screen min-h-[600px] flex items-end overflow-hidden bg-[#050505]">

      {/* Ken Burns image */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.4, ease: [0.25,0.46,0.45,0.94] }}
      >
        <img src={HERO_IMG} alt="MS Architects — Luxury Architecture" className="w-full h-full object-cover" />
        {/* Dark gradient layers */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[rgba(5,5,5,0.55)] to-[rgba(5,5,5,0.2)]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(5,5,5,0.4)] to-transparent" />
      </motion.div>

      {/* Noise texture */}
      <div className="noise-overlay" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-14 pb-20 md:pb-28">

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex items-center gap-4 mb-8"
        >
          <div className="w-10 h-px bg-[#B89B72]" />
          <span className="text-[#B89B72] text-[9px] tracking-[0.55em] uppercase font-light font-body">
            Architecture & Interiors — Akola
          </span>
        </motion.div>

        {/* Headlines — each line clips from bottom */}
        <h1 className="font-display font-light leading-[1.0] tracking-[-0.02em] mb-12">
          {['The Signature', 'of', 'Luxury.'].map((txt, i) => (
            <div key={i} className="overflow-hidden">
              <motion.span
                custom={i}
                variants={line}
                initial="hidden"
                animate="show"
                className={`block ${
                  i === 0
                    ? 'text-[clamp(3.5rem,9vw,8.5rem)] text-[#F5F5F5]'
                    : i === 1
                    ? 'text-[clamp(3.5rem,9vw,8.5rem)] text-[#F5F5F5] italic'
                    : 'text-[clamp(3.5rem,9vw,8.5rem)] text-[#B89B72] italic'
                }`}
              >
                {txt}
              </motion.span>
            </div>
          ))}
        </h1>

        {/* Bottom row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.9 }}
          className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-8"
        >
          <p className="text-[#F5F5F5]/55 text-sm font-light leading-relaxed max-w-xs font-body">
            Contemporary spaces designed<br />with precision, innovation, and craft.
          </p>

          <div className="flex items-center gap-5">
            {/* Primary */}
            <button
              onClick={() => go('projects')}
              className="group relative overflow-hidden border border-[#B89B72] px-8 py-4 text-[10px] tracking-[0.35em] uppercase font-medium text-[#B89B72]"
            >
              <span className="relative z-10 group-hover:text-[#090909] transition-colors duration-500">Explore Projects</span>
              <span className="absolute inset-0 bg-[#B89B72] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]" />
            </button>

            {/* Secondary */}
            <button
              onClick={() => go('contact')}
              className="flex items-center gap-2 text-[#F5F5F5]/60 hover:text-[#B89B72] text-[10px] tracking-[0.35em] uppercase font-light transition-colors duration-300 group"
            >
              Start Your Vision
              <ArrowDownRight size={13} className="group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform duration-300" />
            </button>
          </div>
        </motion.div>
      </div>

      {/* Side year label */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute right-6 md:right-14 bottom-1/2 translate-y-1/2 flex flex-col items-center gap-4"
      >
        <div className="h-16 w-px bg-gradient-to-b from-transparent to-[#B89B72]" />
        <span className="text-[#8E8E8E] text-[8px] tracking-[0.55em] uppercase rotate-90 origin-center mt-4">2024</span>
      </motion.div>
    </section>
  )
}
