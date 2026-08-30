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
    title: 'Multiple-PDFs Reader ',
    desc: 'AI-powered MultiPDF chatbot that uses RAG, embeddings, and semantic search to answer user queries from multiple uploaded PDF documents.Enables users to efficiently retrieve relevant information and generate context-aware answers from multiple documents.',
    stack: ["Python", "Streamlit", "LangChain", "RAG", "Google Gemini API", "FAISS", "PyPDF2"],
    github: 'https://github.com/ishan-sharma23/multiple-pdfs-reader',
  },
  {
    num: '03',
    title: 'Lavender Crop Field Mapping Using Fuzzy Machine Learning ',
    desc: 'Developed a fuzzy machine learning-based approach for mapping Lavender crop fields using temporal satellite imagery, comparing PCM and Noise Clustering classifiers with different training sample selection techniques to improve classification accuracy and handle crop-field heterogeneity.',
    stack: ['PlanetScope Satellite Imagery', 'CBSI-MSAVI2', 'MSAVI2', 'PCM', 'NC', 'Fuzzy Machine Learning', 'MMD'],
    
  },
  {
    num: '04',
    title: 'Air Quality Monitoring and Prediction System ',
    desc: 'Developed a satellite-based machine learning model to estimate PM₂.₅ and PM₁₀ using Sentinel-5P, meteorological, and land surface data. The system generates spatial PM predictions and AQI mapping for regions with limited ground monitoring.',
    stack: ['Google Earth Engine', 'Python', 'Random Forest', 'Linear Regression', 'Sentinel-5P', 'Sentinel-2', 'ERA5'],
    
  },
  {
  num: '05',
  title: 'Bank Transactions Report & Fraud Detection Dashboard',
  desc: 'Interactive 3-page Power BI dashboard analyzing bank transactions with fraud detection, geospatial mapping, and drillthrough insights using DAX measures and conditional formatting.',
  stack: ['Power BI', 'DAX', 'Power Query', 'Bing Maps', 'PowerPoint'],
  github: 'https://github.com/ishan-sharma23/bank-transactions-powerbi',
 },
 {
  num: '06',
  title: 'Car Sales Analytics Dashboard',
  desc: 'Interactive Tableau dashboard analyzing car sales data (2020–2021) with YTD KPIs, weekly sales trends, body style & colour distribution, dealer region breakdown, and company-wise sales grid using calculated fields and filters.',
  stack: ['Tableau', 'Data Visualization', 'Calculated Fields', 'Filters & Parameters'],
  github: 'https://github.com/ishan-sharma23/Car-Sales-Tableau-Dashboard',
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

function ProjectCard({ num, title, desc, stack, github, website, demo }: {
  num: string; title: string; desc: string;
  stack: string[]; github?: string; website?: string; demo?: string
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
        {github && <a href={github} target="_blank" rel="noopener noreferrer">GitHub →</a>}
        {website && <a href={website} target="_blank" rel="noopener noreferrer">WEBSITE →</a>}
        {demo && <a href={demo} target="_blank" rel="noopener noreferrer">Live Demo →</a>}
      </div>
    </div>
  )
}

