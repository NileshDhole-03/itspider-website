import { motion } from 'framer-motion'
import Badge from './Badge'

export default function SectionHeader({ eyebrow, heading, description, align = 'left', tone = 'light', className = '' }) {
  const alignment = align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left'
  const headingColor = tone === 'dark' ? 'text-white' : 'text-ink-primary'
  const descColor = tone === 'dark' ? 'text-white/70' : 'text-ink-secondary'

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`flex flex-col gap-4 max-w-2xl ${alignment} ${className}`}
    >
      {eyebrow && <Badge tone={tone === 'dark' ? 'dark' : 'light'}>{eyebrow}</Badge>}
      <h2 className={`text-[32px] sm:text-[38px] lg:text-[44px] font-bold leading-[1.15] tracking-tight ${headingColor}`}>
        {heading}
      </h2>
      {description && <p className={`text-[16px] sm:text-[18px] leading-relaxed ${descColor}`}>{description}</p>}
    </motion.div>
  )
}
