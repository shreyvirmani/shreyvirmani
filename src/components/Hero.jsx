import React, { useEffect, useState } from 'react';
import { ArrowRight, ExternalLink, Mail, MapPin } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';

const ROLES = [
  'AI & Machine Learning Engineer',
  'Generative AI Developer',
  'RAG & Multi-Agent Builder',
  'Full-Stack Product Engineer',
];

function useTypewriter(words) {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    let timeout;

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), 1900);
    } else if (deleting && text === '') {
      setDeleting(false);
      setWordIndex((i) => (i + 1) % words.length);
    } else {
      timeout = setTimeout(
        () => {
          setText(
            current.slice(0, text.length + (deleting ? -1 : 1)),
          );
        },
        deleting ? 38 : 70,
      );
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words]);

  return text;
}

export default function Hero() {
  const typed = useTypewriter(ROLES);
  const { personal, stats } = portfolioData;

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center pt-32 pb-16 overflow-hidden">
      {/* Local aurora accent */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(56,189,248,0.14),rgba(129,140,248,0.08),transparent_70%)] pointer-events-none blur-2xl" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl">
          <div className="reveal inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass text-xs font-mono text-slate-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Open to AI/ML & Generative AI roles
          </div>

          <h1 className="reveal mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.05] text-white">
            Hi, I'm{' '}
            <span className="text-aurora">Shrey Virmani</span>
            <span className="text-cyan-400">.</span>
          </h1>

          <p className="reveal mt-5 h-8 font-mono text-lg sm:text-xl text-indigo-300">
            <span className="text-slate-500">&gt; </span>
            {typed}
            <span className="inline-block w-[2px] h-5 ml-0.5 bg-cyan-400 align-middle animate-pulse" />
          </p>

          <p className="reveal mt-6 text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
            I build production-grade AI products end-to-end — from{' '}
            <span className="text-white">LLM-powered backends and RAG pipelines</span> to{' '}
            <span className="text-white">multi-agent systems and modern React/Next.js frontends</span>.
          </p>

          {/* CTAs */}
          <div className="reveal mt-9 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 shadow-lg shadow-indigo-500/25 transition-all hover:shadow-indigo-400/40 hover:-translate-y-0.5"
            >
              View Projects
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium text-slate-100 glass hover:border-cyan-400/40 transition-all hover:-translate-y-0.5"
            >
              <Mail className="w-4 h-4" />
              Get in Touch
            </a>
          </div>

          {/* Socials */}
          <div className="reveal mt-8 flex items-center gap-4">
            <a href={personal.github} target="_blank" rel="noreferrer" aria-label="GitHub"
               className="p-2.5 rounded-xl glass text-slate-300 hover:text-white hover:border-cyan-400/40 transition-all">
              <GithubIcon className="w-5 h-5" />
            </a>
            <a href={personal.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"
               className="p-2.5 rounded-xl glass text-slate-300 hover:text-white hover:border-indigo-400/40 transition-all">
              <LinkedinIcon className="w-5 h-5" />
            </a>
            <span className="inline-flex items-center gap-1.5 text-sm text-slate-400">
              <MapPin className="w-4 h-4 text-cyan-400" />
              {personal.location}
            </span>
          </div>
        </div>

        {/* Stats strip */}
        <div className="reveal mt-14 grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl">
          {stats.map((stat, i) => (
            <div key={i} className="glass glass-hover rounded-2xl px-5 py-4">
              <div className="text-[11px] font-mono uppercase tracking-wider text-slate-500 mb-1.5">
                {stat.label}
              </div>
              <div className="text-sm font-semibold text-white leading-snug">
                {stat.value}
              </div>
            </div>
          ))}
        </div>

        {/* GitHub activity card */}
        <div className="reveal mt-10 max-w-3xl">
          <div className="glass rounded-2xl p-5 shadow-2xl">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2 text-sm text-slate-300">
                <GithubIcon className="w-4 h-4 text-cyan-400" />
                <span className="font-medium">GitHub Contribution Graph</span>
              </div>
              <a
                href={personal.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full glass text-slate-300 hover:text-white hover:border-cyan-400/40 transition-all"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                @shreyvirmani
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
            <div className="rounded-xl bg-[#0d1117] p-4 border border-white/5 overflow-x-auto">
              <img
                src="https://ghchart.rshah.org/38bdf8/shreyvirmani"
                alt="Shrey Virmani's GitHub contribution chart"
                className="w-full min-w-0 sm:min-w-[560px] opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
