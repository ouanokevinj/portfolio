import '../index.css';
import { useEffect, useState } from 'react';

const LETTERS = 'autumndude'.split('');

interface LoadingScreenProps {
  onComplete: () => void;
}

function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    // Start exit animation after letters have all dropped in (~2.2s)
    const exitTimer = setTimeout(() => setExiting(true), 2200);
    // Fully remove after exit animation completes (~0.65s)
    const doneTimer = setTimeout(onComplete, 2900);
    return () => {
      clearTimeout(exitTimer);
      clearTimeout(doneTimer);
    };
  }, [onComplete]);

  return (
    <div
      className={exiting ? 'loader-exit' : ''}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'var(--bg-base)',
        gap: '1rem',
      }}
    >
      {/* Brand word */}
      <p
        style={{
          fontFamily: "'Inter', sans-serif",
          fontWeight: 900,
          fontSize: 'clamp(3rem, 10vw, 7rem)',
          letterSpacing: '0.04em',
          color: 'var(--accent-primary)',
          lineHeight: 1,
          userSelect: 'none',
          display: 'flex',
          gap: '0.01em',
        }}
      >
        {LETTERS.map((char, i) => (
          <span
            key={i}
            className="loader-letter"
            style={{ animationDelay: `${i * 110}ms` }}
          >
            {char}
          </span>
        ))}
      </p>

      {/* Subtle tagline */}
      <p
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: '0.75rem',
          letterSpacing: '0.25em',
          textTransform: 'uppercase',
          color: 'var(--text-muted)',
          opacity: 0,
          animation: 'fade-up 0.5s 1.4s ease both',
        }}
      >
        portfolio
      </p>

      {/* Thin progress bar */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          height: '2px',
          width: '100%',
          backgroundColor: 'var(--border)',
        }}
      >
        <div
          style={{
            height: '100%',
            backgroundColor: 'var(--accent-primary)',
            animation: 'loader-bar 2.1s ease forwards',
          }}
        />
      </div>

      <style>{`
        @keyframes loader-bar {
          from { width: 0%; }
          to   { width: 100%; }
        }
      `}</style>
    </div>
  );
}

export default LoadingScreen;
