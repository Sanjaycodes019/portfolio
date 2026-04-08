import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navLinks = [
    { href: "/", label: "Profile" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/education", label: "Education" },
    { href: "/accomplishments", label: "Accomplishments" },
    { href: "/contact", label: "Contact" }
  ];

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-gray-900 focus:shadow-lg focus:outline-none"
      >
        Skip to content
      </a>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[color:var(--bg-nav)]/95 backdrop-blur-md shadow-lg border-b border-gray-200/60' 
          : 'bg-[color:var(--bg-nav)]/80 backdrop-blur-sm border-b border-gray-100/70'
      }`}>
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="logo-text text-xl sm:text-2xl lg:text-3xl">
              Portfolio
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`nav-link text-base ${location.pathname === link.href ? 'text-crimson-600 font-semibold' : ''}`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="flex items-center">
              {/* Mobile Menu Button */}
              <button 
                className="lg:hidden text-gray-700 p-2 hover:text-crimson-600 transition-colors"
                onClick={toggleMenu}
                aria-label="Toggle menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <div className={`mobile-backdrop ${isMenuOpen ? 'active' : ''}`} onClick={closeMenu} />
      <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
        <div className="p-6">
          <div className="flex justify-between items-center mb-8">
            <Link to="/" className="logo-text text-xl">Portfolio</Link>
            <button 
              className="text-gray-600 p-2 hover:text-crimson-600 transition-colors"
              onClick={closeMenu}
              aria-label="Close menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`mobile-menu-link text-gray-700 ${location.pathname === link.href ? 'text-crimson-600 font-semibold' : ''}`}
                onClick={closeMenu}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
