import { useState, useEffect, useRef } from 'react'
import PortfolioTile from './PortfolioTile'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const PORTFOLIO = [
  { image: 'https://images.bergerpaints.com/s3fs-public/inline-images/Green%20And%20White%20Kitchen%20Colour%20Combination.png?VersionId=ItSPJbutkemhxw0TZ9kAi9NRUmc7McX5&format=webp&width=1920&quality=75', projectName: 'Kitchen Refresh',          category: 'Interior',   fallbackColor: '#f5f0e8' },
  { image: 'https://images.pexels.com/photos/7031407/pexels-photo-7031407.jpeg?_gl=1*12rny94*_ga*MTIzMzk0ODI2NC4xNzc5MzQxODQw*_ga_8JE65Q40S6*czE3Nzk3Nzg0MjEkbzMkZzEkdDE3Nzk3Nzg5NTEkajUzJGwwJGgw', projectName: 'Coastal Grey Exterior',    category: 'Exterior',   fallbackColor: '#8d9ea7' },
  { image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80', projectName: 'Sage Living Room',         category: 'Interior',   fallbackColor: '#7d9e7d' },
  { image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80', projectName: 'Charcoal Office Feature', category: 'Commercial', fallbackColor: '#4a5568' },
  { image: 'https://images.unsplash.com/photo-1489171078254-c3365d6e359f?w=600&q=80', projectName: 'Deck Stain & Seal',       category: 'Exterior',   fallbackColor: '#8b6347' },
  { image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&q=80', projectName: 'Victorian Terrace',       category: 'Exterior',   fallbackColor: '#2d3748' },
]

const N       = PORTFOLIO.length  // 6
const PER     = 3                 // visible at once (desktop)
const MAX_IDX = N - PER           // 3

function ViewGalleryBtn() {
  const [hovered, setHovered] = useState(false)
  return (
    <a href="/gallery"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        background: hovered ? 'rgba(255,255,255,0.1)' : 'transparent',
        color: '#ffffff',
        border: `2px solid ${hovered ? '#ffffff' : 'rgba(255,255,255,0.55)'}`,
        borderRadius: '6px', padding: '11px 28px', fontSize: '15px', fontWeight: 600,
        textDecoration: 'none', transition: 'all 0.2s ease',
        transform: hovered ? 'translateY(-2px)' : 'translateY(0)',
      }}
    >
      View Full Gallery
    </a>
  )
}

function PortfolioGallery() {
  const [idx,    setIdx]    = useState(0)
  const [paused, setPaused] = useState(false)
  const timerRef            = useRef(null)

  const prev = () => setIdx(i => Math.max(0, i - 1))
  const next = () => setIdx(i => Math.min(MAX_IDX, i + 1))

  useEffect(() => {
    if (paused) return
    timerRef.current = setInterval(() => setIdx(i => i >= MAX_IDX ? 0 : i + 1), 4200)
    return () => clearInterval(timerRef.current)
  }, [paused])

  // Carousel maths — track is N/PER * 100% wide; each item = 100/N % of track
  // translateX in track-% = -(idx / N) * 100
  const trackW    = `${(N / PER) * 100}%`
  const itemW     = `${100 / N}%`
  const translate = `${-(idx / N) * 100}%`

  return (
    <section id="portfolio" style={{ backgroundColor: '#2c3a4a', padding: '96px 0' }}>
      <div className="container">

        {/* Header */}
        <div className="text-center mb-5">
          <span style={{
            fontSize: '11px', fontWeight: 700, letterSpacing: '0.18em',
            color: '#64b5d6', textTransform: 'uppercase', display: 'block', marginBottom: '10px',
          }}>
            Our Work
          </span>
          <h2 style={{ color: '#ffffff', fontSize: 'clamp(26px,3.5vw,38px)', marginBottom: '10px' }}>
            Our Recent Work
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.62)', fontSize: '17px' }}>
            Every project tells a story. Here are a few we're proud of.
          </p>
        </div>

        {/* Carousel */}
        <div
          style={{ position: 'relative' }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Track wrapper */}
          <div style={{ overflow: 'hidden', borderRadius: '4px' }}>
            <div style={{
              display: 'flex',
              width: trackW,
              transform: `translateX(${translate})`,
              transition: 'transform 0.55s cubic-bezier(0.25,0.46,0.45,0.94)',
            }}>
              {PORTFOLIO.map(item => (
                <div key={item.projectName} style={{ width: itemW, padding: '0 8px', flexShrink: 0 }}>
                  <PortfolioTile {...item} />
                </div>
              ))}
            </div>
          </div>

          {/* Prev arrow */}
          <button onClick={prev} disabled={idx === 0} aria-label="Previous"
            style={{
              position: 'absolute', top: '50%', left: '-20px', transform: 'translateY(-50%)',
              width: '46px', height: '46px', borderRadius: '50%',
              background: idx === 0 ? 'rgba(255,255,255,0.12)' : '#E8501A',
              border: 'none', cursor: idx === 0 ? 'default' : 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 4px 16px rgba(0,0,0,0.3)',
              opacity: idx === 0 ? 0.45 : 1,
              transition: 'background 0.2s, opacity 0.2s',
              zIndex: 2,
            }}>
            <ChevronLeft size={20} color="#fff" strokeWidth={2.5} />
          </button>

          {/* Next arrow */}
          <button onClick={next} disabled={idx === MAX_IDX} aria-label="Next"
            style={{
              position: 'absolute', top: '50%', right: '-20px', transform: 'translateY(-50%)',
              width: '46px', height: '46px', borderRadius: '50%',
              background: idx === MAX_IDX ? 'rgba(255,255,255,0.12)' : '#E8501A',
              border: 'none', cursor: idx === MAX_IDX ? 'default' : 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 4px 16px rgba(0,0,0,0.3)',
              opacity: idx === MAX_IDX ? 0.45 : 1,
              transition: 'background 0.2s, opacity 0.2s',
              zIndex: 2,
            }}>
            <ChevronRight size={20} color="#fff" strokeWidth={2.5} />
          </button>
        </div>

        {/* Dot indicators */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '28px' }}>
          {Array.from({ length: MAX_IDX + 1 }).map((_, i) => (
            <button key={i} onClick={() => setIdx(i)} aria-label={`Go to position ${i + 1}`}
              style={{
                width: idx === i ? '28px' : '10px', height: '10px',
                borderRadius: '100px', border: 'none', cursor: 'pointer', padding: 0,
                background: idx === i ? '#E8501A' : 'rgba(255,255,255,0.28)',
                transition: 'width 0.3s ease, background 0.3s ease',
              }}
            />
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <ViewGalleryBtn />
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          /* Show 1 tile on mobile — override PER to 1 */
          .carousel-track { transform: translateX(-${idx * (100 / 1)}%) !important; }
        }
      `}</style>
    </section>
  )
}

export default PortfolioGallery
