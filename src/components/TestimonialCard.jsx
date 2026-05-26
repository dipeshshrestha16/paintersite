import { useState } from 'react'

function TestimonialCard({ quote, reviewer, location, rating = 5 }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className="testimonial-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        backgroundColor: '#ffffff',
        borderRadius: '14px',
        padding: '30px 26px',
        boxShadow: hovered ? '0 14px 36px rgba(0,0,0,0.11)' : '0 2px 16px rgba(0,0,0,0.07)',
        border: '1px solid rgba(0,0,0,0.05)',
        position: 'relative',
        transition: 'transform 0.25s ease, box-shadow 0.25s ease',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Decorative quote mark */}
      <span style={{
        fontSize: '72px', lineHeight: 1, color: 'rgba(232,80,26,0.10)',
        fontFamily: 'Georgia, serif', position: 'absolute',
        top: '12px', left: '18px', pointerEvents: 'none',
      }}>
        "
      </span>

      {/* Stars */}
      <div style={{ display: 'flex', gap: '3px', marginBottom: '14px' }}>
        {Array.from({ length: rating }).map((_, i) => (
          <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#F5A623">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
          </svg>
        ))}
      </div>

      <p style={{
        fontSize: '15px', color: '#4a5568', lineHeight: 1.75,
        fontStyle: 'italic', marginBottom: '20px',
        position: 'relative', zIndex: 1, flexGrow: 1,
      }}>
        "{quote}"
      </p>

      <div>
        <p style={{ fontSize: '15px', fontWeight: 700, color: '#1a2332', marginBottom: '2px' }}>
          {reviewer}
        </p>
        <p style={{ fontSize: '13px', color: '#9ca3af', fontWeight: 400 }}>
          {location}
        </p>
      </div>
    </div>
  )
}

export default TestimonialCard
