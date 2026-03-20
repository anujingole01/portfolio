import { motion } from 'framer-motion';
import { FaServer, FaLaptopCode, FaProjectDiagram, FaRocket } from 'react-icons/fa';

const Highlights = [
    {
        icon: <FaServer size={24} />,
        title: "Backend Systems",
        description: "Building secure REST APIs with Node.js, Express, JWT auth, and production-ready deployments."
    },
    {
        icon: <FaLaptopCode size={24} />,
        title: "Full-Stack Architecture",
        description: "Designing end-to-end MERN apps with clean UI, scalable APIs, and reliable databases."
    },
    {
        icon: <FaProjectDiagram size={24} />,
        title: "API Integration",
        description: "Connecting third-party services, webhooks, and external APIs into seamless data flows."
    },
    {
        icon: <FaRocket size={24} />,
        title: "Performance & DevOps",
        description: "Optimizing queries, containerizing with Docker, and deploying on Linux servers."
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
        <section id="about" className="py-32 relative overflow-hidden bg-transparent">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 w-full relative z-10">
                <div className="flex flex-col xl:flex-row gap-16 xl:gap-24 items-start">
                    
                    {/* Intro Column */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="w-full xl:w-5/12"
                    >
                        <div className="flex items-center space-x-4 mb-6">
                            <h3 className="text-[#0ea5e9] text-xs font-black tracking-[0.3em] uppercase">
                                Overview
                            </h3>
                            <div className="h-[1px] w-16 bg-[#0ea5e9]/50"></div>
                        </div>
                        
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-8">
                            Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0ea5e9] to-cyan-300">Scalable</span> Web Apps.
                        </h2>
                        
                        <div className="text-gray-400 text-lg md:text-xl font-medium leading-relaxed space-y-6">
                            <p>
                                I am a <strong>Full Stack Web Developer</strong> passionate about building scalable web applications and solving real-world problems through technology.
                            </p>
                            <p>
                                I specialize in the <strong>MERN stack</strong> and enjoy designing efficient backend systems, responsive user interfaces, and reliable full-stack architectures that feel fast and intuitive.
                            </p>
                            <p>
                                My work focuses on building modern applications with React.js, Node.js, Express.js, and MongoDB, while also working with relational databases like MySQL and PostgreSQL. I build secure REST APIs with authentication using JWT and lean on Docker, Git, and Linux to ship production-ready systems.
                            </p>
                            <p className="text-white border-l-2 border-[#0ea5e9] pl-6 italic">
                                "I'm currently focused on scalable system design, cloud native architectures, and shipping products that feel as good to maintain as they are to use."
                            </p>
                        </div>
                        
                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pb-8 border-b border-white/5">
                            {Stats.map((stat, idx) => (
                                <motion.div 
                                    key={idx}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 * idx }}
                                    className="flex flex-col items-start"
                                >
                                    <span className="text-4xl lg:text-5xl font-black text-white mb-2">{stat.value}</span>
                                    <span className="text-xs text-gray-500 uppercase tracking-widest font-bold">{stat.label}</span>
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
                        <div className="mb-10 text-center xl:text-left">
                            <h3 className="text-2xl font-bold text-white uppercase tracking-[0.2em] inline-block pb-4 border-b-2 border-[#0ea5e9]/30">
                                Professional Highlights
                            </h3>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {Highlights.map((hl, index) => (
                                <motion.div 
                                    key={index}
                                    whileHover={{ y: -8 }}
                                    className="bg-[#111111]/80 backdrop-blur-lg border border-[#222] hover:border-[#0ea5e9]/40 rounded-3xl p-8 shadow-2xl transition-all duration-300 group relative overflow-hidden"
                                >
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#0ea5e9]/5 rounded-bl-full pointer-events-none group-hover:bg-[#0ea5e9]/10 transition-colors" />
                                    
                                    <div className="w-14 h-14 bg-[#1a1a1a] rounded-2xl flex items-center justify-center text-[#0ea5e9] mb-8 border border-[#333] group-hover:bg-[#0ea5e9] group-hover:text-white group-hover:border-transparent transition-all shadow-lg">
                                        {hl.icon}
                                    </div>
                                    <h4 className="text-xl font-bold text-white mb-4">{hl.title}</h4>
                                    <p className="text-gray-400 leading-relaxed font-medium">
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
