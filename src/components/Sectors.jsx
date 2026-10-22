import React from 'react';
import { ArrowUpRight, Wrench } from 'lucide-react';

export default function Sectors({ t, onSectorClick }) {
  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--bg-primary)', borderBottom: '1px solid var(--border-subtle)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--accent-gold)' }}></span>
            <span>{t.sectors.tag}</span>
          </div>
          <h2 className="section-title">{t.sectors.title}</h2>
          <p className="section-desc">{t.sectors.desc}</p>
        </div>

        {/* 4 Sector Cards Grid - 100% Mobile Responsive */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 270px), 1fr))',
          gap: '1.5rem'
        }}>
          {t.sectors.items.map((sector) => {
            const isUpstream = sector.id === 'upstream';

            return (
              <div 
                key={sector.id}
                className="card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  padding: 0,
                  overflow: 'hidden',
                  position: 'relative'
                }}
              >
                {/* Sector Image Banner */}
                <div style={{ position: 'relative', height: '190px', overflow: 'hidden' }}>
                  <img 
                    src={sector.image} 
                    alt={sector.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                  <div style={{
                    position: 'absolute',
                    top: '0.75rem',
                    left: '0.75rem',
                    backgroundColor: 'rgba(7, 19, 36, 0.88)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid var(--border-strong)',
                    padding: '0.2rem 0.55rem',
                    borderRadius: '4px',
                    fontSize: '0.68rem',
                    fontWeight: 800,
                    color: 'var(--accent-gold)',
                    letterSpacing: '0.06em'
                  }}>
                    {sector.badge}
                  </div>

                  {isUpstream && (
                    <div style={{
                      position: 'absolute',
                      bottom: '0.65rem',
                      right: '0.65rem',
                      backgroundColor: 'rgba(217, 119, 6, 0.95)',
                      color: '#ffffff',
                      padding: '0.25rem 0.55rem',
                      borderRadius: '4px',
                      fontSize: '0.68rem',
                      fontWeight: 700,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.35rem'
                    }}>
                      <Wrench size={12} />
                      <span>Machine Shop 24/7 Forage</span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div style={{ padding: 'clamp(1.15rem, 2.5vw, 1.5rem)', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.35rem', color: 'var(--text-main)' }}>
                    {sector.title}
                  </h3>

                  <div style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--accent-gold)', marginBottom: '0.75rem' }}>
                    {sector.highlight}
                  </div>

                  <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.55, marginBottom: '1rem', flex: 1 }}>
                    {sector.desc}
                  </p>

                  {/* Feature Tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginBottom: '1rem' }}>
                    {sector.tags.map((tag, idx) => (
                      <span 
                        key={idx}
                        style={{
                          fontSize: '0.7rem',
                          background: 'rgba(255, 255, 255, 0.05)',
                          border: '1px solid var(--border-subtle)',
                          padding: '0.15rem 0.45rem',
                          borderRadius: '3px',
                          color: '#cbd5e1'
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => onSectorClick && onSectorClick(sector.id)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      background: 'none',
                      border: 'none',
                      borderTop: '1px solid var(--border-subtle)',
                      paddingTop: '0.75rem',
                      color: 'var(--accent-gold)',
                      fontWeight: 600,
                      fontSize: '0.82rem',
                      cursor: 'pointer'
                    }}
                  >
                    <span>Consulter les capacités détaillées</span>
                    <ArrowUpRight size={15} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
