import React from 'react';
import { ShieldCheck, ArrowRight, Layers, Landmark, Wrench, HardHat } from 'lucide-react';

export default function Hero({ t, onProjectsClick, onContactClick }) {
  return (
    <section style={{
      position: 'relative',
      minHeight: '85vh',
      display: 'flex',
      alignItems: 'center',
      backgroundImage: `linear-gradient(to right, rgba(7, 19, 36, 0.94) 0%, rgba(7, 19, 36, 0.82) 50%, rgba(7, 19, 36, 0.45) 100%), url('/images/hero_tankfarm.jpg')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      borderBottom: '1px solid var(--border-subtle)',
      padding: '4.5rem 0'
    }}>
      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div style={{ maxWidth: '820px' }}>
          {/* Badge */}
          <div style={{ marginBottom: '1.25rem' }}>
            <span className="badge">
              <ShieldCheck size={14} />
              <span>{t.hero.badge}</span>
            </span>
          </div>

          {/* Headline */}
          <h1 style={{
            fontSize: 'clamp(2.3rem, 5vw, 3.8rem)',
            fontWeight: 800,
            lineHeight: 1.15,
            marginBottom: '1.5rem',
            color: '#ffffff',
            textShadow: '0 2px 10px rgba(0, 0, 0, 0.4)'
          }}>
            {t.hero.title}
          </h1>

          {/* Subtitle */}
          <p style={{
            fontSize: '1.18rem',
            lineHeight: 1.65,
            color: '#cbd5e1',
            marginBottom: '2.5rem',
            maxWidth: '720px'
          }}>
            {t.hero.subtitle}
          </p>

          {/* Dual CTAs */}
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '3.5rem' }}>
            <button 
              onClick={onProjectsClick}
              className="btn-primary"
              style={{ padding: '1rem 2rem', fontSize: '1rem' }}
            >
              <span>{t.hero.ctaProjects}</span>
              <ArrowRight size={18} />
            </button>

            <button 
              onClick={onContactClick}
              className="btn-secondary"
              style={{ padding: '1rem 2rem', fontSize: '1rem' }}
            >
              <span>{t.hero.ctaContact}</span>
            </button>

            {/* Vendor Financing sovereign tag */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem',
              backgroundColor: 'rgba(217, 119, 6, 0.15)',
              border: '1px solid rgba(217, 119, 6, 0.4)',
              padding: '0.75rem 1.25rem',
              borderRadius: '4px',
              color: '#fef3c7',
              fontSize: '0.85rem',
              fontWeight: 600
            }}>
              <Landmark size={18} style={{ color: 'var(--accent-gold)' }} />
              <span>Vendor Financing (VF) : Réserves Stratégiques 3 à 6 Mois</span>
            </div>
          </div>
        </div>

        {/* Highlight Key Metrics Ribbon */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '1rem',
          backgroundColor: 'rgba(10, 25, 47, 0.85)',
          backdropFilter: 'blur(12px)',
          border: '1px solid var(--border-strong)',
          borderRadius: '8px',
          padding: '1.25rem 1.75rem'
        }}>
          {t.hero.keyMetrics.map((metric, i) => (
            <div key={i} style={{ borderRight: i < 3 ? '1px solid var(--border-subtle)' : 'none', paddingRight: '1rem' }}>
              <div style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--accent-gold)', lineHeight: 1.1, fontFamily: 'var(--font-heading)' }}>
                {metric.value}
              </div>
              <div style={{ fontSize: '0.8rem', color: '#94a3b8', marginTop: '0.25rem', fontWeight: 600 }}>
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
