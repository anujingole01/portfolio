import { motion } from 'framer-motion';
import { FaServer, FaLaptopCode, FaProjectDiagram, FaRocket } from 'react-icons/fa';

const Highlights = [
    {
        icon: <FaServer size={20} />,
        title: "Backend Systems",
        description: "Building secure REST APIs with Node.js, Express, JWT auth."
    },
    {
        icon: <FaLaptopCode size={20} />,
        title: "Full-Stack Architecture",
        description: "Designing end-to-end MERN apps with clean UI, scalable APIs."
    },
    {
        icon: <FaProjectDiagram size={20} />,
        title: "API Integration",
        description: "Connecting third-party services and webhooks into data flows."
    },
    {
        icon: <FaRocket size={20} />,
        title: "Performance & DevOps",
        description: "Optimizing queries, dockerizing, and shipping on Linux."
    }
];

const Stats = [
    { value: "10+", label: "Projects Completed" },
    { value: "12+", label: "Tech Stack" },
    { value: "2+", label: "Years Coding" },
    { value: "∞", label: "Curiosity" }
];

const About = () => {
    return (
        <section id="about" className="relative h-[100svh] w-full flex flex-col justify-center bg-transparent overflow-hidden snap-start">
            <div className="max-w-7xl mx-auto px-6 md:px-12 w-full mt-10 relative z-10">
                <div className="flex flex-col xl:flex-row gap-10 xl:gap-16 items-center">
                    
                    {/* Intro Column */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="w-full xl:w-5/12"
                    >
                        <div className="flex items-center space-x-3 mb-4">
                            <h3 className="text-rose-500 text-[10px] font-black tracking-[0.3em] uppercase">
                                Overview
                            </h3>
                            <div className="h-[1px] w-12 bg-rose-500/50"></div>
                        </div>
                        
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight mb-6 hidden md:block">
                            Building <span className="text-rose-500">Scalable</span> Web Apps.
                        </h2>
                        
                        <div className="text-gray-400 text-sm font-medium leading-relaxed space-y-4 line-clamp-4 lg:line-clamp-none">
                            <p>
                                I specialize in the <strong>MERN stack</strong> and enjoy designing efficient backend systems, responsive user interfaces, and reliable full-stack architectures that feel fast and intuitive.
                            </p>
                            <p>
                                My work focuses on building modern applications with React.js, Node.js, Express.js, and MongoDB, building secure REST APIs, and using Docker/Linux to ship code.
                            </p>
                            <p className="text-white border-l-2 border-rose-500 pl-4 italic hidden sm:block">
                                "I'm currently focused on scalable system design, cloud native architectures, and shipping scalable products."
                            </p>
                        </div>
                        
                        <div className="grid grid-cols-4 gap-4 mt-8 pb-4 border-b border-white/5">
                            {Stats.map((stat, idx) => (
                                <motion.div 
                                    key={idx}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 * idx }}
                                    className="flex flex-col items-start"
                                >
                                    <span className="text-2xl lg:text-3xl font-black text-white mb-1">{stat.value}</span>
                                    <span className="text-[9px] text-gray-500 uppercase tracking-widest font-bold">{stat.label}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Highlights Column */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="w-full xl:w-7/12"
                    >
                        <div className="grid grid-cols-2 gap-4 md:gap-6">
                            {Highlights.map((hl, index) => (
                                <motion.div 
                                    key={index}
                                    whileHover={{ y: -4 }}
                                    className="bg-[#111111]/80 backdrop-blur-lg border border-white/10 hover:border-rose-500/40 rounded-2xl p-5 md:p-6 shadow-2xl transition-all duration-300 group relative overflow-hidden"
                                >
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-rose-500/5 rounded-bl-full pointer-events-none group-hover:bg-rose-500/10 transition-colors" />
                                    
                                    <div className="w-10 h-10 bg-[#1a1a1a] rounded-xl flex items-center justify-center text-rose-500 mb-4 border border-white/5 group-hover:bg-rose-500 group-hover:text-white group-hover:border-transparent transition-all shadow-lg">
                                        {hl.icon}
                                    </div>
                                    <h4 className="text-sm md:text-md font-bold text-white mb-2">{hl.title}</h4>
                                    <p className="text-gray-400 text-[10px] sm:text-xs leading-relaxed font-medium">
                                        {hl.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default About;
