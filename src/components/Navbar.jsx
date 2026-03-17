import { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaHome, FaGraduationCap, FaCode, FaLaptopCode, FaEnvelope } from 'react-icons/fa';

const Navbar = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const isHomePage = location.pathname === '/';

    const navItems = [
        { name: 'Home', to: 'home', icon: <FaHome size={22} /> },
        { name: 'About me', to: 'about', icon: null },
        { name: 'Technical Skills', to: 'skills', icon: <FaCode size={22} /> },
        { name: 'Projects', to: 'projects', icon: <FaLaptopCode size={22} /> },
        { name: 'Graphic Design', to: 'graphics', icon: null },
        { name: 'Certifications', to: 'certifications', icon: null },
        { name: 'Education', to: 'education', icon: <FaGraduationCap size={22} /> },
        { name: 'Contact me', to: 'contact', icon: <FaEnvelope size={22} /> },
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
        <nav className="w-full px-8 md:px-16 py-6 z-50">
            <div className="flex items-center justify-between">
                <div className="flex-shrink-0 cursor-pointer">
                    <RouterLink to="/" onClick={() => window.scrollTo(0, 0)}>
                        <h1 className="text-xl md:text-2xl font-bold tracking-wide text-white transition-transform hover:scale-105">
                            Anuj Ingole <span className="text-[#0ea5e9]">Portfolio</span>
                        </h1>
                    </RouterLink>
                </div>

                {/* Deskops Links */}
                <div className="hidden lg:flex items-center space-x-10">
                    {navItems.map((item, index) => (
                        isHomePage ? (
                            <ScrollLink
                                key={item.name}
                                to={item.to}
                                smooth={true}
                                duration={500}
                                className={`cursor-pointer text-sm font-semibold tracking-wide transition-all duration-300 hover:text-[#0ea5e9] hover:-translate-y-1 ${index === 0 ? 'text-[#0ea5e9]' : 'text-gray-400'}`}
                            >
                                {item.name}
                            </ScrollLink>
                        ) : (
                            <button
                                key={item.name}
                                onClick={() => handleNavClick(item.to)}
                                className={`cursor-pointer text-sm font-semibold tracking-wide transition-all duration-300 hover:text-[#0ea5e9] hover:-translate-y-1 ${index === 0 ? 'text-[#0ea5e9]' : 'text-gray-400'}`}
                            >
                                {item.name}
                            </button>
                        )
                    ))}
                </div>

                {/* Removed Hamburger icon to use bottom mobile bar */}
            </div>

            {/* Mobile Bottom Fixed Nav - Tech HUD Style */}
            <div className="fixed bottom-0 left-0 w-full lg:hidden bg-[#0A0A0A]/90 backdrop-blur-xl border-t border-[#2A2A2A] z-[100] px-6 py-4 flex justify-between items-center shadow-[0_-20px_50px_rgba(0,0,0,0.8)]">
                {/* Subtle Top Glow for Nav */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-[#0ea5e9]/50 to-transparent" />
                
                {mobileNavItems.map((item, index) => (
                    isHomePage ? (
                        <ScrollLink
                            key={item.name}
                            to={item.to}
                            smooth={true}
                            duration={500}
                            className="flex flex-col items-center justify-center cursor-pointer group px-2"
                        >
                            <motion.div 
                                whileTap={{ scale: 0.8 }}
                                className="relative p-2.5 rounded-2xl bg-[#111] border border-[#222] text-gray-500 transition-all hover:text-[#0ea5e9] hover:border-[#0ea5e9]/40 hover:shadow-[0_0_15px_#0ea5e933]"
                            >
                                {item.icon}
                                <div className="absolute inset-0 bg-[#0ea5e9]/5 rounded-2xl opacity-0 group-active:opacity-100 transition-opacity" />
                            </motion.div>
                        </ScrollLink>
                    ) : (
                        <button
                            key={item.name}
                            onClick={() => handleNavClick(item.to)}
                            className="flex flex-col items-center justify-center cursor-pointer group px-2"
                        >
                            <motion.div 
                                whileTap={{ scale: 0.8 }}
                                className="relative p-2.5 rounded-2xl bg-[#111] border border-[#222] text-gray-500 transition-all hover:text-[#0ea5e9] hover:border-[#0ea5e9]/40 hover:shadow-[0_0_15px_#0ea5e933]"
                            >
                                {item.icon}
                            </motion.div>
                        </button>
                    )
                ))}
            </div>
        </nav>
    );
};

export default Navbar;
