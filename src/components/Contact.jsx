import React, { useRef, useState, useEffect } from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaCheckCircle, FaExclamationTriangle, FaClock, FaTwitter, FaDiscord } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { profile } from '../data/profile.js';
import { useReveal } from '../hooks/useReveal.js';
import SectionHeader from './SectionHeader.jsx';
import emailjs from 'emailjs-com';

const Contact = () => {
  const sectionRef = useRef(null);
  const [copied, setCopied] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeCard, setActiveCard] = useState(null);
  const [typingText, setTypingText] = useState('');
  const fullText = "Let's build something amazing together";
  useReveal(sectionRef, { threshold: 0.08 });

  // Typing animation effect
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypingText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);
    return () => clearInterval(timer);
  }, []);

  // Mouse tracking for 3D card effect
  const handleMouseMove = (e, cardIndex) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / 20;
    const y = (e.clientY - rect.top - rect.height / 2) / 20;
    setMousePosition({ x, y });
    setActiveCard(cardIndex);
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
    setActiveCard(null);
  };

  const handleCopy = (value, type) => {
    navigator.clipboard.writeText(value).then(() => {
      setCopied(type);
      setTimeout(() => setCopied(null), 2000);
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);
    setSubmitError(false);

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: profile.email
      };
      const response = await emailjs.send(
        'service_uvs7vm7',
        'YOUR_TEMPLATE_ID',
        templateParams,
        'YOUR_PUBLIC_KEY'
      );
      if (response.status === 200) {
        setIsSubmitted(true);
        setTimeout(() => {
          setFormData({ name: '', email: '', subject: '', message: '' });
          setIsSubmitted(false);
        }, 3000);
      } else {
        throw new Error('EmailJS submission failed');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      try {
        const formspreeEndpoint = 'https://formspree.io/f/xlgplazp';
        const response = await fetch(formspreeEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            message: formData.message,
            _subject: `New contact form submission: ${formData.subject}`
          }),
        });
        if (response.ok) {
          setIsSubmitted(true);
          setTimeout(() => {
            setFormData({ name: '', email: '', subject: '', message: '' });
            setIsSubmitted(false);
          }, 3000);
          return;
        }
      } catch (formspreeError) {
        console.error('Formspree fallback failed:', formspreeError);
      }
      try {
        const netlifyResponse = await fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams({ 'form-name': 'contact', ...formData }).toString()
        });
        if (netlifyResponse.ok) {
          setIsSubmitted(true);
          setTimeout(() => {
            setFormData({ name: '', email: '', subject: '', message: '' });
            setIsSubmitted(false);
          }, 3000);
          return;
        }
      } catch (netlifyError) {
        console.error('Netlify fallback failed:', netlifyError);
      }
      setSubmitError(true);
      setTimeout(() => setSubmitError(false), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactCards = [
    {
      icon: FaEnvelope,
      label: 'Email',
      sublabel: 'Direct contact',
      value: profile.email,
      href: `mailto:${profile.email}`,
      colorClass: 'text-rose-600 dark:text-rose-400',
      bgClass: 'bg-gradient-to-br from-rose-50 to-pink-50 dark:from-rose-900/20 dark:to-pink-900/10',
      borderClass: 'border-rose-200/60 dark:border-rose-800/40',
      glowClass: 'group-hover:shadow-rose-500/20',
      iconBgClass: 'bg-gradient-to-br from-rose-100 to-pink-100 dark:from-rose-800/30 dark:to-pink-800/20',
      delay: 'delay-1',
    },
    {
      icon: FaPhone,
      label: 'Phone',
      sublabel: 'Call or text',
      value: profile.phone,
      href: `tel:${profile.phoneTel}`,
      colorClass: 'text-blue-600 dark:text-blue-400',
      bgClass: 'bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/10',
      borderClass: 'border-blue-200/60 dark:border-blue-800/40',
      glowClass: 'group-hover:shadow-blue-500/20',
      iconBgClass: 'bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-800/30 dark:to-cyan-800/20',
      delay: 'delay-2',
    },
    {
      icon: FaMapMarkerAlt,
      label: 'Location',
      sublabel: 'Based in',
      value: profile.location,
      href: null,
      colorClass: 'text-emerald-600 dark:text-emerald-400',
      bgClass: 'bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/10',
      borderClass: 'border-emerald-200/60 dark:border-emerald-800/40',
      glowClass: 'group-hover:shadow-emerald-500/20',
      iconBgClass: 'bg-gradient-to-br from-emerald-100 to-teal-100 dark:from-emerald-800/30 dark:to-teal-800/20',
      delay: 'delay-3',
    },
  ];

  const socialLinks = [
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      href: profile.socials.linkedin.url,
      colorClass: 'text-[#0A66C2]',
      bgClass: 'bg-gradient-to-br from-blue-500/10 to-blue-600/5',
      bgHover: 'hover:bg-blue-50 dark:hover:bg-blue-900/20',
      borderColor: 'border-blue-200/80 dark:border-blue-700/50',
      shadowClass: 'hover:shadow-blue-500/20',
      description: 'Professional network',
    },
    {
      icon: FaGithub,
      label: 'GitHub',
      href: profile.socials.github.url,
      colorClass: 'text-gray-800 dark:text-gray-200',
      bgClass: 'bg-gradient-to-br from-gray-500/10 to-gray-600/5',
      bgHover: 'hover:bg-gray-50 dark:hover:bg-gray-900/20',
      borderColor: 'border-gray-200/80 dark:border-gray-700/50',
      shadowClass: 'hover:shadow-gray-500/20',
      description: 'Code repositories',
    },
    {
      icon: SiLeetcode,
      label: 'LeetCode',
      href: profile.socials.leetcode.url,
      colorClass: 'text-amber-500',
      bgClass: 'bg-gradient-to-br from-amber-500/10 to-yellow-500/5',
      bgHover: 'hover:bg-amber-50 dark:hover:bg-amber-900/20',
      borderColor: 'border-amber-200/80 dark:border-amber-700/50',
      shadowClass: 'hover:shadow-amber-500/20',
      description: 'Problem solving',
    },
  ];

  const inputBaseClass =
    'w-full px-4 py-3 rounded-xl border bg-[color:var(--bg-primary)] text-[color:var(--text-primary)] placeholder-[color:var(--text-secondary)] focus:outline-none focus:ring-2 focus:ring-[color:var(--crimson)] focus:border-transparent transition-all duration-200 text-sm';

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-16 px-3 sm:px-4 lg:px-6 bg-[color:var(--bg-primary)]"
    >
      <div className="container mx-auto max-w-5xl relative">

        {/* Ambient blobs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/40 dark:bg-blue-500/5 rounded-full blur-3xl translate-x-1/3 -translate-y-1/4 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-red-100/40 dark:bg-red-500/5 rounded-full blur-3xl -translate-x-1/3 translate-y-1/4 pointer-events-none" />

        <SectionHeader
          eyebrow="Get in touch"
          title="Contact"
          highlight="Me"
          description="I'm always interested in hearing about new opportunities and collaborations. Feel free to reach out if you'd like to work together."
        />

        {/* ── Info Row ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 sm:gap-3 relative z-10 mb-4">
          {contactCards.map(({ icon: Icon, label, sublabel, value, href, colorClass, bgClass, borderClass, glowClass, iconBgClass, delay }) => (
            <div
              key={label}
              className={`reveal ${delay} group relative flex items-center gap-2 sm:gap-3 p-3 sm:p-4 rounded-xl border ${borderClass} ${bgClass} hover:shadow-md hover:scale-[1.01] transition-all duration-300 cursor-pointer overflow-hidden`}
              onMouseMove={(e) => handleMouseMove(e, label)}
              onMouseLeave={handleMouseLeave}
            >
              {/* Subtle gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className={`w-8 h-8 sm:w-9 sm:h-9 rounded-lg ${iconBgClass} ${borderClass} flex items-center justify-center flex-shrink-0 shadow-sm group-hover:shadow-md transition-all duration-300 group-hover:scale-105`}>
                <Icon className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${colorClass} group-hover:scale-110 transition-transform duration-300`} />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-widest text-[color:var(--text-secondary)] mb-0.5">{sublabel}</p>
                {href ? (
                  <a
                    href={href}
                    className={`text-xs sm:text-sm font-semibold ${colorClass} hover:underline underline-offset-2 truncate block group-hover:text-opacity-80 transition-all duration-300`}
                  >
                    <span className="hidden sm:inline">{value}</span>
                    <span className="sm:hidden truncate block">{value.length > 15 ? value.substring(0, 15) + '...' : value}</span>
                  </a>
                ) : (
                  <p className="text-xs sm:text-sm font-semibold text-[color:var(--text-heading)] truncate">{value}</p>
                )}
              </div>
              
              {/* Hover indicator arrow */}
              {href && (
                <svg className="w-3 h-3 text-[color:var(--text-secondary)] opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              )}
            </div>
          ))}
        </div>

        {/* ── Main two-column layout ── */}
        <div className="reveal delay-4 grid grid-cols-1 lg:grid-cols-5 gap-4 sm:gap-5 relative z-10">

          {/* Left sidebar: socials + cta */}
          <div className="lg:col-span-2 flex flex-col gap-4 sm:gap-5">

            {/* Connect Online */}
            <div className="rounded-xl border border-[color:var(--border-color)] bg-[color:var(--bg-card)] shadow-sm overflow-hidden hover:shadow-md transition-all duration-300">
              <div className="px-3 sm:px-4 pt-3 sm:pt-4 pb-2 sm:pb-2">
                <p className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.15em] text-[color:var(--crimson)] mb-1">Connect Online</p>
                <h3 className="text-sm sm:text-base font-bold text-[color:var(--text-heading)]">Find me on</h3>
              </div>
              <div className="px-3 sm:px-4 pb-3 sm:pb-4 flex flex-col gap-1.5 sm:gap-2 mt-1">
                {socialLinks.map(({ icon: Icon, label, href, colorClass, bgHover, borderColor }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 sm:gap-2.5 px-2.5 sm:px-3 py-2 sm:py-2.5 rounded-lg border ${borderColor} bg-transparent ${bgHover} transition-all duration-200 group hover:scale-[1.01]`}
                  >
                    <Icon className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${colorClass} group-hover:scale-110 transition-transform`} />
                    <span className="text-xs sm:text-sm font-semibold text-[color:var(--text-heading)] truncate">{label}</span>
                    <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 ml-auto text-[color:var(--text-secondary)] opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                ))}
                
                {/* Direct email CTA */}
                <div className="border-t border-[color:var(--border-color)] pt-2 mt-2">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <p className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-widest text-[color:var(--text-secondary)] mb-0.5">Quick Action</p>
                      <p className="text-xs sm:text-sm font-semibold text-[color:var(--text-heading)]">Prefer direct email?</p>
                    </div>
                    <a
                      href={`mailto:${profile.email}`}
                      className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 bg-gradient-to-r from-[color:var(--crimson)] to-[color:var(--navy)] hover:opacity-90 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 text-xs sm:text-sm hover:scale-[1.01]"
                    >
                      <FaEnvelope className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                      Open Email
                    </a>
                  </div>
                </div>

                {/* Availability badge */}
                <div className="flex items-center gap-2 sm:gap-3 px-2.5 sm:px-3 py-2 sm:py-2.5 rounded-lg border border-emerald-200 dark:border-emerald-900/40 bg-emerald-50/60 dark:bg-emerald-900/10 hover:shadow-md transition-all duration-300">
                  <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5 flex-shrink-0">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 sm:h-2.5 sm:w-2.5 bg-emerald-500" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs sm:text-sm font-semibold text-emerald-700 dark:text-emerald-400 truncate">Available for opportunities</p>
                    <p className="text-[9px] sm:text-xs text-emerald-600/70 dark:text-emerald-500/70 mt-0.5">Replies within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-3 rounded-xl border border-[color:var(--border-color)] bg-[color:var(--bg-card)] shadow-sm overflow-hidden">
            <div className="px-4 sm:px-5 py-3 sm:py-4 border-b border-[color:var(--border-color)] bg-gradient-to-r from-[color:var(--crimson-light)]/30 to-[color:var(--navy-light)]/20">
              <p className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.15em] text-[color:var(--crimson)] mb-0.5">Send a message</p>
              <h3 className="text-sm sm:text-base font-bold text-[color:var(--text-heading)]">Let's start a conversation</h3>
            </div>

            <div className="p-4 sm:p-5">
              {isSubmitted ? (
                <div className="text-center py-8 sm:py-12 flex flex-col items-center gap-3">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-emerald-50 dark:bg-emerald-900/20 flex items-center justify-center">
                    <FaCheckCircle className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-500" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-[color:var(--text-heading)] mb-1">Message Sent!</h3>
                    <p className="text-xs sm:text-sm text-[color:var(--text-secondary)]">Thanks for reaching out — I'll get back to you soon.</p>
                  </div>
                </div>
              ) : submitError ? (
                <div className="text-center py-8 sm:py-12 flex flex-col items-center gap-3">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-red-50 dark:bg-red-900/20 flex items-center justify-center">
                    <FaExclamationTriangle className="w-6 h-6 sm:w-8 sm:h-8 text-red-500" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-[color:var(--text-heading)] mb-1">Submission Failed</h3>
                    <p className="text-xs sm:text-sm text-[color:var(--text-secondary)] mb-3 sm:mb-4">Something went wrong. Please try emailing directly.</p>
                    <a
                      href={`mailto:${profile.email}`}
                      className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2 sm:py-2.5 bg-gradient-to-r from-[color:var(--crimson)] to-[color:var(--navy)] text-white font-semibold rounded-lg text-xs sm:text-sm shadow-md hover:opacity-90 transition-all"
                    >
                      <FaEnvelope className="w-3 h-3 sm:w-4 sm:h-4" />
                      Email Directly
                    </a>
                  </div>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-5"
                  data-netlify="true"
                  name="contact"
                  method="POST"
                >
                  {/* Name + Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div className="flex flex-col gap-1">
                      <label htmlFor="name" className="text-xs font-semibold text-[color:var(--text-heading)] tracking-wide">
                        Full Name <span className="text-[color:var(--crimson)]">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                        placeholder="Your name"
                        className={`${inputBaseClass} ${errors.name ? 'border-red-400 focus:ring-red-400' : 'border-[color:var(--border-color)]'}`}
                      />
                      {errors.name && <p className="text-xs text-red-500 flex items-center gap-1"><FaExclamationTriangle className="w-3 h-3" />{errors.name}</p>}
                    </div>

                    <div className="flex flex-col gap-1">
                      <label htmlFor="email" className="text-xs font-semibold text-[color:var(--text-heading)] tracking-wide">
                        Email Address <span className="text-[color:var(--crimson)]">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                        placeholder="your.email@example.com"
                        className={`${inputBaseClass} ${errors.email ? 'border-red-400 focus:ring-red-400' : 'border-[color:var(--border-color)]'}`}
                      />
                      {errors.email && <p className="text-xs text-red-500 flex items-center gap-1"><FaExclamationTriangle className="w-3 h-3" />{errors.email}</p>}
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="flex flex-col gap-1">
                    <label htmlFor="subject" className="text-xs font-semibold text-[color:var(--text-heading)] tracking-wide">
                      Subject <span className="text-[color:var(--crimson)]">*</span>
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('subject')}
                      onBlur={() => setFocusedField(null)}
                      placeholder="What's this about?"
                      className={`${inputBaseClass} ${errors.subject ? 'border-red-400 focus:ring-red-400' : 'border-[color:var(--border-color)]'}`}
                    />
                    {errors.subject && <p className="text-xs text-red-500 flex items-center gap-1"><FaExclamationTriangle className="w-3 h-3" />{errors.subject}</p>}
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center justify-between">
                      <label htmlFor="message" className="text-xs font-semibold text-[color:var(--text-heading)] tracking-wide">
                        Message <span className="text-[color:var(--crimson)]">*</span>
                      </label>
                      <span className={`text-xs ${formData.message.length > 0 ? 'text-[color:var(--crimson)]' : 'text-[color:var(--text-secondary)]'}`}>
                        {formData.message.length} chars
                      </span>
                    </div>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      rows={4}
                      placeholder="Tell me more about your project or inquiry..."
                      className={`${inputBaseClass} resize-none leading-relaxed ${errors.message ? 'border-red-400 focus:ring-red-400' : 'border-[color:var(--border-color)]'}`}
                    />
                    {errors.message && <p className="text-xs text-red-500 flex items-center gap-1"><FaExclamationTriangle className="w-3 h-3" />{errors.message}</p>}
                  </div>

                  {/* Submit */}
                  <div className="flex items-center justify-between pt-1">
                    <p className="text-xs text-[color:var(--text-secondary)]">
                      <span className="text-[color:var(--crimson)]">*</span> Required fields
                    </p>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center gap-1.5 sm:gap-2 px-4 sm:px-6 py-2 sm:py-2.5 bg-gradient-to-r from-[color:var(--crimson)] to-[color:var(--navy)] hover:opacity-90 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none text-xs sm:text-sm hover:scale-[1.01]"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-3 h-3 sm:w-4 sm:h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <FaPaperPlane className="w-3 h-3 sm:w-4 sm:h-4" />
                          Send Message
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;