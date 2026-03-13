import { useFadeIn } from '../hooks'
import { useState, useCallback } from 'react'
import type { FormEvent } from 'react'

const CONTACT_EMAIL = 'ishan.sharma23@st.niituniversity.in'
const FORM_ENDPOINT = `https://formsubmit.co/ajax/${CONTACT_EMAIL}`

export default function Contact() {
  const emailRef = useFadeIn()
  const linksRef = useFadeIn()
  const formRef = useFadeIn()

  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = useCallback(async (e: FormEvent) => {
    e.preventDefault()

    setError('')
    setSubmitting(true)

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          _subject: `Portfolio Contact from ${form.name}`,
          _captcha: 'false',
          _template: 'table',
        }),
      })

      if (!res.ok) {
        throw new Error('Failed to send message')
      }

      setSubmitted(true)
      setTimeout(() => setSubmitted(false), 4000)
      setForm({ name: '', email: '', message: '' })
    } catch {
      setError('Message could not be sent right now. Please email me directly.')
    } finally {
      setSubmitting(false)
    }
  }, [form])

  return (
    <section id="contact">
      <p className="section-label">// 06 — Contact</p>
      <h2 className="section-title">Let's Connect</h2>

      {/* TODO: Replace with your real email */}
      <a href={`mailto:${CONTACT_EMAIL}`} className="contact-email fade-in" ref={emailRef as React.Ref<HTMLAnchorElement>}>
        {CONTACT_EMAIL}
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
          {submitting ? 'Sending...' : submitted ? '✓ Sent!' : 'Send Message'}
        </button>
        {error && <p style={{ marginTop: '0.8rem', color: '#ff7b7b', fontSize: '0.78rem' }}>{error}</p>}
      </form>

    
    </section>
  )
}
