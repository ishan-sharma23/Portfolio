import { useFadeIn } from '../hooks'

export default function About() {
  const textRef = useFadeIn()
  const infoRef = useFadeIn()

  return (
    <section id="about">
      <p className="section-label">// 01 — About</p>
      <h2 className="section-title">Who I Am</h2>
      <div className="about-grid">
        <div className="about-text fade-in" ref={textRef}>
          <p>
            I'm Ishan Sharma, a Computer Science Engineering student specialising in Data Science.
            I'm passionate about leveraging data to solve real-world problems — whether building
            predictive models, analysing trends, or crafting data-driven strategies.
          </p>
          <p>
            Beyond data science, I build complete web applications from database to frontend,
            manage CI/CD pipelines with Docker and Jenkins, and understand how digital products
            reach their audience through marketing and analytics.
          </p>
          <p>
            I believe the best data scientists not only crunch numbers but also communicate
            insights clearly and ship products people actually use.
          </p>
        </div>

        <div className="about-info fade-in" ref={infoRef}>
          {/* TODO: Fill in your real details below */}
          <InfoRow label="Name" value="ISHAN SHARMA" />
          <InfoRow label="Degree" value="B.Tech — CSE (Data Science)" />
          <InfoRow label="University" value="NIIT UNIVERSITY NEEMRANA" />
          <InfoRow label="Year" value="3^rd YEAR" />
          <InfoRow label="Location" value="SONIPAT,HARYANA,India" />
          <InfoRow label="Email" value="ishan.sharma23@st.niituniversity.in" />
          <InfoRow label="Website" value="ishanhiking.com" />
        </div>
      </div>
    </section>
  )
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="info-row">
      <span className="info-label">{label}</span>
      <span className="info-value">{value}</span>
    </div>
  )
}
