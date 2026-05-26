import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const NAV_LINKS = [
  { label: 'Services',  href: '/#services'  },
  { label: 'Portfolio', href: '/#portfolio' },
  { label: 'About',     href: '/about'       },
  { label: 'Contact',   href: '/#contact'   },
]

function PaintBrushIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7 14c0 1.657-1.343 3-3 3s-3-1.343-3-3c0-2 3-6 3-6s3 4 3 6z" fill="#E8501A"/>
      <path d="M14.5 2.5l7 7-10 10-7-7 10-10z" stroke="#ffffff" strokeWidth="2" strokeLinejoin="round"/>
      <path d="M16.5 4.5l3 3" stroke="#E8501A" strokeWidth="2" strokeLinecap="round"/>
      <path d="M3 21l4-4" stroke="#ffffff" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )
}

function Navbar({ logoText = 'PaintSites' }) {
  const [scrolled,   setScrolled]   = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMobileOpen(false) }, [location.pathname])

  const scrollToAnchor = (anchor) => {
    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(() => document.getElementById(anchor)?.scrollIntoView({ behavior: 'smooth' }), 120)
    } else {
      document.getElementById(anchor)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleLinkClick = (e, href) => {
    if (!href.startsWith('/#')) return
    e.preventDefault()
    scrollToAnchor(href.slice(2))
    setMobileOpen(false)
  }

  const navLinkStyle = (isActive) => ({
    color: isActive ? '#ffffff' : 'rgba(255,255,255,0.82)',
    fontSize: '14px',
    fontWeight: 500,
    textDecoration: 'none',
    padding: '8px 12px',
    transition: 'color 0.2s ease',
  })

  const renderNavLink = (link) => {
    const isActive = link.href === '/about' && location.pathname === '/about'
    const style = navLinkStyle(isActive)
    const hoverOn  = e => { e.currentTarget.style.color = '#ffffff' }
    const hoverOff = e => { e.currentTarget.style.color = isActive ? '#ffffff' : 'rgba(255,255,255,0.82)' }

    return link.href.startsWith('/#') ? (
      <a
        key={link.label}
        href={link.href}
        onClick={e => handleLinkClick(e, link.href)}
        style={style}
        onMouseEnter={hoverOn}
        onMouseLeave={hoverOff}
      >
        {link.label}
      </a>
    ) : (
      <Link
        key={link.label}
        to={link.href}
        style={style}
        onMouseEnter={hoverOn}
        onMouseLeave={hoverOff}
      >
        {link.label}
      </Link>
    )
  }

  return (
    <nav style={{
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      backgroundColor: 'var(--bg-nav)',
      boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
      padding: scrolled ? '10px 0' : '16px 0',
      transition: 'padding 0.4s',
    }}>
      <div className="container">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

          {/* Logo */}
          <a
            href="/"
            onClick={e => { e.preventDefault(); navigate('/') }}
            style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}
          >
            <PaintBrushIcon />
            <span style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 800,
              fontSize: '18px',
              color: '#ffffff',
              letterSpacing: '-0.02em',
            }}>
              {logoText}
            </span>
          </a>

          {/* Desktop links */}
          <div className="d-none d-md-flex align-items-center">
            {NAV_LINKS.map(renderNavLink)}

            <a
              href="/#contact"
              onClick={e => handleLinkClick(e, '/#contact')}
              style={{
                marginLeft: '12px',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'var(--color-primary)',
                color: '#ffffff',
                border: 'none',
                borderRadius: '6px',
                padding: '13px 26px',
                fontFamily: "'Inter', sans-serif",
                fontSize: '15px',
                fontWeight: 700,
                letterSpacing: '0.01em',
                textDecoration: 'none',
                transition: 'background 0.2s ease, box-shadow 0.2s ease, transform 0.15s ease',
                boxShadow: '0 4px 14px var(--color-primary-glow)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--color-primary-hover').trim()
                e.currentTarget.style.boxShadow = '0 6px 20px var(--color-primary-glow)'
                e.currentTarget.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.backgroundColor = 'var(--color-primary)'
                e.currentTarget.style.boxShadow = '0 4px 14px var(--color-primary-glow)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
              onMouseDown={e => { e.currentTarget.style.transform = 'translateY(0)' }}
            >
              Get a Free Quote
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="d-md-none"
            onClick={() => setMobileOpen(v => !v)}
            aria-label="Toggle menu"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '8px',
              display: 'flex',
              flexDirection: 'column',
              gap: '5px',
            }}
          >
            <span style={{
              width: '22px', height: '2px', background: '#fff', borderRadius: '2px',
              display: 'block', transition: '0.3s ease',
              transform: mobileOpen ? 'rotate(45deg) translateY(7px)' : 'none',
            }} />
            <span style={{
              width: '22px', height: '2px', background: '#fff', borderRadius: '2px',
              display: 'block', transition: '0.3s ease',
              opacity: mobileOpen ? 0 : 1,
            }} />
            <span style={{
              width: '22px', height: '2px', background: '#fff', borderRadius: '2px',
              display: 'block', transition: '0.3s ease',
              transform: mobileOpen ? 'rotate(-45deg) translateY(-7px)' : 'none',
            }} />
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <div style={{
        position: 'absolute',
        top: '100%',
        left: 0,
        right: 0,
        backgroundColor: 'var(--bg-nav)',
        zIndex: 999,
        boxShadow: mobileOpen ? '0 8px 24px rgba(0,0,0,0.3)' : 'none',
        maxHeight: mobileOpen ? '400px' : '0',
        overflow: 'hidden',
        transition: 'max-height 0.35s ease, opacity 0.3s ease',
        opacity: mobileOpen ? 1 : 0,
      }}>
        <div style={{ padding: '8px 0 16px' }}>
          {NAV_LINKS.map(link => (
            link.href.startsWith('/#') ? (
              <a
                key={link.label}
                href={link.href}
                onClick={e => handleLinkClick(e, link.href)}
                style={{
                  display: 'block',
                  padding: '14px 24px',
                  color: '#ffffff',
                  fontSize: '16px',
                  fontWeight: 500,
                  borderBottom: '1px solid rgba(255,255,255,0.07)',
                  textDecoration: 'none',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'transparent' }}
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.label}
                to={link.href}
                style={{
                  display: 'block',
                  padding: '14px 24px',
                  color: '#ffffff',
                  fontSize: '16px',
                  fontWeight: 500,
                  borderBottom: '1px solid rgba(255,255,255,0.07)',
                  textDecoration: 'none',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'transparent' }}
              >
                {link.label}
              </Link>
            )
          ))}
          <div style={{ padding: '8px 24px 0' }}>
            <a
              href="/#contact"
              onClick={e => handleLinkClick(e, '/#contact')}
              style={{
                display: 'block',
                textAlign: 'center',
                backgroundColor: 'var(--color-primary)',
                color: '#ffffff',
                padding: '13px 24px',
                borderRadius: '6px',
                fontSize: '15px',
                fontWeight: 700,
                textDecoration: 'none',
                transition: 'background 0.2s ease',
              }}
            >
              Get a Free Quote
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
