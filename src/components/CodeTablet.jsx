import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { profile } from '../data/profile';

const CodeTablet = () => {
    const [displayedCode, setDisplayedCode] = useState('');
    const [started, setStarted] = useState(false);

    // Simple syntax highlighting simulation (concept)
    // For now, we keep the text typing effect simple but effective
    const codeSnippet = `const developer = {
  name: "${profile.name}",
  role: "${profile.role}",
  skills: ["React", "Node", "UI/UX"],
  hardWorker: true,
  status: "Ready to Create"
};

function init() {
  console.log("Initializing...");
  // Loading creative assets...
  return "Welcome!";
}

init();`;

    useEffect(() => {
        let currentIndex = 0;
        const typeChar = () => {
            if (currentIndex < codeSnippet.length) {
                setDisplayedCode(codeSnippet.substring(0, currentIndex + 1));
                currentIndex++;
                setTimeout(typeChar, Math.random() * 30 + 30); // Random typing speed for realism
            } else {
                setTimeout(() => {
                    setDisplayedCode('');
                    currentIndex = 0; // Reset
                    typeChar();
                }, 5000); // 5 seconds pause before loop
            }
        };

        // Start typing after a small delay
        const startTimeout = setTimeout(() => {
            setStarted(true);
            typeChar();
        }, 1000);

        return () => clearTimeout(startTimeout);
    }, []);

    return (
        <motion.div
            className="w-72 h-96 md:w-96 md:h-[28rem] bg-gray-900 rounded-[2rem] border-[1px] border-gray-700 shadow-2xl overflow-hidden relative group"
            style={{
                boxShadow: '0 0 40px rgba(59, 130, 246, 0.15), inset 0 0 20px rgba(0,0,0,0.5)'
            }}
        >
            {/* Glossy Overlay */}
            {/* Glass reflection gradient removed */}

            {/* Top Bar / Camera */}
            <div className="absolute top-0 left-0 w-full h-8 bg-gray-800 flex justify-center items-center z-20 border-b border-gray-700">
                <div className="w-16 h-3 bg-gray-900 rounded-full flex items-center justify-center space-x-1.5">
                    <div className="w-1 h-1 bg-gray-700 rounded-full"></div>
                    <div className="w-1.5 h-1.5 bg-blue-900/50 rounded-full"></div>
                </div>
            </div>

            {/* Code Editor Window */}
            <div className="w-full h-full bg-[#1e1e1e] pt-10 pb-4 px-4 overflow-hidden relative font-mono text-sm md:text-base">

                {/* Window Controls */}
                <div className="flex space-x-2 mb-4 opacity-70 absolute top-12 left-5">
                    <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-400 transition-colors"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-400 transition-colors"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-400 transition-colors"></div>
                </div>

                {/* Line Numbers Sidebar (Visual only) */}
                <div className="absolute top-20 left-4 w-6 text-right text-gray-600 select-none text-xs leading-6 font-mono">
                    {Array.from({ length: 15 }).map((_, i) => (
                        <div key={i}>{i + 1}</div>
                    ))}
                </div>

                {/* Code Content */}
                <div className="ml-8 mt-10 text-gray-300 leading-6 whitespace-pre-wrap break-words">
                    <span className="text-blue-400"></span>
                    {displayedCode}
                    <motion.span
                        animate={{ opacity: [1, 0] }}
                        transition={{ duration: 0.8, repeat: Infinity }}
                        className="inline-block w-2 h-5 bg-blue-500 align-text-bottom ml-0.5"
                    />
                </div>
            </div>

            {/* Bottom Glow */}
            {/* Base gradient removed */}
        </motion.div>
    );
};

export default CodeTablet;
