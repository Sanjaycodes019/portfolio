import React from 'react';
import { FaLinkedin, FaGithub, FaCode, FaHeart } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { profile } from '../data/profile.js';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[color:var(--bg-primary)] border-t border-[color:var(--border-color)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-12">
          
          {/* Brand Section - Centered */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="/profile.png" 
                alt="Sanjay Gupta"
                className="w-12 h-12 rounded-full object-cover"
              />
              <h3 className="text-xl font-bold text-[color:var(--text-heading)]">{profile.name}</h3>
            </div>
            <p className="text-sm text-[color:var(--text-secondary)] leading-relaxed mb-6 max-w-md">
              Full-stack developer passionate about building scalable web applications and solving complex problems.
            </p>
            
            {/* Social Media Icons */}
            <div className="flex gap-3">
              <a
                href={profile.socials.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[color:var(--bg-card)] border border-[color:var(--border-color)] hover:bg-blue-600 transition-colors duration-300 flex items-center justify-center group"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-5 h-5 text-[color:var(--text-secondary)] group-hover:text-white transition-colors" />
              </a>
              <a
                href={profile.socials.github.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[color:var(--bg-card)] border border-[color:var(--border-color)] hover:bg-gray-800 transition-colors duration-300 flex items-center justify-center group"
                aria-label="GitHub"
              >
                <FaGithub className="w-5 h-5 text-[color:var(--text-secondary)] group-hover:text-white transition-colors" />
              </a>
              <a
                href={profile.socials.leetcode.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[color:var(--bg-card)] border border-[color:var(--border-color)] hover:bg-amber-500 transition-colors duration-300 flex items-center justify-center group"
                aria-label="LeetCode"
              >
                <SiLeetcode className="w-5 h-5 text-[color:var(--text-secondary)] group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-lg font-semibold text-[color:var(--text-heading)] mb-4">Quick Links</h4>
            <ul className="space-y-2 text-center md:text-left">
              <li>
                <a href="/" className="text-sm text-[color:var(--text-secondary)] hover:text-[color:var(--crimson)] transition-colors duration-200">
                  Home
                </a>
              </li>
              <li>
                <a href="/portfolio" className="text-sm text-[color:var(--text-secondary)] hover:text-[color:var(--crimson)] transition-colors duration-200">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="/education" className="text-sm text-[color:var(--text-secondary)] hover:text-[color:var(--crimson)] transition-colors duration-200">
                  Education
                </a>
              </li>
              <li>
                <a href="/accomplishments" className="text-sm text-[color:var(--text-secondary)] hover:text-[color:var(--crimson)] transition-colors duration-200">
                  Accomplishments
                </a>
              </li>
              <li>
                <a href="/contact" className="text-sm text-[color:var(--text-secondary)] hover:text-[color:var(--crimson)] transition-colors duration-200">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[color:var(--border-color)] pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <p className="text-sm text-[color:var(--text-secondary)]">
                © {currentYear} {profile.name}. All rights reserved.
              </p>
            </div>
            <div className="flex items-center gap-6 text-sm">
              <a href="/portfolio" className="text-[color:var(--text-secondary)] hover:text-[color:var(--crimson)] transition-colors duration-200">
                Portfolio
              </a>
              <a href="/contact" className="text-[color:var(--text-secondary)] hover:text-[color:var(--crimson)] transition-colors duration-200">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
