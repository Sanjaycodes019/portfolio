import React from 'react';

export default function SectionHeader({
  eyebrow,
  title,
  highlight,
  description,
  align = 'center',
}) {
  const alignClass = align === 'left' ? 'text-left items-start' : 'text-center items-center';

  return (
    <div className={`reveal flex flex-col gap-4 mb-14 ${alignClass}`}>
      {eyebrow ? (
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-crimson-500 uppercase tracking-wider">
          <span className="w-7 h-0.5 bg-crimson-500 rounded" aria-hidden="true" />
          <span>{eyebrow}</span>
        </div>
      ) : null}

      <div className="flex flex-col gap-3">
        <h2 className="text-responsive-h2 font-bold text-[color:var(--text-heading)]">
          {title}{' '}
          {highlight ? <span className="text-gradient">{highlight}</span> : null}
        </h2>
        <div className="flex gap-1 justify-center" aria-hidden="true">
          <div className="w-8 h-0.5 bg-crimson-500 rounded" />
          <div className="w-5 h-0.5 bg-navy-900 rounded" />
        </div>
      </div>

      {description ? (
        <p className="text-base sm:text-lg text-secondary max-w-2xl">{description}</p>
      ) : null}
    </div>
  );
}


