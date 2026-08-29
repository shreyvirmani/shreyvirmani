import React from 'react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const { personal } = portfolioData;
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-10 border-t border-white/10 bg-black/30">
      <div className="container mx-auto px-4 md:px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="text-center sm:text-left">
          <div className="flex items-center gap-2 justify-center sm:justify-start mb-1">
            <span className="w-8 h-8 rounded-full overflow-hidden ring-2 ring-cyan-400/40 flex items-center justify-center">
              <img
                src="/profile.jpg"
                alt={personal.name}
                className="w-full h-full object-cover"
              />
            </span>
            <span className="text-white font-semibold">{personal.name}</span>
          </div>
          <p className="text-xs text-slate-500 font-mono">
            © {year} · AI/ML Engineer · Built with React &amp; Three.js
          </p>
        </div>

        <div className="flex items-center gap-2">
          <a href={personal.github} target="_blank" rel="noreferrer" aria-label="GitHub"
             className="p-2.5 rounded-xl glass text-slate-300 hover:text-white hover:border-cyan-400/40 transition-all">
            <GithubIcon className="w-4 h-4" />
          </a>
          <a href={personal.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"
             className="p-2.5 rounded-xl glass text-slate-300 hover:text-white hover:border-cyan-400/40 transition-all">
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a href={personal.instagram} target="_blank" rel="noreferrer" aria-label="Instagram"
             className="p-2.5 rounded-xl glass text-slate-300 hover:text-white hover:border-pink-400/40 transition-all">
            <InstagramIcon className="w-4 h-4" />
          </a>
          <a href={`mailto:${personal.email}`}
             className="px-4 py-2.5 rounded-xl glass text-sm text-slate-300 hover:text-white hover:border-cyan-400/40 transition-all">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
