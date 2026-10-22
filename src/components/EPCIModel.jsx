import React, { useState, useEffect } from 'react';
import { 
  Compass, 
  Truck, 
  Hammer, 
  Anchor, 
  Landmark, 
  Cog, 
  CheckCircle2,
  Play,
  Pause,
  ArrowRight
} from 'lucide-react';

export default function EPCIModel({ t }) {
  const [selectedStep, setSelectedStep] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);

  const icons = [
    <Compass size={22} />,
    <Truck size={22} />,
    <Hammer size={22} />,
    <Anchor size={22} />,
    <Landmark size={22} />,
    <Cog size={22} />
  ];

  // Optional subtle auto-cycle every 5 seconds if enabled
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setSelectedStep((prev) => (prev + 1) % t.epci.steps.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isAutoPlaying, t.epci.steps.length]);

  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--bg-secondary)', borderBottom: '1px solid var(--border-subtle)', position: 'relative' }}>
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

        {/* Stepper Container with Animated Connecting Rail */}
        <div style={{ position: 'relative', marginBottom: '2rem' }}>
          {/* Connecting Progress Track (Desktop) */}
          <div style={{
            position: 'absolute',
            top: '40px',
            left: '5%',
            right: '5%',
            height: '3px',
            backgroundColor: 'var(--border-subtle)',
            zIndex: 1,
            display: 'none'
          }} className="stepper-rail">
            <div style={{
              height: '100%',
              width: `${(selectedStep / 5) * 100}%`,
              background: 'linear-gradient(90deg, var(--accent-gold) 0%, #38bdf8 100%)',
              transition: 'width 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              boxShadow: '0 0 12px var(--accent-gold)'
            }}></div>
          </div>

          {/* 6 Steps Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 160px), 1fr))',
            gap: '0.85rem',
            position: 'relative',
            zIndex: 2
          }}>
            {t.epci.steps.map((step, idx) => {
              const isSelected = selectedStep === idx;
              const isFinancing = idx === 4;

              return (
                <div
                  key={idx}
                  onClick={() => {
                    setSelectedStep(idx);
                    setIsAutoPlaying(false);
                  }}
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
                    padding: '1.15rem 0.85rem',
                    cursor: 'pointer',
                    position: 'relative',
                    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                    transform: isSelected ? 'translateY(-4px) scale(1.02)' : 'translateY(0)',
                    boxShadow: isSelected 
                      ? '0 12px 28px -6px var(--accent-gold-soft), 0 0 0 1px var(--accent-gold)' 
                      : 'var(--shadow-card)'
                  }}
                >
                  {/* Step Number & Icon */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                    <span style={{
                      fontSize: '0.78rem',
                      fontWeight: 800,
                      fontFamily: 'var(--font-heading)',
                      color: isSelected ? '#ffffff' : 'var(--text-dim)',
                      background: isSelected ? 'var(--accent-gold)' : 'rgba(255, 255, 255, 0.06)',
                      padding: '0.2rem 0.5rem',
                      borderRadius: '4px',
                      transition: 'all 0.25s ease'
                    }}>
                      {step.num}
                    </span>

                    <div style={{ 
                      color: isSelected ? 'var(--accent-gold)' : isFinancing ? 'var(--accent-gold)' : 'var(--text-muted)',
                      transform: isSelected ? 'scale(1.15)' : 'scale(1)',
                      transition: 'transform 0.25s ease'
                    }}>
                      {icons[idx]}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 style={{
                    fontSize: '0.98rem',
                    fontWeight: 700,
                    marginBottom: '0.25rem',
                    color: isSelected ? 'var(--text-main)' : isFinancing ? 'var(--accent-gold)' : 'var(--text-main)',
                    lineHeight: 1.25
                  }}>
                    {step.title}
                  </h3>
                  <div style={{ fontSize: '0.7rem', fontWeight: 600, color: 'var(--text-dim)', textTransform: 'uppercase' }}>
                    {step.sub}
                  </div>

                  {/* Active Step Indicator Line */}
                  {isSelected && (
                    <div style={{
                      position: 'absolute',
                      bottom: 0,
                      left: '15%',
                      right: '15%',
                      height: '3px',
                      backgroundColor: 'var(--accent-gold)',
                      borderRadius: '3px 3px 0 0',
                      boxShadow: '0 -2px 8px var(--accent-gold)'
                    }} />
                  )}

                  {isFinancing && (
                    <span 
                      className="pulse-badge"
                      style={{
                        position: 'absolute',
                        top: '-9px',
                        right: '8px',
                        fontSize: '0.62rem',
                        fontWeight: 800,
                        backgroundColor: 'var(--accent-gold)',
                        color: '#ffffff',
                        padding: '0.12rem 0.45rem',
                        borderRadius: '3px'
                      }}
                    >
                      DÉMARCHE VF
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Selected Step Deep Dive Animated Detail Box */}
        <div 
          key={selectedStep}
          className="step-content-animated"
          style={{
            backgroundColor: 'var(--bg-surface)',
            border: '1px solid var(--border-strong)',
            borderRadius: '10px',
            padding: 'clamp(1.5rem, 3.5vw, 2.25rem)',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            boxShadow: 'var(--shadow-elevated)',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Top Detail Bar with Step Progression */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
              <span className="badge" style={{ fontSize: '0.8rem', padding: '0.35rem 0.75rem' }}>
                Étape {t.epci.steps[selectedStep].num} / 06 • {t.epci.steps[selectedStep].title}
              </span>
              <span style={{ fontSize: '0.88rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                {t.epci.steps[selectedStep].sub}
              </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <button
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  background: isAutoPlaying ? 'var(--accent-gold-soft)' : 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid var(--border-subtle)',
                  color: isAutoPlaying ? 'var(--accent-gold)' : 'var(--text-muted)',
                  padding: '0.3rem 0.65rem',
                  borderRadius: '4px',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  cursor: 'pointer'
                }}
                title="Lecture automatique du cycle"
              >
                {isAutoPlaying ? <Pause size={12} /> : <Play size={12} />}
                <span>{isAutoPlaying ? 'Pause cycle' : 'Défilement automatique'}</span>
              </button>

              <button
                onClick={() => setSelectedStep((prev) => (prev + 1) % t.epci.steps.length)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  background: 'none',
                  border: 'none',
                  color: 'var(--accent-gold)',
                  fontSize: '0.82rem',
                  fontWeight: 700,
                  cursor: 'pointer'
                }}
              >
                <span>Étape suivante</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>

          {/* Description */}
          <p style={{ fontSize: 'clamp(0.98rem, 1.8vw, 1.1rem)', color: 'var(--text-main)', lineHeight: 1.65, maxWidth: '980px' }}>
            {t.epci.steps[selectedStep].desc}
          </p>

          {/* Quality Seals */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
            gap: '0.75rem',
            paddingTop: '1rem',
            borderTop: '1px solid var(--border-subtle)',
            fontSize: '0.84rem'
          }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', color: 'var(--text-muted)' }}>
              <CheckCircle2 size={16} style={{ color: 'var(--accent-gold)', flexShrink: 0, marginTop: '2px' }} />
              <span>Conforme aux codes internationaux (API, ASME, Eurocodes)</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', color: 'var(--text-muted)' }}>
              <CheckCircle2 size={16} style={{ color: 'var(--accent-gold)', flexShrink: 0, marginTop: '2px' }} />
              <span>Contrôles qualité CND & traçabilité matière complète</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', color: 'var(--text-muted)' }}>
              <CheckCircle2 size={16} style={{ color: 'var(--accent-gold)', flexShrink: 0, marginTop: '2px' }} />
              <span>Coordination logistique directe via le Port de Dakar</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 900px) {
          .stepper-rail { display: block !important; }
        }
      `}</style>
    </section>
  );
}
