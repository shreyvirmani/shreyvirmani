import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

/**
 * Global scroll affordances:
 * - Thin glowing progress bar along the top
 * - Floating bottom-right HUD with active section + back-to-top button
 */
export default function ScrollEffects() {
  const [progress, setProgress] = useState(0);
  const [showTop, setShowTop] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const sections = ['home', 'about', 'skills', 'projects', 'experience', 'education', 'contact'];

    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0);
      setShowTop(window.scrollY > 400);

      let current = '';
      const pos = window.scrollY + window.innerHeight * 0.4;
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && pos >= el.offsetTop && pos < el.offsetTop + el.offsetHeight) {
          current = id;
        }
      }
      if (window.scrollY < 120) current = 'home';
      setActive(current.charAt(0).toUpperCase() + current.slice(1));
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <>
      <div className="fixed top-0 left-0 right-0 h-[3px] z-[60] bg-transparent">
        <div
          className="h-full scroll-progress transition-[width] duration-75 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
        <div className="hidden sm:flex items-center gap-2.5 px-4 py-2 rounded-full glass-strong text-xs font-mono shadow-2xl">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span className="text-slate-200 font-semibold">{active || 'Home'}</span>
          <span className="text-slate-500">·</span>
          <span className="text-indigo-300 font-bold">{Math.round(progress)}%</span>
        </div>

        {showTop && (
          <button
            onClick={toTop}
            aria-label="Back to top"
            className="group p-3 rounded-full glass-strong text-white hover:border-indigo-400/50 hover:shadow-[0_0_26px_rgba(129,140,248,0.45)] transition-all duration-300 hover:-translate-y-1"
          >
            <ChevronUp className="w-4 h-4" />
          </button>
        )}
      </div>
    </>
  );
}
