import { motion } from 'framer-motion'
import { GraduationCap, ClipboardCheck, MessageSquareText, BriefcaseBusiness, Building2, ArrowRight, ArrowDown, CheckCircle2, Sparkles, Code2, Braces } from 'lucide-react'
import Container from '../ui/Container'
import Button from '../ui/Button'
import Badge from '../ui/Badge'
import { Link } from 'react-router-dom'

const journeyCards = [
  { icon: GraduationCap, label: 'Technical Training', color: 'from-blue-500/20 to-blue-600/5', delay: 0 },
  { icon: ClipboardCheck, label: 'Mock Assessments', color: 'from-emerald-500/20 to-emerald-600/5', delay: 0.7 },
  { icon: MessageSquareText, label: 'Interview Preparation', color: 'from-violet-500/20 to-violet-600/5', delay: 1.4 },
  { icon: BriefcaseBusiness, label: 'Placement Assistance', color: 'from-amber-500/20 to-amber-600/5', delay: 2.1 },
  { icon: Building2, label: 'College Programs', color: 'from-rose-500/20 to-rose-600/5', delay: 2.8 },
]

const trustBadges = [
  '10,000+ Students Trained',
  '500+ Training Programs',
  '15+ College Collaborations',
]

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 -right-40 h-[520px] w-[520px] rounded-full bg-accent/[0.06] blur-3xl animate-pulse-slow" />
        <div className="absolute top-1/3 -left-32 h-[420px] w-[420px] rounded-full bg-accent-cyan/[0.05] blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-[300px] w-[300px] rounded-full bg-violet-500/[0.03] blur-3xl" />
        <svg className="absolute inset-0 h-full w-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#0F172A" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <Container className="pt-16 pb-20 md:pt-24 md:pb-28 grid lg:grid-cols-2 gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex flex-col gap-6"
        >
          <Badge>Training • Skills • Placement Assistance</Badge>

          <h1 className="text-[38px] sm:text-[48px] lg:text-[62px] font-bold leading-[1.08] tracking-tight text-ink-primary">
            Build Skills That <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-cyan">Move Your Career</span> Forward.
          </h1>

          <p className="text-lg font-medium text-ink-secondary">
            Industry-Focused Training for Students, Professionals &amp; Colleges
          </p>

          <p className="text-base sm:text-lg leading-relaxed text-ink-secondary max-w-xl">
            ITSpider provides industry-oriented technology training, online courses, placement preparation and career
            assistance designed to help students become confident and job-ready.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <Button to="/courses" variant="primary">Explore Courses</Button>
            <Button to="/placement-assistance" variant="secondary">Placement Assistance</Button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            {trustBadges.map((badge) => (
              <span key={badge} className="inline-flex items-center gap-1.5 text-xs font-medium text-ink-muted bg-navy-50 rounded-full px-3 py-1.5 border border-line">
                <CheckCircle2 size={12} className="text-accent" /> {badge}
              </span>
            ))}
          </div>

          <div className="pt-1 flex items-center gap-2 text-sm text-ink-secondary">
            <span>Looking for college training solutions?</span>
            <Link to="/for-colleges" className="inline-flex items-center gap-1 font-semibold text-accent hover:underline">
              Explore Solutions for Colleges <ArrowRight size={14} />
            </Link>
          </div>
        </motion.div>

        {/* Premium hero visual - Interactive journey visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
          className="relative h-[420px] sm:h-[480px] lg:h-[520px]"
        >
          {/* Glowing background card */}
          <div className="absolute inset-0 rounded-[24px] border border-line/60 bg-gradient-to-br from-white via-navy-50/40 to-accent/[0.04] overflow-hidden shadow-card">
            {/* Decorative code lines */}
            <div className="absolute top-6 left-6 flex items-center gap-2 opacity-40">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
            </div>

            {/* Central flow visualization */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2.5">
              {['Learn', 'Practice', 'Assess', 'Prepare', 'Grow'].map((step, i, arr) => (
                <motion.div 
                  key={step} 
                  className="flex flex-col items-center gap-1.5"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 0.25, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                >
                  <span className="text-xs font-bold tracking-wider text-navy uppercase">{step}</span>
                  {i < arr.length - 1 && <ArrowDown size={12} className="text-navy/30" />}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Floating journey cards with enhanced styling */}
          {journeyCards.map((card, i) => {
            const positions = [
              'top-6 left-4 sm:left-8',
              'top-24 right-2 sm:right-6',
              'top-[45%] left-0 sm:left-2',
              'bottom-24 right-4 sm:right-10',
              'bottom-6 left-8 sm:left-14',
            ]
            return (
              <motion.div
                key={card.label}
                className={`absolute ${positions[i]} animate-floatY`}
                style={{ animationDelay: `${card.delay}s` }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.12 }}
              >
                <div className={`flex items-center gap-3 rounded-2xl border border-line/80 bg-white/95 backdrop-blur-sm px-4 py-3 shadow-cardHover bg-gradient-to-r ${card.color}`}>
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <card.icon size={18} strokeWidth={2} />
                  </span>
                  <span className="text-sm font-semibold text-ink-primary whitespace-nowrap">{card.label}</span>
                </div>
              </motion.div>
            )
          })}

          {/* Decorative sparkle */}
          <motion.div
            className="absolute top-12 right-14"
            animate={{ rotate: 360, scale: [1, 1.2, 1] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
          >
            <Sparkles size={20} className="text-accent/20" />
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}
