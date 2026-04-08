import React, { useRef, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  FaLinkedin,
  FaGithub,
  FaServer,
  FaShieldAlt,
  FaDatabase,
  FaReact,
  FaLightbulb,
  FaGraduationCap,
  FaUsers,
  FaRocket,
  FaArrowRight,
  FaDownload,
} from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { profile } from '../data/profile.js';
import { useReveal } from '../hooks/useReveal.js';
import SectionHeader from './SectionHeader.jsx';

/* ─────────────────────────────────────────────
   Inline styles / keyframes injected once
───────────────────────────────────────────── */
const globalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap');

  :root {
    --font-display: 'Syne', sans-serif;
    --font-body:    'DM Sans', sans-serif;
  }

  @keyframes float {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    33%       { transform: translateY(-18px) rotate(1deg); }
    66%       { transform: translateY(-8px) rotate(-1deg); }
  }
  @keyframes orbit {
    from { transform: rotate(0deg) translateX(140px) rotate(0deg); }
    to   { transform: rotate(360deg) translateX(140px) rotate(-360deg); }
  }
  @keyframes shimmer {
    0%   { background-position: -200% center; }
    100% { background-position:  200% center; }
  }
  @keyframes ticker-glow {
    0%, 100% { opacity: 0.5; }
    50%       { opacity: 1; }
  }
  @keyframes slide-up {
    from { opacity: 0; transform: translateY(28px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes card-in {
    from { opacity: 0; transform: translateY(20px) scale(0.97); }
    to   { opacity: 1; transform: translateY(0) scale(1); }
  }
  @keyframes spin-slow {
    from { transform: rotate(0deg); }
    to   { transform: rotate(360deg); }
  }

  .font-display { font-family: var(--font-display); }
  .font-body    { font-family: var(--font-body); }

  .hero-float  { animation: float 7s ease-in-out infinite; }

  .slide-up-1  { animation: slide-up 0.7s cubic-bezier(.22,.68,0,1.2) 0.1s both; }
  .slide-up-2  { animation: slide-up 0.7s cubic-bezier(.22,.68,0,1.2) 0.25s both; }
  .slide-up-3  { animation: slide-up 0.7s cubic-bezier(.22,.68,0,1.2) 0.4s both; }
  .slide-up-4  { animation: slide-up 0.7s cubic-bezier(.22,.68,0,1.2) 0.55s both; }

  .card-in-1   { animation: card-in 0.6s cubic-bezier(.22,.68,0,1.2) 0.15s both; }
  .card-in-2   { animation: card-in 0.6s cubic-bezier(.22,.68,0,1.2) 0.28s both; }
  .card-in-3   { animation: card-in 0.6s cubic-bezier(.22,.68,0,1.2) 0.41s both; }
  .card-in-4   { animation: card-in 0.6s cubic-bezier(.22,.68,0,1.2) 0.54s both; }

  .text-shimmer {
    background: linear-gradient(
      90deg,
      #dc2626 0%, #2563eb 40%, #dc2626 60%, #2563eb 100%
    );
    background-size: 200% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: shimmer 4s linear infinite;
  }

  .ring-spin {
    animation: spin-slow 12s linear infinite;
  }

  .orbit-dot {
    width: 10px; height: 10px;
    border-radius: 50%;
    background: linear-gradient(135deg, #dc2626, #2563eb);
    position: absolute;
    top: -5px; left: 50%; margin-left: -5px;
    animation: orbit 8s linear infinite;
    transform-origin: 50% 145px;
    box-shadow: 0 0 12px rgba(220,38,38,0.6);
  }

  .noise-overlay::after {
    content: '';
    position: absolute;
    inset: 0;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
    pointer-events: none;
    border-radius: inherit;
  }

  .stat-card:hover .stat-num {
    animation: shimmer 2s linear infinite;
    background: linear-gradient(90deg, #dc2626, #2563eb, #dc2626);
    background-size: 200% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .social-btn:hover svg {
    transform: scale(1.2);
    transition: transform 0.2s;
  }

  .attr-card:hover .attr-icon {
    transform: rotate(-8deg) scale(1.15);
    transition: transform 0.25s;
  }
`;

const Profile = () => {
  const heroRef  = useRef(null);
  const aboutRef = useRef(null);
  useReveal(heroRef,  { threshold: 0.1 });
  useReveal(aboutRef, { threshold: 0.1 });

  const attributes = [
    { label: 'Problem Solver',  icon: <FaLightbulb   className="w-5 h-5" />, desc: 'Breaks complex challenges into elegant solutions' },
    { label: 'Quick Learner',   icon: <FaGraduationCap className="w-5 h-5" />, desc: 'Adapts fast to new stacks and domains' },
    { label: 'Team Player',     icon: <FaUsers        className="w-5 h-5" />, desc: 'Thrives in cross-functional collaboration' },
    { label: 'Bias for Action', icon: <FaRocket       className="w-5 h-5" />, desc: 'Ships fast, iterates faster' },
  ];

  const getSkillIcon = (skill) => {
    const iconMap = {
      'Node.js':    <FaServer   className="w-3 h-3" />,
      'Express.js': <FaServer   className="w-3 h-3" />,
      'MongoDB':    <FaDatabase className="w-3 h-3" />,
      'React.js':   <FaReact    className="w-3 h-3" />,
    };
    return iconMap[skill] || null;
  };

  const stats = useMemo(() => {
    const wins = profile.achievements.filter((a) => /winner/i.test(a.title)).length;
    return [
      { number: '250+', label: 'DSA Problems',    sub: 'LeetCode · GFG' },
      { number: String(profile.projects.length).padStart(2, '0'), label: 'Live Projects', sub: 'Full-stack builds' },
      { number: profile.education.cgpa, label: 'CGPA',           sub: profile.education.university },
      { number: `${wins}+`,  label: 'Wins',           sub: 'Hackathons & comps' },
    ];
  }, []);

  return (
    <>
      {/* ── inject fonts + keyframes ── */}
      <style>{globalStyles}</style>

      {/* ════════════════════════════════════════
          HERO
      ════════════════════════════════════════ */}
      <section
        id="hero"
        ref={heroRef}
        className="font-body min-h-screen flex items-center justify-center relative overflow-hidden w-full max-w-full pt-20 sm:pt-24"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 60% 0%, rgba(220,38,38,0.07) 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 10% 80%, rgba(37,99,235,0.08) 0%, transparent 60%), var(--bg-primary, #f8fafc)',
        }}
      >
        {/* decorative grid */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(rgba(100,116,139,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(100,116,139,0.06) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />

        {/* large blobs */}
        <div className="absolute -top-40 -right-32 w-[480px] h-[480px] bg-red-300 dark:bg-red-600 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[100px] opacity-20" />
        <div className="absolute -bottom-40 -left-32 w-[400px] h-[400px] bg-blue-300 dark:bg-blue-600 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[100px] opacity-20" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            {/* ── LEFT: copy ── */}
            <div className="space-y-7 text-center lg:text-left">

              {/* eyebrow badge */}
              <div className="slide-up-1 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-semibold tracking-widest uppercase mx-auto lg:mx-0"
                style={{
                  borderColor: 'rgba(220,38,38,0.3)',
                  background:  'rgba(220,38,38,0.06)',
                  color: '#dc2626',
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                Available for opportunities
              </div>

              {/* headline */}
              <div className="slide-up-2">
                <p className="font-display text-sm sm:text-base font-600 text-gray-400 dark:text-slate-400 mb-1 tracking-wide uppercase">
                  Hi there, I'm
                </p>
                <h1
                  className="font-display text-5xl sm:text-6xl lg:text-7xl font-800 leading-[1.0] tracking-tight text-gray-900 dark:text-white"
                >
                  {profile.name.split(' ')[0]}
                  <br />
                  <span className="text-shimmer">{profile.name.split(' ').slice(1).join(' ')}</span>
                </h1>

                {/* rule */}
                <div className="mt-5 flex items-center gap-3 justify-center lg:justify-start">
                  <div className="h-px flex-1 max-w-[48px] bg-gradient-to-r from-red-600 to-blue-600" />
                  <span className="text-xs text-gray-400 dark:text-slate-400 tracking-widest uppercase font-500">Full‑Stack Developer</span>
                  <div className="h-px flex-1 max-w-[48px] bg-gradient-to-l from-red-600 to-blue-600" />
                </div>
              </div>

              {/* sub-copy */}
              <div className="slide-up-3 space-y-3 max-w-lg mx-auto lg:mx-0">
                <p className="text-base sm:text-lg text-gray-700 dark:text-slate-300 leading-relaxed">
                  I architect robust backend systems and craft scalable full-stack products — from clean APIs to intuitive UIs.
                </p>
                <p className="text-sm text-gray-500 dark:text-slate-400 leading-relaxed">
                  Obsessed with writing maintainable code, designing secure auth flows, and shipping things that actually matter.
                </p>
                <p className="text-xs text-gray-400 dark:text-slate-500 flex items-center gap-1.5 justify-center lg:justify-start">
                  <span className="w-3 h-3 text-red-500">📍</span>
                  {profile.location}
                </p>
              </div>

              {/* CTAs */}
              <div className="slide-up-4 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start flex-wrap">
                <Link
                  to="/portfolio"
                  className="group inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl text-sm font-600 text-white transition-all duration-300 hover:gap-3 hover:shadow-lg"
                  style={{ background: 'linear-gradient(135deg, #dc2626 0%, #2563eb 100%)' }}
                >
                  View My Work
                  <FaArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl text-sm font-600 border-2 transition-all duration-300 hover:shadow-md"
                  style={{
                    borderColor: 'rgba(220,38,38,0.4)',
                    color: 'var(--text-heading, #111)',
                    background: 'transparent',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'rgba(220,38,38,0.06)'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; }}
                >
                  Get In Touch
                </Link>
                <a
                  href="/sanjay_resume.pdf"
                  download="Sanjay_Gupta_Resume.pdf"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs font-500 border transition-all duration-200 hover:shadow-sm"
                  style={{
                    borderColor: 'rgba(100,116,139,0.3)',
                    color: 'var(--text-secondary, #64748b)',
                    background: 'var(--bg-card, white)',
                  }}
                >
                  <FaDownload className="w-3 h-3" />
                  Resume
                </a>
              </div>

              {/* socials */}
              <div className="slide-up-4 flex gap-3 justify-center lg:justify-start">
                {[
                  { href: profile.socials.linkedin.url, icon: <FaLinkedin className="w-4 h-4" />, label: 'LinkedIn', color: '#0077b5' },
                  { href: profile.socials.github.url,   icon: <FaGithub   className="w-4 h-4" />, label: 'GitHub',   color: '#333' },
                  { href: profile.socials.leetcode.url, icon: <SiLeetcode className="w-4 h-4" />, label: 'LeetCode', color: '#FFA116' },
                ].map(({ href, icon, label, color }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="social-btn group w-11 h-11 rounded-xl flex items-center justify-center border transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
                    style={{
                      borderColor: 'rgba(100,116,139,0.2)',
                      background:  'var(--bg-card, white)',
                      color: 'var(--text-secondary, #64748b)',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.color = color; e.currentTarget.style.borderColor = color + '44'; }}
                    onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-secondary, #64748b)'; e.currentTarget.style.borderColor = 'rgba(100,116,139,0.2)'; }}
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>

            {/* ── RIGHT: avatar ── */}
            <div className="flex justify-center lg:justify-end slide-up-2">
              <div className="relative" style={{ width: 340, height: 340 }}>

                {/* spinning ring */}
                <div
                  className="ring-spin absolute inset-0 rounded-full pointer-events-none"
                  style={{
                    border: '1.5px dashed rgba(220,38,38,0.25)',
                    top: -24, left: -24, right: -24, bottom: -24,
                    width: 'calc(100% + 48px)',
                    height: 'calc(100% + 48px)',
                  }}
                />

                {/* orbiting dot */}
                <div
                  className="absolute"
                  style={{
                    top: '50%', left: '50%',
                    width: 10, height: 10,
                    marginTop: -5, marginLeft: -5,
                  }}
                >
                  <div className="orbit-dot" style={{ transformOrigin: '50% 170px' }} />
                </div>

                {/* glow base */}
                <div
                  className="absolute inset-0 rounded-full blur-2xl opacity-30"
                  style={{ background: 'linear-gradient(135deg, rgba(220,38,38,0.4), rgba(37,99,235,0.4))' }}
                />

                {/* photo ring */}
                <div
                  className="hero-float relative w-full h-full rounded-full overflow-hidden border-4 shadow-2xl noise-overlay"
                  style={{
                    borderImage: 'linear-gradient(135deg, #dc2626, #2563eb) 1',
                    borderStyle: 'solid',
                    boxShadow: '0 20px 60px rgba(220,38,38,0.2), 0 8px 30px rgba(37,99,235,0.15)',
                  }}
                >
                  <img
                    src="/profile.jpeg"
                    alt={profile.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='340' height='340' viewBox='0 0 340 340'%3E%3Crect width='340' height='340' fill='%23f1f5f9'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' font-family='Syne,sans-serif' font-size='56' font-weight='800' fill='%23dc2626'%3ESG%3C/text%3E%3C/svg%3E";
                    }}
                  />
                </div>

                {/* floating badge – top left */}
                <div
                  className="absolute -top-2 -left-4 px-3 py-1.5 rounded-lg text-xs font-600 shadow-lg flex items-center gap-1.5 backdrop-blur-sm"
                  style={{
                    background: 'var(--bg-card, white)',
                    border: '1px solid rgba(220,38,38,0.2)',
                    color: '#dc2626',
                    fontFamily: 'var(--font-display)',
                  }}
                >
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  Open to work
                </div>

                {/* floating badge – bottom right */}
                <div
                  className="absolute -bottom-2 -right-4 px-3 py-1.5 rounded-lg text-xs font-600 shadow-lg flex items-center gap-1.5 backdrop-blur-sm"
                  style={{
                    background: 'var(--bg-card, white)',
                    border: '1px solid rgba(37,99,235,0.2)',
                    color: '#2563eb',
                    fontFamily: 'var(--font-display)',
                  }}
                >
                  <FaReact className="w-3 h-3 animate-spin" style={{ animationDuration: '4s' }} />
                  MERN Stack
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          ABOUT
      ════════════════════════════════════════ */}
      <section
        id="about"
        ref={aboutRef}
        className="font-body py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
        style={{ background: 'var(--bg-secondary, #f1f5f9)' }}
      >
        {/* background accents */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[120px] opacity-10 pointer-events-none"
          style={{ background: 'radial-gradient(circle, #dc2626, transparent)' }}
        />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-[120px] opacity-10 pointer-events-none"
          style={{ background: 'radial-gradient(circle, #2563eb, transparent)' }}
        />

        <div className="container mx-auto max-w-7xl relative z-10">

          {/* Section header */}
          <SectionHeader
            eyebrow="My journey"
            title="About"
            highlight="My Story"
            description="From academic foundations to practical engineering — the path that shaped how I build."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

            {/* ── LEFT column ── */}
            <div className="space-y-5">

              {/* summary card */}
              <div
                className="card-in-1 relative rounded-2xl p-6 border overflow-hidden"
                style={{
                  background: 'var(--bg-card, white)',
                  borderColor: 'rgba(100,116,139,0.12)',
                  boxShadow: '0 2px 20px rgba(0,0,0,0.04)',
                }}
              >
                {/* accent strip */}
                <div
                  className="absolute top-0 left-0 right-0 h-0.5"
                  style={{ background: 'linear-gradient(90deg, #dc2626, #2563eb)' }}
                />
                <p
                  className="leading-relaxed text-sm sm:text-base"
                  style={{ color: 'var(--text-primary, #334155)' }}
                >
                  {profile.summary}
                </p>

                {/* skill chips */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {['Node.js', 'Express.js', 'React.js', 'MongoDB'].map((t) => {
                    const icon = getSkillIcon(t);
                    return (
                      <span
                        key={t}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-600 border transition-colors duration-200"
                        style={{
                          background: 'rgba(220,38,38,0.05)',
                          borderColor: 'rgba(220,38,38,0.2)',
                          color: '#dc2626',
                          fontFamily: 'var(--font-display)',
                        }}
                      >
                        {icon && <span className="opacity-70">{icon}</span>}
                        {t}
                      </span>
                    );
                  })}
                </div>
              </div>

              {/* attribute grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {attributes.map((attr, i) => (
                  <div
                    key={i}
                    className={`attr-card card-in-${i + 1} group relative rounded-2xl border p-4 flex items-start gap-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-md overflow-hidden`}
                    style={{
                      background: 'var(--bg-card, white)',
                      borderColor: 'rgba(100,116,139,0.12)',
                    }}
                  >
                    {/* hover gradient */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                      style={{ background: 'linear-gradient(135deg, rgba(220,38,38,0.03), rgba(37,99,235,0.03))' }}
                    />
                    <div
                      className="attr-icon w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-200"
                      style={{
                        background: 'linear-gradient(135deg, rgba(220,38,38,0.1), rgba(37,99,235,0.08))',
                        color: '#dc2626',
                      }}
                    >
                      {attr.icon}
                    </div>
                    <div className="relative">
                      <p
                        className="font-700 text-sm font-display"
                        style={{ color: 'var(--text-heading, #0f172a)', fontFamily: 'var(--font-display)' }}
                      >
                        {attr.label}
                      </p>
                      <p
                        className="text-xs mt-0.5 leading-relaxed"
                        style={{ color: 'var(--text-secondary, #64748b)' }}
                      >
                        {attr.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── RIGHT column ── */}
            <div className="space-y-5">

              {/* stats grid */}
              <div className="grid grid-cols-2 gap-3">
                {stats.map((stat, i) => (
                  <div
                    key={i}
                    className={`stat-card card-in-${i + 1} group relative rounded-2xl border p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-md overflow-hidden`}
                    style={{
                      background: 'var(--bg-card, white)',
                      borderColor: 'rgba(100,116,139,0.12)',
                    }}
                  >
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                      style={{ background: 'linear-gradient(135deg, rgba(220,38,38,0.04), rgba(37,99,235,0.04))' }}
                    />
                    <div
                      className="stat-num font-display text-3xl sm:text-4xl font-800 leading-none mb-2 bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent"
                      style={{ fontFamily: 'var(--font-display)', WebkitTextFillColor: 'transparent', backgroundImage: 'linear-gradient(135deg, #dc2626, #2563eb)' }}
                    >
                      {stat.number}
                    </div>
                    <div
                      className="text-xs sm:text-sm font-600 relative"
                      style={{ color: 'var(--text-heading, #0f172a)', fontFamily: 'var(--font-display)' }}
                    >
                      {stat.label}
                    </div>
                    <div
                      className="text-xs mt-1 relative"
                      style={{ color: 'var(--text-secondary, #94a3b8)' }}
                    >
                      {stat.sub}
                    </div>
                  </div>
                ))}
              </div>

              {/* quote card */}
              <div
                className="card-in-3 relative rounded-2xl border p-6 overflow-hidden"
                style={{
                  background: 'var(--bg-card, white)',
                  borderColor: 'rgba(100,116,139,0.12)',
                  boxShadow: '0 2px 20px rgba(0,0,0,0.04)',
                }}
              >
                {/* quote mark decoration */}
                <div
                  className="absolute -top-3 -left-1 font-display text-8xl font-800 leading-none select-none pointer-events-none"
                  style={{
                    fontFamily: 'Georgia, serif',
                    color: 'rgba(220,38,38,0.08)',
                    lineHeight: 1,
                  }}
                >
                  "
                </div>
                <div
                  className="absolute bottom-0 right-0 w-24 h-24 rounded-full blur-2xl opacity-20 pointer-events-none"
                  style={{ background: 'radial-gradient(circle, #2563eb, transparent)', transform: 'translate(30%, 30%)' }}
                />
                <blockquote
                  className="relative text-sm sm:text-base italic leading-relaxed"
                  style={{ color: 'var(--text-primary, #334155)' }}
                >
                  "Clean code always looks like it was written by someone who cares."
                </blockquote>
                <div
                  className="mt-4 flex items-center gap-2"
                >
                  <div className="h-px w-8" style={{ background: 'linear-gradient(90deg, #dc2626, #2563eb)' }} />
                  <p
                    className="text-xs font-600"
                    style={{ color: 'var(--text-secondary, #64748b)', fontFamily: 'var(--font-display)' }}
                  >
                    Robert C. Martin
                  </p>
                </div>
              </div>

              {/* mini CTA strip */}
              <div
                className="card-in-4 relative rounded-2xl p-5 flex items-center justify-between gap-4 overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, rgba(220,38,38,0.06) 0%, rgba(37,99,235,0.06) 100%)',
                  border: '1px solid rgba(220,38,38,0.15)',
                }}
              >
                <div>
                  <p
                    className="font-700 text-sm"
                    style={{ color: 'var(--text-heading, #0f172a)', fontFamily: 'var(--font-display)' }}
                  >
                    Let's build something great
                  </p>
                  <p className="text-xs mt-0.5" style={{ color: 'var(--text-secondary, #64748b)' }}>
                    Open to full-time roles & freelance
                  </p>
                </div>
                <Link
                  to="/contact"
                  className="flex-shrink-0 inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-600 text-white transition-all duration-200 hover:gap-2.5 hover:shadow-md"
                  style={{ background: 'linear-gradient(135deg, #dc2626, #2563eb)' }}
                >
                  Say hi <FaArrowRight className="w-2.5 h-2.5" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;