import { useState } from 'react'
import { ShieldCheck, Star, Clock } from 'lucide-react'
import { Link } from 'react-router-dom'

const trustPoints = [
  { icon: ShieldCheck, text: '3,000+ Projects Completed'    },
  { icon: Star,        text: '4.9★ Average Customer Rating' },
  { icon: Clock,       text: 'Same-Week Availability'       },
]

function LearnMoreLink() {
  const [hovered, setHovered] = useState(false)
  return (
    <Link
      to="/about"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        color: '#E8501A', fontWeight: 700, textDecoration: 'none', fontSize: '15px',
        display: 'inline-flex', alignItems: 'center',
        gap: hovered ? '10px' : '6px', marginTop: '8px', transition: 'gap 0.2s ease',
      }}
    >
      Learn more about us <span>→</span>
    </Link>
  )
}

function AboutSection() {
  return (
    <section id="about" style={{ backgroundColor: '#ffffff', padding: '96px 0' }}>
      <div className="container">
        <div className="row align-items-center g-5">

          {/* Image col — painter with green circle */}
          <div className="col-12 col-md-6">
            <div className="reveal" style={{ position: 'relative' }}>
              {/* Soft green radial glow behind the circular image bg */}
              <div style={{
                position: 'absolute', top: '50%', left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '88%', paddingBottom: '88%',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(125,158,125,0.18) 0%, rgba(125,158,125,0.06) 70%, transparent 100%)',
                zIndex: 0,
              }} />
              {/* Orange paint accent — top right */}
              <div style={{
                position: 'absolute', top: '-10px', right: '-10px',
                width: '70px', height: '70px', borderRadius: '50%',
                background: 'rgba(232,80,26,0.08)', zIndex: 0,
              }} />
              {/* Blue paint accent — bottom left */}
              <div style={{
                position: 'absolute', bottom: '10px', left: '-8px',
                width: '50px', height: '50px', borderRadius: '50%',
                background: 'rgba(100,181,214,0.12)', zIndex: 0,
              }} />
              {/* Painter image — place painter.png in public/images/ */}
              <img
                src="/images/painter.png"
                alt="PaintSites professional painter"
                style={{
                  width: '100%', display: 'block',
                  position: 'relative', zIndex: 1,
                  filter: 'drop-shadow(0 24px 48px rgba(0,0,0,0.14))',
                }}
              />
            </div>
          </div>

          {/* Text col */}
          <div className="col-12 col-md-6">
            <div className="reveal">
              <span style={{
                fontSize: '11px', fontWeight: 700, letterSpacing: '0.18em',
                color: '#E8501A', textTransform: 'uppercase',
                display: 'block', marginBottom: '12px',
              }}>
                About PaintSites
              </span>

              <h2 style={{ fontSize: 'clamp(26px, 3vw, 38px)', color: '#1a2332', marginBottom: '18px' }}>
                Trusted by Thousands of Australian Homeowners
              </h2>

              <p style={{ fontSize: '16px', color: '#6b7a8d', lineHeight: 1.75, marginBottom: '30px' }}>
                With over 10 years in the industry, PaintSites has completed more than 3,000 projects
                across residential and commercial properties. Every job is backed by our quality guarantee
                and fully licensed tradespeople.
              </p>

              <div style={{ marginBottom: '30px' }}>
                {trustPoints.map(({ icon: Icon, text }) => (
                  <div key={text} style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                    <Icon size={20} color="#E8501A" strokeWidth={2} style={{ flexShrink: 0 }} />
                    <span style={{ fontSize: '15px', fontWeight: 600, color: '#1a2332' }}>{text}</span>
                  </div>
                ))}
              </div>

              <LearnMoreLink />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default AboutSection
