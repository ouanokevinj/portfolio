import '../index.css';
import { useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { FiExternalLink, FiX } from 'react-icons/fi';
import enomyImg from '../assets/img/enomy-ui.png';
import portfolioImg from '../assets/img/portfolio-front.png';
import todoImg from '../assets/img/todo-front.png';
import dobuImg from '../assets/img/dobu-front.png';

type Project = {
  title: string;
  note: string;           // short "label" above the title
  description: string;   // human-written, honest
  tech: string[];        // shown as plain text list
  image: string;
  codeUrl?: string;
  liveUrl?: string;
};

const projects: Project[] = [
  {
    title: 'This Site',
    note: 'portfolio',
    description:
      "You're looking at it. I built this to have somewhere to point people when they ask what I've worked on. Started as plain HTML, ended up being a proper React + TypeScript project. Got more interesting as I went.",
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'EmailJS'],
    image: portfolioImg,
    codeUrl: 'https://github.com/ouanokevinj/portfolio',
    liveUrl: '#',
  },
  {
    title: 'Task Manager with Cloud Sync',
    note: 'web app',
    description:
      "A to-do app backed by Firebase so your tasks don't disappear when you close the tab. I built the backend in Flask and kept the frontend intentionally simple — no framework overhead, just fast and functional.",
    tech: ['Python', 'Flask', 'Firebase', 'HTML / CSS / JS'],
    image: todoImg,
    codeUrl: '#',
    liveUrl: '#',
  },
  {
    title: 'Dobu Martial Arts',
    note: 'Academic Project',
    description:
      "A class catalog and enrollment site for a local martial arts gym. The client needed something that worked on phones and didn't require someone technical to update. Built with vanilla HTML/CSS and some jQuery for the interactive parts.",
    tech: ['HTML', 'CSS', 'JavaScript', 'jQuery'],
    image: dobuImg,
    codeUrl: 'https://github.com/ouanokevinj/Dobu-Martial-Arts',
    liveUrl: 'https://dobu-martial-arts-three.vercel.app/',
  },
  {
    title: 'Enomy Finance',
    note: 'academic project',
    description:
      "A role-based finance management system built for a software engineering module. Different user roles see different data and have different access levels. The backend is Spring Boot with MySQL — the kind of project that taught me how real auth and data flow actually works.",
    tech: ['Java', 'Spring Boot', 'MySQL', 'Bootstrap'],
    image: enomyImg,
    codeUrl: '#',
    liveUrl: '#',
  },
];

function Projects() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section
      id="projects"
      className="section-texture"
      style={{
        minHeight: '100vh',
        padding: '5rem 1.5rem',
        backgroundColor: 'var(--bg-section)',
      }}
    >
      <div style={{ maxWidth: '72rem', margin: '0 auto' }}>

        {/* Heading */}
        <div style={{ marginBottom: '4rem' }}>
          <p style={{ fontSize: '0.7rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
            things i've built
          </p>
          <h2
            className="font-display"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 900, color: 'var(--text-primary)', lineHeight: 1.1 }}
          >
            Projects
          </h2>
          <div style={{ marginTop: '0.75rem', height: '2px', width: '2.5rem', backgroundColor: 'var(--accent-primary)' }} />
        </div>

        {/* Project rows */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '5rem' }}>
          {projects.map((p, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <article
                key={idx}
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                  gap: '2.5rem',
                  alignItems: 'center',
                  position: 'relative',
                }}
              >
                {/* Big faint project number */}
                <span
                  style={{
                    position: 'absolute',
                    top: '-1.5rem',
                    [isEven ? 'left' : 'right']: 0,
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 900,
                    fontSize: 'clamp(4rem, 10vw, 7rem)',
                    color: 'var(--accent-primary)',
                    opacity: 0.06,
                    lineHeight: 1,
                    userSelect: 'none',
                    pointerEvents: 'none',
                  }}
                >
                  {String(idx + 1).padStart(2, '0')}
                </span>

                {/* Image side */}
                <div
                  className={`order-1 ${isEven ? 'md:order-1' : 'md:order-2'}`}
                  style={{
                    cursor: 'pointer',
                    borderRadius: '0.75rem',
                    overflow: 'hidden',
                    border: '1px solid var(--border)',
                    boxShadow: 'var(--shadow-card)',
                    aspectRatio: '16/10',
                    position: 'relative',
                  }}
                  onClick={() => setSelectedImage(p.image)}
                >
                  <img
                    src={p.image}
                    alt={p.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                      transition: 'transform 0.5s ease',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.03)')}
                    onMouseLeave={e => (e.currentTarget.style.transform = 'none')}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      opacity: 0,
                      backgroundColor: 'rgba(0,0,0,0.25)',
                      transition: 'opacity 0.3s',
                      fontSize: '0.8rem',
                      color: '#fff',
                      fontWeight: 600,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
                    onMouseLeave={e => (e.currentTarget.style.opacity = '0')}
                  >
                    click to expand
                  </div>
                </div>

                {/* Text side */}
                <div className={`order-2 ${isEven ? 'md:order-2' : 'md:order-1'}`}>
                  {/* Note + title */}
                  <p style={{
                    fontSize: '0.7rem',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: 'var(--text-muted)',
                    marginBottom: '0.4rem',
                  }}>
                    {p.note}
                  </p>
                  <h3
                    className="font-display"
                    style={{
                      fontSize: 'clamp(1.4rem, 3vw, 2rem)',
                      fontWeight: 800,
                      color: 'var(--text-primary)',
                      marginBottom: '1rem',
                      lineHeight: 1.2,
                    }}
                  >
                    {p.title}
                  </h3>

                  {/* Description */}
                  <p style={{
                    fontSize: '0.95rem',
                    lineHeight: 1.75,
                    color: 'var(--text-secondary)',
                    marginBottom: '1.25rem',
                  }}>
                    {p.description}
                  </p>

                  {/* Tech — plain text list style */}
                  <p style={{
                    fontSize: '0.78rem',
                    color: 'var(--text-muted)',
                    letterSpacing: '0.05em',
                    marginBottom: '1.25rem',
                  }}>
                    {p.tech.join(' / ')}
                  </p>

                  {/* Links — inline text */}
                  <div style={{ display: 'flex', gap: '1.25rem' }}>
                    {p.codeUrl && p.codeUrl !== '#' && (
                      <a
                        href={p.codeUrl}
                        target="_blank"
                        rel="noreferrer"
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.4rem',
                          color: 'var(--accent-primary)',
                          fontSize: '0.875rem',
                          fontWeight: 600,
                          textDecoration: 'none',
                          borderBottom: '1px solid var(--border-hover)',
                          paddingBottom: '1px',
                          transition: 'color 0.2s',
                        }}
                      >
                        <FaGithub size={14} /> code
                      </a>
                    )}
                    {p.liveUrl && p.liveUrl !== '#' && (
                      <a
                        href={p.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.4rem',
                          color: 'var(--accent-primary)',
                          fontSize: '0.875rem',
                          fontWeight: 600,
                          textDecoration: 'none',
                          borderBottom: '1px solid var(--border-hover)',
                          paddingBottom: '1px',
                          transition: 'color 0.2s',
                        }}
                      >
                        <FiExternalLink size={14} /> live ↗
                      </a>
                    )}
                    {(!p.codeUrl || p.codeUrl === '#') && (!p.liveUrl || p.liveUrl === '#') && (
                      <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                        private / in progress
                      </span>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Image preview modal */}
      {selectedImage && (
        <div
          style={{
            position: 'fixed', inset: 0, zIndex: 50,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            backgroundColor: 'rgba(0,0,0,0.75)',
            backdropFilter: 'blur(6px)',
            padding: '1.5rem',
          }}
          onClick={() => setSelectedImage(null)}
        >
          <button
            style={{
              position: 'absolute', top: '1.25rem', right: '1.25rem',
              padding: '0.5rem',
              borderRadius: '9999px',
              border: '1px solid rgba(255,255,255,0.2)',
              backgroundColor: 'rgba(0,0,0,0.4)',
              color: '#fff',
              cursor: 'pointer',
              display: 'flex',
            }}
            onClick={e => { e.stopPropagation(); setSelectedImage(null); }}
          >
            <FiX size={24} />
          </button>
          <img
            src={selectedImage}
            alt="Project preview"
            style={{
              maxWidth: '100%',
              maxHeight: '90vh',
              borderRadius: '0.75rem',
              boxShadow: '0 24px 80px rgba(0,0,0,0.6)',
              objectFit: 'contain',
            }}
            onClick={e => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}

export default Projects;
