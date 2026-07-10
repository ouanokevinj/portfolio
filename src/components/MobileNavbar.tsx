import '../index.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { useTheme } from '../context/ThemeContext';

const navLinks = [
  { to: 'about', label: 'About' },
  { to: 'skills', label: 'Stack' },
  { to: 'projects', label: 'Work' },
  { to: 'contact', label: 'Contact' },
];

const SunIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
  </svg>
);

const MoonIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);

function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <header className="mobile-topbar">
        <span className="mobile-topbar-name">Kevin Jeff Ouano</span>
        <button
          type="button"
          className="mobile-topbar-toggle"
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation-drawer"
          onClick={() => setIsOpen(open => !open)}
        >
          <span /><span /><span />
        </button>
      </header>

      <div className={`mobile-navigation-shell${isOpen ? ' is-open' : ''}`}>
        <button type="button" className="mobile-navigation-backdrop" aria-label="Close navigation menu" onClick={closeMenu} />
        <aside id="mobile-navigation-drawer" className="mobile-navigation-drawer" aria-label="Mobile navigation">
          <div>
            <p className="eyebrow">Navigation</p>
            <nav>
              {navLinks.map(({ to, label }, index) => (
                <Link key={to} to={to} smooth duration={500} offset={-40} onClick={closeMenu} className="mobile-drawer-link">
                  <span>0{index + 1}</span>{label}
                </Link>
              ))}
            </nav>
          </div>
          <button
            type="button"
            className="mobile-drawer-theme"
            onClick={toggleTheme}
            aria-label={theme === 'crimson' ? 'Switch to dark mode' : 'Switch to light mode'}
            title={theme === 'crimson' ? 'Switch to dark mode' : 'Switch to light mode'}
          >
            {theme === 'crimson' ? <MoonIcon /> : <SunIcon />}
          </button>
        </aside>
      </div>
    </>
  );
}

export default MobileNavbar;
