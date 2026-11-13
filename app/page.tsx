'use client'

import React from 'react'
import { ExternalLink } from 'lucide-react'

function GithubMark({ size = 12 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M12 .297a12 12 0 0 0-3.79 23.39c.6.111.82-.26.82-.577v-2.234c-3.338.726-4.043-1.416-4.043-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.776.418-1.305.762-1.605-2.665-.304-5.466-1.332-5.466-5.93 0-1.31.468-2.381 1.235-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23a11.5 11.5 0 0 1 6.01 0c2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.119 3.176.77.84 1.232 1.911 1.232 3.221 0 4.61-2.805 5.624-5.475 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.216.694.825.576A12 12 0 0 0 12 .297" />
    </svg>
  )
}

const projects = [
  {
    id: "retrospectiva",
    number: "01",
    category: "PORTFÓLIO & GOVERNANÇA 4.0",
    title: "Portfólio Retrospectiva",
    description: "Consolidado de mais de 35 repositórios reunidos sob a ótica de Governança 4.0, automações inteligentes, IA e engenharia de dados.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Vercel", "IA"],
    link: "https://v0.app/tozato-ai-chat/chat/carrossel-de-portfolio-lv872wfyp0O",
    github: "https://github.com/Rafael-TOZATO/portfolio-retrospectiva"
  },
  {
    id: "tozatocode-ai",
    number: "02",
    category: "HUB DE PROJETOS",
    title: "Hub de Projetos TozatoCode-AI",
    description: "Acesse, em um só lugar, as soluções digitais criadas para transformar ideias em experiências simples, rápidas e inteligentes.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Vercel", "IA"],
    link: "https://tozato-dev-hub.vercel.app",
    github: "https://github.com/Rafael-TOZATO/tozato-dev-hub"
  },
  {
    id: "aurora-bi",
    number: "03",
    category: "BUSINESS INTELLIGENCE",
    title: "Aurora BI DIO",
    description: "Projeto de análise e visualização de dados desenvolvido para transformar informações em decisões mais claras.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Vercel", "IA"],
    link: "https://aurora-01-bio.lovable.app",
    github: "https://github.com/Rafael-TOZATO/aurora-bi-dio"
  },
  {
    id: "vendas-financials",
    number: "04",
    category: "DADOS & ANALYTICS",
    title: "Análise de Vendas Financials",
    description: "Dashboard financeiro para explorar indicadores de vendas, desempenho e oportunidades de negócio com visão analítica.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Vercel", "IA"],
    link: "#",
    github: "https://github.com/Rafael-TOZATO/projeto-financial-sample-powerbi"
  },
  {
    id: "ats-resume",
    number: "05",
    category: "DESENVOLVIMENTO WEB & IA",
    title: "ATS Resume Generator",
    description: "Gerador inteligente de currículos otimizado para sistemas ATS, combinando experiência de produto, web e inteligência artificial.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Vercel", "IA"],
    link: "#",
    github: "https://github.com/Rafael-TOZATO/curriculo-profissional"
  },
  {
    id: "dashboard-financeiro",
    number: "06",
    category: "DADOS & BUSINESS INTELLIGENCE",
    title: "Dashboard Analítico Financeiro",
    description: "Painel executivo interativo desenvolvido com React e TypeScript para transformar indicadores financeiros em decisões mais claras.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Vercel", "IA"],
    link: "#",
    github: "https://github.com/Rafael-TOZATO/tozato-dossie-executivo"
  },
  {
    id: "insights-playground",
    number: "07",
    category: "INTELIGÊNCIA COMERCIAL",
    title: "Insights Playground",
    description: "Ecossistema analítico para explorar inteligência comercial, gestão estratégica e visualização avançada de KPIs de vendas.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Vercel", "IA"],
    link: "#",
    github: "https://github.com/Rafael-TOZATO/certificados-e-portfolio-executivo"
  }
]

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white p-6 md:p-12">
      <header className="max-w-7xl mx-auto mb-12">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-2">
          Rafael Ornelas Tozato — Engenharia de Software & IA
        </h1>
        <p className="text-gray-400">
          Portfólio de Projetos, Automação, Dados e Soluções em Governança 4.0
        </p>
      </header>

      <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div 
            key={project.id} 
            className="border border-gray-800 bg-neutral-900/50 rounded-xl p-6 flex flex-col justify-between hover:border-gray-700 transition-colors"
          >
            <div>
              <div className="flex justify-between items-center mb-4 text-xs font-semibold tracking-wider text-gray-400 uppercase">
                <span>{project.category}</span>
                <span>{project.number}</span>
              </div>
              
              <h2 className="text-xl font-bold mb-2 text-white">
                {project.title}
              </h2>
              
              <p className="text-sm text-gray-400 mb-6 leading-relaxed">
                {project.description}
              </p>
            </div>

            <div>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, idx) => (
                  <span 
                    key={idx} 
                    className="px-2.5 py-1 text-xs rounded-full bg-neutral-800 text-gray-300 font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4 text-xs">
                {project.link !== "#" && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white text-black font-semibold hover:bg-gray-200 transition-colors"
                  >
                    Ver Projeto <ExternalLink size={12} />
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-gray-400 hover:text-white transition-colors"
                  >
                    Ver Código no GitHub <GithubMark size={12} />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </section>
    </main>
  )
}