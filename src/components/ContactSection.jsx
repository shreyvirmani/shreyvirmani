import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Check, Copy, Loader2, AlertCircle } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';
import SectionHeading from './SectionHeading';

// Your Formspree endpoint. Create one at https://formspree.io and paste its
// ID here, e.g. "https://formspree.io/f/yourformid"
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mgaeegar';

export default function ContactSection() {
  const { personal } = portfolioData;
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const copyEmail = () => {
    navigator.clipboard.writeText(personal.email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    setStatus('sending');
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const infoCards = [
    { icon: Mail, label: 'Email', value: personal.email, action: copyEmail, actionLabel: copied ? 'Copied!' : 'Copy', actionIcon: copied ? Check : Copy, color: 'text-cyan-400' },
    { icon: Phone, label: 'Phone', value: personal.phone, color: 'text-indigo-400' },
    { icon: MapPin, label: 'Location', value: personal.location, color: 'text-purple-400' },
  ];

  return (
    <section id="contact" className="relative py-20 md:py-28">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[400px] bg-[radial-gradient(ellipse_at_bottom,rgba(99,102,241,0.15),transparent_70%)]" />
      <div className="container mx-auto px-4 md:px-6 relative">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something intelligent"
          description="I'm open to AI/ML engineering opportunities, Generative AI projects, collaborations, and hackathon initiatives."
        />

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left info */}
          <div className="space-y-4">
            <p className="text-slate-300 leading-relaxed mb-6">
              Whether you have a role to fill, an idea to prototype, or just want to talk multi-agent systems and
              RAG — my inbox is always open.
            </p>

            <div className="space-y-3">
              {infoCards.map((card, i) => {
                const Icon = card.icon;
                return (
                  <div
                    key={i}
                    onClick={card.action}
                    className={`glass glass-hover rounded-2xl p-4 flex items-center gap-4 ${card.action ? 'cursor-pointer' : ''}`}
                  >
                    <div className={`p-2.5 rounded-xl bg-white/5 border border-white/10 ${card.color}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs text-slate-400">{card.label}</div>
                      <div className="text-sm font-medium text-white truncate">{card.value}</div>
                    </div>
                    {card.action && (
                      <button className="inline-flex items-center gap-1 text-xs font-mono text-slate-400 hover:text-cyan-300">
                        <card.actionIcon className="w-3.5 h-3.5" />
                        {card.actionLabel}
                      </button>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="flex gap-3 pt-2">
              <a href={personal.github} target="_blank" rel="noreferrer"
                 className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl glass glass-hover text-sm font-medium text-slate-200">
                <GithubIcon className="w-4 h-4 text-cyan-400" /> GitHub
              </a>
              <a href={personal.linkedin} target="_blank" rel="noreferrer"
                 className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl glass glass-hover text-sm font-medium text-slate-200">
                <LinkedinIcon className="w-4 h-4 text-indigo-400" /> LinkedIn
              </a>
            </div>
          </div>

          {/* Right form */}
          <form onSubmit={onSubmit} className="glass rounded-3xl p-6 sm:p-8 space-y-5 shadow-2xl">
            <div>
              <label htmlFor="name" className="block text-xs font-mono text-slate-400 mb-1.5 uppercase tracking-wider">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Jane Doe"
                className="w-full px-4 py-3 rounded-xl bg-black/30 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/10 transition-all text-sm"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-xs font-mono text-slate-400 mb-1.5 uppercase tracking-wider">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="jane@example.com"
                className="w-full px-4 py-3 rounded-xl bg-black/30 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/10 transition-all text-sm"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-xs font-mono text-slate-400 mb-1.5 uppercase tracking-wider">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                placeholder="Tell me about your project or opportunity..."
                className="w-full px-4 py-3 rounded-xl bg-black/30 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/10 transition-all text-sm resize-none"
              />
            </div>

            {status === 'error' && (
              <p className="flex items-center gap-2 text-sm text-red-400">
                <AlertCircle className="w-4 h-4" /> Something went wrong. Please try again.
              </p>
            )}

            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 shadow-lg shadow-indigo-500/25 transition-all hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
            >
              {status === 'sending' ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" /> Sending...
                </>
              ) : status === 'success' ? (
                <>
                  <Check className="w-4 h-4" /> Message Sent!
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" /> Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
