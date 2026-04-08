import '../index.css';
import {
  FaJava, FaGitAlt, FaProjectDiagram, FaLaravel
} from 'react-icons/fa';
import {
  SiUbuntu, SiDocker, SiMysql, SiFirebase, SiSpring,
  SiPython, SiPhp, SiTailwindcss, SiReact, SiJavascript,
  SiTypescript, SiFlask
} from 'react-icons/si';

const skills = [
  { name: 'Ubuntu',                  icon: <SiUbuntu className="text-orange-600" /> },
  { name: 'Docker',                  icon: <SiDocker className="text-blue-500" /> },
  { name: 'MySQL',                   icon: <SiMysql className="text-blue-300" /> },
  { name: 'Firebase',                icon: <SiFirebase className="text-yellow-500" /> },
  { name: 'Git',                     icon: <FaGitAlt className="text-red-500" /> },
  { name: 'Java',                    icon: <FaJava className="text-red-600" /> },
  { name: 'Spring',                  icon: <SiSpring className="text-green-500" /> },
  { name: 'Python',                  icon: <SiPython className="text-yellow-300" /> },
  { name: 'Flask',                   icon: <SiFlask style={{ color: 'var(--text-secondary)' }} /> },
  { name: 'PHP',                     icon: <SiPhp className="text-indigo-400" /> },
  { name: 'Laravel',                 icon: <FaLaravel className="text-red-500" /> },
  { name: 'Tailwind',                icon: <SiTailwindcss className="text-cyan-500" /> },
  { name: 'React',                   icon: <SiReact className="text-cyan-400" /> },
  { name: 'JavaScript',              icon: <SiJavascript className="text-yellow-400" /> },
  { name: 'TypeScript',              icon: <SiTypescript className="text-blue-600" /> },
  { name: 'Agile Project Management',icon: <FaProjectDiagram style={{ color: 'var(--text-muted)' }} /> },
];

function Skills() {
  return (
    <section
      id="skills"
      className="section-texture"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '5rem 1.5rem',
        backgroundColor: 'var(--bg-base)',
      }}
    >
      <div style={{ maxWidth: '64rem', margin: '0 auto', width: '100%' }}>

        {/* Heading */}
        <div style={{ marginBottom: '3rem' }}>
          <p style={{ fontSize: '0.7rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
            what i work with
          </p>
          <h2
            className="font-display"
            style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 900, color: 'var(--text-primary)', lineHeight: 1.1 }}
          >
            Technical Skills
          </h2>
          <div style={{ marginTop: '0.75rem', height: '2px', width: '2.5rem', backgroundColor: 'var(--accent-primary)' }} />
        </div>

        {/* Skill pills */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
          {skills.map((skill, index) => (
            <div
              key={index}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                backgroundColor: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: '9999px',
                padding: '0.5rem 1.1rem',
                fontSize: '0.875rem',
                fontWeight: 500,
                color: 'var(--text-secondary)',
                cursor: 'default',
                transition: 'border-color 0.2s, color 0.2s, transform 0.2s',
                animationDelay: `${index * 40}ms`,
                boxShadow: 'var(--shadow-sm)',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--border-hover)';
                (e.currentTarget as HTMLDivElement).style.color = 'var(--text-primary)';
                (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--border)';
                (e.currentTarget as HTMLDivElement).style.color = 'var(--text-secondary)';
                (e.currentTarget as HTMLDivElement).style.transform = 'none';
              }}
              className="animate-fade-up"
            >
              <span style={{ fontSize: '1.1rem', lineHeight: 1 }}>{skill.icon}</span>
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
