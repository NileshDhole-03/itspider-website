import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, GraduationCap, Building2, MessageCircle } from 'lucide-react'
import SEO from '../components/ui/SEO'
import Container from '../components/ui/Container'
import Breadcrumb from '../components/ui/Breadcrumb'
import ContactForm from '../components/contact/ContactForm'
import CollegeLeadForm from '../components/colleges/CollegeLeadForm'

export default function Contact() {
  const [tab, setTab] = useState('student')

  return (
    <>
      <SEO
        title="Contact Us | ITSpider"
        description="Get in touch with ITSpider for course enquiries, placement preparation guidance or institutional training partnerships."
      />
      <section className="section-y pb-10 bg-navy-50/40 border-b border-line">
        <Container className="flex flex-col gap-6">
          <Breadcrumb items={[{ label: 'Home', to: '/' }, { label: 'Contact' }]} />
          <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-ink-primary max-w-2xl">
            Let's Talk About Your Career.
          </h1>
          <p className="text-ink-secondary max-w-xl leading-relaxed">
            Whether you're a student exploring courses or a college exploring training partnerships, our team is
            happy to help.
          </p>
        </Container>
      </section>

      <section className="section-y">
        <Container className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1 flex flex-col gap-6">
            <div className="flex gap-2 rounded-full bg-navy-50 border border-line p-1.5 w-fit">
              <button
                onClick={() => setTab('student')}
                className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                  tab === 'student' ? 'bg-navy text-white' : 'text-ink-secondary'
                }`}
              >
                <GraduationCap size={15} /> Student Enquiry
              </button>
              <button
                onClick={() => setTab('college')}
                className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                  tab === 'college' ? 'bg-navy text-white' : 'text-ink-secondary'
                }`}
              >
                <Building2 size={15} /> College / Institution
              </button>
            </div>

            <ul className="flex flex-col gap-4 text-sm text-ink-secondary pt-2">
              <li className="flex items-start gap-3">
                <Phone size={17} className="text-accent mt-0.5 shrink-0" />
                <a href="tel:+919552239552" className="hover:text-accent transition-colors">+919552239552</a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={17} className="text-accent mt-0.5 shrink-0" />
                <a href="mailto:itspiderspune@gmail.com" className="hover:text-accent transition-colors">itspiderspune@gmail.com</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={17} className="text-accent mt-0.5 shrink-0" />
                <span>Remote</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={17} className="text-accent mt-0.5 shrink-0" />
                <span>Mon–Sat, 9 AM – 6 PM</span>
              </li>
            </ul>

            <a
              href="https://wa.me/919206060304"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-btn bg-green-600 text-white px-5 py-3 text-sm font-semibold hover:bg-green-700 transition-colors w-fit mt-2"
            >
              <MessageCircle size={17} /> Chat on WhatsApp
            </a>
          </div>

          <div className="lg:col-span-2">
            {tab === 'student' ? <ContactForm /> : <CollegeLeadForm />}
          </div>
        </Container>
      </section>
    </>
  )
}
