import { useState, useMemo } from 'react'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import SEO from '../components/ui/SEO'
import Container from '../components/ui/Container'
import Breadcrumb from '../components/ui/Breadcrumb'
import { resources } from '../data/resources'

const categories = ['All', ...new Set(resources.map((r) => r.category))]

export default function Resources() {
  const [active, setActive] = useState('All')
  const filtered = useMemo(
    () => (active === 'All' ? resources : resources.filter((r) => r.category === active)),
    [active]
  )

  return (
    <>
      <SEO
        title="Resources | ITSpider"
        description="Career guides, interview preparation, programming and placement preparation resources from ITSpider."
      />
      <section className="section-y pb-10 bg-navy-50/40 border-b border-line">
        <Container className="flex flex-col gap-6">
          <Breadcrumb items={[{ label: 'Home', to: '/' }, { label: 'Resources' }]} />
          <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-ink-primary max-w-2xl">
            Learn. Practice. Grow.
          </h1>
          <p className="text-ink-secondary max-w-xl leading-relaxed">
            Career guides, interview preparation, programming resources and placement preparation content.
          </p>
          <div className="flex flex-wrap gap-2 pt-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`rounded-full px-4 py-2 text-sm font-semibold border transition-colors ${
                  active === c ? 'bg-navy text-white border-navy' : 'bg-white text-ink-secondary border-line hover:border-navy/30'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-y">
        <Container className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((r, i) => (
            <motion.div
              key={r.slug}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: (i % 6) * 0.05 }}
              className="card-surface p-6 flex flex-col gap-3"
            >
              <span className="eyebrow-badge w-fit !text-[11px]">{r.category}</span>
              <h3 className="font-bold text-ink-primary leading-snug">{r.title}</h3>
              <p className="text-sm text-ink-secondary leading-relaxed">{r.description}</p>
              <Link to={`/resources/${r.slug}`} className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-accent group w-fit">
                Read More <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          ))}
        </Container>
      </section>
    </>
  )
}
