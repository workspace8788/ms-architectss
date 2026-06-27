import { motion } from 'framer-motion'

export default function QuoteSection() {
  return (
    <section className="relative py-40 md:py-56 bg-[#050505] overflow-hidden flex items-center justify-center">

      {/* Stronger gold ambient glow so it's not pitch black */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[900px] h-[500px] rounded-full bg-[#B89B72]/8 blur-[130px]" />
      </div>

      <div className="relative z-10 text-center max-w-[1100px] mx-auto px-6 md:px-14">

        {/* Top ornament line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.25,0.46,0.45,0.94] }}
          className="w-20 h-px bg-gradient-to-r from-transparent via-[#B89B72] to-transparent mx-auto mb-14 origin-center"
        />

        {/* Oversized decorative quote mark */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-display text-[#B89B72]/15 text-[10rem] md:text-[14rem] leading-none mb-[-3rem] md:mb-[-4rem] select-none"
        >
          "
        </motion.div>

        {/* Line 1 — WHITE, large, bold enough to read */}
        <div className="overflow-hidden mb-3">
          <motion.p
            initial={{ y: '110%' }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1.1, ease: [0.76,0,0.24,1] }}
            className="font-display font-light leading-[1.15] text-[#F5F5F5]"
            style={{ fontSize: 'clamp(2.4rem, 6vw, 5.5rem)' }}
          >
            We don't merely design structures.
          </motion.p>
        </div>

        {/* Line 2 — GOLD ITALIC, same large size */}
        <div className="overflow-hidden">
          <motion.p
            initial={{ y: '110%' }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1.1, delay: 0.2, ease: [0.76,0,0.24,1] }}
            className="font-display italic font-light leading-[1.15] text-[#B89B72]"
            style={{ fontSize: 'clamp(2.4rem, 6vw, 5.5rem)' }}
          >
            We shape lifestyles.
          </motion.p>
        </div>

        {/* Attribution */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.75, duration: 0.8 }}
          className="mt-16 flex flex-col items-center gap-5"
        >
          <div className="w-12 h-px bg-gradient-to-r from-transparent via-[#B89B72]/50 to-transparent" />
          <div className="text-[#8E8E8E] text-[9px] tracking-[0.55em] uppercase font-light">
            MS Architects & Interiors — Studio Manifesto
          </div>
        </motion.div>
      </div>
    </section>
  )
}
