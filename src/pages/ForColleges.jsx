import { motion } from 'framer-motion'
import { AlertTriangle, TrendingUp, ClipboardCheck, Users, GraduationCap, Building2 } from 'lucide-react'
import SEO from '../components/ui/SEO'
import Container from '../components/ui/Container'
import Breadcrumb from '../components/ui/Breadcrumb'
import SectionHeader from '../components/ui/SectionHeader'
import Button from '../components/ui/Button'
import CollegeServiceCard from '../components/colleges/CollegeServiceCard'
import PartnershipTimeline from '../components/colleges/PartnershipTimeline'
import CollegeLeadForm from '../components/colleges/CollegeLeadForm'
import { collegeServices } from '../data/collegeServices'

const challenges = [
  'Students often lack structured, industry-oriented technical training beyond the core curriculum.',
  'Placement cells face pressure to prepare large student batches within limited time.',
  'Aptitude, coding and interview readiness vary significantly across students.',
  'Institutions need reliable ways to assess and track student preparation progress.',
]

const studentBenefits = [
  'Structured, practical technical training',
  'Consistent placement preparation across aptitude, coding and interviews',
  'Clear visibility into personal readiness through assessments',
  'Guidance from trainers with industry-oriented curriculum design',
]

const placementCellBenefits = [
  'Structured training programs that align with recruitment timelines',
  'Assessment data to track batch-wide readiness',
  'Reduced coordination effort through end-to-end program delivery',
  'Custom program design based on the institution\u2019s specific requirements',
]

export default function ForColleges() {
  return (
    <>
      <SEO
        title="For Colleges | ITSpider Institutional Training Solutions"
        description="Partner with ITSpider for structured technical training, assessments and placement preparation programs designed for colleges and institutions."
      />
      <section className="section-y pb-10 bg-navy text-white">
        <Container className="flex flex-col gap-6">
          <Breadcrumb items={[{ label: 'Home', to: '/' }, { label: 'For Colleges' }]} />
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold tracking-wide text-white/80 uppercase w-fit">
            For Colleges & Institutions
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-[48px] font-bold max-w-2xl leading-tight">
            Build Industry-Ready Students.
          </h1>
          <p className="text-white/70 max-w-xl leading-relaxed">
            Training, assessments and placement preparation solutions designed for colleges and educational
            institutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 pt-1">
            <Button to="/contact" variant="primary">Request a Demo</Button>
            <Button to="/contact" variant="darkOutline">Talk to Our Team</Button>
          </div>
        </Container>
      </section>

      <section className="section-y">
        <Container className="grid lg:grid-cols-2 gap-12">
          <SectionHeader eyebrow="The Challenge" heading="Challenges Colleges Face" />
          <div className="flex flex-col gap-4">
            {challenges.map((c, i) => (
              <motion.div
                key={c}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="flex items-start gap-3 p-4 rounded-card border border-line bg-white"
              >
                <AlertTriangle size={18} className="text-accent shrink-0 mt-0.5" />
                <p className="text-sm text-ink-secondary leading-relaxed">{c}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-y bg-navy-50/40 border-y border-line">
        <Container className="flex flex-col gap-12">
          <SectionHeader
            align="center"
            eyebrow="Our Solutions"
            heading="ITSpider Institutional Solutions"
            description="A complete set of training, assessment and placement preparation solutions built for institutions."
            className="mx-auto"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {collegeServices.map((s, i) => (
              <CollegeServiceCard service={s} index={i} key={s.title} />
            ))}
          </div>
        </Container>
      </section>

      <section className="section-y">
        <Container className="flex flex-col gap-12">
          <SectionHeader align="center" eyebrow="Process" heading="How Partnership Works" className="mx-auto" />
          <PartnershipTimeline />
        </Container>
      </section>

      <section className="section-y bg-navy-50/40 border-y border-line">
        <Container className="grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="card-surface p-7 flex flex-col gap-4"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent/10 text-accent">
              <GraduationCap size={20} />
            </span>
            <h3 className="text-xl font-bold text-ink-primary">Benefits for Students</h3>
            <ul className="flex flex-col gap-2.5">
              {studentBenefits.map((b) => (
                <li key={b} className="flex items-start gap-2.5 text-sm text-ink-secondary">
                  <TrendingUp size={15} className="text-accent shrink-0 mt-0.5" /> {b}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.08 }}
            className="card-surface p-7 flex flex-col gap-4"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent/10 text-accent">
              <Building2 size={20} />
            </span>
            <h3 className="text-xl font-bold text-ink-primary">Benefits for Placement Cells</h3>
            <ul className="flex flex-col gap-2.5">
              {placementCellBenefits.map((b) => (
                <li key={b} className="flex items-start gap-2.5 text-sm text-ink-secondary">
                  <ClipboardCheck size={15} className="text-accent shrink-0 mt-0.5" /> {b}
                </li>
              ))}
            </ul>
          </motion.div>
        </Container>
      </section>

      <section className="section-y">
        <Container className="grid lg:grid-cols-2 gap-12 items-start">
          <SectionHeader
            eyebrow="Get in Touch"
            heading="Request a Consultation"
            description="Share your institution's requirements and our team will get back to you with a suitable program structure."
          />
          <CollegeLeadForm />
        </Container>
      </section>
    </>
  )
}
