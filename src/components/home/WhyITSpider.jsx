import { motion } from 'framer-motion'
import { Target, Wrench, BriefcaseBusiness, Route, Compass, Building2 } from 'lucide-react'
import Container from '../ui/Container'
import SectionHeader from '../ui/SectionHeader'

const benefits = [
  { icon: Target, title: 'Industry-Oriented Curriculum', description: 'Focus on skills relevant to real-world technology careers.' },
  { icon: Wrench, title: 'Practical Learning', description: 'Learn concepts through practical implementation.' },
  { icon: BriefcaseBusiness, title: 'Placement-Focused Approach', description: 'Training goes beyond theory and includes recruitment preparation.' },
  { icon: Route, title: 'Structured Learning Path', description: 'Students understand what to learn and what to practice next.' },
  { icon: Compass, title: 'Career Assistance', description: 'Guidance throughout preparation and career development.' },
  { icon: Building2, title: 'College-Focused Programs', description: 'Custom training and placement preparation solutions for institutions.' },
]

export default function WhyITSpider() {
  return (
    <section className="section-y">
      <Container className="flex flex-col gap-12">
        <SectionHeader align="center" eyebrow="Why ITSpider" heading="Why Choose ITSpider?" className="mx-auto" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="flex gap-4 p-2"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <b.icon size={20} strokeWidth={2} />
              </span>
              <div>
                <h3 className="font-bold text-ink-primary mb-1">{b.title}</h3>
                <p className="text-sm text-ink-secondary leading-relaxed">{b.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
