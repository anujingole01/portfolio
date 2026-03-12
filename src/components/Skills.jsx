import { motion } from 'framer-motion';
import { skills } from '../data/skills';

const IsometricCube = ({ skill, index }) => {
    return (
        <motion.div
            className="relative group w-24 h-24 md:w-32 md:h-32 m-6 cursor-pointer"
            whileHover={{ y: -20, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
            {/* The Cube Container */}
            <div className="absolute w-full h-full preserve-3d">

                {/* Shadow */}
                <div className="absolute -bottom-8 left-0 w-full h-full bg-black/40 blur-xl rounded-full transform scale-x-125 group-hover:scale-x-90 group-hover:blur-md transition-all duration-300"></div>

                {/* Main Face (Top/Front) */}
                <div
                    className="absolute inset-0 bg-[#161616] rounded-xl border-t border-l border-[#2A2A2A] shadow-2xl z-20 flex flex-col items-center justify-center transition-all duration-300 group-hover:border-[#FF7A00]"
                    style={{
                        background: `linear-gradient(135deg, ${skill.color}15, transparent)`,
                    }}
                >
                    <div className="text-4xl filter drop-shadow-md transform transition-transform group-hover:scale-110" style={{ color: skill.color }}>
                        <skill.icon />
                    </div>
                    <span className="mt-2 text-xs font-bold text-gray-300 uppercase tracking-wider group-hover:text-white transition-colors">
                        {skill.name}
                    </span>
                </div>

                {/* Side Face (Thickness) simulating 3D */}
                <div
                    className="absolute top-2 left-2 w-full h-full bg-[#1A1A1A] rounded-xl -z-10 transform translate-x-2 translate-y-2 border-r border-b border-[#0C0C0C]"
                ></div>
                <div
                    className="absolute top-4 left-4 w-full h-full bg-[#111111] rounded-xl -z-20 transform translate-x-2 translate-y-2"
                ></div>
            </div>
        </motion.div>
    );
};

const Skills = () => {
    return (
        <section id="skills" className="py-24 relative overflow-hidden flex flex-col items-center justify-center">

            {/* Subtle Grid Background */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.05]"
                style={{
                    backgroundImage: 'radial-gradient(#444 1px, transparent 1px)',
                    backgroundSize: '30px 30px'
                }}
            ></div>

            <div className="text-center mb-20 relative z-10 w-full px-8 md:px-16">
                <div className="mb-2">
                    <span className="text-[#FF7A00] text-sm font-semibold tracking-widest uppercase">My Arsenal</span>
                </div>
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4"
                >
                    Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-[#FF7A00]">Skills</span>
                </motion.h2>
            </div>

            <div className="max-w-[1300px] mx-auto px-8 md:px-16 flex flex-wrap justify-center gap-6 md:gap-12 w-full">
                {skills.flatMap(cat => cat.items).map((skill, index) => (
                    <IsometricCube key={skill.name} skill={skill} index={index} />
                ))}
            </div>

        </section >
    );
};

export default Skills;
