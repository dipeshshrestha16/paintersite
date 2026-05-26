import { useEffect, useState } from 'react'

// ── Paint splash background SVG ───────────────────────────────────────────────
function HeroPaintBackground() {
  return (
    <svg viewBox="0 0 1200 700" preserveAspectRatio="xMidYMid slice" aria-hidden="true"
      style={{ position:'absolute', inset:0, width:'100%', height:'100%', pointerEvents:'none', zIndex:0 }}>
      <ellipse cx="1050" cy="80"  rx="240" ry="170" fill="#E8501A" opacity="0.13" transform="rotate(-18 1050 80)"/>
      <ellipse cx="980"  cy="50"  rx="100" ry="70"  fill="#E8501A" opacity="0.08" transform="rotate(-10 980 50)"/>
      <circle  cx="870"  cy="30"  r="28"             fill="#E8501A" opacity="0.09"/>
      <circle  cx="1150" cy="200" r="18"             fill="#E8501A" opacity="0.07"/>
      <circle  cx="820"  cy="160" r="10"             fill="#E8501A" opacity="0.11"/>
      <path d="M1090,230 C1093,258 1093,292 1089,312 C1086,328 1081,332 1078,326 C1075,320 1077,292 1079,268 C1082,244 1090,228 1090,230Z" fill="#E8501A" opacity="0.18"/>
      <path d="M940,195 C942,210 943,228 941,240 C939,250 936,253 934,249 C932,245 933,230 935,218 C937,206 940,193 940,195Z" fill="#E8501A" opacity="0.12"/>
      <ellipse cx="100"  cy="580" rx="200" ry="140" fill="#64b5d6" opacity="0.10" transform="rotate(12 100 580)"/>
      <circle  cx="220"  cy="640" r="30"             fill="#64b5d6" opacity="0.07"/>
      <circle  cx="40"   cy="480" r="18"             fill="#64b5d6" opacity="0.09"/>
      <circle  cx="55"   cy="280" r="9"              fill="#E8501A" opacity="0.07"/>
      <circle  cx="30"   cy="260" r="5"              fill="#E8501A" opacity="0.10"/>
      <path d="M700,680 C750,668 840,672 920,665 C1000,658 1080,662 1150,668 C1190,671 1200,678 1180,683 C1160,688 1100,686 1010,683 C920,680 820,678 740,682 C710,684 696,682 700,680Z" fill="#64b5d6" opacity="0.07"/>
    </svg>
  )
}

// ── Trending Colour Palette card ──────────────────────────────────────────────
const TREND_COLOURS = [
  {
    hex: '#8B7355', name: 'Mocha Clay',
    theme: {
      heroBg:       'linear-gradient(135deg, #2a1f14 0%, #3d2d1e 60%, #261a0e 100%)',
      navBg:        '#2e231a',
      contactBg:    '#3d2d1e',
      primary:      '#d4a44c',
      primaryHover: '#b8882e',
      primaryGlow:  'rgba(212,164,76,0.35)',
    },
  },
  {
    hex: '#7D9E7D', name: 'Sage Mist',
    theme: {
      heroBg:       'linear-gradient(135deg, #1a2e1f 0%, #243d28 60%, #152818 100%)',
      navBg:        '#1e3022',
      contactBg:    '#243d28',
      primary:      '#e8943c',
      primaryHover: '#c97828',
      primaryGlow:  'rgba(232,148,60,0.35)',
    },
  },
  {
    hex: '#EDE8E0', name: 'Warm Cream',
    theme: {
      heroBg:       'linear-gradient(135deg, #2a2620 0%, #3d3729 60%, #252018 100%)',
      navBg:        '#2e2820',
      contactBg:    '#3d3729',
      primary:      '#c4704a',
      primaryHover: '#a05535',
      primaryGlow:  'rgba(196,112,74,0.35)',
    },
  },
  {
    hex: '#4A6FA5', name: 'Coastal Blue',
    theme: {
      heroBg:       'linear-gradient(135deg, #0f1f35 0%, #183050 60%, #0c1f3f 100%)',
      navBg:        '#152540',
      contactBg:    '#183050',
      primary:      '#f0b030',
      primaryHover: '#d4941c',
      primaryGlow:  'rgba(240,176,48,0.35)',
    },
  },
  {
    hex: '#C4704A', name: 'Terracotta',
    theme: {
      heroBg:       'linear-gradient(135deg, #2a1510 0%, #3d2218 60%, #281008 100%)',
      navBg:        '#2e1a10',
      contactBg:    '#3d2218',
      primary:      '#e8c44a',
      primaryHover: '#c9a832',
      primaryGlow:  'rgba(232,196,74,0.35)',
    },
  },
]

function applyTheme(t) {
  const root = document.documentElement
  root.style.setProperty('--bg-hero',            t.heroBg)
  root.style.setProperty('--bg-nav',             t.navBg)
  root.style.setProperty('--bg-contact',         t.contactBg)
  root.style.setProperty('--color-primary',      t.primary)
  root.style.setProperty('--color-primary-hover',t.primaryHover)
  root.style.setProperty('--color-primary-glow', t.primaryGlow)
  root.style.setProperty('--color-text-link',    t.primary)
}

function resetTheme() {
  const root = document.documentElement
  ;['--bg-hero','--bg-nav','--bg-contact',
    '--color-primary','--color-primary-hover','--color-primary-glow','--color-text-link',
  ].forEach(v => root.style.removeProperty(v))
}

function TrendingPalette({ active, onSelect }) {
  return (
    <div style={{
      position:'absolute', bottom:'20px', left:'-12px',
      background:'rgba(255,255,255,0.97)', backdropFilter:'blur(16px)',
      borderRadius:'16px', padding:'14px 18px',
      boxShadow:'0 12px 48px rgba(0,0,0,0.28), 0 2px 8px rgba(0,0,0,0.12)',
      width:'228px', zIndex:10, border:'1px solid rgba(255,255,255,0.9)',
    }}>
      <div style={{ display:'flex', alignItems:'center', gap:'6px', marginBottom:'10px' }}>
        <span style={{ fontSize:'9px', fontWeight:700, letterSpacing:'0.16em', color:'var(--color-primary)', textTransform:'uppercase' }}>
          Trending Colours
        </span>
        <span style={{ fontSize:'9px', background:'var(--color-primary)', color:'#fff', padding:'2px 7px', borderRadius:'100px', fontWeight:700 }}>
          2026
        </span>
      </div>
      <div style={{ display:'flex', gap:'6px', marginBottom:'10px' }}>
        {TREND_COLOURS.map(c => (
          <div key={c.hex} title={c.name}
            onClick={() => onSelect(c)}
            style={{
              width:'34px', height:'34px', borderRadius:'8px', background:c.hex,
              border: active===c.hex ? '2.5px solid rgba(0,0,0,0.45)' : '2px solid rgba(0,0,0,0.08)',
              boxShadow:'0 2px 8px rgba(0,0,0,0.15)', cursor:'pointer', flexShrink:0,
              transition:'transform 0.15s ease, border-color 0.15s ease',
              transform: active===c.hex ? 'scale(1.18) translateY(-3px)' : 'scale(1)',
            }}
          />
        ))}
      </div>
      <p style={{ fontSize:'11px', color: active ? '#1a2332' : '#6b7a8d', margin:0, fontWeight: active ? 600 : 400 }}>
        {active ? `${TREND_COLOURS.find(c=>c.hex===active)?.name} — ask your painter` : 'Tap a colour to explore →'}
      </p>
    </div>
  )
}

// ── Hero Section ──────────────────────────────────────────────────────────────
function HeroSection({
  eyebrow      = 'Professional Painting Services',
  heading      = 'Transform Your Space with Expert Painters',
  subheading   = 'PaintSites connects homeowners with trusted, licensed painters across the region. Interior, exterior, and commercial — done right the first time.',
  primaryCta   = 'Get a Free Quote',
  secondaryCta = 'View Our Work',
}) {
  const [loaded, setLoaded] = useState(false)
  const [activeColour, setActiveColour] = useState(null)

  useEffect(() => { const t = setTimeout(() => setLoaded(true), 80); return () => clearTimeout(t) }, [])

  const handleColourSelect = (colour) => {
    if (activeColour === colour.hex) {
      setActiveColour(null)
      resetTheme()
    } else {
      setActiveColour(colour.hex)
      applyTheme(colour.theme)
    }
  }

  const scrollTo = id => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <>
      <style>{`
        .hero-section {
          min-height: 100vh;
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          gap: 48px;
          padding: 80px 80px 60px;
          background: var(--bg-hero);
          position: relative;
          overflow: hidden;
        }
        @media (max-width: 767px) {
          .hero-section { grid-template-columns: 1fr !important; padding: 80px 24px 60px !important; min-height: auto !important; }
          .hero-image-col { display: none !important; }
        }
        .bounce-in-left { opacity:0; transform:translateX(-30px); transition:opacity .65s ease, transform .65s ease; }
        .bounce-in-left.is-visible { opacity:1; transform:translateX(0); }
        .hero-img-fade { opacity:0; transform:translateX(20px); transition:opacity .7s ease .2s, transform .7s ease .2s; }
        .hero-img-fade.is-visible { opacity:1; transform:translateX(0); }
        .h-btn-primary {
          display:inline-flex; align-items:center; justify-content:center;
          background:var(--color-primary); color:#fff; border:none; border-radius:6px;
          padding:13px 26px; font-size:15px; font-weight:700; cursor:pointer;
          font-family:'Inter',sans-serif;
          box-shadow:0 4px 14px var(--color-primary-glow);
          transition:background .2s,box-shadow .2s,transform .15s;
        }
        .h-btn-primary:hover { background:var(--color-primary-hover); box-shadow:0 6px 22px var(--color-primary-glow); transform:translateY(-2px); }
        .h-btn-secondary {
          display:inline-flex; align-items:center; justify-content:center;
          background:transparent; color:#fff; border:2px solid rgba(255,255,255,0.55);
          border-radius:6px; padding:11px 24px; font-size:15px; font-weight:600;
          cursor:pointer; transition:all .2s;
        }
        .h-btn-secondary:hover { background:rgba(255,255,255,0.1); border-color:#fff; transform:translateY(-2px); }
        @keyframes drip { 0%,100%{transform:scaleY(1)} 50%{transform:scaleY(1.04)} }
        .drip-anim { animation:drip 3s ease-in-out infinite; transform-origin:top center; }
      `}</style>

      <section className="hero-section">
        <HeroPaintBackground />

        {/* Left: text */}
        <div className={`bounce-in-left${loaded?' is-visible':''}`} style={{ position:'relative', zIndex:1 }}>
          <span style={{ fontSize:'11px', fontWeight:700, letterSpacing:'0.18em', color:'#64b5d6', textTransform:'uppercase', marginBottom:'16px', display:'block' }}>
            {eyebrow}
          </span>
          <h1 style={{ fontSize:'clamp(36px,4.5vw,60px)', color:'#fff', fontFamily:"'Montserrat',sans-serif", fontWeight:800, lineHeight:1.08, marginBottom:'20px' }}>
            {heading}
          </h1>
          <p style={{ fontSize:'17px', color:'rgba(255,255,255,0.78)', lineHeight:1.75, maxWidth:'480px', marginBottom:'36px' }}>
            {subheading}
          </p>
          <div style={{ display:'flex', gap:'14px', flexWrap:'wrap' }}>
            <button className="h-btn-primary" onClick={() => scrollTo('contact')}>{primaryCta}</button>
            <button className="h-btn-secondary" onClick={() => scrollTo('portfolio')}>{secondaryCta}</button>
          </div>
          <div style={{ display:'flex', flexWrap:'wrap', gap:'18px', marginTop:'36px', fontSize:'13px', fontWeight:500, color:'rgba(255,255,255,0.6)' }}>
            {['✓ 3,000+ Projects','✓ 4.9★ Rated','✓ Licensed & Insured','✓ Same-Week Availability'].map(t=>(
              <span key={t}>{t}</span>
            ))}
          </div>
        </div>

        {/* Right: image + palette */}
        <div className={`hero-image-col hero-img-fade${loaded?' is-visible':''}`} style={{ position:'relative', zIndex:1 }}>
          {/* Glow blobs */}
          <div style={{ position:'absolute', top:'-30px', right:'-40px', width:'220px', height:'220px', borderRadius:'50%', background:'radial-gradient(circle,rgba(232,80,26,0.22) 0%,transparent 70%)', filter:'blur(24px)', pointerEvents:'none' }}/>
          <div style={{ position:'absolute', bottom:'-20px', left:'10px', width:'160px', height:'160px', borderRadius:'50%', background:'radial-gradient(circle,rgba(100,181,214,0.22) 0%,transparent 70%)', filter:'blur(18px)', pointerEvents:'none' }}/>
          {/* Drip decoration */}
          <svg className="drip-anim" style={{ position:'absolute', top:'-18px', right:'28px', zIndex:0, pointerEvents:'none' }} width="64" height="88" viewBox="0 0 64 88">
            <path d="M32,0 C34,18 36,42 33,62 C31,76 27,82 25,78 C23,74 24,62 26,48 C28,30 30,14 32,0Z" fill="#E8501A" opacity="0.22"/>
            <circle cx="25" cy="80" r="7" fill="#E8501A" opacity="0.22"/>
            <path d="M50,8 C51,20 52,35 50,46 C48,55 46,59 44,56 C42,53 43,44 45,34 C47,22 49,10 50,8Z" fill="#E8501A" opacity="0.13"/>
            <circle cx="44" cy="58" r="5" fill="#E8501A" opacity="0.13"/>
          </svg>
          {/* Photo */}
          <div style={{ position:'relative', borderRadius:'16px', overflow:'hidden', boxShadow:'0 24px 64px rgba(0,0,0,0.45)', aspectRatio:'4/3', zIndex:1 }}>
            <img
              src="https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=700&q=80"
              alt="Professional painter at work"
              style={{ width:'100%', height:'100%', objectFit:'cover' }}
            />
            <div style={{ position:'absolute', top:0, right:0, width:'140px', height:'140px', background:'radial-gradient(circle at top right,rgba(232,80,26,0.28) 0%,transparent 65%)' }}/>
          </div>
          <TrendingPalette active={activeColour} onSelect={handleColourSelect} />
        </div>
      </section>
    </>
  )
}

export default HeroSection
