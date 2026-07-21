import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Menu, X } from 'lucide-react'
import { courses } from '../../data/courses'
import { collegeServices } from '../../data/collegeServices'
import Button from '../ui/Button'

const primaryNav = [
  { label: 'Home', to: '/' },
  { label: 'Courses', to: '/courses', dropdown: 'courses' },
  { label: 'Placement Assistance', to: '/placement-assistance' },
  { label: 'For Colleges', to: '/for-colleges', dropdown: 'colleges' },
  { label: 'About Us', to: '/about' },
  { label: 'Resources', to: '/resources' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  const courseLinks = courses.slice(0, 6)

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? 'bg-white/85 backdrop-blur-md border-b border-line shadow-sm' : 'bg-white border-b border-transparent'
      }`}
    >
      <div className="container-max section-px flex items-center justify-between h-[76px]">
        <Link to="/" className="flex items-center gap-2.5 shrink-0">
          <img src="/itspider.png" alt="ITSpider" className="h-10 w-10 object-contain" />
          <span className="font-display font-bold text-xl tracking-tight text-navy">ITSpider</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {primaryNav.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => item.dropdown && setOpenDropdown(item.dropdown)}
              onMouseLeave={() => item.dropdown && setOpenDropdown(null)}
            >
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `relative flex items-center gap-1 px-4 py-2 text-[15px] font-medium rounded-lg transition-colors duration-150 ${
                    isActive ? 'text-accent' : 'text-ink-secondary hover:text-navy'
                  }`
                }
              >
                {item.label}
                {item.dropdown && <ChevronDown size={15} />}
              </NavLink>

              <AnimatePresence>
                {item.dropdown === 'courses' && openDropdown === 'courses' && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.18 }}
                    className="absolute left-0 top-full pt-3 w-72"
                  >
                    <div className="rounded-card border border-line bg-white shadow-cardHover p-2">
                      {courseLinks.map((c) => (
                        <Link
                          key={c.slug}
                          to={`/courses/${c.slug}`}
                          className="block rounded-lg px-4 py-2.5 text-[14px] text-ink-secondary hover:bg-navy-50 hover:text-navy transition-colors"
                        >
                          {c.title}
                        </Link>
                      ))}
                      <Link
                        to="/courses"
                        className="block rounded-lg px-4 py-2.5 text-[14px] font-semibold text-accent hover:bg-navy-50 transition-colors"
                      >
                        View All Courses
                      </Link>
                    </div>
                  </motion.div>
                )}

                {item.dropdown === 'colleges' && openDropdown === 'colleges' && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.18 }}
                    className="absolute left-0 top-full pt-3 w-72"
                  >
                    <div className="rounded-card border border-line bg-white shadow-cardHover p-2">
                      {collegeServices.slice(0, 6).map((s) => (
                        <Link
                          key={s.title}
                          to="/for-colleges"
                          className="block rounded-lg px-4 py-2.5 text-[14px] text-ink-secondary hover:bg-navy-50 hover:text-navy transition-colors"
                        >
                          {s.title}
                        </Link>
                      ))}
                      <Link
                        to="/for-colleges"
                        className="block rounded-lg px-4 py-2.5 text-[14px] font-semibold text-accent hover:bg-navy-50 transition-colors"
                      >
                        Institutional Partnership
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Button to="/contact" variant="secondary" icon={false} className="!min-h-[42px] !px-5">
            Contact Us
          </Button>
          <Button to="/courses" variant="primary" className="!min-h-[42px] !px-5">
            Explore Courses
          </Button>
        </div>

        <button
          className="lg:hidden flex items-center justify-center h-10 w-10 rounded-lg border border-line"
          aria-label="Toggle menu"
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden overflow-hidden border-t border-line bg-white"
          >
            <div className="section-px py-5 flex flex-col gap-1">
              {primaryNav.map((item) => (
                <Link
                  key={item.label}
                  to={item.to}
                  onClick={() => setMobileOpen(false)}
                  className="px-2 py-3 text-[15px] font-medium text-ink-secondary border-b border-line last:border-0"
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex flex-col gap-3 pt-4">
                <Button to="/contact" variant="secondary" icon={false} onClick={() => setMobileOpen(false)}>
                  Contact Us
                </Button>
                <Button to="/courses" variant="primary" onClick={() => setMobileOpen(false)}>
                  Explore Courses
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
