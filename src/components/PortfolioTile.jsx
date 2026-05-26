import { useState } from 'react'

const CAT_COLORS = { Interior: '#7d9e7d', Exterior: '#4A6FA5', Commercial: '#E8501A' }

function PortfolioTile({ image, projectName, category, fallbackColor }) {
  const [hov, setHov] = useState(false)

  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        position: 'relative', borderRadius: '14px', overflow: 'hidden',
        aspectRatio: '4/3', cursor: 'pointer',
        boxShadow: hov ? '0 20px 48px rgba(0,0,0,0.4)' : '0 6px 24px rgba(0,0,0,0.25)',
        transition: 'box-shadow 0.3s ease',
      }}
    >
      {/* Fallback bg colour */}
      <div style={{ position: 'absolute', inset: 0, background: fallbackColor }} />

      <img
        src={image} alt={projectName} loading="lazy"
        style={{
          position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover',
          transform: hov ? 'scale(1.07)' : 'scale(1)',
          transition: 'transform 0.45s ease',
        }}
      />

      {/* Gradient overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        background: hov
          ? 'linear-gradient(to top, rgba(26,35,50,0.82) 0%, rgba(26,35,50,0.18) 55%, transparent 100%)'
          : 'linear-gradient(to top, rgba(26,35,50,0.55) 0%, rgba(26,35,50,0.05) 60%, transparent 100%)',
        transition: 'background 0.35s ease',
      }} />

      {/* Category pill — fades out on hover */}
      <div style={{
        position: 'absolute', top: '12px', left: '12px',
        padding: '4px 11px',
        background: 'rgba(0,0,0,0.45)', backdropFilter: 'blur(8px)',
        color: '#fff', borderRadius: '100px', fontSize: '11px', fontWeight: 600,
        opacity: hov ? 0 : 1, transition: 'opacity 0.25s ease',
      }}>
        {category}
      </div>

      {/* Project info — slides up on hover */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, padding: '20px',
        transform: hov ? 'translateY(0)' : 'translateY(8px)',
        opacity: hov ? 1 : 0,
        transition: 'transform 0.3s ease, opacity 0.3s ease',
      }}>
        <span style={{
          display: 'inline-block', padding: '3px 10px',
          background: CAT_COLORS[category] || '#E8501A',
          color: '#fff', borderRadius: '100px',
          fontSize: '10px', fontWeight: 700,
          marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.08em',
        }}>
          {category}
        </span>
        <p style={{ color: '#fff', fontSize: '16px', fontWeight: 700, fontFamily: "'Montserrat',sans-serif", margin: 0 }}>
          {projectName}
        </p>
      </div>
    </div>
  )
}

export default PortfolioTile
