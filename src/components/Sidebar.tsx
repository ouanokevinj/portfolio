import '../index.css';
import { useState } from 'react';
import { Link } from 'react-scroll';
import { useTheme } from '../context/ThemeContext';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import profileImage from '../assets/img/kevin.png';

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
  { to: 'about',    label: 'About'   },
  { to: 'skills',   label: 'Stack'   },
  { to: 'projects', label: 'Work'    },
  { to: 'contact',  label: 'Contact' },
];

function Sidebar() {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <aside className={`sidebar${isMenuOpen ? ' mobile-menu-open' : ''}`}>
      <div>
        {/* Avatar — double-ring: bg-base gap + border. The availability
            dot uses the same gap trick to float cleanly on any background. */}
        <div className="sidebar-avatar-frame" style={{ position: 'relative', width: 120, marginBottom: '1.75rem' }}>
          <img
            className="sidebar-avatar"
            src={profileImage}
            alt="Kevin Jeff Ouano"
            style={{
              width: 120,
              height: 120,
              borderRadius: '50%',
              objectFit: 'cover',
              objectPosition: 'center top',
              display: 'block',
              /* grayscale → editorial; removes ID-card feel. Color
                 revealed on hover as a micro-delight. */
              filter: 'none',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              boxShadow: '0 0 0 2px var(--bg-base), 0 0 0 3px var(--accent-primary)',
            }}
          />
          <span
            aria-label="Available for work"
            style={{
              position: 'absolute',
              bottom: 4,
              right: 4,
              width: 15,
              height: 15,
              borderRadius: '50%',
              backgroundColor: '#22c55e',
              border: '2px solid var(--bg-base)',
            }}
          />
        </div>

        {/* Name */}
        <h1
          className="font-display animate-in"
          style={{
            fontSize: '1.65rem',
            fontWeight: 700,
            color: 'var(--text-primary)',
            lineHeight: 1.05,
            letterSpacing: '-0.025em',
            marginBottom: '0.3rem',
          }}
        >
          Kevin Jeff Ouano
        </h1>

        {/* Role — mono gives it a "technical label" feel, not just colored text */}
        <p
          className="animate-in"
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.78rem',
            fontWeight: 500,
            color: 'var(--accent-primary)',
            letterSpacing: '0.02em',
            marginBottom: '0.6rem',
            animationDelay: '40ms',
          }}
        >
          Full-Stack Developer
        </p>

        {/* Meta — one line, mono, location + status. Removes duplication
            between sidebar and the About fact table. */}
        <p
          className="animate-in"
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.7rem',
            color: 'var(--text-muted)',
            letterSpacing: '0.02em',
            animationDelay: '80ms',
          }}
        >
          Cebu, PH · Open to work
        </p>

        <button
          type="button"
          className="mobile-menu-toggle"
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen(open => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        {/* Nav */}
        <nav
          className="animate-in"
          aria-label="Sections"
          style={{ marginTop: '3rem', display: 'flex', flexDirection: 'column', gap: '0.1rem', animationDelay: '120ms' }}
        >
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              spy smooth offset={-40} duration={500}
              className="nav-link"
              activeClass="nav-active"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="nav-line" />
              {label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Bottom row: socials + theme toggle */}
      <div
        className="animate-in"
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', animationDelay: '200ms' }}
      >
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <a
            href="https://github.com/ouanokevinj"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            style={{ color: 'var(--text-muted)', transition: 'color 0.2s', display: 'flex' }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--text-primary)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
          >
            <FaGithub size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/kevin-jeff-ouano-2b0894276/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            style={{ color: 'var(--text-muted)', transition: 'color 0.2s', display: 'flex' }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--text-primary)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
          >
            <FaLinkedinIn size={18} />
          </a>
        </div>

        <button
          onClick={toggleTheme}
          aria-label={theme === 'crimson' ? 'Switch to dark mode' : 'Switch to light mode'}
          style={{
            padding: '7px 12px',
            borderRadius: 'var(--radius-full)',
            border: '1px solid var(--border)',
            background: 'var(--bg-card)',
            color: 'var(--text-secondary)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem',
            fontSize: '0.78rem',
            transition: 'border-color 0.2s, color 0.2s',
          }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--border-strong)'; e.currentTarget.style.color = 'var(--text-primary)'; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-secondary)'; }}
        >
          {theme === 'crimson' ? <MoonIcon /> : <SunIcon />}
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;
