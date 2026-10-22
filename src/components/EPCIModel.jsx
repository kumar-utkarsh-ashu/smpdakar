import React, { useState } from 'react';
import { 
  Compass, 
  Truck, 
  Hammer, 
  Anchor, 
  Landmark, 
  Cog, 
  CheckCircle2
} from 'lucide-react';

export default function EPCIModel({ t }) {
  const [selectedStep, setSelectedStep] = useState(0);

  const icons = [
    <Compass size={22} />,
    <Truck size={22} />,
    <Hammer size={22} />,
    <Anchor size={22} />,
    <Landmark size={22} />,
    <Cog size={22} />
  ];

  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--bg-secondary)', borderBottom: '1px solid var(--border-subtle)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header center">
          <div className="section-tag">
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--accent-gold)' }}></span>
            <span>{t.epci.tag}</span>
          </div>
          <h2 className="section-title">{t.epci.title}</h2>
          <p className="section-desc">{t.epci.desc}</p>
        </div>

        {/* 6-Step Diagram Grid - 100% Mobile Responsive */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 160px), 1fr))',
          gap: '0.85rem',
          position: 'relative',
          marginBottom: '1.75rem'
        }}>
          {t.epci.steps.map((step, idx) => {
            const isSelected = selectedStep === idx;
            const isFinancing = idx === 4;

            return (
              <div
                key={idx}
                onClick={() => setSelectedStep(idx)}
                style={{
                  backgroundColor: isSelected 
                    ? 'var(--bg-surface)' 
                    : isFinancing 
                    ? 'rgba(217, 119, 6, 0.08)' 
                    : 'var(--bg-card)',
                  border: isSelected 
                    ? '2px solid var(--accent-gold)' 
                    : isFinancing 
                    ? '1px dashed var(--accent-gold)' 
                    : '1px solid var(--border-subtle)',
                  borderRadius: '8px',
                  padding: '1.15rem 0.85rem',
                  cursor: 'pointer',
                  position: 'relative',
                  transition: 'all 0.2s ease',
                  transform: isSelected ? 'translateY(-2px)' : 'none',
                  boxShadow: isSelected ? '0 8px 20px -6px var(--accent-gold-soft)' : 'none'
                }}
              >
                {/* Step Number */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                  <span style={{
                    fontSize: '0.78rem',
                    fontWeight: 800,
                    fontFamily: 'var(--font-heading)',
                    color: isSelected ? 'var(--accent-gold)' : 'var(--text-dim)',
                    background: 'rgba(255, 255, 255, 0.05)',
                    padding: '0.15rem 0.4rem',
                    borderRadius: '4px'
                  }}>
                    {step.num}
                  </span>

                  <div style={{ color: isSelected ? 'var(--accent-gold)' : isFinancing ? 'var(--accent-gold)' : 'var(--text-muted)' }}>
                    {icons[idx]}
                  </div>
                </div>

                {/* Title */}
                <h3 style={{
                  fontSize: '0.98rem',
                  fontWeight: 700,
                  marginBottom: '0.25rem',
                  color: isSelected ? 'var(--text-main)' : isFinancing ? 'var(--accent-gold)' : 'var(--text-main)',
                  lineHeight: 1.25
                }}>
                  {step.title}
                </h3>
                <div style={{ fontSize: '0.7rem', fontWeight: 600, color: 'var(--text-dim)', textTransform: 'uppercase' }}>
                  {step.sub}
                </div>

                {isFinancing && (
                  <span style={{
                    position: 'absolute',
                    top: '-8px',
                    right: '8px',
                    fontSize: '0.6rem',
                    fontWeight: 800,
                    backgroundColor: 'var(--accent-gold)',
                    color: '#ffffff',
                    padding: '0.1rem 0.4rem',
                    borderRadius: '3px'
                  }}>
                    VF
                  </span>
                )}
              </div>
            );
          })}
        </div>

        {/* Selected Step Deep Dive Card */}
        <div style={{
          backgroundColor: 'var(--bg-surface)',
          border: '1px solid var(--border-strong)',
          borderRadius: '8px',
          padding: 'clamp(1.25rem, 3vw, 2rem)',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          boxShadow: 'var(--shadow-card)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexWrap: 'wrap' }}>
            <span className="badge" style={{ fontSize: '0.75rem' }}>
              Étape {t.epci.steps[selectedStep].num} • {t.epci.steps[selectedStep].title}
            </span>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              {t.epci.steps[selectedStep].sub}
            </span>
          </div>

          <p style={{ fontSize: 'clamp(0.92rem, 1.8vw, 1.02rem)', color: 'var(--text-main)', lineHeight: 1.6 }}>
            {t.epci.steps[selectedStep].desc}
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
            gap: '0.75rem',
            paddingTop: '1rem',
            borderTop: '1px solid var(--border-subtle)',
            fontSize: '0.82rem'
          }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.45rem', color: '#cbd5e1' }}>
              <CheckCircle2 size={15} style={{ color: 'var(--accent-gold)', flexShrink: 0, marginTop: '2px' }} />
              <span>Conforme aux codes internationaux (API, ASME, Eurocodes)</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.45rem', color: '#cbd5e1' }}>
              <CheckCircle2 size={15} style={{ color: 'var(--accent-gold)', flexShrink: 0, marginTop: '2px' }} />
              <span>Contrôles qualité CND & traçabilité matière complète</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.45rem', color: '#cbd5e1' }}>
              <CheckCircle2 size={15} style={{ color: 'var(--accent-gold)', flexShrink: 0, marginTop: '2px' }} />
              <span>Coordination logistique directe via le Port de Dakar</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
