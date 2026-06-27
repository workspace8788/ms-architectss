import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0)
  const [gone, setGone] = useState(false)

  useEffect(() => {
    let val = 0
    const iv = setInterval(() => {
      val += Math.random() * 6 + 2
      if (val >= 100) {
        val = 100
        clearInterval(iv)
        setTimeout(() => {
          setGone(true)
          setTimeout(onComplete, 1000)
        }, 500)
      }
      setProgress(Math.min(val, 100))
    }, 55)
    return () => clearInterval(iv)
  }, [onComplete])

  return (
    <AnimatePresence>
      {!gone && (
        <motion.div
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9999] bg-[#050505] flex flex-col items-center justify-center"
        >
          {/* 3D Gold logo image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.1, ease: [0.25,0.46,0.45,0.94] }}
            className="w-48 h-48 md:w-60 md:h-60 rounded-full overflow-hidden mb-10"
          >
            <img
              src="./assets/logo-backremove.png"
              alt="MS Architects & Interiors"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-center mb-10"
          >
            <div className="text-[#B89B72] text-[9px] tracking-[0.55em] uppercase font-light font-body">
              The Signature of Luxury
            </div>
          </motion.div>

          {/* Gold loading line */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col items-center gap-4"
          >
            <div className="w-[180px] h-[1px] bg-white/5 relative overflow-hidden">
              <div
                className="absolute left-0 top-0 h-full bg-gradient-to-r from-[#8A7255] to-[#B89B72]"
                style={{ width: `${progress}%`, transition: 'width 0.1s linear' }}
              />
            </div>
            <div className="text-[#8E8E8E] text-[9px] tracking-[0.5em] font-light tabular-nums">
              {String(Math.floor(progress)).padStart(2, '0')}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
