import Container from '../ui/Container'
import SectionHeader from '../ui/SectionHeader'
import Button from '../ui/Button'
import CollegeServiceCard from '../colleges/CollegeServiceCard'
import { collegeServices } from '../../data/collegeServices'

export default function CollegeSolutions() {
  return (
    <section className="section-y bg-navy-50/40 border-y border-line">
      <Container className="flex flex-col gap-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <SectionHeader
            eyebrow="For Colleges & Institutions"
            heading="Prepare Your Students for the Industry."
            description="Partner with ITSpider to deliver structured technical training, assessments and placement preparation programs designed around student employability."
          />
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Button to="/for-colleges" variant="primary">Partner With ITSpider</Button>
            <Button to="/contact" variant="secondary" icon={false}>Request College Demo</Button>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {collegeServices.map((service, i) => (
            <CollegeServiceCard service={service} index={i} key={service.title} />
          ))}
        </div>
      </Container>
    </section>
  )
}
