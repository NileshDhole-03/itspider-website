import { motion } from 'framer-motion'
import { Target, Wrench, BriefcaseBusiness, Building2, Compass, RefreshCw, GraduationCap, Users, Phone, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import SEO from '../components/ui/SEO'
import Container from '../components/ui/Container'
import Breadcrumb from '../components/ui/Breadcrumb'
import SectionHeader from '../components/ui/SectionHeader'
import Button from '../components/ui/Button'

const pillars = [
  { icon: Target, title: 'Practical Skills', description: 'We focus on skills students can actually apply, not just theory.' },
  { icon: BriefcaseBusiness, title: 'Industry Readiness', description: 'Training designed around what technology roles actually require.' },
  { icon: Compass, title: 'Student Careers', description: 'Every program is built with a student\u2019s career outcomes in mind.' },
  { icon: Building2, title: 'Institutional Solutions', description: 'Structured programs designed specifically for colleges and placement cells.' },
  { icon: RefreshCw, title: 'Continuous Learning', description: 'Technology changes constantly, and so does our approach to training.' },
  { icon: Wrench, title: 'Hands-On Approach', description: 'Learning by building, practicing and solving real problems.' },
]

const milestones = [
  { year: 'Foundation', title: 'ITSpider Founded', description: 'Started with a mission to bridge the gap between academic knowledge and industry requirements.' },
  { year: '10,000+', title: 'Students Trained', description: 'Helped thousands of students build practical technology skills and prepare for careers.' },
  { year: '500+', title: 'Training Programs', description: 'Delivered hundreds of technology training and placement preparation programs.' },
  { year: '15+', title: 'College Partnerships', description: 'Partnered with colleges across the region to strengthen student employability.' },
]

export default function About() {
  return (
    <>
      <SEO
        title="About Us | ITSpider"
        description="Learn about ITSpider — a technology training, placement preparation and career development company for students, professionals and colleges."
      />

      {/* Hero */}
      <section className="section-y pb-10 bg-navy text-white relative overflow-hidden">
        <div className="pointer-events-none absolute -top-40 right-0 h-[400px] w-[400px] rounded-full bg-accent/10 blur-3xl" />
        <Container className="flex flex-col gap-6 relative">
          <Breadcrumb items={[{ label: 'Home', to: '/' }, { label: 'About Us' }]} />
          <h1 className="text-3xl sm:text-4xl lg:text-[48px] font-bold max-w-2xl leading-tight">
            Training. Skills. Placement Preparation. Career Growth.
          </h1>
          <p className="text-white/70 max-w-xl leading-relaxed text-lg">
            ITSpider is a technology training, career development and placement assistance company working with
            students, fresh graduates, working professionals and educational institutions.
          </p>
          <div className="flex items-center gap-4 pt-2">
            <Button to="/contact" variant="primary">Get in Touch</Button>
            <Button to="/courses" variant="darkOutline">Explore Courses</Button>
          </div>
        </Container>
      </section>

      {/* Who We Are + Mission */}
      <section className="section-y">
        <Container className="grid lg:grid-cols-2 gap-14 items-start">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-5"
          >
            <SectionHeader
              eyebrow="Who We Are"
              heading="Who We Are"
              description="ITSpider provides industry-oriented technology training, online courses, placement preparation and placement assistance, along with structured training and assessment solutions for colleges. We work to connect students, skills, practice, assessments and career opportunities into one coherent journey."
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col gap-5"
          >
            <SectionHeader
              eyebrow="Our Mission"
              heading="Our Mission"
              description="To help students and professionals build practical technology skills and become confidently prepared for real recruitment processes, while helping colleges strengthen student employability at scale."
            />
          </motion.div>
        </Container>
      </section>

      {/* Milestones */}
      <section className="section-y bg-navy-50/40 border-y border-line">
        <Container className="flex flex-col gap-12">
          <SectionHeader align="center" eyebrow="Our Journey" heading="Milestones" className="mx-auto" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((m, i) => (
              <motion.div
                key={m.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="card-surface p-6 flex flex-col gap-3 text-center"
              >
                <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-cyan">{m.year}</span>
                <h3 className="font-bold text-ink-primary">{m.title}</h3>
                <p className="text-sm text-ink-secondary leading-relaxed">{m.description}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Our Approach + What We Do */}
      <section className="section-y">
        <Container className="grid lg:grid-cols-2 gap-14 items-start">
          <SectionHeader
            eyebrow="Our Approach"
            heading="Our Approach"
            description="We combine structured technical training with dedicated placement preparation — covering aptitude, coding, mock assessments and interview practice — so students learn concepts and also learn how to apply them in recruitment settings."
          />
          <SectionHeader
            eyebrow="What We Do"
            heading="What We Do"
            description="Technology training and online courses. Placement preparation and placement assistance. Career guidance. Structured training, assessment and employability programs designed specifically for colleges and educational institutions."
          />
        </Container>
      </section>

      {/* Why ITSpider - Pillars */}
      <section className="section-y bg-navy-50/40 border-y border-line">
        <Container className="flex flex-col gap-12">
          <SectionHeader align="center" eyebrow="Our Philosophy" heading="Why ITSpider" className="mx-auto" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="card-surface p-6 flex flex-col gap-3 group"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                  <p.icon size={20} />
                </span>
                <h3 className="font-bold text-ink-primary">{p.title}</h3>
                <p className="text-sm text-ink-secondary leading-relaxed">{p.description}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Vision + CTA */}
      <section className="section-y bg-navy text-white relative overflow-hidden">
        <div className="pointer-events-none absolute -bottom-32 left-1/2 -translate-x-1/2 h-[420px] w-[720px] rounded-full bg-accent/10 blur-3xl" />
        <Container className="max-w-3xl mx-auto text-center flex flex-col gap-6 items-center relative">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold tracking-wide text-white/80 uppercase w-fit">
            Our Vision
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
            A future where every student has access to practical, industry-relevant training and clear placement
            preparation support.
          </h2>
          <p className="text-white/60 max-w-xl">
            Based in Pune, serving students and colleges across India.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <Button to="/contact" variant="primary">Start Your Journey</Button>
            <Link to="/for-colleges" className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:underline">
              Solutions for Colleges <ArrowRight size={14} />
            </Link>
          </div>
        </Container>
      </section>
    </>
  )
}
