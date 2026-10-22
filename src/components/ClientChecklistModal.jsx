import React, { useState } from 'react';
import { X, CheckCircle2, FileText, Camera, ShieldCheck, ListOrdered, Sparkles } from 'lucide-react';

export default function ClientChecklistModal({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('checklist');

  if (!isOpen) return null;

  const pageSpecs = [
    {
      page: "1. Accueil (Homepage)",
      sections: "10 sections ordonnées (Hero, EPCI, 4 Secteurs, Vendor Financing, Chiffres, Projets, Clients, Carte, QHSE, CTA)",
      words: "~800 - 1 200 mots au total (distribués par section)",
      photos: "6 à 8 photos HD (Hero 2560x1440px WebP, 4 secteurs 1200x800px, 12 logos vectoriels)",
      status: "100% Maquetté dans ce prototype"
    },
    {
      page: "2. À Propos",
      sections: "Histoire, Vision stratégique, Gouvernance, Ateliers Dakar (15 000 m²), Engagement local",
      words: "~500 - 700 mots (FR + EN)",
      photos: "4 photos (Bureaux HQ, Direction générale, vue aérienne des ateliers)",
      status: "Structure rédigée & prête à recevoir les textes SMP"
    },
    {
      page: "3. Activités",
      sections: "Upstream (Machine Shop), Midstream (Pipelines), Downstream (Tank farms & SKD), Mines",
      words: "~800 - 1 000 mots (~200 mots par secteur)",
      photos: "6 photos terrain réelles (Tour d'usinage, pose pipeline, bacs pétroliers, usine or)",
      status: "Fiches techniques structurées"
    },
    {
      page: "4. Réalisations",
      sections: "6 à 12 fiches projets détaillées avec filtres par secteur, client, capacité",
      words: "~80 à 120 mots par projet de référence",
      photos: "2 à 3 photos par projet (cuves, montage, infrastructure en service)",
      status: "6 Projets historiques intégrés (Mandinary, SAR, Mako...)"
    },
    {
      page: "5. Nos Équipements",
      sections: "Machine Shop, Chaudronnerie lourde, Roulage 50mm, Levage 150T, Laboratoire CND",
      words: "~400 - 600 mots (listing technique & capacités)",
      photos: "8 à 10 photos de machines en fonctionnement (Tours CNC, rouleuse, ponts roulants)",
      status: "Spécifications outillage prêtes"
    },
    {
      page: "6. Contact & RFQ",
      sections: "Coordonnées Dakar, Numéros directs (Donna Drabo), Carte, Formulaire d'appel d'offres",
      words: "~150 mots + champs du formulaire",
      photos: "1 photo de la façade du siège à Dakar",
      status: "Formulaire RFQ opérationnel"
    }
  ];

  const briefCompliance = [
    { item: "Nettoyage du template", desc: "Suppression totale de 'AMP', 'The beginnings', automatisation industrielle, faux blogs 2020 et liens externes.", status: "Traité" },
    { item: "Ordre strict des 10 sections", desc: "Hero -> Modèle EPCI 6 étapes -> 4 Secteurs -> Vendor Financing -> Chiffres -> Réalisations -> Clients -> Carte -> QHSE -> CTA.", status: "Traité" },
    { item: "Machine Shop forage offshore", desc: "Mise en avant explicite dans le secteur Upstream et dans le header 24/7.", status: "Traité" },
    { item: "Vendor Financing (VF)", desc: "Section dédiée aux réserves nationales stratégiques de 3 à 6 mois pour gouvernements africains.", status: "Traité" },
    { item: "Bilinguisme WPML (FR / EN)", desc: "Architecture prête avec bascule de langue en direct pour toutes les sections.", status: "Traité" },
    { item: "Performance & légèreté", desc: "Zéro slider lourd, pas de widgets inutiles, CSS ultra-léger et navigation rapide.", status: "Traité" },
    { item: "Clarification Carrière", desc: "Note commerciale préparée pour devis séparé conformément aux remarques de Donna.", status: "Traité" }
  ];

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      backgroundColor: 'rgba(2, 6, 12, 0.85)',
      backdropFilter: 'blur(10px)',
      zIndex: 10000,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1.5rem'
    }}>
      <div style={{
        backgroundColor: 'var(--bg-surface)',
        border: '1px solid var(--border-strong)',
        borderRadius: '12px',
        maxWidth: '850px',
        width: '100%',
        maxHeight: '90vh',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0 25px 60px rgba(0, 0, 0, 0.7)',
        overflow: 'hidden'
      }}>
        {/* Modal Header */}
        <div style={{
          padding: '1.5rem 2rem',
          borderBottom: '1px solid var(--border-subtle)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: 'var(--bg-card)'
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.2rem' }}>
              <span className="badge" style={{ fontSize: '0.7rem' }}>Outil de Validation Client</span>
              <span style={{ fontSize: '0.85rem', color: '#cbd5e1' }}>Brief Donna Drabo (SMP Dakar)</span>
            </div>
            <h2 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-main)' }}>
              Checklist Contenu, Photos & Matrice de Conformité
            </h2>
          </div>

          <button
            onClick={onClose}
            style={{
              background: 'none',
              border: '1px solid var(--border-subtle)',
              color: 'var(--text-main)',
              padding: '0.4rem',
              borderRadius: '6px',
              cursor: 'pointer',
              display: 'flex'
            }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Navigation Tabs */}
        <div style={{ display: 'flex', borderBottom: '1px solid var(--border-subtle)', padding: '0 2rem', backgroundColor: 'var(--bg-primary)' }}>
          <button
            onClick={() => setActiveTab('checklist')}
            style={{
              padding: '0.85rem 1.25rem',
              background: 'none',
              border: 'none',
              borderBottom: activeTab === 'checklist' ? '2px solid var(--accent-gold)' : 'none',
              color: activeTab === 'checklist' ? 'var(--accent-gold)' : 'var(--text-muted)',
              fontWeight: 700,
              fontSize: '0.85rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem'
            }}
          >
            <FileText size={15} />
            <span>Checklist Textes & Photos par Page</span>
          </button>

          <button
            onClick={() => setActiveTab('matrix')}
            style={{
              padding: '0.85rem 1.25rem',
              background: 'none',
              border: 'none',
              borderBottom: activeTab === 'matrix' ? '2px solid var(--accent-gold)' : 'none',
              color: activeTab === 'matrix' ? 'var(--accent-gold)' : 'var(--text-muted)',
              fontWeight: 700,
              fontSize: '0.85rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem'
            }}
          >
            <CheckCircle2 size={15} />
            <span>Matrice de Conformité au Brief</span>
          </button>
        </div>

        {/* Modal Content Scrollable Area */}
        <div style={{ padding: '2rem', overflowY: 'auto', flex: 1 }}>
          {activeTab === 'checklist' ? (
            <div>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: 1.5 }}>
                Ce tableau spécifie exactement les longueurs de textes et les caractéristiques photos à fournir par l'équipe SMP pour chacune des pages prévues :
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {pageSpecs.map((spec, i) => (
                  <div 
                    key={i}
                    style={{
                      backgroundColor: 'var(--bg-card)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: '8px',
                      padding: '1.25rem'
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                      <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--accent-gold)' }}>
                        {spec.page}
                      </h3>
                      <span style={{ fontSize: '0.72rem', background: 'rgba(34, 197, 94, 0.15)', color: '#86efac', padding: '0.2rem 0.5rem', borderRadius: '4px', fontWeight: 700 }}>
                        {spec.status}
                      </span>
                    </div>

                    <div style={{ fontSize: '0.85rem', color: '#e2e8f0', marginBottom: '0.5rem' }}>
                      <strong>Sections prévues :</strong> {spec.sections}
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', fontSize: '0.82rem', marginTop: '0.5rem', borderTop: '1px solid var(--border-subtle)', paddingTop: '0.5rem' }}>
                      <div>
                        <span style={{ color: 'var(--text-dim)', display: 'block', textTransform: 'uppercase', fontSize: '0.7rem', fontWeight: 700 }}>Longueur Texte Estimée :</span>
                        <span style={{ color: '#cbd5e1' }}>{spec.words}</span>
                      </div>
                      <div>
                        <span style={{ color: 'var(--text-dim)', display: 'block', textTransform: 'uppercase', fontSize: '0.7rem', fontWeight: 700 }}>Photos & Dimensions :</span>
                        <span style={{ color: '#cbd5e1' }}>{spec.photos}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: 1.5 }}>
                Suivi point par point de toutes les directives formulées par Donna Drabo :
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {briefCompliance.map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.75rem',
                      backgroundColor: 'var(--bg-card)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: '8px',
                      padding: '1rem'
                    }}
                  >
                    <CheckCircle2 size={18} style={{ color: '#22c55e', flexShrink: 0, marginTop: '2px' }} />
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-main)', marginBottom: '0.2rem' }}>
                        {item.item}
                      </div>
                      <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.4 }}>
                        {item.desc}
                      </div>
                    </div>
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#22c55e', background: 'rgba(34, 197, 94, 0.1)', padding: '0.2rem 0.55rem', borderRadius: '4px' }}>
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div style={{
          padding: '1.25rem 2rem',
          borderTop: '1px solid var(--border-subtle)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: 'var(--bg-card)'
        }}>
          <div style={{ fontSize: '0.8rem', color: 'var(--text-dim)' }}>
            Ce document peut être exporté directement pour transmission par e-mail à Donna Drabo.
          </div>
          <button onClick={onClose} className="btn-primary" style={{ padding: '0.6rem 1.25rem', fontSize: '0.85rem' }}>
            Fermer l'inspecteur
          </button>
        </div>
      </div>
    </div>
  );
}
