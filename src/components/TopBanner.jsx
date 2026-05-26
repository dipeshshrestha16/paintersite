import { useState, useEffect } from 'react'

export default function TopBanner() {
  const [visible, setVisible] = useState(false)
  const [ctaHovered, setCtaHovered] = useState(false)

  useEffect(() => {
    const dismissed = sessionStorage.getItem('bigroos-banner-dismissed')
    if (!dismissed) setVisible(true)
  }, [])

  const dismiss = () => {
    setVisible(false)
    sessionStorage.setItem('bigroos-banner-dismissed', '1')
  }

  if (!visible) return null

  return (
    <div
      role="banner"
      aria-label="Built by Bigroos Tech Australia"
      style={{
        position: 'relative',
        width: '100%',
        backgroundColor: '#0C1C2C',
        borderBottom: '1px solid rgba(255,255,255,0.1)',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '56px',
          gap: '12px',
        }}
      >
        {/* Left — logo + brand name */}
        <a
          href="https://bigroostech.com.au"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit Bigroos Tech Australia"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            textDecoration: 'none',
            flexShrink: 0,
          }}
          onMouseEnter={e => e.currentTarget.querySelector('.brand-name').style.textDecoration = 'underline'}
          onMouseLeave={e => e.currentTarget.querySelector('.brand-name').style.textDecoration = 'none'}
        >
          <img
            src="/logo.png"
            alt="Bigroos Tech"
            style={{ width: '28px', height: '28px', borderRadius: '6px', objectFit: 'cover' }}
          />
          <span style={{
            color: 'rgba(255,255,255,0.5)',
            fontSize: '14px',
            fontWeight: 500,
            lineHeight: 1,
          }}
            className="d-none d-sm-inline"
          >
            Built by
          </span>
          <span
            className="brand-name"
            style={{
              color: '#00BFBF',
              fontSize: '14px',
              fontWeight: 700,
              letterSpacing: '0.02em',
              lineHeight: 1,
            }}
          >
            Bigroos Tech Australia
          </span>
        </a>

        {/* Centre — tagline, desktop only */}
        <p
          className="d-none d-md-block"
          style={{
            color: 'rgba(255,255,255,0.45)',
            fontSize: '14px',
            margin: 0,
            textAlign: 'center',
            lineHeight: 1,
            flexShrink: 1,
          }}
        >
          We build professional websites for Australian trade &amp; service businesses.
        </p>

        {/* Right — CTA */}
        <a
          href="https://bigroostech.com.au"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            fontSize: '14px',
            fontWeight: 600,
            padding: '7px 16px',
            borderRadius: '999px',
            border: '1px solid rgba(0,191,191,0.35)',
            backgroundColor: ctaHovered ? 'rgba(0,191,191,0.15)' : 'rgba(0,191,191,0.08)',
            color: '#00BFBF',
            textDecoration: 'none',
            whiteSpace: 'nowrap',
            flexShrink: 0,
            transition: 'background-color 0.2s ease, transform 0.2s ease',
            transform: ctaHovered ? 'scale(1.04)' : 'scale(1)',
          }}
          onMouseEnter={() => setCtaHovered(true)}
          onMouseLeave={() => setCtaHovered(false)}
        >
          <span className="d-none d-sm-inline">Want a site like this?</span>
          <span className="d-inline d-sm-none">Explore more</span>
          {/* Arrow icon */}
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
          </svg>
        </a>
      </div>

      {/* Dismiss — pinned to far-right edge, beside scrollbar */}
      <button
        onClick={dismiss}
        aria-label="Dismiss banner"
        style={{
          position: 'absolute',
          right: '4px',
          top: '50%',
          transform: 'translateY(-50%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '28px',
          height: '28px',
          borderRadius: '50%',
          border: 'none',
          background: 'transparent',
          color: 'rgba(255,255,255,0.3)',
          cursor: 'pointer',
          padding: 0,
          transition: 'color 0.15s ease',
        }}
        onMouseEnter={e => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}
        onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.3)'}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
        </svg>
      </button>
    </div>
  )
}
