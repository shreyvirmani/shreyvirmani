import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar({ theme = 'dark', onToggleTheme }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[min(94vw,880px)]">
      <nav
        className={
          'glass rounded-full px-4 sm:px-6 py-2.5 flex items-center justify-between transition-all duration-500 ' +
          (scrolled ? 'shadow-[0_12px_40px_-12px_rgba(0,0,0,0.8)]' : '')
        }
      >
        <a href="#home" className="font-semibold text-white tracking-tight flex items-center gap-2 shrink-0">
          <span className="w-9 h-9 rounded-full overflow-hidden ring-2 ring-cyan-400/40 flex items-center justify-center">
            <img
              src="/profile.jpg"
              alt={portfolioData.personal.name}
              className="w-full h-full object-cover"
            />
          </span>
          <span className="hidden sm:inline text-[15px]">{portfolioData.personal.name}</span>
        </a>

        <div className="hidden md:flex items-center gap-1">
          {LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative px-3 py-1.5 text-sm text-slate-300 hover:text-white rounded-full transition-colors duration-300 hover:bg-white/5"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onToggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded-full text-slate-300 hover:text-white hover:bg-white/5 transition-colors"
          >
            {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center px-4 py-2 rounded-full text-sm font-medium text-white bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 shadow-lg shadow-indigo-500/25 transition-all hover:shadow-indigo-400/40"
          >
            Hire Me
          </a>
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className="md:hidden p-2 rounded-full text-slate-300 hover:text-white hover:bg-white/5"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden mt-3 glass-strong rounded-2xl p-3 space-y-1 shadow-2xl">
          {LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block px-4 py-2.5 rounded-xl text-sm text-slate-200 hover:bg-white/5 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="block px-4 py-2.5 rounded-xl text-sm font-medium text-center text-white bg-gradient-to-r from-cyan-500 to-indigo-600"
          >
            Hire Me
          </a>
        </div>
      )}
    </header>
  );
}
