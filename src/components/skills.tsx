import '../index.css';
import SectionHeader from './SectionHeader';
import { TechIcon } from './TechIcon';

type Skill = { name: string };

interface SkillGroup {
  label: string;
  category: 'languages' | 'frameworks' | 'data' | 'tools';
  items: Skill[];
}

/**
 * Centralized skill data with category for visual hierarchy.
 * Icons are resolved via TechIcon component using name + category.
 */
const skillGroups: SkillGroup[] = [
  {
    label: 'Languages',
    category: 'languages',
    items: [
      { name: 'Java' },
      { name: 'C++' },
      { name: 'Python' },
      { name: 'PHP' },
      { name: 'JavaScript' },
      { name: 'TypeScript' },
    ],
  },
  {
    label: 'Frameworks',
    category: 'frameworks',
    items: [
      { name: 'React' },
      { name: 'Spring' },
      { name: 'Flask' },
      { name: 'Laravel' },
      { name: 'Tailwind' },
      { name: 'Vue.js' },
    ],
  },
  {
    label: 'Data',
    category: 'data',
    items: [
      { name: 'MySQL' },
      { name: 'PostgreSQL' },
      { name: 'Firebase' },
    ],
  },
  {
    label: 'Tools & Platforms',
    category: 'tools',
    items: [
      { name: 'Git' },
      { name: 'Docker' },
      { name: 'Ubuntu' },
      { name: 'Agile' },
      { name: 'Arduino' },
    ],
  },
];

/**
 * Map category to CSS variant class for tech-badge.
 */
const categoryClassMap: Record<SkillGroup['category'], string> = {
  languages: 'tech-badge--languages',
  frameworks: 'tech-badge--frameworks',
  data: 'tech-badge--data',
  tools: 'tech-badge--tools',
};

/**
 * Staggered animation delays for entrance effect.
 * Each category gets a base delay, each chip gets incremental delay.
 */
const CATEGORY_BASE_DELAY = 100; // ms
const CHIP_STAGGER_DELAY = 30;   // ms

function Skills() {
  return (
    <section
      id="skills"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '5rem 3rem',
        backgroundColor: 'var(--bg-section)',
      }}
    >
      <SectionHeader label="Skills" title="What I work with" />

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2.5rem' }}>
        {skillGroups.map((group, groupIndex) => {
          const variantClass = categoryClassMap[group.category];
          const baseDelay = groupIndex * CATEGORY_BASE_DELAY;

          return (
            <div key={group.label} style={{ animationDelay: `${baseDelay}ms` }} className="animate-in">
              <p className="eyebrow" style={{ marginBottom: '0.9rem', color: `var(--accent-${group.category})` }}>
                {group.label}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {group.items.map((skill, skillIndex) => (
                  <span
                    key={skill.name}
                    className={`tech-badge ${variantClass}`}
                    style={{
                      animationDelay: `${baseDelay + skillIndex * CHIP_STAGGER_DELAY}ms`,
                    }}
                  >
                    <TechIcon name={skill.name} category={group.category} size={13} />
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Skills;