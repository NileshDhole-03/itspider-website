import { motion } from 'framer-motion'
import { partnershipProcess } from '../../data/collegeServices'

export default function PartnershipTimeline() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {partnershipProcess.map((step, i) => (
        <motion.div
          key={step.step}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.4, delay: i * 0.06 }}
          className="card-surface p-6 flex flex-col gap-3"
        >
          <span className="text-3xl font-bold text-accent/25">{step.step}</span>
          <h3 className="font-bold text-ink-primary">{step.title}</h3>
          <p className="text-sm text-ink-secondary leading-relaxed">{step.description}</p>
        </motion.div>
      ))}
    </div>
  )
}
