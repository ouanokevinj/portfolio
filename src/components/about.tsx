import '../index.css';
import SectionHeader from './SectionHeader';
import { Link } from 'react-scroll';
import { useEffect, useState } from 'react';

/* Text-only badges — no icons. Mixed icon sets have inconsistent
   weights and proportions that make a badge row look messy.
   Monospace text chips are what Vercel, Linear, and Stripe use. */
const featuredTech = [
  'Java', 'Spring Boot', 'Vue.js', 'React', 'TypeScript',
  'JavaScript', 'Python', 'Flask', 'PHP', 'Laravel', 'C++',
  'MySQL', 'PostgreSQL', 'Firebase', 'Docker', 'Git',
  'Tailwind CSS', 'Arduino',
];

const stats = [
  { num: '6',   label: 'Projects' },
  { num: '18+', label: 'Technologies' },
  { num: '2+',  label: 'Years coding' },
];

function AboutMe() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const resumeUrl = '/resume.pdf';

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => { if (e.key === 'Escape') setIsResumeOpen(false); };
    if (isResumeOpen) window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isResumeOpen]);

  return (
    <>
      <section
        id="about"
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '5rem 3rem',
          backgroundColor: 'var(--bg-base)',
        }}
      >
        <SectionHeader label="About" title="Who I am" />

        {/* Two-column layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '4rem',
          alignItems: 'start',
        }}>

          {/* ── Left: bio + CTAs ─────────────────────────────────────── */}
          <div>
            {/* Lead statement: what I build, not who I am */}
            <p
              className="font-display"
              style={{
                fontSize: 'clamp(1.15rem, 2.2vw, 1.45rem)',
                fontWeight: 600,
                lineHeight: 1.55,
                color: 'var(--text-primary)',
                marginBottom: '1.25rem',
                letterSpacing: '-0.015em',
              }}
            >
              I engineer{' '}
              <span style={{ color: 'var(--accent-primary)' }}>full-stack systems</span>
              {' '}— REST APIs, web platforms, and IoT deployments
              that run in real environments.
            </p>

            {/* Supporting context — kept to two sentences */}
            <p style={{
              fontSize: '0.95rem',
              lineHeight: 1.85,
              color: 'var(--text-secondary)',
              marginBottom: '0.9rem',
            }}>
              My work spans RFID library systems deployed in schools,
              CRM platforms with task automation, and role-based finance
              apps backed by Spring Boot and MySQL.
            </p>

            {/* Student context — one mention, not the lead */}
            <p style={{
              fontSize: '0.95rem',
              lineHeight: 1.85,
              color: 'var(--text-secondary)',
              marginBottom: '2rem',
            }}>
              Second-year IT student at the University of Cebu.
              Focused on writing code that is readable, maintainable, and ships.
            </p>

            {/* CTAs — View Projects is primary; that's the whole point of this page */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.65rem' }}>
              <Link
                to="projects"
                smooth duration={500} offset={-40}
                className="btn-primary"
                style={{ cursor: 'pointer' }}
              >
                View Projects
              </Link>
              <a
                href={resumeUrl}
                download="Kevin-Jeff-Ouano-Resume.pdf"
                className="btn-ghost"
              >
                Download CV
              </a>
              <Link
                to="contact"
                smooth duration={500} offset={-40}
                className="btn-ghost"
                style={{ cursor: 'pointer' }}
              >
                Contact Me
              </Link>
            </div>
          </div>

          {/* ── Right: premium info panel ────────────────────────────── */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>

            {/* Current Focus — blockquote treatment signals intellectual curiosity */}
            <div>
              <p className="eyebrow" style={{ marginBottom: '0.75rem' }}>Current Focus</p>
              <blockquote className="focus-quote" style={{ margin: 0 }}>
                Learning system design patterns and distributed
                architectures — understanding how software holds together at scale.
              </blockquote>
            </div>

            {/* Stats row — three numbers parsed faster than three paragraphs */}
            <div>
              <p className="eyebrow" style={{ marginBottom: '1rem' }}>At a glance</p>
              <div style={{ display: 'flex', gap: '2.5rem' }}>
                {stats.map(({ num, label }) => (
                  <div key={label}>
                    <span className="stat-num">{num}</span>
                    <span className="stat-label">{label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick facts — role, location, status */}
            <div>
              <p className="eyebrow" style={{ marginBottom: '0.75rem' }}>Details</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {[
                  { k: 'Role',     v: 'Junior Full-Stack Developer' },
                  { k: 'Education', v: 'BS Information Technology' },
                  { k: 'Location', v: 'Cebu, Philippines' },
                ].map(({ k, v }) => (
                  <div key={k} style={{ display: 'flex', gap: '0.75rem', alignItems: 'baseline' }}>
                    <span style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.68rem',
                      color: 'var(--text-muted)',
                      flexShrink: 0,
                      width: '5.5rem',
                    }}>
                      {k}
                    </span>
                    <span style={{ fontSize: '0.875rem', color: 'var(--text-primary)', fontWeight: 500 }}>{v}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── Tech Stack ─────────────────────────────────────────────── */}
        {/* Monospace badges immediately read as "developer" to any technical reader */}
        <div style={{
          marginTop: '4rem',
          paddingTop: '2.5rem',
          borderTop: '1px solid var(--border)',
        }}>
          <p className="eyebrow" style={{ marginBottom: '1.25rem' }}>Stack</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {featuredTech.map((name) => (
              <span key={name} className="tech-badge">{name}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Resume modal */}
      {isResumeOpen && (
        <div
          style={{
            position: 'fixed', inset: 0, zIndex: 50,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            backgroundColor: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(6px)', padding: '1rem',
          }}
          onClick={() => setIsResumeOpen(false)}
        >
          <div
            className="card"
            style={{
              width: '100%', maxWidth: '56rem', height: '80vh',
              overflow: 'hidden', display: 'flex', flexDirection: 'column',
              boxShadow: 'var(--shadow-modal)',
            }}
            onClick={e => e.stopPropagation()}
          >
            <div style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              padding: '0.85rem 1.25rem', borderBottom: '1px solid var(--border)',
            }}>
              <span style={{ fontWeight: 600, color: 'var(--text-primary)', fontSize: '0.9rem' }}>Résumé</span>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <a href={resumeUrl} download="Kevin-Jeff-Ouano-Resume.pdf" className="btn-primary" style={{ padding: '0.45rem 1rem', fontSize: '0.82rem' }}>Download</a>
                <button type="button" onClick={() => setIsResumeOpen(false)} className="btn-ghost" style={{ padding: '0.45rem 1rem', fontSize: '0.82rem' }}>Close</button>
              </div>
            </div>
            <iframe src={resumeUrl} title="Resume PDF" style={{ width: '100%', flex: 1, border: 'none' }} />
            <div style={{ padding: '0.6rem 1.25rem', borderTop: '1px solid var(--border)' }}>
              <a href={resumeUrl} target="_blank" rel="noreferrer" className="eyebrow" style={{ color: 'var(--accent-primary)', textDecoration: 'none', fontSize: '0.65rem' }}>
                Can't see it? Open in a new tab ↗
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default AboutMe;
