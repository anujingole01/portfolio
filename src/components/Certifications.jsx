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
    const mouseX = useSpring(x, { stiffness: 500, damping: 30 });
    const mouseY = useSpring(y, { stiffness: 500, damping: 30 });

    const rotateX = useTransform(mouseY, [-0.5, 0.5], ["15deg", "-15deg"]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-15deg", "15deg"]);

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
            <div className="absolute inset-0 bg-gray-900 rounded-xl shadow-xl overflow-hidden border border-gray-700 transform-gpu transition-shadow duration-300 group-hover:shadow-2xl">

                {/* Background Image & Overlay */}
                <div className="absolute inset-0 z-0">
                    <img
                        src={cert.image}
                        alt={cert.title}
                        className="w-full h-full object-cover opacity-60 group-hover:opacity-70 transition-opacity duration-300 transform scale-105 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent"></div>
                </div>

                {/* Content Layer */}
                <div className="relative z-10 h-full p-6 flex flex-col justify-between">
                    <div className="flex items-start justify-between">
                        <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-blue-400 border border-white/20">
                            <FaAward size={24} />
                        </div>
                        <div className="px-3 py-1 bg-black/40 backdrop-blur-md border border-white/10 rounded-full text-xs font-mono text-gray-300">
                            {cert.date}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold text-white mb-2 line-clamp-2 leading-tight drop-shadow-md">
                            {cert.title}
                        </h3>
                        <p className="text-blue-300 font-medium text-sm">
                            {cert.issuer}
                        </p>
                    </div>

                    <div className="pt-4 border-t border-white/10 flex justify-end">
                        {cert.link && cert.link !== '#' && (
                            <a
                                href={cert.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center space-x-2 text-sm text-gray-300 hover:text-white transition-colors"
                            >
                                <span>Verify Credential</span>
                                <FaExternalLinkAlt size={10} />
                            </a>
                        )}
                    </div>
                </div>

                {/* Holographic Gradient Overlay */}
                <div
                    className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-40 transition-opacity duration-300 mix-blend-overlay z-20"
                    style={{
                        background: 'linear-gradient(105deg, transparent 40%, rgba(255, 255, 255, 0.8) 45%, rgba(132, 50, 255, 0.6) 50%, transparent 54%)',
                        backgroundSize: '200% 200%',
                    }}
                ></div>

                {/* Dynamic Glare Spot */}
                <motion.div
                    className="absolute inset-0 pointer-events-none rounded-xl z-20"
                    style={{
                        background: useTransform(
                            glareX,
                            x => `radial-gradient(circle at ${x} ${glareY.get()}, rgba(255,255,255,0.3), transparent 60%)`
                        ),
                        opacity: useTransform(mouseX, [-0.5, 0.5], [0, 0.6])
                    }}
                />
            </div>
        </motion.div>
    );
};

const Certifications = () => {
    return (
        <section id="certifications" className="py-24 bg-gray-50 dark:bg-[#0b1120] relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-40">
                <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl"></div>
                <div className="absolute top-[40%] -left-[10%] w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight mb-2"
                    >
                        CERTIFIED <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">PROFESSIONAL</span>
                    </motion.h2>
                    <p className="text-gray-500 dark:text-gray-400 font-mono text-sm uppercase tracking-widest">
                        // VALIDATED EXPERTISE
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto perspective-2000">
                    {certifications.map((cert, index) => (
                        <HolographicCard key={index} cert={cert} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
