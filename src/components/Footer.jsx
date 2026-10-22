import React from 'react';
import { MapPin, Phone, Mail, Clock, ShieldCheck } from 'lucide-react';

export default function Footer({ t, onNavClick }) {
  return (
    <footer style={{ backgroundColor: '#040b15', borderTop: '1px solid var(--border-subtle)', paddingTop: '3.5rem', paddingBottom: '2rem', color: '#94a3b8' }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
          gap: '2rem',
          marginBottom: '2.5rem'
        }}>
          {/* Col 1: Brand & Positioning */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1rem' }}>
              <img 
                src="/images/logo_smp.png" 
                alt="SMP Dakar" 
                style={{ height: '38px', width: 'auto' }}
              />
              <div>
                <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#ffffff' }}>S.M.P.</div>
                <div style={{ fontSize: '0.62rem', color: 'var(--accent-gold)', fontWeight: 700, letterSpacing: '0.06em' }}>
                  STRUCTURES MÉTALLIQUES & PIPES
                </div>
              </div>
            </div>

            <p style={{ fontSize: '0.84rem', lineHeight: 1.55, color: '#94a3b8', marginBottom: '1rem' }}>
              {t.footer.tagline}
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.78rem', color: '#cbd5e1' }}>
              <ShieldCheck size={15} style={{ color: 'var(--accent-gold)' }} />
              <span>Certifications ISO 9001 • ISO 14001 • ISO 45001</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 style={{ fontSize: '0.88rem', fontWeight: 700, color: '#ffffff', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '1rem' }}>
              Navigation Principale
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.55rem', fontSize: '0.86rem' }}>
              <li>
                <button onClick={() => onNavClick('home')} style={{ background: 'none', border: 'none', color: '#cbd5e1', cursor: 'pointer', textAlign: 'left', padding: 0 }}>
                  {t.nav.home}
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('about')} style={{ background: 'none', border: 'none', color: '#cbd5e1', cursor: 'pointer', textAlign: 'left', padding: 0 }}>
                  {t.nav.about}
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('activities')} style={{ background: 'none', border: 'none', color: '#cbd5e1', cursor: 'pointer', textAlign: 'left', padding: 0 }}>
                  {t.nav.activities}
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('projects')} style={{ background: 'none', border: 'none', color: '#cbd5e1', cursor: 'pointer', textAlign: 'left', padding: 0 }}>
                  {t.nav.projects}
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('equipment')} style={{ background: 'none', border: 'none', color: '#cbd5e1', cursor: 'pointer', textAlign: 'left', padding: 0 }}>
                  {t.nav.equipment}
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('contact')} style={{ background: 'none', border: 'none', color: '#cbd5e1', cursor: 'pointer', textAlign: 'left', padding: 0 }}>
                  {t.nav.contact}
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Secteurs EPCI */}
          <div>
            <h4 style={{ fontSize: '0.88rem', fontWeight: 700, color: '#ffffff', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '1rem' }}>
              Expertises Industrielles
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.55rem', fontSize: '0.84rem' }}>
              <li style={{ color: '#cbd5e1' }}>• Upstream & Machine Shop 24/7</li>
              <li style={{ color: '#cbd5e1' }}>• Midstream & Pipelines Terre/Mer</li>
              <li style={{ color: '#cbd5e1' }}>• Downstream & Tank Farms Clés en main</li>
              <li style={{ color: '#cbd5e1' }}>• Stations-service fixes & conteneurisées SKD</li>
              <li style={{ color: '#cbd5e1' }}>• Charpentes minières & Usines or/sables</li>
              <li style={{ color: 'var(--accent-gold)', fontWeight: 600 }}>• Vendor Financing Souverain (3 à 6 mois réserves)</li>
            </ul>
          </div>

          {/* Col 4: Contacts & Donna Drabo Office */}
          <div>
            <h4 style={{ fontSize: '0.88rem', fontWeight: 700, color: '#ffffff', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '1rem' }}>
              Siège & Contact
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.84rem' }}>
              <div style={{ display: 'flex', gap: '0.5rem', color: '#cbd5e1' }}>
                <MapPin size={16} style={{ color: 'var(--accent-gold)', flexShrink: 0 }} />
                <span>{t.footer.address}</span>
              </div>
              <div style={{ display: 'flex', gap: '0.5rem', color: '#cbd5e1' }}>
                <Phone size={16} style={{ color: 'var(--accent-gold)', flexShrink: 0 }} />
                <div>
                  <a href="tel:+221338326040" style={{ display: 'block', color: '#ffffff', fontWeight: 600 }}>{t.footer.phone}</a>
                  <a href="tel:+221773882121" style={{ display: 'block', color: '#cbd5e1' }}>Mob. : {t.footer.mobile}</a>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '0.5rem', color: '#cbd5e1' }}>
                <Mail size={16} style={{ color: 'var(--accent-gold)', flexShrink: 0 }} />
                <a href="mailto:contact@smpdakar.com" style={{ color: '#ffffff' }}>{t.footer.email}</a>
              </div>
              <div style={{ display: 'flex', gap: '0.5rem', color: '#94a3b8', fontSize: '0.78rem' }}>
                <Clock size={15} style={{ color: 'var(--accent-gold)', flexShrink: 0 }} />
                <span>{t.footer.hours}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          borderTop: '1px solid var(--border-subtle)',
          paddingTop: '1.25rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '0.75rem',
          fontSize: '0.78rem'
        }}>
          <div>
            {t.footer.rights}
          </div>

          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <span>Architecture WordPress / WPML Bilingue (FR/EN)</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
