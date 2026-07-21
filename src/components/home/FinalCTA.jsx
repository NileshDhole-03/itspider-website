import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import Container from '../ui/Container'
import Button from '../ui/Button'

export default function FinalCTA() {
  return (
    <section className="section-y bg-navy text-white relative overflow-hidden">
      <div className="pointer-events-none absolute -bottom-32 left-1/2 -translate-x-1/2 h-[420px] w-[720px] rounded-full bg-accent/10 blur-3xl" />
      <Container className="flex flex-col items-center text-center gap-6 relative">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl lg:text-[44px] font-bold max-w-2xl leading-tight"
        >
          Your Career Journey Can Start Today.
        </motion.h2>
        <p className="text-white/70 max-w-xl">
          Build practical skills, prepare for placements and take the next step toward your technology career with
          ITSpider.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <Button to="/courses" variant="primary">Explore Courses</Button>
          <Button to="/contact" variant="darkOutline">Talk to Our Team</Button>
        </div>
        <div className="pt-4 flex items-center gap-2 text-sm text-white/60">
          <span>Representing a College?</span>
          <Link to="/for-colleges" className="inline-flex items-center gap-1 font-semibold text-white hover:underline">
            Explore Institutional Solutions <ArrowRight size={14} />
          </Link>
        </div>
      </Container>
    </section>
  )
}
