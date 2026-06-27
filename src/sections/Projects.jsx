import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const projects = [
  {
    id: 1,
    title: 'Safi Residence',
    location: 'Akola, Maharashtra',
    type: 'Residential',
    year: '2024',
    img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1000&q=80&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'The Millat Complex',
    location: 'Akola, Maharashtra',
    type: 'Commercial',
    year: '2023',
    img: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1000&q=80&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'Serenity Villa',
    location: 'Amravati, Maharashtra',
    type: 'Residential',
    year: '2023',
    img: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1000&q=80&auto=format&fit=crop',
  },
  {
    id: 4,
    title: 'Horizon Tower',
    location: 'Nagpur, Maharashtra',
    type: 'Commercial',
    year: '2022',
    img: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=1000&q=80&auto=format&fit=crop',
  },
  {
    id: 5,
    title: 'Pearl Interiors',
    location: 'Akola, Maharashtra',
    type: 'Interiors',
    year: '2022',
    img: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1000&q=80&auto=format&fit=crop',
  },
]

export default function Projects() {
  const sectionRef = useRef(null)
  const trackRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current
    const track = trackRef.current
    if (!section || !track) return

    const getScrollWidth = () => track.scrollWidth - window.innerWidth

    const ctx = gsap.context(() => {
      gsap.to(track, {
        x: () => -getScrollWidth(),
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: () => `+=${getScrollWidth()}`,
          scrub: 1.2,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      })
    }, section)

    return () => ctx.revert()
  }, [])

  return (
    <section id="projects" ref={sectionRef} className="bg-[#050505]">

      {/* Full-screen pinned container */}
      <div className="h-screen flex flex-col">

        {/* Header — fixed at top inside pin */}
        <div className="flex-none px-6 md:px-14 pt-16 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#B89B72]" />
              <span className="text-[#B89B72] text-[9px] tracking-[0.5em] uppercase font-light">Selected Work</span>
            </div>
            <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] text-[#F5F5F5] font-light leading-[1.1]">
              Featured <em className="text-[#B89B72]">Projects</em>
            </h2>
          </div>
          <p className="text-[#8E8E8E] text-sm font-light max-w-[220px] leading-relaxed">
            Drag or scroll to explore our completed works.
          </p>
        </div>

        {/* Scrolling cards track */}
        <div className="flex-1 flex items-stretch overflow-hidden">
          <div
            ref={trackRef}
            className="flex gap-4 px-[5vw] will-change-transform"
            style={{ width: 'max-content' }}
          >
            {projects.map(({ id, title, location, type, year, img }) => (
              <div
                key={id}
                className="flex-none relative group overflow-hidden cursor-pointer w-[300px] md:w-[400px]"
                style={{ height: 'calc(100vh - 200px)' }}
              >
                {/* Image */}
                <img
                  src={img}
                  alt={title}
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{ transition: 'transform 1s cubic-bezier(0.25,0.46,0.45,0.94)' }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                />

                {/* Permanent strong dark gradient from bottom — ensures text always readable */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: 'linear-gradient(to top, rgba(5,5,5,0.97) 0%, rgba(5,5,5,0.7) 30%, rgba(5,5,5,0.15) 60%, transparent 100%)'
                  }}
                />

                {/* Index */}
                <div className="absolute top-5 left-5 text-[#B89B72]/40 text-[9px] tracking-[0.5em] font-light">
                  0{id}
                </div>

                {/* Text — pinned to bottom, always visible */}
                <div className="absolute inset-x-0 bottom-0 px-6 pb-8">
                  {/* Type tag */}
                  <div className="inline-flex items-center gap-2 mb-4">
                    <div className="w-4 h-px bg-[#B89B72]" />
                    <span className="text-[#B89B72] text-[8px] tracking-[0.5em] uppercase font-light">
                      {type} — {year}
                    </span>
                  </div>

                  {/* Title — large, always on */}
                  <h3 className="font-display text-[#F5F5F5] text-[1.6rem] md:text-[2rem] font-light leading-[1.15] mb-2">
                    {title}
                  </h3>

                  {/* Location */}
                  <div className="text-[#8E8E8E] text-[11px] tracking-[0.25em] font-light mb-5">
                    {location}
                  </div>

                  {/* Gold line — grows on hover */}
                  <div className="flex items-center gap-3">
                    <div
                      className="h-px bg-[#B89B72] transition-all duration-700"
                      style={{ width: '40px' }}
                      ref={el => {
                        if (!el) return
                        const card = el.closest('.group')
                        if (!card) return
                        card.addEventListener('mouseenter', () => { el.style.width = '100px' })
                        card.addEventListener('mouseleave', () => { el.style.width = '40px' })
                      }}
                    />
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-7 h-7 border border-[#B89B72]/50 flex items-center justify-center text-[#B89B72]">
                      <ArrowUpRight size={12} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {/* End spacer */}
            <div className="flex-none w-[10vw]" />
          </div>
        </div>
      </div>
    </section>
  )
}
