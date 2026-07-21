import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Quote, UserRound, ChevronLeft, ChevronRight, Star } from 'lucide-react'
import Container from '../ui/Container'
import SectionHeader from '../ui/SectionHeader'
import { testimonials } from '../../data/testimonials'

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)

  const goTo = useCallback((index) => {
    setDirection(index > current ? 1 : -1)
    setCurrent(index)
  }, [current])

  const next = useCallback(() => {
    setDirection(1)
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }, [])

  const prev = useCallback(() => {
    setDirection(-1)
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }, [])

  // Auto-advance every 5 seconds
  useEffect(() => {
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [next])

  const t = testimonials[current]

  const variants = {
    enter: (dir) => ({ x: dir > 0 ? 120 : -120, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({ x: dir > 0 ? -120 : 120, opacity: 0 }),
  }

  return (
    <section className="section-y bg-navy text-white relative overflow-hidden">
      <div className="pointer-events-none absolute -top-32 left-1/4 h-[400px] w-[400px] rounded-full bg-accent/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 right-1/4 h-[300px] w-[300px] rounded-full bg-accent-cyan/10 blur-3xl" />

      <Container className="flex flex-col gap-12 relative">
        <SectionHeader
          align="center"
          tone="dark"
          eyebrow="Student Experiences"
          heading="Hear From Our Students"
          className="mx-auto"
        />

        <div className="relative max-w-3xl mx-auto w-full">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={current}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              className="rounded-[20px] border border-white/10 bg-white/[0.04] backdrop-blur p-8 sm:p-10 flex flex-col items-center text-center gap-6"
            >
              <Quote size={36} className="text-accent/50" />

              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
                ))}
              </div>

              <p className="text-lg sm:text-xl text-white/90 italic leading-relaxed max-w-2xl">
                "{t.quote}"
              </p>

              <div className="flex items-center gap-4 pt-2">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-accent to-accent-cyan text-white font-bold text-lg">
                  {t.name.charAt(0)}
                </span>
                <div className="text-left">
                  <p className="font-semibold text-white">{t.name}</p>
                  <p className="text-sm text-white/60">{t.course} · {t.outcome}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation arrows */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-16 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 hover:bg-white/10 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-16 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 hover:bg-white/10 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        {/* Dots navigation */}
        <div className="flex items-center justify-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === current ? 'w-8 bg-accent' : 'w-2 bg-white/25 hover:bg-white/40'
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}
