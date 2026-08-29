import React from 'react';
import { Briefcase } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import SectionHeading from './SectionHeading';

export default function ExperienceSection() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="relative py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading
          eyebrow="Experience"
          title="Work & leadership journey"
        />

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-5 top-2 bottom-2 w-px bg-gradient-to-b from-cyan-400/40 via-indigo-500/30 to-transparent" />

          <div className="space-y-8">
            {experience.map((exp, i) => (
              <div key={i} className="relative pl-16">
                {/* Node */}
                <div className="absolute left-0 top-1 w-10 h-10 rounded-xl glass flex items-center justify-center text-cyan-400">
                  <Briefcase className="w-4 h-4" />
                </div>

                <div className="reveal glass glass-hover rounded-2xl p-6">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-1">
                    <h3 className="text-white font-bold text-lg">
                      {exp.title}
                      <span className="font-normal text-slate-400"> · {exp.organization}</span>
                    </h3>
                    <span className="text-xs font-mono px-3 py-1 rounded-full bg-indigo-400/10 text-indigo-300 border border-indigo-400/20">
                      {exp.period}
                    </span>
                  </div>
                  <div className="text-xs font-mono text-slate-500 mb-4">
                    {exp.location} · {exp.type}
                  </div>
                  <ul className="space-y-2">
                    {exp.points.map((pt, pi) => (
                      <li key={pi} className="flex items-start gap-2.5 text-sm text-slate-300 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
