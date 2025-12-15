import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
    return (
        <section id="projects" className="py-24 bg-white dark:bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight"
                    >
                        FEATURED <span className="text-blue-600">WORK</span>
                    </motion.h2>
                    <div className="w-24 h-1.5 bg-blue-600 mx-auto mt-4 rounded-full"></div>
                    <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        A selection of projects that showcase my passion for building robust and scalable applications.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative h-[400px] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500"
                        >
                            {/* Full Background Image */}
                            <img
                                src={project.image}
                                alt={project.title}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent opacity-90 group-hover:opacity-80 transition-opacity duration-500"></div>

                            {/* Content positioned at bottom */}
                            <div className="absolute bottom-0 left-0 w-full p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                <div className="mb-4">
                                    <div className="flex space-x-2 mb-3">
                                        {project.tags.slice(0, 3).map((tag, i) => (
                                            <span key={i} className="text-xs font-bold px-2 py-1 bg-blue-600/20 text-blue-300 rounded backdrop-blur-sm border border-blue-500/20">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-2 leading-tight">{project.title}</h3>
                                    <p className="text-gray-300 text-sm line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
                                        {project.description}
                                    </p>
                                </div>

                                <div className="flex space-x-4 pt-4 border-t border-gray-700/50">
                                    <a
                                        href={project.links.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center space-x-2 text-sm text-gray-300 hover:text-white transition-colors"
                                    >
                                        <FaGithub size={16} />
                                        <span>Code</span>
                                    </a>
                                    <a
                                        href={project.links.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center space-x-2 text-sm text-gray-300 hover:text-white transition-colors"
                                    >
                                        <FaExternalLinkAlt size={14} />
                                        <span>Live Demo</span>
                                    </a>
                                </div>
                            </div>

                            {/* Hover Overlay Highlight */}
                            <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-500/30 rounded-2xl transition-all duration-300 pointer-events-none"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
