// SectionHeading.jsx
function SectionHeading({ label, title, subtitle, align = 'center', titleColor, subtitleColor, labelColor, brushStroke = false }) {
  const cls = align === 'center' ? 'text-center' : ''
  return (
    <div className={`mb-5 ${cls}`}>
      {label && (
        <p style={{ color: labelColor ?? '#E8501A', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.18em', marginBottom: brushStroke ? '6px' : '12px' }}>
          {label}
        </p>
      )}
      {brushStroke && (
        <svg viewBox="0 0 140 10" width="100" height="8"
          style={{ display: 'block', margin: align === 'center' ? '0 auto 12px' : '0 0 12px', overflow: 'visible' }}>
          <path d="M4,6 C28,2 55,1 80,5 C105,9 120,7 136,5" stroke="#E8501A" strokeWidth="3.5" fill="none" strokeLinecap="round" opacity="0.8"/>
        </svg>
      )}
      <h2 style={{ color: titleColor ?? 'inherit', marginBottom: subtitle ? '12px' : '0' }}>
        {title}
      </h2>
      {subtitle && (
        <p style={{ color: subtitleColor ?? '#6b7a8d', fontSize: '17px', marginTop: '12px' }}>
          {subtitle}
        </p>
      )}
    </div>
  )
}

export default SectionHeading
