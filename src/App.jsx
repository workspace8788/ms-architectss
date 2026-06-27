import { useState, useEffect } from 'react'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import CustomCursor from './components/CustomCursor'
import Preloader from './components/Preloader'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Hero from './sections/Hero'
import About from './sections/About'
import Philosophy from './sections/Philosophy'
import Services from './sections/Services'
import Projects from './sections/Projects'
import QuoteSection from './sections/QuoteSection'
import Contact from './sections/Contact'

gsap.registerPlugin(ScrollTrigger)

export default function App() {
  const [ready, setReady] = useState(false)

  // Lock scroll during preload
  useEffect(() => {
    document.body.style.overflow = ready ? '' : 'hidden'
  }, [ready])

  // Lenis smooth scroll — only after preloader
  useEffect(() => {
    if (!ready) return

    const lenis = new Lenis({
      duration: 1.3,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
      smoothTouch: false,
    })

    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time) => lenis.raf(time * 1000))
    gsap.ticker.lagSmoothing(0)

    return () => {
      lenis.destroy()
      gsap.ticker.remove((time) => lenis.raf(time * 1000))
    }
  }, [ready])

  return (
    <>
      <CustomCursor />
      <Preloader onComplete={() => setReady(true)} />

      {ready && (
        <div className="bg-[#090909]">
          <Navbar />
          <main>
            <Hero />
            <About />
            <Philosophy />
            <Services />
            <Projects />
            <QuoteSection />
            <Contact />
          </main>
          <Footer />
        </div>
      )}
    </>
  )
}
