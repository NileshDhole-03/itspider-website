import LegalPage from './LegalPage'

export default function RefundPolicy() {
  return (
    <LegalPage title="Refund Policy">
      <section>
        <h2 className="text-xl font-bold text-ink-primary mb-2">Refund Eligibility</h2>
        <p>[Add details on which fees or programs are eligible for a refund, and under what conditions.]</p>
      </section>
      <section>
        <h2 className="text-xl font-bold text-ink-primary mb-2">Refund Timeline</h2>
        <p>[Add details on the timeframe within which a refund request must be made, and how long processing takes.]</p>
      </section>
      <section>
        <h2 className="text-xl font-bold text-ink-primary mb-2">Non-Refundable Cases</h2>
        <p>[Add details on circumstances where fees are non-refundable, e.g. after a certain number of sessions attended.]</p>
      </section>
      <section>
        <h2 className="text-xl font-bold text-ink-primary mb-2">How to Request a Refund</h2>
        <p>To request a refund, please contact us at [Add email address] or [Add phone number] with your enrollment details.</p>
      </section>
    </LegalPage>
  )
}
