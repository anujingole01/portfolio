import { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { profile } from '../data/profile';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const isHomePage = location.pathname === '/';

    const navItems = [
        { name: 'Home', to: 'home' },
        { name: 'About', to: 'about' },
        { name: 'Skills', to: 'skills' },
        { name: 'Projects', to: 'projects' },
        { name: 'Certifications', to: 'certifications' },
        { name: 'Contact', to: 'contact' },
    ];

    const handleNavClick = (to) => {
        setIsOpen(false);
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
        <nav className="fixed w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0 cursor-pointer">
                        <RouterLink to="/" onClick={() => window.scrollTo(0, 0)}>
                            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
                                {profile.name.split(' ')[0]}
                            </h1>
                        </RouterLink>
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-center space-x-4">
                            {navItems.map((item) => (
                                isHomePage ? (
                                    <ScrollLink
                                        key={item.name}
                                        to={item.to}
                                        smooth={true}
                                        duration={300}
                                        className="cursor-pointer px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
                                    >
                                        {item.name}
                                    </ScrollLink>
                                ) : (
                                    <button
                                        key={item.name}
                                        onClick={() => handleNavClick(item.to)}
                                        className="cursor-pointer px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
                                    >
                                        {item.name}
                                    </button>
                                )
                            ))}
                            <RouterLink
                                to="/resume"
                                className="cursor-pointer px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
                            >
                                Resume
                            </RouterLink>
                            <ThemeToggle />
                        </div>
                    </div>

                    <div className="flex items-center md:hidden gap-4">
                        <ThemeToggle />
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col">
                        {navItems.map((item) => (
                            isHomePage ? (
                                <ScrollLink
                                    key={item.name}
                                    to={item.to}
                                    smooth={true}
                                    duration={300}
                                    onClick={() => setIsOpen(false)}
                                    className="cursor-pointer block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800"
                                >
                                    {item.name}
                                </ScrollLink>
                            ) : (
                                <button
                                    key={item.name}
                                    onClick={() => handleNavClick(item.to)}
                                    className="text-left cursor-pointer block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800"
                                >
                                    {item.name}
                                </button>
                            )
                        ))}
                        <RouterLink
                            to="/resume"
                            onClick={() => setIsOpen(false)}
                            className="cursor-pointer block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800"
                        >
                            Resume
                        </RouterLink>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
