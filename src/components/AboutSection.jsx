import React from 'react';
import { MapPin, Mail, Sparkles, Award, Terminal, Brain } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function AboutSection() {
  const { personal } = portfolioData;

  const pillars = [
    {
      title: 'Generative AI & LLM Systems',
      description: 'Designing production-grade multi-agent architectures, structured prompting, and autonomous sequential workflows with Google Gemini.',
      icon: Sparkles,
      color: 'text-cyan-400',
      bg: 'bg-cyan-500/10 border-cyan-500/20',
    },
    {
      title: 'RAG & Vector Retrieval',
      description: 'Building high-accuracy semantic retrieval pipelines utilizing LangChain, FAISS vector stores, Hugging Face embeddings, and hybrid chunking.',
      icon: Brain,
      color: 'text-indigo-400',
      bg: 'bg-indigo-500/10 border-indigo-500/20',
    },
    {
      title: 'Full-Stack Product Engineering',
      description: 'End-to-end product delivery combining high-throughput FastAPI backends, Next.js/React frontends, PostgreSQL databases, and modern deployment.',
      icon: Terminal,
      color: 'text-emerald-400',
      bg: 'bg-emerald-500/10 border-emerald-500/20',
    },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-mono mb-3 border border-cyan-500/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Profile & Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            About Me
          </h2>
          <p className="text-slate-400 text-base mt-2">
            AI/ML-focused engineer and product builder bridging deep model capabilities with production software.
          </p>
        </div>

        {/* Bio Card */}
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-xl shadow-2xl mb-12">
          <p className="text-slate-300 leading-relaxed text-base sm:text-lg mb-6">
            {personal.bio}
          </p>

          <div className="grid sm:grid-cols-2 gap-4 pt-4 border-t border-slate-800/80">
            <div className="flex items-center gap-3 p-3 rounded-2xl bg-slate-950/60 border border-slate-800/60">
              <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs text-slate-400 block font-mono">Location</span>
                <span className="text-sm font-semibold text-white">{personal.location}</span>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-2xl bg-slate-950/60 border border-slate-800/60">
              <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400">
                <Mail className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <span className="text-xs text-slate-400 block font-mono">Email</span>
                <a
                  href={`mailto:${personal.email}`}
                  className="text-sm font-semibold text-cyan-400 hover:underline truncate block"
                >
                  {personal.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-slate-900/40 border border-slate-800/80 hover:border-cyan-500/30 transition-all duration-300 shadow-xl"
              >
                <div className={`w-10 h-10 rounded-2xl flex items-center justify-center mb-4 border ${pillar.bg}`}>
                  <Icon className={`w-5 h-5 ${pillar.color}`} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {pillar.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

