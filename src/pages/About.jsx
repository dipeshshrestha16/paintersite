import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SectionHeading from '../components/SectionHeading'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { ShieldCheck, Award, Users, Star, Clock, CheckCircle } from 'lucide-react'

const TEAM = [
  { name: 'James Wilson', role: 'Founder & Lead Painter',        image: '/images/team-1.jpg' },
  { name: 'Sarah Chen',   role: 'Commercial Projects Manager',   image: '/images/team-2.jpg' },
  { name: 'Mike Torres',  role: 'Senior Residential Painter',    image: '/images/team-3.jpg' },
]

const TRUST_STATS = [
  { icon: Award,       stat: '10+',    label: 'Years in Business'     },
  { icon: CheckCircle, stat: '3,000+', label: 'Projects Completed'    },
  { icon: Users,       stat: '500+',   label: 'Happy Clients'         },
  { icon: Star,        stat: '4.9★',   label: 'Average Star Rating'   },
]

function PageBanner() {
  return (
    <section style={{ backgroundColor: 'var(--color-dark-nav)', padding: '65px 0' }}>
      <div className="container text-center">
        <h1 style={{ color: '#ffffff', marginBottom: '15px' }}>About PaintSites</h1>
        <nav aria-label="breadcrumb">
          <ol style={{ display: 'flex', justifyContent: 'center', listStyle: 'none', padding: 0, margin: 0, gap: '8px', fontSize: '14px' }}>
            <li>
              <Link to="/" style={{ color: 'var(--color-secondary)', textDecoration: 'none' }}>Home</Link>
            </li>
            <li style={{ color: 'var(--color-neutral-100)' }}>/</li>
            <li style={{ color: 'var(--color-neutral-100)' }}>About Us</li>
          </ol>
        </nav>
      </div>
    </section>
  )
}

function OurStory() {
  const [imgRef,  imgVisible]  = useScrollReveal()
  const [textRef, textVisible] = useScrollReveal()

  return (
    <section style={{ backgroundColor: '#ffffff', padding: '80px 0' }}>
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-12 col-md-6">
            <div ref={imgRef} className={`bounce-in-left ${imgVisible ? 'is-visible' : ''}`}>
              <img
                src="/images/about-team.jpg"
                alt="Team of painters in matching uniforms on a job site"
                style={{
                  width: '100%',
                  aspectRatio: '4 / 3',
                  objectFit: 'cover',
                  borderRadius: 'var(--radius-xs)',
                  backgroundColor: '#78909c',
                  display: 'block',
                }}
                onError={e => { e.currentTarget.style.minHeight = '320px' }}
              />
            </div>
          </div>

          <div className="col-12 col-md-6">
            <div ref={textRef} className={`bounce-in-right ${textVisible ? 'is-visible' : ''}`}>
              <p style={{ color: 'var(--color-secondary)', fontSize: '14px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '15px' }}>
                Our Story
              </p>
              <h2 style={{ color: 'var(--color-primary)', marginBottom: '20px' }}>
                Built on Quality, Backed by Experience
              </h2>
              <p style={{ fontSize: '14px', lineHeight: '22px', color: 'var(--color-text-medium)', marginBottom: '20px' }}>
                PaintSites was founded over a decade ago with a simple mission: make it easy for homeowners to find painters they can actually trust. What started as a small crew serving Melbourne's inner suburbs has grown into a nationwide network of licensed, insured tradespeople.
              </p>
              <p style={{ fontSize: '14px', lineHeight: '22px', color: 'var(--color-text-medium)', marginBottom: '20px' }}>
                Every painter in our network is personally vetted, fully licensed, and committed to our quality charter. We don't just connect you with a painter — we stand behind every job.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {['Licensed & insured painters only', 'Satisfaction guarantee on every job', 'Transparent, upfront pricing'].map(point => (
                  <div key={point} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <ShieldCheck size={18} color="var(--color-secondary)" />
                    <span style={{ fontSize: '14px', color: 'var(--color-text-dark)' }}>{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function TeamSection() {
  const [ref, visible] = useScrollReveal()

  return (
    <section style={{ backgroundColor: 'var(--color-bg-light)', padding: '80px 0' }}>
      <div className="container">
        <SectionHeading
          title="Meet the Team"
          subtitle="Experienced professionals who take pride in every brushstroke."
          titleColor="var(--color-primary)"
        />
        <div ref={ref} className="row g-4">
          {TEAM.map((member, i) => (
            <div
              key={member.name}
              className={`col-12 col-md-4 bounce-in stagger-${i + 1} ${visible ? 'is-visible' : ''}`}
            >
              <div className="text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  style={{
                    width: '140px',
                    height: '140px',
                    borderRadius: 'var(--radius-full)',
                    objectFit: 'cover',
                    backgroundColor: '#90a4ae',
                    display: 'inline-block',
                    marginBottom: '20px',
                  }}
                  onError={e => { e.currentTarget.style.opacity = '0.5' }}
                />
                <h3 style={{ color: 'var(--color-primary)', marginBottom: '8px' }}>{member.name}</h3>
                <p style={{ fontSize: '14px', color: 'var(--color-text-muted)' }}>{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function TrustBadges() {
  const [ref, visible] = useScrollReveal()

  return (
    <section style={{ backgroundColor: '#ffffff', padding: '80px 0' }}>
      <div className="container">
        <div ref={ref} className="row g-4 text-center">
          {TRUST_STATS.map((s, i) => (
            <div
              key={s.label}
              className={`col-6 col-md-3 bounce-in stagger-${i + 1} ${visible ? 'is-visible' : ''}`}
            >
              <s.icon size={36} color="var(--color-secondary)" strokeWidth={1.5} style={{ marginBottom: '15px' }} />
              <p style={{ fontSize: '40px', fontWeight: '700', color: 'var(--color-secondary)', lineHeight: '1', marginBottom: '10px', fontFamily: 'var(--font-primary)' }}>
                {s.stat}
              </p>
              <p style={{ fontSize: '14px', color: 'var(--color-text-muted)' }}>{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CTAStrip() {
  return (
    <section style={{ backgroundColor: 'var(--color-secondary)', padding: '80px 0' }}>
      <div className="container text-center">
        <h2 style={{ color: '#ffffff', marginBottom: '20px' }}>Ready to get started?</h2>
        <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '16px', marginBottom: '38px' }}>
          Get a no-obligation quote from a licensed painter today.
        </p>
        <Link
          to="/#contact"
          onClick={e => {
            e.preventDefault()
            window.location.href = '/'
            setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 120)
          }}
          style={{
            display: 'inline-block',
            backgroundColor: 'transparent',
            color: '#ffffff',
            border: '2px solid #ffffff',
            borderRadius: 'var(--radius-xs)',
            padding: '15px 38px',
            fontSize: '16px',
            fontWeight: '600',
            textDecoration: 'none',
            transition: 'all 0.3s ease',
            fontFamily: 'var(--font-primary)',
          }}
          onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.15)' }}
          onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent' }}
        >
          Request a Free Quote
        </Link>
      </div>
    </section>
  )
}

function About() {
  return (
    <>
      <Navbar />
      <PageBanner />
      <OurStory />
      <TeamSection />
      <TrustBadges />
      <CTAStrip />
      <Footer />
    </>
  )
}

export default About
