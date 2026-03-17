import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaLinkedin, FaGithub } from 'react-icons/fa';
import { profile } from '../data/profile';

const Contact = () => {
    return (
        <section id="contact" className="py-32 relative overflow-hidden bg-transparent">
            {/* Background Ambient Glows */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0ea5e9]/10 rounded-full blur-[120px] pointer-events-none opacity-40" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-600/10 rounded-full blur-[100px] pointer-events-none opacity-30" />

            <div className="max-w-[1400px] mx-auto px-8 md:px-16 w-full relative z-10">
                <div className="flex flex-col items-center text-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center space-x-2 px-6 py-2 border border-[#222] bg-[#0A0A0A] rounded-full text-[#0ea5e9] text-xs font-black tracking-widest uppercase mb-6 shadow-2xl"
                    >
                        <FaEnvelope size={14}/>
                        <span>Let's Build Something</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-none"
                    >
                        Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0ea5e9] to-cyan-400">Touch.</span>
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-stretch">
                    
                    {/* Left Column: Direct Contact Info */}
                    <div className="flex flex-col space-y-8 h-full">
                        <div className="p-10 rounded-[3rem] bg-[#111] border border-[#222] h-full flex flex-col justify-between">
                            <div>
                                <h3 className="text-3xl font-black text-white mb-8 tracking-tighter">Connection Hub</h3>
                                <div className="space-y-10">
                                    <div className="flex items-start space-x-6 group">
                                        <div className="w-16 h-16 bg-[#1A1A1A] border border-[#333] group-hover:border-[#0ea5e9] rounded-[1.5rem] flex items-center justify-center text-[#0ea5e9] text-2xl transition-all duration-500 shadow-xl">
                                            <FaEnvelope />
                                        </div>
                                        <div>
                                            <h4 className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-1">Send a Message</h4>
                                            <p className="text-xl font-bold text-white group-hover:text-[#0ea5e9] transition-colors break-all">{profile.email}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-6 group">
                                        <div className="w-16 h-16 bg-[#1A1A1A] border border-[#333] group-hover:border-[#0ea5e9] rounded-[1.5rem] flex items-center justify-center text-[#0ea5e9] text-2xl transition-all duration-500 shadow-xl">
                                            <FaMapMarkerAlt />
                                        </div>
                                        <div>
                                            <h4 className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-1">Current Base</h4>
                                            <p className="text-xl font-bold text-white group-hover:text-[#0ea5e9] transition-colors">{profile.location}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Social Connectivity */}
                            <div className="mt-16 pt-10 border-t border-[#222]">
                                <h4 className="text-[10px] font-black text-gray-500 uppercase tracking-[0.3em] mb-8 text-center md:text-left">Network Links</h4>
                                <div className="flex flex-wrap gap-5 justify-center md:justify-start">
                                    <motion.a 
                                        href={profile.social.linkedin} 
                                        target="_blank" 
                                        rel="noreferrer"
                                        whileHover={{ y: -5, scale: 1.05 }}
                                        className="flex items-center space-x-4 px-8 py-5 rounded-[1.5rem] bg-[#0077b5]/10 border border-[#0077b5]/30 text-white hover:bg-[#0077b5] hover:border-transparent transition-all duration-300"
                                    >
                                        <FaLinkedin size={24} className="text-[#0077b5] group-hover:text-white" />
                                        <span className="font-black text-sm uppercase tracking-widest">LinkedIn</span>
                                    </motion.a>

                                    <motion.a 
                                        href={profile.social.github} 
                                        target="_blank" 
                                        rel="noreferrer"
                                        whileHover={{ y: -5, scale: 1.05 }}
                                        className="flex items-center space-x-4 px-8 py-5 rounded-[1.5rem] bg-white/5 border border-[#333] text-white hover:bg-white hover:text-black transition-all duration-300"
                                    >
                                        <FaGithub size={24} />
                                        <span className="font-black text-sm uppercase tracking-widest">GitHub</span>
                                    </motion.a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Interaction Form */}
                    <div className="bg-[#111] border border-[#222] p-12 md:p-16 rounded-[4rem] shadow-2xl relative overflow-hidden group">
                        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#0ea5e9] to-cyan-400" />
                        
                        <form className="space-y-12" onSubmit={(e) => e.preventDefault()}>
                            <div className="space-y-12">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                    <div className="relative group/field">
                                        <input type="text" id="user_name" className="w-full bg-transparent p-4 border-b-2 border-[#222] focus:border-[#0ea5e9] outline-none text-white text-xl font-bold transition-all peer placeholder:opacity-0" placeholder="Name" />
                                        <label htmlFor="user_name" className="absolute left-4 top-4 text-gray-500 transition-all peer-focus:-top-6 peer-focus:text-sm peer-focus:text-[#0ea5e9] peer-focus:font-black peer-[:not(:placeholder-shown)]:-top-6 peer-[:not(:placeholder-shown)]:text-sm uppercase tracking-widest">Name</label>
                                    </div>
                                    <div className="relative group/field">
                                        <input type="email" id="user_email" className="w-full bg-transparent p-4 border-b-2 border-[#222] focus:border-[#0ea5e9] outline-none text-white text-xl font-bold transition-all peer placeholder:opacity-0" placeholder="Email" />
                                        <label htmlFor="user_email" className="absolute left-4 top-4 text-gray-500 transition-all peer-focus:-top-6 peer-focus:text-sm peer-focus:text-[#0ea5e9] peer-focus:font-black peer-[:not(:placeholder-shown)]:-top-6 peer-[:not(:placeholder-shown)]:text-sm uppercase tracking-widest">Email</label>
                                    </div>
                                </div>

                                <div className="relative group/field">
                                    <textarea id="user_message" rows="4" className="w-full bg-transparent p-4 border-b-2 border-[#222] focus:border-[#0ea5e9] outline-none text-white text-xl font-bold transition-all peer placeholder:opacity-0 resize-none" placeholder="Message"></textarea>
                                    <label htmlFor="user_message" className="absolute left-4 top-4 text-gray-500 transition-all peer-focus:-top-6 peer-focus:text-sm peer-focus:text-[#0ea5e9] peer-focus:font-black peer-[:not(:placeholder-shown)]:-top-6 peer-[:not(:placeholder-shown)]:text-sm uppercase tracking-widest">Transmission</label>
                                </div>
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02, y: -2 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full py-8 bg-[#0ea5e9] text-white rounded-[2rem] flex items-center justify-center space-x-6 shadow-[0_20px_40px_rgba(14,165,233,0.3)] hover:shadow-[0_25px_50px_rgba(14,165,233,0.45)] transition-all duration-300"
                            >
                                <span className="text-sm font-black uppercase tracking-[0.5em]">Send Message</span>
                                <FaPaperPlane className="text-xl" />
                            </motion.button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
