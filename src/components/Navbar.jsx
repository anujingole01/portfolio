import { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaHome, FaGraduationCap, FaCode, FaLaptopCode, FaEnvelope } from 'react-icons/fa';

const Navbar = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const isHomePage = location.pathname === '/';
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 40);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: 'Home', to: 'home', icon: <FaHome size={22} /> },
        { name: 'About', to: 'about', icon: null },
        { name: 'Tech Stack', to: 'skills', icon: <FaCode size={22} /> },
        { name: 'Projects', to: 'projects', icon: <FaLaptopCode size={22} /> },
        { name: 'Certifications', to: 'certifications', icon: null },
        { name: 'Education', to: 'education', icon: <FaGraduationCap size={22} /> },
        { name: 'Contact', to: 'contact', icon: <FaEnvelope size={22} /> },
    ];

    const mobileNavItems = navItems.filter(item => item.icon !== null);

    const handleNavClick = (to) => {
        if (!isHomePage) {
            navigate('/');
            setTimeout(() => {
                const element = document.getElementById(to);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        }
    };

    return (
        <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 px-6 md:px-16 ${scrolled ? 'py-4 bg-[#080808]/70 backdrop-blur-2xl border-b border-white/5 shadow-[0_10px_30px_rgba(0,0,0,0.5)]' : 'py-6 bg-transparent'}`}>
            <div className="flex items-center justify-between max-w-[1400px] mx-auto">
                <div className="flex-shrink-0 cursor-pointer flex items-center gap-3">
                    <RouterLink to="/" onClick={() => window.scrollTo(0, 0)} className="group flex items-center gap-2">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0ea5e9] to-cyan-500 flex items-center justify-center font-black text-black group-hover:shadow-[0_0_15px_#0ea5e988] transition-all">
                            AI
                        </div>
                        <h1 className="text-xl font-bold tracking-wide text-white transition-transform group-hover:translate-x-1">
                            Anuj<span className="text-[#0ea5e9]">.dev</span>
                        </h1>
                    </RouterLink>
                </div>

                {/* Deskops Links */}
                <div className="hidden lg:flex items-center space-x-8 bg-[#111111]/40 border border-[#222] rounded-full px-8 py-3 backdrop-blur-lg">
                    {navItems.map((item, index) => (
                        isHomePage ? (
                            <ScrollLink
                                key={item.name}
                                to={item.to}
                                smooth={true}
                                duration={500}
                                spy={true}
                                activeClass="text-[#0ea5e9] font-black"
                                className={`cursor-pointer text-[13px] font-semibold tracking-widest uppercase transition-all duration-300 hover:text-[#0ea5e9] hover:-translate-y-1 ${index === 0 ? 'text-[#0ea5e9]' : 'text-gray-400'}`}
                            >
                                {item.name}
                            </ScrollLink>
                        ) : (
                            <button
                                key={item.name}
                                onClick={() => handleNavClick(item.to)}
                                className={`cursor-pointer text-[13px] font-semibold tracking-widest uppercase transition-all duration-300 hover:text-[#0ea5e9] hover:-translate-y-1 ${index === 0 ? 'text-[#0ea5e9]' : 'text-gray-400'}`}
                            >
                                {item.name}
                            </button>
                        )
                    ))}
                </div>
            </div>

            {/* Mobile Bottom Fixed Nav - Tech HUD Style */}
            <div className="fixed bottom-0 left-0 w-full lg:hidden bg-[#050505]/90 backdrop-blur-2xl border-t border-white/5 z-[100] px-4 py-3 flex justify-between items-center shadow-[0_-20px_50px_rgba(0,0,0,0.8)] pb-safe">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-[1px] bg-gradient-to-r from-transparent via-[#0ea5e9]/70 to-transparent" />
                
                {mobileNavItems.map((item, index) => (
                    isHomePage ? (
                        <ScrollLink
                            key={item.name}
                            to={item.to}
                            smooth={true}
                            duration={500}
                            spy={true}
                            activeClass="text-[#0ea5e9] scale-110 shadow-[0_0_15px_rgba(14,165,233,0.3)] bg-[#0ea5e9]/10 border-[#0ea5e9]/30"
                            className="flex flex-col items-center justify-center cursor-pointer p-3 rounded-2xl bg-transparent border border-transparent text-gray-500 transition-all hover:text-[#0ea5e9]"
                        >
                            {item.icon}
                        </ScrollLink>
                    ) : (
                        <button
                            key={item.name}
                            onClick={() => handleNavClick(item.to)}
                            className="flex flex-col items-center justify-center cursor-pointer p-3 rounded-2xl bg-transparent border border-transparent text-gray-500 transition-all hover:text-[#0ea5e9]"
                        >
                            {item.icon}
                        </button>
                    )
                ))}
            </div>
        </nav>
    );
};

export default Navbar;
