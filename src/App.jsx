import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import BackToTop from './components/ui/BackToTop'
import WhatsAppButton from './components/ui/WhatsAppButton'
import useScrollTop from './hooks/useScrollTop'

import Home from './pages/Home'
import Courses from './pages/Courses'
import CourseDetail from './pages/CourseDetail'
import OnlineCourses from './pages/OnlineCourses'
import PlacementAssistance from './pages/PlacementAssistance'
import ForColleges from './pages/ForColleges'
import About from './pages/About'
import Contact from './pages/Contact'
import Resources from './pages/Resources'
import ResourceDetail from './pages/ResourceDetail'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Terms from './pages/Terms'
import RefundPolicy from './pages/RefundPolicy'
import NotFound from './pages/NotFound'

const pageVariants = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
}

function AnimatedPage({ children }) {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}

export default function App() {
  useScrollTop()
  const location = useLocation()

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<AnimatedPage><Home /></AnimatedPage>} />
            <Route path="/courses" element={<AnimatedPage><Courses /></AnimatedPage>} />
            <Route path="/courses/:slug" element={<AnimatedPage><CourseDetail /></AnimatedPage>} />
            <Route path="/online-courses" element={<AnimatedPage><OnlineCourses /></AnimatedPage>} />
            <Route path="/placement-assistance" element={<AnimatedPage><PlacementAssistance /></AnimatedPage>} />
            <Route path="/for-colleges" element={<AnimatedPage><ForColleges /></AnimatedPage>} />
            <Route path="/about" element={<AnimatedPage><About /></AnimatedPage>} />
            <Route path="/contact" element={<AnimatedPage><Contact /></AnimatedPage>} />
            <Route path="/resources" element={<AnimatedPage><Resources /></AnimatedPage>} />
            <Route path="/resources/:slug" element={<AnimatedPage><ResourceDetail /></AnimatedPage>} />
            <Route path="/privacy-policy" element={<AnimatedPage><PrivacyPolicy /></AnimatedPage>} />
            <Route path="/terms" element={<AnimatedPage><Terms /></AnimatedPage>} />
            <Route path="/refund-policy" element={<AnimatedPage><RefundPolicy /></AnimatedPage>} />
            <Route path="*" element={<AnimatedPage><NotFound /></AnimatedPage>} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
      <BackToTop />
      <WhatsAppButton />
    </div>
  )
}
