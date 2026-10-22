import React from 'react';

export default function ClientsGrid({ t }) {
  const clientLogos = [
    { 
      name: "TotalEnergies", 
      logo: "/images/clients/total.png", 
      industry: "Major Pétrolière & Gaz",
      bgLight: true
    },
    { 
      name: "Société Africaine de Raffinage (SAR)", 
      logo: "/images/clients/sar.svg", 
      industry: "Raffinerie Nationale de Mbao",
      bgLight: false
    },
    { 
      name: "ICS (Industries Chimiques du Sénégal)", 
      logo: "/images/clients/ics.png", 
      industry: "Chimie & Engrais (Indorama)",
      bgLight: true
    },
    { 
      name: "Grande Côte Operations (Eramet)", 
      logo: "/images/clients/gco.png", 
      industry: "Mines & Sables Titanifères",
      bgLight: true
    },
    { 
      name: "Senelec", 
      logo: "/images/clients/senelec.png", 
      industry: "Électricité du Sénégal",
      bgLight: true
    },
    { 
      name: "Vivo Energy (Shell)", 
      logo: "/images/clients/vivo.svg", 
      industry: "Distribution & Dépôts Carburants",
      bgLight: false
    },
    { 
      name: "Oryx Energies", 
      logo: "/images/clients/oryx.svg", 
      industry: "Terminaux Pétroliers & GPL",
      bgLight: false
    },
    { 
      name: "Puma Energy", 
      logo: "/images/clients/puma.svg", 
      industry: "Stockage Hydrocarbures Mondial",
      bgLight: false
    },
    { 
      name: "DP World Dakar", 
      logo: "/images/clients/dpworld.png", 
      industry: "Infrastructures Portuaires",
      bgLight: true
    },
    { 
      name: "OLA Energy (OiLibya)", 
      logo: "/images/clients/oilibya.png", 
      industry: "Distribution & Lubrifiants",
      bgLight: true
    },
    { 
      name: "Teranga Gold / Sabodala", 
      logo: "/images/clients/teranga-gold.png", 
      industry: "Exploitation Minière Aurifère",
      bgLight: true
    },
    { 
      name: "Touba Gaz", 
      logo: "/images/clients/toubagaz.svg", 
      industry: "Gaz Propane & Butane GPL",
      bgLight: false
    },
    { 
      name: "PETROSEN", 
      logo: "/images/clients/petrosen.svg", 
      industry: "Compagnie Pétrolière Nationale",
      bgLight: false
    }
  ];

  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--bg-primary)', borderBottom: '1px solid var(--border-subtle)' }}>
      <div className="container">
        {/* Section Header */}
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
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 180px), 1fr))',
          gap: '1rem',
          alignItems: 'stretch'
        }}>
          {clientLogos.map((client, idx) => (
            <div
              key={idx}
              className="card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                padding: '1.25rem 1rem',
                minHeight: '125px',
                transition: 'all 0.25s ease',
                position: 'relative'
              }}
            >
              {/* Logo Image Box */}
              <div style={{
                height: '60px',
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '0.65rem',
                padding: '0.35rem',
                borderRadius: '6px',
                backgroundColor: client.bgLight ? '#ffffff' : 'transparent',
                boxShadow: client.bgLight ? '0 2px 6px rgba(0,0,0,0.06)' : 'none'
              }}>
                <img
                  src={client.logo}
                  alt={client.name}
                  style={{
                    maxHeight: '48px',
                    maxWidth: '140px',
                    objectFit: 'contain',
                    transition: 'transform 0.2s ease'
                  }}
                  onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
                  onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                  onError={(e) => {
                    // Fallback to text styling if image fails
                    e.target.style.display = 'none';
                  }}
                />
              </div>

              {/* Company & Industry Label */}
              <div style={{
                fontSize: '0.85rem',
                fontWeight: 700,
                color: 'var(--text-main)',
                lineHeight: 1.25,
                marginBottom: '0.2rem'
              }}>
                {client.name}
              </div>

              <div style={{
                fontSize: '0.7rem',
                color: 'var(--accent-gold)',
                fontWeight: 600
              }}>
                {client.industry}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
