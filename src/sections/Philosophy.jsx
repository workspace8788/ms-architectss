import { motion } from 'framer-motion'

const words = [
  { text: 'WE DESIGN', variant: 'plain' },
  { text: 'LIGHT.', variant: 'gold' },
  { text: 'SPACE.', variant: 'outline' },
  { text: 'EMOTIONS.', variant: 'gold-italic' },
]

const pillars = [
  {
    num: '01',
    title: 'Precision',
    desc: 'Every line drawn, every material chosen, every dimension resolved — with obsessive attention to detail that elevates a building from construction to craft.',
  },
  {
    num: '02',
    title: 'Purpose',
    desc: 'We design spaces that serve the lives lived inside them. Function is not a constraint — it is the foundation upon which beauty is built.',
  },
  {
    num: '03',
    title: 'Permanence',
    desc: 'Trends fade. We design for decades. Our work is measured not by what is fashionable today, but by what will still feel inevitable in thirty years.',
  },
]

export default function Philosophy() {
  return (
    <section className="bg-[#111111] overflow-hidden relative">

      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full bg-[#B89B72]/5 blur-[140px]" />
      </div>

      {/* ── PART 1: Big Typography ── */}
      <div className="pt-40 md:pt-56 pb-24 md:pb-32 max-w-[1440px] mx-auto px-6 md:px-14 relative z-10">

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex items-center gap-3 mb-20"
        >
          <div className="w-8 h-px bg-[#B89B72]" />
          <span className="text-[#B89B72] text-[9px] tracking-[0.5em] uppercase font-light">Our Philosophy</span>
        </motion.div>

        {/* Huge animated words */}
        <div className="space-y-0">
          {words.map(({ text, variant }, i) => (
            <div key={text} className="overflow-hidden">
              <motion.div
                initial={{ y: '110%' }}
                whileInView={{ y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 1.05, delay: i * 0.1, ease: [0.76,0,0.24,1] }}
              >
                <span
                  className={`
                    font-display block leading-[0.95] tracking-[-0.03em]
                    text-[clamp(4rem,12vw,11rem)]
                    ${variant === 'plain' ? 'text-[#F5F5F5]' : ''}
                    ${variant === 'gold' ? 'text-[#B89B72]' : ''}
                    ${variant === 'gold-italic' ? 'text-[#B89B72] italic' : ''}
                    ${variant === 'outline' ? 'italic' : ''}
                  `}
                  style={variant === 'outline' ? {
                    WebkitTextStroke: '1.5px rgba(245,245,245,0.2)',
                    color: 'transparent',
                  } : {}}
                >
                  {text}
                </span>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Divider ── */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-14">
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.25,0.46,0.45,0.94] }}
          className="h-px bg-gradient-to-r from-transparent via-[#B89B72]/30 to-transparent origin-left"
        />
      </div>

      {/* ── PART 2: Three Pillars ── */}
      <div className="py-24 md:py-32 max-w-[1440px] mx-auto px-6 md:px-14 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {pillars.map(({ num, title, desc }, i) => (
            <motion.div
              key={num}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: i * 0.12 }}
              className="group"
            >
              {/* Number */}
              <div className="text-[#B89B72]/30 font-display text-[4rem] leading-none mb-4 font-light select-none">
                {num}
              </div>

              {/* Gold line */}
              <div className="w-8 h-px bg-[#B89B72] mb-6 group-hover:w-16 transition-all duration-500" />

              {/* Title */}
              <h3 className="font-display text-[#F5F5F5] text-2xl font-light mb-4 leading-snug">
                {title}
              </h3>

              {/* Desc */}
              <p className="text-[#8E8E8E] text-[14px] font-light leading-[1.85]">
                {desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── PART 3: Pull quote row ── */}
      <div className="pb-40 md:pb-56 max-w-[1440px] mx-auto px-6 md:px-14 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="font-display text-[clamp(1.4rem,3vw,2.4rem)] text-[#F5F5F5]/70 font-light italic leading-[1.4] max-w-2xl"
          >
            "Architecture is not about the building.<br />
            It is about the <span className="text-[#B89B72] not-italic">life</span> that happens inside it."
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex-none text-right"
          >
            <div className="text-[#8E8E8E]/40 text-[9px] tracking-[0.45em] uppercase mb-2">Ar. Mohammad Safi</div>
            <div className="text-[#8E8E8E]/30 text-[9px] tracking-[0.3em] uppercase">Founder, MS Architects & Interiors</div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
