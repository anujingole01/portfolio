import { motion } from 'framer-motion';
import { FaPaintBrush, FaLayerGroup, FaPenNib } from 'react-icons/fa';

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
    }
];

const Graphics = () => {
    return (
        <section id="graphics" className="py-24 relative overflow-hidden bg-[#0A0A0A]">
            
            {/* Background design accents */}
            <div className="absolute top-20 right-0 w-96 h-96 bg-[#FF7A00]/5 blur-[120px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-10 left-10 w-80 h-80 bg-purple-600/5 blur-[100px] rounded-full pointer-events-none"></div>

            <div className="max-w-[1300px] mx-auto px-8 md:px-16 w-full relative z-10">
                
                <div className="mb-16 flex flex-col md:flex-row items-center justify-between">
                    <div>
                        <span className="text-[#FF7A00] text-sm font-semibold tracking-widest uppercase block mb-2 flex items-center">
                            <FaPaintBrush className="mr-2" size={14}/> Visual Design
                        </span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-bold text-white tracking-tight"
                        >
                            Graphic <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-[#FF7A00]">Design</span>
                        </motion.h2>
                    </div>
                    <motion.p 
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="mt-6 md:mt-0 text-gray-400 text-base max-w-lg leading-relaxed text-left md:text-right border-l-2 md:border-l-0 md:border-r-2 border-[#FF7A00]/50 pl-4 md:pl-0 md:pr-4"
                    >
                        Blending aesthetics with functionality to create visually compelling, modern digital experiences and authentic brand identities.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {GraphicProjects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15, duration: 0.5 }}
                            className="group relative h-[380px] rounded-[2rem] overflow-hidden shadow-2xl transition-all duration-500 bg-[#161616] border border-[#2A2A2A] hover:border-[#FF7A00]/40 cursor-pointer"
                        >
                            {/* Image Background */}
                            <img
                                src={project.img}
                                alt={project.title}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter brightness-[0.6] group-hover:brightness-[0.4]"
                            />

                            {/* Content appearing on hover/bottom */}
                            <div className="absolute inset-x-0 bottom-0 p-8 flex flex-col justify-end h-full z-10">
                                
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/50 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>

                                <div className="relative z-20 translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                                    <div className="w-12 h-12 bg-[#FF7A00]/20 border border-[#FF7A00]/50 rounded-full flex items-center justify-center text-[#FF7A00] mb-4 backdrop-blur-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                        {project.icon}
                                    </div>
                                    <h3 className="text-sm font-semibold text-[#FF7A00] uppercase tracking-widest mb-1">{project.category}</h3>
                                    <h2 className="text-2xl font-bold text-white mb-2 leading-tight">{project.title}</h2>
                                    
                                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150 mt-4">
                                        <div className="h-0.5 w-12 bg-[#FF7A00] rounded-full"></div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Graphics;
