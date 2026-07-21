import { motion } from 'framer-motion'
import { FileText, Calculator, Braces, ClipboardCheck, MessageSquareText, Compass } from 'lucide-react'
import Container from '../ui/Container'
import SectionHeader from '../ui/SectionHeader'
import Button from '../ui/Button'

const items = [
  { icon: FileText, title: 'Resume Building', description: 'Help students create professional, recruiter-friendly resumes.' },
  { icon: Calculator, title: 'Aptitude Preparation', description: 'Practice quantitative aptitude, logical reasoning and verbal ability.' },
  { icon: Braces, title: 'Coding Preparation', description: 'Practice programming and coding questions relevant to technical recruitment.' },
  { icon: ClipboardCheck, title: 'Mock Assessments', description: 'Evaluate placement readiness through structured assessments.' },
  { icon: MessageSquareText, title: 'Interview Preparation', description: 'Prepare for technical and HR interview rounds.' },
  { icon: Compass, title: 'Career Guidance', description: 'Understand career paths, technologies and preparation strategies.' },
]

export default function PlacementSection() {
  return (
    <section className="section-y bg-navy text-white relative overflow-hidden">
      <div className="pointer-events-none absolute -top-24 right-0 h-[400px] w-[400px] rounded-full bg-accent/10 blur-3xl" />
      <Container className="flex flex-col gap-12 relative">
        <SectionHeader
          tone="dark"
          eyebrow="Placement Assistance"
          heading="More Than Training. We Help You Prepare for Opportunities."
          description="ITSpider's placement assistance focuses on helping students develop the skills, confidence and preparation required for recruitment processes."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="rounded-card border border-white/10 bg-white/[0.03] p-6 flex flex-col gap-3 hover:border-white/25 hover:bg-white/[0.05] transition-colors"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-accent-light">
                <item.icon size={19} strokeWidth={2} />
              </span>
              <h3 className="font-bold text-white">{item.title}</h3>
              <p className="text-sm text-white/65 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <div>
          <Button to="/placement-assistance" variant="primary">Explore Placement Assistance</Button>
        </div>
      </Container>
    </section>
  )
}
