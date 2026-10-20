'use client'

import { useState } from 'react'
import { ArrowDownToLine, ExternalLink, Github, Linkedin, Mail, Menu, X } from 'lucide-react'

const links = [
  ['Dev Hub (PWA)', 'https://tozato-dev-hub.vercel.app'],
  ['H-Folio', 'https://h-folio-psi.vercel.app'],
  ['Aurora BI', 'https://aurora-bi-dio.lovable.app'],
  ['GitHub', 'https://github.com/Rafael-TOZATO'],
  ['LinkedIn', 'https://www.linkedin.com/in/rafaeltozato81'],
  ['Medium', 'https://medium.com/@ornelas.tozato'],
  ['Microsoft Learn', 'https://learn.microsoft.com/pt-br/users/rafaelornelastozato-2209/transcript/dzo2wizrkx2853'],
]

function SlideNumber({ number }: { number: string }) {
  return <span className="slide-number">{number} / 05</span>
}

function TechPill({ children }: { children: React.ReactNode }) {
  return <span className="tech-pill">{children}</span>
}

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)

  function downloadPdf() {
    window.print()
  }

  return (
    <main className="site-shell">
      <header className="topbar no-print">
        <a className="brand" href="#capa" aria-label="Retrospectiva Rafael Tozato">
          <span className="brand-mark">RT</span>
          <span>RETROSPECTIVA <b>2026</b></span>
        </a>
        <nav className={menuOpen ? 'nav-links nav-open' : 'nav-links'} aria-label="Navegação do carrossel">
          <a href="#visao" onClick={() => setMenuOpen(false)}>Visão sistêmica</a>
          <a href="#ecossistema" onClick={() => setMenuOpen(false)}>Ecossistema</a>
          <a href="#stack" onClick={() => setMenuOpen(false)}>Stack</a>
        </nav>
        <button className="download-button" onClick={downloadPdf}><ArrowDownToLine size={16} /> Baixar PDF</button>
        <button className="menu-button" aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
      </header>

      <div className="deck" id="capa">
        <section className="slide slide-cover">
          <div className="grid-glow" />
          <div className="slide-content cover-content">
            <div className="eyebrow"><span className="pulse" /> PORTFÓLIO / GOVERNANÇA 4.0</div>
            <div className="cover-copy">
              <p className="kicker">RETROSPECTIVA PROFISSIONAL</p>
              <h1>Da Bancada<br /><em>à Engenharia 4.0</em></h1>
              <p className="lead">Um ecossistema de mais de 30 repositórios, automações, IA e dados transformando problemas complexos em decisões melhores.</p>
            </div>
            <div className="cover-footer"><span>RAFAEL ORNELAS TOZATO</span><span>DESIGN · DATA · ENGINEERING</span></div>
          </div>
          <div className="orb orb-one" /><div className="orb orb-two" />
          <SlideNumber number="01" />
        </section>

        <section className="slide" id="visao">
          <div className="slide-content">
            <div className="section-heading"><div><p className="kicker">01 — MINDSET</p><h2>Visão sistêmica,<br /><span>impacto conectado.</span></h2></div><SlideNumber number="02" /></div>
            <div className="system-layout">
              <div className="system-diagram" aria-label="Diagrama conectando tecnologia, automação e negócios">
                <div className="diagram-line line-a" /><div className="diagram-line line-b" /><div className="diagram-line line-c" />
                <div className="node node-tech"><span>TECNOLOGIA</span><strong>Construir</strong><small>arquiteturas que escalam</small></div>
                <div className="node node-auto"><span>AUTOMAÇÃO</span><strong>Orquestrar</strong><small>fluxos sem atrito</small></div>
                <div className="node node-business"><span>NEGÓCIOS</span><strong>Decidir</strong><small>com clareza e dados</small></div>
                <div className="system-core">G4.0<small>GOVERNANÇA</small></div>
              </div>
              <div className="body-copy"><p>Governança 4.0 não é apenas adotar novas ferramentas.</p><p>É conectar <b>pessoas, processos e plataformas</b> para que a inovação deixe de ser promessa e vire operação mensurável.</p><div className="quote-line">“A tecnologia só gera valor quando consegue atravessar a ponte entre o laboratório e a decisão.”</div></div>
            </div>
          </div>
        </section>

        <section className="slide" id="ecossistema">
          <div className="slide-content">
            <div className="section-heading"><div><p className="kicker">02 — DELIVERY</p><h2>O ecossistema<br /><span>em ação.</span></h2></div><SlideNumber number="03" /></div>
            <div className="project-grid">
              <article className="project-card project-featured"><div className="card-top"><span className="card-index">01</span><span className="status-dot">EM EVOLUÇÃO</span></div><div className="code-window"><div className="window-bar"><i /><i /><i /><span>bootcamp_ai.py</span></div><code><b>def</b> acelerar_aprendizado():<br />&nbsp;&nbsp; modelos = <em>["IA", "LLMs", "RAG"]</em><br />&nbsp;&nbsp; <b>return</b> impacto(modelos)</code></div><h3>Bootcamps de IA</h3><p>Aprendizado aplicado, protótipos rápidos e repertório para transformar curiosidade em capacidade.</p></article>
              <article className="project-card"><div className="card-top"><span className="card-index">02</span><span className="card-icon">↗</span></div><div className="pipeline"><div /> <span>INGESTÃO</span><i>→</i><div /> <span>TRATAMENTO</span><i>→</i><div /> <span>INSIGHT</span></div><h3>Pipelines de dados</h3><p>Da origem ao dashboard: dados preparados para responder perguntas reais.</p></article>
              <article className="project-card"><div className="card-top"><span className="card-index">03</span><span className="card-icon">⌁</span></div><div className="automation"><span>TRIGGER</span><b>n8n</b><span>ACTION</span><div className="automation-line" /></div><h3>Automações inteligentes</h3><p>Fluxos que reduzem trabalho repetitivo e devolvem tempo para o que importa.</p></article>
              <article className="project-card project-wide"><div><div className="card-top"><span className="card-index">04</span><span className="status-dot">LIVE</span></div><h3>Produtos digitais & portfólio</h3><p>Experiências construídas para comunicar, validar e gerar presença no digital.</p></div><div className="mini-dashboard"><span>PERFORMANCE</span><strong>+84%</strong><div className="bars"><i /><i /><i /><i /><i /><i /></div></div></article>
            </div>
          </div>
        </section>

        <section className="slide" id="stack">
          <div className="slide-content">
            <div className="section-heading"><div><p className="kicker">03 — FOUNDATION</p><h2>Infraestrutura que<br /><span>sustenta a ideia.</span></h2></div><SlideNumber number="04" /></div>
            <div className="stack-layout"><div className="architecture"><div className="arch-row"><span className="arch-label">INTERFACE</span><div><TechPill>Next.js</TechPill><TechPill>TypeScript</TechPill><TechPill>Power BI</TechPill></div></div><div className="arch-connector" /><div className="arch-row"><span className="arch-label">ORQUESTRAÇÃO</span><div><TechPill>Python</TechPill><TechPill>Java</TechPill><TechPill>n8n</TechPill></div></div><div className="arch-connector" /><div className="arch-row"><span className="arch-label">DADOS</span><div><TechPill>SQL</TechPill><TechPill>ETL</TechPill><TechPill>APIs</TechPill></div></div><div className="arch-connector" /><div className="arch-row"><span className="arch-label">AMBIENTE</span><div><TechPill>Docker</TechPill><TechPill>GitHub</TechPill><TechPill>Vercel</TechPill></div></div></div><div className="principles"><p className="kicker">PADRÕES DE CONSTRUÇÃO</p><ul><li><b>01</b> Clareza antes da complexidade</li><li><b>02</b> Dados como produto</li><li><b>03</b> Automação com propósito</li><li><b>04</b> Evolução contínua</li></ul><div className="terminal-card"><span>~/rafael/ecossistema</span><code><i>$</i> git log --oneline<br /><b>4.0.26</b> governança aplicada<br /><b>4.0.25</b> dados em movimento</code></div></div></div>
          </div>
        </section>

        <section className="slide slide-cta">
          <div className="slide-content"><div className="cta-main"><p className="kicker">04 — NEXT MOVE</p><h2>Qual dessas frentes<br /><em>gera mais impacto</em><br />no seu dia a dia?</h2><p className="cta-sub">Comente: <b>IA, automação, dados ou engenharia?</b></p><div className="cta-rule" /><p className="cta-follow">Vamos trocar repertório, construir conexões<br />e transformar a próxima ideia em sistema.</p></div><div className="links-block"><p className="kicker">ENCONTRE-ME NA REDE</p><div className="link-list">{links.map(([name, url]) => <a key={url} href={url} target="_blank" rel="noreferrer"><span>{name}</span><ExternalLink size={13} /></a>)}</div></div><div className="cta-footer"><span>RAFAEL ORNELAS TOZATO</span><span>OBRIGADO POR ACOMPANHAR</span></div><SlideNumber number="05" /></div>
        </section>
      </div>
      <footer className="bottom-note no-print"><span>CARROSSEL EM FORMATO 4:5 · PRONTO PARA EXPORTAR</span><span>Use “Baixar PDF” e selecione “Salvar como PDF”</span></footer>
    </main>
  )
}
