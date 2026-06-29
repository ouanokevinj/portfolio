import '../index.css';
import { useEffect, useState } from 'react';

const LETTERS = 'autumndude'.split('');

interface LoadingScreenProps { onComplete: () => void; }

function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const exitTimer = setTimeout(() => setExiting(true), 2200);
    const doneTimer = setTimeout(onComplete, 2900);
    return () => { clearTimeout(exitTimer); clearTimeout(doneTimer); };
  }, [onComplete]);

  return (
    <div
      className={exiting ? 'loader-exit' : ''}
      style={{ position: 'fixed', inset: 0, zIndex: 9999, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: 'var(--bg-base)', gap: '1rem' }}
    >
      <p
        className="font-display"
        style={{ fontWeight: 700, fontSize: 'clamp(3rem, 10vw, 7rem)', letterSpacing: '-0.03em', color: 'var(--text-primary)', lineHeight: 1, userSelect: 'none', display: 'flex', gap: '0.01em' }}
      >
        {LETTERS.map((char, i) => (
          <span key={i} className="loader-letter" style={{ animationDelay: `${i * 110}ms` }}>{char}</span>
        ))}
        <span className="loader-letter" style={{ animationDelay: `${LETTERS.length * 110}ms`, color: 'var(--accent-primary)' }}>.</span>
      </p>

      <p className="eyebrow animate-in" style={{ opacity: 0, animation: 'fade-in 0.5s 1.4s ease both', fontSize: '0.65rem' }}>
        portfolio
      </p>

      <div style={{ position: 'absolute', bottom: 0, left: 0, height: '2px', width: '100%', background: 'var(--border)' }}>
        <div style={{ height: '100%', background: 'var(--accent-primary)', animation: 'loader-bar 2.1s ease forwards' }} />
      </div>

      <style>{`@keyframes loader-bar { from { width: 0% } to { width: 100% } }`}</style>
    </div>
  );
}

export default LoadingScreen;
