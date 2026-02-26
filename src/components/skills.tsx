import '../index.css';
import { 
  FaJava, FaGitAlt, FaProjectDiagram, FaLaravel 
} from "react-icons/fa";
import { 
  SiUbuntu, SiDocker, SiMysql, SiFirebase, SiSpring, 
  SiPython, SiPhp, SiTailwindcss, SiReact, SiJavascript, 
  SiTypescript, SiFlask 
} from "react-icons/si";

const skills = [
  { name: 'Ubuntu', icon: <SiUbuntu className="text-orange-600" /> },
  { name: 'Docker', icon: <SiDocker className="text-blue-500" /> },
  { name: 'MySQL', icon: <SiMysql className="text-blue-300" /> },
  { name: 'Firebase', icon: <SiFirebase className="text-yellow-500" /> },
  { name: 'Git', icon: <FaGitAlt className="text-red-500" /> },
  { name: 'Java', icon: <FaJava className="text-red-600" /> },
  { name: 'Spring', icon: <SiSpring className="text-green-500" /> },
  { name: 'Python', icon: <SiPython className="text-yellow-300" /> },
  { name: 'Flask', icon: <SiFlask className="text-slate-300" /> },
  { name: 'PHP', icon: <SiPhp className="text-indigo-400" /> },
  { name: 'Laravel', icon: <FaLaravel className='text-red-500' />},
  { name: 'Tailwind', icon: <SiTailwindcss className="text-cyan-400" /> },
  { name: 'React', icon: <SiReact className="text-cyan-400" /> },
  { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400" /> },
  { name: 'TypeScript', icon: <SiTypescript className="text-blue-600" /> },
  { name: 'Agile Project Management', icon: <FaProjectDiagram className="text-slate-300" /> }
];

function Skills() {
  return (
    <section id="skills" className="min-h-screen flex flex-col justify-center items-center bg-slate-950 py-20 px-4 relative overflow-hidden">
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl -translate-x-1/2"></div>
      <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-cyan-900/10 rounded-full blur-3xl translate-x-1/2"></div>

      <div className="max-w-5xl mx-auto z-10 w-full text-center">
        
        <h2 className="text-4xl md:text-5xl mb-16 text-white drop-shadow-lg animate-fade-in relative inline-block">
          Technical <span className="text-cyan-400">Skills</span>
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-1.5 bg-cyan-500 rounded-full"></div>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="group flex items-center gap-3 bg-slate-900/80 border border-slate-800 hover:border-cyan-500/50 rounded-full px-5 py-3 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 hover:-translate-y-1 cursor-default animate-slide-in-up backdrop-blur-sm"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="text-xl md:text-2xl group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
              </div>
              <span className="text-slate-300 font-medium text-sm md:text-base group-hover:text-white transition-colors">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
