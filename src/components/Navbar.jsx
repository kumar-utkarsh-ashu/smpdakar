import React, { useState } from 'react';
import { 
  Phone, 
  MapPin, 
  Globe, 
  Menu, 
  X, 
  ArrowRight,
  Palette
} from 'lucide-react';

export default function Navbar({ 
  lang, 
  setLang, 
  theme, 
  setTheme, 
  activePage, 
  setActivePage, 
  t, 
  openRfq 
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: t.nav.home },
    { id: 'about', label: t.nav.about },
    { id: 'activities', label: t.nav.activities },
    { id: 'projects', label: t.nav.projects },
    { id: 'equipment', label: t.nav.equipment },
    { id: 'contact', label: t.nav.contact }
  ];

  const handleNavClick = (id) => {
    setActivePage(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 1000, width: '100%' }}>
      {/* Top Utility Bar */}
      <div style={{ 
        backgroundColor: 'rgba(5, 12, 22, 0.96)', 
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        fontSize: '0.78rem',
        padding: '0.35rem 0',
        color: '#94a3b8'
      }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.4rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
              <MapPin size={12} style={{ color: 'var(--accent-gold)' }} />
              <span>Dakar, Sénégal (Km 18, Rte de Rufisque)</span>
            </span>
            <a href="tel:+221338326040" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem', color: '#cbd5e1' }}>
              <Phone size={12} style={{ color: 'var(--accent-gold)' }} />
              <span>+221 33 832 60 40</span>
            </a>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            {/* Theme switcher */}
            <select
              value={theme}
              onChange={(e) => setTheme(e.target.value)}
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
                color: '#e2e8f0',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                borderRadius: '4px',
                padding: '0.15rem 0.4rem',
                fontSize: '0.72rem',
                fontWeight: 600,
                cursor: 'pointer'
              }}
              title="Design Theme Direction"
            >
              <option value="sovereign">Option 1: Souverain (Parlym)</option>
              <option value="industrial">Option 2: Industriel Lourd</option>
              <option value="modern">Option 3: Moderne Épuré</option>
            </select>

            {/* Language Switcher */}
            <div style={{ display: 'inline-flex', alignItems: 'center', background: 'rgba(255, 255, 255, 0.1)', borderRadius: '4px', padding: '2px' }}>
              <button
                onClick={() => setLang('fr')}
                style={{
                  background: lang === 'fr' ? 'var(--accent-gold)' : 'transparent',
                  color: lang === 'fr' ? '#ffffff' : '#94a3b8',
                  border: 'none',
                  padding: '0.15rem 0.45rem',
                  borderRadius: '3px',
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  cursor: 'pointer'
                }}
              >
                FR
              </button>
              <button
                onClick={() => setLang('en')}
                style={{
                  background: lang === 'en' ? 'var(--accent-gold)' : 'transparent',
                  color: lang === 'en' ? '#ffffff' : '#94a3b8',
                  border: 'none',
                  padding: '0.15rem 0.45rem',
                  borderRadius: '3px',
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  cursor: 'pointer'
                }}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Corporate Header */}
      <nav style={{
        backgroundColor: 'var(--bg-secondary)',
        borderBottom: '1px solid var(--border-subtle)',
        backdropFilter: 'blur(16px)',
        padding: '0.65rem 0'
      }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {/* Logo */}
          <div 
            onClick={() => handleNavClick('home')}
            style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', cursor: 'pointer', flexShrink: 0 }}
          >
            <img 
              src="/images/logo_smp.png" 
              alt="SMP Structures Métalliques & Pipes" 
              style={{ height: '40px', width: 'auto', objectFit: 'contain' }}
            />
            <div>
              <div style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--text-main)', lineHeight: 1.1 }}>
                S.M.P.
              </div>
              <div style={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.06em', color: 'var(--accent-gold)', textTransform: 'uppercase' }}>
                Structures Métalliques & Pipes • EPCI-VF
              </div>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div style={{ display: 'none', alignItems: 'center', gap: '1.5rem' }} className="desktop-nav-menu">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: activePage === link.id ? 'var(--accent-gold)' : 'var(--text-main)',
                  fontWeight: activePage === link.id ? 700 : 500,
                  fontSize: '0.88rem',
                  cursor: 'pointer',
                  position: 'relative',
                  padding: '0.3rem 0',
                  transition: 'color 0.2s ease',
                  whiteSpace: 'nowrap'
                }}
              >
                {link.label}
                {activePage === link.id && (
                  <span style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    height: '2px',
                    backgroundColor: 'var(--accent-gold)',
                    borderRadius: '2px'
                  }} />
                )}
              </button>
            ))}
          </div>

          {/* Right Action & Mobile Toggle */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <button
              onClick={openRfq}
              className="btn-primary"
              style={{ padding: '0.55rem 1rem', fontSize: '0.82rem' }}
            >
              <span>{t.nav.rfqButton}</span>
              <ArrowRight size={13} />
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                background: 'none',
                border: '1px solid var(--border-subtle)',
                color: 'var(--text-main)',
                padding: '0.4rem',
                borderRadius: '4px',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              className="mobile-hamburger-btn"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div style={{
            backgroundColor: 'var(--bg-secondary)',
            borderTop: '1px solid var(--border-subtle)',
            padding: '1rem',
            marginTop: '0.65rem'
          }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: activePage === link.id ? 'var(--accent-gold)' : 'var(--text-main)',
                    textAlign: 'left',
                    fontSize: '0.95rem',
                    fontWeight: activePage === link.id ? 700 : 500,
                    padding: '0.4rem 0',
                    cursor: 'pointer'
                  }}
                >
                  {link.label}
                </button>
              ))}
              <div style={{ paddingTop: '0.75rem', borderTop: '1px solid var(--border-subtle)', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                <a href="tel:+221338326040" style={{ fontSize: '0.82rem', color: 'var(--accent-gold)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Phone size={13} /> +221 33 832 60 40
                </a>
                <a href="tel:+221773882121" style={{ fontSize: '0.82rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Phone size={13} /> +221 77 388 21 21 (Mobile)
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Responsive Breakpoints */}
      <style>{`
        @media (min-width: 900px) {
          .desktop-nav-menu { display: flex !important; }
          .mobile-hamburger-btn { display: none !important; }
        }
        @media (max-width: 899px) {
          .desktop-nav-menu { display: none !important; }
          .mobile-hamburger-btn { display: inline-flex !important; }
        }
      `}</style>
    </header>
  );
}
