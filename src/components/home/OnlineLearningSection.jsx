import { motion } from 'framer-motion'
import { BookOpen, Video, Braces, TrendingUp, ClipboardCheck, Compass } from 'lucide-react'
import Container from '../ui/Container'
import Badge from '../ui/Badge'
import Button from '../ui/Button'

const features = [
  { icon: BookOpen, label: 'Structured Courses' },
  { icon: Video, label: 'Recorded / Live Learning' },
  { icon: Braces, label: 'Practice Resources' },
  { icon: TrendingUp, label: 'Progress-Oriented Learning' },
  { icon: ClipboardCheck, label: 'Placement Preparation' },
  { icon: Compass, label: 'Career Support' },
]

export default function OnlineLearningSection() {
  return (
    <section className="section-y">
      <Container className="grid lg:grid-cols-2 gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-5"
        >
          <Badge>Online Learning</Badge>
          <h2 className="text-[32px] sm:text-[38px] font-bold text-ink-primary leading-tight">
            Learn Beyond the Classroom.
          </h2>
          <p className="text-ink-secondary leading-relaxed max-w-lg">
            Access structured learning programs designed for students who want to develop technical skills and prepare
            for their careers from anywhere.
          </p>
          <div className="grid sm:grid-cols-2 gap-3 pt-2">
            {features.map((f) => (
              <div key={f.label} className="flex items-center gap-2.5 text-sm text-ink-secondary">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/10 text-accent shrink-0">
                  <f.icon size={15} />
                </span>
                {f.label}
              </div>
            ))}
          </div>
          <div className="pt-2">
            <Button to="/online-courses" variant="primary">Explore Online Courses</Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative rounded-card border border-line bg-navy-50/60 aspect-[4/3] flex items-center justify-center overflow-hidden"
        >
          <div className="absolute inset-6 rounded-xl border border-line bg-white shadow-card flex flex-col p-5 gap-3">
            <div className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-line" />
              <span className="h-2.5 w-2.5 rounded-full bg-line" />
              <span className="h-2.5 w-2.5 rounded-full bg-line" />
            </div>
            <div className="flex-1 grid grid-cols-2 gap-3">
              <div className="rounded-lg bg-navy-50 border border-line" />
              <div className="rounded-lg bg-accent/10 border border-line" />
              <div className="rounded-lg bg-accent/10 border border-line col-span-2" />
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
