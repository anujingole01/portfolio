import { motion, useScroll, useTransform } from 'framer-motion';
import { FaGraduationCap, FaMapMarkerAlt, FaLaptopCode } from 'react-icons/fa';
import { useRef } from 'react';

const EducationData = [
    {
        degree: "Bachelor of Technology",
        institution: "Lovely Professional University",
        duration: "Aug '24 - Present",
        subtitle: "Computer Science and Engineering",
        location: "Phagwara, Punjab",
        icon: <FaGraduationCap />
    },
    {
        degree: "Diploma",
        institution: "Lovely Professional University",
        duration: "Jul '22 - Jul '24",
        subtitle: "Computer Science and Engineering",
        location: "Phagwara, Punjab",
        icon: <FaLaptopCode />
    },
    {
        degree: "Intermediate",
        institution: "Abhyasa English School",
        duration: "Jun '20 - Mar '22",
        subtitle: "Science and Logic Focus",
        location: "Amravati, Maharashtra",
        icon: <FaGraduationCap />
    }
];

const Education = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });

    const glowColor = useTransform(scrollYProgress, [0, 0.5, 1], ["#f43f5e", "#fb7185", "#f43f5e"]);
    const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

    return (
        <section id="education" className="py-24 relative overflow-hidden bg-transparent snap-start">
            {/* Background Ambient Glow */}
            <div className="absolute top-1/2 left-0 w-full h-[800px] bg-gradient-to-r from-[#f43f5e]/5 to-transparent blur-[120px] pointer-events-none opacity-50" />

            <div className="max-w-[1200px] mx-auto px-6 md:px-12 w-full relative z-10" ref={containerRef}>
                
                <div className="flex flex-col items-center text-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center space-x-2 px-6 py-2 border border-[#f43f5e]/30 bg-[#f43f5e]/10 rounded-full text-[#f43f5e] text-xs font-black tracking-[0.2em] uppercase mb-6 shadow-[0_0_20px_rgba(244,63,94,0.2)]"
                    >
                        <FaGraduationCap size={14}/>
                        <span>Academic Path</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none"
                    >
                        Educational <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f43f5e] to-rose-400">Journey.</span>
                    </motion.h2>
                </div>

                <div className="relative">
                    {/* Modern Timeline Line */}
                    <div className="absolute left-[30px] md:left-1/2 top-4 bottom-0 w-[3px] md:w-[4px] bg-[#1a1a1a] md:-translate-x-1/2 rounded-full overflow-hidden">
                        <motion.div 
                            className="absolute top-0 left-0 w-full h-full origin-top"
                            style={{ 
                                scaleY, 
                                background: "linear-gradient(to bottom, transparent, #f43f5e, #fb7185, #f43f5e)",
                                boxShadow: "0 0 20px #f43f5e, 0 0 40px #fb7185" 
                            }}
                        />
                    </div>

                    <div className="space-y-16 md:space-y-24 pt-10">
                        {EducationData.map((item, index) => {
                            const isEven = index % 2 === 0;
                            return (
                                <div key={index} className="relative flex flex-col md:flex-row items-center justify-between w-full">
                                    
                                    {/* Timeline Node */}
                                    <motion.div 
                                        className="absolute left-[30px] md:left-1/2 top-10 md:top-1/2 -translate-x-1/2 md:-translate-y-1/2 w-16 h-16 bg-[#080808] border-2 border-[#1a1a1a] rounded-full z-30 flex items-center justify-center transition-all duration-500 hover:border-[#f43f5e] shadow-[0_0_20px_rgba(0,0,0,0.8)] hover:shadow-[0_0_25px_rgba(244,63,94,0.3)]"
                                    >
                                        {/* Inner glowing node */}
                                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#f43f5e]/20 to-transparent border border-[#f43f5e]/50 flex items-center justify-center text-[#f43f5e] shadow-[inset_0_0_10px_rgba(244,63,94,0.2)]">
                                            {item.icon}
                                        </div>
                                    </motion.div>

                                    {/* Empty Space for spacing */}
                                    <div className={`hidden md:block w-[45%] ${isEven ? 'order-last' : 'order-first'}`}></div>

                                    {/* Content Card */}
                                    <div className={`w-full md:w-[45%] pl-[85px] md:pl-0 mt-8 md:mt-0`}>
                                        <motion.div
                                            initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true, margin: "-100px" }}
                                            whileHover={{ y: -5 }}
                                            className="relative p-8 rounded-3xl bg-[#0a0a0a]/80 backdrop-blur-md border border-white/5 hover:border-[#f43f5e]/40 transition-all duration-300 shadow-xl"
                                        >
                                            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-8">
                                                <h3 className="text-2xl font-bold text-white tracking-tight leading-tight w-full sm:w-2/3">
                                                    {item.degree}
                                                </h3>
                                                <div className="flex-shrink-0">
                                                    <span className="inline-flex py-1.5 px-4 rounded-xl bg-[#111] border border-[#222] text-gray-400 text-xs font-mono tracking-widest whitespace-nowrap">
                                                        {item.duration}
                                                    </span>
                                                </div>
                                            </div>
                                            
                                            <div className="flex items-start gap-4 mb-6">
                                                <div className="w-10 h-10 rounded-xl bg-[#f43f5e]/10 border border-[#f43f5e]/20 flex items-center justify-center text-[#f43f5e] flex-shrink-0">
                                                    {item.icon}
                                                </div>
                                                <div className="pt-1">
                                                    <h4 className="text-lg font-semibold text-gray-200">
                                                        {item.institution}
                                                    </h4>
                                                </div>
                                            </div>

                                            <div className="pl-5 border-l-2 border-[#1a1a1a] ml-4 mb-8">
                                                <p className="text-gray-400 font-medium">
                                                    {item.subtitle}
                                                </p>
                                            </div>

                                            <div className="flex items-center gap-2 text-gray-500 bg-[#111] border border-[#1a1a1a] rounded-xl px-4 py-2 w-fit">
                                                <FaMapMarkerAlt size={12} className="text-[#f43f5e]/80" />
                                                <span className="text-sm font-medium">{item.location}</span>
                                            </div>
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
