import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { certifications } from '../data/certifications';
import { FaAward, FaExternalLinkAlt } from 'react-icons/fa';
import { useRef } from 'react';
import Marquee from 'react-fast-marquee';

const HolographicCard = ({ cert, index }) => {
    const ref = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const mouseX = useSpring(x, { stiffness: 400, damping: 30 });
    const mouseY = useSpring(y, { stiffness: 400, damping: 30 });
    const rotateX = useTransform(mouseY, [-0.5, 0.5], ["10deg", "-10deg"]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-10deg", "10deg"]);
    const glareX = useTransform(mouseX, [-0.5, 0.5], ["0%", "100%"]);
    const glareY = useTransform(mouseY, [-0.5, 0.5], ["0%", "100%"]);

    const handleMouseMove = (e) => {
        const rect = ref.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseXRel = e.clientX - rect.left;
        const mouseYRel = e.clientY - rect.top;
        const xPct = (mouseXRel / width) - 0.5;
        const yPct = (mouseYRel / height) - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <div className="mx-6 py-10">
            <motion.div
                ref={ref}
                style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className="relative w-[350px] md:w-[450px] aspect-video perspective-1000 group cursor-pointer"
            >
                {/* Colorful Galaxy Card Base */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#0a1120] via-[#050505] to-[#0a1120] rounded-2xl shadow-2xl overflow-hidden border border-white/10 transform-gpu transition-all duration-300 group-hover:border-[#0ea5e9]/50 group-hover:shadow-[0_0_40px_rgba(14,165,233,0.15)]">
                    
                    {/* Interior Cyan Glow */}
                    <div className="absolute -top-[20%] -right-[20%] w-[50%] h-[50%] bg-[#0ea5e9]/10 blur-[60px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    
                    <div className="absolute inset-0 z-0">
                        <img
                            src={cert.image}
                            alt={cert.title}
                            className="w-full h-full object-cover opacity-20 filter grayscale hover:grayscale-0 transition-all duration-700 transform scale-105 group-hover:scale-110"
                        />
                    </div>

                    <div className="relative z-10 h-full p-6 md:p-8 flex flex-col justify-between">
                        <div className="flex items-start justify-between">
                            <div className="w-12 h-12 md:w-14 md:h-14 bg-[#1C1C1C] rounded-full flex items-center justify-center text-[#0ea5e9] border border-[#2A2A2A] group-hover:scale-110 transition-transform shadow-lg">
                                <FaAward size={24} />
                            </div>
                            <div className="px-3 py-1 bg-[#1C1C1C]/80 backdrop-blur-md border border-[#2A2A2A] rounded-full text-[10px] font-mono text-gray-400 tracking-widest">
                                {cert.date}
                            </div>
                        </div>

                        <div>
                            <h3 className="text-lg md:text-xl font-bold text-white mb-2 line-clamp-2 leading-tight group-hover:text-[#0ea5e9] transition-colors">
                                {cert.title}
                            </h3>
                            <p className="text-gray-500 font-bold text-[10px] uppercase tracking-widest">
                                {cert.issuer}
                            </p>
                        </div>

                        <div className="pt-4 border-t border-white/5 flex justify-end">
                            {cert.link && cert.link !== '#' && (
                                <a href={cert.link} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-[10px] text-gray-500 hover:text-[#0ea5e9] transition-colors font-bold uppercase tracking-wider">
                                    <span>Verify</span>
                                    <FaExternalLinkAlt size={10} />
                                </a>
                            )}
                        </div>
                    </div>

                    <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-20 transition-opacity duration-300 mix-blend-overlay z-20"
                        style={{ background: 'linear-gradient(105deg, transparent 40%, rgba(14,165,233, 0.4) 45%, rgba(14,165,233, 0.4) 50%, transparent 54%)', backgroundSize: '200% 200%' }}
                    ></div>
                </div>
            </motion.div>
        </div>
    );
};

const Certifications = () => {
    return (
        <section id="certifications" className="py-24 relative overflow-hidden bg-transparent">
            {/* Background Cyber-Glows */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#0ea5e9]/10 blur-[150px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-700/5 blur-[120px] pointer-events-none" />

            <div className="max-w-[1400px] mx-auto px-6 w-full relative z-10">
                <div className="flex flex-col items-center text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center space-x-2 px-6 py-2 border border-[#0ea5e9]/30 bg-[#0ea5e9]/10 rounded-full text-[#0ea5e9] text-xs font-black tracking-[0.2em] uppercase mb-6 shadow-[0_0_20px_rgba(14,165,233,0.2)]"
                    >
                        <FaAward size={14}/>
                        <span>Verified Orbit</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-black text-white tracking-tighter"
                    >
                        Expertise <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0ea5e9] to-cyan-400">Sphere.</span>
                    </motion.h2>
                </div>

                <div className="w-full">
                    <Marquee 
                        gradient={true} 
                        gradientColor="#050505" 
                        gradientWidth={200}
                        speed={45} 
                        pauseOnHover={true}
                        className="overflow-visible"
                    >
                        {certifications.map((cert, index) => (
                            <HolographicCard key={index} cert={cert} index={index} />
                        ))}
                    </Marquee>
                </div>
            </div>
        </section>
    );
};

export default Certifications;
