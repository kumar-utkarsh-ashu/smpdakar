import React from 'react';
import { Landmark, ShieldAlert, CheckCircle2, ArrowRight, Building2, Coins, Clock } from 'lucide-react';

export default function VendorFinancing({ t, onContactClick }) {
  return (
    <section className="section-padding" style={{
      backgroundColor: 'var(--bg-secondary)',
      borderBottom: '1px solid var(--border-subtle)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Subtle background glow */}
      <div style={{
        position: 'absolute',
        top: '-10%',
        right: '-5%',
        width: '500px',
        height: '500px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, var(--accent-gold-soft) 0%, transparent 70%)',
        pointerEvents: 'none'
      }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div style={{
          backgroundColor: 'var(--bg-surface)',
          border: '1px solid var(--border-strong)',
          borderRadius: '12px',
          padding: 'clamp(2rem, 4vw, 3.5rem)',
          boxShadow: 'var(--shadow-elevated)'
        }}>
          {/* Header */}
          <div style={{ maxWidth: '850px', marginBottom: '2.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
              <span className="badge" style={{ backgroundColor: 'var(--accent-gold)', color: '#ffffff', border: 'none' }}>
                <Landmark size={14} />
                <span>{t.financing.tag}</span>
              </span>
              <span style={{ fontSize: '0.85rem', color: 'var(--accent-gold)', fontWeight: 700 }}>
                Modèle Souverain EPCI-VF
              </span>
            </div>

            <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: 800, marginBottom: '0.75rem', lineHeight: 1.2 }}>
              {t.financing.title}
            </h2>
            <div style={{ fontSize: '1.15rem', color: 'var(--accent-gold)', fontWeight: 600, marginBottom: '1rem' }}>
              {t.financing.subtitle}
            </div>
            <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: 1.65 }}>
              {t.financing.lead}
            </p>
          </div>

          {/* 3 Value Pillars */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.5rem',
            marginBottom: '2.5rem'
          }}>
            {t.financing.points.map((pt, i) => (
              <div 
                key={i}
                style={{
                  backgroundColor: 'var(--bg-card)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '8px',
                  padding: '1.5rem',
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
                  {i === 0 ? <Clock size={22} /> : i === 1 ? <Coins size={22} /> : <Building2 size={22} />}
                </div>

                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-main)' }}>
                  {pt.title}
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
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
            backgroundColor: 'rgba(7, 19, 36, 0.6)',
            border: '1px solid var(--border-subtle)',
            borderRadius: '8px',
            padding: '1.5rem',
            flexWrap: 'wrap',
            gap: '1.25rem'
          }}>
            <div style={{ maxWidth: '650px' }}>
              <div style={{ fontWeight: 700, fontSize: '1rem', color: '#f8fafc', marginBottom: '0.25rem' }}>
                Vous représentez un Ministère de l'Énergie, une Société Pétrolière Nationale (NOC) ou une Agence Souveraine ?
              </div>
              <div style={{ fontSize: '0.85rem', color: '#94a3b8' }}>
                Nos experts en ingénierie financière et direction technique se déplacent pour auditer vos besoins en réserves nationales.
              </div>
            </div>

            <button 
              onClick={onContactClick}
              className="btn-primary"
              style={{ padding: '0.85rem 1.75rem', fontSize: '0.92rem' }}
            >
              <span>{t.financing.cta}</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
