import { useParams, Navigate } from 'react-router-dom'
import SEO from '../components/ui/SEO'
import Container from '../components/ui/Container'
import Breadcrumb from '../components/ui/Breadcrumb'
import { getResourceBySlug } from '../data/resources'

export default function ResourceDetail() {
  const { slug } = useParams()
  const resource = getResourceBySlug(slug)

  if (!resource) return <Navigate to="/resources" replace />

  return (
    <>
      <SEO title={`${resource.title} | ITSpider Resources`} description={resource.description} />
      <section className="section-y">
        <Container className="max-w-3xl mx-auto flex flex-col gap-6">
          <Breadcrumb
            items={[{ label: 'Home', to: '/' }, { label: 'Resources', to: '/resources' }, { label: resource.title }]}
          />
          <span className="eyebrow-badge w-fit">{resource.category}</span>
          <h1 className="text-3xl sm:text-4xl font-bold text-ink-primary leading-tight">{resource.title}</h1>
          <p className="text-lg text-ink-secondary leading-relaxed">{resource.description}</p>
          <div className="h-px bg-line my-2" />
          <p className="text-ink-secondary leading-relaxed">{resource.body}</p>
        </Container>
      </section>
    </>
  )
}
