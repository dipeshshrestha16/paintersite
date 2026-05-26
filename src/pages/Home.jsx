import { useEffect } from 'react'
import Navbar           from '../components/Navbar'
import HeroSection      from '../components/HeroSection'
import ServiceCard      from '../components/ServiceCard'
import SectionHeading   from '../components/SectionHeading'
import AboutSection     from '../components/AboutSection'
import PortfolioGallery from '../components/PortfolioGallery'
import HowItWorks       from '../components/HowItWorks'
import Testimonials     from '../components/Testimonials'
import QuoteForm        from '../components/QuoteForm'
import Footer           from '../components/Footer'
import { ShieldCheck, Paintbrush, Home as HomeIcon, Building2 } from 'lucide-react'

// ── Services data (now with colour swatches) ──────────────────────────────────
const SERVICES = [
  {
    icon: Paintbrush,
    title: 'Interior Painting',
    description: 'Walls, ceilings, trims, and feature walls. We protect your furniture and leave your home spotless.',
    colours:      ['#F5F0E8', '#E8DDD0', '#C4B5A0', '#8B7355', '#FFFFFF'],
    colourNames:  ['Cream', 'Linen', 'Taupe', 'Mocha', 'White'],
  },
  {
    icon: HomeIcon,
    title: 'Exterior Painting',
    description: 'Weather-resistant coatings, full prep work, and long-lasting results for any climate.',
    colours:      ['#4A5568', '#718096', '#A0AEC0', '#2D3748', '#64b5d6'],
    colourNames:  ['Charcoal', 'Slate', 'Silver', 'Navy', 'Sky'],
  },
  {
    icon: Building2,
    title: 'Commercial Projects',
    description: 'Offices, retail spaces, and strata — fast turnarounds with minimal disruption.',
    colours:      ['#FFFFFF', '#F7FAFC', '#EDF2F7', '#4A6FA5', '#2D3748'],
    colourNames:  ['White', 'Pearl', 'Cool Grey', 'Corporate', 'Charcoal'],
  },
]

// ── Services section ──────────────────────────────────────────────────────────
function ServicesSection() {
  return (
    <section id="services" style={{ backgroundColor: '#f8f9fa', padding: '96px 0' }}>
      <div className="container">
        <SectionHeading
          label="What We Do"
          title="Painting Services for Every Property"
          subtitle="From a single room to a full exterior — we handle it all."
          titleColor="#1a2332"
          labelColor="#E8501A"
          brushStroke={true}
        />
        <div className="row g-4">
          {SERVICES.map((svc, i) => (
            <div key={svc.title} className={`col-12 col-md-4 reveal reveal-delay-${i + 1}`}>
              <ServiceCard {...svc} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Quote CTA section — paint splash left side ────────────────────────────────
function QuotePaintSplash() {
  return (
    <svg viewBox="0 0 500 600" preserveAspectRatio="xMidYMid slice" aria-hidden="true"
      style={{ position:'absolute', inset:0, width:'100%', height:'100%', pointerEvents:'none', zIndex:0 }}>
      <ellipse cx="420" cy="100" rx="200" ry="150" fill="#E8501A" opacity="0.18" transform="rotate(-15 420 100)"/>
      <ellipse cx="370" cy="60"  rx="80"  ry="55"  fill="#E8501A" opacity="0.12" transform="rotate(-5 370 60)"/>
      <circle  cx="270" cy="28"  r="22"             fill="#E8501A" opacity="0.10"/>
      <circle  cx="490" cy="230" r="16"             fill="#E8501A" opacity="0.09"/>
      <circle  cx="240" cy="180" r="9"              fill="#E8501A" opacity="0.12"/>
      <path d="M440,238 C443,264 443,298 439,318 C436,334 431,338 428,332 C425,326 427,298 429,274 C432,250 440,236 440,238Z" fill="#E8501A" opacity="0.22"/>
      <path d="M310,30 C312,48 313,68 311,82 C309,93 306,97 304,93 C302,89 303,72 305,58 C307,44 310,28 310,30Z" fill="#E8501A" opacity="0.15"/>
      <ellipse cx="60"  cy="490" rx="180" ry="130" fill="#64b5d6" opacity="0.14" transform="rotate(10 60 490)"/>
      <circle  cx="180" cy="560" r="28"             fill="#64b5d6" opacity="0.09"/>
      <circle  cx="20"  cy="390" r="14"             fill="#64b5d6" opacity="0.11"/>
      <path d="M0,560 C40,548 110,554 180,547 C250,540 320,545 380,550 C420,554 435,562 415,567 C395,572 330,570 250,567 C170,564 90,562 30,566 C8,568 -2,562 0,560Z" fill="#64b5d6" opacity="0.11"/>
    </svg>
  )
}

const STATS = [
  { value: '3,200+', label: 'Projects Completed' },
  { value: '4.9★',   label: 'Average Rating'     },
  { value: '24 hrs', label: 'Response Time'       },
  { value: '100%',   label: 'Licensed & Insured'  },
]

function QuoteCTASection() {
  return (
    <section id="contact" style={{ backgroundColor: 'var(--bg-contact)', padding: '96px 0', position: 'relative', overflow: 'hidden' }}>
      <QuotePaintSplash />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="row align-items-center g-5">

          {/* Left: copy + stats */}
          <div className="col-12 col-md-6">
            <div>
              <h2 style={{
                color: '#ffffff',
                fontSize: 'clamp(26px, 3.5vw, 40px)',
                fontWeight: 800,
                marginBottom: '14px',
              }}>
                Ready to Refresh Your Home?
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.80)', fontSize: '16px', lineHeight: 1.7, marginBottom: '32px', maxWidth: '420px' }}>
                Get a no-obligation quote from a licensed local painter today. Most homeowners hear back within 24 hours.
              </p>

              {/* Stats grid */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '28px', maxWidth: '400px' }}>
                {STATS.map(s => (
                  <div key={s.label} style={{
                    background: 'rgba(255,255,255,0.07)',
                    border: '1px solid rgba(255,255,255,0.10)',
                    borderRadius: '12px', padding: '16px 18px',
                    backdropFilter: 'blur(8px)',
                  }}>
                    <div style={{ fontSize: '26px', fontWeight: 800, color: '#ffffff', fontFamily: "'Montserrat',sans-serif", lineHeight: 1 }}>
                      {s.value}
                    </div>
                    <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.58)', marginTop: '5px', fontWeight: 500 }}>
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Trust line */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <ShieldCheck size={18} color="#64b5d6" />
                <span style={{ color: 'rgba(255,255,255,0.68)', fontSize: '13px', fontWeight: 600 }}>
                  All painters are verified, licensed &amp; insured.
                </span>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="col-12 col-md-6">
            <QuoteForm />
          </div>
        </div>
      </div>
    </section>
  )
}

// ── Page root ─────────────────────────────────────────────────────────────────
function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target) } }),
      { threshold: 0.12 }
    )
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <PortfolioGallery />
      <HowItWorks />
      <Testimonials />
      <QuoteCTASection />
      <Footer />
    </>
  )
}

export default Home
