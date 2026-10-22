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
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '1.5rem',
          marginBottom: '2.5rem'
        }}>
          {t.qhse.pillars.map((p, idx) => (
            <div 
              key={idx}
              className="card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.85rem'
              }}
            >
              <div style={{
                width: '42px',
                height: '42px',
                borderRadius: '6px',
                backgroundColor: 'var(--accent-gold-soft)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--accent-gold)'
              }}>
                {icons[idx]}
              </div>

              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-main)' }}>
                {p.title}
              </h3>

              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                {p.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Certification Badges Banner */}
        <div style={{
          backgroundColor: 'var(--bg-surface)',
          border: '1px solid var(--border-strong)',
          borderRadius: '8px',
          padding: '1.5rem 2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1.25rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <ShieldCheck size={28} style={{ color: 'var(--accent-gold)' }} />
            <div>
              <div style={{ fontWeight: 800, fontSize: '0.95rem', color: '#ffffff' }}>
                Conformité aux Standards Internationaux
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>
                Vérifications continues et audits tierce partie
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            {t.qhse.certifications.map((cert, idx) => (
              <span
                key={idx}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid var(--border-subtle)',
                  padding: '0.4rem 0.85rem',
                  borderRadius: '4px',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  color: '#e2e8f0'
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
