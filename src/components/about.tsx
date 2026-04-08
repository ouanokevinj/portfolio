import '../index.css';
import { Link } from 'react-scroll';
import profileImage from '../assets/img/kevin.png';
import { useEffect, useState } from 'react';

function AboutMe() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const resumeUrl = '/resume.pdf';

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsResumeOpen(false);
    };
    if (isResumeOpen) window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isResumeOpen]);

  return (
    <>
      <section
        id="about"
        className="section-texture"
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          padding: '5rem 1.5rem',
          backgroundColor: 'var(--bg-section)',
          position: 'relative',
        }}
      >
        <div style={{ maxWidth: '72rem', margin: '0 auto', width: '100%', zIndex: 1 }}>

          {/* Heading */}
          <div style={{ marginBottom: '3.5rem' }}>
            <p style={{ fontSize: '0.7rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
              who i am
            </p>
            <h2
              className="font-display"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 900, color: 'var(--text-primary)', lineHeight: 1.1 }}
            >
              About Me
            </h2>
            <div style={{ marginTop: '0.75rem', height: '2px', width: '2.5rem', backgroundColor: 'var(--accent-primary)' }} />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem', alignItems: 'center' }}>

            {/* Text */}
            <div style={{ order: 2 }} className="animate-fade-up">
              <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '1.25rem', color: 'var(--text-primary)' }}>
                Hello, I'm{' '}
                <span style={{ color: 'var(--accent-primary)', fontWeight: 800 }}>Kevin Jeff Ouano</span>
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '1rem', lineHeight: 1.75, color: 'var(--text-secondary)' }}>
                <p>
                  I am a second-year <strong style={{ color: 'var(--text-primary)' }}>Software Engineering student</strong> at UC Banilad in partnership with Lithan. I specialize in developing full stack applications, ensuring natural user interfaces and robust backend architectures that can handle realistic workflows.
                </p>
                <p>
                  My experience includes building clean, scalable structures and designing consistent APIs. From developing small web tools to constructing complete systems with secure authentication and database integration, I focus on delivering high-quality, performant software solutions.
                </p>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginTop: '2rem' }}>
                <a
                  href={resumeUrl}
                  download="Kevin-Jeff-Ouano-Resume.pdf"
                  style={{
                    padding: '0.6rem 1.5rem',
                    borderRadius: '6px',
                    backgroundColor: 'var(--accent-primary)',
                    color: '#fff',
                    fontWeight: 600,
                    fontSize: '0.875rem',
                    textDecoration: 'none',
                    transition: 'opacity 0.2s',
                    letterSpacing: '0.03em',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
                  onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
                >
                  Download CV
                </a>

                <button
                  type="button"
                  onClick={() => setIsResumeOpen(true)}
                  style={{
                    padding: '0.6rem 1.5rem',
                    borderRadius: '6px',
                    border: '1px solid var(--border-hover)',
                    backgroundColor: 'transparent',
                    color: 'var(--accent-primary)',
                    fontWeight: 600,
                    fontSize: '0.875rem',
                    cursor: 'pointer',
                    transition: 'background-color 0.2s',
                    letterSpacing: '0.03em',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'var(--bg-card)')}
                  onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'transparent')}
                >
                  Preview CV
                </button>

                <Link
                  to="projects"
                  smooth
                  duration={500}
                  offset={-80}
                  style={{
                    padding: '0.6rem 1.5rem',
                    borderRadius: '6px',
                    border: '1px solid var(--border)',
                    backgroundColor: 'transparent',
                    color: 'var(--text-secondary)',
                    fontWeight: 600,
                    fontSize: '0.875rem',
                    cursor: 'pointer',
                    transition: 'border-color 0.2s',
                    letterSpacing: '0.03em',
                  }}
                >
                  View Projects
                </Link>
              </div>
            </div>

            {/* Photo */}
            <div style={{ order: 1, display: 'flex', justifyContent: 'center' }}>
              <div
                style={{
                  position: 'relative',
                  width: 'min(320px, 80vw)',
                  height: 'min(320px, 80vw)',
                }}
              >
                {/* Offset background block for depth */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    transform: 'translate(10px, 10px)',
                    borderRadius: '1rem',
                    border: '2px solid var(--accent-primary)',
                    opacity: 0.25,
                  }}
                />
                <img
                  src={profileImage}
                  alt="Kevin Jeff Ouano"
                  style={{
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: '1rem',
                    border: '1px solid var(--border)',
                    boxShadow: 'var(--shadow-md)',
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resume Preview Modal */}
      {isResumeOpen && (
        <div
          style={{
            position: 'fixed', inset: 0, zIndex: 50,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            backgroundColor: 'rgba(0,0,0,0.6)',
            backdropFilter: 'blur(4px)',
            padding: '1rem',
          }}
          onClick={() => setIsResumeOpen(false)}
        >
          <div
            style={{
              width: '100%', maxWidth: '56rem', height: '80vh',
              backgroundColor: 'var(--bg-card)',
              border: '1px solid var(--border)',
              borderRadius: '1rem',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-md)',
            }}
            onClick={e => e.stopPropagation()}
          >
            <div style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              padding: '0.75rem 1rem',
              borderBottom: '1px solid var(--border)',
            }}>
              <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>Resume Preview</span>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <a
                  href={resumeUrl}
                  download="Kevin-Jeff-Ouano-Resume.pdf"
                  style={{
                    padding: '0.4rem 1rem', borderRadius: '6px',
                    backgroundColor: 'var(--accent-primary)', color: '#fff',
                    fontWeight: 600, fontSize: '0.85rem', textDecoration: 'none',
                  }}
                >
                  Download
                </a>
                <button
                  type="button"
                  onClick={() => setIsResumeOpen(false)}
                  style={{
                    padding: '0.4rem 1rem', borderRadius: '6px',
                    border: '1px solid var(--border)',
                    backgroundColor: 'transparent',
                    color: 'var(--text-secondary)',
                    cursor: 'pointer', fontWeight: 600, fontSize: '0.85rem',
                  }}
                >
                  Close
                </button>
              </div>
            </div>
            <iframe src={resumeUrl} title="Resume PDF" style={{ width: '100%', height: '100%' }} />
          </div>
        </div>
      )}
    </>
  );
}

export default AboutMe;