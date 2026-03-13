import { useFadeIn } from '../hooks'

// TODO: Replace with your real projects
const PROJECTS = [
  {
    num: '01',
    title: 'Fake News Detection System using Machine Learning ',
    desc: 'An AI-powered web application that detects fake news in real-time using NLP and ensemble machine learning, providing instant verification with confidence scores. Built with MERN stack featuring responsive pages, user authentication, and ML model integration achieving high classification accuracy.',
    stack: ['Python', 'Scikit-learn', 'NLTK', 'TF-IDF', 'Random Forest', 'Voting Classifier', 'JWT', 'Tailwind CSS'],
    github: 'https://github.com/ishan-sharma23/fakenews-project',
  },
  {
    num: '02',
    title: 'Air Quality Monitoring and Prediction System ',
    desc: 'Developed a satellite-based machine learning model to estimate PM₂.₅ and PM₁₀ using Sentinel-5P, meteorological, and land surface data. The system generates spatial PM predictions and AQI mapping for regions with limited ground monitoring.',
    stack: ['Google Earth Engine', 'Python', 'Random Forest', 'Linear Regression', 'Sentinel-5P', 'Sentinel-2', 'ERA5'],
    github: 'https://github.com/ishan-sharma23/Air-quality-monitoring-system',
    
  },
  {
  num: '03',
  title: 'Bank Transactions Report & Fraud Detection Dashboard',
  desc: 'Interactive 3-page Power BI dashboard analyzing bank transactions with fraud detection, geospatial mapping, and drillthrough insights using DAX measures and conditional formatting.',
  stack: ['Power BI', 'DAX', 'Power Query', 'Bing Maps', 'PowerPoint'],
  github: 'https://github.com/ishan-sharma23/bank-transactions-powerbi',
 },
  {
    num: '04',
    title: 'Personal Blog Page ',
    desc: 'Developed a personal travel and adventure blog to share trekking experiences, travel guides, and information about spiritual destinations across India. The platform helps readers discover lesser-known places and plan trips through detailed blogs and insights. Built to strengthen content creation, digital presence, and community engagement.',
    stack: ['WordPress', 'SEO tools', 'Google Analytics', 'optimization plugins'],
    github: '#https://ishanhiking.com/',
  },
]

export default function Projects() {
  return (
    <section id="projects">
      <p className="section-label">// 03 — Projects</p>
      <h2 className="section-title">Things I've Built</h2>
      <div className="projects-grid">
        {PROJECTS.map(project => (
          <ProjectCard key={project.num} {...project} />
        ))}
      </div>
    </section>
  )
}

function ProjectCard({ num, title, desc, stack, github, demo }: {
  num: string; title: string; desc: string;
  stack: string[]; github: string; demo?: string
}) {
  const ref = useFadeIn()
  return (
    <div className="project-card fade-in" ref={ref}>
      <p className="project-num">{num}</p>
      <h3 className="project-title">{title}</h3>
      <p className="project-desc">{desc}</p>
      <div className="project-stack">
        {stack.map(t => <span className="tag" key={t}>{t}</span>)}
      </div>
      <div className="project-links">
        <a href={github} target="_blank" rel="noopener noreferrer">GitHub →</a>
        {demo && <a href={demo} target="_blank" rel="noopener noreferrer">Live Demo →</a>}
      </div>
    </div>
  )
}
