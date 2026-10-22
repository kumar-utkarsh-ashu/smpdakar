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

export default function App() {
  const [lang, setLang] = useState('fr');
  const [theme, setTheme] = useState('sovereign'); // sovereign | industrial | modern
  const [activePage, setActivePage] = useState('home'); // home | about | activities | projects | equipment | contact

  const t = translations[lang];

  // Apply theme class to document body
  useEffect(() => {
    document.body.className = `theme-${theme}`;
  }, [theme]);

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
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', width: '100%' }}>
      {/* Sticky Corporate Header */}
      <Navbar
        lang={lang}
        setLang={setLang}
        theme={theme}
        setTheme={setTheme}
        activePage={activePage}
        setActivePage={setActivePage}
        t={t}
        openRfq={handleOpenRfq}
      />

      {/* Main Body */}
      <main style={{ flex: 1, width: '100%' }}>
        {activePage === 'home' ? (
          <>
            {/* Section 1: Hero (Short hero per Parlym layout) */}
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
      />
    </div>
  );
}
