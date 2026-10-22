import React, { useState, useEffect } from 'react';
import { translations } from './data/content';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import EPCIModel from './components/EPCIModel';
import Sectors from './components/Sectors';
import VendorFinancing from './components/VendorFinancing';
import KeyFigures from './components/KeyFigures';
import FeaturedProjects from './components/FeaturedProjects';
import ClientsGrid from './components/ClientsGrid';
import LocationsMap from './components/LocationsMap';
import QHSE from './components/QHSE';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import InnerPages from './components/InnerPages';
import ClientChecklistModal from './components/ClientChecklistModal';
import { Palette, Globe, FileCheck2, ArrowUp } from 'lucide-react';

export default function App() {
  const [lang, setLang] = useState('fr');
  const [theme, setTheme] = useState('sovereign'); // sovereign | industrial | modern
  const [activePage, setActivePage] = useState('home'); // home | about | activities | projects | equipment | contact
  const [isChecklistOpen, setIsChecklistOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const t = translations[lang];

  // Apply theme class to document body
  useEffect(() => {
    document.body.className = `theme-${theme}`;
  }, [theme]);

  // Scroll listener for back to top
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setActivePage('home');
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 50);
  };

  const handleOpenRfq = () => {
    setActivePage('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Primary Header */}
      <Navbar
        lang={lang}
        setLang={setLang}
        theme={theme}
        setTheme={setTheme}
        activePage={activePage}
        setActivePage={setActivePage}
        t={t}
        openChecklist={() => setIsChecklistOpen(true)}
        openRfq={handleOpenRfq}
      />

      {/* Main Body */}
      <main style={{ flex: 1 }}>
        {activePage === 'home' ? (
          <>
            {/* Section 1: Hero */}
            <Hero
              t={t}
              onProjectsClick={() => scrollToSection('projects-section')}
              onContactClick={handleOpenRfq}
            />

            {/* Section 2: Our EPCI Model (6 steps) */}
            <EPCIModel t={t} />

            {/* Section 3: Our Sectors (4 cards) */}
            <Sectors
              t={t}
              onSectorClick={() => {
                setActivePage('activities');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />

            {/* Section 4: Turnkey Financed Projects (Vendor Financing) */}
            <VendorFinancing
              t={t}
              onContactClick={handleOpenRfq}
            />

            {/* Section 5: Key Figures */}
            <KeyFigures t={t} />

            {/* Section 6: Featured Projects */}
            <FeaturedProjects
              t={t}
              onSeeAllProjects={() => {
                setActivePage('projects');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />

            {/* Section 7: Our Clients & Partners */}
            <ClientsGrid t={t} />

            {/* Section 8: Our Locations (Lightweight Map) */}
            <LocationsMap t={t} />

            {/* Section 9: QHSE Commitment */}
            <QHSE t={t} />

            {/* Section 10: Final Call To Action */}
            <CallToAction
              t={t}
              onOpenRfq={handleOpenRfq}
            />
          </>
        ) : (
          <InnerPages
            activePage={activePage}
            t={t}
            onGoHome={() => {
              setActivePage('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        t={t}
        onNavClick={(id) => {
          setActivePage(id);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenChecklist={() => setIsChecklistOpen(true)}
      />

      {/* Persistent Client Reviewer Controls Floating Pill */}
      <div className="floating-bar">
        {/* Theme pill */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.78rem', color: '#cbd5e1' }}>
          <Palette size={14} style={{ color: 'var(--accent-gold)' }} />
          <span style={{ fontWeight: 600 }}>Option:</span>
          <select
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            style={{
              backgroundColor: 'var(--bg-primary)',
              color: 'var(--accent-gold)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '4px',
              padding: '0.2rem 0.4rem',
              fontSize: '0.75rem',
              fontWeight: 700,
              cursor: 'pointer'
            }}
          >
            <option value="sovereign">1. Souverain (Parlym)</option>
            <option value="industrial">2. Industriel Lourd</option>
            <option value="modern">3. Transition Énergétique</option>
          </select>
        </div>

        <div style={{ width: '1px', height: '16px', backgroundColor: 'var(--border-subtle)' }} />

        {/* Language button */}
        <button
          onClick={() => setLang(lang === 'fr' ? 'en' : 'fr')}
          style={{
            background: 'none',
            border: 'none',
            color: '#f8fafc',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.35rem',
            fontSize: '0.78rem',
            fontWeight: 700,
            cursor: 'pointer'
          }}
          title="Basculer Français / Anglais"
        >
          <Globe size={14} style={{ color: 'var(--accent-gold)' }} />
          <span>{lang.toUpperCase()}</span>
        </button>

        <div style={{ width: '1px', height: '16px', backgroundColor: 'var(--border-subtle)' }} />

        {/* Checklist button */}
        <button
          onClick={() => setIsChecklistOpen(true)}
          style={{
            background: 'var(--accent-gold-soft)',
            border: '1px solid var(--accent-gold)',
            color: 'var(--accent-gold)',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.35rem',
            padding: '0.3rem 0.65rem',
            borderRadius: '9999px',
            fontSize: '0.78rem',
            fontWeight: 700,
            cursor: 'pointer'
          }}
        >
          <FileCheck2 size={13} />
          <span>Brief & Spécifications</span>
        </button>

        {/* Back to top if scrolled */}
        {showScrollTop && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            style={{
              background: 'none',
              border: 'none',
              color: '#94a3b8',
              cursor: 'pointer',
              padding: '0.2rem',
              display: 'flex',
              alignItems: 'center'
            }}
            title="Haut de page"
          >
            <ArrowUp size={15} />
          </button>
        )}
      </div>

      {/* Client Brief & Checklist Modal */}
      <ClientChecklistModal
        isOpen={isChecklistOpen}
        onClose={() => setIsChecklistOpen(false)}
      />
    </div>
  );
}
