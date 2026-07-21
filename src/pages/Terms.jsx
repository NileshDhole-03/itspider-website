import LegalPage from './LegalPage'

export default function Terms() {
  return (
    <LegalPage title="Terms & Conditions">
      <section>
        <h2 className="text-xl font-bold text-ink-primary mb-2">Acceptance of Terms</h2>
        <p>By accessing or using the ITSpider website, you agree to these Terms & Conditions. [Add further governing details.]</p>
      </section>
      <section>
        <h2 className="text-xl font-bold text-ink-primary mb-2">Course Enrollment</h2>
        <p>[Add details on enrollment process, payment terms, and course access policies.]</p>
      </section>
      <section>
        <h2 className="text-xl font-bold text-ink-primary mb-2">Placement Assistance Disclaimer</h2>
        <p>
          ITSpider provides placement assistance, including preparation support and guidance, and does not guarantee
          job placement or employment outcomes. Final hiring decisions are made solely by employers.
        </p>
      </section>
      <section>
        <h2 className="text-xl font-bold text-ink-primary mb-2">Intellectual Property</h2>
        <p>[Add details on ownership of course content, materials and website content.]</p>
      </section>
      <section>
        <h2 className="text-xl font-bold text-ink-primary mb-2">Limitation of Liability</h2>
        <p>[Add applicable limitation of liability details.]</p>
      </section>
      <section>
        <h2 className="text-xl font-bold text-ink-primary mb-2">Governing Law</h2>
        <p>[Add applicable jurisdiction and governing law.]</p>
      </section>
    </LegalPage>
  )
}
