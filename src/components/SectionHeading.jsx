import React from 'react';

/**
 * Consistent section header used across all sections.
 * Optional eyebrow label + title + description.
 */
export default function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  const alignment = align === 'center' ? 'text-center mx-auto items-center' : 'text-left items-start';
  return (
    <div className={`flex flex-col gap-3 mb-10 md:mb-14 max-w-2xl ${alignment}`}>
      {eyebrow && (
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono border border-indigo-400/20 bg-indigo-400/5 text-indigo-300">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
        {title}
      </h2>
      {description && (
        <p className="text-slate-400 leading-relaxed text-base">{description}</p>
      )}
    </div>
  );
}
