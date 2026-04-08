import '../index.css';
import { useRef, useState } from 'react';
import type { FormEvent } from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (form.current) {
      emailjs.sendForm(
        'service_d2xkh2v',
        'template_xqxka9i',
        form.current,
        'YzuOCClH6ePbgt9A-'
      ).then(() => {
        setLoading(false);
        setSent(true);
        form.current?.reset();
        setTimeout(() => setSent(false), 5000);
      }, (error) => {
        setLoading(false);
        alert('Failed to send. Please try again.');
        console.error(error.text);
      });
    }
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    backgroundColor: 'var(--bg-base)',
    border: '1px solid var(--border)',
    borderRadius: '8px',
    padding: '0.7rem 1rem',
    color: 'var(--text-primary)',
    fontSize: '0.9rem',
    outline: 'none',
    transition: 'border-color 0.2s',
  };

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontSize: '0.78rem',
    fontWeight: 600,
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    color: 'var(--text-muted)',
    marginBottom: '0.4rem',
  };

  return (
    <section
      id="contact"
      className="section-texture"
      style={{
        minHeight: '100vh',
        padding: '5rem 1.5rem',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'var(--bg-base)',
      }}
    >
      <div style={{ maxWidth: '72rem', margin: '0 auto', width: '100%' }}>

        {/* Heading */}
        <div style={{ marginBottom: '3.5rem' }}>
          <p style={{ fontSize: '0.7rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
            let's talk
          </p>
          <h2
            className="font-display"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 900, color: 'var(--text-primary)', lineHeight: 1.1 }}
          >
            Get in touch
          </h2>
          <div style={{ marginTop: '0.75rem', height: '2px', width: '2.5rem', backgroundColor: 'var(--accent-primary)' }} />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem' }}>

          {/* Left — info */}
          <div>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: '2rem', fontSize: '0.95rem' }}>
              I'm currently looking for new opportunities — whether it's a full-time role, a freelance project, or just a conversation worth having. My inbox is open.
            </p>

            {/* Email card */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                padding: '1rem 1.25rem',
                backgroundColor: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: '10px',
                marginBottom: '1.5rem',
                boxShadow: 'var(--shadow-sm)',
              }}
            >
              <div style={{
                width: '2.5rem', height: '2.5rem',
                backgroundColor: 'var(--bg-section)',
                border: '1px solid var(--border)',
                borderRadius: '8px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'var(--accent-primary)',
                flexShrink: 0,
              }}>
                <HiMail size={20} />
              </div>
              <div>
                <p style={{ fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.1rem' }}>
                  Email
                </p>
                <a
                  href="mailto:ouanokevinj@gmail.com"
                  style={{ color: 'var(--text-primary)', fontWeight: 500, fontSize: '0.9rem', textDecoration: 'none' }}
                >
                  ouanokevinj@gmail.com
                </a>
              </div>
            </div>

            {/* Social links */}
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              {[
                { href: 'https://github.com/ouanokevinj', icon: <FaGithub size={20} />, label: 'GitHub' },
                { href: 'https://www.linkedin.com/in/kevin-jeff-ouano-2b0894276/', icon: <FaLinkedinIn size={20} />, label: 'LinkedIn' },
              ].map(({ href, icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  title={label}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    padding: '0.6rem 1rem',
                    backgroundColor: 'var(--bg-card)',
                    border: '1px solid var(--border)',
                    borderRadius: '8px',
                    color: 'var(--text-secondary)',
                    fontSize: '0.82rem',
                    fontWeight: 500,
                    textDecoration: 'none',
                    transition: 'border-color 0.2s, color 0.2s',
                    boxShadow: 'var(--shadow-sm)',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--border-hover)';
                    (e.currentTarget as HTMLAnchorElement).style.color = 'var(--accent-primary)';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--border)';
                    (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-secondary)';
                  }}
                >
                  {icon} {label}
                </a>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <form
            ref={form}
            onSubmit={sendEmail}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem',
              backgroundColor: 'var(--bg-card)',
              border: '1px solid var(--border)',
              borderRadius: '12px',
              padding: '2rem',
              boxShadow: 'var(--shadow-card)',
            }}
          >
            <div>
              <label htmlFor="name" style={labelStyle}>Name</label>
              <input id="name" type="text" name="name" placeholder="Your name" required style={inputStyle}
                onFocus={e => (e.currentTarget.style.borderColor = 'var(--accent-primary)')}
                onBlur={e => (e.currentTarget.style.borderColor = 'var(--border)')}
              />
            </div>
            <div>
              <label htmlFor="email" style={labelStyle}>Email</label>
              <input id="email" type="email" name="email" placeholder="mail@example.com" required style={inputStyle}
                onFocus={e => (e.currentTarget.style.borderColor = 'var(--accent-primary)')}
                onBlur={e => (e.currentTarget.style.borderColor = 'var(--border)')}
              />
            </div>
            <div>
              <label htmlFor="message" style={labelStyle}>Message</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="What's on your mind?"
                required
                style={{ ...inputStyle, resize: 'none' }}
                onFocus={e => (e.currentTarget.style.borderColor = 'var(--accent-primary)')}
                onBlur={e => (e.currentTarget.style.borderColor = 'var(--border)')}
              />
            </div>

            {sent && (
              <p style={{ fontSize: '0.85rem', color: 'var(--accent-warm)' }}>
                ✓ Message sent — I'll get back to you soon.
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              style={{
                backgroundColor: loading ? 'var(--accent-rust)' : 'var(--accent-primary)',
                color: '#fff',
                border: 'none',
                borderRadius: '8px',
                padding: '0.8rem 1.5rem',
                fontWeight: 700,
                fontSize: '0.9rem',
                cursor: loading ? 'not-allowed' : 'pointer',
                transition: 'opacity 0.2s',
                letterSpacing: '0.04em',
              }}
              onMouseEnter={e => !loading && ((e.currentTarget as HTMLButtonElement).style.opacity = '0.85')}
              onMouseLeave={e => ((e.currentTarget as HTMLButtonElement).style.opacity = '1')}
            >
              {loading ? 'Sending…' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;