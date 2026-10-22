import React, { useState } from 'react';
import { MapPin, ArrowRight, X } from 'lucide-react';

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
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1.25rem', marginBottom: '2rem' }}>
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
            style={{ padding: '0.65rem 1.25rem', fontSize: '0.85rem' }}
          >
            <span>Voir l'ensemble du portfolio</span>
            <ArrowRight size={15} />
          </button>
        </div>

        {/* Filter Pills */}
        <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
          {t.projects.filters.map((f, i) => (
            <button
              key={i}
              onClick={() => setActiveFilter(f)}
              style={{
                backgroundColor: activeFilter === f ? 'var(--accent-gold)' : 'var(--bg-card)',
                color: activeFilter === f ? '#ffffff' : 'var(--text-muted)',
                border: activeFilter === f ? '1px solid var(--accent-gold)' : '1px solid var(--border-subtle)',
                padding: '0.4rem 0.85rem',
                borderRadius: '4px',
                fontSize: '0.78rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.15s ease'
              }}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Projects Grid - 100% Responsive */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
          gap: '1.5rem'
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
              <div style={{ position: 'relative', height: '190px', overflow: 'hidden' }}>
                <img
                  src={project.image}
                  alt={project.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
                <div style={{
                  position: 'absolute',
                  top: '0.75rem',
                  left: '0.75rem',
                  backgroundColor: 'rgba(7, 19, 36, 0.88)',
                  backdropFilter: 'blur(8px)',
                  padding: '0.2rem 0.55rem',
                  borderRadius: '4px',
                  fontSize: '0.68rem',
                  fontWeight: 700,
                  color: 'var(--accent-gold)'
                }}>
                  {project.category}
                </div>
              </div>

              {/* Body */}
              <div style={{ padding: 'clamp(1rem, 2.5vw, 1.4rem)', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.78rem', color: 'var(--text-dim)', marginBottom: '0.35rem', flexWrap: 'wrap' }}>
                  <MapPin size={13} style={{ color: 'var(--accent-gold)', flexShrink: 0 }} />
                  <span>{project.location}</span>
                  <span>•</span>
                  <span>{project.client}</span>
                </div>

                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--text-main)', lineHeight: 1.3 }}>
                  {project.title}
                </h3>

                <p style={{ fontSize: '0.86rem', color: 'var(--text-muted)', lineHeight: 1.5, marginBottom: '1rem', flex: 1 }}>
                  {project.scope}
                </p>

                <div style={{
                  paddingTop: '0.75rem',
                  borderTop: '1px solid var(--border-subtle)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  fontSize: '0.76rem',
                  fontWeight: 600,
                  color: 'var(--accent-gold)',
                  flexWrap: 'wrap',
                  gap: '0.5rem'
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
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            backdropFilter: 'blur(8px)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1rem'
          }}>
            <div style={{
              backgroundColor: 'var(--bg-surface)',
              border: '1px solid var(--border-strong)',
              borderRadius: '10px',
              maxWidth: '650px',
              width: '100%',
              maxHeight: '90vh',
              overflowY: 'auto',
              boxShadow: '0 25px 50px rgba(0, 0, 0, 0.7)'
            }}>
              <div style={{ position: 'relative', height: '220px' }}>
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  style={{
                    position: 'absolute',
                    top: '0.75rem',
                    right: '0.75rem',
                    backgroundColor: 'rgba(0,0,0,0.7)',
                    border: 'none',
                    color: '#ffffff',
                    padding: '0.4rem',
                    borderRadius: '50%',
                    cursor: 'pointer',
                    display: 'flex'
                  }}
                >
                  <X size={18} />
                </button>
              </div>

              <div style={{ padding: 'clamp(1.25rem, 3vw, 1.75rem)' }}>
                <span className="badge" style={{ marginBottom: '0.65rem' }}>
                  {selectedProject.category}
                </span>

                <h3 style={{ fontSize: '1.35rem', fontWeight: 800, marginBottom: '0.5rem', color: 'var(--text-main)' }}>
                  {selectedProject.title}
                </h3>

                <div style={{ display: 'flex', gap: '1rem', fontSize: '0.82rem', color: 'var(--text-dim)', marginBottom: '1rem', flexWrap: 'wrap' }}>
                  <div><strong>Client :</strong> {selectedProject.client}</div>
                  <div><strong>Localisation :</strong> {selectedProject.location}</div>
                </div>

                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.55, marginBottom: '1.25rem' }}>
                  {selectedProject.scope}
                </p>

                <div style={{ backgroundColor: 'var(--bg-primary)', padding: '0.85rem 1rem', borderRadius: '6px', border: '1px solid var(--border-subtle)', marginBottom: '1.25rem' }}>
                  <div style={{ fontSize: '0.72rem', textTransform: 'uppercase', color: 'var(--accent-gold)', fontWeight: 700, marginBottom: '0.2rem' }}>
                    Spécifications Clés
                  </div>
                  <div style={{ fontSize: '0.88rem', color: '#e2e8f0', fontWeight: 600 }}>
                    {selectedProject.stats}
                  </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <button onClick={() => setSelectedProject(null)} className="btn-secondary" style={{ padding: '0.55rem 1.15rem', fontSize: '0.82rem' }}>
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
