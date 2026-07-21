import SEO from '../components/ui/SEO'
import Container from '../components/ui/Container'
import Breadcrumb from '../components/ui/Breadcrumb'

export default function LegalPage({ title, lastUpdated = '[Add last updated date]', children }) {
  return (
    <>
      <SEO title={`${title} | ITSpider`} description={`${title} for ITSpider's website and services.`} />
      <section className="section-y">
        <Container className="max-w-3xl mx-auto flex flex-col gap-6">
          <Breadcrumb items={[{ label: 'Home', to: '/' }, { label: title }]} />
          <h1 className="text-3xl sm:text-4xl font-bold text-ink-primary">{title}</h1>
          <p className="text-sm text-ink-muted">Last updated: {lastUpdated}</p>
          <div className="flex flex-col gap-6 text-ink-secondary leading-relaxed pt-2">{children}</div>
        </Container>
      </section>
    </>
  )
}
