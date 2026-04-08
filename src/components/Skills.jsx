import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaCode, 
  FaDatabase, 
  FaServer, 
  FaLaptopCode, 
  FaTools, 
  FaBrain,
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
  FaShieldAlt,
  FaProjectDiagram,
  FaNetworkWired,
  FaDesktop,
  FaMemory,
  FaCogs
} from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTailwindcss, SiVite } from 'react-icons/si';
import { profile } from '../data/profile.js';
import { useReveal } from '../hooks/useReveal.js';

const Skills = () => {
  const sectionRef = useRef(null);
  useReveal(sectionRef, { threshold: 0.1 });

  const getCategoryIcon = (category) => {
    const iconMap = {
      'Programming Languages':        <FaCode className="w-5 h-5" />,
      'Data Structures & Algorithms': <FaBrain className="w-5 h-5" />,
      'Backend & APIs':               <FaServer className="w-5 h-5" />,
      'Databases':                    <FaDatabase className="w-5 h-5" />,
      'Frontend':                     <FaLaptopCode className="w-5 h-5" />,
      'Tools':                        <FaTools className="w-5 h-5" />,
      'CS Fundamentals':              <FaCogs className="w-5 h-5" />
    };
    return iconMap[category] || <FaCode className="w-5 h-5" />;
  };

  const getSkillIcon = (skill) => {
    const iconMap = {
      'C++':                  <FaCode className="w-3.5 h-3.5" />,
      'JavaScript':           <FaJs className="w-3.5 h-3.5" />,
      'Java (Basic)':         <FaJava className="w-3.5 h-3.5" />,
      'Python (Basic)':       <FaPython className="w-3.5 h-3.5" />,
      'Node.js':              <FaNodeJs className="w-3.5 h-3.5" />,
      'Express.js':           <SiExpress className="w-3.5 h-3.5" />,
      'RESTful Web Services': <FaServer className="w-3.5 h-3.5" />,
      'JWT Authentication':   <FaShieldAlt className="w-3.5 h-3.5" />,
      'MongoDB':              <SiMongodb className="w-3.5 h-3.5" />,
      'SQL':                  <FaDatabase className="w-3.5 h-3.5" />,
      'React':                <FaReact className="w-3.5 h-3.5" />,
      'Vite':                 <SiVite className="w-3.5 h-3.5" />,
      'Tailwind CSS':         <SiTailwindcss className="w-3.5 h-3.5" />,
      'HTML':                 <FaHtml5 className="w-3.5 h-3.5" />,
      'CSS':                  <FaCss3Alt className="w-3.5 h-3.5" />,
      'Git':                  <FaGitAlt className="w-3.5 h-3.5" />,
      'GitHub':               <FaGithub className="w-3.5 h-3.5" />,
      'Docker':               <FaDocker className="w-3.5 h-3.5" />,
      'OOPs':                 <FaCogs className="w-3.5 h-3.5" />,
      'DBMS':                 <FaDatabase className="w-3.5 h-3.5" />,
      'Operating Systems':    <FaDesktop className="w-3.5 h-3.5" />,
      'Computer Networks':    <FaNetworkWired className="w-3.5 h-3.5" />,
      'System Design':        <FaProjectDiagram className="w-3.5 h-3.5" />
    };
    return iconMap[skill] || null;
  };

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-slate-950/30 w-full overflow-x-hidden relative"
    >
      {/* Ambient blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-100/40 dark:bg-red-500/5 rounded-full blur-[80px]" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-100/40 dark:bg-blue-500/5 rounded-full blur-[80px]" />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">

        {/* ── Section Header ── */}
        <div className="text-center mb-16 reveal">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-red-600 dark:text-red-400 mb-4">
            <div className="w-6 h-px bg-red-600 dark:bg-red-400 rounded" />
            Capabilities
            <div className="w-6 h-px bg-red-600 dark:bg-red-400 rounded" />
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 dark:text-white mb-4 break-words">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-red-600 to-blue-600 mx-auto rounded-full mb-6" />
          <p className="text-base sm:text-lg text-gray-600 dark:text-slate-300 max-w-2xl mx-auto break-words">
            A focused snapshot of the tools and fundamentals I use to build reliable web applications.
          </p>
        </div>

        {/* ── Skills Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7">
          {profile.skills.map((skillCategory, index) => (
            <div
              key={skillCategory.category}
              className="skills-card reveal w-full group relative rounded-2xl overflow-hidden bg-white dark:bg-slate-900/60 border border-gray-100 dark:border-slate-800 shadow-sm hover:shadow-lg transition-all duration-300"
              style={{
                transitionDelay: `${index * 100}ms`,
              }}
            >
              {/* Left accent bar (preserving original borderLeft intent, now as absolute element) */}
              <div
                className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl"
                style={{ backgroundColor: skillCategory.accent }}
              />

              {/* Hover glow wash */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ background: `radial-gradient(ellipse at top left, ${skillCategory.accent}0a 0%, transparent 70%)` }}
              />

              <div className="relative pl-6 pr-5 pt-5 pb-6">

                {/* Category header */}
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 border"
                    style={{
                      backgroundColor: `${skillCategory.accent}12`,
                      borderColor: `${skillCategory.accent}25`,
                    }}
                  >
                    <div style={{ color: skillCategory.accent }}>
                      {getCategoryIcon(skillCategory.category)}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-gray-900 dark:text-white leading-tight break-words">
                      {skillCategory.category}
                    </h3>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.14em] mt-0.5"
                       style={{ color: skillCategory.accent }}>
                      {skillCategory.items.length} skills
                    </p>
                  </div>
                </div>

                {/* Divider */}
                <div
                  className="h-px mb-4 rounded-full"
                  style={{ background: `linear-gradient(to right, ${skillCategory.accent}30, transparent)` }}
                />

                {/* Skill pills */}
                <div className="flex flex-wrap gap-1.5">
                  {skillCategory.items.map((skill, skillIndex) => {
                    const icon = getSkillIcon(skill);
                    return (
                      <span
                        key={skill}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs rounded-lg font-medium transition-all duration-200 hover:scale-105 break-words cursor-default"
                        style={{
                          backgroundColor: `${skillCategory.accent}10`,
                          color: skillCategory.accent,
                          border: `1px solid ${skillCategory.accent}22`,
                          transitionDelay: `${(index * 100) + (skillIndex * 50)}ms`
                        }}
                      >
                        {icon && (
                          <span className="flex-shrink-0 opacity-80">{icon}</span>
                        )}
                        <span>{skill}</span>
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── Bottom CTA ── */}
        <div className="text-center mt-14 sm:mt-20 reveal">
          <div className="inline-block rounded-3xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 shadow-sm px-8 py-8 max-w-lg w-full">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-red-500/20 to-blue-500/20 border border-red-200 dark:border-red-800/40 flex items-center justify-center mx-auto mb-4">
              <svg className="w-5 h-5 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <p className="text-gray-600 dark:text-slate-300 mb-5 text-sm sm:text-base break-words">
              Interested in working together? Let's discuss how I can contribute to your project.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-6 sm:px-8 py-2.5 sm:py-3 btn-primary rounded-xl shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 text-sm sm:text-base whitespace-nowrap font-semibold"
            >
              Get In Touch
              <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;