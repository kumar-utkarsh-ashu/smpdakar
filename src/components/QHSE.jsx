import React from 'react';
import { ShieldCheck, HeartPulse, Leaf, Users, CheckCircle } from 'lucide-react';

export default function QHSE({ t }) {
  const icons = [
    <ShieldCheck size={24} />,
    <HeartPulse size={24} />,
    <Leaf size={24} />,
    <Users size={24} />
  ];

  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--bg-primary)', borderBottom: '1px solid var(--border-subtle)' }}>
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="section-tag">
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--accent-gold)' }}></span>
            <span>{t.qhse.tag}</span>
          </div>
          <h2 className="section-title">{t.qhse.title}</h2>
          <p className="section-desc">{t.qhse.desc}</p>
        </div>

        {/* 4 Pillars Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))',
          gap: '1.25rem',
          marginBottom: '2rem'
        }}>
          {t.qhse.pillars.map((p, idx) => (
            <div 
              key={idx}
              className="card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem'
              }}
            >
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '6px',
                backgroundColor: 'var(--accent-gold-soft)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--accent-gold)'
              }}>
                {icons[idx]}
              </div>

              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-main)' }}>
                {p.title}
              </h3>

              <p style={{ fontSize: '0.86rem', color: 'var(--text-muted)', lineHeight: 1.55 }}>
                {p.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Certification Badges Banner with high contrast */}
        <div style={{
          backgroundColor: 'var(--bg-surface)',
          border: '1px solid var(--border-strong)',
          borderRadius: '8px',
          padding: 'clamp(1rem, 2.5vw, 1.5rem)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <ShieldCheck size={26} style={{ color: 'var(--accent-gold)' }} />
            <div>
              <div style={{ fontWeight: 800, fontSize: '0.92rem', color: 'var(--text-main)' }}>
                Conformité aux Standards Internationaux
              </div>
              <div style={{ fontSize: '0.74rem', color: 'var(--text-dim)' }}>
                Vérifications continues et audits tierce partie
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {t.qhse.certifications.map((cert, idx) => (
              <span
                key={idx}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  backgroundColor: 'var(--bg-card)',
                  border: '1px solid var(--border-subtle)',
                  padding: '0.35rem 0.75rem',
                  borderRadius: '4px',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  color: 'var(--text-main)',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
                }}
              >
                <CheckCircle size={13} style={{ color: 'var(--accent-gold)' }} />
                <span>{cert}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
