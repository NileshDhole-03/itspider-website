import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Clock, Laptop2, Signal } from 'lucide-react'

const categoryColors = {
  Development: { bg: 'bg-blue-500', stripe: 'from-blue-500 to-blue-600', badge: 'bg-blue-50 text-blue-700 border-blue-200' },
  Programming: { bg: 'bg-emerald-500', stripe: 'from-emerald-500 to-emerald-600', badge: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
  Testing: { bg: 'bg-amber-500', stripe: 'from-amber-500 to-amber-600', badge: 'bg-amber-50 text-amber-700 border-amber-200' },
  Placement: { bg: 'bg-violet-500', stripe: 'from-violet-500 to-violet-600', badge: 'bg-violet-50 text-violet-700 border-violet-200' },
}

export default function CourseCard({ course, index = 0 }) {
  const colors = categoryColors[course.category] || categoryColors.Development

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.45, delay: (index % 4) * 0.08 }}
      className="card-surface p-0 flex flex-col overflow-hidden group"
    >
      {/* Category color stripe */}
      <div className={`h-1.5 w-full bg-gradient-to-r ${colors.stripe}`} />

      <div className="p-6 flex flex-col gap-4 flex-1">
        <div className="flex items-center gap-2">
          <span className={`text-[11px] font-semibold rounded-full border px-2.5 py-1 uppercase tracking-wide ${colors.badge}`}>
            {course.category}
          </span>
          {course.featured && (
            <span className="text-[11px] font-semibold rounded-full bg-accent/10 text-accent border border-accent/20 px-2.5 py-1 uppercase tracking-wide">
              Featured
            </span>
          )}
        </div>

        <h3 className="text-xl font-bold text-ink-primary leading-snug">{course.title}</h3>
        <p className="text-sm text-ink-secondary leading-relaxed">{course.shortDescription}</p>

        <div className="flex flex-wrap gap-1.5">
          {course.technologies.slice(0, 4).map((tech) => (
            <span key={tech} className="text-xs font-medium rounded-full bg-navy-50 border border-line px-2.5 py-1 text-ink-secondary">
              {tech}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-ink-muted pt-1 mt-auto">
          <span className="flex items-center gap-1"><Laptop2 size={13} /> {course.mode}</span>
          <span className="flex items-center gap-1"><Clock size={13} /> {course.duration}</span>
          <span className="flex items-center gap-1"><Signal size={13} /> {course.level}</span>
        </div>

        <Link
          to={`/courses/${course.slug}`}
          className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-accent group/link w-fit"
        >
          View Course
          <ArrowRight size={15} className="transition-transform duration-200 group-hover/link:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  )
}
