import { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const isHomePage = location.pathname === '/';

    const navItems = [
        { name: 'Home', to: 'home' },
        { name: 'Services', to: 'services' },
        { name: 'About me', to: 'about' },
        { name: 'Portfolio', to: 'projects' },
        { name: 'Contact me', to: 'contact' },
    ];

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
                {/* LOGO */}
                <div className="flex-shrink-0 cursor-pointer">
                    <RouterLink to="/" onClick={() => window.scrollTo(0, 0)}>
                        <h1 className="text-2xl font-black tracking-widest text-[#FF1E1E]">
                            LOGO
                        </h1>
                    </RouterLink>
                </div>

                {/* Deskops Links */}
                <div className="hidden md:flex items-center space-x-10">
                    {navItems.map((item, index) => (
                        isHomePage ? (
                            <ScrollLink
                                key={item.name}
                                to={item.to}
                                smooth={true}
                                duration={500}
                                className={`cursor-pointer text-sm font-medium transition-all duration-300 hover:text-[#FF7A00] ${index === 0 ? 'text-[#FF7A00]' : 'text-gray-400'}`}
                            >
                                {item.name}
                            </ScrollLink>
                        ) : (
                            <button
                                key={item.name}
                                onClick={() => handleNavClick(item.to)}
                                className={`cursor-pointer text-sm font-medium transition-all duration-300 hover:text-[#FF7A00] ${index === 0 ? 'text-[#FF7A00]' : 'text-gray-400'}`}
                            >
                                {item.name}
                            </button>
                        )
                    ))}
                </div>

                {/* Hire Me Button */}
                <div className="hidden md:flex">
                    <motion.button 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-[#FF7A00] text-white px-6 py-2 rounded-md font-medium text-sm transition shadow-[0_0_15px_rgba(255,122,0,0.3)] hover:shadow-[0_0_25px_rgba(255,122,0,0.5)]"
                    >
                        Hire Me
                    </motion.button>
                </div>
                
                {/* Mobile Menu Icon (simplified) */}
                <div className="md:hidden flex items-center">
                    <button className="text-gray-400 hover:text-[#FF7A00]">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
