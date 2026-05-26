import StepItem from './StepItem'

const STEPS = [
  {
    stepNumber: 1,
    title: 'Request a Quote',
    description: "Fill out our quick form and tell us about your project. We'll respond within 24 hours.",
  },
  {
    stepNumber: 2,
    title: 'Get a Free On-Site Estimate',
    description: 'A qualified painter visits your property, assesses the scope, and provides a written quote.',
  },
  {
    stepNumber: 3,
    title: 'Sit Back While We Paint',
    description: 'Your chosen painter completes the job to spec, on time, with full clean-up included.',
  },
]

function HowItWorks() {
  return (
    <section style={{ backgroundColor: '#f8f9fa', padding: '96px 0' }}>
      <div className="container">
        <div className="text-center" style={{ marginBottom: '64px' }}>
          <h2 style={{ fontSize: '36px', color: '#1a2332', marginBottom: '12px' }}>
            Getting Started is Simple
          </h2>
          <p style={{ fontSize: '17px', color: '#6b7a8d' }}>
            Three easy steps to a freshly painted home.
          </p>
        </div>

        <div
          className="steps-container"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '32px',
            position: 'relative',
          }}
        >
          {STEPS.map((step, i) => (
            <div key={step.stepNumber} className={`reveal reveal-delay-${i + 1}`}>
              <StepItem {...step} />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .steps-container::before {
            content: '';
            position: absolute;
            top: 28px;
            left: calc(16.66% + 28px);
            right: calc(16.66% + 28px);
            height: 2px;
            border-top: 2px dashed rgba(232, 80, 26, 0.35);
            z-index: 0;
          }
        }
        @media (max-width: 767px) {
          .steps-container {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}

export default HowItWorks
