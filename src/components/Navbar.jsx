import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'Home', id: 'hero' },
  { label: 'About', id: 'about' },
  { label: 'Services', id: 'services' },
  { label: 'Projects', id: 'projects' },
  { label: 'Contact', id: 'contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <>
      <motion.nav
        initial={{ y: -90, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.15, ease: [0.25,0.46,0.45,0.94] }}
        className={`fixed top-0 inset-x-0 z-[500] transition-all duration-500 ${
          scrolled
            ? 'backdrop-blur-2xl bg-[rgba(9,9,9,0.85)] border-b border-white/5'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-14 h-[72px] flex items-center justify-between">

          {/* Logo — 3D gold logo */}
          <button onClick={() => go('hero')} className="flex items-center gap-3 group">
            <img
              src="./assets/logo-gold-3d.jpg"
              alt="MS Architects & Interiors"
              className="h-11 w-11 rounded-full object-cover object-center opacity-95 group-hover:opacity-100 transition-opacity duration-300 ring-1 ring-[#B89B72]/20 group-hover:ring-[#B89B72]/50"
            />
            <span className="hidden md:block text-[10px] tracking-[0.28em] text-[#F5F5F5]/70 uppercase font-light group-hover:text-[#B89B72] transition-colors duration-300">
              MS Architects
            </span>
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-10">
            {links.map(({ label, id }) => (
              <button
                key={id}
                onClick={() => go(id)}
                className="relative text-[10px] tracking-[0.3em] uppercase font-light text-[#F5F5F5]/70 hover:text-[#B89B72] transition-colors duration-300 group"
              >
                {label}
                <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-[#B89B72] group-hover:w-full transition-all duration-400" />
              </button>
            ))}
            <button
              onClick={() => go('contact')}
              className="ml-4 border border-[#B89B72]/50 hover:border-[#B89B72] text-[#B89B72] text-[9px] tracking-[0.35em] uppercase font-light px-6 py-2.5 hover:bg-[#B89B72]/10 transition-all duration-300"
            >
              Enquire
            </button>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(v => !v)}
            className="md:hidden text-[#F5F5F5] hover:text-[#B89B72] transition-colors"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.55, ease: [0.76,0,0.24,1] }}
            className="fixed inset-0 z-[499] bg-[#050505] flex flex-col items-center justify-center"
          >
            <img src="./assets/logo-gold-3d.jpg" alt="MS" className="w-24 h-24 rounded-full object-cover mb-12 opacity-80" />
            <nav className="flex flex-col items-center gap-8">
              {links.map(({ label, id }, i) => (
                <motion.button
                  key={id}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07 + 0.1 }}
                  onClick={() => go(id)}
                  className="font-display text-3xl text-[#F5F5F5] font-light hover:text-[#B89B72] transition-colors italic"
                >
                  {label}
                </motion.button>
              ))}
            </nav>
            <div className="absolute bottom-8 text-[#8E8E8E] text-[9px] tracking-[0.45em] uppercase">
              The Signature of Luxury
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
