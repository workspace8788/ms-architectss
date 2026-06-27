import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const links = [
  { label: 'Home', id: 'hero' },
  { label: 'About', id: 'about' },
  { label: 'Services', id: 'services' },
  { label: 'Projects', id: 'projects' },
  { label: 'Contact', id: 'contact' },
]

export default function Footer() {
  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <footer className="bg-[#050505] pt-24 pb-10 border-t border-white/5">
      <div className="max-w-[1440px] mx-auto px-6 md:px-14">

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="mb-24"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-px bg-[#B89B72]" />
            <span className="text-[#B89B72] text-[9px] tracking-[0.5em] uppercase font-light">Start a Project</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10">
            <div>
              <h2 className="font-display text-[clamp(2.5rem,6.5vw,5.5rem)] text-[#F5F5F5] font-light leading-[1.05]">
                Ready to discuss<br />
                <em className="text-[#B89B72]">your next project?</em>
              </h2>
              <p className="mt-6 text-[#8E8E8E] text-[15px] font-light max-w-sm leading-relaxed">
                Let's create something timeless together. We'd love to hear your vision.
              </p>
            </div>

            <button
              onClick={() => go('contact')}
              className="self-start lg:self-end group relative overflow-hidden border border-[#B89B72] px-10 py-4 text-[10px] tracking-[0.35em] uppercase font-medium text-[#B89B72] flex items-center gap-3"
            >
              <span className="relative z-10 group-hover:text-[#090909] transition-colors duration-500">Get In Touch</span>
              <ArrowUpRight size={13} className="relative z-10 group-hover:text-[#090909] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
              <span className="absolute inset-0 bg-[#B89B72] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]" />
            </button>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="h-px bg-white/6 mb-10" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">

          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src="./assets/logo-gold-3d.jpg" alt="MS Architects" className="h-10 w-10 rounded-full object-cover opacity-70" />
            <span className="text-[9px] tracking-[0.3em] text-[#8E8E8E] uppercase font-light">MS Architects & Interiors</span>
          </div>

          {/* Nav */}
          <nav className="flex flex-wrap gap-8">
            {links.map(({ label, id }) => (
              <button
                key={id}
                onClick={() => go(id)}
                className="text-[#8E8E8E] hover:text-[#B89B72] text-[9px] tracking-[0.3em] uppercase font-light transition-colors duration-300"
              >
                {label}
              </button>
            ))}
          </nav>

          {/* Copyright */}
          <div className="text-[#8E8E8E]/40 text-[9px] tracking-[0.3em] font-light uppercase">
            MS Architects & Interiors © 2026
          </div>
        </div>
      </div>
    </footer>
  )
}
