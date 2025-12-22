import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeToggle = () => {
    const [theme, setTheme] = useState(
        localStorage.getItem('theme') || 'light'
    );

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    return (
        <button
            onClick={toggleTheme}
            className="relative p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300 focus:outline-none"
            aria-label="Toggle Dark Mode"
        >
            <div className="relative w-6 h-6 overflow-hidden">
                <motion.div
                    initial={false}
                    animate={{
                        y: theme === 'dark' ? 32 : 0,
                        opacity: theme === 'dark' ? 0 : 1,
                    }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 flex items-center justify-center text-yellow-500"
                >
                    <FaSun className="text-xl" />
                </motion.div>
                <motion.div
                    initial={false}
                    animate={{
                        y: theme === 'dark' ? 0 : -32,
                        opacity: theme === 'dark' ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 flex items-center justify-center text-blue-300"
                >
                    <FaMoon className="text-xl" />
                </motion.div>
            </div>
        </button>
    );
};

export default ThemeToggle;
