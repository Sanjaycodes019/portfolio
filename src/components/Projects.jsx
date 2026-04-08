import React, { useRef } from 'react';
import { 
  FaTruck, 
  FaShieldAlt, 
  FaLaptopCode, 
  FaGamepad,
  FaNodeJs,
  FaReact,
  FaGitAlt,
  FaDocker,
  FaPython,
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGithub,
  FaServer,
  FaDatabase
} from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTailwindcss, SiVite, SiFastapi } from 'react-icons/si';
import { profile } from '../data/profile.js';
import { useReveal } from '../hooks/useReveal.js';

const Projects = () => {
  const sectionRef = useRef(null);
  useReveal(sectionRef, { threshold: 0.08 });

  const getTechIcon = (tech) => {
    const iconMap = {
      'Node.js': <FaNodeJs className="w-3.5 h-3.5" />,
      'Express.js': <SiExpress className="w-3.5 h-3.5" />,
      'MongoDB': <SiMongodb className="w-3.5 h-3.5" />,
      'React': <FaReact className="w-3.5 h-3.5" />,
      'TypeScript': <span className="text-[10px] font-black leading-none">TS</span>,
      'FastAPI': <SiFastapi className="w-3.5 h-3.5" />,
      'HTML5 Canvas': <FaHtml5 className="w-3.5 h-3.5" />,
      'JavaScript': <FaJs className="w-3.5 h-3.5" />,
      'CSS3': <FaCss3Alt className="w-3.5 h-3.5" />,
      'Tailwind CSS': <SiTailwindcss className="w-3.5 h-3.5" />,
      'Vite': <SiVite className="w-3.5 h-3.5" />,
      'Git': <FaGitAlt className="w-3.5 h-3.5" />,
      'GitHub': <FaGithub className="w-3.5 h-3.5" />,
      'Docker': <FaDocker className="w-3.5 h-3.5" />,
      'Python': <FaPython className="w-3.5 h-3.5" />,
      'Java': <FaJava className="w-3.5 h-3.5" />
    };
    return iconMap[tech] || null;
  };

  const GitHubIcon = () => (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
    </svg>
  );

  const ExternalIcon = () => (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
    </svg>
  );

  const getProjectIcon = (iconId) => {
    const cls = "w-6 h-6";
    switch (iconId) {
      case 'cargo':   return <FaTruck    className={cls} />;
      case 'safety':  return <FaShieldAlt className={cls} />;
      case 'game':    return <FaGamepad  className={cls} />;
      default:        return <FaLaptopCode className={cls} />;
    }
  };

  return (
    <section
      id="projects"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-[color:var(--bg-primary)] relative overflow-hidden"
      ref={sectionRef}
    >
      {/* Ambient blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-50/60 dark:bg-red-500/8 rounded-full blur-[96px] translate-x-1/3 -translate-y-1/4" />
        <div className="absolute bottom-0 left-0 w-[420px] h-[420px] bg-blue-50/50 dark:bg-blue-500/8 rounded-full blur-[96px] -translate-x-1/3 translate-y-1/4" />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">

        {/* ── Section Header ── */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-crimson-500 uppercase tracking-[0.18em] mb-4">
            <div className="w-7 h-px bg-crimson-500 rounded" />
            Selected Work
            <div className="w-7 h-px bg-crimson-500 rounded" />
          </div>
          <h2 className="text-responsive-h2 font-bold text-heading mb-4">
            My <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            Things I've built — from logistics platforms to safety tools and interactive games.
          </p>
          <div className="flex justify-center gap-1 mt-5">
            <div className="w-8 h-0.5 bg-crimson-500 rounded" />
            <div className="w-5 h-0.5 bg-navy-900 dark:bg-slate-500 rounded" />
          </div>
        </div>

        {/* ── Cards Grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {profile.projects.map((p, i) => {
            const isCrimson = p.color === 'crimson';

            // accent helpers that stay in your existing CSS class system
            const accentText   = isCrimson ? 'text-crimson-500'  : 'text-navy-900 dark:text-blue-400';
            const accentBg     = isCrimson ? 'bg-crimson-500'     : 'bg-navy-900 dark:bg-blue-500';
            const accentBorder = isCrimson ? 'border-crimson-500/30' : 'border-navy-900/30 dark:border-blue-500/30';
            const accentLight  = isCrimson ? 'bg-crimson-50 dark:bg-crimson-900/20' : 'bg-blue-50 dark:bg-blue-900/20';
            const dotBg        = isCrimson ? 'bg-crimson-500'     : 'bg-navy-900 dark:bg-blue-400';
            const btnPrimary   = isCrimson ? 'btn-primary'        : 'bg-navy-900 text-white hover:bg-navy-800 dark:bg-blue-700 dark:hover:bg-blue-600';

            return (
              <div
                key={p.title}
                className="reveal"
                style={{ transitionDelay: `${i * 0.12}s` }}
              >
                <div className={`project-card ${isCrimson ? 'crimson-theme' : 'navy-theme'} group relative rounded-3xl border border-[color:var(--border-color)] bg-[color:var(--bg-card)] shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden`}>

                  {/* Top accent bar */}
                  <div className={`h-1 w-full ${accentBg} opacity-80`} />

                  {/* Watermark number */}
                  <div className="absolute top-4 right-5 text-7xl font-black opacity-[0.04] pointer-events-none select-none leading-none">
                    {p.number}
                  </div>

                  {/* Subtle corner glow on hover */}
                  <div className={`absolute -top-12 -right-12 w-36 h-36 rounded-full blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 ${accentBg}`} />

                  <div className="p-6 sm:p-7">

                    {/* ── Card Header row ── */}
                    <div className="flex items-center justify-between mb-5">
                      <span className={`text-[10px] font-bold uppercase tracking-[0.16em] px-3 py-1 rounded-full border ${accentBorder} ${accentLight} ${accentText}`}>
                        {p.type}
                      </span>
                      <span className="text-xs text-[color:var(--text-secondary)] font-medium">{p.period}</span>
                    </div>

                    {/* ── Icon + title block ── */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center border ${accentBorder} ${accentLight} shadow-sm`}>
                        <span className={accentText}>{getProjectIcon(p.icon)}</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-heading leading-tight">{p.title}</h3>
                        <p className={`text-[11px] font-bold uppercase tracking-[0.14em] mt-1 ${accentText}`}>
                          {p.subtitle}
                        </p>
                      </div>
                    </div>

                    {/* ── Description ── */}
                    <p className="text-sm text-[color:var(--text-secondary)] mb-5 leading-relaxed">
                      {p.description}
                    </p>

                    {/* ── Features ── */}
                    <ul className="space-y-2 mb-5">
                      {p.features.map((f, fi) => (
                        <li key={fi} className="flex items-start gap-2.5">
                          <span className={`w-1.5 h-1.5 rounded-full mt-[5px] flex-shrink-0 ${dotBg}`} />
                          <span className="text-xs text-[color:var(--text-secondary)] leading-relaxed">{f}</span>
                        </li>
                      ))}
                    </ul>

                    {/* ── Divider ── */}
                    <div className="h-px bg-gradient-to-r from-transparent via-[color:var(--border-color)] to-transparent mb-5" />

                    {/* ── Tech stack ── */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {p.tech.map((t, ti) => {
                        const icon = getTechIcon(t);
                        return (
                          <span
                            key={ti}
                            className="skill-item text-xs inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg border border-[color:var(--border-color)] bg-[color:var(--bg-secondary)]/60 text-[color:var(--text-secondary)] hover:border-[color:var(--crimson)]/30 transition-colors"
                          >
                            {icon && <span className="flex-shrink-0 opacity-70">{icon}</span>}
                            <span>{t}</span>
                          </span>
                        );
                      })}
                    </div>

                    {/* ── Actions ── */}
                    <div className="flex gap-3 flex-wrap">
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-enhanced btn-secondary text-sm px-4 py-2 rounded-xl inline-flex items-center gap-2"
                      >
                        <GitHubIcon /> View Code
                      </a>
                      {p.live && (
                        <a
                          href={p.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`btn-enhanced text-sm px-4 py-2 rounded-xl inline-flex items-center gap-2 ${btnPrimary}`}
                        >
                          <ExternalIcon /> Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;