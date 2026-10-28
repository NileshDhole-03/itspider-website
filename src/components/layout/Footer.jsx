import { Link } from 'react-router-dom'
import { Linkedin, Instagram, Facebook, Youtube, Phone, Mail, MapPin, Clock } from 'lucide-react'

const courseLinks = [
  { label: 'Java Full Stack', to: '/courses/java-full-stack-development' },
  { label: 'Python Full Stack', to: '/courses/python-full-stack-development' },
  { label: 'MERN Stack', to: '/courses/mern-stack-development' },
  { label: 'Web Development', to: '/courses/web-development' },
  { label: 'Software Testing', to: '/courses/software-testing-qa' },
  { label: 'Placement Preparation', to: '/courses/placement-preparation' },
]

const quickLinks = [
  { label: 'About Us', to: '/about' },
  { label: 'Placement Assistance', to: '/placement-assistance' },
  { label: 'Online Courses', to: '/online-courses' },
  { label: 'For Colleges', to: '/for-colleges' },
  { label: 'Resources', to: '/resources' },
  { label: 'Contact', to: '/contact' },
]

const collegeLinks = [
  { label: 'Technical Training', to: '/for-colleges' },
  { label: 'Assessments', to: '/for-colleges' },
  { label: 'Placement Preparation', to: '/for-colleges' },
  { label: 'Workshops', to: '/for-colleges' },
  { label: 'Institutional Partnership', to: '/for-colleges' },
]

const socialLinks = [
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Youtube, href: '#', label: 'YouTube' },
]

export default function Footer() {
  return (
    <footer className="bg-navy text-white/80">
      <div className="container-max section-px py-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
        <div className="col-span-2 md:col-span-3 lg:col-span-1 flex flex-col gap-4">
          <Link to="/" className="flex items-center gap-2.5">
            <img src="/itspider.png" alt="ITSpider" className="h-9 w-9 object-contain rounded-lg" />
            <span className="font-display font-bold text-xl text-white">ITSpider</span>
          </Link>
          <p className="text-sm leading-relaxed text-white/60 max-w-xs">
            Technology training, placement preparation and career development for students, professionals and institutions.
          </p>
          <div className="flex items-center gap-3 pt-1">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 hover:border-accent hover:text-accent transition-colors"
              >
                <s.icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <FooterCol title="Courses" links={courseLinks} />
        <FooterCol title="Quick Links" links={quickLinks} />
        <FooterCol title="For Colleges" links={collegeLinks} />

        <div className="flex flex-col gap-4">
          <h4 className="text-sm font-semibold tracking-wide uppercase text-white/50">Contact</h4>
          <ul className="flex flex-col gap-3 text-sm text-white/70">
            <li className="flex items-start gap-2">
              <Phone size={16} className="mt-0.5 shrink-0 text-accent-light" />
              <a href="tel:+919552239552" className="hover:text-white transition-colors">9552239552</a>
            </li>
            <li className="flex items-start gap-2">
              <Mail size={16} className="mt-0.5 shrink-0 text-accent-light" />
              <a href="mailto:itspiderspune@gmail.com" className="hover:text-white transition-colors">itspiderspune@gmail.com</a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin size={16} className="mt-0.5 shrink-0 text-accent-light" />
              <span>Remote</span>
            </li>
            <li className="flex items-start gap-2">
              <Clock size={16} className="mt-0.5 shrink-0 text-accent-light" />
              <span>Mon–Sat, 9 AM – 6 PM</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-max section-px py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/50">
          <p>© 2018–2026 ITSpider. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <Link to="/privacy-policy" className="hover:text-white/80 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white/80 transition-colors">Terms & Conditions</Link>
            <Link to="/refund-policy" className="hover:text-white/80 transition-colors">Refund Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

function FooterCol({ title, links }) {
  return (
    <div className="flex flex-col gap-4">
      <h4 className="text-sm font-semibold tracking-wide uppercase text-white/50">{title}</h4>
      <ul className="flex flex-col gap-3 text-sm">
        {links.map((l) => (
          <li key={l.label}>
            <Link to={l.to} className="text-white/70 hover:text-white transition-colors">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
