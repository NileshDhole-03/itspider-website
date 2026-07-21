import SEO from '../components/ui/SEO'
import HeroSection from '../components/home/HeroSection'
import TrustSection from '../components/home/TrustSection'
import ServicesSection from '../components/home/ServicesSection'
import CoursesSection from '../components/home/CoursesSection'
import LearningJourney from '../components/home/LearningJourney'
import PlacementSection from '../components/home/PlacementSection'
import StatsSection from '../components/home/StatsSection'
import CollegeSolutions from '../components/home/CollegeSolutions'
import TestimonialsSection from '../components/home/TestimonialsSection'
import WhoCanJoin from '../components/home/WhoCanJoin'
import ResourcesPreview from '../components/home/ResourcesPreview'
import FinalCTA from '../components/home/FinalCTA'

export default function Home() {
  return (
    <>
      <SEO
        title="ITSpider | IT Training, Courses & Placement Assistance"
        description="Build industry-ready technology skills with ITSpider. Explore software training, online courses, placement preparation and college training solutions."
      />
      <HeroSection />
      <TrustSection />
      <ServicesSection />
      <CoursesSection />
      <LearningJourney />
      <PlacementSection />
      <StatsSection />
      <CollegeSolutions />
      <TestimonialsSection />
      <WhoCanJoin />
      <ResourcesPreview />
      <FinalCTA />
    </>
  )
}
