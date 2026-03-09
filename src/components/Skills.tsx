import { useFadeIn } from '../hooks'

const SKILLS = [
  { title: 'Languages', tags: ['Python', 'R', 'SQL'] },
  { title: 'Data Science', tags: ['Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib', 'Seaborn'] },
  { title: 'Frontend', tags: ['React', 'HTML', 'CSS'] },
  { title: 'Backend & Database', tags: ['Node.js', 'Express.js', 'MongoDB', 'MySQL'] },
  { title: 'DevOps & Tools', tags: ['Docker', 'Jenkins', 'Git', 'GitHub', 'Postman'] },
  { title: 'Digital Marketing', tags: ['Google Analytics', 'SEO', 'Google Ads', 'Meta Ads', 'Mailchimp', 'WordPress'] },
]

export default function Skills() {
  return (
    <section id="skills">
      <p className="section-label">// 02 — Skills</p>
      <h2 className="section-title">What I Work With</h2>
      <div className="skills-grid">
        {SKILLS.map(skill => (
          <SkillCard key={skill.title} title={skill.title} tags={skill.tags} />
        ))}
      </div>
    </section>
  )
}

function SkillCard({ title, tags }: { title: string; tags: string[] }) {
  const ref = useFadeIn()
  return (
    <div className="skill-card fade-in" ref={ref}>
      <p className="skill-card-title">{title}</p>
      <div className="skill-tags">
        {tags.map(tag => (
          <span className="tag" key={tag}>{tag}</span>
        ))}
      </div>
    </div>
  )
}
