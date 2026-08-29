import React from 'react';
import { GraduationCap, Award, BookOpen, Calendar, MapPin } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import SectionHeading from './SectionHeading';
import TiltCard from './TiltCard';

export default function EducationSection() {
  const { education } = portfolioData;

  return (
    <section id="education" className="relative py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <SectionHeading eyebrow="Education" title="Academic foundation" align="center" />

        <TiltCard className="glass glass-hover rounded-3xl p-7 sm:p-9">
          <div className="absolute top-0 right-0 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-7 pb-7 border-b border-white/10">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">{education.institution}</h3>
              <p className="text-sm font-medium text-cyan-300">{education.degree}</p>
            </div>
            <div className="flex flex-wrap md:flex-col md:items-end gap-2 text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-slate-500" /> Class of {education.graduationYear}
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-slate-500" /> {education.location}
              </span>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 mb-7">
            <div className="rounded-2xl bg-white/5 border border-white/10 p-4 flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-400/20">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-slate-400 font-mono">Cumulative CGPA</div>
                <div className="text-lg font-bold font-mono text-cyan-300">8.197</div>
              </div>
            </div>
            <div className="rounded-2xl bg-white/5 border border-white/10 p-4 flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-slate-400 font-mono">Primary Focus</div>
                <div className="text-sm font-semibold text-white">Electronics, Computing & ML</div>
              </div>
            </div>
          </div>

          <div>
            <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3 font-semibold">
              <GraduationCap className="w-3.5 h-3.5 inline mr-1" />
              Relevant Coursework
            </div>
            <div className="flex flex-wrap gap-2">
              {education.coursework.map((c, i) => (
                <span key={i} className="px-3 py-1.5 rounded-lg text-xs font-mono bg-white/5 text-slate-300 border border-white/10">
                  {c}
                </span>
              ))}
            </div>
          </div>
        </TiltCard>
      </div>
    </section>
  );
}
