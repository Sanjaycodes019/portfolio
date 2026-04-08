import React, { useState } from 'react';
import { useReveal } from '../hooks/useReveal.js';
import SectionHeader from './SectionHeader.jsx';
import { profile } from '../data/profile.js';

const Certifications = () => {
  const sectionRef = React.useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedTitle, setSelectedTitle] = useState('');
  useReveal(sectionRef, { threshold: 0.1 });

  const openImageModal = (imageSrc, title = '') => {
    setSelectedImage(imageSrc);
    setSelectedTitle(title);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
    setSelectedTitle('');
  };

  return (
    <>
      <section
        id="certifications"
        ref={sectionRef}
        className="py-24 px-4 sm:px-6 lg:px-8 bg-[color:var(--bg-primary)] relative overflow-hidden"
      >
        {/* Subtle background texture */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 right-0 w-[26rem] h-[26rem] bg-red-50/50 dark:bg-red-500/10 rounded-full blur-3xl translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-50/40 dark:bg-blue-500/10 rounded-full blur-3xl -translate-x-1/3" />
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
            eyebrow="Credentials"
            title="Certifications"
            highlight="& Licenses"
            description="Professional certificates and validated achievements."
            align="left"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 mt-12">
            {profile.certifications?.map((cert, index) => (
              <div
                key={index}
                className="reveal group flex flex-col rounded-2xl border border-[color:var(--border-color)] bg-[color:var(--bg-card)] shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                style={{ animationDelay: `${index * 60}ms` }}
              >
                {/* Top accent bar */}
                <div className="h-1 w-full bg-gradient-to-r from-crimson-500 via-red-400 to-crimson-600 opacity-80 group-hover:opacity-100 transition-opacity" />

                {/* Thumbnail area */}
                <div className="relative mx-5 mt-5 rounded-xl overflow-hidden bg-gradient-to-br from-red-50/80 to-orange-50/60 dark:from-red-900/20 dark:to-orange-900/10 h-28 flex items-center justify-center border border-[color:var(--border-color)]">
                  <div className="text-center">
                    <div className="w-12 h-12 mx-auto mb-1.5 bg-white dark:bg-[color:var(--bg-card)] border border-[color:var(--border-color)] rounded-xl flex items-center justify-center shadow-sm">
                      <svg className="w-6 h-6 text-crimson-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20M10,19L12,15H9V10H15V15L13,19H10Z" />
                      </svg>
                    </div>
                    <p className="text-[10px] font-semibold uppercase tracking-widest text-muted">
                      PDF Certificate
                    </p>
                  </div>

                  {/* Index badge */}
                  <span className="absolute top-2.5 right-2.5 text-[10px] font-bold text-crimson-400/50 tabular-nums select-none">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Body */}
                <div className="flex flex-col flex-1 p-5">
                  <h3 className="text-sm font-semibold text-[color:var(--text-heading)] leading-snug mb-1">
                    {cert.title}
                  </h3>
                  <p className="text-xs font-medium text-[color:var(--text-secondary)] mb-0.5">
                    {cert.issuer}
                  </p>
                  <p className="text-[11px] text-muted mb-3">{cert.date}</p>

                  {cert.skills && (
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {cert.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="inline-flex items-center px-2.5 py-1 rounded-full border border-[color:var(--border-color)] bg-[color:var(--bg-secondary)] text-[10px] font-medium text-[color:var(--text-primary)] hover:bg-[color:var(--crimson-light)] hover:border-[color:var(--crimson)] transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Actions */}
                  <div className="mt-auto flex gap-2.5">
                    <button
                      onClick={() => openImageModal(cert.image, cert.title)}
                      className="flex-1 bg-crimson-600 hover:bg-crimson-700 text-white px-3.5 py-2 rounded-xl text-xs font-semibold transition-all duration-200 flex items-center justify-center gap-1.5 shadow-sm hover:shadow-md"
                    >
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      View
                    </button>
                    {cert.credentialUrl && (
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold border border-[color:var(--border-color)] bg-[color:var(--bg-secondary)] text-[color:var(--text-primary)] hover:border-navy-300 dark:hover:border-navy-600 hover:bg-blue-50/60 dark:hover:bg-blue-900/10 transition-all duration-200"
                      >
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        Credential
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {(!profile.certifications || profile.certifications.length === 0) && (
            <div className="text-center py-20">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl border border-[color:var(--border-color)] bg-[color:var(--bg-card)] mb-5 shadow-sm">
                <svg className="w-8 h-8 text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-base font-semibold text-[color:var(--text-heading)] mb-1.5">
                No Certifications Yet
              </h3>
              <p className="text-sm text-muted max-w-md mx-auto leading-relaxed">
                Certifications and professional certificates will appear here once added to your profile.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ── PDF Modal ── */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-slate-950/90 backdrop-blur-md z-50 flex items-center justify-center"
          onClick={closeImageModal}
        >
          {/* Ambient blobs */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 left-0 w-96 h-96 bg-crimson-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
          </div>

          {/* PDF viewer */}
          <div
            className="relative w-full h-full max-w-6xl max-h-[92vh] mx-6 my-10 rounded-2xl overflow-hidden shadow-2xl border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={selectedImage}
              className="w-full h-full bg-white"
              title="Certificate PDF"
              frameBorder="0"
            />
          </div>

          {/* Top bar */}
          <div className="fixed top-5 inset-x-0 flex items-center justify-between px-6 z-10 pointer-events-none">
            {/* Close */}
            <button
              onClick={closeImageModal}
              className="pointer-events-auto w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white transition-all duration-200 hover:scale-105"
              aria-label="Close modal"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Title pill */}
            <div className="pointer-events-none px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10">
              <p className="text-xs font-semibold text-white/80 tracking-wide truncate max-w-xs">
                {selectedTitle || 'Certificate Viewer'}
              </p>
            </div>

            {/* Download */}
            <a
              href={selectedImage}
              download="certificate.pdf"
              className="pointer-events-auto flex items-center gap-2 bg-crimson-600 hover:bg-crimson-700 text-white px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              onClick={(e) => e.stopPropagation()}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download PDF
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Certifications;