import React from 'react';
import { Landmark, ArrowRight, Building2, Coins, Clock } from 'lucide-react';

export default function VendorFinancing({ t, onContactClick }) {
  return (
    <section className="section-padding" style={{
      backgroundColor: 'var(--bg-secondary)',
      borderBottom: '1px solid var(--border-subtle)',
      position: 'relative'
    }}>
      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div style={{
          backgroundColor: 'var(--bg-surface)',
          border: '1px solid var(--border-strong)',
          borderRadius: '10px',
          padding: 'clamp(1.5rem, 4vw, 2.75rem)',
          boxShadow: 'var(--shadow-elevated)'
        }}>
          {/* Header */}
          <div style={{ maxWidth: '850px', marginBottom: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
              <span className="badge" style={{ backgroundColor: 'var(--accent-gold)', color: '#ffffff', border: 'none' }}>
                <Landmark size={13} />
                <span>{t.financing.tag}</span>
              </span>
              <span style={{ fontSize: '0.8rem', color: 'var(--accent-gold)', fontWeight: 700 }}>
                Modèle Souverain EPCI-VF
              </span>
            </div>

            <h2 style={{ fontSize: 'clamp(1.6rem, 3.2vw, 2.4rem)', fontWeight: 800, marginBottom: '0.5rem', lineHeight: 1.2 }}>
              {t.financing.title}
            </h2>
            <div style={{ fontSize: 'clamp(0.95rem, 1.8vw, 1.1rem)', color: 'var(--accent-gold)', fontWeight: 600, marginBottom: '0.85rem' }}>
              {t.financing.subtitle}
            </div>
            <p style={{ fontSize: 'clamp(0.92rem, 1.8vw, 1.02rem)', color: 'var(--text-muted)', lineHeight: 1.6 }}>
              {t.financing.lead}
            </p>
          </div>

          {/* 3 Value Pillars */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))',
            gap: '1.25rem',
            marginBottom: '2rem'
          }}>
            {t.financing.points.map((pt, i) => (
              <div 
                key={i}
                style={{
                  backgroundColor: 'var(--bg-card)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '8px',
                  padding: '1.25rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.65rem'
                }}
              >
                <div style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '6px',
                  backgroundColor: 'var(--accent-gold-soft)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent-gold)'
                }}>
                  {i === 0 ? <Clock size={20} /> : i === 1 ? <Coins size={20} /> : <Building2 size={20} />}
                </div>

                <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-main)' }}>
                  {pt.title}
                </h3>
                <p style={{ fontSize: '0.86rem', color: 'var(--text-muted)', lineHeight: 1.55 }}>
                  {pt.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Callout Strip for African Governments */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: 'rgba(7, 19, 36, 0.7)',
            border: '1px solid var(--border-subtle)',
            borderRadius: '8px',
            padding: 'clamp(1rem, 2.5vw, 1.5rem)',
            flexWrap: 'wrap',
            gap: '1rem'
          }}>
            <div style={{ maxWidth: '650px' }}>
              <div style={{ fontWeight: 700, fontSize: '0.95rem', color: '#f8fafc', marginBottom: '0.2rem' }}>
                Vous représentez un Ministère de l'Énergie, une Société Pétrolière Nationale (NOC) ou une Agence Souveraine ?
              </div>
              <div style={{ fontSize: '0.82rem', color: '#94a3b8' }}>
                Nos experts en ingénierie financière et direction technique se déplacent pour auditer vos besoins en réserves nationales.
              </div>
            </div>

            <button 
              onClick={onContactClick}
              className="btn-primary"
              style={{ padding: '0.75rem 1.4rem', fontSize: '0.88rem' }}
            >
              <span>{t.financing.cta}</span>
              <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
