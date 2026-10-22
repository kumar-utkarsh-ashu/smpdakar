import React, { useState } from 'react';
import { MapPin, Building, ArrowRight, ExternalLink, X } from 'lucide-react';

export default function FeaturedProjects({ t, onSeeAllProjects }) {
  const [activeFilter, setActiveFilter] = useState('Tous');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredItems = activeFilter === 'Tous' || activeFilter === 'All'
    ? t.projects.items
    : t.projects.items.filter(item => item.category.toLowerCase().includes(activeFilter.toLowerCase()) || activeFilter.toLowerCase().includes(item.category.toLowerCase()));

  return (
    <section id="projects-section" className="section-padding" style={{ backgroundColor: 'var(--bg-secondary)', borderBottom: '1px solid var(--border-subtle)' }}>
      <div className="container">
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '2.5rem' }}>
          <div style={{ maxWidth: '650px' }}>
            <div className="section-tag">
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--accent-gold)' }}></span>
              <span>{t.projects.tag}</span>
            </div>
            <h2 className="section-title">{t.projects.title}</h2>
            <p className="section-desc">{t.projects.desc}</p>
          </div>

          <button
            onClick={onSeeAllProjects}
            className="btn-secondary"
            style={{ padding: '0.75rem 1.5rem', fontSize: '0.9rem' }}
          >
            <span>Voir l'ensemble du portfolio</span>
            <ArrowRight size={16} />
          </button>
        </div>

        {/* Filter Pills */}
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
          {t.projects.filters.map((f, i) => (
            <button
              key={i}
              onClick={() => setActiveFilter(f)}
              style={{
                backgroundColor: activeFilter === f ? 'var(--accent-gold)' : 'var(--bg-card)',
                color: activeFilter === f ? '#ffffff' : 'var(--text-muted)',
                border: activeFilter === f ? '1px solid var(--accent-gold)' : '1px solid var(--border-subtle)',
                padding: '0.5rem 1rem',
                borderRadius: '4px',
                fontSize: '0.82rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.15s ease'
              }}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '1.75rem'
        }}>
          {filteredItems.map((project, idx) => (
            <div
              key={idx}
              className="card"
              style={{
                padding: 0,
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                cursor: 'pointer'
              }}
              onClick={() => setSelectedProject(project)}
            >
              {/* Image banner */}
              <div style={{ position: 'relative', height: '220px', overflow: 'hidden' }}>
                <img
                  src={project.image}
                  alt={project.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.3s ease'
                  }}
                  onMouseOver={(e) => e.target.style.transform = 'scale(1.04)'}
                  onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                />
                <div style={{
                  position: 'absolute',
                  top: '0.85rem',
                  left: '0.85rem',
                  backgroundColor: 'rgba(7, 19, 36, 0.85)',
                  backdropFilter: 'blur(8px)',
                  padding: '0.25rem 0.6rem',
                  borderRadius: '4px',
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  color: 'var(--accent-gold)'
                }}>
                  {project.category}
                </div>
              </div>

              {/* Body */}
              <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem', color: 'var(--text-dim)', marginBottom: '0.4rem' }}>
                  <MapPin size={13} style={{ color: 'var(--accent-gold)' }} />
                  <span>{project.location}</span>
                  <span>•</span>
                  <span>{project.client}</span>
                </div>

                <h3 style={{ fontSize: '1.18rem', fontWeight: 700, marginBottom: '0.65rem', color: 'var(--text-main)', lineHeight: 1.3 }}>
                  {project.title}
                </h3>

                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.55, marginBottom: '1.25rem', flex: 1 }}>
                  {project.scope}
                </p>

                <div style={{
                  paddingTop: '0.85rem',
                  borderTop: '1px solid var(--border-subtle)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  color: 'var(--accent-gold)'
                }}>
                  <span>{project.stats}</span>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.2rem' }}>
                    Détails <ArrowRight size={13} />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Detail Modal */}
        {selectedProject && (
          <div style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.75)',
            backdropFilter: 'blur(8px)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem'
          }}>
            <div style={{
              backgroundColor: 'var(--bg-surface)',
              border: '1px solid var(--border-strong)',
              borderRadius: '10px',
              maxWidth: '680px',
              width: '100%',
              overflow: 'hidden',
              boxShadow: '0 25px 50px rgba(0, 0, 0, 0.6)'
            }}>
              <div style={{ position: 'relative', height: '260px' }}>
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    backgroundColor: 'rgba(0,0,0,0.6)',
                    border: 'none',
                    color: '#ffffff',
                    padding: '0.4rem',
                    borderRadius: '50%',
                    cursor: 'pointer',
                    display: 'flex'
                  }}
                >
                  <X size={20} />
                </button>
              </div>

              <div style={{ padding: '2rem' }}>
                <span className="badge" style={{ marginBottom: '0.75rem' }}>
                  {selectedProject.category}
                </span>

                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.5rem', color: 'var(--text-main)' }}>
                  {selectedProject.title}
                </h3>

                <div style={{ display: 'flex', gap: '1.5rem', fontSize: '0.85rem', color: 'var(--text-dim)', marginBottom: '1.25rem' }}>
                  <div><strong>Client :</strong> {selectedProject.client}</div>
                  <div><strong>Localisation :</strong> {selectedProject.location}</div>
                </div>

                <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  {selectedProject.scope}
                </p>

                <div style={{ backgroundColor: 'var(--bg-primary)', padding: '1rem', borderRadius: '6px', border: '1px solid var(--border-subtle)', marginBottom: '1.5rem' }}>
                  <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--accent-gold)', fontWeight: 700, marginBottom: '0.25rem' }}>
                    Spécifications Clés
                  </div>
                  <div style={{ fontSize: '0.9rem', color: '#e2e8f0', fontWeight: 600 }}>
                    {selectedProject.stats}
                  </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem' }}>
                  <button onClick={() => setSelectedProject(null)} className="btn-secondary" style={{ padding: '0.65rem 1.25rem', fontSize: '0.85rem' }}>
                    Fermer
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
