import SEO from '../components/ui/SEO'
import Container from '../components/ui/Container'
import Button from '../components/ui/Button'

export default function NotFound() {
  return (
    <>
      <SEO title="Page Not Found | ITSpider" description="The page you are looking for could not be found." />
      <section className="section-y">
        <Container className="flex flex-col items-center text-center gap-5 py-16">
          <span className="text-6xl font-bold text-accent/30">404</span>
          <h1 className="text-2xl sm:text-3xl font-bold text-ink-primary">Page Not Found</h1>
          <p className="text-ink-secondary max-w-md">
            The page you're looking for doesn't exist or may have been moved. Let's get you back on track.
          </p>
          <Button to="/" variant="primary">Back to Home</Button>
        </Container>
      </section>
    </>
  )
}
