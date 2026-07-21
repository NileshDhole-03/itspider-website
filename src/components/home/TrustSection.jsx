import { motion } from 'framer-motion'
import Container from '../ui/Container'
import { outcomeCompanies } from '../../data/testimonials'
import { Building2, CheckCircle2 } from 'lucide-react'

export default function TrustSection() {
  return (
    <section className="py-12 bg-navy-50/50 border-y border-line">
      <Container className="flex flex-col items-center text-center gap-6">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-sm font-semibold text-ink-muted uppercase tracking-wider"
        >
          ITSpider-Trained Professionals Are Building Careers At
        </motion.p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          {outcomeCompanies.map((company, i) => (
            <motion.div
              key={company.name}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.04 }}
              className="flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2 shadow-sm hover:shadow-card hover:-translate-y-0.5 transition-all duration-200"
            >
              <Building2 size={14} className="text-accent" />
              <span className="text-sm font-medium text-ink-primary">{company.name}</span>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: outcomeCompanies.length * 0.04 }}
            className="flex items-center gap-2 rounded-full bg-accent/5 border border-accent/20 px-4 py-2 text-accent text-sm font-semibold"
          >
            <CheckCircle2 size={14} /> & Many More
          </motion.div>
        </div>

        <p className="text-xs text-ink-muted max-w-lg">
          Our trained professionals have progressed into roles at companies including those shown above.
        </p>
      </Container>
    </section>
  )
}
