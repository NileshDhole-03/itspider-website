import { useState } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { ChevronDown, CheckCircle2, Clock, Laptop2, Signal, Users } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import SEO from '../components/ui/SEO'
import Container from '../components/ui/Container'
import Breadcrumb from '../components/ui/Breadcrumb'
import Button from '../components/ui/Button'
import FAQ from '../components/ui/FAQ'
import { getCourseBySlug, courses } from '../data/courses'
import { courseFaqs } from '../data/faqs'

const categoryColors = {
  Development: 'from-blue-500 to-blue-600',
  Programming: 'from-emerald-500 to-emerald-600',
  Testing: 'from-amber-500 to-amber-600',
  Placement: 'from-violet-500 to-violet-600',
}

export default function CourseDetail() {
  const { slug } = useParams()
  const course = getCourseBySlug(slug)

  if (!course) return <Navigate to="/courses" replace />

  const related = courses.filter((c) => c.id !== course.id && c.category === course.category).slice(0, 3)
  const stripe = categoryColors[course.category] || categoryColors.Development

  return (
    <>
      <SEO
        title={`${course.title} | ITSpider Courses`}
        description={course.shortDescription}
      />

      <section className="bg-navy-50/40 border-b border-line section-y pb-10 relative overflow-hidden">
        <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${stripe}`} />
        <Container className="flex flex-col gap-6">
          <Breadcrumb items={[{ label: 'Home', to: '/' }, { label: 'Courses', to: '/courses' }, { label: course.title }]} />
          <span className="eyebrow-badge w-fit">{course.category}</span>
          <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-ink-primary max-w-2xl">{course.title}</h1>
          <p className="text-ink-secondary max-w-xl leading-relaxed">{course.description}</p>
          <div className="flex flex-wrap gap-2 pt-1">
            {course.technologies.map((t) => (
              <span key={t} className="text-sm font-medium rounded-full bg-white border border-line px-3 py-1.5 text-ink-secondary">
                {t}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-ink-secondary pt-1">
            <span className="flex items-center gap-1.5"><Laptop2 size={16} /> {course.mode}</span>
            <span className="flex items-center gap-1.5"><Clock size={16} /> {course.duration}</span>
            <span className="flex items-center gap-1.5"><Signal size={16} /> {course.level}</span>
          </div>
        </Container>
      </section>

      <section className="section-y">
        <Container className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 flex flex-col gap-14">
            <div>
              <h2 className="text-2xl font-bold text-ink-primary mb-5">Course Highlights</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {course.features.map((f) => (
                  <div key={f} className="flex items-center gap-2.5 text-sm text-ink-secondary">
                    <CheckCircle2 size={16} className="text-accent shrink-0" /> {f}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-ink-primary mb-5">Curriculum</h2>
              <CurriculumAccordion curriculum={course.curriculum} />
            </div>

            <div>
              <h2 className="text-2xl font-bold text-ink-primary mb-5">Who Should Join</h2>
              <ul className="flex flex-col gap-3">
                {course.whoShouldJoin.map((w) => (
                  <li key={w} className="flex items-center gap-2.5 text-ink-secondary">
                    <Users size={16} className="text-accent shrink-0" /> {w}
                  </li>
                ))}
              </ul>
            </div>

            {course.projects.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-ink-primary mb-5">Projects</h2>
                <ul className="flex flex-col gap-3">
                  {course.projects.map((p) => (
                    <li key={p} className="flex items-center gap-2.5 text-ink-secondary">
                      <CheckCircle2 size={16} className="text-accent shrink-0" /> {p}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div>
              <h2 className="text-2xl font-bold text-ink-primary mb-5">Career Opportunities</h2>
              <div className="flex flex-wrap gap-2">
                {course.careerOpportunities.map((c) => (
                  <span key={c} className="text-sm font-medium rounded-full bg-navy-50 border border-line px-3 py-1.5 text-ink-secondary">
                    {c}
                  </span>
                ))}
              </div>
              <p className="text-xs text-ink-muted mt-3">
                Placement preparation is included where applicable. ITSpider provides placement assistance and does not guarantee employment outcomes.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-ink-primary mb-5">Prerequisites</h2>
              <p className="text-ink-secondary">{course.prerequisites}</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-ink-primary mb-5">Frequently Asked Questions</h2>
              <FAQ items={courseFaqs} />
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24 card-surface p-7 flex flex-col gap-4">
              <h3 className="font-bold text-lg text-ink-primary">Ready to get started?</h3>
              <p className="text-sm text-ink-secondary">Enroll in {course.title} or talk to a counselor to plan your learning path.</p>
              <Button to="/contact" variant="primary">Enroll Now</Button>
              <Button to="/contact" variant="secondary" icon={false}>Talk to Counselor</Button>
              <a
                href="https://wa.me/919206060304"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-btn bg-[#25D366] text-white px-6 py-3 text-[15px] font-semibold hover:bg-[#1fb855] transition-colors"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </Container>
      </section>

      {related.length > 0 && (
        <section className="section-y bg-navy-50/40 border-t border-line">
          <Container className="flex flex-col gap-8">
            <h2 className="text-2xl font-bold text-ink-primary">Related Courses</h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {related.map((c) => (
                <Link key={c.id} to={`/courses/${c.slug}`} className="card-surface p-6 flex flex-col gap-2">
                  <span className="eyebrow-badge w-fit !text-[11px]">{c.category}</span>
                  <h3 className="font-bold text-ink-primary">{c.title}</h3>
                  <p className="text-sm text-ink-secondary leading-relaxed">{c.shortDescription}</p>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}
    </>
  )
}

function CurriculumAccordion({ curriculum }) {
  const [open, setOpen] = useState(0)
  return (
    <div className="flex flex-col gap-3">
      {curriculum.map((module, index) => {
        const isOpen = open === index
        return (
          <div key={module.title} className="rounded-card border border-line bg-white overflow-hidden">
            <button
              className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-navy-50/50 transition-colors"
              onClick={() => setOpen(isOpen ? -1 : index)}
              aria-expanded={isOpen}
            >
              <span className="font-semibold text-ink-primary flex items-center gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-accent/10 text-accent text-xs font-bold">
                  {String(index + 1).padStart(2, '0')}
                </span>
                {module.title}
              </span>
              <ChevronDown size={18} className={`text-ink-muted transition-transform duration-300 ${isOpen ? 'rotate-180 text-accent' : ''}`} />
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <ul className="px-6 pb-4 flex flex-col gap-2">
                    {module.items.map((item) => (
                      <li key={item} className="text-sm text-ink-secondary flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-accent shrink-0" /> {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}
