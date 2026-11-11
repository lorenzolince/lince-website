'use client';

import { useState } from 'react';
import { generateServiceGuideData } from '../../../components/generateServiceGuideData';

export default function GenerateServiceGuidePage() {
  const [activeSection, setActiveSection] = useState('vision-general');
  const currentSection = generateServiceGuideData.sections.find(
    (s) => s.id === activeSection
  );

  return (
    <div className="marketing-page generate-service-guide">
      <section className="section hero hero-guide">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1 className="hero-title">Guía visual de Generate Service</h1>
            <p className="hero-subtitle">Todos los flujos paso a paso, desde generación local hasta despliegue en CI/CD con Kubernetes y ArgoCD.</p>
          </div>
        </div>
      </section>

      <section className="section guide-content">
        <div className="container">
          {/* Tabs de secciones */}
          <div className="guide-tabs">
            <nav className="tabs-nav">
              {generateServiceGuideData.sections.map((section) => (
                <button
                  key={section.id}
                  className={`tab-button ${activeSection === section.id ? 'active' : ''}`}
                  onClick={() => setActiveSection(section.id)}
                  aria-selected={activeSection === section.id}
                >
                  {section.title}
                </button>
              ))}
            </nav>
          </div>

          {/* Contenido de la sección activa */}
          {currentSection && (
            <div className="guide-section-content">
              <div className="section-header">
                <h2>{currentSection.title}</h2>
                <p>{currentSection.description}</p>
              </div>

              <div className="guide-steps">
                {currentSection.steps.map((step) => (
                  <div key={step.number} className="step-container">
                    <div className="step-content">
                      <div className="step-number">{step.number}</div>
                      <div className="step-text">
                        <h3>{step.title}</h3>
                        <p>{step.description}</p>
                      </div>
                    </div>
                    {step.image && (
                      <div className="step-image">
                        <img
                          src={step.image}
                          alt={step.imageAlt}
                          loading="lazy"
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA final */}
      <section className="section product-cta">
        <div className="container">
          <div className="product-cta-content">
            <div>
              <h2>¿Listo para generar tu primera API?</h2>
              <p>Sigue los flujos de esta guía paso a paso. Todos los modos están disponibles en tu período de prueba.</p>
            </div>
            <div className="hero-ctas">
              <a className="btn btn-primary" href="https://generate-service.com/" target="_blank" rel="noreferrer">
                Ir a Generate Service
              </a>
              <a className="btn btn-outline" href="/generate-service">
                Volver al producto
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
