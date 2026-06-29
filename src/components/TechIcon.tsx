import type { ReactNode } from 'react';
import { FaJava, FaGitAlt, FaLaravel, FaProjectDiagram } from 'react-icons/fa';
import {
  SiUbuntu, SiDocker, SiMysql, SiFirebase, SiSpring,
  SiPython, SiPhp, SiTailwindcss, SiReact, SiJavascript,
  SiTypescript, SiFlask, SiPostgresql, SiCplusplus,
  SiVuedotjs, SiArduino,
} from 'react-icons/si';

type TechIconProps = {
  name: string;
  category: 'languages' | 'frameworks' | 'data' | 'tools';
  size?: number;
};

/**
 * Centralized tech icon component.
 * Maps technology names to their appropriate icons.
 * Icons inherit color from parent (category accent color via CSS).
 */
export function TechIcon({ name, size = 14 }: TechIconProps) {
  const iconMap: Record<string, ReactNode> = {
    // Languages
    'Java': <FaJava />,
    'C++': <SiCplusplus />,
    'Python': <SiPython />,
    'PHP': <SiPhp />,
    'JavaScript': <SiJavascript />,
    'TypeScript': <SiTypescript />,
    'TS': <SiTypescript />,
    'JS': <SiJavascript />,

    // Frameworks
    'React': <SiReact />,
    'Spring': <SiSpring />,
    'Spring Boot': <SiSpring />,
    'Flask': <SiFlask />,
    'Laravel': <FaLaravel />,
    'Tailwind': <SiTailwindcss />,
    'Tailwind CSS': <SiTailwindcss />,
    'Vue.js': <SiVuedotjs />,
    'Vue': <SiVuedotjs />,

    // Data
    'MySQL': <SiMysql />,
    'PostgreSQL': <SiPostgresql />,
    'Postgres': <SiPostgresql />,
    'Firebase': <SiFirebase />,

    // Tools & Platforms
    'Git': <FaGitAlt />,
    'Docker': <SiDocker />,
    'Ubuntu': <SiUbuntu />,
    'Agile': <FaProjectDiagram />,
    'Arduino': <SiArduino />,
  };

  const Icon = iconMap[name];
  
  if (!Icon) {
    // Fallback: render first letter in a circle
    return (
      <span
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: size,
          height: size,
          borderRadius: '50%',
          fontSize: size * 0.5,
          fontWeight: 700,
          fontFamily: 'var(--font-mono)',
          background: 'currentColor',
          color: 'var(--text-inverse)',
        }}
        aria-hidden="true"
      >
        {name.charAt(0)}
      </span>
    );
  }

  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: size,
        height: size,
        lineHeight: 1,
        flexShrink: 0,
        color: 'currentColor', // Inherits category accent color from parent
      }}
      aria-hidden="true"
    >
      {Icon}
    </span>
  );
}

// Export the icon map for potential external use
export const techIconMap = {
  // Languages
  'Java': FaJava,
  'C++': SiCplusplus,
  'Python': SiPython,
  'PHP': SiPhp,
  'JavaScript': SiJavascript,
  'TypeScript': SiTypescript,
  // Frameworks
  'React': SiReact,
  'Spring': SiSpring,
  'Spring Boot': SiSpring,
  'Flask': SiFlask,
  'Laravel': FaLaravel,
  'Tailwind': SiTailwindcss,
  'Tailwind CSS': SiTailwindcss,
  'Vue.js': SiVuedotjs,
  'Vue': SiVuedotjs,
  // Data
  'MySQL': SiMysql,
  'PostgreSQL': SiPostgresql,
  'Postgres': SiPostgresql,
  'Firebase': SiFirebase,
  // Tools & Platforms
  'Git': FaGitAlt,
  'Docker': SiDocker,
  'Ubuntu': SiUbuntu,
  'Agile': FaProjectDiagram,
  'Arduino': SiArduino,
};