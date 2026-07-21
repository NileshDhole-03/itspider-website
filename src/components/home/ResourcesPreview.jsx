import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Container from '../ui/Container'
import SectionHeader from '../ui/SectionHeader'
import Button from '../ui/Button'
import { resources } from '../../data/resources'

export default function ResourcesPreview() {
  return (
    <section className="section-y bg-navy-50/40 border-y border-line">
      <Container className="flex flex-col gap-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <SectionHeader eyebrow="Resources" heading="Learn. Practice. Grow." />
          <Button to="/resources" variant="secondary" className="shrink-0">Browse All Resources</Button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.slice(0, 3).map((r, i) => (
            <motion.div
              key={r.slug}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="card-surface p-6 flex flex-col gap-3"
            >
              <span className="eyebrow-badge w-fit !text-[11px]">{r.category}</span>
              <h3 className="font-bold text-ink-primary leading-snug">{r.title}</h3>
              <p className="text-sm text-ink-secondary leading-relaxed">{r.description}</p>
              <Link to={`/resources/${r.slug}`} className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-accent group w-fit">
                Read More <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
