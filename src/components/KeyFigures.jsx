import React from 'react';
import { Award, Fuel, Construction, ShieldCheck, Globe2 } from 'lucide-react';

export default function KeyFigures({ t }) {
  const icons = [
    <Award size={24} />,
    <Fuel size={24} />,
    <Construction size={24} />,
    <ShieldCheck size={24} />,
    <Globe2 size={24} />
  ];

  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--bg-primary)', borderBottom: '1px solid var(--border-subtle)' }}>
      <div className="container">
        {/* Header */}
        <div className="section-header center">
          <div className="section-tag">
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--accent-gold)' }}></span>
            <span>{t.figures.tag}</span>
          </div>
          <h2 className="section-title">{t.figures.title}</h2>
          <p className="section-desc">{t.figures.desc}</p>
        </div>

        {/* Figures Grid - 100% Responsive */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 190px), 1fr))',
          gap: '1rem'
        }}>
          {t.figures.list.map((item, idx) => (
            <div 
              key={idx}
              className="card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                padding: 'clamp(1.5rem, 3vw, 2.2rem) 1rem',
                position: 'relative'
              }}
            >
              <div style={{
                color: 'var(--accent-gold)',
                marginBottom: '0.75rem',
                background: 'var(--accent-gold-soft)',
                padding: '0.6rem',
                borderRadius: '8px'
              }}>
                {icons[idx]}
              </div>

              <div style={{
                fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
                fontWeight: 800,
                color: 'var(--text-main)',
                fontFamily: 'var(--font-heading)',
                lineHeight: 1,
                marginBottom: '0.35rem',
                display: 'flex',
                alignItems: 'baseline',
                gap: '0.2rem',
                flexWrap: 'wrap',
                justifyContent: 'center'
              }}>
                <span>{item.number}</span>
                {item.unit && (
                  <span style={{ fontSize: '1.1rem', color: 'var(--accent-gold)', fontWeight: 700 }}>
                    {item.unit}
                  </span>
                )}
              </div>

              <div style={{
                fontSize: '0.9rem',
                fontWeight: 700,
                color: 'var(--text-main)',
                marginBottom: '0.25rem'
              }}>
                {item.label}
              </div>

              <div style={{ fontSize: '0.74rem', color: 'var(--text-dim)', lineHeight: 1.35 }}>
                {item.note}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
