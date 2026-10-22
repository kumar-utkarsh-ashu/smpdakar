import React, { useState } from 'react';
import { LayoutGrid, Play } from 'lucide-react';

export default function ClientsGrid({ t }) {
  const [viewMode, setViewMode] = useState('marquee'); // 'marquee' | 'grid'

  const clientLogos = [
    { 
      name: "TotalEnergies", 
      logo: "/images/clients/total.png", 
      industry: "Major Pétrolière & Gaz"
    },
    { 
      name: "SAR (Raffinerie de Mbao)", 
      logo: "/images/clients/sar.svg", 
      industry: "Raffinerie Nationale du Sénégal"
    },
    { 
      name: "ICS (Indorama)", 
      logo: "/images/clients/ics.png", 
      industry: "Industries Chimiques du Sénégal"
    },
    { 
      name: "Grande Côte Operations (Eramet)", 
      logo: "/images/clients/gco.png", 
      industry: "Mines & Sables Titanifères"
    },
    { 
      name: "Senelec", 
      logo: "/images/clients/senelec.png", 
      industry: "Électricité du Sénégal"
    },
    { 
      name: "Vivo Energy (Shell)", 
      logo: "/images/clients/vivo.svg", 
      industry: "Distribution & Dépôts Carburants"
    },
    { 
      name: "Oryx Energies", 
      logo: "/images/clients/oryx.svg", 
      industry: "Terminaux Pétroliers & GPL"
    },
    { 
      name: "Puma Energy", 
      logo: "/images/clients/puma.svg", 
      industry: "Stockage Hydrocarbures Mondial"
    },
    { 
      name: "DP World Dakar", 
      logo: "/images/clients/dpworld.png", 
      industry: "Infrastructures Portuaires"
    },
    { 
      name: "OLA Energy (OiLibya)", 
      logo: "/images/clients/oilibya.png", 
      industry: "Distribution & Lubrifiants"
    },
    { 
      name: "Teranga Gold / Sabodala", 
      logo: "/images/clients/teranga-gold.png", 
      industry: "Exploitation Minière Aurifère"
    },
    { 
      name: "Touba Gaz", 
      logo: "/images/clients/toubagaz.svg", 
      industry: "Gaz Propane & Butane GPL"
    },
    { 
      name: "PETROSEN", 
      logo: "/images/clients/petrosen.svg", 
      industry: "Compagnie Pétrolière Nationale"
    }
  ];

  // Duplicate list for seamless infinite marquee loop
  const marqueeList = [...clientLogos, ...clientLogos];

  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--bg-primary)', borderBottom: '1px solid var(--border-subtle)', overflow: 'hidden' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1rem', marginBottom: '2.5rem' }}>
          <div>
            <div className="section-tag">
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--accent-gold)' }}></span>
              <span>{t.clients.tag}</span>
            </div>
            <h2 className="section-title">{t.clients.title}</h2>
            <p className="section-desc">{t.clients.subtitle}</p>
          </div>

          {/* Toggle between Marquee and Grid */}
          <div style={{ display: 'inline-flex', background: 'var(--bg-surface)', border: '1px solid var(--border-subtle)', borderRadius: '6px', padding: '3px' }}>
            <button
              onClick={() => setViewMode('marquee')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                backgroundColor: viewMode === 'marquee' ? 'var(--accent-gold)' : 'transparent',
                color: viewMode === 'marquee' ? '#ffffff' : 'var(--text-muted)',
                border: 'none',
                padding: '0.35rem 0.75rem',
                borderRadius: '4px',
                fontSize: '0.78rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              <Play size={12} />
              <span>Défilement Continu</span>
            </button>

            <button
              onClick={() => setViewMode('grid')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                backgroundColor: viewMode === 'grid' ? 'var(--accent-gold)' : 'transparent',
                color: viewMode === 'grid' ? '#ffffff' : 'var(--text-muted)',
                border: 'none',
                padding: '0.35rem 0.75rem',
                borderRadius: '4px',
                fontSize: '0.78rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              <LayoutGrid size={12} />
              <span>Grille Complète</span>
            </button>
          </div>
        </div>

        {/* View Mode 1: Smooth Infinite Running Marquee */}
        {viewMode === 'marquee' ? (
          <div style={{
            position: 'relative',
            width: '100%',
            overflow: 'hidden',
            padding: '1rem 0'
          }}>
            {/* Fade edge masks */}
            <div style={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: 0,
              width: '80px',
              background: 'linear-gradient(90deg, var(--bg-primary) 0%, transparent 100%)',
              zIndex: 10,
              pointerEvents: 'none'
            }} />
            <div style={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              right: 0,
              width: '80px',
              background: 'linear-gradient(270deg, var(--bg-primary) 0%, transparent 100%)',
              zIndex: 10,
              pointerEvents: 'none'
            }} />

            <div className="marquee-track">
              {marqueeList.map((client, idx) => (
                <div
                  key={idx}
                  style={{
                    width: '210px',
                    height: '115px',
                    backgroundColor: '#ffffff',
                    border: '1px solid rgba(0, 0, 0, 0.08)',
                    borderRadius: '8px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '0.85rem',
                    boxShadow: '0 4px 14px rgba(0, 0, 0, 0.06)',
                    flexShrink: 0,
                    transition: 'all 0.25s ease'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow = '0 12px 24px rgba(0, 0, 0, 0.12)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 14px rgba(0, 0, 0, 0.06)';
                  }}
                >
                  <img
                    src={client.logo}
                    alt={client.name}
                    style={{
                      maxHeight: '44px',
                      maxWidth: '150px',
                      objectFit: 'contain'
                    }}
                  />
                  <div style={{ fontSize: '0.7rem', color: '#64748b', fontWeight: 600, marginTop: '0.45rem', textAlign: 'center', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', width: '100%' }}>
                    {client.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          /* View Mode 2: Full Unified Grid */
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 180px), 1fr))',
            gap: '1rem'
          }}>
            {clientLogos.map((client, idx) => (
              <div
                key={idx}
                className="card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '1.25rem 1rem',
                  minHeight: '125px',
                  backgroundColor: '#ffffff',
                  border: '1px solid rgba(0, 0, 0, 0.08)',
                  boxShadow: '0 4px 14px rgba(0, 0, 0, 0.05)'
                }}
              >
                <div style={{ height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.5rem' }}>
                  <img
                    src={client.logo}
                    alt={client.name}
                    style={{ maxHeight: '42px', maxWidth: '140px', objectFit: 'contain' }}
                  />
                </div>
                <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#0f172a', textAlign: 'center' }}>
                  {client.name}
                </div>
                <div style={{ fontSize: '0.68rem', color: '#d97706', fontWeight: 600, textAlign: 'center' }}>
                  {client.industry}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
