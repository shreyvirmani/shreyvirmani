import React from 'react';
import {
  SiPython, SiPytorch, SiScikitlearn, SiTensorflow, SiLangchain,
  SiFastapi, SiNextdotjs, SiReact, SiTypescript, SiTailwindcss,
  SiPostgresql, SiSupabase, SiMongodb, SiMysql, SiDocker,
  SiGit, SiGithub, SiVercel, SiStreamlit, SiHuggingface,
  SiGooglecolab, SiGoogle, SiNumpy, SiPandas, SiKeras,
} from 'react-icons/si';
import { Database } from 'lucide-react';
import SectionHeading from './SectionHeading';

const SKILLS = [
  { name: 'Python', icon: SiPython, color: '#3776ab' },
  { name: 'PyTorch', icon: SiPytorch, color: '#ee4c2c' },
  { name: 'TensorFlow', icon: SiTensorflow, color: '#ff6f00' },
  { name: 'scikit-learn', icon: SiScikitlearn, color: '#f7931e' },
  { name: 'NumPy', icon: SiNumpy, color: '#013243' },
  { name: 'Pandas', icon: SiPandas, color: '#150458' },
  { name: 'LangChain', icon: SiLangchain, color: '#1c3c3c' },
  { name: 'Google Gemini', icon: SiGoogle, color: '#4285f4' },
  { name: 'Hugging Face', icon: SiHuggingface, color: '#ffd21e' },
  { name: 'FastAPI', icon: SiFastapi, color: '#009688' },
  { name: 'Next.js', icon: SiNextdotjs, color: '#ffffff' },
  { name: 'React', icon: SiReact, color: '#61dafb' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178c6' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06b6d4' },
  { name: 'Streamlit', icon: SiStreamlit, color: '#ff4b4b' },
  { name: 'Supabase', icon: SiSupabase, color: '#3ecf8e' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169e1' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47a248' },
  { name: 'MySQL', icon: SiMysql, color: '#4479a1' },
  { name: 'Git', icon: SiGit, color: '#f05032' },
  { name: 'Docker', icon: SiDocker, color: '#2496ed' },
  { name: 'Vercel', icon: SiVercel, color: '#ffffff' },
  { name: 'Google Colab', icon: SiGooglecolab, color: '#f9ab00' },
  { name: 'GitHub', icon: SiGithub, color: '#ffffff' },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="relative py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading
          eyebrow="Skills & Tools"
          title="A full-stack AI toolkit"
          description="The languages, frameworks, and platforms I use to ship production AI products."
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {SKILLS.map((skill, i) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.name}
                className="reveal group glass glass-hover rounded-2xl p-4 sm:p-5"
                style={{ transitionDelay: `${(i % 4) * 50}ms` }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-10 h-10 shrink-0 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center"
                    style={{ color: skill.color }}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-semibold text-white leading-tight">
                    {skill.name}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
