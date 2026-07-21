import { motion } from 'framer-motion'
import { Code2, Laptop2, ClipboardCheck, BriefcaseBusiness, CheckCircle2 } from 'lucide-react'
import Container from '../ui/Container'
import SectionHeader from '../ui/SectionHeader'

const services = [
  {
    icon: Code2,
    title: 'Technology Training',
    description: 'Learn practical technology skills through structured, industry-oriented training programs.',
    features: ['Programming', 'Development', 'Software Technologies', 'Practical Projects'],
  },
  {
    icon: Laptop2,
    title: 'Online Courses',
    description: 'Learn from anywhere with structured online programs designed around practical skills and career preparation.',
    features: ['Structured Curriculum', 'Practical Learning', 'Flexible Access', 'Career-Focused Content'],
  },
  {
    icon: ClipboardCheck,
    title: 'Placement Preparation',
    description: 'Prepare systematically for technical recruitment processes.',
    features: ['Aptitude Preparation', 'Coding Practice', 'Technical Interview Preparation', 'Mock Tests'],
  },
  {
    icon: BriefcaseBusiness,
    title: 'Placement Assistance',
    description: 'Get career guidance and placement-oriented support throughout your job preparation journey.',
    features: ['Resume Preparation', 'Interview Guidance', 'Career Guidance', 'Opportunity Assistance'],
  },
]

export default function ServicesSection() {
  return (
    <section className="section-y">
      <Container className="flex flex-col gap-12">
        <SectionHeader
          eyebrow="What We Do"
          heading="Everything You Need to Become Industry Ready"
          description="A complete ecosystem connecting training, practice, assessment and placement preparation."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="card-surface p-7 flex flex-col gap-4"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <service.icon size={22} strokeWidth={2} />
              </span>
              <h3 className="text-xl font-bold text-ink-primary">{service.title}</h3>
              <p className="text-sm text-ink-secondary leading-relaxed">{service.description}</p>
              <ul className="flex flex-col gap-2 pt-2 mt-auto">
                {service.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-ink-secondary">
                    <CheckCircle2 size={15} className="text-accent shrink-0" /> {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
