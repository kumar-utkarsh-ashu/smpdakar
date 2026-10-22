import React, { useState } from 'react';
import { MapPin, Navigation } from 'lucide-react';

export default function LocationsMap({ t }) {
  const [selectedCountry, setSelectedCountry] = useState(0);

  const countryDetails = [
    {
      name: "Sénégal (Siège & Ateliers)",
      hub: true,
      city: "Dakar (Km 18, Route de Rufisque)",
      facilities: "15 000 m² d'ateliers couverts, ponts roulants 25T, Machine Shop de précision 24/7 pour forage offshore, zone de sablage et peinture.",
      keyProjects: "Raffinerie SAR (Mbao), Touba Gaz, ICS Sénégal, GCO Diogo, Mine d'Or de Mako (Kédougou)."
    },
    {
      name: "Gambie (Mandinary)",
      hub: false,
      city: "Mandinary / Banjul",
      facilities: "Dépôt pétrolier stratégique national de 40 000 m³, appontement maritime pour pétroliers et rampes de chargement.",
      keyProjects: "Mandinary Strategic Oil Terminal (GNPC / Gouvernement de Gambie)."
    },
    {
      name: "Mauritanie",
      hub: false,
      city: "Nouakchott / Nouadhibou",
      facilities: "Construction de parcs de bacs pour carburants marins, stations de dépotage et tuyauteries côtières.",
      keyProjects: "Dépôt pétrolier MEP Nouakchott, interconnexions d'hydrocarbures."
    },
    {
      name: "Mali",
      hub: false,
      city: "Bamako / Bassins Miniers",
      facilities: "Charpente lourde de bâtiments industriels, cuves de stockage de carburant pour sites miniers isolés.",
      keyProjects: "Dépôts de carburant minier et structures industrielles."
    },
    {
      name: "Guinée",
      hub: false,
      city: "Conakry / Boké",
      facilities: "Structures de convoyage et de manutention pour terminaux de bauxite et infrastructures portuaires.",
      keyProjects: "Hangars industriels et structures mécanosoudées."
    },
    {
      name: "Côte d'Ivoire",
      hub: false,
      city: "Abidjan",
      facilities: "Partenariats de sous-traitance industrielle et projets de stockage d'énergie.",
      keyProjects: "Études et collaborations sur dépôts côtiers."
    }
  ];

  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--bg-secondary)', borderBottom: '1px solid var(--border-subtle)' }}>
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="section-tag">
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--accent-gold)' }}></span>
            <span>{t.locations.tag}</span>
          </div>
          <h2 className="section-title">{t.locations.title}</h2>
          <p className="section-desc">{t.locations.desc}</p>
        </div>

        {/* Interactive Map Layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
          gap: '1.5rem',
          alignItems: 'start'
        }}>
          {/* Vector Map Visualization (Lightweight SVG with theme contrast) */}
          <div style={{
            backgroundColor: 'var(--bg-surface)',
            border: '1px solid var(--border-strong)',
            borderRadius: '10px',
            padding: 'clamp(1rem, 2.5vw, 1.5rem)',
            position: 'relative',
            boxShadow: 'var(--shadow-card)',
            width: '100%'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.5rem' }}>
              <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--accent-gold)', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <Navigation size={13} />
                <span>Afrique de l'Ouest & Golfe de Guinée</span>
              </div>
              <span className="badge" style={{ fontSize: '0.65rem' }}>
                6 Pays Actifs
              </span>
            </div>

            {/* SVG adapted to dark and light modes */}
            <div style={{ position: 'relative', width: '100%', height: 'auto', minHeight: '240px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg viewBox="0 0 500 400" style={{ width: '100%', height: 'auto', maxHeight: '300px' }}>
                <path 
                  d="M 60 120 Q 90 80, 150 70 Q 230 60, 310 90 Q 370 110, 420 180 Q 400 280, 320 320 Q 240 330, 160 300 Q 110 260, 80 200 Z" 
                  fill="var(--map-land)" 
                  stroke="var(--border-strong)" 
                  strokeWidth="2"
                />

                <line x1="90" y1="180" x2="180" y2="120" stroke="var(--accent-gold)" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.6" />
                <line x1="90" y1="180" x2="110" y2="200" stroke="var(--accent-gold)" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.6" />
                <line x1="90" y1="180" x2="220" y2="210" stroke="var(--accent-gold)" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.6" />
                <line x1="90" y1="180" x2="150" y2="260" stroke="var(--accent-gold)" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.6" />
                <line x1="90" y1="180" x2="270" y2="280" stroke="var(--accent-gold)" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.6" />

                <circle cx="90" cy="180" r="14" fill="var(--accent-gold-soft)" stroke="var(--accent-gold)" strokeWidth="2" />
                <circle cx="90" cy="180" r="6" fill="var(--accent-gold)" />
                <text x="75" y="155" fill="var(--map-text)" fontSize="12" fontWeight="800" textAnchor="middle">DAKAR HQ</text>
                <text x="75" y="168" fill="var(--accent-gold)" fontSize="9" fontWeight="700" textAnchor="middle">15 000 m²</text>

                <circle cx="110" cy="200" r="6" fill="#0284c7" />
                <text x="135" y="204" fill="var(--map-text)" fontSize="10" fontWeight="700">Gambie</text>

                <circle cx="180" cy="120" r="6" fill="#0284c7" />
                <text x="195" y="124" fill="var(--map-text)" fontSize="10" fontWeight="700">Mauritanie</text>

                <circle cx="220" cy="210" r="6" fill="#0284c7" />
                <text x="235" y="214" fill="var(--map-text)" fontSize="10" fontWeight="700">Mali</text>

                <circle cx="150" cy="260" r="6" fill="#0284c7" />
                <text x="165" y="264" fill="var(--map-text)" fontSize="10" fontWeight="700">Guinée</text>

                <circle cx="270" cy="280" r="6" fill="#0284c7" />
                <text x="285" y="284" fill="var(--map-text)" fontSize="10" fontWeight="700">Côte d'Ivoire</text>
              </svg>
            </div>

            <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textAlign: 'center', marginTop: '0.5rem' }}>
              Base centrale : Dakar, Sénégal • Mobilisation régionale rapide
            </div>
          </div>

          {/* Interactive Country List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
            {countryDetails.map((c, idx) => {
              const isSelected = selectedCountry === idx;
              return (
                <div
                  key={idx}
                  onClick={() => setSelectedCountry(idx)}
                  style={{
                    backgroundColor: isSelected ? 'var(--bg-card-hover)' : 'var(--bg-card)',
                    border: isSelected ? '1px solid var(--accent-gold)' : '1px solid var(--border-subtle)',
                    borderRadius: '8px',
                    padding: '1rem',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    boxShadow: isSelected ? '0 4px 14px rgba(0,0,0,0.1)' : 'none'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.3rem', flexWrap: 'wrap', gap: '0.35rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <MapPin size={15} style={{ color: c.hub ? 'var(--accent-gold)' : '#0284c7' }} />
                      <span style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-main)' }}>
                        {c.name}
                      </span>
                    </div>
                    {c.hub && (
                      <span className="badge" style={{ fontSize: '0.62rem', padding: '0.1rem 0.35rem' }}>
                        Siège & Ateliers
                      </span>
                    )}
                  </div>

                  <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: 1.45, marginBottom: '0.4rem' }}>
                    {c.facilities}
                  </p>

                  <div style={{ fontSize: '0.74rem', color: 'var(--accent-gold)', fontWeight: 600 }}>
                    <strong>Projets :</strong> {c.keyProjects}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
