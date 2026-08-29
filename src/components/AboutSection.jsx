import React from 'react';
import { Sparkles, Database, Layers, BrainCircuit, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import SectionHeading from './SectionHeading';
import TiltCard from './TiltCard';

export default function AboutSection() {
  const { personal } = portfolioData;

  const pillars = [
    { icon: BrainCircuit, title: 'Generative AI & Agents', text: 'Multi-agent LLM workflows, prompt engineering, and orchestration.' },
    { icon: Database, title: 'RAG & NLP', text: 'Vector search, FAISS, embeddings, and grounded document intelligence.' },
    { icon: Layers, title: 'Full-Stack AI', text: 'LLM backends (FastAPI) paired with modern React/Next.js frontends.' },
    { icon: Sparkles, title: 'Productization', text: 'From AI prototypes to deployable, monetized products on Vercel/Railway.' },
  ];

  return (
    <section id="about" className="relative py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading
          eyebrow="About Me"
          title="Engineer, builder, and problem-solver"
        />

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Narrative */}
          <div className="lg:col-span-3 space-y-5">
            <p className="text-slate-300 leading-relaxed text-lg">
              {personal.bio}
            </p>
            <p className="text-slate-400 leading-relaxed">
              I bring hands-on experience across the complete AI application lifecycle — data processing, NLP,
              embeddings, retrieval, LLM integration, multi-agent workflows, backend APIs, database integration,
              deployment, and productization — with a strong track record in hackathons and student leadership.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              {pillars.map((p, i) => {
                const Icon = p.icon;
                return (
                  <div key={i} className="glass glass-hover rounded-2xl p-5">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500/15 to-indigo-500/15 border border-cyan-400/20 flex items-center justify-center text-cyan-400 mb-3">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="text-white font-semibold mb-1">{p.title}</h4>
                    <p className="text-sm text-slate-400">{p.text}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Education / highlight card */}
          <div className="lg:col-span-2">
            <TiltCard className="glass glass-hover rounded-3xl p-6 h-full">
              <div className="absolute top-0 right-0 w-56 h-56 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
              <span className="text-[11px] font-mono uppercase tracking-wider text-indigo-300">Currently</span>
              <h3 className="mt-2 text-white font-bold text-xl leading-snug">
                B.Tech in Electronics & Communication
              </h3>
              <p className="text-sm text-slate-400 mt-1">
                Maharaja Surajmal Institute of Technology, New Delhi
              </p>
              <div className="mt-5 space-y-3">
                <div className="flex items-center justify-between rounded-xl px-4 py-3 bg-white/5 border border-white/5">
                  <span className="text-sm text-slate-400">CGPA</span>
                  <span className="font-mono font-bold text-cyan-300">8.197</span>
                </div>
                <div className="flex items-center justify-between rounded-xl px-4 py-3 bg-white/5 border border-white/5">
                  <span className="text-sm text-slate-400">Graduating</span>
                  <span className="font-mono font-bold text-indigo-300">2028</span>
                </div>
                <div className="flex items-center justify-between rounded-xl px-4 py-3 bg-white/5 border border-white/5">
                  <span className="text-sm text-slate-400">Focus</span>
                  <span className="text-sm font-medium text-slate-200">ML &amp; Computing</span>
                </div>
              </div>
              <a
                href="#education"
                className="mt-6 inline-flex items-center gap-1.5 text-sm text-cyan-400 hover:text-cyan-300 font-medium"
              >
                View education details <ArrowUpRight className="w-4 h-4" />
              </a>
            </TiltCard>
          </div>
        </div>
      </div>
    </section>
  );
}
