import React, { useState } from 'react';
import { ExternalLink, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { GithubIcon } from './Icons';
import SectionHeading from './SectionHeading';
import AgentWorkflowModal from './AgentWorkflowModal';

export default function ProjectsSection() {
  const { projects } = portfolioData;
  const featured = projects.filter((p) => p.flagship);
  const rest = projects.filter((p) => !p.flagship);
  const allProjects = [...featured, ...rest];
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section id="projects" className="relative py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading
          eyebrow="Selected Work"
          title="Real products, real pipelines"
          description="Projects I've designed and shipped — spanning AI/ML systems, NLP pipelines, RAG, multi-agent AI, and full-stack platforms."
        />

        {/* All projects in a single continuous grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {allProjects.map((project, i) => {
            const isFeatured = project.flagship;
            return (
              <div
                key={project.id}
                className={`reveal group glass glass-hover rounded-3xl p-5 flex flex-col h-full ${isFeatured ? 'border-cyan-400/10' : ''}`}
                style={{ transitionDelay: `${(i % 3) * 70}ms` }}
              >
                {(isFeatured || project.status) && (
                  <div className="mb-2 flex flex-wrap items-center gap-2">
                    {isFeatured && (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-mono bg-cyan-500/10 text-cyan-300 border border-cyan-400/20">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                        Featured
                      </span>
                    )}
                    {project.status && (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-mono bg-amber-500/10 text-amber-300 border border-amber-400/20">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                        {project.status}
                      </span>
                    )}
                  </div>
                )}
                <div className="mb-2">
                  <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-white/5 text-indigo-300 border border-white/10">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs font-mono text-indigo-300 mt-0.5">{project.subtitle}</p>
                <p className="mt-2 text-sm text-slate-400 leading-relaxed flex-1">{project.summary}</p>

                <div className="mt-3 flex flex-wrap gap-1.5">
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

                <div className="mt-3.5 pt-3 border-t border-white/10 flex flex-wrap items-center gap-x-2.5 gap-y-2">
                  {project.liveDemo ? (
                    <a href={project.liveDemo} target="_blank" rel="noreferrer"
                       className="inline-flex items-center gap-1 text-sm text-white font-medium hover:text-cyan-300 transition-colors">
                      <ExternalLink className="w-3.5 h-3.5" /> Demo
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-sm text-slate-500" title="No live demo has been deployed for this project">
                      <ExternalLink className="w-3.5 h-3.5" /> No live demo
                    </span>
                  )}
                  {project.github ? (
                    <a href={project.github} target="_blank" rel="noreferrer"
                       className="inline-flex items-center gap-1 text-sm text-white font-medium hover:text-cyan-300 transition-colors">
                      <GithubIcon className="w-3.5 h-3.5" /> Code
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-sm text-slate-500" title={project.githubUnavailable || 'No public source repository'}>
                      <GithubIcon className="w-3.5 h-3.5" /> Source unavailable
                    </span>
                  )}
                  {project.id === 'hackmind-ai' && (
                    <button
                      type="button"
                      onClick={() => setModalOpen(true)}
                      className="ml-auto inline-flex items-center gap-1 text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      Agent workflow
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <AgentWorkflowModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
}
