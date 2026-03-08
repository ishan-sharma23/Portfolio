import { useFadeIn } from '../hooks'

// TODO: Replace with your real experience/internship details
const EXPERIENCES = [
  {
    period: 'Jun 2025 — Aug 2025',
    role: 'YOUR ROLE / INTERNSHIP TITLE',
    company: 'COMPANY NAME',
    desc: 'Describe what you did, what tools you used, and what impact you had. Be specific with numbers if possible.',
    stack: ['Python', 'Pandas', 'Scikit-learn'],
  },
  {
    period: 'Jan 2025 — Mar 2025',
    role: 'YOUR ROLE / INTERNSHIP TITLE',
    company: 'COMPANY NAME',
    desc: 'Describe your responsibilities and achievements during this role.',
    stack: ['React', 'Node.js', 'MongoDB'],
  },
  {
    period: 'Jun 2024 — Aug 2024',
    role: 'YOUR ROLE / INTERNSHIP TITLE',
    company: 'COMPANY NAME',
    desc: 'Describe your work, contributions, and results.',
    stack: ['Python', 'SQL', 'Tableau'],
  },
]

export default function Experience() {
  return (
    <section id="experience">
      <p className="section-label">// 03 — Experience</p>
      <h2 className="section-title">Where I've Worked</h2>
      <div className="timeline">
        {EXPERIENCES.map((exp, i) => (
          <TimelineCard key={i} {...exp} index={i} />
        ))}
      </div>
    </section>
  )
}

function TimelineCard({
  period, role, company, desc, stack, index,
}: {
  period: string; role: string; company: string;
  desc: string; stack: string[]; index: number
}) {
  const ref = useFadeIn()
  return (
    <div
      className={`timeline-item fade-in ${index % 2 === 0 ? 'left' : 'right'}`}
      ref={ref}
    >
      <div className="timeline-dot" />
      <div className="timeline-card">
        <span className="timeline-period">{period}</span>
        <h3 className="timeline-role">{role}</h3>
        <p className="timeline-company">{company}</p>
        <p className="timeline-desc">{desc}</p>
        <div className="skill-tags" style={{ marginTop: '0.8rem' }}>
          {stack.map(t => <span className="tag" key={t}>{t}</span>)}
        </div>
      </div>
    </div>
  )
}
