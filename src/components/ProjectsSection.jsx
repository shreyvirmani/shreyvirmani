import React, { useState } from 'react';
import { Sparkles, ExternalLink, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { GithubIcon } from './Icons';
import SectionHeading from './SectionHeading';
import AgentWorkflowModal from './AgentWorkflowModal';

export default function ProjectsSection() {
  const { projects } = portfolioData;
  const flagship = projects.find((p) => p.flagship);
  const rest = projects.filter((p) => !p.flagship);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section id="projects" className="relative py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading
          eyebrow="Selected Work"
          title="Real products, real pipelines"
          description="Projects I've designed and shipped — spanning multi-agent Generative AI SaaS, RAG systems, and full-stack platforms."
        />

        {/* Featured flagship project */}
        {flagship && (
          <div className="reveal group mb-8">
            <div className="relative rounded-3xl overflow-hidden glass-strong border border-indigo-400/25 p-7 sm:p-10 shadow-[0_20px_80px_-20px_rgba(99,102,241,0.35)]">
              <div className="absolute -top-24 -right-24 w-80 h-80 bg-gradient-to-br from-cyan-500/15 to-indigo-600/20 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/8 via-transparent to-indigo-600/8 pointer-events-none" />

              <div className="relative flex flex-col lg:flex-row gap-8">
                <div className="flex-1">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full mb-4 text-xs font-mono font-semibold bg-gradient-to-r from-cyan-500/15 to-indigo-500/15 text-cyan-300 border border-cyan-400/25">
                    <Sparkles className="w-3.5 h-3.5" />
                    FEATURED · MULTI-AGENT AI SAAS
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    {flagship.title}
                  </h3>
                  <p className="mt-1 text-sm font-mono text-indigo-300">{flagship.subtitle}</p>
                  <p className="mt-4 text-slate-300 leading-relaxed">{flagship.summary}</p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {flagship.tech.map((t, idx) => (
                      <span key={idx} className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/5 text-slate-300 border border-white/10">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3">
                    {flagship.liveDemo && (
                      <a href={flagship.liveDemo} target="_blank" rel="noreferrer"
                         className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-sm font-medium text-white bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 transition-all shadow-lg shadow-indigo-500/25">
                        Live Demo <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                    <a href={flagship.github} target="_blank" rel="noreferrer"
                       className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-sm font-medium glass text-slate-100 hover:border-cyan-400/40 transition-all">
                      Source <GithubIcon className="w-4 h-4" />
                    </a>
                    <button
                      onClick={() => setModalOpen(true)}
                      className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-sm font-medium text-cyan-300 hover:text-cyan-200 bg-cyan-400/10 border border-cyan-400/30 hover:border-cyan-400/50 transition-all"
                    >
                      View Agent Architecture <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Agent specialization mini-vis */}
                <div className="lg:w-80 grid grid-cols-2 gap-2.5 content-start">
                  {flagship.agents &&
                    flagship.agents.map((agent, i) => (
                      <button
                        key={i}
                        onClick={() => setModalOpen(true)}
                        className="text-left rounded-xl p-3.5 bg-white/5 border border-white/10 hover:border-cyan-400/40 hover:bg-cyan-400/5 transition-all"
                      >
                        <div className="flex items-center gap-1.5 mb-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                          <span className="text-xs font-semibold text-cyan-200">{agent.name}</span>
                        </div>
                        <span className="text-[11px] text-slate-400 leading-snug block">{agent.role}</span>
                      </button>
                    ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Remaining projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {rest.map((project, i) => (
            <div
              key={project.id}
              className="reveal group glass glass-hover rounded-3xl p-6 flex flex-col"
              style={{ transitionDelay: `${(i % 3) * 70}ms` }}
            >
              <div className="mb-3">
                <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-white/5 text-indigo-300 border border-white/10">
                  {project.category}
                </span>
              </div>
              <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                {project.title}
              </h3>
              <p className="text-xs font-mono text-indigo-300 mt-0.5">{project.subtitle}</p>
              <p className="mt-3 text-sm text-slate-400 leading-relaxed flex-1">{project.summary}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.slice(0, 4).map((t, ti) => (
                  <span key={ti} className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-white/4 text-slate-300 border border-white/10">
                    {t}
                  </span>
                ))}
                {project.tech.length > 4 && (
                  <span className="px-2 py-0.5 rounded-md text-[11px] font-mono text-slate-500">
                    +{project.tech.length - 4}
                  </span>
                )}
              </div>

              <div className="mt-5 pt-4 border-t border-white/10 flex items-center gap-3">
                {project.liveDemo ? (
                  <a href={project.liveDemo} target="_blank" rel="noreferrer"
                     className="inline-flex items-center gap-1 text-sm text-white font-medium hover:text-cyan-300 transition-colors">
                    <ExternalLink className="w-3.5 h-3.5" /> Demo
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-1 text-sm text-slate-500">
                    <ExternalLink className="w-3.5 h-3.5" /> Demo
                  </span>
                )}
                <a href={project.github} target="_blank" rel="noreferrer"
                   className="inline-flex items-center gap-1 text-sm text-white font-medium hover:text-cyan-300 transition-colors">
                  <GithubIcon className="w-3.5 h-3.5" /> Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <AgentWorkflowModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
}
