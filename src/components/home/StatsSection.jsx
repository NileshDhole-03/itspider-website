import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Container from '../ui/Container'
import { stats } from '../../data/testimonials'

function AnimatedCounter({ target, suffix = '' }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          // Parse the numeric part from the target string
          const numericPart = target.replace(/[^0-9]/g, '')
          const targetNum = parseInt(numericPart, 10)
          if (isNaN(targetNum)) return

          const duration = 2000
          const steps = 60
          const stepTime = duration / steps
          let current = 0

          const timer = setInterval(() => {
            current += Math.ceil(targetNum / steps)
            if (current >= targetNum) {
              current = targetNum
              clearInterval(timer)
            }
            setCount(current)
          }, stepTime)
        }
      },
      { threshold: 0.3 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target])

  // Format number with commas
  const formatted = count.toLocaleString('en-IN')
  // Extract suffix from original value (like +)
  const originalSuffix = target.replace(/[0-9,]/g, '')

  return (
    <span ref={ref} className="text-3xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-cyan tabular-nums">
      {formatted}{originalSuffix}
    </span>
  )
}

export default function StatsSection() {
  return (
    <section className="section-y bg-navy-50/40 border-y border-line">
      <Container className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="flex flex-col items-center text-center gap-2 py-4"
          >
            <AnimatedCounter target={stat.value} />
            <span className="text-sm font-medium text-ink-secondary">{stat.label}</span>
          </motion.div>
        ))}
      </Container>
    </section>
  )
}
