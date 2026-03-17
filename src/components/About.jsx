import { motion } from 'framer-motion';
import { profile } from '../data/profile';

const About = () => {
    return (
        <section id="about" className="py-24 relative overflow-hidden">
            <div className="max-w-[1300px] mx-auto px-8 md:px-16">
                <div className="flex flex-col md:flex-row items-center justify-between gap-16">
                    
                    {/* Left Image Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="w-full md:w-5/12 relative"
                    >
                        <div className="relative z-10 p-2 bg-[#111] border border-[#222] rounded-2xl shadow-2xl group cursor-pointer">
                            <img
                                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800"
                                alt="Coding setup"
                                className="rounded-xl w-full h-auto object-cover grayscale-[30%] contrast-125 group-hover:grayscale-0 transition-all duration-500"
                            />
                            {/* Decorative Corner Elements */}
                            <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-[#0ea5e9] rounded-tl-lg"></div>
                            <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-[#0ea5e9] rounded-br-lg"></div>
                        </div>
                        {/* Blob Background effect */}
                         {/* Removed Background Effect */}
                    </motion.div>

                    {/* Right Content Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                        className="w-full md:w-7/12"
                    >
                        <div className="mb-4">
                            <h3 className="text-[#0ea5e9] text-lg font-medium tracking-widest uppercase mb-1">About Me</h3>
                            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                                I'm {profile.name}, a <span className="text-[#0ea5e9]">{profile.role}</span>
                            </h2>
                        </div>
                        
                        <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                            {profile.bio}
                        </p>
                        <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                            I am currently studying <strong className="text-gray-200">{profile.degree}</strong> at <strong className="text-gray-200">{profile.university}</strong>.
                            My journey in web development started with a curiosity for how things work on the internet, and it has evolved into a passion for building robust and scalable applications.
                        </p>

                        <div className="grid grid-cols-2 gap-6">
                            <div className="p-6 bg-[#161616] border border-[#2A2A2A] rounded-2xl flex flex-col justify-center transition-all duration-300 hover:border-[#0ea5e9]/50 hover:bg-[#1C1C1C] hover:-translate-y-1">
                                <h4 className="font-bold text-[#0ea5e9] text-3xl mb-1">20+</h4>
                                <p className="text-sm text-gray-400 font-medium">Projects Built</p>
                            </div>
                            <div className="p-6 bg-[#161616] border border-[#2A2A2A] rounded-2xl flex flex-col justify-center transition-all duration-300 hover:border-[#0ea5e9]/50 hover:bg-[#1C1C1C] hover:-translate-y-1">
                                <h4 className="font-bold text-[#0ea5e9] text-3xl mb-1">3+</h4>
                                <p className="text-sm text-gray-400 font-medium">Hackathons & Events</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
