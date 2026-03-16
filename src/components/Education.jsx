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

    const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

    return (
        <section id="education" className="py-24 relative overflow-hidden bg-[#0A0A0A]">
            <div className="max-w-[1300px] mx-auto px-6 md:px-12 w-full relative z-10" ref={containerRef}>
                <div className="text-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center space-x-2 px-4 py-2 border border-[#2A2A2A] bg-[#161616] rounded-full text-[#0ea5e9] text-xs font-black tracking-widest uppercase mb-6 shadow-lg shadow-[#0ea5e9]/5"
                    >
                        <FaGraduationCap size={16}/>
                        <span>Academic Journey</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-black text-white tracking-tighter"
                    >
                        Education <span className="text-[#0ea5e9] bg-clip-text text-transparent bg-gradient-to-r from-[#0ea5e9] to-cyan-200">Timeline</span>
                    </motion.h2>
                </div>

                <div className="relative mx-auto mt-12 max-w-5xl">
                    {/* The glowing central line (Only visible on MD and up) */}
                    <div className="absolute hidden md:block left-1/2 top-0 bottom-0 w-1 bg-[#1A1A1A] -translate-x-1/2 rounded-full overflow-hidden">
                        <motion.div 
                            className="absolute top-0 left-0 w-full bg-[#0ea5e9] shadow-[0_0_15px_#0ea5e9] origin-top h-full"
                            style={{ scaleY }}
                        />
                    </div>

                    {/* The left line for Mobile only */}
                    <div className="absolute md:hidden left-6 top-0 bottom-0 w-1 bg-[#1A1A1A] rounded-full overflow-hidden">
                        <motion.div 
                            className="absolute top-0 left-0 w-full bg-[#0ea5e9] shadow-[0_0_15px_#0ea5e9] origin-top h-full"
                            style={{ scaleY }}
                        />
                    </div>

                    {/* Timeline items */}
                    <div className="space-y-16">
                        {EducationData.map((item, index) => {
                            const isEven = index % 2 === 0;
                            return (
                                <div key={index} className={`relative flex flex-col md:flex-row items-center justify-between w-full`}>
                                    
                                    {/* Central glowing node (Desktop) */}
                                    <div className="absolute hidden md:flex left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-[#0A0A0A] border-4 border-[#0ea5e9] rounded-full items-center justify-center z-20 shadow-[0_0_20px_rgba(14,165,233,0.4)]">
                                        <FaUniversity className="text-[#0ea5e9] text-lg" />
                                    </div>

                                    {/* Mobile glowing node */}
                                    <div className="absolute md:hidden left-6 top-8 -translate-x-1/2 w-10 h-10 bg-[#0A0A0A] border-[3px] border-[#0ea5e9] rounded-full flex items-center justify-center z-20 shadow-[0_0_15px_rgba(14,165,233,0.4)]">
                                        <FaUniversity className="text-[#0ea5e9] text-sm" />
                                    </div>

                                    {/* Left Space (or Card if even) */}
                                    <div className={`w-full md:w-5/12 ml-14 md:ml-0 ${isEven ? 'md:pr-12 md:text-right' : 'md:order-last md:pl-12 md:text-left'}`}>
                                        <motion.div
                                            initial={{ opacity: 0, x: isEven ? -50 : 50, rotateY: isEven ? -10 : 10 }}
                                            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                                            whileHover={{ scale: 1.02 }}
                                            viewport={{ once: true }}
                                            transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.1 }}
                                            className={`relative p-8 rounded-3xl bg-gradient-to-b from-[#141414] to-[#111111] border border-[#2A2A2A] hover:border-[#0ea5e9]/60 shadow-2xl transition-all duration-300 group ${isEven ? 'origin-right' : 'origin-left'}`}
                                        >
                                            <div className="absolute inset-0 bg-gradient-to-br from-[#0ea5e9]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none" />
                                            
                                            <motion.span 
                                                className={`inline-block px-4 py-1.5 mb-5 text-xs font-bold text-[#0ea5e9] bg-[#0ea5e9]/10 rounded-full uppercase tracking-widest ${isEven ? 'md:ml-auto' : ''}`}
                                            >
                                                {item.duration}
                                            </motion.span>
                                            
                                            <h3 className="text-2xl md:text-3xl font-black text-white mb-2 tracking-tight group-hover:text-[#0ea5e9] transition-colors">{item.degree}</h3>
                                            <h4 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-6">{item.institution}</h4>
                                            
                                            <p className="text-gray-400 leading-relaxed font-medium">
                                                {item.description}
                                            </p>
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
