import React, { useState, useEffect } from 'react';
import { Award, Fuel, Construction, ShieldCheck, Globe2 } from 'lucide-react';

function AnimatedCounter({ end, duration = 1800 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime = null;
    const target = parseInt(end.replace(/\D/g, ''), 10);
    if (isNaN(target) || target === 0) {
      setCount(0);
      return;
    }

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easeOutQuad = 1 - (1 - progress) * (1 - progress);
      setCount(Math.floor(easeOutQuad * target));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    const animId = window.requestAnimationFrame(step);
    return () => window.cancelAnimationFrame(animId);
  }, [end, duration]);

  // Format with space as thousands separator
  const formatted = count.toLocaleString('fr-FR');
  const hasPlus = end.includes('+');

  return (
    <span>
      {formatted}{hasPlus ? '+' : ''}
    </span>
  );
}

export default function KeyFigures({ t }) {
  const icons = [
    <Award size={26} />,
    <Fuel size={26} />,
    <Construction size={26} />,
    <ShieldCheck size={26} />,
    <Globe2 size={26} />
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

        {/* Figures Grid - Animated with Shimmer & Counters */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 195px), 1fr))',
          gap: '1.25rem'
        }}>
          {t.figures.list.map((item, idx) => {
            const isZeroLti = item.number === '0';

            return (
              <div 
                key={idx}
                className="card shimmer-card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  padding: 'clamp(1.75rem, 3.5vw, 2.5rem) 1.25rem',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                {/* Icon Container with glowing badge */}
                <div style={{
                  color: isZeroLti ? '#22c55e' : 'var(--accent-gold)',
                  marginBottom: '1rem',
                  background: isZeroLti ? 'rgba(34, 197, 94, 0.12)' : 'var(--accent-gold-soft)',
                  border: isZeroLti ? '1px solid rgba(34, 197, 94, 0.3)' : '1px solid var(--accent-gold)',
                  padding: '0.75rem',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'transform 0.3s ease'
                }}>
                  {icons[idx]}
                </div>

                {/* Animated Number Counter */}
                <div style={{
                  fontSize: 'clamp(2.2rem, 3.8vw, 3rem)',
                  fontWeight: 800,
                  color: isZeroLti ? '#22c55e' : 'var(--text-main)',
                  fontFamily: 'var(--font-heading)',
                  lineHeight: 1,
                  marginBottom: '0.5rem',
                  display: 'flex',
                  alignItems: 'baseline',
                  gap: '0.25rem',
                  justifyContent: 'center'
                }}>
                  {isZeroLti ? (
                    <span>0</span>
                  ) : (
                    <AnimatedCounter end={item.number} duration={2000} />
                  )}
                  {item.unit && (
                    <span style={{ fontSize: '1.15rem', color: 'var(--accent-gold)', fontWeight: 700 }}>
                      {item.unit}
                    </span>
                  )}
                </div>

                {/* Label */}
                <div style={{
                  fontSize: '0.95rem',
                  fontWeight: 700,
                  color: 'var(--text-main)',
                  marginBottom: '0.35rem'
                }}>
                  {item.label}
                </div>

                {/* Note */}
                <div style={{ fontSize: '0.78rem', color: 'var(--text-dim)', lineHeight: 1.4, flex: 1 }}>
                  {item.note}
                </div>

                {/* Bottom Animated Line Accent */}
                <div style={{
                  width: '40px',
                  height: '2px',
                  backgroundColor: isZeroLti ? '#22c55e' : 'var(--accent-gold)',
                  marginTop: '1.25rem',
                  borderRadius: '2px',
                  opacity: 0.6
                }}></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
