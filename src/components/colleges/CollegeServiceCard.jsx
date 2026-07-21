import { motion } from 'framer-motion'

export default function CollegeServiceCard({ service, index = 0 }) {
  const Icon = service.icon
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.4, delay: (index % 4) * 0.06 }}
      className="card-surface p-6 flex flex-col gap-3"
    >
      <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-navy/[0.06] text-navy">
        <Icon size={20} strokeWidth={2} />
      </span>
      <h3 className="font-bold text-ink-primary">{service.title}</h3>
      <p className="text-sm text-ink-secondary leading-relaxed">{service.description}</p>
    </motion.div>
  )
}
