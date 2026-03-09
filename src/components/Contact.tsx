import { useFadeIn } from '../hooks'
import { useState, useCallback } from 'react'
import type { FormEvent } from 'react'

export default function Contact() {
  const emailRef = useFadeIn()
  const linksRef = useFadeIn()
  const formRef = useFadeIn()

  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = useCallback((e: FormEvent) => {
    e.preventDefault()
    // TODO: Wire this to your backend / email service (e.g. Formspree, EmailJS, Netlify Forms)
    // For now it just shows a success state
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
    setForm({ name: '', email: '', message: '' })
  }, [])

  return (
    <section id="contact">
      <p className="section-label">// 06 — Contact</p>
      <h2 className="section-title">Let's Connect</h2>

      {/* TODO: Replace with your real email */}
      <a href="mailto:ishan.sharma23@st.niituniversity.in" className="contact-email fade-in" ref={emailRef as React.Ref<HTMLAnchorElement>}>
        ishan.sharma23@st.niituniversity.in
      </a>

      <div className="social-links fade-in" ref={linksRef}>
        {/* TODO: Replace href="#" with your real profile URLs */}
        <a href="https://github.com/ishan-sharma23" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/ishan-sharma-279b59253/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        
      </div>

      <form className="contact-form fade-in" ref={formRef as React.Ref<HTMLFormElement>} onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              id="name" type="text" required
              placeholder="Your name"
              value={form.name}
              onChange={e => setForm(prev => ({ ...prev, name: e.target.value }))}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email" type="email" required
              placeholder="your@email.com"
              value={form.email}
              onChange={e => setForm(prev => ({ ...prev, email: e.target.value }))}
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message" rows={5} required
            placeholder="Tell me about your project or opportunity..."
            value={form.message}
            onChange={e => setForm(prev => ({ ...prev, message: e.target.value }))}
          />
        </div>
        <button type="submit" className="btn btn-primary" style={{ marginTop: '1rem' }}>
          {submitted ? '✓ Sent!' : 'Send Message'}
        </button>
      </form>

    
    </section>
  )
}
