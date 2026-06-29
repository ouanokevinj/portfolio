import '../index.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { useTheme } from '../context/ThemeContext';

const SunIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="5" />
    <line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </svg>
);

const MoonIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);

const navLinks = [
  { to: 'home',     label: 'Home'    },
  { to: 'about',    label: 'About'   },
  { to: 'skills',   label: 'Skills'  },
  { to: 'projects', label: 'Work'    },
  { to: 'contact',  label: 'Contact' },
];

function Navbar() {
  const [isOpen,   setIsOpen]   = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme }  = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 50,
        transition: 'background-color 0.3s, border-color 0.3s, height 0.3s',
        backgroundColor: (scrolled || isOpen) ? 'var(--nav-bg)' : 'transparent',
        borderBottom: (scrolled || isOpen) ? '1px solid var(--nav-border)' : '1px solid transparent',
        backdropFilter: (scrolled || isOpen) ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: (scrolled || isOpen) ? 'blur(16px)' : 'none',
      }}
    >
      <div style={{ maxWidth: '72rem', margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: scrolled ? '58px' : '70px', transition: 'height 0.3s' }}>

          {/* Logo */}
          <Link
            to="home"
            smooth duration={500}
            style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.15rem', letterSpacing: '-0.02em', color: 'var(--text-primary)', cursor: 'pointer' }}
          >
            autumndude<span style={{ color: 'var(--accent-primary)' }}>.</span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex" style={{ alignItems: 'center', gap: '0.1rem' }}>
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                spy smooth offset={-80} duration={500}
                style={{ fontWeight: 500, fontSize: '0.875rem', color: 'var(--text-secondary)', padding: '6px 12px', borderRadius: 'var(--radius-full)', cursor: 'pointer', textDecoration: 'none', transition: 'color 0.2s, background 0.2s' }}
                activeStyle={{ color: 'var(--accent-primary)' }}
                onMouseEnter={(e: React.MouseEvent<HTMLElement>) => { e.currentTarget.style.backgroundColor = 'var(--bg-chip)'; }}
                onMouseLeave={(e: React.MouseEvent<HTMLElement>) => { e.currentTarget.style.backgroundColor = 'transparent'; }}
              >
                {link.label}
              </Link>
            ))}

            <button
              onClick={toggleTheme}
              aria-label={theme === 'crimson' ? 'Switch to dark' : 'Switch to light'}
              style={{ marginLeft: '0.5rem', padding: '7px 12px', borderRadius: 'var(--radius-full)', border: '1px solid var(--border)', background: 'var(--bg-card)', color: 'var(--text-secondary)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem', fontWeight: 500, transition: 'border-color 0.2s' }}
            >
              {theme === 'crimson' ? <MoonIcon /> : <SunIcon />}
            </button>
          </div>

          {/* Mobile */}
          <div className="flex md:hidden" style={{ alignItems: 'center', gap: '0.5rem' }}>
            <button onClick={toggleTheme} aria-label="Toggle theme" style={{ padding: '7px', border: '1px solid var(--border)', background: 'var(--bg-card)', color: 'var(--text-secondary)', borderRadius: 'var(--radius-sm)', cursor: 'pointer', display: 'flex' }}>
              {theme === 'crimson' ? <MoonIcon /> : <SunIcon />}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu" style={{ padding: '7px', border: '1px solid var(--border)', background: 'var(--bg-card)', color: 'var(--text-secondary)', borderRadius: 'var(--radius-sm)', cursor: 'pointer', display: 'flex', transition: 'transform 0.25s', transform: isOpen ? 'rotate(90deg)' : 'none' }}>
              <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div style={{ borderTop: '1px solid var(--border)', paddingBottom: '0.75rem' }}>
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                smooth spy duration={300} offset={-80}
                onClick={() => setIsOpen(false)}
                style={{ display: 'block', padding: '10px 4px', fontSize: '0.95rem', fontWeight: 500, color: 'var(--text-secondary)', cursor: 'pointer', transition: 'color 0.2s' }}
                activeStyle={{ color: 'var(--accent-primary)' }}
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
