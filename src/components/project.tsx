import '../index.css';
import { useState } from 'react';
import SectionHeader from './SectionHeader';
import { FaGithub } from 'react-icons/fa';
import { FiExternalLink, FiX } from 'react-icons/fi';
import enomyImg     from '../assets/img/enomy-ui.png';
import portfolioImg from '../assets/img/portfolio-front.png';
import todoImg      from '../assets/img/todo-front.png';
import dobuImg      from '../assets/img/dobu-front.png';
import crmImg       from '../assets/img/crm-front.png';
import libraryImg   from '../assets/img/library-borrow-prototype.jpg';

type Project = {
  title: string;
  note: string;
  description: string;
  tech: string[];
  image: string;
  codeUrl?: string;
  liveUrl?: string;
};

const projects: Project[] = [
  {
    title: 'Library Borrow System',
    note: 'Freelance Project',
    description: "Students scan their RFID cards, the Arduino reads the tag via ESP8266, and the data syncs to Firebase in real time. Deployed and actively used. This is the project that most shows how software connects to the physical world.",
    tech: ['Arduino Uno', 'ESP8266', 'C++', 'Firebase'],
    image: libraryImg,
    codeUrl: 'https://github.com/ouanokevinj/Library-Borrow-System',
  },
  {
    title: 'SyncFlow CRM',
    note: 'Personal Project',
    description: "An automated CRM with a lead-management pipeline, task automation, and analytics. Vue + TypeScript frontend, Laravel + PostgreSQL backend, role-based access control.",
    tech: ['Vue.js', 'TypeScript', 'Laravel', 'PostgreSQL', 'Tailwind CSS'],
    image: crmImg,
  },
  {
    title: 'Enomy Finance',
    note: 'Academic Project',
    description: "A role-based finance management system. Different roles see different data — the project that taught me how real auth, authorization, and data scoping work in practice.",
    tech: ['Java', 'Spring Boot', 'MySQL', 'Bootstrap'],
    image: enomyImg,
  },
  {
    title: 'Task Manager with Cloud Sync',
    note: 'Web App',
    description: "A to-do app backed by Firebase so your tasks don't disappear when you close the tab. Flask backend, intentionally minimal frontend — focused on the real-time sync behaviour.",
    tech: ['Python', 'Flask', 'Firebase', 'HTML / CSS / JS'],
    image: todoImg,
  },
  {
    title: 'Dobu Martial Arts',
    note: 'Academic Project',
    description: "A class catalog and enrollment site for a local martial arts gym. Brief: work on phones, don't need a technical person to maintain it. Vanilla HTML/CSS with jQuery.",
    tech: ['HTML', 'CSS', 'JavaScript', 'jQuery'],
    image: dobuImg,
    codeUrl: 'https://github.com/ouanokevinj/Dobu-Martial-Arts',
    liveUrl: 'https://dobu-martial-arts-three.vercel.app/',
  },
  {
    title: 'This Site',
    note: 'Portfolio',
    description: "Started as plain HTML. Became React + TypeScript when I wanted a contact form and dark mode. Stack is simple on purpose — a portfolio doesn't need a backend.",
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'EmailJS'],
    image: portfolioImg,
    codeUrl: 'https://github.com/ouanokevinj/portfolio',
  },
];

function Projects() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section
      id="projects"
      style={{ minHeight: '100vh', padding: '5rem 3rem', backgroundColor: 'var(--bg-base)' }}
    >
      <SectionHeader label="Work" title="Selected work" />

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
        {projects.map((p, idx) => {
          const hasCode = p.codeUrl && p.codeUrl !== '#';
          const hasLive = p.liveUrl && p.liveUrl !== '#';

          return (
            <article
              key={idx}
              className="card card-hover"
              style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', overflow: 'hidden' }}
            >
              {/* Image */}
              <div
                style={{ cursor: 'pointer', overflow: 'hidden', aspectRatio: '16/10', position: 'relative' }}
                onClick={() => setSelectedImage(p.image)}
              >
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.5s ease' }}
                  onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.04)')}
                  onMouseLeave={e => (e.currentTarget.style.transform = 'none')}
                />
                <div
                  style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: 0, background: 'rgba(0,0,0,0.2)', transition: 'opacity 0.3s' }}
                  onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
                  onMouseLeave={e => (e.currentTarget.style.opacity = '0')}
                >
                  <span className="eyebrow" style={{ color: '#fff', background: 'rgba(0,0,0,0.5)', padding: '0.35rem 0.7rem', borderRadius: 'var(--radius-full)', fontSize: '0.62rem' }}>Expand ↗</span>
                </div>
              </div>

              {/* Content */}
              <div style={{ padding: '1.75rem 2rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <p className="eyebrow" style={{ marginBottom: '0.5rem' }}>{p.note}</p>
                <h3
                  className="font-display project-title"
                  style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.65rem)', fontWeight: 700, marginBottom: '0.75rem', lineHeight: 1.15 }}
                >
                  {p.title}
                </h3>
                <p style={{ fontSize: '0.9rem', lineHeight: 1.75, color: 'var(--text-secondary)', marginBottom: '1.1rem' }}>
                  {p.description}
                </p>

                {/* Tech pills */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.25rem' }}>
                  {p.tech.map(t => (
                    <span key={t} style={{ padding: '0.25rem 0.6rem', background: 'var(--bg-chip)', border: '1px solid var(--border)', borderRadius: 'var(--radius-sm)', fontSize: '0.75rem', fontWeight: 500, color: 'var(--text-muted)' }}>
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'center' }}>
                  {hasCode && (
                    <a href={p.codeUrl} target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'var(--accent-primary)', fontSize: '0.875rem', fontWeight: 600, textDecoration: 'none' }}>
                      <FaGithub size={14} /> Code
                    </a>
                  )}
                  {hasLive && (
                    <a href={p.liveUrl} target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'var(--accent-primary)', fontSize: '0.875rem', fontWeight: 600, textDecoration: 'none' }}>
                      <FiExternalLink size={14} /> Live ↗
                    </a>
                  )}
                  {!hasCode && !hasLive && (
                    <span className="eyebrow" style={{ fontSize: '0.65rem' }}>Private / In progress</span>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          style={{ position: 'fixed', inset: 0, zIndex: 50, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(8px)', padding: '1.5rem' }}
          onClick={() => setSelectedImage(null)}
        >
          <button aria-label="Close preview" style={{ position: 'absolute', top: '1.25rem', right: '1.25rem', padding: '0.5rem', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(255,255,255,0.15)', background: 'rgba(0,0,0,0.5)', color: '#fff', cursor: 'pointer', display: 'flex' }}
            onClick={e => { e.stopPropagation(); setSelectedImage(null); }}>
            <FiX size={22} />
          </button>
          <img src={selectedImage} alt="Project preview" style={{ maxWidth: '100%', maxHeight: '90vh', borderRadius: 'var(--radius)', objectFit: 'contain', boxShadow: '0 24px 80px rgba(0,0,0,0.7)' }} onClick={e => e.stopPropagation()} />
        </div>
      )}
    </section>
  );
}

export default Projects;
