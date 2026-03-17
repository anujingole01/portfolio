import { motion } from 'framer-motion';
import { skills } from '../data/skills';

const IsometricCube = ({ skill, index }) => {
    return (
        <motion.div
            className="relative group w-28 h-28 md:w-32 md:h-32 m-4 md:m-6 cursor-pointer"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05 }}
            whileHover={{ y: -12, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            <div className="absolute w-full h-full">
                {/* Techy Corner accents visible on hover */}
                <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-[#0ea5e9] opacity-0 group-hover:opacity-100 transition-opacity z-30" />
                <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-[#0ea5e9] opacity-0 group-hover:opacity-100 transition-opacity z-30" />

                {/* Card Face */}
                <div className="absolute inset-0 bg-[#111] rounded-2xl border border-[#222] shadow-2xl z-20 flex flex-col items-center justify-center transition-all duration-500 group-hover:border-[#0ea5e9]/50 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0ea5e9]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="text-4xl filter drop-shadow-[0_0_8px_rgba(0,0,0,0.8)] transform transition-transform duration-500 group-hover:scale-110 group-hover:drop-shadow-[0_0_12px_#0ea5e966]" style={{ color: skill.color }}>
                        <skill.icon />
                    </div>
                    <span className="mt-3 text-[10px] font-black text-gray-500 uppercase tracking-widest group-hover:text-white transition-colors">
                        {skill.name}
                    </span>
                    <div className="absolute top-1 right-2 text-[6px] font-mono text-gray-700 group-hover:text-[#0ea5e9]/40 uppercase tracking-widest">
                        CODE_{skill.name.substring(0,2).toUpperCase()}
                    </div>
                </div>

                {/* Simulated 3D Depth Layer */}
                <div className="absolute top-1.5 left-1.5 w-full h-full bg-[#111] rounded-2xl -z-10 border border-[#222]" />
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
                    <span className="text-[#0ea5e9] text-sm font-semibold tracking-widest uppercase">My Arsenal</span>
                </div>
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4"
                >
                    Technical <span className="text-[#0ea5e9]">Skills</span>
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
