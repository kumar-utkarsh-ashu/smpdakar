import React from 'react';
import { Phone, Mail, ArrowRight, MessageSquareText } from 'lucide-react';

export default function CallToAction({ t, onOpenRfq }) {
  return (
    <section className="section-padding" style={{
      backgroundColor: 'var(--bg-secondary)',
      borderBottom: '1px solid var(--border-subtle)',
      position: 'relative'
    }}>
      <div className="container">
        <div style={{
          backgroundColor: 'var(--bg-surface)',
          border: '1px solid var(--border-strong)',
          borderRadius: '12px',
          padding: 'clamp(2.5rem, 5vw, 4rem)',
          textAlign: 'center',
          boxShadow: 'var(--shadow-elevated)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Subtle Accent Glow */}
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '400px',
            height: '400px',
            background: 'radial-gradient(circle, var(--accent-gold-soft) 0%, transparent 70%)',
            pointerEvents: 'none'
          }}></div>

          <div style={{ position: 'relative', zIndex: 10, maxWidth: '750px', margin: '0 auto' }}>
            <span className="badge" style={{ marginBottom: '1.25rem' }}>
              COLLABORATION SOUVERAINE & INDUSTRIELLE
            </span>

            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 2.8rem)',
              fontWeight: 800,
              lineHeight: 1.2,
              marginBottom: '1rem',
              color: '#ffffff'
            }}>
              {t.cta.title}
            </h2>

            <p style={{
              fontSize: '1.1rem',
              color: 'var(--text-muted)',
              lineHeight: 1.6,
              marginBottom: '2.5rem'
            }}>
              {t.cta.subtitle}
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <button 
                onClick={onOpenRfq}
                className="btn-primary"
                style={{ padding: '1rem 2.2rem', fontSize: '1rem' }}
              >
                <span>{t.cta.button1}</span>
                <ArrowRight size={18} />
              </button>

              <a 
                href="tel:+221338326040"
                className="btn-secondary"
                style={{ padding: '1rem 2rem', fontSize: '1rem' }}
              >
                <Phone size={17} style={{ color: 'var(--accent-gold)' }} />
                <span>+221 33 832 60 40</span>
              </a>

              <a 
                href="https://wa.me/221773882121"
                target="_blank"
                rel="noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  backgroundColor: 'rgba(34, 197, 94, 0.15)',
                  border: '1px solid rgba(34, 197, 94, 0.4)',
                  padding: '1rem 1.75rem',
                  borderRadius: '4px',
                  color: '#86efac',
                  fontSize: '0.95rem',
                  fontWeight: 600
                }}
              >
                <MessageSquareText size={17} />
                <span>WhatsApp (+221 77 388 21 21)</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
