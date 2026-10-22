import React from 'react';
import { Phone, ArrowRight, MessageSquareText } from 'lucide-react';

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
          borderRadius: '10px',
          padding: 'clamp(2rem, 4vw, 3.5rem) clamp(1rem, 3vw, 2rem)',
          textAlign: 'center',
          boxShadow: 'var(--shadow-elevated)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{ position: 'relative', zIndex: 10, maxWidth: '750px', margin: '0 auto' }}>
            <span className="badge" style={{ marginBottom: '1rem' }}>
              COLLABORATION SOUVERAINE & INDUSTRIELLE
            </span>

            <h2 style={{
              fontSize: 'clamp(1.7rem, 3.5vw, 2.5rem)',
              fontWeight: 800,
              lineHeight: 1.2,
              marginBottom: '0.85rem',
              color: 'var(--text-main)'
            }}>
              {t.cta.title}
            </h2>

            <p style={{
              fontSize: 'clamp(0.95rem, 1.8vw, 1.08rem)',
              color: 'var(--text-muted)',
              lineHeight: 1.6,
              marginBottom: '2rem'
            }}>
              {t.cta.subtitle}
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
              <button 
                onClick={onOpenRfq}
                className="btn-primary"
                style={{ padding: '0.85rem 1.75rem', fontSize: '0.92rem' }}
              >
                <span>{t.cta.button1}</span>
                <ArrowRight size={16} />
              </button>

              <a 
                href="tel:+221338326040"
                className="btn-secondary"
                style={{ padding: '0.85rem 1.5rem', fontSize: '0.92rem' }}
              >
                <Phone size={16} style={{ color: 'var(--accent-gold)' }} />
                <span>+221 33 832 60 40</span>
              </a>

              <a 
                href="https://wa.me/221773882121"
                target="_blank"
                rel="noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  backgroundColor: 'rgba(34, 197, 94, 0.15)',
                  border: '1px solid rgba(34, 197, 94, 0.4)',
                  padding: '0.85rem 1.4rem',
                  borderRadius: '4px',
                  color: '#16a34a',
                  fontSize: '0.88rem',
                  fontWeight: 700
                }}
              >
                <MessageSquareText size={16} />
                <span>WhatsApp (+221 77 388 21 21)</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
