import React, { useState } from 'react';
import { 
  Compass, 
  Truck, 
  Hammer, 
  Anchor, 
  Landmark, 
  Cog, 
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

export default function EPCIModel({ t }) {
  const [selectedStep, setSelectedStep] = useState(0);

  const icons = [
    <Compass size={24} />,
    <Truck size={24} />,
    <Hammer size={24} />,
    <Anchor size={24} />,
    <Landmark size={24} />,
    <Cog size={24} />
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

        {/* 6-Step Diagram Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '1rem',
          position: 'relative',
          marginBottom: '2rem'
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
                  padding: '1.4rem 1rem',
                  cursor: 'pointer',
                  position: 'relative',
                  transition: 'all 0.2s ease',
                  transform: isSelected ? 'translateY(-4px)' : 'none',
                  boxShadow: isSelected ? '0 12px 25px -8px var(--accent-gold-soft)' : 'none'
                }}
              >
                {/* Step Number */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <span style={{
                    fontSize: '0.85rem',
                    fontWeight: 800,
                    fontFamily: 'var(--font-heading)',
                    color: isSelected ? 'var(--accent-gold)' : 'var(--text-dim)',
                    background: 'rgba(255, 255, 255, 0.05)',
                    padding: '0.2rem 0.5rem',
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
                  fontSize: '1.05rem',
                  fontWeight: 700,
                  marginBottom: '0.35rem',
                  color: isSelected ? 'var(--text-main)' : isFinancing ? 'var(--accent-gold)' : 'var(--text-main)'
                }}>
                  {step.title}
                </h3>
                <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-dim)', textTransform: 'uppercase' }}>
                  {step.sub}
                </div>

                {isFinancing && (
                  <span style={{
                    position: 'absolute',
                    top: '-10px',
                    right: '10px',
                    fontSize: '0.65rem',
                    fontWeight: 800,
                    backgroundColor: 'var(--accent-gold)',
                    color: '#ffffff',
                    padding: '0.15rem 0.45rem',
                    borderRadius: '3px'
                  }}>
                    Différenciateur VF
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
          padding: '2rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          boxShadow: 'var(--shadow-card)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
            <span className="badge" style={{ fontSize: '0.8rem' }}>
              Étape {t.epci.steps[selectedStep].num} • {t.epci.steps[selectedStep].title}
            </span>
            <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
              {t.epci.steps[selectedStep].sub}
            </span>
          </div>

          <p style={{ fontSize: '1.05rem', color: 'var(--text-main)', lineHeight: 1.6 }}>
            {t.epci.steps[selectedStep].desc}
          </p>

          <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', paddingTop: '1rem', borderTop: '1px solid var(--border-subtle)', fontSize: '0.85rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#cbd5e1' }}>
              <CheckCircle2 size={16} style={{ color: 'var(--accent-gold)' }} />
              <span>Livrables conformes aux codes internationaux (API, ASME, Eurocodes)</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#cbd5e1' }}>
              <CheckCircle2 size={16} style={{ color: 'var(--accent-gold)' }} />
              <span>Contrôles qualité CND & traçabilité matière complète</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#cbd5e1' }}>
              <CheckCircle2 size={16} style={{ color: 'var(--accent-gold)' }} />
              <span>Coordination intégrée avec le Port et les chantiers de Dakar</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
