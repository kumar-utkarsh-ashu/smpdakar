import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Globe, 
  Palette, 
  Menu, 
  X, 
  FileCheck2, 
  ChevronDown,
  ArrowRight
} from 'lucide-react';

export default function Navbar({ 
  lang, 
  setLang, 
  theme, 
  setTheme, 
  activePage, 
  setActivePage, 
  t, 
  openChecklist, 
  openRfq 
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [themeDropdownOpen, setThemeDropdownOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: t.nav.home },
    { id: 'about', label: t.nav.about },
    { id: 'activities', label: t.nav.activities },
    { id: 'projects', label: t.nav.projects },
    { id: 'equipment', label: t.nav.equipment },
    { id: 'contact', label: t.nav.contact }
  ];

  const themeOptions = [
    { id: 'sovereign', label: '1. Autorité EPCI-VF (Souverain)', desc: 'Bleu Marine & Or - Style Parlym' },
    { id: 'industrial', label: '2. Échelle Industrielle Lourde', desc: 'Ardoise Foncée & Orange Sécurité' },
    { id: 'modern', label: '3. Transition Énergétique Moderne', desc: 'Blanc Épuré & Vert Cyan' }
  ];

  const handleNavClick = (id) => {
    setActivePage(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 1000, width: '100%' }}>
      {/* Top Corporate Utility Bar */}
      <div style={{ 
        backgroundColor: 'rgba(5, 12, 22, 0.95)', 
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        fontSize: '0.8rem',
        padding: '0.45rem 0',
        color: '#94a3b8'
      }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
              <MapPin size={13} style={{ color: 'var(--accent-gold)' }} />
              <span>Dakar, Sénégal (Km 18, Rte de Rufisque)</span>
            </span>
            <a href="tel:+221338326040" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#cbd5e1' }}>
              <Phone size={13} style={{ color: 'var(--accent-gold)' }} />
              <span>+221 33 832 60 40</span>
            </a>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#94a3b8' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#22c55e', display: 'inline-block' }}></span>
              <span>Machine Shop 24/7 Forage</span>
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            {/* Design Direction Switcher */}
            <div style={{ position: 'relative' }}>
              <button 
                onClick={() => setThemeDropdownOpen(!themeDropdownOpen)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  background: 'rgba(255, 255, 255, 0.06)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  padding: '0.25rem 0.6rem',
                  borderRadius: '4px',
                  color: '#e2e8f0',
                  fontSize: '0.75rem',
                  cursor: 'pointer'
                }}
              >
                <Palette size={13} style={{ color: 'var(--accent-gold)' }} />
                <span>Direction Design: {theme === 'sovereign' ? '1. Souverain' : theme === 'industrial' ? '2. Industriel' : '3. Moderne'}</span>
                <ChevronDown size={12} />
              </button>

              {themeDropdownOpen && (
                <div style={{
                  position: 'absolute',
                  right: 0,
                  top: '120%',
                  background: 'var(--bg-surface)',
                  border: '1px solid var(--border-strong)',
                  borderRadius: '6px',
                  padding: '0.4rem',
                  width: '260px',
                  boxShadow: '0 12px 30px rgba(0,0,0,0.6)',
                  zIndex: 200
                }}>
                  <div style={{ padding: '0.3rem 0.5rem', fontSize: '0.7rem', color: 'var(--text-dim)', textTransform: 'uppercase', fontWeight: 700 }}>
                    Options Demandées par SMP
                  </div>
                  {themeOptions.map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => {
                        setTheme(opt.id);
                        setThemeDropdownOpen(false);
                      }}
                      style={{
                        width: '100%',
                        textAlign: 'left',
                        padding: '0.5rem',
                        borderRadius: '4px',
                        background: theme === opt.id ? 'var(--accent-gold-soft)' : 'transparent',
                        border: 'none',
                        color: theme === opt.id ? 'var(--accent-gold)' : 'var(--text-main)',
                        cursor: 'pointer',
                        fontSize: '0.8rem',
                        display: 'block'
                      }}
                    >
                      <div style={{ fontWeight: 600 }}>{opt.label}</div>
                      <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>{opt.desc}</div>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Language Switcher */}
            <div style={{ display: 'inline-flex', alignItems: 'center', background: 'rgba(255, 255, 255, 0.08)', borderRadius: '4px', padding: '2px' }}>
              <button
                onClick={() => setLang('fr')}
                style={{
                  background: lang === 'fr' ? 'var(--accent-gold)' : 'transparent',
                  color: lang === 'fr' ? '#ffffff' : '#94a3b8',
                  border: 'none',
                  padding: '0.2rem 0.55rem',
                  borderRadius: '3px',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  transition: 'all 0.15s ease'
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
                  padding: '0.2rem 0.55rem',
                  borderRadius: '3px',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  transition: 'all 0.15s ease'
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
        padding: '0.85rem 0'
      }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {/* Logo */}
          <div 
            onClick={() => handleNavClick('home')}
            style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', cursor: 'pointer' }}
          >
            <img 
              src="/images/logo_smp.png" 
              alt="SMP Structures Métalliques & Pipes" 
              style={{ height: '46px', width: 'auto', objectFit: 'contain' }}
              onError={(e) => {
                // Fallback styled corporate mark if image fails
                e.target.style.display = 'none';
              }}
            />
            <div>
              <div style={{ fontSize: '1.2rem', fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--text-main)', lineHeight: 1.1 }}>
                S.M.P.
              </div>
              <div style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.08em', color: 'var(--accent-gold)', textTransform: 'uppercase' }}>
                Structures Métalliques & Pipes • EPCI-VF
              </div>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div style={{ display: 'none', alignItems: 'center', gap: '1.75rem' }} className="desktop-nav-menu">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: activePage === link.id ? 'var(--accent-gold)' : 'var(--text-main)',
                  fontWeight: activePage === link.id ? 700 : 500,
                  fontSize: '0.92rem',
                  cursor: 'pointer',
                  position: 'relative',
                  padding: '0.35rem 0',
                  transition: 'color 0.2s ease'
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

          {/* Action CTAs */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <button
              onClick={openChecklist}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                color: 'var(--text-main)',
                border: '1px solid var(--border-strong)',
                padding: '0.6rem 1rem',
                borderRadius: '4px',
                fontSize: '0.82rem',
                fontWeight: 600,
                cursor: 'pointer'
              }}
              title="Vérifier la conformité au brief de Donna Drabo"
            >
              <FileCheck2 size={15} style={{ color: 'var(--accent-gold)' }} />
              <span className="hidden-mobile">Brief Client & Checklist</span>
            </button>

            <button
              onClick={openRfq}
              className="btn-primary"
              style={{ padding: '0.65rem 1.25rem', fontSize: '0.85rem' }}
            >
              <span>{t.nav.rfqButton}</span>
              <ArrowRight size={14} />
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                background: 'none',
                border: '1px solid var(--border-subtle)',
                color: 'var(--text-main)',
                padding: '0.45rem',
                borderRadius: '4px',
                cursor: 'pointer',
                display: 'inline-flex'
              }}
              className="mobile-hamburger-btn"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div style={{
            backgroundColor: 'var(--bg-secondary)',
            borderTop: '1px solid var(--border-subtle)',
            padding: '1.25rem 1.5rem',
            marginTop: '0.85rem'
          }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: activePage === link.id ? 'var(--accent-gold)' : 'var(--text-main)',
                    textAlign: 'left',
                    fontSize: '1rem',
                    fontWeight: activePage === link.id ? 700 : 500,
                    padding: '0.5rem 0',
                    cursor: 'pointer'
                  }}
                >
                  {link.label}
                </button>
              ))}
              <div style={{ paddingTop: '0.75rem', borderTop: '1px solid var(--border-subtle)', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <a href="tel:+221338326040" style={{ fontSize: '0.85rem', color: 'var(--accent-gold)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Phone size={14} /> +221 33 832 60 40
                </a>
                <a href="tel:+221773882121" style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Phone size={14} /> +221 77 388 21 21 (Mobile)
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Responsive CSS helper */}
      <style>{`
        @media (min-width: 900px) {
          .desktop-nav-menu { display: flex !important; }
          .mobile-hamburger-btn { display: none !important; }
        }
        @media (max-width: 899px) {
          .desktop-nav-menu { display: none !important; }
          .mobile-hamburger-btn { display: inline-flex !important; }
          .hidden-mobile { display: none !important; }
        }
      `}</style>
    </header>
  );
}
