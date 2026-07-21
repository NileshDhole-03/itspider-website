import { motion } from 'framer-motion'
import { FileText, Calculator, Braces, ClipboardCheck, MessageSquareText, MessageCircleQuestion, Compass, BriefcaseBusiness, ShieldAlert } from 'lucide-react'
import SEO from '../components/ui/SEO'
import Container from '../components/ui/Container'
import Breadcrumb from '../components/ui/Breadcrumb'
import SectionHeader from '../components/ui/SectionHeader'
import Button from '../components/ui/Button'
import FAQ from '../components/ui/FAQ'
import { placementFaqs } from '../data/faqs'

const sections = [
  { icon: Calculator, title: 'Aptitude Preparation', description: 'Practice quantitative aptitude, logical reasoning and verbal ability with structured, recruitment-relevant material.' },
  { icon: Braces, title: 'Coding Preparation', description: 'Strengthen your programming and problem-solving skills through structured coding practice.' },
  { icon: FileText, title: 'Resume Preparation', description: 'Build a clear, recruiter-friendly resume that reflects your skills and projects accurately.' },
  { icon: ClipboardCheck, title: 'Mock Tests', description: 'Evaluate your preparation through structured mock assessments before real recruitment rounds.' },
  { icon: MessageSquareText, title: 'Technical Interview Preparation', description: 'Practice for technical interview rounds relevant to your target roles.' },
  { icon: MessageCircleQuestion, title: 'HR Interview Preparation', description: 'Prepare for HR rounds, behavioral questions and workplace readiness discussions.' },
  { icon: Compass, title: 'Career Guidance', description: 'Get guidance on career paths, technology choices and preparation strategy.' },
  { icon: BriefcaseBusiness, title: 'Placement Opportunity Assistance', description: 'Receive support and guidance as you pursue placement opportunities.' },
]

const journey = [
  { step: '01', title: 'Enroll in Preparation Track', description: 'Join the placement preparation program suited to your target roles.' },
  { step: '02', title: 'Build Core Skills', description: 'Strengthen aptitude, coding and technical fundamentals.' },
  { step: '03', title: 'Practice & Assess', description: 'Work through mock tests and structured assessments.' },
  { step: '04', title: 'Prepare for Interviews', description: 'Practice technical and HR interview rounds.' },
  { step: '05', title: 'Pursue Opportunities', description: 'Receive placement assistance and guidance as you apply.' },
]

export default function PlacementAssistance() {
  return (
    <>
      <SEO
        title="Placement Assistance | ITSpider"
        description="Prepare for technical recruitment with ITSpider's placement assistance — aptitude, coding, resume, mock tests and interview preparation."
      />
      <section className="section-y pb-10 bg-navy-50/40 border-b border-line">
        <Container className="flex flex-col gap-6">
          <Breadcrumb items={[{ label: 'Home', to: '/' }, { label: 'Placement Assistance' }]} />
          <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-ink-primary max-w-2xl">
            Prepare Smarter for Your Next Opportunity.
          </h1>
          <p className="text-ink-secondary max-w-xl leading-relaxed">
            ITSpider's placement assistance focuses on helping students develop the skills, confidence and preparation
            required for recruitment processes.
          </p>
          <div className="pt-1">
            <Button to="/contact" variant="primary">Start Your Placement Preparation</Button>
          </div>
        </Container>
      </section>

      <section className="section-y">
        <Container className="flex flex-col gap-12">
          <SectionHeader eyebrow="What's Included" heading="A Complete Placement Preparation Track" align="center" className="mx-auto" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {sections.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="card-surface p-6 flex flex-col gap-3"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <s.icon size={19} />
                </span>
                <h3 className="font-bold text-ink-primary text-[15px]">{s.title}</h3>
                <p className="text-sm text-ink-secondary leading-relaxed">{s.description}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-y bg-navy-50/40 border-y border-line">
        <Container className="flex flex-col gap-12">
          <SectionHeader eyebrow="Your Journey" heading="The Placement Preparation Journey" align="center" className="mx-auto" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {journey.map((j, i) => (
              <motion.div
                key={j.step}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="flex flex-col gap-2"
              >
                <span className="text-2xl font-bold text-accent/30">{j.step}</span>
                <h3 className="font-bold text-ink-primary text-[15px]">{j.title}</h3>
                <p className="text-sm text-ink-secondary leading-relaxed">{j.description}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-y bg-navy text-white">
        <Container className="flex items-start gap-4 max-w-3xl mx-auto">
          <ShieldAlert size={26} className="text-accent-light shrink-0 mt-1" />
          <div>
            <h2 className="text-xl font-bold text-white mb-2">Placement Assistance, Not a Placement Guarantee</h2>
            <p className="text-white/70 leading-relaxed">
              ITSpider helps you prepare thoroughly for recruitment processes through structured training, practice and
              guidance. We do not promise or guarantee job placement, as final hiring decisions rest with employers.
            </p>
          </div>
        </Container>
      </section>

      <section className="section-y">
        <Container className="max-w-3xl mx-auto flex flex-col gap-8">
          <SectionHeader eyebrow="FAQs" heading="Frequently Asked Questions" />
          <FAQ items={placementFaqs} />
        </Container>
      </section>
    </>
  )
}
