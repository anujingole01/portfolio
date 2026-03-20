import { motion } from 'framer-motion';
import { FaPaintBrush, FaLayerGroup, FaPenNib } from 'react-icons/fa';
import Marquee from 'react-fast-marquee';

const GraphicProjects = [
    {
        title: 'Brand Identity Design',
        category: 'Logo & Branding',
        img: 'https://images.unsplash.com/photo-1626785779198-5c4a45a315f6?auto=format&fit=crop&q=80&w=800',
        icon: <FaPenNib />,
    },
    {
        title: 'UI/UX Mockups',
        category: 'Web Interface',
        img: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800',
        icon: <FaLayerGroup />,
    },
    {
        title: 'Creative Illustrations',
        category: 'Digital Art',
        img: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800',
        icon: <FaPaintBrush />,
    },
    {
        title: 'Motion Graphics',
        category: 'Animation',
        img: 'https://images.unsplash.com/photo-1551269901-5c5e14c25df2?auto=format&fit=crop&q=80&w=800',
        icon: <FaLayerGroup />,
    },
    {
        title: 'Social Media Assets',
        category: 'Marketing Design',
        img: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800',
        icon: <FaPenNib />,
    }
];

const Graphics = () => {
    return (
        <section id="graphics" className="py-24 relative overflow-hidden bg-transparent">
            {/* Background design accents removed */}

            <div className="max-w-[1400px] mx-auto px-6 w-full relative z-10">
                <div className="text-center mb-16">
                    <span className="text-[#0ea5e9] text-xs font-black tracking-[0.4em] uppercase block mb-4 bg-[#0ea5e9]/10 w-fit mx-auto px-4 py-1.5 rounded-full border border-[#0ea5e9]/20">
                        Visual Arts
                    </span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-black text-white tracking-tighter"
                    >
                        Creative <span className="text-[#0ea5e9]">Canvas.</span>
                    </motion.h2>
                </div>

                <div className="w-full">
                    <Marquee 
                        speed={35} 
                        gradient={true} 
                        gradientColor="#050505" 
                        gradientWidth={100}
                        pauseOnHover={true}
                        direction="right"
                        className="overflow-visible"
                    >
                        {GraphicProjects.map((project, index) => (
                            <div key={index} className="px-6 py-10">
                                <motion.div
                                    whileHover={{ y: -10, scale: 1.02 }}
                                    className="relative w-[320px] h-[400px] rounded-[2.5rem] bg-gradient-to-b from-[#0e1624] to-[#050505] border border-white/10 overflow-hidden group shadow-2xl transition-all duration-500 hover:border-[#0ea5e9]/50 cursor-pointer"
                                >
                                    {/* Inner Glow and Glassmorphism */}
                                    <div className="absolute inset-0 bg-[#0ea5e9]/5 opacity-0 group-hover:opacity-100 transition-opacity" />

                                    <img 
                                        src={project.img} 
                                        alt={project.title} 
                                        className="w-full h-full object-cover opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000 filter grayscale group-hover:grayscale-0" 
                                    />
                                    
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/40 to-transparent p-8 flex flex-col justify-end">
                                        <div className="w-12 h-12 rounded-2xl bg-[#0ea5e9]/20 backdrop-blur-md border border-[#0ea5e9]/30 flex items-center justify-center text-[#0ea5e9] mb-4 group-hover:bg-[#0ea5e9] group-hover:text-black transition-all duration-500 shadow-[0_0_15px_rgba(14,165,233,0.3)]">
                                            {project.icon}
                                        </div>
                                        <p className="text-[#0ea5e9] text-[10px] font-black uppercase tracking-[0.3em] mb-2">{project.category}</p>
                                        <h3 className="text-xl font-bold text-white group-hover:text-[#0ea5e9] transition-colors">{project.title}</h3>
                                        
                                        {/* Bottom Accent Line */}
                                        <div className="mt-4 h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-transparent via-[#0ea5e9] to-transparent transition-all duration-700 opacity-50" />
                                    </div>
                                </motion.div>
                            </div>
                        ))}
                    </Marquee>
                </div>
            </div>
        </section>
    );
};

export default Graphics;
