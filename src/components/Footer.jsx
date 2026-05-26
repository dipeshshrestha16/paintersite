import { useState } from 'react'
import { Facebook, Instagram, Linkedin } from 'lucide-react'
import { Link } from 'react-router-dom'

const SERVICES_LINKS = ['Interior Painting', 'Exterior Painting', 'Commercial', 'Roof Painting', 'Fence & Deck']
const COMPANY_LINKS  = [
  { label: 'About Us',     href: '/about'         },
  { label: 'Our Work',     href: '/#portfolio'    },
  { label: 'Testimonials', href: '/#testimonials' },
  { label: 'Blog',         href: '/blog'          },
  { label: 'Contact',      href: '/#contact'      },
]

function SocialIcon({ Icon }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        width: '36px',
        height: '36px',
        borderRadius: '8px',
        background: hovered ? '#E8501A' : 'rgba(255,255,255,0.08)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: hovered ? '#ffffff' : 'rgba(255,255,255,0.7)',
        transition: 'background 0.2s ease, color 0.2s ease',
        cursor: 'pointer',
      }}
    >
      <Icon size={18} />
    </div>
  )
}

function FooterLink({ label, href }) {
  const [hovered, setHovered] = useState(false)
  const style = {
    display: 'block',
    color: hovered ? '#ffffff' : '#b0bec5',
    fontSize: '14px',
    lineHeight: 2.2,
    textDecoration: 'none',
    transition: 'color 0.2s ease',
  }
  const handlers = {
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false),
  }

  if (!href) return <span style={style} {...handlers}>{label}</span>
  if (href.startsWith('/#')) return <a href={href} style={style} {...handlers}>{label}</a>
  return <Link to={href} style={style} {...handlers}>{label}</Link>
}

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

function Footer({
  logoText  = 'PaintSites',
  tagline   = 'Professional painting services for homeowners across Australia.',
  copyright = '© 2026 PaintSites. All rights reserved.',
}) {
  const [emailHovered, setEmailHovered] = useState(false)

  return (
    <footer style={{ backgroundColor: '#2d333f', paddingTop: '64px' }}>
      <div className="container">
        <div className="row g-4 pb-5">

          {/* Brand */}
          <div className="col-12 col-sm-6 col-lg-3">
            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none', marginBottom: '10px' }}>
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
            </Link>
            <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '14px', lineHeight: 1.65, marginBottom: '20px', maxWidth: '220px' }}>
              {tagline}
            </p>
            <div style={{ display: 'flex', gap: '10px' }}>
              <SocialIcon Icon={Facebook} />
              <SocialIcon Icon={Instagram} />
              <SocialIcon Icon={Linkedin} />
            </div>
          </div>

          {/* Services */}
          <div className="col-12 col-sm-6 col-lg-3">
            <h3 style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: '12px',
              fontWeight: 800,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: '#ffffff',
              marginBottom: '20px',
            }}>
              Services
            </h3>
            {SERVICES_LINKS.map((label, i) => (
              <FooterLink key={i} label={label} href={null} />
            ))}
          </div>

          {/* Company */}
          <div className="col-12 col-sm-6 col-lg-3">
            <h3 style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: '12px',
              fontWeight: 800,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: '#ffffff',
              marginBottom: '20px',
            }}>
              Company
            </h3>
            {COMPANY_LINKS.map((l, i) => (
              <FooterLink key={i} label={l.label} href={l.href} />
            ))}
          </div>

          {/* Contact */}
          <div className="col-12 col-sm-6 col-lg-3">
            <h3 style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: '12px',
              fontWeight: 800,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: '#ffffff',
              marginBottom: '20px',
            }}>
              Get In Touch
            </h3>
            <p style={{
              color: '#ffffff',
              fontSize: '20px',
              fontWeight: 800,
              fontFamily: "'Montserrat', sans-serif",
              letterSpacing: '-0.02em',
              marginBottom: '8px',
            }}>
              1800 PAINT IT
            </p>
            <a
              href="mailto:hello@paintsites.com.au"
              onMouseEnter={() => setEmailHovered(true)}
              onMouseLeave={() => setEmailHovered(false)}
              style={{
                display: 'block',
                color: emailHovered ? '#ffffff' : '#64b5d6',
                fontSize: '14px',
                marginBottom: '10px',
                textDecoration: 'none',
                transition: 'color 0.2s ease',
              }}
            >
              hello@paintsites.com.au
            </a>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '13px', lineHeight: 1.65, marginTop: '8px' }}>
              Serving Melbourne, Sydney, Brisbane &amp; surrounds
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)', marginTop: '0', paddingTop: '24px', paddingBottom: '24px' }}>
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '13px', margin: 0, textAlign: 'center' }}>
            {copyright}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
