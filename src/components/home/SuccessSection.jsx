import { motion } from 'framer-motion'
import { Building2 } from 'lucide-react'
import Container from '../ui/Container'
import SectionHeader from '../ui/SectionHeader'

export default function SuccessSection() {
  return (
    <section className="section-y">
      <Container className="grid lg:grid-cols-2 gap-12 items-center">
        <SectionHeader
          eyebrow="Career Outcomes"
          heading="From Training to Industry"
          description="ITSpider focuses on helping learners build practical technical capabilities and prepare for real-world career opportunities."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="card-surface p-8 flex flex-col gap-5"
        >
          <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-navy text-white">
            <Building2 size={22} />
          </span>
          <h3 className="text-2xl font-bold text-ink-primary">Capgemini</h3>
          <p className="text-ink-secondary leading-relaxed">
            ITSpider-trained professionals have successfully progressed into careers at Capgemini.
          </p>
          <p className="text-xs text-ink-muted pt-1 border-t border-line pt-4">
            This reflects career outcomes of individuals trained through ITSpider and does not represent an official
            hiring partnership.
          </p>
        </motion.div>
      </Container>
    </section>
  )
}
