import React from 'react';
import { Award, Fuel, Construction, ShieldCheck, Globe2 } from 'lucide-react';

export default function KeyFigures({ t }) {
  const icons = [
    <Award size={28} />,
    <Fuel size={28} />,
    <Construction size={28} />,
    <ShieldCheck size={28} />,
    <Globe2 size={28} />
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

        {/* Figures Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1.5rem'
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
                padding: '2.5rem 1.5rem',
                position: 'relative'
              }}
            >
              <div style={{
                color: 'var(--accent-gold)',
                marginBottom: '1rem',
                background: 'var(--accent-gold-soft)',
                padding: '0.75rem',
                borderRadius: '8px'
              }}>
                {icons[idx]}
              </div>

              <div style={{
                fontSize: 'clamp(2.4rem, 4vw, 3.2rem)',
                fontWeight: 800,
                color: 'var(--text-main)',
                fontFamily: 'var(--font-heading)',
                lineHeight: 1,
                marginBottom: '0.4rem',
                display: 'flex',
                alignItems: 'baseline',
                gap: '0.2rem'
              }}>
                <span>{item.number}</span>
                {item.unit && (
                  <span style={{ fontSize: '1.25rem', color: 'var(--accent-gold)', fontWeight: 700 }}>
                    {item.unit}
                  </span>
                )}
              </div>

              <div style={{
                fontSize: '0.95rem',
                fontWeight: 700,
                color: 'var(--text-main)',
                marginBottom: '0.35rem'
              }}>
                {item.label}
              </div>

              <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)', lineHeight: 1.4 }}>
                {item.note}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
