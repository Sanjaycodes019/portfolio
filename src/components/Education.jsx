import React, { useRef } from 'react';
import { FaUniversity, FaMapMarkerAlt, FaGraduationCap, FaRegCalendarAlt } from 'react-icons/fa';
import { profile } from '../data/profile.js';
import { useReveal } from '../hooks/useReveal.js';
import SectionHeader from './SectionHeader.jsx';

const Education = () => {
  const sectionRef = useRef(null);
  useReveal(sectionRef, { threshold: 0.08 });

  const edu = profile.education;

  const details = [
    { label: 'Location', value: edu.location, icon: <FaMapMarkerAlt className="w-4 h-4" /> },
    { label: 'Program', value: edu.degree, icon: <FaGraduationCap className="w-4 h-4" /> },
    { label: 'Duration', value: edu.period, icon: <FaRegCalendarAlt className="w-4 h-4" /> },
    { label: 'Current Year', value: '3rd Year (CSE)', icon: <FaGraduationCap className="w-4 h-4" /> },
  ];

  return (
    <section
      id="education"
      ref={sectionRef}
      className="py-24 px-4 sm:px-6 lg:px-8 bg-[color:var(--bg-primary)] relative overflow-hidden"
    >
      {/* Ambient background blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-[520px] h-[520px] bg-blue-50/60 dark:bg-blue-500/8 rounded-full blur-[96px] translate-x-1/3 -translate-y-1/4" />
        <div className="absolute bottom-0 left-0 w-[420px] h-[420px] bg-red-50/60 dark:bg-red-500/8 rounded-full blur-[96px] -translate-x-1/3 translate-y-1/4" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[color:var(--crimson-light)]/10 rounded-full blur-[72px]" />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <SectionHeader
          eyebrow="Academic background"
          title="Education"
          highlight="Journey"
          description="A concise view of my degree, focus areas, and coursework."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">

          {/* ── Main Card ── */}
          <div className="reveal delay-1 lg:col-span-2 rounded-3xl border border-[color:var(--border-color)] bg-[color:var(--bg-card)] shadow-lg overflow-hidden group">

            {/* Hero banner */}
            <div className="relative px-6 py-7 sm:px-8 sm:py-8 bg-gradient-to-br from-[color:var(--crimson-light)]/80 via-[color:var(--navy-light)]/50 to-[color:var(--bg-card)] overflow-hidden">
              {/* Decorative grid lines */}
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.06] dark:opacity-[0.12]"
                style={{
                  backgroundImage:
                    'linear-gradient(var(--crimson) 1px, transparent 1px), linear-gradient(90deg, var(--crimson) 1px, transparent 1px)',
                  backgroundSize: '40px 40px',
                }}
              />

              {/* Floating decorative circle */}
              <div className="pointer-events-none absolute -right-10 -top-10 w-52 h-52 rounded-full border-2 border-[color:var(--crimson)]/20 opacity-60" />
              <div className="pointer-events-none absolute -right-6 -top-6 w-32 h-32 rounded-full border border-[color:var(--crimson)]/15 opacity-60" />

              <div className="relative flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
                {/* Logo + title */}
                <div className="flex items-center gap-4">
                  <div className="relative shrink-0">
                    <div className="absolute inset-0 rounded-2xl bg-[color:var(--crimson)]/20 blur-md scale-110" />
                    <img
                      src="/chitkara_university_logo.jpeg"
                      alt="Chitkara University logo"
                      className="relative h-14 w-auto rounded-lg"
                      loading="lazy"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        const fallback = document.createElement('div');
                        fallback.className =
                          'relative w-14 h-14 bg-[color:var(--crimson-light)] dark:bg-crimson-900/50 rounded-2xl flex items-center justify-center text-[color:var(--crimson)] font-bold text-xl border border-[color:var(--crimson)]/30 shadow-lg';
                        fallback.textContent = 'CU';
                        e.target.parentNode.replaceChild(fallback, e.target);
                      }}
                    />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[color:var(--crimson)]">{edu.university}</p>
                    <h3 className="text-xl sm:text-2xl font-bold text-[color:var(--text-heading)] leading-tight mt-1">
                      {edu.degree}
                    </h3>
                    <p className="text-sm text-[color:var(--text-secondary)] mt-1.5 flex flex-wrap items-center gap-x-2">
                      <span className="flex items-center gap-1">
                        <FaMapMarkerAlt className="w-3 h-3 text-[color:var(--crimson)]" />
                        {edu.location}
                      </span>
                      <span className="text-[color:var(--border-color)]">·</span>
                      <span className="flex items-center gap-1">
                        <FaRegCalendarAlt className="w-3 h-3 text-[color:var(--crimson)]" />
                        {edu.period}
                      </span>
                    </p>
                  </div>
                </div>

                {/* CGPA badge */}
                <div className="relative shrink-0 self-start sm:self-auto">
                  <div className="absolute inset-0 rounded-2xl bg-[color:var(--crimson)]/15 blur-lg scale-110" />
                  <div className="relative rounded-2xl bg-white/90 dark:bg-slate-900/70 border border-white/60 dark:border-slate-700/60 px-7 py-4 text-center shadow-md backdrop-blur-sm">
                    <p className="text-4xl font-extrabold text-[color:var(--crimson)] leading-none tracking-tight">
                      {edu.cgpa}
                    </p>
                    <p className="text-[10px] mt-1.5 text-[color:var(--text-secondary)] uppercase tracking-[0.18em] font-bold">
                      CGPA
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Detail pills */}
            <div className="p-6 sm:p-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {details.map((d) => (
                  <div
                    key={d.label}
                    className="group/item flex items-center gap-3.5 rounded-2xl border border-[color:var(--border-color)] bg-[color:var(--bg-secondary)]/50 px-4 py-4 hover:border-[color:var(--crimson)]/40 hover:bg-[color:var(--crimson-light)]/10 transition-all duration-200"
                  >
                    <div className="w-10 h-10 shrink-0 rounded-xl bg-[color:var(--bg-card)] border border-[color:var(--border-color)] group-hover/item:border-[color:var(--crimson)]/30 flex items-center justify-center shadow-sm transition-colors duration-200">
                      <span className="text-[color:var(--crimson)]" aria-hidden="true">{d.icon}</span>
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] uppercase tracking-[0.14em] text-[color:var(--text-secondary)] font-bold">
                        {d.label}
                      </p>
                      <p className="text-sm font-semibold text-[color:var(--text-heading)] mt-0.5 truncate">
                        {d.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Achievement strip */}
              <div className="mt-5 flex items-center gap-3 rounded-2xl border border-[color:var(--crimson)]/20 bg-[color:var(--crimson-light)]/10 px-5 py-3.5">
                <div className="flex -space-x-1 shrink-0">
                  {['★', '★', '★'].map((s, i) => (
                    <span key={i} className="text-[color:var(--crimson)] text-xs leading-none">{s}</span>
                  ))}
                </div>
                <p className="text-sm text-[color:var(--text-secondary)] leading-relaxed">
                  Maintaining a strong academic record with a focus on applied CS fundamentals and systems thinking.
                </p>
              </div>
            </div>
          </div>

          {/* ── Coursework Card ── */}
          <div className="reveal delay-2 rounded-3xl border border-[color:var(--border-color)] bg-[color:var(--bg-card)] shadow-lg overflow-hidden flex flex-col">

            {/* Header */}
            <div className="relative px-6 py-5 border-b border-[color:var(--border-color)] bg-gradient-to-r from-[color:var(--crimson-light)]/60 to-[color:var(--navy-light)]/30 overflow-hidden">
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.05]"
                style={{
                  backgroundImage: 'radial-gradient(circle, var(--crimson) 1px, transparent 1px)',
                  backgroundSize: '18px 18px',
                }}
              />
              <p className="relative text-xs font-bold uppercase tracking-[0.18em] text-[color:var(--crimson)]">
                Relevant Coursework
              </p>
            </div>

            {/* Tags */}
            <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between gap-6">
              <div className="flex flex-wrap gap-2">
                {edu.coursework.map((c) => (
                  <span
                    key={c}
                    className="px-3 py-1.5 bg-[color:var(--crimson-light)]/20 border border-[color:var(--crimson)]/25 text-[color:var(--crimson)] rounded-xl text-xs font-semibold hover:bg-[color:var(--crimson-light)]/35 hover:border-[color:var(--crimson)]/45 transition-all duration-150 cursor-default"
                  >
                    {c}
                  </span>
                ))}
              </div>

              {/* Divider */}
              <div className="h-px bg-gradient-to-r from-transparent via-[color:var(--border-color)] to-transparent" />

              {/* Note */}
              <div className="rounded-2xl border border-[color:var(--border-color)] bg-[color:var(--bg-secondary)]/50 p-4">
                <p className="text-sm text-[color:var(--text-secondary)] leading-relaxed">
                  Focused on strong fundamentals and practical projects — with a bias for clean APIs and reliability.
                </p>
              </div>

              {/* Progress visual */}
              <div className="space-y-2.5">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-semibold text-[color:var(--text-secondary)] uppercase tracking-wider">
                    Degree Progress
                  </span>
                  <span className="text-xs font-bold text-[color:var(--crimson)]">Year 3 / 4</span>
                </div>
                <div className="h-2 w-full rounded-full bg-[color:var(--bg-secondary)] border border-[color:var(--border-color)] overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-[color:var(--crimson)] to-[color:var(--crimson-light)] transition-all duration-700"
                    style={{ width: '75%' }}
                  />
                </div>
                <p className="text-[11px] text-[color:var(--text-secondary)]">75% complete · Expected graduation 2027</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Education;