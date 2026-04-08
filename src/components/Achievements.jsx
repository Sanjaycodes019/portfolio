import React, { useRef } from 'react';
import {
  FaTrophy,
  FaMedal,
  FaAward,
  FaLaptopCode,
  FaUsers,
  FaRocket,
  FaHandsHelping,
  FaServer,
  FaDumbbell,
  FaGuitar,
  FaPencilAlt,
} from 'react-icons/fa';
import { FiExternalLink, FiArrowUpRight } from 'react-icons/fi';
import { profile } from '../data/profile.js';
import { useReveal } from '../hooks/useReveal.js';
import SectionHeader from './SectionHeader.jsx';

const Achievements = () => {
  const sectionRef = useRef(null);
  useReveal(sectionRef, { threshold: 0.07 });

  const getAchievementIcon = (index) => {
    switch (index) {
      case 0:
        return <FaTrophy className="w-4 h-4 text-crimson-500" />;
      case 1:
        return <FaMedal className="w-4 h-4 text-crimson-500" />;
      case 2:
        return <FaAward className="w-4 h-4 text-crimson-500" />;
      case 3:
      default:
        return <FaLaptopCode className="w-4 h-4 text-crimson-500" />;
    }
  };

  const getExtracurricularIcon = (index) => {
    switch (index) {
      case 0:
        return <FaUsers className="w-4 h-4 text-navy-900" />;
      case 1:
        return <FaRocket className="w-4 h-4 text-navy-900" />;
      case 2:
      default:
        return <FaHandsHelping className="w-4 h-4 text-navy-900" />;
    }
  };

  const getInterestIcon = (label) => {
    switch (label) {
      case 'Backend Infrastructure':
        return <FaServer className="w-3 h-3" />;
      case 'Calisthenics':
        return <FaDumbbell className="w-3 h-3" />;
      case 'Guitar':
        return <FaGuitar className="w-3 h-3" />;
      case 'Sketching':
      default:
        return <FaPencilAlt className="w-3 h-3" />;
    }
  };

  return (
    <section
      id="achievements"
      ref={sectionRef}
      className="py-24 px-4 sm:px-6 lg:px-8 bg-[color:var(--bg-secondary)]/60 relative overflow-hidden"
    >
      {/* Background decorative blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[28rem] h-[28rem] bg-red-50/60 dark:bg-red-500/10 rounded-full blur-3xl -translate-y-1/2" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-50/40 dark:bg-blue-500/10 rounded-full blur-3xl translate-y-1/2" />
        {/* Subtle grid texture */}
        <div
          className="absolute inset-0 opacity-[0.025] dark:opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(var(--border-color) 1px, transparent 1px), linear-gradient(90deg, var(--border-color) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <SectionHeader
          eyebrow="Wins & involvement"
          title="Achievements &"
          highlight="Activities"
          description="Highlights from hackathons, competitions, and community work."
          align="left"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">

          {/* ── Achievements Card ── */}
          <div className="reveal delay-1 rounded-2xl border border-[color:var(--border-color)] bg-[color:var(--bg-card)] shadow-sm overflow-hidden">
            {/* Card header strip */}
            <div className="flex items-center gap-2.5 px-6 py-4 border-b border-[color:var(--border-color)] bg-[color:var(--bg-secondary)]/50">
              <span className="w-1.5 h-4 rounded-full bg-crimson-500 inline-block" />
              <p className="text-xs font-semibold uppercase tracking-widest text-crimson-500">
                Achievements
              </p>
            </div>

            <div className="p-5 sm:p-6 space-y-3">
              {profile.achievements.map((item, i) => (
                <div
                  key={item.title}
                  className="group flex items-center gap-4 rounded-xl border border-[color:var(--border-color)] bg-[color:var(--bg-secondary)]/30 p-4 hover:-translate-y-0.5 hover:shadow-md hover:border-crimson-200 dark:hover:border-crimson-800/60 transition-all duration-200"
                >
                  {/* Icon bubble */}
                  <div className="shrink-0 w-10 h-10 rounded-xl bg-white dark:bg-[color:var(--bg-card)] border border-[color:var(--border-color)] shadow-sm flex items-center justify-center group-hover:border-crimson-200 dark:group-hover:border-crimson-800/50 transition-colors">
                    {getAchievementIcon(i)}
                  </div>

                  {/* Text */}
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold text-[color:var(--text-heading)] leading-snug">
                      {item.url ? (
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 hover:text-crimson-600 transition-colors"
                        >
                          {item.title}
                          <FiArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
                        </a>
                      ) : (
                        item.title
                      )}
                    </p>
                    <p className="text-xs text-muted mt-0.5 truncate">{item.event}</p>
                  </div>

                  {/* Index badge */}
                  <span className="shrink-0 text-[10px] font-bold text-crimson-400/60 tabular-nums select-none">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right column ── */}
          <div className="space-y-6">

            {/* Extracurricular Card */}
            <div className="reveal delay-2 rounded-2xl border border-[color:var(--border-color)] bg-[color:var(--bg-card)] shadow-sm overflow-hidden">
              <div className="flex items-center gap-2.5 px-6 py-4 border-b border-[color:var(--border-color)] bg-[color:var(--bg-secondary)]/50">
                <span className="w-1.5 h-4 rounded-full bg-navy-900 inline-block" />
                <p className="text-xs font-semibold uppercase tracking-widest text-navy-900">
                  Extracurricular
                </p>
              </div>

              <div className="p-5 sm:p-6 space-y-3">
                {profile.extracurricular.map((item, index) => (
                  <div
                    key={item.title}
                    className="group flex items-start gap-4 rounded-xl border border-[color:var(--border-color)] bg-[color:var(--bg-secondary)]/30 p-4 hover:-translate-y-0.5 hover:shadow-md hover:border-blue-200 dark:hover:border-blue-800/40 transition-all duration-200"
                  >
                    <div className="shrink-0 w-10 h-10 rounded-xl bg-blue-50/80 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800/30 flex items-center justify-center group-hover:bg-blue-100/80 dark:group-hover:bg-blue-900/30 transition-colors">
                      {getExtracurricularIcon(index)}
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-[color:var(--text-heading)] leading-snug">
                        {item.title}
                      </p>
                      <p className="text-xs text-muted mt-0.5 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Interests Card */}
            <div className="reveal delay-3 rounded-2xl border border-[color:var(--border-color)] bg-[color:var(--bg-card)] shadow-sm overflow-hidden">
              <div className="flex items-center justify-center gap-2.5 px-6 py-4 border-b border-[color:var(--border-color)] bg-[color:var(--bg-secondary)]/50">
                <span className="w-1.5 h-1.5 rounded-full bg-[color:var(--text-secondary)]/50 inline-block" />
                <p className="text-xs font-semibold uppercase tracking-widest text-[color:var(--text-secondary)]">
                  Personal Interests
                </p>
                <span className="w-1.5 h-1.5 rounded-full bg-[color:var(--text-secondary)]/50 inline-block" />
              </div>

              <div className="p-5 sm:p-6">
                <div className="flex flex-wrap justify-center gap-2.5">
                  {profile.interests.map((item) => (
                    <span
                      key={item.label}
                      className="group inline-flex items-center gap-2 rounded-full border border-[color:var(--border-color)] bg-[color:var(--bg-secondary)] px-3.5 py-2 text-xs font-medium text-[color:var(--text-primary)] hover:bg-[color:var(--crimson-light)] hover:border-[color:var(--crimson)] hover:-translate-y-0.5 hover:shadow-sm transition-all duration-200 cursor-default"
                    >
                      <span className="opacity-60 group-hover:opacity-100 transition-opacity">
                        {getInterestIcon(item.label)}
                      </span>
                      {item.label}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;