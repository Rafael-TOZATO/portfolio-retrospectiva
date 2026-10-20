'use client'

import { useState } from 'react'
import { ArrowDownToLine, ExternalLink, Github, Linkedin, Mail, Menu, X } from 'lucide-react'

const Links = {
  "Dev Hub (PWA)": "https://tozato-dev-hub.vercel.app",
  "H-Folio": "https://h-folio-psi.vercel.app",
  "Aurora 01": "https://aurora-01-bio.lovable.app",
  "GitHub": "https://github.com/Rafael-TOZATO",
  "LinkedIn": "https://www.linkedin.com/in/rafaeltozato81",
  "Médio": "https://medium.com/@ornelas.tozato",
  "Microsoft Learn": "https://learn.microsoft.com/pt-br/users/rafaelornelastozato-2200/transcript/dzo2wirxk2853",
}

function SlideNumber({ number }: { number: string }) {
  return <span className="slide-number">{number} / 05</span>
}

function TechPill({ children }: { children: React.ReactNode }) {
  return <span className="tech-pill">{children}</span>
}

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)

  function downloadPdf() {
    janela.impresso()
  }

  return (
    <div className="principal-site-shell">
      <header className="cabecalho-principal" aria-label="Cabeçalho Principal">
        <a className="brand" href="#capa" aria-label="Retrospectiva Rafael Tozato">
          <span className="marca-marca">RTC</span>
          <span className="retrospectiva-n2026">2026</span>
        </a>
        <nav className={`nav-links ${menuOpen ? 'nav-links-open' : ''}`} aria-label="Navegação do carrossel">
          <a href="#retrospectiva" onClick={() => setMenuOpen(false)}>Retrospectiva</a>
          <a href="#visão" onClick={() => setMenuOpen(false)}>Visão Sistêmica</a>
          <a href="#ecosystem" onClick={() => setMenuOpen(false)}>Ecossistema</a>
          <a href="#stack" onClick={() => setMenuOpen(false)}>Stack</a>
        </nav>
        <div className="menu-botoes">
          <button className="download-button" onClick={downloadPdf}>
            <ArrowDownToLine size={16} /> Baixar PDF
          </button>
          <button className="menu-buttas" aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      <div className="deck" id="capa">
        <section className="slide slide-cover">
          <div className="slide-glou"></div>
          <div className="slide-conteudo cover-content">
            <div className="eyebrow"><span className="pulso"></span> PORTFÓLIO / GOVERNANÇA 4.0</div>
            <h1>Portfólio Retrospectiva</h1>
            <p className="kicker">Da Bancada à Engenharia 4.0</p>
            <p className="lead">Mais de 35 repositórios em governança, automações, IA e dados. Transformando problemas complexos em decisões melhores.</p>
            <div className="cover-footer"><span>RAFAEL ORNELAS TOZATO</span><span>DESIGN • DADOS • ENGENHARIA • ESPAÇO</span></div>
          </div>
          <div className="orb orb-anz"></div>
          <div className="orb orb-two"></div>
          <SlideNumber number="01" />
        </section>

        {/* --- NOVO CARD: PORTFÓLIO RETROSPECTIVA --- */}
        <section className="slide" id="retrospectiva">
          <div className="slide-content">
            <div className="kicker"><span>PORTFÓLIO & GOVERNANÇA 4.0</span></div>
            <h2>Portfólio Retrospectiva</h2>
            <p>Consolidado de mais de 35 repositórios reunidos sob a ótica de Governança 4.0, automações inteligentes, IA e engenharia de dados.</p>
            <div className="tags">
              <TechPill>React</TechPill>
              <TechPill>TypeScript</TechPill>
              <TechPill>Tailwind CSS</TechPill>
              <TechPill>Vercel</TechPill>
              <TechPill>IA</TechPill>
            </div>
            <div className="actions" style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem' }}>
              <a href="https://v0.app/tozato-ai-chat/chat/carrossel-de-portfolio-lv872wfyp0O" target="_blank" rel="noopener noreferrer" className="tech-pill" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}>
                Ver Projeto <ExternalLink size={14} />
              </a>
              <a href="https://github.com/Rafael-TOZATO/portfolio-retrospectiva" target="_blank" rel="noopener noreferrer" className="tech-pill" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}>
                GitHub <Github size={14} />
              </a>
            </div>
          </div>
          <SlideNumber number="02" />
        </section>
        {/* ------------------------------------------ */}

        <section className="slide" id="visão">
          <div className="slide-content">
            <div className="kicker"><span>MINDSET</span> Visão sistêmica, rh & impacto conectado.</div>
            <div className="systema-layout">
              <div className="systema-diagrama">
                <div className="diagrama-linha linha-a"></div>
                <div className="diagrama-linha linha-b"></div>
                <div className="diagrama-linha linha-c"></div>
                <div className="node node-auto"><span className="strong">Orquestração</span><small>fluxos sem atrito</small></div>
                <div className="node node-business"><span className="strong">Negócio</span><small>com clareza a dados</small></div>
              </div>
            </div>
          </div>
          <SlideNumber number="03" />
        </section>
      </div>
    </div>
  )
}