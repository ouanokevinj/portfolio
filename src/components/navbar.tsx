import '../index.css'
import {useState, useEffect } from 'react';
import { Link } from 'react-scroll';

function Navbar(){
    const [isOpen, setIsOpen ] = useState(false);
    const [scrolled, setScrolled] = useState(false);

     useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsOpen(false); // Force closed on load
    }, []);

    const navLinks = [
        { to: 'home', label: 'Home' },
        { to: 'about', label: 'About' },
        { to: 'skills', label: 'Skills' },
        { to: 'projects', label: 'Projects' },
        { to: 'contact', label: 'Contact' }
    ];

    return (
        <>
            <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/80 backdrop-blur-lg h-16' : 'bg-transparent py-4 h-20'} `} >
                <div className='max-w-6xl mx-auto px-4'>
                    <div className='flex justify-between items-center py-4'>
                        <Link to="home" smooth duration={500} className="text-2xl font-bold text-white hover:text-blue-400 cursor-pointer transition">
                        autumndude
                        </Link>
                        
                        {/* Desktop */}
                        <ul className='hidden md:flex space-x-2'>
                        {navLinks.map((link) => (
                            <li key={link.to}>
                            <Link
                                to={link.to}
                                spy={true}
                                smooth={true}
                                offset={-80}
                                duration={500}
                                className='text-white hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium cursor-pointer transition'
                            >
                                {link.label}
                            </Link>
                            </li>
                        ))}
                        </ul>
                        {/* Mobile */}
                        <button
                            onClick={ () => setIsOpen(!isOpen) }
                            className={`md:hidden p-1 rounded-md focus:outline-none transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`}
                        >
                        <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                            <path 
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth={2}
                                d={isOpen ? 'M6 18L18 6M6 6L12 12' :  'M4 6h16M4 12h16M4 18h16'}
                            />
                        </svg>
                        </button>
                    </div>

                    {/* Mobile Menu */}
                    {isOpen ? (
                        <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100 border-t border-slate-800 pb-4 bg-slate-950/95 backdrop-blur-md' : 'max-h-o opacity-0'}`}>
                        <ul className='space-y-2'>
                            {navLinks.map((link) => (
                                <li key={link.to}>
                                    <Link
                                        to={link.to}
                                        smooth
                                        spy
                                        duration={300}
                                        onClick={ () => setIsOpen(false) }
                                        className='block hover:text-blue-400 px-3 py-2 rounded-md text-base font-medium'    
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    ) : null}
                </div>
            </nav>
        </>
    )
}

export default Navbar