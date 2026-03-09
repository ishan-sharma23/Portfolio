// TODO: Replace this import with your actual photo:
//   1. Drop your image file into src/assets/  (e.g. profile.jpg)
//   2. Change the import below to:  import profileImg from '../assets/profile.jpg'
import profileImg from '../assets/ishanphoto.jpeg'
import { useState, useEffect, useRef, useCallback } from 'react'

function useTypingEffect(words: string[], typingSpeed = 100, deletingSpeed = 60, pauseTime = 1800) {
  const [text, setText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const current = words[wordIndex]
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(current.slice(0, text.length + 1))
        if (text.length + 1 === current.length) {
          setTimeout(() => setIsDeleting(true), pauseTime)
        }
      } else {
        setText(current.slice(0, text.length - 1))
        if (text.length === 0) {
          setIsDeleting(false)
          setWordIndex((prev) => (prev + 1) % words.length)
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed)

    return () => clearTimeout(timeout)
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseTime])

  return text
}

function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const animate = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    const particles: { x: number; y: number; vx: number; vy: number; r: number }[] = []
    const count = Math.floor((canvas.width * canvas.height) / 12000)

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 1.5 + 0.5,
      })
    }

    let animId: number
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(0, 229, 255, 0.15)'
        ctx.fill()
      }
      // Draw lines between close particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 120) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(0, 229, 255, ${0.06 * (1 - dist / 120)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }
      animId = requestAnimationFrame(draw)
    }
    draw()
    return () => cancelAnimationFrame(animId)
  }, [])

  useEffect(() => {
    const cleanup = animate()
    const handleResize = () => animate()
    window.addEventListener('resize', handleResize)
    return () => {
      cleanup?.()
      window.removeEventListener('resize', handleResize)
    }
  }, [animate])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute', inset: 0, width: '100%', height: '100%',
        pointerEvents: 'none', zIndex: 0,
      }}
    />
  )
}

const TITLES = ['Data Scientist', 'Full Stack Developer', 'Digital Marketer']

export default function Hero() {
  const typedTitle = useTypingEffect(TITLES)

  return (
    <section id="hero">
      <ParticleCanvas />
      <div className="hero-content" style={{ position: 'relative', zIndex: 1 }}>
        <h1 className="hero-name">
          Ishan<br />
          <span>Sharma</span>
        </h1>
        <p className="hero-title">
          {typedTitle}<span className="cursor">|</span>
        </p>
        <p className="hero-bio">
          Core CSE student specialising in Data Science — turning raw data into meaningful
          insights and building end-to-end digital products. Fluent in algorithms, statistics,
          and the full web stack, with an extra edge in digital marketing strategy.
        </p>
        <div className="hero-cta">
          <a href="#projects" className="btn btn-primary">View Projects</a>
          <a href="#contact" className="btn btn-outline">Get In Touch</a>
          {/* TODO: Replace href with your actual resume PDF link */}
          <a href="#" className="btn btn-outline" target="_blank" rel="noopener noreferrer">
            Download CV
          </a>
        </div>
      </div>

      <div className="hero-image-wrapper" style={{ position: 'relative', zIndex: 1 }}>
        <img src={profileImg} alt="Ishan Sharma — Data Scientist" />
      </div>

      <div className="scroll-indicator">
        <span>Scroll</span>
        <div className="arrow" />
      </div>
    </section>
  )
}
