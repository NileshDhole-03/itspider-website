import { motion } from 'framer-motion'
import Container from '../ui/Container'
import SectionHeader from '../ui/SectionHeader'

const steps = [
  { num: '01', title: 'Learn', description: 'Learn concepts from structured training.' },
  { num: '02', title: 'Practice', description: 'Strengthen your knowledge through practical exercises and coding.' },
  { num: '03', title: 'Build', description: 'Work on practical, real-world projects.' },
  { num: '04', title: 'Assess', description: 'Measure your preparation through tests and assessments.' },
  { num: '05', title: 'Prepare', description: 'Practice aptitude, technical interviews and placement questions.' },
  { num: '06', title: 'Grow', description: 'Receive career and placement assistance.' },
]

export default function LearningJourney() {
  return (
    <section className="section-y">
      <Container className="flex flex-col gap-14">
        <SectionHeader
          align="center"
          eyebrow="How You Learn"
          heading="Don't Just Learn. Become Industry Ready."
          className="mx-auto"
        />

        {/* Desktop horizontal timeline */}
        <div className="hidden lg:grid grid-cols-6 gap-4 relative">
          <div className="absolute top-6 left-[8%] right-[8%] h-px bg-line" />
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex flex-col items-center text-center gap-3 relative"
            >
              <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-navy text-white font-bold text-sm">
                {step.num}
              </span>
              <h3 className="font-bold text-ink-primary">{step.title}</h3>
              <p className="text-sm text-ink-secondary leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Mobile vertical timeline */}
        <div className="flex lg:hidden flex-col gap-8 relative pl-6">
          <div className="absolute top-2 bottom-2 left-[23px] w-px bg-line" />
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="flex gap-4 relative"
            >
              <span className="relative z-10 flex h-11 w-11 shrink-0 -ml-6 items-center justify-center rounded-full bg-navy text-white font-bold text-xs">
                {step.num}
              </span>
              <div>
                <h3 className="font-bold text-ink-primary">{step.title}</h3>
                <p className="text-sm text-ink-secondary leading-relaxed mt-1">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
