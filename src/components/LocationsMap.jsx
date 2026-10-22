import React, { useState } from 'react';
import { 
  MapPin, 
  Navigation, 
  Wrench, 
  Layers, 
  Clock, 
  ShieldCheck,
  CheckCircle2,
  Activity
} from 'lucide-react';

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
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--accent-gold)' }}></span>
            <span>{t.locations.tag}</span>
          </div>
          <h2 className="section-title">{t.locations.title}</h2>
          <p className="section-desc">{t.locations.desc}</p>
        </div>

        {/* 2-Column Balanced Layout - Zero Dead Space */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 360px), 1fr))',
          gap: '1.75rem',
          alignItems: 'stretch'
        }}>
          {/* Left Column: Animated Map Card + Dakar Industrial Live Hub Card */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {/* 1. Animated Vector Map Card */}
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
                <div style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--accent-gold)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Navigation size={14} />
                  <span>Afrique de l'Ouest & Golfe de Guinée</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.72rem', color: '#22c55e', fontWeight: 700 }}>
                  <span style={{ width: '7px', height: '7px', borderRadius: '50%', backgroundColor: '#22c55e', display: 'inline-block' }}></span>
                  <span>Opérations Actives</span>
                </div>
              </div>

              {/* Animated Map SVG with Radar Waves & Flowing Beams */}
              <div style={{ position: 'relative', width: '100%', minHeight: '260px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg viewBox="0 0 500 400" style={{ width: '100%', height: 'auto', maxHeight: '310px' }}>
                  {/* African Coastline Contour */}
                  <path 
                    d="M 60 120 Q 90 80, 150 70 Q 230 60, 310 90 Q 370 110, 420 180 Q 400 280, 320 320 Q 240 330, 160 300 Q 110 260, 80 200 Z" 
                    fill="var(--map-land)" 
                    stroke="var(--border-strong)" 
                    strokeWidth="2"
                  />

                  {/* Flowing animated connection beams */}
                  <line x1="90" y1="180" x2="180" y2="120" stroke="var(--accent-gold)" strokeWidth="1.5" className="animated-beam" opacity="0.8" />
                  <line x1="90" y1="180" x2="110" y2="200" stroke="var(--accent-gold)" strokeWidth="1.5" className="animated-beam" opacity="0.8" />
                  <line x1="90" y1="180" x2="220" y2="210" stroke="var(--accent-gold)" strokeWidth="1.5" className="animated-beam" opacity="0.8" />
                  <line x1="90" y1="180" x2="150" y2="260" stroke="var(--accent-gold)" strokeWidth="1.5" className="animated-beam" opacity="0.8" />
                  <line x1="90" y1="180" x2="270" y2="280" stroke="var(--accent-gold)" strokeWidth="1.5" className="animated-beam" opacity="0.8" />

                  {/* Radar Wave Pulse Radiating from Dakar Hub */}
                  <circle cx="90" cy="180" r="16" fill="none" stroke="var(--accent-gold)" className="radar-ring" />
                  <circle cx="90" cy="180" r="16" fill="none" stroke="#38bdf8" className="radar-ring-delayed" />

                  {/* Dakar HQ Main Pin */}
                  <circle cx="90" cy="180" r="12" fill="var(--accent-gold-soft)" stroke="var(--accent-gold)" strokeWidth="2.5" />
                  <circle cx="90" cy="180" r="5.5" fill="var(--accent-gold)" />
                  <text x="75" y="152" fill="var(--map-text)" fontSize="12" fontWeight="800" textAnchor="middle">DAKAR HQ</text>
                  <text x="75" y="165" fill="var(--accent-gold)" fontSize="9" fontWeight="700" textAnchor="middle">15 000 m²</text>

                  {/* Country Target Pins */}
                  <circle cx="110" cy="200" r={selectedCountry === 1 ? 9 : 6} fill={selectedCountry === 1 ? 'var(--accent-gold)' : '#0284c7'} />
                  <text x="135" y="204" fill="var(--map-text)" fontSize="10" fontWeight="700">Gambie</text>

                  <circle cx="180" cy="120" r={selectedCountry === 2 ? 9 : 6} fill={selectedCountry === 2 ? 'var(--accent-gold)' : '#0284c7'} />
                  <text x="195" y="124" fill="var(--map-text)" fontSize="10" fontWeight="700">Mauritanie</text>

                  <circle cx="220" cy="210" r={selectedCountry === 3 ? 9 : 6} fill={selectedCountry === 3 ? 'var(--accent-gold)' : '#0284c7'} />
                  <text x="235" y="214" fill="var(--map-text)" fontSize="10" fontWeight="700">Mali</text>

                  <circle cx="150" cy="260" r={selectedCountry === 4 ? 9 : 6} fill={selectedCountry === 4 ? 'var(--accent-gold)' : '#0284c7'} />
                  <text x="165" y="264" fill="var(--map-text)" fontSize="10" fontWeight="700">Guinée</text>

                  <circle cx="270" cy="280" r={selectedCountry === 5 ? 9 : 6} fill={selectedCountry === 5 ? 'var(--accent-gold)' : '#0284c7'} />
                  <text x="285" y="284" fill="var(--map-text)" fontSize="10" fontWeight="700">Côte d'Ivoire</text>
                </svg>
              </div>
            </div>

            {/* 2. Fills the gap (previously empty red box): Dakar Live Operations Card */}
            <div style={{
              backgroundColor: 'var(--bg-surface)',
              border: '1px solid var(--border-strong)',
              borderRadius: '10px',
              padding: '1.35rem',
              boxShadow: 'var(--shadow-card)',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.85rem'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.9rem', fontWeight: 800, color: 'var(--text-main)' }}>
                  <Activity size={16} style={{ color: 'var(--accent-gold)' }} />
                  <span>Hub Opérationnel de Dakar — Statut en Direct</span>
                </div>
                <span className="badge" style={{ fontSize: '0.65rem', padding: '0.15rem 0.45rem' }}>
                  Base Permanente
                </span>
              </div>

              {/* Grid of operational capabilities */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', fontSize: '0.82rem' }}>
                <div style={{ backgroundColor: 'var(--bg-card)', padding: '0.75rem', borderRadius: '6px', border: '1px solid var(--border-subtle)' }}>
                  <div style={{ color: 'var(--text-dim)', fontSize: '0.7rem', textTransform: 'uppercase', fontWeight: 700 }}>Surface Ateliers</div>
                  <div style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--accent-gold)' }}>15 000 m²</div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Ateliers couverts à Rufisque</div>
                </div>

                <div style={{ backgroundColor: 'var(--bg-card)', padding: '0.75rem', borderRadius: '6px', border: '1px solid var(--border-subtle)' }}>
                  <div style={{ color: 'var(--text-dim)', fontSize: '0.7rem', textTransform: 'uppercase', fontWeight: 700 }}>Machine Shop Forage</div>
                  <div style={{ fontSize: '1.15rem', fontWeight: 800, color: '#22c55e' }}>24/7 En Ligne</div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Support campagnes offshore</div>
                </div>

                <div style={{ backgroundColor: 'var(--bg-card)', padding: '0.75rem', borderRadius: '6px', border: '1px solid var(--border-subtle)' }}>
                  <div style={{ color: 'var(--text-dim)', fontSize: '0.7rem', textTransform: 'uppercase', fontWeight: 700 }}>Levage sous crochet</div>
                  <div style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--text-main)' }}>25 Tonnes</div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Ponts roulants grande portée</div>
                </div>

                <div style={{ backgroundColor: 'var(--bg-card)', padding: '0.75rem', borderRadius: '6px', border: '1px solid var(--border-subtle)' }}>
                  <div style={{ color: 'var(--text-dim)', fontSize: '0.7rem', textTransform: 'uppercase', fontWeight: 700 }}>Mobilisation Sous-Région</div>
                  <div style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--accent-gold)' }}>&lt; 48 Heures</div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Projection équipes & outillage</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Country List */}
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
                    padding: '1.1rem',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    boxShadow: isSelected ? '0 6px 18px rgba(0,0,0,0.15)' : 'none',
                    transform: isSelected ? 'translateX(4px)' : 'none'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.3rem', flexWrap: 'wrap', gap: '0.35rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                      <MapPin size={16} style={{ color: c.hub ? 'var(--accent-gold)' : '#0284c7' }} />
                      <span style={{ fontWeight: 700, fontSize: '0.98rem', color: 'var(--text-main)' }}>
                        {c.name}
                      </span>
                    </div>
                    {c.hub && (
                      <span className="badge" style={{ fontSize: '0.62rem', padding: '0.12rem 0.4rem' }}>
                        Siège & Ateliers
                      </span>
                    )}
                  </div>

                  <p style={{ fontSize: '0.84rem', color: 'var(--text-muted)', lineHeight: 1.45, marginBottom: '0.4rem' }}>
                    {c.facilities}
                  </p>

                  <div style={{ fontSize: '0.75rem', color: 'var(--accent-gold)', fontWeight: 600 }}>
                    <strong>Projets majeurs :</strong> {c.keyProjects}
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
