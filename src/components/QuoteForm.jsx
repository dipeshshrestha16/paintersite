import { useState } from 'react'
import { Loader2 } from 'lucide-react'

const INITIAL = { name: '', phone: '', email: '', suburb: '', jobType: '', message: '' }

const validators = {
  name:    v => v.trim() === '' ? 'Full name is required.' : '',
  phone:   v => v.trim() === '' ? 'Phone number is required.' : '',
  email:   v => {
    if (v.trim() === '') return 'Email address is required.'
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? '' : 'Please enter a valid email address.'
  },
  suburb:  v => v.trim() === '' ? 'Suburb / Postcode is required.' : '',
  jobType: v => v === '' ? 'Please select a job type.' : '',
  message: () => '',
}

function QuoteForm({ onSubmit }) {
  const [data,   setData]   = useState(INITIAL)
  const [errors, setErrors] = useState(INITIAL)
  const [status, setStatus] = useState('idle')

  const validate = (name, value) => (validators[name] ? validators[name](value) : '')

  const handleChange = e => {
    const { name, value } = e.target
    setData(d => ({ ...d, [name]: value }))
    if (errors[name]) setErrors(err => ({ ...err, [name]: validate(name, value) }))
  }

  const handleBlur = e => {
    const { name, value } = e.target
    setErrors(err => ({ ...err, [name]: validate(name, value) }))
  }

  const handleFocus = e => {
    e.target.style.borderColor = 'var(--color-primary)'
    e.target.style.boxShadow   = '0 0 0 3px var(--color-primary-glow)'
  }

  const handleBlurStyle = (fieldName) => e => {
    e.target.style.borderColor = errors[fieldName] ? '#d9534f' : 'transparent'
    e.target.style.boxShadow   = 'none'
    handleBlur(e)
  }

  const handleSubmit = async e => {
    e.preventDefault()
    const newErrors = Object.fromEntries(Object.keys(data).map(k => [k, validate(k, data[k])]))
    setErrors(newErrors)
    if (Object.values(newErrors).some(v => v !== '')) return

    setStatus('submitting')
    try {
      if (onSubmit) {
        await onSubmit(data)
      } else {
        await new Promise(r => setTimeout(r, 1500))
      }
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div style={{
        backgroundColor: '#5cb85c',
        color: '#ffffff',
        padding: '38px',
        borderRadius: '12px',
        textAlign: 'center',
        fontSize: '18px',
        fontWeight: 600,
        lineHeight: '28px',
      }}>
        ✓ Thanks! We'll be in touch within 24 hours.
      </div>
    )
  }

  const fieldStyle = name => ({
    width: '100%',
    background: 'rgba(255,255,255,0.96)',
    border: `2px solid ${errors[name] ? '#d9534f' : 'transparent'}`,
    borderRadius: '8px',
    padding: '12px 16px',
    fontFamily: "'Inter', sans-serif",
    fontSize: '15px',
    color: '#1a2332',
    transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
    outline: 'none',
  })

  const labelStyle = {
    display: 'block',
    marginBottom: '6px',
    fontSize: '14px',
    fontWeight: 600,
    color: 'rgba(255,255,255,0.88)',
  }

  const errorStyle = {
    display: 'block',
    color: '#ff7b6b',
    fontSize: '12px',
    marginTop: '4px',
  }

  const Field = ({ name, label, type = 'text', placeholder, required, autoComplete }) => (
    <div>
      <label htmlFor={`field-${name}`} style={labelStyle}>
        {label}{required && ' *'}
      </label>
      <input
        id={`field-${name}`}
        type={type}
        name={name}
        value={data[name]}
        placeholder={placeholder}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlurStyle(name)}
        style={fieldStyle(name)}
        required={required}
        autoComplete={autoComplete}
      />
      {errors[name] && <span style={errorStyle}>{errors[name]}</span>}
    </div>
  )

  return (
    <div className="reveal" style={{
      background: 'rgba(255,255,255,0.05)',
      borderRadius: '16px',
      padding: '40px 36px',
      border: '1px solid rgba(255,255,255,0.1)',
      backdropFilter: 'blur(8px)',
    }}>
      <form onSubmit={handleSubmit} noValidate>
        {status === 'error' && (
          <div style={{
            backgroundColor: 'rgba(217,83,79,0.15)',
            border: '1px solid #d9534f',
            color: '#ffffff',
            padding: '15px',
            borderRadius: '8px',
            marginBottom: '20px',
            fontSize: '14px',
          }}>
            Something went wrong. Please try again.
          </div>
        )}

        <div className="row g-3">
          <div className="col-12">
            <Field name="name" label="Full Name" placeholder="Your full name" required autoComplete="name" />
          </div>

          <div className="col-12 col-sm-6">
            <Field name="phone" label="Phone Number" type="tel" placeholder="Your phone number" required autoComplete="tel" />
          </div>

          <div className="col-12 col-sm-6">
            <Field name="email" label="Email Address" type="email" placeholder="Your email address" required autoComplete="email" />
          </div>

          <div className="col-12 col-sm-6">
            <Field name="suburb" label="Suburb / Postcode" placeholder="Your suburb or postcode" required autoComplete="postal-code" />
          </div>

          <div className="col-12 col-sm-6">
            <label htmlFor="field-jobType" style={labelStyle}>Type of Job *</label>
            <select
              id="field-jobType"
              name="jobType"
              value={data.jobType}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlurStyle('jobType')}
              style={{ ...fieldStyle('jobType'), appearance: 'auto' }}
              required
            >
              <option value="">Select job type</option>
              <option value="interior">Interior</option>
              <option value="exterior">Exterior</option>
              <option value="commercial">Commercial</option>
              <option value="other">Other</option>
            </select>
            {errors.jobType && <span style={errorStyle}>{errors.jobType}</span>}
          </div>

          <div className="col-12">
            <label htmlFor="field-message" style={labelStyle}>Message</label>
            <textarea
              id="field-message"
              name="message"
              value={data.message}
              placeholder="Tell us about your project…"
              rows={4}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlurStyle('message')}
              style={{ ...fieldStyle('message'), resize: 'vertical', minHeight: '120px' }}
            />
          </div>

          <div className="col-12">
            <button
              type="submit"
              disabled={status === 'submitting'}
              style={{
                width: '100%',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'var(--color-primary)',
                color: '#ffffff',
                border: 'none',
                borderRadius: '6px',
                padding: '16px',
                fontFamily: "'Inter', sans-serif",
                fontSize: '16px',
                fontWeight: 700,
                letterSpacing: '0.01em',
                cursor: status === 'submitting' ? 'not-allowed' : 'pointer',
                transition: 'background 0.2s ease, box-shadow 0.2s ease, transform 0.15s ease',
                boxShadow: '0 4px 14px var(--color-primary-glow)',
                marginTop: '8px',
                gap: '8px',
                opacity: status === 'submitting' ? 0.8 : 1,
              }}
              onMouseEnter={e => {
                if (status !== 'submitting') {
                  e.currentTarget.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--color-primary-hover').trim()
                  e.currentTarget.style.boxShadow = '0 6px 20px var(--color-primary-glow)'
                  e.currentTarget.style.transform = 'translateY(-2px)'
                }
              }}
              onMouseLeave={e => {
                e.currentTarget.style.backgroundColor = 'var(--color-primary)'
                e.currentTarget.style.boxShadow = '0 4px 14px var(--color-primary-glow)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
              onMouseDown={e => { e.currentTarget.style.transform = 'translateY(0)' }}
            >
              {status === 'submitting' ? (
                <>
                  <Loader2 size={18} style={{ animation: 'rotation 0.8s linear infinite' }} />
                  Sending…
                </>
              ) : (
                'Send My Quote Request'
              )}
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default QuoteForm
