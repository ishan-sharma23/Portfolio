import { useFadeIn } from '../hooks'

// TODO: Replace with your real certifications
const CERTS = [
  { name: 'Digital Marketing', issuer: 'ISSUER NAME  ·  YEAR' },
  { name: 'CERTIFICATION NAME', issuer: 'ISSUER NAME  ·  YEAR' },
  { name: 'CERTIFICATION NAME', issuer: 'ISSUER NAME  ·  YEAR' },
  { name: 'CERTIFICATION NAME', issuer: 'ISSUER NAME  ·  YEAR' },
]

export default function Certifications() {
  return (
    <section id="certifications">
      <p className="section-label">// 05 — Certifications</p>
      <h2 className="section-title">Courses &amp; Certificates</h2>
      <div className="cert-grid">
        {CERTS.map((cert, i) => (
          <CertCard key={i} {...cert} />
        ))}
      </div>
    </section>
  )
}

function CertCard({ name, issuer }: { name: string; issuer: string }) {
  const ref = useFadeIn()
  return (
    <div className="cert-card fade-in" ref={ref}>
      <p className="cert-name">{name}</p>
      <p className="cert-issuer">{issuer}</p>
    </div>
  )
}
