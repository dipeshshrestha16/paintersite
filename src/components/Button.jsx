function Button({ variant = 'primary', size = 'md', label, onClick, type = 'button', disabled = false, children, style = {} }) {
  const sizes = {
    sm: { padding: '6px 15px',  fontSize: '13px', fontWeight: '400' },
    md: { padding: '10px 25px', fontSize: '14px', fontWeight: '600' },
    lg: { padding: '15px 38px', fontSize: '16px', fontWeight: '600' },
  }

  const variants = {
    primary:   { background: 'var(--color-secondary)', color: '#ffffff', border: 'none' },
    secondary: { background: 'var(--color-primary)',   color: '#ffffff', border: 'none' },
    ghost:     { background: 'transparent', color: 'currentColor', border: '2px solid currentColor' },
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      style={{
        ...variants[variant],
        ...sizes[size],
        borderRadius: 'var(--radius-xs)',
        fontFamily: 'var(--font-primary)',
        cursor: disabled ? 'not-allowed' : 'pointer',
        transition: 'all 0.3s ease',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
        opacity: disabled ? 0.7 : 1,
        ...style,
      }}
      onMouseEnter={e => { if (!disabled) e.currentTarget.style.filter = 'brightness(0.9)' }}
      onMouseLeave={e => { e.currentTarget.style.filter = 'brightness(1)' }}
    >
      {children ?? label}
    </button>
  )
}

export default Button
