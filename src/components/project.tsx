import '../index.css';
import { useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { FiExternalLink, FiX } from 'react-icons/fi'; // Import FiX for close icon
import enomyImg from '../assets/img/enomy-ui.png';
import portfolioImg from '../assets/img/portfolio-front.png'
import todoImg from '../assets/img/todo-front.png'
import dobuImg from '../assets/img/dobu-front.png'

type Project = {
  title: string;
  description: string;
  tech: string[];
  image: string;
  codeUrl?: string;
  liveUrl?: string;
};

const projects: Project[] = [
  {
    title: 'Portfolio Website',
    description: 'Professional modern website designed to showcase my skills and projects.',
    tech: ['React TSX', 'Tailwind CSS', 'EmailJS', 'HTML', 'CSS'],
    image: portfolioImg,
    codeUrl: '#',
    liveUrl: '#',
  },
  {
    title: 'To-Do List App',
    description: 'To-Do list application with cloud database to store your tasks',
    tech: ['Python', 'Flask', 'HTML', 'CSS', 'JS', 'Firebase'],
    image: todoImg,
    codeUrl: '#',
    liveUrl: '#',
  },
  {
    title: 'Dobu Martial Arts',
    description: 'Responsive class catalog and enrollment site with dynamic interactions.',
    tech: ['HTML', 'CSS', 'jQuery', 'JS'],
    image: dobuImg,
    codeUrl: 'https://github.com/ouanokevinj/Dobu-Martial-Arts',
    liveUrl: 'https://dobu-martial-arts-three.vercel.app/',
  },
  {
    title: 'Enomy Finance',
    description: 'Role-based finance management system with secure backend logic and structured data processing.',
    tech: ['Java', 'Spring Boot', 'MySQL', 'HTML', 'CSS', 'JS', 'Bootstrap'],
    image: enomyImg,
    codeUrl: '#',
    liveUrl: '#',
  },
];

function Projects() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="projects" className="min-h-screen bg-slate-950 py-20 px-4 relative overflow-hidden">
      {/* Background glows */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-12">
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight text-center md:text-left">
            Featured <span className="text-cyan-400">Projects</span>
          </h2>
          <div className="mt-3 h-1.5 w-20 bg-cyan-400 rounded-full mx-auto md:mx-0" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((p, idx) => (
            <article
              key={idx}
              className="group rounded-3xl overflow-hidden border border-white/10 bg-slate-900/40 backdrop-blur-md shadow-2xl shadow-black/50 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500/30 flex flex-col"
            >
              
              <div 
                className="h-80 relative overflow-hidden bg-slate-800 cursor-pointer" 
                onClick={() => setSelectedImage(p.image)}
              >
                <div className="absolute inset-0" />
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              <div className="p-6 flex flex-col grow">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-2xl font-bold text-white leading-tight">
                    {p.title}
                  </h3>

                  <div className="flex gap-3 relative z-20">
                    <a
                      href={p.codeUrl || '#'}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-full bg-white/5 hover:bg-cyan-500/20 text-slate-300 hover:text-cyan-400 transition-all border border-transparent hover:border-cyan-500/50"
                      title="View Code"
                    >
                      <FaGithub size={18} />
                    </a>
                    <a
                      href={p.liveUrl || '#'}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-full bg-white/5 hover:bg-cyan-500/20 text-slate-300 hover:text-cyan-400 transition-all border border-transparent hover:border-cyan-500/50"
                      title="Live Demo"
                    >
                      <FiExternalLink size={18} />
                    </a>
                  </div>
                </div>

                <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-4 line-clamp-2">
                  {p.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-full text-[11px] font-semibold text-cyan-200 bg-cyan-900/20 border border-cyan-500/20 tracking-wide"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* fullscreen modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
        >
          {/* x button */}
          <button 
            className="absolute top-5 right-5 p-2 text-white/70 hover:text-white bg-black/50 rounded-full hover:bg-white/20 transition-all"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(null);
            }}
          >
            <FiX size={32} />
          </button>

          {/* enlarged */}
          <img 
            src={selectedImage} 
            alt="Full Project Preview" 
            className="max-w-full max-h-full rounded-lg shadow-2xl border border-white/10 object-contain scale-100 animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()} 
          />
        </div>
      )}
    </section>
  );
}

export default Projects;
