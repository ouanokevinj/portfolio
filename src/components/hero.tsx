import '../index.css';

function Hero() {
  return (
    <section
      id="home"
      className="section-texture"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '6rem 1.5rem 4rem',
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: 'var(--bg-base)',
      }}
    >
      {/* Subtle warm tint block — NOT a blur blob */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse 80% 55% at 50% 40%, #d4820a09 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: '56rem', width: '100%' }}>

        {/* Name block */}
        <div style={{ marginBottom: '1.5rem' }}>
          <h1
            className="animate-fade-up font-display"
            style={{
              fontSize: 'clamp(3.5rem, 12vw, 9rem)',
              fontWeight: 900,
              lineHeight: 1,
              letterSpacing: '-0.02em',
              color: 'var(--text-primary)',
              animationDelay: '0ms',
            }}
          >
            Kevin Jeff
          </h1>
          <h1
            className="animate-fade-up font-display"
            style={{
              fontSize: 'clamp(3.5rem, 12vw, 9rem)',
              fontWeight: 900,
              lineHeight: 1,
              letterSpacing: '-0.02em',
              color: 'var(--accent-primary)',
              animationDelay: '120ms',
            }}
          >
            Ouano
          </h1>
        </div>

        {/* Role line */}
        <div
          className="animate-fade-up"
          style={{ animationDelay: '280ms', display: 'flex', justifyContent: 'center' }}
        >
          <span
            className="animate-typewriter-hold"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 'clamp(1rem, 2.5vw, 1.35rem)',
              letterSpacing: '0.1em',
              color: 'var(--text-secondary)',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              display: 'inline-block',
            }}
          >
            Full Stack Web Developer
          </span>
        </div>

        {/* Scroll cue */}
        <div
          className="animate-fade-up"
          style={{
            animationDelay: '500ms',
            marginTop: '3rem',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              width: '1px',
              height: '3rem',
              backgroundColor: 'var(--accent-rust)',
              opacity: 0.4,
            }}
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;