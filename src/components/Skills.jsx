import { motion } from 'framer-motion';
import { skills } from '../data/skills';

const IsometricCube = ({ skill, index }) => {
    return (
        <motion.div
            className="relative group w-24 h-24 md:w-32 md:h-32 m-6 cursor-pointer"
            whileHover={{ y: -20, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
            {/* The Cube Container - CSS 3D emulation */}
            <div className="absolute w-full h-full preserve-3d">

                {/* Shadow */}
                <div className="absolute -bottom-8 left-0 w-full h-full bg-black/20 blur-xl rounded-full transform scale-x-125 group-hover:scale-x-90 group-hover:blur-md transition-all duration-300"></div>

                {/* Base/Bottom Face (Implied) */}

                {/* Main Face (Top/Front) */}
                <div
                    className="absolute inset-0 bg-white dark:bg-gray-800 rounded-xl border-t border-l border-white/50 dark:border-gray-600 shadow-2xl z-20 flex flex-col items-center justify-center transition-colors duration-300"
                    style={{
                        background: `linear-gradient(135deg, ${skill.color}15, transparent)`,
                    }}
                >
                    <div className="text-4xl filter drop-shadow-md transform transition-transform group-hover:scale-110" style={{ color: skill.color }}>
                        <skill.icon />
                    </div>
                    <span className="mt-2 text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                        {skill.name}
                    </span>
                </div>

                {/* Side Face (Thickness) simulating 3D */}
                <div
                    className="absolute top-2 left-2 w-full h-full bg-gray-200 dark:bg-gray-900 rounded-xl -z-10 transform translate-x-2 translate-y-2 border-r border-b border-gray-300 dark:border-black"
                ></div>
                <div
                    className="absolute top-4 left-4 w-full h-full bg-gray-300 dark:bg-gray-950 rounded-xl -z-20 transform translate-x-2 translate-y-2"
                ></div>
            </div>
        </motion.div>
    );
};

const Skills = () => {
    return (
        <section id="skills" className="py-32 bg-gray-100 dark:bg-[#0c0c0c] min-h-screen overflow-hidden flex flex-col items-center justify-center relative">

            {/* Isometric Grid Background */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05]"
                style={{
                    backgroundImage: 'linear-gradient(0deg, transparent 24%, #888 25%, #888 26%, transparent 27%, transparent 74%, #888 75%, #888 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, #888 25%, #888 26%, transparent 27%, transparent 74%, #888 75%, #888 76%, transparent 77%, transparent)',
                    backgroundSize: '60px 60px'
                }}
            ></div>

            <div className="text-center mb-20 relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-br from-gray-800 to-gray-400 dark:from-white dark:to-gray-600 tracking-tighter mb-4"
                >
                    BUILDING BLOCKS
                </motion.h2>
                <p className="text-gray-500 dark:text-gray-400 font-mono text-sm tracking-widest uppercase">
                    // ARCHITECTURAL CORE
                </p>
            </div>

            <div className="max-w-6xl mx-auto px-4 flex flex-wrap justify-center gap-8 md:gap-12 pb-20">
                {skills.flatMap(cat => cat.items).map((skill, index) => (
                    <IsometricCube key={skill.name} skill={skill} index={index} />
                ))}
            </div>

        </section>
    );
};

export default Skills;
