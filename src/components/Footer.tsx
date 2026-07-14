import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Facebook, Instagram } from 'lucide-react';
import PipelineDivider from './PipelineDivider';

const quickLinks = [
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

const offices = [
  {
    name: 'Seabrook Terminal',
    address: 'Bayport Industrial Complex, 11666 Port Road, Seabrook TX 77586',
  },
  {
    name: 'Houston Office',
    address: '2625 Bay Area Blvd Suite 200, Houston TX 77058',
  },
  {
    name: 'Rotterdam Office',
    address: 'Oude Maasweg 2, 3197 KJ Rotterdam, Netherlands',
  },
];

const social = [
  { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com' },
  { icon: Facebook, label: 'Facebook', href: 'https://facebook.com' },
  { icon: Instagram, label: 'Instagram', href: 'https://instagram.com' },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy text-white">
      <PipelineDivider />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1 — Logo + tagline */}
          <div>
            <div
              style={{
                background: 'linear-gradient(145deg, #162F52 0%, #0B1F3A 100%)',
                border: '2px solid #D4A017',
                borderRadius: '12px',
                padding: '24px 20px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                maxWidth: '220px',
                boxShadow: '0 4px 24px rgba(212, 160, 23, 0.15)',
              }}
            >
              <img
                src="/Logo.jpg.png"
                alt="Seabrook Logistics LLC"
                style={{
                  height: '90px',
                  width: 'auto',
                  mixBlendMode: 'normal',
                  background: 'transparent',
                  display: 'block',
                  margin: '0 auto',
                }}
              />
              {/* Gold divider */}
              <div style={{ width: '40px', height: '1px', background: '#D4A017', margin: '12px auto' }} />
              <p
                style={{
                  color: '#FFFFFF',
                  fontWeight: 600,
                  fontSize: '13px',
                  lineHeight: 1.6,
                  marginTop: '14px',
                  textAlign: 'center',
                }}
                className="font-body"
              >
                Your deepwater partner for crude oil, condensate, and refined fuel storage and distribution on the Gulf Coast.
              </p>
            </div>
          </div>

          {/* Col 2 — Quick Links */}
          <div>
            <h4 className="text-gold font-heading text-lg mb-4 tracking-wider">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-steel text-sm font-body hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Offices */}
          <div>
            <h4 className="text-gold font-heading text-lg mb-4 tracking-wider">Our Offices</h4>
            <div className="space-y-5">
              {offices.map((office) => (
                <div key={office.name}>
                  <p className="text-white font-semibold text-sm font-body mb-1">{office.name}</p>
                  <p className="text-steel text-sm font-body leading-relaxed">{office.address}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Col 4 — Social */}
          <div>
            <h4 className="text-gold font-heading text-lg mb-4 tracking-wider">Follow Us</h4>
            <div className="flex flex-col gap-4">
              {social.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-steel hover:text-gold transition-colors group"
                  aria-label={label}
                >
                  <Icon size={20} className="text-gold group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-body">{label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-gold/30">
          <p className="text-steel text-xs font-body text-center">
            &copy; 2026 Seabrook Logistics, LLC&nbsp;&nbsp;|&nbsp;&nbsp;All rights reserved&nbsp;&nbsp;|&nbsp;&nbsp;
            <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
