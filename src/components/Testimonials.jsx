import TestimonialCard from './TestimonialCard'

const TESTIMONIALS = [
  {
    quote:    'The team was professional, tidy, and the finish is absolutely flawless. Would recommend PaintSites to anyone.',
    reviewer: 'Sarah M.',
    location: 'Melbourne',
    rating:   5,
  },
  {
    quote:    'Quick to respond, fair pricing, and they left the place cleaner than when they arrived. Brilliant service.',
    reviewer: 'James T.',
    location: 'Sydney',
    rating:   5,
  },
  {
    quote:    'Had my entire exterior repainted in just three days. Unbelievable quality for the price. Very happy.',
    reviewer: 'Karen L.',
    location: 'Brisbane',
    rating:   5,
  },
]

function Testimonials() {
  return (
    <section id="testimonials" style={{ backgroundColor: '#ffffff', padding: '96px 0', position: 'relative', overflow: 'hidden' }}>

      {/* Subtle wave at bottom */}
      <svg aria-hidden="true" style={{ position: 'absolute', bottom: 0, left: 0, right: 0, width: '100%', height: '180px', pointerEvents: 'none', opacity: 0.45 }}
        viewBox="0 0 1200 180" preserveAspectRatio="none">
        <path d="M0,120 C200,90 400,150 600,110 C800,70 1000,140 1200,100 L1200,180 L0,180Z" fill="#f8f9fa"/>
      </svg>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>

        {/* Heading with eyebrow + brush stroke */}
        <div className="text-center mb-5">
          <p style={{
            color: '#E8501A', fontSize: '11px', fontWeight: 700,
            textTransform: 'uppercase', letterSpacing: '0.18em', marginBottom: '6px',
          }}>
            Customer Reviews
          </p>
          {/* Brush stroke accent */}
          <svg viewBox="0 0 140 10" width="100" height="8"
            style={{ display: 'block', margin: '0 auto 12px', overflow: 'visible' }}>
            <path d="M4,6 C28,2 55,1 80,5 C105,9 120,7 136,5"
              stroke="#E8501A" strokeWidth="3.5" fill="none" strokeLinecap="round" opacity="0.8"/>
          </svg>
          <h2 style={{ fontSize: 'clamp(26px,3.5vw,36px)', color: '#1a2332', marginBottom: '0' }}>
            What Our Customers Say
          </h2>
        </div>

        {/* Cards */}
        <div className="row g-4">
          {TESTIMONIALS.map((t, i) => (
            <div key={t.reviewer} className={`col-12 col-md-4 reveal reveal-delay-${i + 1}`}>
              <TestimonialCard {...t} />
            </div>
          ))}
        </div>

        {/* Aggregate rating bar */}
        <div style={{ marginTop: '48px', textAlign: 'center' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '12px',
            background: '#f8f9fa', padding: '14px 28px',
            borderRadius: '100px', border: '1px solid rgba(0,0,0,0.06)',
          }}>
            <div style={{ display: 'flex', gap: '2px' }}>
              {[1,2,3,4,5].map(i => (
                <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="#F5A623">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                </svg>
              ))}
            </div>
            <span style={{ fontSize: '15px', fontWeight: 700, color: '#1a2332' }}>4.9</span>
            <span style={{ width: '1px', height: '18px', background: 'rgba(0,0,0,0.12)', display: 'inline-block' }} />
            <span style={{ fontSize: '14px', color: '#6b7a8d' }}>Based on 3,000+ verified reviews</span>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Testimonials
