import '../index.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { useTheme } from '../context/ThemeContext';

const SunIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="5" />
    <line x1="12" y1="1" x2="12" y2="3" />
    <line x1="12" y1="21" x2="12" y2="23" />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="1" y1="12" x2="3" y2="12" />
    <line x1="21" y1="12" x2="23" y2="12" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </svg>
);

const MoonIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);

const navLinks = [
  { to: 'home',     label: 'Home'     },
  { to: 'about',    label: 'About'    },
  { to: 'skills',   label: 'Skills'   },
  { to: 'projects', label: 'Projects' },
  { to: 'contact',  label: 'Contact'  },
];

function Navbar() {
  const [isOpen,   setIsOpen]   = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setIsOpen(false); }, []);

  const navStyle: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 50,
    transition: 'background-color 0.3s ease, box-shadow 0.3s ease, height 0.3s ease',
    backgroundColor: (scrolled || isOpen) ? 'var(--nav-bg)' : 'transparent',
    borderBottom: (scrolled || isOpen) ? '1px solid var(--nav-border)' : '1px solid transparent',
    backdropFilter: (scrolled || isOpen) ? 'blur(8px)' : 'none',
  };

  const linkStyle: React.CSSProperties = {
    color: 'var(--text-secondary)',
    fontWeight: 500,
    fontSize: '0.875rem',
    padding: '6px 12px',
    borderRadius: '6px',
    transition: 'color 0.2s ease',
    cursor: 'pointer',
    letterSpacing: '0.02em',
    textDecoration: 'none',
  };

  return (
    <nav style={navStyle}>
      <div style={{ maxWidth: '72rem', margin: '0 auto', padding: '0 1rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: scrolled ? '60px' : '72px', transition: 'height 0.3s ease' }}>

          {/* Logo */}
          <Link
            to="home"
            smooth
            duration={500}
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 800,
              fontSize: '1.35rem',
              color: 'var(--accent-primary)',
              cursor: 'pointer',
              letterSpacing: '0.02em',
            }}
          >
            autumndude
          </Link>

          {/* Desktop links */}
          <div style={{ alignItems: 'center', gap: '0.25rem' }} className="hidden md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                spy
                smooth
                offset={-80}
                duration={500}
                style={linkStyle}
                activeStyle={{ color: 'var(--accent-primary)' }}
              >
                {link.label}
              </Link>
            ))}

            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              title={theme === 'autumn' ? 'Switch to night mode' : 'Switch to autumn mode'}
              style={{
                marginLeft: '0.75rem',
                padding: '7px',
                borderRadius: '8px',
                border: '1px solid var(--border)',
                backgroundColor: 'var(--bg-card)',
                color: 'var(--text-secondary)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                transition: 'border-color 0.2s, background-color 0.2s',
              }}
            >
              {theme === 'autumn' ? <MoonIcon /> : <SunIcon />}
            </button>
          </div>

          {/* Mobile: toggle + hamburger */}
          <div style={{ alignItems: 'center', gap: '0.5rem' }} className="flex md:hidden">
            <button
              onClick={toggleTheme}
              style={{
                 padding: '6px',
                 borderRadius: '8px',
                 border: '1px solid var(--border)',
                 backgroundColor: 'var(--bg-card)',
                 color: 'var(--text-secondary)',
                 cursor: 'pointer',
                 display: 'flex',
                 alignItems: 'center',
              }}
            >
              {theme === 'autumn' ? <MoonIcon /> : <SunIcon />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              style={{
                padding: '6px',
                borderRadius: '8px',
                border: '1px solid var(--border)',
                backgroundColor: 'var(--bg-card)',
                color: 'var(--text-secondary)',
                cursor: 'pointer',
                transition: 'transform 0.3s',
                transform: isOpen ? 'rotate(90deg)' : 'none',
              }}
            >
              <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div style={{
            borderTop: '1px solid var(--border)',
            paddingBottom: '1rem',
            backgroundColor: 'var(--nav-bg)',
            backdropFilter: 'blur(8px)',
          }}>
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                smooth
                spy
                duration={300}
                offset={-80}
                onClick={() => setIsOpen(false)}
                style={{
                  display: 'block',
                  padding: '10px 16px',
                  color: 'var(--text-secondary)',
                  fontWeight: 500,
                  cursor: 'pointer',
                  transition: 'color 0.2s',
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;