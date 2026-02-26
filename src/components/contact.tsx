import '../index.css'
import { useRef, useState } from 'react';
import type { FormEvent } from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HiMail, HiExternalLink } from 'react-icons/hi';
import emailjs from '@emailjs/browser'

function Contact(){
    const form = useRef<HTMLFormElement>(null);
    const [loading,setLoading] = useState(false);

    const sendEmail = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (form.current) {
        emailjs.sendForm(
            'service_d2xkh2v',  // Service Id
            'template_xqxka9i', // Template Id
            form.current,
            'YzuOCClH6ePbgt9A-' // Public Key
        ).then((result) => {
            setLoading(false);
            console.log(result)
            alert('Message sent successfully!');
            form.current?.reset();
        }, (error) => {
            setLoading(false);
            alert('Failed to send message. Please try again.');
            console.error(error.text);
        });
    }
  };
    
    return(
        <>
            <section id='contact' className='min-h-screen py-20 px-4 relative overflow-hidden flex items-center'>
                <div className='max-w-6xl mx-auto w-full relative z-10'>
                    <div className='text-center mb-16 space-y-4'>
                        <h2 className='text-4xl md:text-5xl font-black drop-shadow-lg'> Get in <span className='text-cyan-400 relative inline'>touch</span></h2>

                        <p className='text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed'>
                            I'm currently looking for new opportunities. Whether you have a question regarding a project, a job opportunity, or just want to say hi, my inbox is always open!
                        </p>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20'>
                        <div className='space-y-8 animate-slide-in-up'>
                        <h3 className='text-3xl font-bold'>Let's Connect</h3>  
                        <p className='text-slate-400 text=lg leading-relaxed'>
                            I'm always open to discussing development work or partnership opportunities.
                        </p>

                        <div className='p-6 bg-slate-900/50 border border-slate-800 rounded-2xl flex items-center gap-4 hover:border-cyan-500/50 transition-colors group'>
                            <div className='w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform'>
                                <HiMail size={24}/>  
                            </div>
                        <div>
                            <p className='text-sm text-slate-500 font-semibold tracking-wider'>Email Me</p>
                            <a href='mailto:ouanokevinj@gmail.com' className='text-lg font-medium hover:text-cyan-400 transition-colors'>ouanokevinj@gmail.com</a>
                        </div>
                        </div>
                        <div className="flex gap-4">
                            <a href="https://github.com/ouanokevinj" className="p-4 rounded-xl bg-slate-900 border border-white/5 text-slate-400 hover:bg-cyan-600 hover:text-white hover:border-transparent transition-all hover:-translate-y-1 shadow-lg">
                                <FaGithub size={24} />
                            </a>
                            <a href="https://www.linkedin.com/in/kevin-jeff-ouano-2b0894276/" className="p-4 rounded-xl bg-slate-900 border border-white/5 text-slate-400 hover:bg-blue-600 hover:text-white hover:border-transparent transition-all hover:-translate-y-1 shadow-lg">
                                <FaLinkedinIn size={24} />
                            </a>
                            <a href="#" className="p-4 rounded-xl bg-slate-900 border border-white/5 text-slate-400 hover:bg-emerald-600 hover:text-white hover:border-transparent transition-all hover:-translate-y-1 shadow-lg">
                                <HiExternalLink size={24} />
                            </a>
                        </div>
                      </div>
                      <form ref={form} onSubmit={sendEmail} className='space-y-6 bg-slate-900/30 p-8 rounded-3xl border border-slate-800/50 backdrop-blur-sm animate-slide-in-up' style={{animationDelay: '200ms'}}>
                        <div className='space-y-2'>
                            <label htmlFor='name' className='text-sm font-semibold text-slate-300 ml-1'>Your Name</label>
                            <input type='text' id='name' name='name' placeholder='John Doe' className='w-full bg-slate-950/50 border border-slate-800 rounded-xl px-4 py-3 placeholder-slate-600 focus:outilne-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all'/>
                        </div>

                        <div className='space-y-2'>
                            <label htmlFor='email' className='text-sm font-semibold text-slate-300 ml-1'>Your Email</label>
                            <input type='email' id='email' name='email' placeholder='mail@example.com' className='w-full bg-slate-950/50 border border-slate-800 rounded-xl px-4 py-3 placeholder-slate-600 focus:outilne-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all'/>
                        </div>

                        <div>
                            <label htmlFor='message' className='text-sm font-semibold text-slate-300 ml-1'>Message</label>
                            <textarea rows={4} name='message' placeholder='How can I help you? ' className='w-full bg-slate-950/50 border border-slate-800 rounded-xl px-4 py-3 placeholder-slate-600 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all resize-none'></textarea>
                        </div>

                        <button type='submit' disabled={loading} className='w-full bg-cyan-600 hover:bg-cyan-600/70 rounded-xl py-4 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all transform hover:-translate-y-1'>{loading ? 'Sending...' : 'Send Message'}</button>
                      </form>
                    </div>   
                </div>
            </section>
        </>
    )
}

export default Contact