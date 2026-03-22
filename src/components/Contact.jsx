import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaLinkedin, FaGithub, FaTerminal } from 'react-icons/fa';
import { profile } from '../data/profile';

const Contact = () => {
    return (
        <section id="contact" className="py-32 relative overflow-hidden bg-transparent">
            {/* Ambient Galaxy Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[#0ea5e9]/10 to-transparent blur-[150px] pointer-events-none" />

            <div className="max-w-[1300px] mx-auto px-6 md:px-12 w-full relative z-10">
                <div className="flex flex-col items-center text-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center space-x-2 px-6 py-2 border border-[#0ea5e9]/30 bg-[#0ea5e9]/10 rounded-full text-[#0ea5e9] text-xs font-black tracking-[0.2em] uppercase mb-6 shadow-[0_0_20px_rgba(14,165,233,0.2)] backdrop-blur-md"
                    >
                        <FaTerminal size={14}/>
                        <span>Let's Connect</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none"
                    >
                        Initiate <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0ea5e9] to-cyan-400">Contact.</span>
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    
                    {/* Left Column: Direct Contact Info (HUD Style) */}
                    <div className="flex flex-col space-y-10">
                        <div className="relative p-10 md:p-14 rounded-[2.5rem] bg-[#0A0A0A]/50 backdrop-blur-xl border border-white/10 shadow-2xl group overflow-hidden hover:border-[#0ea5e9]/40 transition-colors duration-500">
                            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#0ea5e9]/50 to-transparent" />
                            <h3 className="text-2xl font-bold text-white mb-10 tracking-wide uppercase flex items-center gap-3">
                                <span className="w-2 h-8 bg-[#0ea5e9] rounded-full inline-block animate-pulse" />
                                Communications
                            </h3>
                            
                            <div className="space-y-8">
                                <div className="flex items-center space-x-6 group/item cursor-pointer">
                                    <div className="w-16 h-16 bg-[#111] border border-white/5 group-hover/item:border-[#0ea5e9]/50 group-hover/item:bg-[#0ea5e9]/10 rounded-2xl flex items-center justify-center text-[#0ea5e9] text-2xl transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                                        <FaEnvelope />
                                    </div>
                                    <div>
                                        <h4 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">Direct Line</h4>
                                        <p className="text-lg md:text-xl font-medium text-white group-hover/item:text-[#0ea5e9] transition-colors break-all">{profile.email}</p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-6 group/item cursor-pointer">
                                    <div className="w-16 h-16 bg-[#111] border border-white/5 group-hover/item:border-[#0ea5e9]/50 group-hover/item:bg-[#0ea5e9]/10 rounded-2xl flex items-center justify-center text-[#0ea5e9] text-2xl transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                                        <FaMapMarkerAlt />
                                    </div>
                                    <div>
                                        <h4 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">Current Coordinates</h4>
                                        <p className="text-lg md:text-xl font-medium text-white group-hover/item:text-[#0ea5e9] transition-colors">{profile.location}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Social Connectivity */}
                            <div className="mt-12 pt-8 border-t border-white/5">
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <motion.a 
                                        href={profile.social.linkedin} 
                                        target="_blank" 
                                        rel="noreferrer"
                                        whileHover={{ y: -5, scale: 1.05 }}
                                        className="flex-1 flex items-center justify-center space-x-3 p-4 rounded-2xl bg-[#0077b5]/10 border border-[#0077b5]/30 text-white hover:bg-[#0077b5] hover:border-transparent transition-all duration-300 shadow-lg"
                                    >
                                        <FaLinkedin size={20} className="text-[#0077b5] group-hover:text-white" />
                                        <span className="font-bold text-xs uppercase tracking-widest">LinkedIn</span>
                                    </motion.a>

                                    <motion.a 
                                        href={profile.social.github} 
                                        target="_blank" 
                                        rel="noreferrer"
                                        whileHover={{ y: -5, scale: 1.05 }}
                                        className="flex-1 flex items-center justify-center space-x-3 p-4 rounded-2xl bg-white/5 border border-white/10 text-white hover:bg-white hover:text-black transition-all duration-300 shadow-lg"
                                    >
                                        <FaGithub size={20} />
                                        <span className="font-bold text-xs uppercase tracking-widest">GitHub</span>
                                    </motion.a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Interaction Form */}
                    <div className="relative p-10 md:p-14 rounded-[2.5rem] bg-[#0A0A0A]/50 backdrop-blur-xl border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.6)] group hover:border-[#0ea5e9]/30 transition-colors duration-500">
                        {/* Glow accent */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#0ea5e9]/5 to-transparent rounded-[2.5rem] pointer-events-none" />
                        
                        <form className="relative z-10 space-y-8" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="relative group/field">
                                    <input type="text" id="user_name" className="w-full bg-[#111111]/80 p-5 rounded-2xl border border-white/5 focus:border-[#0ea5e9]/50 focus:bg-[#0ea5e9]/5 outline-none text-white text-lg transition-all peer placeholder-transparent shadow-inner" placeholder="Name" required />
                                    <label htmlFor="user_name" className="absolute left-5 top-5 text-gray-500 transition-all peer-focus:top-1 peer-focus:text-[10px] peer-focus:text-[#0ea5e9] tracking-widest peer-focus:font-bold peer-[:not(:placeholder-shown)]:top-1 peer-[:not(:placeholder-shown)]:text-[10px] uppercase pointer-events-none">Name</label>
                                </div>
                                <div className="relative group/field">
                                    <input type="email" id="user_email" className="w-full bg-[#111111]/80 p-5 rounded-2xl border border-white/5 focus:border-[#0ea5e9]/50 focus:bg-[#0ea5e9]/5 outline-none text-white text-lg transition-all peer placeholder-transparent shadow-inner" placeholder="Email" required />
                                    <label htmlFor="user_email" className="absolute left-5 top-5 text-gray-500 transition-all peer-focus:top-1 peer-focus:text-[10px] peer-focus:text-[#0ea5e9] tracking-widest peer-focus:font-bold peer-[:not(:placeholder-shown)]:top-1 peer-[:not(:placeholder-shown)]:text-[10px] uppercase pointer-events-none">Email Address</label>
                                </div>
                            </div>
                            
                            <div className="relative group/field">
                                <input type="text" id="user_contact" className="w-full bg-[#111111]/80 p-5 rounded-2xl border border-white/5 focus:border-[#0ea5e9]/50 focus:bg-[#0ea5e9]/5 outline-none text-white text-lg transition-all peer placeholder-transparent shadow-inner" placeholder="Phone or Contact Detail" />
                                <label htmlFor="user_contact" className="absolute left-5 top-5 text-gray-500 transition-all peer-focus:top-1 peer-focus:text-[10px] peer-focus:text-[#0ea5e9] tracking-widest peer-focus:font-bold peer-[:not(:placeholder-shown)]:top-1 peer-[:not(:placeholder-shown)]:text-[10px] uppercase pointer-events-none">Contact Details (Phone, Skype, etc.)</label>
                            </div>

                            <div className="relative group/field">
                                <textarea id="user_message" rows="4" className="w-full bg-[#111111]/80 p-5 pt-8 rounded-2xl border border-white/5 focus:border-[#0ea5e9]/50 focus:bg-[#0ea5e9]/5 outline-none text-white text-lg transition-all peer placeholder-transparent resize-none shadow-inner" placeholder="Message" required></textarea>
                                <label htmlFor="user_message" className="absolute left-5 top-4 text-gray-500 transition-all peer-focus:top-2 peer-focus:text-[10px] peer-focus:text-[#0ea5e9] tracking-widest peer-focus:font-bold peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-[10px] uppercase pointer-events-none">Your Message / Offer Details</label>
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02, y: -2 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full py-5 mt-4 bg-gradient-to-r from-[#0ea5e9] to-cyan-500 text-black font-black rounded-2xl flex items-center justify-center space-x-4 shadow-[0_0_30px_rgba(14,165,233,0.3)] hover:shadow-[0_0_40px_rgba(14,165,233,0.5)] transition-all duration-300"
                            >
                                <span className="text-sm tracking-[0.3em] uppercase">Transmit</span>
                                <FaPaperPlane size={16} />
                            </motion.button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
