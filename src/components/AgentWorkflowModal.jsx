import React, { useState } from 'react';
import {
  X, CheckCircle2, ArrowRight, Lightbulb, Brain, Search, Scale,
  Presentation, Terminal, Bot, Layers,
} from 'lucide-react';

export default function AgentWorkflowModal({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('idea');

  if (!isOpen) return null;

  const agents = [
    {
      id: 'idea',
      name: 'Idea Generator Agent',
      icon: Lightbulb,
      color: 'from-sky-500 to-cyan-500',
      badgeColor: 'bg-sky-500/10 text-sky-400 border-sky-500/20',
      role: 'Idea Generation & Refinement',
      input: 'Problem statement, domain, and requirements',
      output: 'Refined, feasible hackathon ideas with scope and direction',
      process: [
        'Parses the problem statement to extract constraints, domain, and goals',
        'Generates multiple creative solution ideas and scores their feasibility',
        'Refines the strongest idea into a clear, buildable direction'
      ]
    },
    {
      id: 'planner',
      name: 'Planner Agent',
      icon: Brain,
      color: 'from-blue-500 to-cyan-500',
      badgeColor: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
      role: 'Structured Project Planning',
      input: 'Refined idea from the Idea Generator',
      output: 'Project plan: features, architecture, tech stack, roadmap, team roles',
      process: [
        'Converts the idea into features, modules, and a technical architecture',
        'Recommends a tech stack and phased roadmap for execution',
        'Defines team roles and responsibilities for the build'
      ]
    },
    {
      id: 'research',
      name: 'Research Agent',
      icon: Search,
      color: 'from-cyan-500 to-emerald-500',
      badgeColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
      role: 'Competitive & Technical Research',
      input: 'Planner roadmap + target domain tags',
      output: 'Competitor matrix, tech options, risks, differentiation hooks',
      process: [
        'Researches competitors, existing solutions, and relevant APIs',
        'Evaluates alternative technologies and identifies risks',
        'Surfaces differentiation angles to strengthen the plan'
      ]
    },
    {
      id: 'judge',
      name: 'Judge Agent',
      icon: Scale,
      color: 'from-purple-500 to-pink-500',
      badgeColor: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
      role: 'Hackathon-Style Evaluation',
      input: 'Idea, plan, and research insights',
      output: 'Score, weakness analysis, and actionable improvements',
      process: [
        'Evaluates the project like a hackathon judge',
        'Identifies weaknesses and scores the solution',
        'Provides actionable improvements to refine the build'
      ]
    },
    {
      id: 'pitch',
      name: 'Pitch Agent',
      icon: Presentation,
      color: 'from-amber-500 to-orange-500',
      badgeColor: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
      role: 'Pitch & Presentation Transformation',
      input: 'Validated plan, research, and judge feedback',
      output: 'Slide-by-slide pitch deck, executive summary, business model',
      process: [
        'Transforms the validated project into structured pitch content',
        'Generates presentation narrative and business model breakdown',
        'Exports to PDF/PPT-ready structured output'
      ]
    },
    {
      id: 'prompt',
      name: 'LLM Prompt Generation Agent',
      icon: Terminal,
      color: 'from-emerald-500 to-teal-500',
      badgeColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
      role: 'Task-Specific Prompt Engineering',
      input: 'Final project plan and components',
      output: 'Optimized, task-specific prompts for implementing features with any LLM',
      process: [
        'Breaks the project into implementable tasks and components',
        'Generates optimized, task-specific prompts for each part',
        'Enables users to implement or improve features using any LLM'
      ]
    }
  ];

  const currentAgent = agents.find((a) => a.id === activeTab) || agents[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl glass-strong border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl my-4">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-5 right-5 p-2 rounded-full bg-white/5 text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-5 pr-10">
          <div className="p-2.5 rounded-2xl bg-cyan-500/10 text-cyan-400 border border-cyan-400/20">
            <Layers className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">HACKMIND AI</h3>
            <p className="text-xs sm:text-sm text-slate-400">
              Multi-Agent Generative AI platform orchestrated with Google Gemini &amp; LangGraph
            </p>
          </div>
        </div>

        {/* Pipeline Visual Flow */}
        <div className="mb-6 p-4 rounded-2xl bg-black/30 border border-white/10">
          <div className="text-xs font-mono text-slate-400 mb-3 uppercase tracking-wider">
            Execution Flow Pipeline
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
            {agents.map((agent, index) => {
              const Icon = agent.icon;
              const isSelected = activeTab === agent.id;
              return (
                <button
                  key={agent.id}
                  onClick={() => setActiveTab(agent.id)}
                  className={`flex flex-col items-center text-center p-3 rounded-xl border transition-all ${
                    isSelected
                      ? 'bg-white/10 border-cyan-400/80 shadow-lg shadow-cyan-500/10 scale-105'
                      : 'bg-white/4 border-white/10 hover:border-white/25 hover:bg-white/8'
                  }`}
                >
                  <div className={`p-2 rounded-lg bg-gradient-to-tr ${agent.color} text-white mb-2 shadow-sm`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-semibold text-slate-200 leading-tight">{agent.name}</span>
                  <span className="text-[9px] text-slate-500 mt-1 font-mono">Stage 0{index + 1}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Agent Detail Card */}
        <div className="p-6 rounded-2xl bg-black/30 border border-white/10 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3">
            <div className="flex items-center gap-2 flex-wrap">
              <span className={`px-2.5 py-1 rounded-md text-xs font-mono border ${currentAgent.badgeColor}`}>
                {currentAgent.name}
              </span>
              <span className="text-sm text-slate-300 font-medium">{currentAgent.role}</span>
            </div>
            <span className="text-xs font-mono text-cyan-400">Output feeds the next agent in the loop</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
            <div className="p-3 rounded-xl bg-white/5 border border-white/10">
              <span className="text-slate-500 block mb-1 uppercase font-semibold">Agent Inputs</span>
              <span className="text-slate-300">{currentAgent.input}</span>
            </div>
            <div className="p-3 rounded-xl bg-white/5 border border-white/10">
              <span className="text-cyan-400 block mb-1 uppercase font-semibold">Agent Outputs</span>
              <span className="text-slate-300">{currentAgent.output}</span>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2 font-semibold">
              Execution Logic
            </h4>
            <ul className="space-y-2">
              {currentAgent.process.map((step, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* HackMind AI Copilot Feature */}
        <div className="mt-6 p-5 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-indigo-600/10 border border-cyan-400/20">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 rounded-xl bg-cyan-500/15 text-cyan-400 border border-cyan-400/25">
              <Bot className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-white font-semibold">HackMind AI Copilot</h4>
              <p className="text-xs font-mono text-slate-400">Integrated conversational AI assistance</p>
            </div>
          </div>
          <p className="text-sm text-slate-300 leading-relaxed">
            An integrated conversational AI chatbot that lets users interact with their evolving project and receive
            contextual, agent-aware assistance throughout the entire hackathon development process.
          </p>
        </div>

        {/* Modal Footer */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10">
          <div className="text-xs text-slate-400">
            Deployed on: <strong className="text-slate-200">Vercel</strong> (Next.js) + <strong className="text-slate-200">Railway</strong> (FastAPI) + <strong className="text-slate-200">Supabase</strong> (PostgreSQL) · Razorpay SaaS
          </div>
          <a
            href="https://hackmind-ai-copilot.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 shadow-md transition-all"
          >
            <span>Launch Live App</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
