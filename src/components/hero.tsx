import '../index.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';

function Hero() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let frame = 0;
    const updateProgress = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        setScrollProgress(Math.min(window.scrollY / window.innerHeight, 1));
      });
    };

    window.addEventListener('scroll', updateProgress, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', updateProgress);
    };
  }, []);

  return (
    <section id="home" className="landing-hero" aria-label="Introduction">
      <div
        className="landing-hero-content"
        style={{
          opacity: 1 - scrollProgress * 0.72,
          transform: `translateY(${-scrollProgress * 72}px)`,
        }}
      >
        <p className="landing-kicker">Full-Stack Developer</p>
        <h1 className="landing-name">
          <span>Kevin Jeff</span>
          <span className="landing-name-accent">Ouano</span>
        </h1>
        <Link to="about" smooth duration={500} offset={-40} className="landing-location landing-cta">
          Get to know me <span aria-hidden="true">↓</span>
        </Link>
        <span className="landing-scroll-cue" aria-hidden="true" />
      </div>
    </section>
  );
}

export default Hero;
