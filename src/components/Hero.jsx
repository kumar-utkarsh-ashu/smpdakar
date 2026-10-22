import React from 'react';
import { ShieldCheck, ArrowRight, Landmark } from 'lucide-react';

export default function Hero({ t, onProjectsClick, onContactClick }) {
  return (
    <section style={{
      position: 'relative',
      backgroundImage: `linear-gradient(to right, rgba(7, 19, 36, 0.94) 0%, rgba(7, 19, 36, 0.85) 60%, rgba(7, 19, 36, 0.55) 100%), url('/images/hero_tankfarm.jpg')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      borderBottom: '1px solid var(--border-subtle)',
      padding: 'clamp(3rem, 6vw, 4.5rem) 0'
    }}>
      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div style={{ maxWidth: '820px' }}>
          {/* Badge */}
          <div style={{ marginBottom: '1rem', display: 'flex', flexWrap: 'wrap', gap: '0.5rem', alignItems: 'center' }}>
            <span className="badge">
              <ShieldCheck size={13} />
              <span>{t.hero.badge}</span>
            </span>

            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              backgroundColor: 'rgba(217, 119, 6, 0.15)',
              border: '1px solid rgba(217, 119, 6, 0.4)',
              padding: '0.25rem 0.65rem',
              borderRadius: '4px',
              color: '#fef3c7',
              fontSize: '0.72rem',
              fontWeight: 700
            }}>
              <Landmark size={13} style={{ color: 'var(--accent-gold)' }} />
              <span>Vendor Financing (VF) • Réserves 3 à 6 Mois</span>
            </span>
          </div>

          {/* Short Hero Headline */}
          <h1 style={{
            fontSize: 'clamp(1.8rem, 4vw, 3rem)',
            fontWeight: 800,
            lineHeight: 1.18,
            marginBottom: '1rem',
            color: '#ffffff',
            textShadow: '0 2px 10px rgba(0, 0, 0, 0.4)'
          }}>
            {t.hero.title}
          </h1>

          {/* Subtitle */}
          <p style={{
            fontSize: 'clamp(0.95rem, 1.8vw, 1.1rem)',
            lineHeight: 1.6,
            color: '#cbd5e1',
            marginBottom: '1.75rem',
            maxWidth: '680px'
          }}>
            {t.hero.subtitle}
          </p>

          {/* Dual CTAs */}
          <div style={{
            display: 'flex',
            gap: '0.75rem',
            flexWrap: 'wrap',
            alignItems: 'center'
          }}>
            <button 
              onClick={onProjectsClick}
              className="btn-primary"
            >
              <span>{t.hero.ctaProjects}</span>
              <ArrowRight size={16} />
            </button>

            <button 
              onClick={onContactClick}
              className="btn-secondary"
            >
              <span>{t.hero.ctaContact}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
