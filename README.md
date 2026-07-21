# ITSpider — Training, Skills & Placement Assistance Website

A premium, modern React website for ITSpider — a technology training, placement preparation and career development
company serving students, fresh graduates, working professionals and colleges.

## Tech Stack

- React 18 + Vite
- Tailwind CSS
- Framer Motion (animations)
- React Router (routing)
- Lucide React (icons)

## Getting Started

```bash
npm install
npm run dev
```

Then open the printed local URL (typically `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
  components/
    ui/          — Button, Badge, Container, SectionHeader, FAQ, FormFields, Breadcrumb, SEO
    layout/      — Navbar, Footer
    home/        — All homepage section components
    courses/     — CourseCard
    colleges/    — CollegeServiceCard, PartnershipTimeline, CollegeLeadForm
    contact/     — ContactForm
  pages/         — One component per route
  data/          — courses.js, collegeServices.js, testimonials.js, faqs.js, resources.js
  hooks/         — useScrollTop
  App.jsx        — Route definitions
  main.jsx       — App entry point
```

## Editing Content

**Courses** — edit `src/data/courses.js`. Each course object automatically powers the course card, filters,
and its own detail page at `/courses/:slug`. Add a new object to add a new course; no other files need to change.

**College services / partnership process** — edit `src/data/collegeServices.js`.

**Resources / articles** — edit `src/data/resources.js`.

**FAQs** — edit `src/data/faqs.js`.

## ⚠️ Placeholders that must be replaced before launch

The following are intentionally left as editable placeholders and must be replaced with verified information before
the site goes live. Do not replace them with invented data.

- `src/data/testimonials.js` — `stats` array (student/program/assessment/college numbers) and `testimonials` array
  (student names, courses, outcomes, quotes) are placeholders. Replace only with verified figures and testimonials
  you have permission to publish.
- `src/data/testimonials.js` — `outcomeCompanies` currently lists only Capgemini, worded as a career outcome rather
  than an official hiring partnership. Add further companies only once verified.
- `src/components/layout/Footer.jsx` and `src/pages/Contact.jsx` — phone number, email, address and working hours
  are placeholders (`[Add phone number]`, etc.).
- Legal pages (`src/pages/PrivacyPolicy.jsx`, `Terms.jsx`, `RefundPolicy.jsx`) contain bracketed placeholder text
  that should be reviewed and completed, ideally with legal input.

## Forms

`ContactForm` and `CollegeLeadForm` include client-side validation and simulate submission (no backend is wired up).
To connect them to a real backend or email service, replace the `setTimeout` in each form's `handleSubmit` with an
actual API call.

## Notes on Claims

Per the original brief, this build avoids unverified claims such as placement guarantees, invented statistics, fake
testimonials, or implying an official hiring partnership with any company. Please keep this principle in mind when
filling in the placeholders above.
