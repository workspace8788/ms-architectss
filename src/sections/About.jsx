import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const ABOUT_IMG = 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&q=80&auto=format&fit=crop'

const fade = {
  hidden: { opacity: 0, y: 44 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.25,0.46,0.45,0.94] } },
}

export default function About() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '15%'])

  return (
    <section id="about" ref={ref} className="py-32 md:py-48 bg-[#090909]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-14">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28 items-center">

          {/* Left: image + brand card float */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 1, ease: [0.25,0.46,0.45,0.94] }}
            className="relative"
          >
            {/* Main image */}
            <div className="img-wrap aspect-[4/5] relative">
              <motion.img
                style={{ y: imgY }}
                src={ABOUT_IMG}
                alt="MS Architects Studio"
                className="w-full h-[115%] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090909]/30 to-transparent" />
            </div>

            {/* Brand card floating over bottom-right */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="absolute -bottom-12 -right-8 md:-right-14 w-64 md:w-80 shadow-[0_32px_80px_rgba(0,0,0,0.7)] z-10"
            >
              <img
                src="./assets/brand-card.jpg"
                alt="MS Architects — The Signature of Luxury"
                className="w-full h-auto rounded-sm"
              />
            </motion.div>

            {/* Corner ornaments */}
            <div className="absolute top-4 left-4 w-14 h-14 border-t border-l border-[#B89B72]/40" />
          </motion.div>

          {/* Right: text */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            transition={{ staggerChildren: 0.1 }}
            className="lg:pl-6"
          >
            <motion.div variants={fade} className="flex items-center gap-3 mb-8">
              <div className="w-8 h-px bg-[#B89B72]" />
              <span className="text-[#B89B72] text-[9px] tracking-[0.5em] uppercase font-light font-body">About Us</span>
            </motion.div>

            {/* Signature logo */}
            <motion.div variants={fade} className="mb-8">
              <img
                src="./assets/logo-signature-outline.png"
                alt="Ar. Mohammad Safi"
                className="h-14 w-auto opacity-60"
              />
            </motion.div>

            <motion.h2 variants={fade} className="font-display text-[clamp(2rem,4vw,3.4rem)] text-[#F5F5F5] font-light leading-[1.15] mb-8">
              Where structure<br />meets <em className="text-[#B89B72]">soul</em>
            </motion.h2>

            <motion.p variants={fade} className="text-[#8E8E8E] text-[15px] font-light leading-[1.9] mb-5 max-w-[420px]">
              MS Architects & Interiors is dedicated to delivering innovative architectural, interior design, commercial development, and buildership solutions that combine aesthetics, functionality, and sustainability.
            </motion.p>

            <motion.p variants={fade} className="text-[#8E8E8E] text-[15px] font-light leading-[1.9] mb-12 max-w-[420px]">
              We believe every project should be thoughtfully designed to enhance lifestyles, maximize value, and create lasting impressions.
            </motion.p>

            {/* Closing signature line instead of stats */}
            <motion.div variants={fade} className="pt-10 border-t border-white/6 flex items-center gap-4">
              <div className="w-6 h-px bg-[#B89B72]/50" />
              <span className="text-[#8E8E8E]/60 text-[9px] tracking-[0.45em] uppercase font-light">Akola, Maharashtra</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
