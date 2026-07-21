import LegalPage from './LegalPage'

export default function PrivacyPolicy() {
  return (
    <LegalPage title="Privacy Policy">
      <section>
        <h2 className="text-xl font-bold text-ink-primary mb-2">Information We Collect</h2>
        <p>[Add details on what personal information is collected through enquiry forms, course applications and website usage.]</p>
      </section>
      <section>
        <h2 className="text-xl font-bold text-ink-primary mb-2">How We Use Information</h2>
        <p>[Add details on how submitted information is used, e.g. to respond to enquiries, provide course information, or contact applicants.]</p>
      </section>
      <section>
        <h2 className="text-xl font-bold text-ink-primary mb-2">Data Sharing</h2>
        <p>[Add details on whether information is shared with any third parties, and under what circumstances.]</p>
      </section>
      <section>
        <h2 className="text-xl font-bold text-ink-primary mb-2">Cookies</h2>
        <p>[Add details on cookie usage on the website, if applicable.]</p>
      </section>
      <section>
        <h2 className="text-xl font-bold text-ink-primary mb-2">Your Rights</h2>
        <p>[Add details on how users can request access, correction or deletion of their personal data.]</p>
      </section>
      <section>
        <h2 className="text-xl font-bold text-ink-primary mb-2">Contact Us</h2>
        <p>For questions about this Privacy Policy, contact us at [Add email address].</p>
      </section>
    </LegalPage>
  )
}
