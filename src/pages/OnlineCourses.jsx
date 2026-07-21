import SEO from '../components/ui/SEO'
import Container from '../components/ui/Container'
import Breadcrumb from '../components/ui/Breadcrumb'
import Button from '../components/ui/Button'
import CourseCard from '../components/courses/CourseCard'
import { courses } from '../data/courses'
import { BookOpen, Video, Braces, TrendingUp, ClipboardCheck, Compass } from 'lucide-react'

const features = [
  { icon: BookOpen, label: 'Structured Courses' },
  { icon: Video, label: 'Recorded / Live Learning' },
  { icon: Braces, label: 'Practice Resources' },
  { icon: TrendingUp, label: 'Progress-Oriented Learning' },
  { icon: ClipboardCheck, label: 'Placement Preparation' },
  { icon: Compass, label: 'Career Support' },
]

export default function OnlineCourses() {
  const onlineCourses = courses.filter((c) => c.mode.toLowerCase().includes('online'))

  return (
    <>
      <SEO
        title="Online Courses | ITSpider"
        description="Learn technology skills online with ITSpider's structured, career-focused online training programs."
      />
      <section className="section-y pb-10 bg-navy-50/40 border-b border-line">
        <Container className="flex flex-col gap-6">
          <Breadcrumb items={[{ label: 'Home', to: '/' }, { label: 'Online Courses' }]} />
          <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-ink-primary max-w-2xl">
            Learn Beyond the Classroom.
          </h1>
          <p className="text-ink-secondary max-w-xl leading-relaxed">
            Access structured learning programs designed for students who want to develop technical skills and prepare
            for their careers from anywhere.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-2 max-w-2xl">
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
            <Button to="/contact" variant="primary">Talk to Our Team</Button>
          </div>
        </Container>
      </section>

      <section className="section-y">
        <Container className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {onlineCourses.map((course, i) => (
            <CourseCard course={course} index={i} key={course.id} />
          ))}
        </Container>
      </section>
    </>
  )
}
