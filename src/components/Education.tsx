import { useFadeIn } from '../hooks'

// TODO: Replace with your real education details
const EDUCATION = [
  {
    year: '2022 — 2026',
    degree: 'B.Tech — Computer Science & Engineering',
    school: 'Specialisation: Data Science  ·  YOUR UNIVERSITY  ·  CGPA: X.XX / 10',
  },
  {
    year: '20XX',
    degree: 'Class XII — CBSE / STATE BOARD',
    school: 'YOUR SCHOOL NAME  ·  Percentage / Grade: XX%',
  },
  {
    year: '20XX',
    degree: 'Class X — CBSE / STATE BOARD',
    school: 'YOUR SCHOOL NAME  ·  Percentage / Grade: XX%',
  },
]

const ACTIVITIES = [
  {
    role: 'Basketball Coordinator',
    org: 'YOUR UNIVERSITY / COLLEGE NAME',
    desc: 'Currently serving as the Basketball Coordinator, organising tournaments, managing teams, and fostering a competitive sports culture on campus.',
  },
  // Add more activities here if needed
]

export default function Education() {
  return (
    <section id="education">
      <p className="section-label">// 04 — Education</p>
      <h2 className="section-title">Academic Background</h2>
      <div className="edu-list">
        {EDUCATION.map((edu, i) => (
          <EduCard key={i} {...edu} />
        ))}
      </div>

      <h3 className="subsection-title">Co-Curricular Activities</h3>
      <div className="edu-list">
        {ACTIVITIES.map((act, i) => (
          <ActivityCard key={i} {...act} />
        ))}
      </div>
    </section>
  )
}

function EduCard({ year, degree, school }: { year: string; degree: string; school: string }) {
  const ref = useFadeIn()
  return (
    <div className="edu-card fade-in" ref={ref}>
      <span className="edu-year">{year}</span>
      <div>
        <p className="edu-degree">{degree}</p>
        <p className="edu-school">{school}</p>
      </div>
    </div>
  )
}

function ActivityCard({ role, org, desc }: { role: string; org: string; desc: string }) {
  const ref = useFadeIn()
  return (
    <div className="edu-card fade-in" ref={ref}>
      <span className="edu-year" style={{ minWidth: 'auto' }}>🏀</span>
      <div>
        <p className="edu-degree">{role}</p>
        <p className="edu-school">{org}</p>
        <p className="edu-school" style={{ marginTop: '0.4rem', color: '#888' }}>{desc}</p>
      </div>
    </div>
  )
}
