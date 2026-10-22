import React from 'react';

export default function ClientsGrid({ t }) {
  const clients = [
    { name: "TotalEnergies", industry: "Oil & Gas Major", type: "Multinational" },
    { name: "Vivo Energy (Shell)", industry: "Retail & Storage", type: "Pan-African" },
    { name: "Société Africaine de Raffinage (SAR)", industry: "Raffinage National", type: "National (Sénégal)" },
    { name: "ICS (Industries Chimiques du Sénégal)", industry: "Chimie & Mines", type: "Indorama Group" },
    { name: "Eramet (Grande Côte Operations)", industry: "Mines & Sables Titanifères", type: "International" },
    { name: "Toro Gold / Resolute Mining", industry: "Mines d'Or (Mako)", type: "International" },
    { name: "Oryx Energies", industry: "Stockage Hydrocarbures & GPL", type: "Pan-African" },
    { name: "Puma Energy", industry: "Terminaux Pétroliers", type: "Global" },
    { name: "GNPC (Gambia National Petroleum)", industry: "Société Nationale de Pétrole", type: "Sovereign State" },
    { name: "Touba Gaz", industry: "Distribution GPL", type: "Regional" },
    { name: "PETROSEN", industry: "Compagnie Pétrolière Nationale", type: "Sovereign State" },
    { name: "Port Autonome de Dakar (PAD)", industry: "Logistique & Appontements", type: "Port Authority" }
  ];

  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--bg-primary)', borderBottom: '1px solid var(--border-subtle)' }}>
      <div className="container">
        {/* Header */}
        <div className="section-header center">
          <div className="section-tag">
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--accent-gold)' }}></span>
            <span>{t.clients.tag}</span>
          </div>
          <h2 className="section-title">{t.clients.title}</h2>
          <p className="section-desc">{t.clients.subtitle}</p>
        </div>

        {/* Corporate Client Logo Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))',
          gap: '1.25rem'
        }}>
          {clients.map((c, i) => (
            <div
              key={i}
              className="card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                padding: '1.6rem 1rem',
                minHeight: '110px',
                transition: 'all 0.2s ease'
              }}
            >
              <div style={{
                fontSize: '1.05rem',
                fontWeight: 800,
                color: 'var(--text-main)',
                letterSpacing: '-0.01em',
                marginBottom: '0.35rem'
              }}>
                {c.name}
              </div>
              <div style={{ fontSize: '0.72rem', color: 'var(--accent-gold)', fontWeight: 600 }}>
                {c.industry}
              </div>
              <div style={{ fontSize: '0.65rem', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.05em', marginTop: '0.2rem' }}>
                {c.type}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
