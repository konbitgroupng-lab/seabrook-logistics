import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Locations', path: '/locations' },
  { label: 'Sustainability', path: '/sustainability' },
  { label: 'Safety', path: '/safety' },
  { label: 'Careers', path: '/careers' },
  { label: 'News', path: '/news' },
  { label: 'Contact', path: '/contact' },
];

const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Fixed navbar — always dark navy, always on top */}
      <nav
        className="fixed top-0 left-0 w-full z-50"
        style={{
          background: 'rgba(11,31,58,0.85)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          padding: '12px 32px',
        }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="/Logo.jpg.png"
              alt="Seabrook Logistics LLC"
              style={{
                height: '72px',
                width: 'auto',
                objectFit: 'contain',
                filter: 'drop-shadow(0px 0px 6px rgba(255,255,255,0.3))',
                border: '2px solid #D4A017',
                borderRadius: '50%',
                padding: '3px',
                mixBlendMode: 'screen',
                background: 'transparent',
              }}
            />
          </Link>

          {/* Desktop nav links */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium font-body transition-colors ${
                  isActive(link.path)
                    ? 'text-gold'
                    : 'text-white/90 hover:text-gold'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-md text-white"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile full-screen overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[60] bg-navy flex flex-col items-center justify-center gap-8">
          <button
            onClick={() => setMobileOpen(false)}
            className="absolute top-6 right-6 text-white p-2"
            aria-label="Close menu"
          >
            <X size={28} />
          </button>
          <img
            src="/Logo.jpg.png"
            alt="Seabrook Logistics LLC"
            style={{
              height: '72px',
              width: 'auto',
              objectFit: 'contain',
              mixBlendMode: 'screen',
              border: '2px solid #D4A017',
              borderRadius: '50%',
              padding: '3px',
            }}
            className="mb-4"
          />
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMobileOpen(false)}
              className={`text-2xl font-heading tracking-wider transition-colors ${
                isActive(link.path) ? 'text-gold' : 'text-white hover:text-gold'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default Navbar;
