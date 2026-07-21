import { motion } from 'framer-motion'
import { GraduationCap, Award, Briefcase, Building2 } from 'lucide-react'
import Container from '../ui/Container'
import SectionHeader from '../ui/SectionHeader'

const audiences = [
  { icon: GraduationCap, title: 'Students', description: 'Start building industry-ready skills while you\u2019re still in college.' },
  { icon: Award, title: 'Fresh Graduates', description: 'Strengthen technical skills and prepare for software recruitment.' },
  { icon: Briefcase, title: 'Working Professionals', description: 'Upgrade your skills and move toward new technology opportunities.' },
  { icon: Building2, title: 'Colleges', description: 'Prepare students systematically for technology careers and placements.' },
]

export default function WhoCanJoin() {
  return (
    <section className="section-y">
      <Container className="flex flex-col gap-12">
        <SectionHeader align="center" eyebrow="Who Can Join" heading="Built for Every Stage of Your Career." className="mx-auto" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="card-surface p-7 flex flex-col gap-3 text-center items-center"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-navy text-white">
                <a.icon size={20} />
              </span>
              <h3 className="font-bold text-ink-primary">{a.title}</h3>
              <p className="text-sm text-ink-secondary leading-relaxed">{a.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
