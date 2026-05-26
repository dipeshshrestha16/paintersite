function StepItem({ stepNumber, title, description }) {
  return (
    <div className="text-center px-3">
      <div style={{
        width: '56px',
        height: '56px',
        borderRadius: '50%',
        backgroundColor: '#E8501A',
        color: '#ffffff',
        fontFamily: "'Montserrat', sans-serif",
        fontSize: '22px',
        fontWeight: 800,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0 auto 24px',
        position: 'relative',
        zIndex: 1,
        boxShadow: '0 4px 16px rgba(232, 80, 26, 0.38)',
      }}>
        {stepNumber}
      </div>
      <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#1a2332', textAlign: 'center', marginBottom: '10px' }}>
        {title}
      </h3>
      <p style={{ fontSize: '15px', color: '#6b7a8d', lineHeight: 1.65, textAlign: 'center' }}>
        {description}
      </p>
    </div>
  )
}

export default StepItem
