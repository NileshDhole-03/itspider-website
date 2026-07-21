import { useState } from 'react'
import Container from '../ui/Container'
import SectionHeader from '../ui/SectionHeader'
import Button from '../ui/Button'
import CourseCard from '../courses/CourseCard'
import { courses, categories } from '../../data/courses'

export default function CoursesSection() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? courses.filter((c) => c.featured) : courses.filter((c) => c.category === active)

  return (
    <section className="section-y bg-navy-50/40">
      <Container className="flex flex-col gap-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <SectionHeader
            eyebrow="Courses"
            heading="Courses Built for Your Career"
            description="Choose practical, industry-focused programs designed to build technical confidence and job-ready skills."
          />
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`rounded-full px-4 py-2 text-sm font-semibold border transition-colors duration-150 ${
                  active === cat
                    ? 'bg-navy text-white border-navy'
                    : 'bg-white text-ink-secondary border-line hover:border-navy/30'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.slice(0, 4).map((course, i) => (
            <CourseCard course={course} index={i} key={course.id} />
          ))}
        </div>

        <div className="flex justify-center pt-2">
          <Button to="/courses" variant="secondary">View All Courses</Button>
        </div>
      </Container>
    </section>
  )
}
