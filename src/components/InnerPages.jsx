import React, { useState } from 'react';
import { 
  Building2, 
  Wrench, 
  ShieldCheck, 
  Phone, 
  Mail, 
  MapPin, 
  CheckCircle2, 
  Send
} from 'lucide-react';

export default function InnerPages({ activePage, t, onGoHome }) {
  const [rfqSubmitted, setRfqSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    phone: '',
    sector: 'Downstream / Stockage Pétrolier',
    projectType: 'EPCI Clés en Main',
    financingRequired: 'Oui (Vendor Financing)',
    message: ''
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setRfqSubmitted(true);
  };

  /* =========================================================================
     PAGE 1: À PROPOS
     ========================================================================= */
  if (activePage === 'about') {
    return (
      <div style={{ backgroundColor: 'var(--bg-primary)', paddingBottom: '4rem' }}>
        <div style={{
          backgroundColor: 'var(--bg-secondary)',
          borderBottom: '1px solid var(--border-subtle)',
          padding: 'clamp(2.5rem, 5vw, 4rem) 0'
        }}>
          <div className="container">
            <span className="badge" style={{ marginBottom: '0.65rem' }}>À Propos de SMP</span>
            <h1 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.75rem)', fontWeight: 800, marginBottom: '0.75rem' }}>
              Pionnier de la Chaudronnerie Lourde & Contractant EPCI-VF en Afrique
            </h1>
            <p style={{ fontSize: 'clamp(0.95rem, 1.8vw, 1.08rem)', color: 'var(--text-muted)', maxWidth: '780px', lineHeight: 1.6 }}>
              Depuis plus de deux décennies à Dakar, SMP conçoit, fabrique et érige les infrastructures énergétiques et industrielles qui soutiennent l'essor économique du continent africain.
            </p>
          </div>
        </div>

        <div className="container" style={{ marginTop: '3rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: '2.5rem', alignItems: 'center', marginBottom: '3rem' }}>
            <div>
              <h2 style={{ fontSize: '1.6rem', fontWeight: 800, marginBottom: '1rem' }}>
                Notre Histoire & Évolution Stratégique
              </h2>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '0.85rem', fontSize: '0.92rem' }}>
                Fondée à Dakar au cœur de la zone industrielle de Rufisque, SMP (Structures Métalliques & Pipes) a d'abord acquis une réputation d'excellence technique dans la chaudronnerie, la tuyauterie industrielle et le soudage de haute précision.
              </p>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '1.25rem', fontSize: '0.92rem' }}>
                Face aux besoins souverains grandissants des États et des majors de l'énergie, SMP a franchi une étape majeure en devenant un contractant EPCI-VF intégré. Nous sommes aujourd'hui l'un des rares acteurs ouest-africains capables non seulement de bâtir des terminaux stratégiques de stockage d'hydrocarbures conformes aux normes API 650, mais également d'apporter des solutions complètes de Vendor Financing aux gouvernements partenaires.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 150px), 1fr))', gap: '0.85rem' }}>
                <div style={{ backgroundColor: 'var(--bg-surface)', padding: '1rem', borderRadius: '6px', border: '1px solid var(--border-subtle)' }}>
                  <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--accent-gold)' }}>15 000 m²</div>
                  <div style={{ fontSize: '0.78rem', color: '#cbd5e1' }}>Ateliers couverts & parcs d'érection à Dakar</div>
                </div>
                <div style={{ backgroundColor: 'var(--bg-surface)', padding: '1rem', borderRadius: '6px', border: '1px solid var(--border-subtle)' }}>
                  <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--accent-gold)' }}>24/7</div>
                  <div style={{ fontSize: '0.78rem', color: '#cbd5e1' }}>Machine Shop dédié au forage pétrolier</div>
                </div>
              </div>
            </div>

            <div style={{ borderRadius: '8px', overflow: 'hidden', border: '1px solid var(--border-strong)', boxShadow: 'var(--shadow-elevated)' }}>
              <img src="/images/machine_shop.jpg" alt="Ateliers SMP Dakar" style={{ width: '100%', height: 'auto' }} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* =========================================================================
     PAGE 2: ACTIVITÉS
     ========================================================================= */
  if (activePage === 'activities') {
    return (
      <div style={{ backgroundColor: 'var(--bg-primary)', paddingBottom: '4rem' }}>
        <div style={{ backgroundColor: 'var(--bg-secondary)', borderBottom: '1px solid var(--border-subtle)', padding: 'clamp(2.5rem, 5vw, 4rem) 0' }}>
          <div className="container">
            <span className="badge" style={{ marginBottom: '0.65rem' }}>Périmètre Métier</span>
            <h1 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.75rem)', fontWeight: 800, marginBottom: '0.75rem' }}>
              Activités & Expertises EPCI-VF Onshore & Offshore
            </h1>
            <p style={{ fontSize: 'clamp(0.95rem, 1.8vw, 1.08rem)', color: 'var(--text-muted)', maxWidth: '780px', lineHeight: 1.6 }}>
              Une gamme complète de solutions d'ingénierie, fabrication et maintenance couvrant l'ensemble de la chaîne de valeur énergétique et industrielle.
            </p>
          </div>
        </div>

        <div className="container" style={{ marginTop: '3rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {t.sectors.items.map((sec) => (
              <div 
                key={sec.id}
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
                  gap: '1.75rem',
                  alignItems: 'center',
                  backgroundColor: 'var(--bg-surface)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '10px',
                  padding: 'clamp(1.25rem, 3vw, 2rem)',
                  boxShadow: 'var(--shadow-card)'
                }}
              >
                <div>
                  <span className="badge" style={{ marginBottom: '0.65rem' }}>{sec.badge}</span>
                  <h2 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.35rem', color: 'var(--text-main)' }}>
                    {sec.title}
                  </h2>
                  <div style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--accent-gold)', marginBottom: '0.75rem' }}>
                    {sec.highlight}
                  </div>
                  <p style={{ color: 'var(--text-muted)', lineHeight: 1.55, marginBottom: '1rem', fontSize: '0.88rem' }}>
                    {sec.desc}
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                    {sec.tags.map((tg, idx) => (
                      <span key={idx} style={{ fontSize: '0.72rem', background: 'rgba(255, 255, 255, 0.06)', padding: '0.2rem 0.5rem', borderRadius: '4px', color: '#e2e8f0', border: '1px solid var(--border-subtle)' }}>
                        ✓ {tg}
                      </span>
                    ))}
                  </div>
                </div>

                <div style={{ borderRadius: '8px', overflow: 'hidden', height: '220px' }}>
                  <img src={sec.image} alt={sec.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  /* =========================================================================
     PAGE 3: RÉALISATIONS
     ========================================================================= */
  if (activePage === 'projects') {
    return (
      <div style={{ backgroundColor: 'var(--bg-primary)', paddingBottom: '4rem' }}>
        <div style={{ backgroundColor: 'var(--bg-secondary)', borderBottom: '1px solid var(--border-subtle)', padding: 'clamp(2.5rem, 5vw, 4rem) 0' }}>
          <div className="container">
            <span className="badge" style={{ marginBottom: '0.65rem' }}>Portfolio Références</span>
            <h1 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.75rem)', fontWeight: 800, marginBottom: '0.75rem' }}>
              Nos Réalisations Industrielles & Pétrolières
            </h1>
            <p style={{ fontSize: 'clamp(0.95rem, 1.8vw, 1.08rem)', color: 'var(--text-muted)', maxWidth: '780px', lineHeight: 1.6 }}>
              Des chantiers d'envergure livrés clés en main dans le respect scrupuleux des délais et des standards de sécurité internationaux.
            </p>
          </div>
        </div>

        <div className="container" style={{ marginTop: '3rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '1.5rem' }}>
            {t.projects.items.map((p, i) => (
              <div key={i} className="card" style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                <div style={{ height: '190px', position: 'relative' }}>
                  <img src={p.image} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <span style={{ position: 'absolute', top: '0.65rem', left: '0.65rem', background: 'rgba(0,0,0,0.85)', padding: '0.2rem 0.5rem', borderRadius: '3px', fontSize: '0.68rem', color: 'var(--accent-gold)', fontWeight: 700 }}>
                    {p.category}
                  </span>
                </div>
                <div style={{ padding: '1.25rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)', marginBottom: '0.25rem' }}>{p.location} • {p.client}</div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.45rem' }}>{p.title}</h3>
                  <p style={{ fontSize: '0.84rem', color: 'var(--text-muted)', lineHeight: 1.5, marginBottom: '1rem', flex: 1 }}>{p.scope}</p>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--accent-gold)', borderTop: '1px solid var(--border-subtle)', paddingTop: '0.65rem' }}>
                    {p.stats}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  /* =========================================================================
     PAGE 4: NOS ÉQUIPEMENTS
     ========================================================================= */
  if (activePage === 'equipment') {
    const equipmentList = [
      {
        category: "Machine Shop de Haute Précision (Usinage & Forage)",
        items: [
          "Tours parallèles grande capacité jusqu'à 6 000 mm entre-pointes pour tubes de forage et tiges lourdes",
          "Fraiseuses universelles et centres d'usinage à commande numérique (CNC)",
          "Aléseuses horizontales pour pièces de chaudronnerie et têtes de puits",
          "Bancs de filetage spécialisé pour connexions pétrolières étanches"
        ]
      },
      {
        category: "Chaudronnerie Lourde & Roulage de Tôles",
        items: [
          "Rouleuses pyramidales 4 rouleaux capables de rouler jusqu'à 50 mm d'épaisseur pour cuves sous pression",
          "Bancs d'oxycoupage plasma haute définition à commande numérique (table 12 x 3 m)",
          "Presse plieuse hydraulique 400 tonnes",
          "Cintreuses de profilés et tubes grand diamètre"
        ]
      },
      {
        category: "Soudage & Assemblage Qualifié ISO / ASME",
        items: [
          "Plus de 40 postes à souder certifiés (MIG/MAG, TIG, Arc Submergé SAW sous flux)",
          "Vireurs et positionneurs de soudage automatique pour viroles jusqu'à 40 tonnes",
          "Fours de traitement thermique de détensionnement et étuves d'électrodes contrôlées",
          "Procédés de soudage qualifiés (QMOS/DMOS) pour aciers carbone, inox, duplex et super-duplex"
        ]
      },
      {
        category: "Moyens de Levage & Manutention Lourde",
        items: [
          "Ponts roulants d'atelier de 10T à 25T sous crochet avec hauteur sous poutre de 12 m",
          "Grues mobiles tout-terrain pour chantiers de montage (capacités 50T, 80T et 130T)",
          "Semi-remorques surbaissées pour transport exceptionnel de viroles et charpentes",
          "Chariots élévateurs tout-terrain pour manutention continue dans les parcs de stockage"
        ]
      },
      {
        category: "Contrôles Non Destructifs (CND) & Traitement de Surface",
        items: [
          "Cabine de sablage automatique et projection d'abrasifs métalliques",
          "Aire de peinture industrielle climatisée avec mesure d'épaisseur film sec (DFT)",
          "Équipements de radiographie X / Gamma, ultrasons phased-array et ressuage certifiés COFREND/ASNT",
          "Bancs d'épreuve hydraulique sous pression jusqu'à 400 bars avec enregistreurs numériques"
        ]
      }
    ];

    return (
      <div style={{ backgroundColor: 'var(--bg-primary)', paddingBottom: '4rem' }}>
        <div style={{ backgroundColor: 'var(--bg-secondary)', borderBottom: '1px solid var(--border-subtle)', padding: 'clamp(2.5rem, 5vw, 4rem) 0' }}>
          <div className="container">
            <span className="badge" style={{ marginBottom: '0.65rem' }}>Capacité Opérationnelle</span>
            <h1 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.75rem)', fontWeight: 800, marginBottom: '0.75rem' }}>
              Nos Équipements & Ateliers de Production à Dakar
            </h1>
            <p style={{ fontSize: 'clamp(0.95rem, 1.8vw, 1.08rem)', color: 'var(--text-muted)', maxWidth: '780px', lineHeight: 1.6 }}>
              Un parc machines industriel moderne de 15 000 m² à Dakar, doté des technologies de coupe, d'usinage, de roulage et de soudage les plus performantes d'Afrique de l'Ouest.
            </p>
          </div>
        </div>

        <div className="container" style={{ marginTop: '3rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {equipmentList.map((eq, i) => (
              <div key={i} className="card">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.85rem' }}>
                  <Wrench size={20} style={{ color: 'var(--accent-gold)' }} />
                  <h2 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-main)' }}>
                    {eq.category}
                  </h2>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))', gap: '0.65rem' }}>
                  {eq.items.map((item, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.45rem', fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.45 }}>
                      <CheckCircle2 size={15} style={{ color: 'var(--accent-gold)', flexShrink: 0, marginTop: '2px' }} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  /* =========================================================================
     PAGE 5: CONTACT & RFQ
     ========================================================================= */
  if (activePage === 'contact') {
    return (
      <div style={{ backgroundColor: 'var(--bg-primary)', paddingBottom: '4rem' }}>
        <div style={{ backgroundColor: 'var(--bg-secondary)', borderBottom: '1px solid var(--border-subtle)', padding: 'clamp(2.5rem, 5vw, 4rem) 0' }}>
          <div className="container">
            <span className="badge" style={{ marginBottom: '0.65rem' }}>Contact & Appel d'Offres</span>
            <h1 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.75rem)', fontWeight: 800, marginBottom: '0.75rem' }}>
              Contactez nos Équipes d'Ingénierie & Direction
            </h1>
            <p style={{ fontSize: 'clamp(0.95rem, 1.8vw, 1.08rem)', color: 'var(--text-muted)', maxWidth: '780px', lineHeight: 1.6 }}>
              Pour toute demande d'études EPCI, cotation technique ou structuration de Vendor Financing pour projets souverains.
            </p>
          </div>
        </div>

        <div className="container" style={{ marginTop: '3rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '2.5rem' }}>
            {/* Contact Details */}
            <div>
              <h2 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '1.25rem' }}>
                Siège Social & Ateliers
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2rem' }}>
                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  <div style={{ width: '38px', height: '38px', borderRadius: '6px', background: 'var(--accent-gold-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-gold)', flexShrink: 0 }}>
                    <MapPin size={18} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, color: 'var(--text-main)', fontSize: '0.92rem' }}>Adresse Officielle</div>
                    <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                      Km 18, Route de Rufisque, Zone Industrielle, Dakar, Sénégal
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  <div style={{ width: '38px', height: '38px', borderRadius: '6px', background: 'var(--accent-gold-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-gold)', flexShrink: 0 }}>
                    <Phone size={18} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, color: 'var(--text-main)', fontSize: '0.92rem' }}>Téléphone & Bureau</div>
                    <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                      Fixe : +221 33 832 60 40<br />
                      Mobile : +221 77 388 21 21 (Donna Drabo)
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  <div style={{ width: '38px', height: '38px', borderRadius: '6px', background: 'var(--accent-gold-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-gold)', flexShrink: 0 }}>
                    <Mail size={18} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, color: 'var(--text-main)', fontSize: '0.92rem' }}>Courriel Professionnel</div>
                    <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                      contact@smpdakar.com / direction@smpdakar.com
                    </div>
                  </div>
                </div>
              </div>

              <div style={{ backgroundColor: 'var(--bg-surface)', border: '1px solid var(--border-strong)', padding: '1rem', borderRadius: '8px', fontSize: '0.82rem' }}>
                <div style={{ fontWeight: 700, color: 'var(--accent-gold)', marginBottom: '0.25rem' }}>
                  Note Contractuelle & Carrières :
                </div>
                <div style={{ color: '#94a3b8', lineHeight: 1.45 }}>
                  Conformément au brief initial, la page Carrière dédiée fait l'objet d'un module d'extension optionnel. Pour toute soumission de CV, veuillez écrire à recrutement@smpdakar.com.
                </div>
              </div>
            </div>

            {/* RFQ Form */}
            <div className="card">
              <h3 style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: '0.4rem' }}>
                Formulaire d'Appel d'Offres (RFQ)
              </h3>
              <p style={{ fontSize: '0.84rem', color: 'var(--text-muted)', marginBottom: '1.25rem' }}>
                Remplissez les détails préliminaires de votre projet pour recevoir une réponse de notre direction technique sous 48h.
              </p>

              {rfqSubmitted ? (
                <div style={{ padding: '1.75rem', backgroundColor: 'rgba(34, 197, 94, 0.1)', border: '1px solid rgba(34, 197, 94, 0.3)', borderRadius: '8px', textAlign: 'center' }}>
                  <CheckCircle2 size={36} style={{ color: '#22c55e', margin: '0 auto 0.75rem' }} />
                  <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#f8fafc', marginBottom: '0.35rem' }}>
                    Demande de Cotation Reçue avec Succès
                  </h4>
                  <p style={{ fontSize: '0.85rem', color: '#94a3b8' }}>
                    Nos équipes d'ingénierie et de chiffrage à Dakar examineront vos spécifications sous 48h ouvrées.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))', gap: '0.85rem' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.76rem', fontWeight: 600, color: '#cbd5e1', marginBottom: '0.25rem' }}>Nom Complet *</label>
                      <input 
                        type="text" 
                        required 
                        placeholder="Ex: M. Amadou Diallo"
                        style={{ width: '100%', padding: '0.6rem 0.75rem', backgroundColor: 'var(--bg-primary)', border: '1px solid var(--border-subtle)', borderRadius: '4px', color: '#ffffff', fontSize: '0.85rem' }}
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.76rem', fontWeight: 600, color: '#cbd5e1', marginBottom: '0.25rem' }}>Entité / Ministère *</label>
                      <input 
                        type="text" 
                        required 
                        placeholder="Ex: Ministère / NOC"
                        style={{ width: '100%', padding: '0.6rem 0.75rem', backgroundColor: 'var(--bg-primary)', border: '1px solid var(--border-subtle)', borderRadius: '4px', color: '#ffffff', fontSize: '0.85rem' }}
                        value={formData.organization}
                        onChange={(e) => setFormData({...formData, organization: e.target.value})}
                      />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))', gap: '0.85rem' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.76rem', fontWeight: 600, color: '#cbd5e1', marginBottom: '0.25rem' }}>Courriel Professionnel *</label>
                      <input 
                        type="email" 
                        required 
                        placeholder="nom@societe.com"
                        style={{ width: '100%', padding: '0.6rem 0.75rem', backgroundColor: 'var(--bg-primary)', border: '1px solid var(--border-subtle)', borderRadius: '4px', color: '#ffffff', fontSize: '0.85rem' }}
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.76rem', fontWeight: 600, color: '#cbd5e1', marginBottom: '0.25rem' }}>Téléphone</label>
                      <input 
                        type="text" 
                        placeholder="+221 ..."
                        style={{ width: '100%', padding: '0.6rem 0.75rem', backgroundColor: 'var(--bg-primary)', border: '1px solid var(--border-subtle)', borderRadius: '4px', color: '#ffffff', fontSize: '0.85rem' }}
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.76rem', fontWeight: 600, color: '#cbd5e1', marginBottom: '0.25rem' }}>Secteur d'Intervention</label>
                    <select
                      style={{ width: '100%', padding: '0.6rem 0.75rem', backgroundColor: 'var(--bg-primary)', border: '1px solid var(--border-subtle)', borderRadius: '4px', color: '#ffffff', fontSize: '0.85rem' }}
                      value={formData.sector}
                      onChange={(e) => setFormData({...formData, sector: e.target.value})}
                    >
                      <option>Downstream / Stockage Pétrolier & Tank Farms</option>
                      <option>Upstream / Machine Shop & Plateformes Offshore</option>
                      <option>Midstream / Pipelines Hydrocarbures & Gaz</option>
                      <option>Mines / Charpentes Métalliques & Convoyeurs</option>
                      <option>Stations-service fixes & conteneurisées SKD</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.76rem', fontWeight: 600, color: '#cbd5e1', marginBottom: '0.25rem' }}>Montage Vendor Financing (VF) ?</label>
                    <select
                      style={{ width: '100%', padding: '0.6rem 0.75rem', backgroundColor: 'var(--bg-primary)', border: '1px solid var(--border-subtle)', borderRadius: '4px', color: '#ffffff', fontSize: '0.85rem' }}
                      value={formData.financingRequired}
                      onChange={(e) => setFormData({...formData, financingRequired: e.target.value})}
                    >
                      <option>Oui - Financement clés en main (Réserves 3 à 6 mois)</option>
                      <option>Non - Financement propre déjà structuré</option>
                      <option>À évaluer lors de la réunion technique</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.76rem', fontWeight: 600, color: '#cbd5e1', marginBottom: '0.25rem' }}>Description du Projet</label>
                    <textarea 
                      rows={3}
                      placeholder="Spécifications, localisation, capacités visées..."
                      style={{ width: '100%', padding: '0.6rem 0.75rem', backgroundColor: 'var(--bg-primary)', border: '1px solid var(--border-subtle)', borderRadius: '4px', color: '#ffffff', fontSize: '0.85rem', resize: 'vertical' }}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                    />
                  </div>

                  <button type="submit" className="btn-primary" style={{ width: '100%', padding: '0.75rem' }}>
                    <Send size={15} />
                    <span>Transmettre la Demande</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
}
