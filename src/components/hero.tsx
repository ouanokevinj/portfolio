import '../index.css';
import { Link } from 'react-scroll';

/*
 * Left-aligned hero. No gradient text, no orbs, no centered-everything template.
 * The name is the statement. One CTA leads. Resume is secondary.
 */
function Hero() {
  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: '8rem 1.5rem 5rem',
        backgroundColor: 'var(--bg-base)',
      }}
    >
      <div style={{ maxWidth: '72rem', margin: '0 auto', width: '100%' }}>

        {/* Eyebrow */}
        <p
          className="eyebrow animate-in"
          style={{ marginBottom: '1.5rem', animationDelay: '0ms' }}
        >
          Full-Stack Developer · Cebu, PH
        </p>

        {/* Name */}
        <h1
          className="font-display animate-in"
          style={{
            fontSize: 'clamp(3.5rem, 10vw, 8rem)',
            fontWeight: 700,
            lineHeight: 0.95,
            letterSpacing: '-0.04em',
            color: 'var(--text-primary)',
            marginBottom: '1.75rem',
            animationDelay: '60ms',
          }}
        >
          Kevin Jeff
          <br />
          Ouano<span style={{ color: 'var(--accent-primary)' }}>.</span>
        </h1>

        {/* Descriptor — specific, not generic */}
        <p
          className="animate-in"
          style={{
            fontSize: 'clamp(1rem, 2vw, 1.2rem)',
            lineHeight: 1.7,
            color: 'var(--text-secondary)',
            maxWidth: '36rem',
            marginBottom: '2.5rem',
            animationDelay: '120ms',
          }}
        >
          Building web systems and IoT solutions—from clean REST
          APIs and database-backed apps to embedded hardware with
          real-time cloud sync.
        </p>

        {/* CTAs */}
        <div
          className="animate-in"
          style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', animationDelay: '180ms' }}
        >
          <Link to="projects" smooth duration={500} offset={-80} className="btn-primary" style={{ cursor: 'pointer' }}>
            View Work →
          </Link>
          <a href="/resume.pdf" target="_blank" rel="noreferrer" className="btn-ghost">
            Résumé ↗
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
