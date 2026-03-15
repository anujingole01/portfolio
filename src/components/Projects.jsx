import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
    return (
        <section id="projects" className="py-24 relative overflow-hidden">
            <div className="max-w-[1300px] mx-auto px-8 md:px-16 w-full">
                
                <div className="mb-16">
                    <span className="text-[#0ea5e9] text-sm font-semibold tracking-widest uppercase block mb-2">My Portfolio</span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-white tracking-tight"
                    >
                        Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-[#0ea5e9]">Work</span>
                    </motion.h2>
                    <p className="mt-4 text-gray-400 text-lg max-w-2xl leading-relaxed">
                        A selection of projects that showcase my passion for building robust and scalable applications.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="group relative h-[420px] rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 bg-[#161616] border border-[#2A2A2A] hover:border-[#0ea5e9]/50"
                        >
                            {/* Full Background Image */}
                            <img
                                src={project.image}
                                alt={project.title}
                                className="absolute inset-0 w-full h-[60%] object-cover transition-transform duration-700 group-hover:scale-105"
                            />

                            {/* Content positioned at bottom half */}
                            <div className="absolute bottom-0 left-0 w-full h-[55%] bg-[#1A1A1A] border-t border-[#2A2A2A] p-6 flex flex-col justify-between z-10">
                                
                                {/* Gradient fade linking image to text */}
                                <div className="absolute -top-10 left-0 w-full h-10 bg-gradient-to-t from-[#1A1A1A] to-transparent"></div>

                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2 leading-tight group-hover:text-[#0ea5e9] transition-colors">{project.title}</h3>
                                    <p className="text-gray-400 text-sm line-clamp-2">
                                        {project.description}
                                    </p>
                                </div>
                                
                                <div className="flex flex-wrap gap-2 mt-3 mb-4">
                                    {project.tags.slice(0, 3).map((tag, i) => (
                                        <span key={i} className="text-[10px] font-bold px-2 py-1 bg-[#2A2A2A] text-gray-300 rounded uppercase tracking-wider">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex space-x-6 pt-3 border-t border-[#2A2A2A]">
                                    <a
                                        href={project.links.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center space-x-2 text-sm text-gray-400 hover:text-[#0ea5e9] transition-colors"
                                    >
                                        <FaGithub size={16} />
                                        <span>Code</span>
                                    </a>
                                    <a
                                        href={project.links.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center space-x-2 text-sm text-gray-400 hover:text-[#0ea5e9] transition-colors"
                                    >
                                        <FaExternalLinkAlt size={14} />
                                        <span>Live Demo</span>
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
