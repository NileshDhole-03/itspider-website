export const resources = [
  {
    slug: 'cracking-technical-interviews',
    category: 'Interview Preparation',
    title: 'A Structured Approach to Cracking Technical Interviews',
    description: 'A practical framework for approaching technical interview rounds with confidence and clarity.',
    body: 'Full article content can be added here once ready. This structure is prepared for future blog/CMS integration.',
  },
  {
    slug: 'building-a-recruiter-friendly-resume',
    category: 'Career Guides',
    title: 'Building a Recruiter-Friendly Resume',
    description: 'Practical guidance on structuring your resume to clearly communicate your skills and projects.',
    body: 'Full article content can be added here once ready. This structure is prepared for future blog/CMS integration.',
  },
  {
    slug: 'getting-started-with-dsa',
    category: 'Programming Resources',
    title: 'Getting Started with Data Structures & Algorithms',
    description: 'A beginner-friendly roadmap for approaching DSA preparation systematically.',
    body: 'Full article content can be added here once ready. This structure is prepared for future blog/CMS integration.',
  },
  {
    slug: 'aptitude-preparation-roadmap',
    category: 'Placement Preparation',
    title: 'A Roadmap for Aptitude Preparation',
    description: 'How to structure your quantitative aptitude and logical reasoning practice ahead of placement drives.',
    body: 'Full article content can be added here once ready. This structure is prepared for future blog/CMS integration.',
  },
  {
    slug: 'technology-trends-students-should-know',
    category: 'Technology Articles',
    title: 'Technology Trends Students Should Be Aware Of',
    description: 'An overview of evolving technology areas relevant to students planning their career direction.',
    body: 'Full article content can be added here once ready. This structure is prepared for future blog/CMS integration.',
  },
  {
    slug: 'coding-practice-habits',
    category: 'Coding Resources',
    title: 'Building Consistent Coding Practice Habits',
    description: 'Simple habits that help students stay consistent with coding practice over time.',
    body: 'Full article content can be added here once ready. This structure is prepared for future blog/CMS integration.',
  },
]

export const getResourceBySlug = (slug) => resources.find((r) => r.slug === slug)
