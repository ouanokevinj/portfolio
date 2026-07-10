import '../index.css';
import SectionHeader from './SectionHeader';
import { TechIcon } from './TechIcon';

type SkillGroup = {
  label: string;
  description: string;
  category: 'languages' | 'frameworks' | 'data' | 'tools';
  items: string[];
};

const primaryStack = ['Vue.js', 'TypeScript', 'FastAPI', 'Tailwind CSS', 'Laravel'];

const skillGroups: SkillGroup[] = [
  { label: 'Languages', description: 'The foundations I use across backend, web, and embedded work.', category: 'languages', items: ['Java', 'TypeScript', 'JavaScript', 'Python', 'PHP', 'C++'] },
  { label: 'Frameworks', description: 'For building maintainable interfaces and production-ready APIs.', category: 'frameworks', items: ['Spring Boot', 'React', 'Vue.js', 'FastAPI', 'Laravel', 'Tailwind CSS'] },
  { label: 'Data', description: 'Relational and real-time storage for dependable application data.', category: 'data', items: ['MySQL', 'PostgreSQL', 'Firebase'] },
  { label: 'Tools & platforms', description: 'The practical toolkit I use to build, ship, and collaborate.', category: 'tools', items: ['Git', 'Docker', 'Ubuntu', 'Arduino', 'Agile'] },
];

function Skills() {
  return (
    <section id="skills" className="stack-section">
      <div className="stack-intro">
        <SectionHeader label="Tech stack" title="Tools I build with" />
        <p className="stack-summary">
          I choose tools around the problem, with a strong preference for typed code,
          clear APIs, and technology that stays easy to maintain.
        </p>
      </div>

      <div className="primary-stack" aria-label="Primary technology stack">
        <div className="primary-stack-copy">
          <span className="primary-stack-kicker">Primary stack</span>
          <strong>My default toolkit for full-stack products</strong>
        </div>
        <div className="primary-stack-list">
          {primaryStack.map((name) => (
            <div className="primary-tech" key={name}>
              <TechIcon name={name} category="frameworks" size={22} />
              <span>{name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="stack-grid">
        {skillGroups.map((group, groupIndex) => (
          <article className="stack-group animate-in" key={group.label} style={{ animationDelay: `${groupIndex * 70}ms` }}>
            <header className="stack-group-header">
              <span className="stack-index">0{groupIndex + 1}</span>
              <div>
                <h3>{group.label}</h3>
                <p>{group.description}</p>
              </div>
            </header>
            <ul className="stack-list">
              {group.items.map((name) => (
                <li key={name}>
                  <span className="stack-icon"><TechIcon name={name} category={group.category} size={19} /></span>
                  <span>{name}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Skills;
