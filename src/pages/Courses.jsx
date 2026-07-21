import { useMemo, useState } from 'react'
import { Search } from 'lucide-react'
import SEO from '../components/ui/SEO'
import Container from '../components/ui/Container'
import Breadcrumb from '../components/ui/Breadcrumb'
import CourseCard from '../components/courses/CourseCard'
import { courses, categories } from '../data/courses'

const modes = ['All Modes', 'Online', 'Classroom']

export default function Courses() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('All')
  const [mode, setMode] = useState('All Modes')

  const filtered = useMemo(() => {
    return courses.filter((c) => {
      const matchesQuery =
        query.trim() === '' ||
        c.title.toLowerCase().includes(query.toLowerCase()) ||
        c.technologies.some((t) => t.toLowerCase().includes(query.toLowerCase()))
      const matchesCategory = category === 'All' || c.category === category
      const matchesMode = mode === 'All Modes' || c.mode.toLowerCase().includes(mode.toLowerCase())
      return matchesQuery && matchesCategory && matchesMode
    })
  }, [query, category, mode])

  return (
    <>
      <SEO
        title="Courses | ITSpider Technology Training"
        description="Explore ITSpider's technology training programs — Java, Python, full stack development, software testing, coding preparation and placement-focused courses."
      />
      <section className="section-y pb-10 bg-navy-50/40 border-b border-line">
        <Container className="flex flex-col gap-6">
          <Breadcrumb items={[{ label: 'Home', to: '/' }, { label: 'Courses' }]} />
          <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-ink-primary max-w-2xl">
            Find the Right Program for Your Career
          </h1>
          <p className="text-ink-secondary max-w-xl">
            Search and filter across our technology training, programming and placement-focused programs.
          </p>

          <div className="flex flex-col lg:flex-row gap-3 pt-2">
            <div className="relative flex-1">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-ink-muted" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search courses or technologies..."
                className="w-full rounded-btn border border-line bg-white pl-11 pr-4 py-3 text-[15px] focus:border-accent focus:ring-2 focus:ring-accent/15 focus:outline-none"
              />
            </div>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="rounded-btn border border-line bg-white px-4 py-3 text-[15px] focus:border-accent focus:ring-2 focus:ring-accent/15 focus:outline-none"
            >
              {categories.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
            <select
              value={mode}
              onChange={(e) => setMode(e.target.value)}
              className="rounded-btn border border-line bg-white px-4 py-3 text-[15px] focus:border-accent focus:ring-2 focus:ring-accent/15 focus:outline-none"
            >
              {modes.map((m) => (
                <option key={m} value={m}>{m}</option>
              ))}
            </select>
          </div>
        </Container>
      </section>

      <section className="section-y">
        <Container>
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-ink-secondary">No courses match your search. Try adjusting your filters.</p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((course, i) => (
                <CourseCard course={course} index={i} key={course.id} />
              ))}
            </div>
          )}
        </Container>
      </section>
    </>
  )
}
