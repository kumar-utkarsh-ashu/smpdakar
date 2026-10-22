import React, { useState } from 'react';
import { MapPin, Building, Anchor, CheckCircle2, Navigation } from 'lucide-react';

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
      facilities: "Dépôt pétrolier stratégique national de 40 000 m³, appontement maritime pour pétroliers hauturiers et rampes de chargement.",
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
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2rem',
          alignItems: 'center'
        }}>
          {/* Vector Map Visualization (Lightweight SVG) */}
          <div style={{
            backgroundColor: 'var(--bg-surface)',
            border: '1px solid var(--border-strong)',
            borderRadius: '12px',
            padding: '2rem',
            position: 'relative',
            boxShadow: 'var(--shadow-card)'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
              <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--accent-gold)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Navigation size={14} />
                <span>Région Afrique de l'Ouest & Golfe de Guinée</span>
              </div>
              <span className="badge" style={{ fontSize: '0.7rem' }}>
                6 Pays Actifs
              </span>
            </div>

            {/* Custom stylized vector chart */}
            <div style={{ position: 'relative', height: '320px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg viewBox="0 0 500 400" style={{ width: '100%', height: '100%' }}>
                {/* Simplified Coastline & Region Outlines */}
                <path 
                  d="M 60 120 Q 90 80, 150 70 Q 230 60, 310 90 Q 370 110, 420 180 Q 400 280, 320 320 Q 240 330, 160 300 Q 110 260, 80 200 Z" 
                  fill="rgba(15, 33, 58, 0.9)" 
                  stroke="var(--border-strong)" 
                  strokeWidth="2"
                />

                {/* Country Connection Lines */}
                <line x1="90" y1="180" x2="180" y2="120" stroke="var(--accent-gold)" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.6" />
                <line x1="90" y1="180" x2="110" y2="200" stroke="var(--accent-gold)" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.6" />
                <line x1="90" y1="180" x2="220" y2="210" stroke="var(--accent-gold)" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.6" />
                <line x1="90" y1="180" x2="150" y2="260" stroke="var(--accent-gold)" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.6" />
                <line x1="90" y1="180" x2="270" y2="280" stroke="var(--accent-gold)" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.6" />

                {/* Dakar Main Hub Pin */}
                <circle cx="90" cy="180" r="14" fill="var(--accent-gold-soft)" stroke="var(--accent-gold)" strokeWidth="2" />
                <circle cx="90" cy="180" r="6" fill="var(--accent-gold)" />
                <text x="75" y="155" fill="#ffffff" fontSize="12" fontWeight="800" textAnchor="middle">DAKAR HQ</text>
                <text x="75" y="168" fill="var(--accent-gold)" fontSize="9" fontWeight="700" textAnchor="middle">15 000 m²</text>

                {/* The Gambia Pin */}
                <circle cx="110" cy="200" r="6" fill="#38bdf8" />
                <text x="135" y="204" fill="#cbd5e1" fontSize="10" fontWeight="600">Gambie</text>

                {/* Mauritania Pin */}
                <circle cx="180" cy="120" r="6" fill="#38bdf8" />
                <text x="195" y="124" fill="#cbd5e1" fontSize="10" fontWeight="600">Mauritanie</text>

                {/* Mali Pin */}
                <circle cx="220" cy="210" r="6" fill="#38bdf8" />
                <text x="235" y="214" fill="#cbd5e1" fontSize="10" fontWeight="600">Mali</text>

                {/* Guinea Pin */}
                <circle cx="150" cy="260" r="6" fill="#38bdf8" />
                <text x="165" y="264" fill="#cbd5e1" fontSize="10" fontWeight="600">Guinée</text>

                {/* Côte d'Ivoire Pin */}
                <circle cx="270" cy="280" r="6" fill="#38bdf8" />
                <text x="285" y="284" fill="#cbd5e1" fontSize="10" fontWeight="600">Côte d'Ivoire</text>
              </svg>
            </div>

            <div style={{ fontSize: '0.8rem', color: 'var(--text-dim)', textAlign: 'center', marginTop: '0.75rem' }}>
              Base opérationnelle centrale : Dakar, Sénégal • Déploiement mobile sous 48h
            </div>
          </div>

          {/* Interactive Country List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {countryDetails.map((c, idx) => {
              const isSelected = selectedCountry === idx;
              return (
                <div
                  key={idx}
                  onClick={() => setSelectedCountry(idx)}
                  style={{
                    backgroundColor: isSelected ? 'var(--bg-surface)' : 'var(--bg-card)',
                    border: isSelected ? '1px solid var(--accent-gold)' : '1px solid var(--border-subtle)',
                    borderRadius: '8px',
                    padding: '1.25rem',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    boxShadow: isSelected ? '0 8px 20px -6px var(--accent-gold-soft)' : 'none'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <MapPin size={16} style={{ color: c.hub ? 'var(--accent-gold)' : '#38bdf8' }} />
                      <span style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--text-main)' }}>
                        {c.name}
                      </span>
                    </div>
                    {c.hub && (
                      <span className="badge" style={{ fontSize: '0.65rem', padding: '0.15rem 0.4rem' }}>
                        Siège & Ateliers
                      </span>
                    )}
                  </div>

                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.5, marginBottom: '0.5rem' }}>
                    {c.facilities}
                  </p>

                  <div style={{ fontSize: '0.75rem', color: 'var(--accent-gold)', fontWeight: 600 }}>
                    <strong>Projets clés :</strong> {c.keyProjects}
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
