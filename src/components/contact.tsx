import '../index.css';
import { useRef, useState } from 'react';
import type { FormEvent } from 'react';
import SectionHeader from './SectionHeader';
import emailjs from '@emailjs/browser';

const directory = [
  { label: 'Email',    value: 'ouanokevinj@gmail.com',  href: 'mailto:ouanokevinj@gmail.com' },
  { label: 'GitHub',   value: 'github.com/ouanokevinj', href: 'https://github.com/ouanokevinj' },
  { label: 'LinkedIn', value: 'kevin-jeff-ouano',       href: 'https://www.linkedin.com/in/kevin-jeff-ouano-2b0894276/' },
  { label: 'Location', value: 'Cebu, Philippines',      href: undefined },
];

function Contact() {
  const form    = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [sent,    setSent]    = useState(false);

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    if (form.current) {
      emailjs.sendForm('service_d2xkh2v', 'template_xqxka9i', form.current, 'YzuOCClH6ePbgt9A-')
        .then(() => { setLoading(false); setSent(true); form.current?.reset(); setTimeout(() => setSent(false), 5000); })
        .catch(err => { setLoading(false); alert('Failed to send. Please try again.'); console.error(err); });
    }
  };

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontSize: '0.72rem',
    fontWeight: 600,
    color: 'var(--text-secondary)',
    marginBottom: '0.45rem',
    letterSpacing: '0.08em',
    textTransform: 'uppercase' as const,
  };

  /* inputs now use .input-base CSS class; focus ring handled in index.css */

  return (
    <section
      id="contact"
      style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '5rem 3rem', backgroundColor: 'var(--bg-section)' }}
    >
      <SectionHeader label="Contact" title="Let's talk" />

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2.5rem', alignItems: 'start' }}>

        {/* Directory */}
        <div>
          <p style={{ fontSize: '0.95rem', lineHeight: 1.8, color: 'var(--text-secondary)', marginBottom: '2rem' }}>
            Open to new opportunities — a full-time role, freelance work,
            or a conversation worth having.
          </p>

          <div>
            {directory.map(({ label, value, href }, i) => {
              const row = (
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', padding: '0.8rem 0', borderTop: i === 0 ? '1px solid var(--border)' : 'none', borderBottom: '1px solid var(--border)' }}>
                  <span className="eyebrow" style={{ fontSize: '0.65rem', flexShrink: 0 }}>{label}</span>
                  <span style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--text-primary)', textAlign: 'right', transition: 'color 0.2s' }}>{value}</span>
                </div>
              );
              return href ? (
                <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer"
                  style={{ textDecoration: 'none', display: 'block' }}
                  onMouseEnter={e => { (e.currentTarget.querySelector('span:last-child') as HTMLElement).style.color = 'var(--accent-primary)'; }}
                  onMouseLeave={e => { (e.currentTarget.querySelector('span:last-child') as HTMLElement).style.color = 'var(--text-primary)'; }}>
                  {row}
                </a>
              ) : <div key={label}>{row}</div>;
            })}
          </div>
        </div>

        {/* Form */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="card"
          style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', gap: '1.1rem' }}
        >
          <div>
            <label htmlFor="name" style={labelStyle}>Name <span aria-hidden="true" style={{ color: 'var(--accent-primary)' }}>*</span></label>
            <input
              id="name" type="text" name="name"
              autoComplete="name"
              placeholder="Your name"
              required
              className="input-base"
            />
          </div>
          <div>
            <label htmlFor="email" style={labelStyle}>Email <span aria-hidden="true" style={{ color: 'var(--accent-primary)' }}>*</span></label>
            <input
              id="email" type="email" name="email"
              autoComplete="email"
              placeholder="mail@example.com"
              required
              className="input-base"
            />
          </div>
          <div>
            <label htmlFor="message" style={labelStyle}>Message <span aria-hidden="true" style={{ color: 'var(--accent-primary)' }}>*</span></label>
            <textarea
              id="message" name="message"
              rows={5}
              autoComplete="off"
              placeholder="What's on your mind?"
              required
              className="input-base"
              style={{ resize: 'none' }}
            />
          </div>

          {sent && (
            <p style={{ fontSize: '0.875rem', color: 'var(--accent-primary)', fontWeight: 500 }}>
              ✓ Message sent — I'll be in touch soon.
            </p>
          )}

          <button type="submit" disabled={loading} className="btn-primary"
            style={{ justifyContent: 'center', opacity: loading ? 0.7 : 1, cursor: loading ? 'not-allowed' : 'pointer' }}>
            {loading ? 'Sending…' : 'Send Message →'}
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
