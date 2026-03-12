import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { certifications } from '../data/certifications';
import { FaAward, FaExternalLinkAlt } from 'react-icons/fa';
import { useRef } from 'react';

const HolographicCard = ({ cert, index }) => {
    const ref = useRef(null);

    // Mouse position state
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Smooth spring animation for rotation
    const mouseX = useSpring(x, { stiffness: 400, damping: 30 });
    const mouseY = useSpring(y, { stiffness: 400, damping: 30 });

    const rotateX = useTransform(mouseY, [-0.5, 0.5], ["10deg", "-10deg"]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-10deg", "10deg"]);

    // Glare moves opposite to rotation
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
        <motion.div
            ref={ref}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="relative w-full aspect-[4/3] md:aspect-video perspective-1000 group cursor-pointer"
        >
            <div className="absolute inset-0 bg-[#161616] rounded-2xl shadow-xl overflow-hidden border border-[#2A2A2A] transform-gpu transition-all duration-300 group-hover:border-[#FF7A00]/50 group-hover:shadow-[0_0_30px_rgba(255,122,0,0.15)]">

                {/* Background Image & Overlay */}
                <div className="absolute inset-0 z-0">
                    <img
                        src={cert.image}
                        alt={cert.title}
                        className="w-full h-full object-cover opacity-30 grayscale group-hover:grayscale-0 group-hover:opacity-60 transition-all duration-500 transform scale-105 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0C] via-[#0C0C0C]/80 to-transparent"></div>
                </div>

                {/* Content Layer */}
                <div className="relative z-10 h-full p-8 flex flex-col justify-between">
                    <div className="flex items-start justify-between">
                        <div className="w-14 h-14 bg-[#1C1C1C] rounded-full flex items-center justify-center text-[#FF7A00] border border-[#2A2A2A] group-hover:scale-110 transition-transform shadow-lg">
                            <FaAward size={28} />
                        </div>
                        <div className="px-4 py-1.5 bg-[#1C1C1C]/80 backdrop-blur-md border border-[#2A2A2A] rounded-full text-xs font-mono text-gray-400 tracking-widest">
                            {cert.date}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-2xl font-bold text-white mb-2 line-clamp-2 leading-tight group-hover:text-[#FF7A00] transition-colors">
                            {cert.title}
                        </h3>
                        <p className="text-gray-400 font-medium text-sm tracking-wide uppercase">
                            {cert.issuer}
                        </p>
                    </div>

                    <div className="pt-5 border-t border-[#2A2A2A] flex justify-end">
                        {cert.link && cert.link !== '#' && (
                            <a
                                href={cert.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center space-x-2 text-sm text-gray-500 hover:text-[#FF7A00] transition-colors font-medium"
                            >
                                <span>Verify Credential</span>
                                <FaExternalLinkAlt size={12} />
                            </a>
                        )}
                    </div>
                </div>

                {/* Holographic Gradient Overlay */}
                <div
                    className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-20 transition-opacity duration-300 mix-blend-overlay z-20"
                    style={{
                        background: 'linear-gradient(105deg, transparent 40%, rgba(255, 122, 0, 0.4) 45%, rgba(255, 122, 0, 0.4) 50%, transparent 54%)',
                        backgroundSize: '200% 200%',
                    }}
                ></div>

                {/* Dynamic Glare Spot */}
                <motion.div
                    className="absolute inset-0 pointer-events-none rounded-2xl z-20"
                    style={{
                        background: useTransform(
                            glareX,
                            x => `radial-gradient(circle at ${x} ${glareY.get()}, rgba(255,122,0,0.15), transparent 60%)`
                        ),
                        opacity: useTransform(mouseX, [-0.5, 0.5], [0, 1])
                    }}
                />
            </div>
        </motion.div>
    );
};

const Certifications = () => {
    return (
        <section id="certifications" className="py-24 relative overflow-hidden bg-gradient-to-b from-transparent to-[#0A0A0A]">
            
            <div className="max-w-[1300px] mx-auto px-8 md:px-16 w-full relative z-10">
                <div className="text-center mb-16">
                    <span className="text-[#FF7A00] text-sm font-semibold tracking-widest uppercase block mb-2">Qualifications</span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4"
                    >
                        Certified <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-[#FF7A00]">Professional</span>
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto perspective-2000">
                    {certifications.map((cert, index) => (
                        <HolographicCard key={index} cert={cert} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
