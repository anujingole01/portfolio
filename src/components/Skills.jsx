import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { skills } from '../data/skills';
import { useRef } from 'react';

const SkillNode = ({ skill, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05, type: "spring", stiffness: 200, damping: 20 }}
            className="group relative flex flex-col items-center justify-center cursor-pointer m-4 md:m-6 z-10 w-24 h-32 md:w-32 md:h-36"
        >
            {/* Dashed connection lines to simulate constellation (purely decorative) */}
            <div className="absolute top-1/2 left-1/2 w-[120%] h-[1px] border-t-[1.5px] border-dashed border-gray-700/40 -z-10 transform origin-left rotate-12 hidden md:block group-hover:border-[#0ea5e9]/50 transition-colors duration-500" />
            <div className="absolute top-1/2 left-1/2 w-[120%] h-[1px] border-t-[1.5px] border-dashed border-gray-700/40 -z-10 transform origin-left -rotate-[60deg] hidden md:block group-hover:border-[#0ea5e9]/50 transition-colors duration-500" />

            {/* Main Node */}
            <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#080808] border border-[#2a2a2a] flex items-center justify-center shadow-[0_0_15px_rgba(0,0,0,0.8)] transition-all duration-500 group-hover:border-[#0ea5e9] group-hover:shadow-[0_0_25px_rgba(14,165,233,0.4)] group-hover:-translate-y-2 group-hover:scale-105">
                {/* Glowing Aura on Hover */}
                <div className="absolute inset-0 rounded-full bg-[#0ea5e9] opacity-0 group-hover:opacity-[0.05] transition-opacity duration-300 blur-md" />
                <div className="absolute -inset-2 rounded-full border border-[#0ea5e9]/20 opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" />
                
                <div 
                    className="text-3xl md:text-4xl filter drop-shadow-[0_0_8px_rgba(0,0,0,1)] group-hover:drop-shadow-[0_0_15px_currentColor] transition-all duration-500 z-10" 
                    style={{ color: skill.color }}
                >
                    <skill.icon />
                </div>
            </div>

            {/* Label */}
            <div className="absolute bottom-0 mt-2 bg-[#111111]/90 backdrop-blur-sm border border-[#333] px-4 py-1.5 rounded-full opacity-80 group-hover:opacity-100 group-hover:border-[#0ea5e9]/60 transition-all duration-500 translate-y-4 group-hover:translate-y-6">
                <span className="text-[10px] md:text-ws font-bold text-gray-400 group-hover:text-white uppercase tracking-wider block text-center whitespace-nowrap">
                    {skill.name}
                </span>
            </div>
        </motion.div>
    );
};

const ConstellationCategory = ({ category, items, index }) => {
    const ref = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
    const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["3deg", "-3deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-3deg", "3deg"]);

    const handleMouseMove = (e) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="mb-24 w-full relative perspective-1000"
        >
            <div className="flex items-center justify-center mb-10 w-full" style={{ transform: "translateZ(30px)" }}>
                 <div className="h-[1px] bg-gradient-to-r from-transparent via-[#0ea5e9]/50 to-transparent flex-grow max-w-[80px] md:max-w-[250px]"></div>
                 <h3 className="text-xl md:text-2xl font-bold text-white tracking-[0.2em] uppercase mx-4 md:mx-8 text-center drop-shadow-[0_0_15px_rgba(14,165,233,0.4)] border border-[#0ea5e9]/20 px-6 py-2.5 rounded-full bg-[#0ea5e9]/5 backdrop-blur-md">
                     {category}
                 </h3>
                 <div className="h-[1px] bg-gradient-to-r from-transparent via-[#0ea5e9]/50 to-transparent flex-grow max-w-[80px] md:max-w-[250px]"></div>
            </div>

            <div 
               className="relative max-w-[1200px] mx-auto flex flex-wrap justify-center items-center rounded-[2.5rem] p-6 md:p-12 z-10" 
               style={{ transform: "translateZ(10px)" }}
            >
                {/* Decorative glowing orb behind the constellation */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-[#0ea5e9]/5 rounded-full blur-[100px] -z-20 pointer-events-none" />
                
                {items.map((skill, idx) => (
                    <SkillNode key={skill.name} skill={skill} index={idx} />
                ))}
            </div>
        </motion.div>
    );
};

const Skills = () => {
    return (
        <section id="skills" className="py-24 relative overflow-hidden bg-[#050505] flex flex-col items-center justify-center">

            {/* Subtle Deep Space Grid */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
                style={{
                    backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }}
            ></div>

            <div className="text-center mb-24 relative z-10 w-full px-8 md:px-16">
                <div className="mb-4">
                    <span className="text-[#0ea5e9] text-sm font-semibold tracking-[0.3em] uppercase bg-[#0ea5e9]/10 px-4 py-1.5 rounded-full border border-[#0ea5e9]/20">
                        Tech Universe
                    </span>
                </div>
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl font-bold text-white tracking-tight mt-6"
                >
                    Technical <span className="text-[#0ea5e9]">Orbit</span>
                </motion.h2>
            </div>

            <div className="w-full px-4 md:px-8 lg:px-16">
                {skills.map((skillCategory, index) => (
                    <ConstellationCategory 
                        key={skillCategory.category} 
                        category={skillCategory.category} 
                        items={skillCategory.items} 
                        index={index} 
                    />
                ))}
            </div>

        </section>
    );
};

export default Skills;

