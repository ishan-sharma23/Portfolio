import { useFadeIn } from '../hooks'

// TODO: Replace with your real projects
const PROJECTS = [
  {
    num: '01',
    title: 'Fake News Detection System using Machine Learning ',
    desc: '2–3 sentences: what does it do, what problem does it solve, and what result did it achieve? (e.g. "Achieved 94% accuracy on test set")',
    stack: ['Python', 'Scikit-learn', 'Pandas'],
    github: '#',
    demo: '#',
  },
  {
    num: '02',
    title: 'Air Quality Monitoring and Prediction System ',
    desc: '2–3 sentences describing the project, problem solved, and key result or impact.',
    stack: ['React', 'Node.js', 'MongoDB', 'Express.js'],
    github: '#',
    demo: '#',
  },
  {
    num: '03',
    title: 'Personal Blog Page ',
    desc: '2–3 sentences describing the project, problem solved, and key result or impact.',
    stack: ['Python', 'MySQL', 'Docker'],
    github: '#',
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
