import { useState } from 'react'

function ServiceCard({ icon: Icon, title, description, colours, colourNames }) {
  const [hovered,   setHovered]   = useState(false)
  const [linkHov,   setLinkHov]   = useState(false)
  const [activeCol, setActiveCol] = useState(null)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: '#ffffff',
        borderRadius: '14px',
        padding: '34px 26px 26px',
        boxShadow: hovered ? '0 20px 48px rgba(0,0,0,0.13)' : '0 2px 14px rgba(0,0,0,0.07)',
        borderTop: '4px solid #E8501A',
        transition: 'transform 0.25s ease, box-shadow 0.25s ease',
        transform: hovered ? 'translateY(-7px)' : 'translateY(0)',
        position: 'relative',
        overflow: 'hidden',
        height: '100%',
        cursor: 'default',
      }}
    >
      {/* Subtle paint blob watermark — top right corner */}
      <svg aria-hidden="true" style={{ position:'absolute', top:8, right:8, opacity: hovered ? 0.07 : 0.04, transition:'opacity 0.3s', pointerEvents:'none' }}
        width="80" height="80" viewBox="0 0 80 80">
        <path d="M70,10 C60,5 40,8 25,18 C10,28 5,45 8,58 C11,71 25,78 40,75 C55,72 68,62 72,48 C76,34 75,18 70,10Z" fill="#E8501A"/>
      </svg>

      {/* Organic blob-shaped icon container */}
      <div style={{
        width: '54px',
        height: '54px',
        background: hovered ? 'rgba(232,80,26,0.16)' : 'rgba(232,80,26,0.10)',
        borderRadius: hovered
          ? '40% 60% 30% 70% / 60% 40% 60% 40%'
          : '60% 40% 70% 30% / 50% 60% 40% 50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '20px',
        transition: 'border-radius 0.5s ease, background 0.3s ease',
      }}>
        <Icon size={26} color="#E8501A" strokeWidth={1.5} />
      </div>

      <h3 style={{ fontSize: '19px', fontWeight: 700, color: '#1a2332', marginBottom: '10px' }}>
        {title}
      </h3>

      <p style={{ fontSize: '15px', color: '#6b7a8d', lineHeight: 1.65, marginBottom: '22px' }}>
        {description}
      </p>

      {/* Popular colour swatches */}
      {colours && (
        <div style={{ marginBottom: '20px' }}>
          <p style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.14em', color: '#b0bec5', textTransform: 'uppercase', marginBottom: '8px' }}>
            Popular Colours
          </p>
          <div style={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
            {colours.map((c, i) => (
              <div key={c} title={colourNames?.[i]}
                onMouseEnter={() => setActiveCol(i)}
                onMouseLeave={() => setActiveCol(null)}
                style={{
                  width: activeCol === i ? '38px' : '26px',
                  height: '26px',
                  borderRadius: '7px',
                  background: c,
                  border: (c === '#FFFFFF' || c === '#F7FAFC' || c === '#F5F0E8')
                    ? '1.5px solid rgba(0,0,0,0.12)'
                    : '1.5px solid rgba(0,0,0,0.06)',
                  cursor: 'pointer',
                  transition: 'width 0.2s ease',
                  flexShrink: 0,
                }}
              />
            ))}
            {activeCol !== null && (
              <span style={{ fontSize: '11px', color: '#374151', fontWeight: 600, whiteSpace: 'nowrap', marginLeft: '2px' }}>
                {colourNames?.[activeCol]}
              </span>
            )}
          </div>
        </div>
      )}

      <a
        href="#contact"
        onMouseEnter={() => setLinkHov(true)}
        onMouseLeave={() => setLinkHov(false)}
        style={{
          color: '#E8501A', fontWeight: 600, fontSize: '14px',
          textDecoration: 'none', display: 'inline-flex', alignItems: 'center',
          gap: linkHov ? '8px' : '4px', transition: 'gap 0.2s ease',
        }}
      >
        Get a quote <span>→</span>
      </a>
    </div>
  )
}

export default ServiceCard
