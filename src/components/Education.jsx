import { motion, useScroll, useTransform } from 'framer-motion';
import { FaGraduationCap, FaUniversity } from 'react-icons/fa';
import { useRef } from 'react';

const EducationData = [
    {
        degree: "Bachelor of Technology - Computer Science and Engineering",
        institution: "Lovely Professional University, Phagwara, Punjab",
        duration: "Aug '24 - Present",
        description: "Specializing in advanced Computer Science logic and software engineering fundamentals.",
    },
    {
        degree: "Diploma - Computer Science and Engineering",
        institution: "Lovely Professional University, Phagwara, Punjab",
        duration: "Jul '22 - Jul '24",
        description: "Focus on foundational software engineering, algorithms, and technical computing skills.",
    },
    {
        degree: "Intermediate",
        institution: "Abhyasa English School, Amravati, Maharashtra",
        duration: "Jun '20 - Mar '22",
        description: "Completed secondary education with an early focus on science and logic.",
    }
];

const Education = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });

    const glowColor = useTransform(scrollYProgress, [0, 0.5, 1], ["#0ea5e9", "#06b6d4", "#22d3ee"]);
    const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

    return (
        <section id="education" className="py-32 relative overflow-hidden bg-transparent">
            {/* Background Ambient Glow */}
            <div className="absolute top-1/2 left-0 w-full h-[600px] bg-gradient-to-r from-[#0ea5e9]/10 to-transparent blur-[120px] pointer-events-none opacity-50" />

            <div className="max-w-[1300px] mx-auto px-6 md:px-12 w-full relative z-10" ref={containerRef}>
                <div className="flex flex-col items-center text-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center space-x-2 px-6 py-2 border border-[#2A2A2A] bg-[#111] rounded-full text-[#0ea5e9] text-xs font-black tracking-widest uppercase mb-6 shadow-xl shadow-[#0ea5e9]/5"
                    >
                        <FaGraduationCap size={16}/>
                        <span>The Learning Path</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none"
                    >
                        Academic <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0ea5e9] to-cyan-400">Foundation.</span>
                    </motion.h2>
                </div>

                <div className="relative">
                    {/* Modern Timeline Line */}
                    <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[4px] bg-[#1A1A1A] -translate-x-1/2 rounded-full overflow-hidden">
                        <motion.div 
                            className="absolute top-0 left-0 w-full bg-gradient-to-b from-[#0ea5e9] via-cyan-400 to-[#0ea5e9] shadow-[0_0_25px_#0ea5e9] origin-top"
                            style={{ scaleY, backgroundColor: glowColor }}
                        />
                    </div>

                    <div className="space-y-32">
                        {EducationData.map((item, index) => {
                            const isEven = index % 2 === 0;
                            return (
                                <div key={index} className="relative flex flex-col md:flex-row items-center justify-center w-full min-h-[300px]">
                                    {/* Timeline Node */}
                                    <motion.div 
                                        style={{ borderColor: glowColor }}
                                        className="absolute left-6 md:left-1/2 top-10 md:top-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-[#0A0A0A] border-4 rounded-[1.2rem] z-30 flex items-center justify-center shadow-[0_0_30px_rgba(14,165,233,0.3)] transition-all duration-500"
                                    >
                                        <FaUniversity className="text-[#0ea5e9] text-xl" />
                                    </motion.div>

                                    {/* Content Card */}
                                    <div className={`w-full md:w-1/2 ${isEven ? 'md:pr-24 md:text-right ml-16 md:ml-0' : 'md:pl-24 md:order-last ml-16 md:ml-0'}`}>
                                        <motion.div
                                            initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true, margin: "-100px" }}
                                            whileHover={{ y: -10, scale: 1.01 }}
                                            className="relative p-10 rounded-[2.8rem] bg-[#111] border border-[#222] hover:border-[#0ea5e9]/50 transition-all duration-500 group shadow-2xl overflow-hidden"
                                        >
                                            {/* Glowing Corner */}
                                            <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#0ea5e9]/10 rounded-full blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                            
                                            <div className={`mb-8 flex items-center ${isEven ? 'md:justify-end' : 'justify-start'}`}>
                                                <span className="px-5 py-2 rounded-2xl bg-[#0ea5e9]/10 border border-[#0ea5e9]/20 text-[#0ea5e9] text-[11px] font-black uppercase tracking-[0.25em]">
                                                    {item.duration}
                                                </span>
                                            </div>

                                            <h3 className="text-3xl md:text-4xl font-black text-white mb-4 tracking-tighter leading-tight group-hover:text-[#0ea5e9] transition-colors duration-500">
                                                {item.degree}
                                            </h3>
                                            
                                            <div className={`flex items-center space-x-3 mb-8 ${isEven ? 'md:justify-end' : 'justify-start'}`}>
                                                <span className="text-sm font-black text-gray-500 uppercase tracking-[0.2em]">{item.institution}</span>
                                            </div>

                                            <p className="text-gray-400 leading-relaxed font-medium text-lg md:text-xl">
                                                {item.description}
                                            </p>

                                            {/* Bottom Link Style Accents */}
                                            <div className={`mt-8 h-[2px] w-12 bg-[#0ea5e9]/30 group-hover:w-full transition-all duration-700 ${isEven ? 'md:ml-auto' : ''}`} />
                                        </motion.div>
                                    </div>

                                    {/* Background Date Marker (Desktop) */}
                                    <div className={`hidden md:flex w-1/4 ${isEven ? 'order-last justify-start pl-20' : 'justify-end pr-20'}`}>
                                        <motion.div 
                                            initial={{ opacity: 0 }}
                                            whileInView={{ opacity: 0.15 }}
                                            className="text-9xl font-black text-white select-none pointer-events-none font-mono"
                                        >
                                            {item.duration.substring(item.duration.indexOf("'") + 1, item.duration.indexOf("'") + 3)}
                                        </motion.div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
