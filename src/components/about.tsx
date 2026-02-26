import '../index.css'
import { Link } from 'react-scroll'
import profileImage from '../assets/img/kevin.png'
import { useEffect, useState } from 'react'

function AboutMe() {
  const [isResumeOpen, setIsResumeOpen] = useState(false)
  const resumeUrl = '/resume.pdf' // put resume.pdf in /public

  // optional: ESC to close modal
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsResumeOpen(false)
    }
    if (isResumeOpen) window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [isResumeOpen])

  return (
    <>
      <section id='about' className='min-h-screen flex items-center py-20 px-4 relative overflow-hidden'>
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>

        <div className='max-w-6xl mx-auto z-10 w-full'>
          <h2 className='text-4xl md:text-5xl font-black text-center mb-16 text-white drop-shadow-lg'>
            About Me
          </h2>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
            <div className='space-y-6 order-2 md:order-1 animate-slide-in-up'>
              <h3 className='text-2xl md:text-3xl font-bold'>Hello! I'm <span className='text-cyan-400'>Kevin Jeff Ouano</span></h3>
              <div className='space-y-4 text-lg leading-relaxed text-lef'>
                <p>
                  I am a 2nd-year <span className="text-slate-200 font-semibold">Software Engineering student</span> at the University of Cebu – Banilad in partnership with Lithan. I focus on building modern, user-friendly applications, designing interfaces that are simple, fast, and consistent.
                </p>

                <p>
                  On the backend, I work with REST APIs, databases, and practical project structures that support growth. I value clear communication and disciplined problem-solving, and I am seeking opportunities to apply these skills in real-world development work.
                </p>
              </div>

              <div className='flex flex-wrap gap-4 pt-6 justify-center md:justify-start'>
                {/* Download (keeps same look) */}
                <a
                  href={resumeUrl}
                  download="Kevin-Jeff-Ouano-Resume.pdf"
                  className='px-5 md:px-8 py-2.5 md:py-3 rounded-full bg-cyan-500 font-semibold shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:bg-cyan-500/60 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105'
                >
                  Download CV
                </a>

                {/* Preview button (styled to match existing "View Projects") */}
                <button
                  type="button"
                  onClick={() => setIsResumeOpen(true)}
                  className='px-5 md:px-8 py-2.5 md:py-3 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm font-semibold hover:border-cyan-400 hover:bg-white/10 transition-all duration-300 cursor-pointer'
                >
                  Preview CV
                </button>

                <Link
                  to='projects'
                  smooth
                  duration={500}
                  offset={-80}
                  className='px-5 md:px-8 py-2.5 md:py-3 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm font-semibold hover:border-cyan-400 hover:bg-white/10 transition-all duration 300 cursor-pointer'
                >
                  View Projects
                </Link>
              </div>
            </div>

            <div className='order-1 md:order-2 flex justify-center relative group'>
              <div className='relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96'>
                <div className="relative w-full h-full rounded-[2.5rem] bg-slate-900 border-2 border-white/10 overflow-hidden shadow-2xl animate-float-slow z-10 group-hover:scale-[1.02] transition-transform duration-500 flex items-center justify-center">
                  <img
                    src={profileImage}
                    alt="Kevin Jeff Ouano"
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Resume Preview Modal */}
        {isResumeOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4"
            onClick={() => setIsResumeOpen(false)}
          >
            <div
              className="w-full max-w-4xl h-[80vh] bg-slate-900 border border-white/10 rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
                <p className="text-white font-semibold">Resume Preview</p>

                <div className="flex gap-2">
                  <a
                    href={resumeUrl}
                    download="Kevin-Jeff-Ouano-Resume.pdf"
                    className="px-4 py-2 rounded-lg bg-cyan-500/90 hover:bg-cyan-500 font-semibold transition"
                  >
                    Download
                  </a>
                  <button
                    type="button"
                    onClick={() => setIsResumeOpen(false)}
                    className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/15 transition text-white"
                    aria-label="Close preview"
                  >
                    Close
                  </button>
                </div>
              </div>

              <iframe
                src={resumeUrl}
                title="Resume PDF"
                className="w-full h-full"
              />
            </div>
          </div>
        )}

      </section>
    </>
  )
}

export default AboutMe