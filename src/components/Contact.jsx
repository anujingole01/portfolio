import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import { profile } from '../data/profile';

const Contact = () => {
    return (
        <section id="contact" className="py-24 relative overflow-hidden bg-[#050505]">
            {/* Creative Background Orbs */}
            <div className="absolute top-0 left-[10%] w-72 h-72 bg-[#0ea5e9] rounded-full mix-blend-screen filter blur-[100px] opacity-10 animate-pulse" />
            <div className="absolute bottom-0 right-[10%] w-96 h-96 bg-[#0ea5e9] rounded-full mix-blend-screen filter blur-[120px] opacity-[0.05] animate-pulse" style={{ animationDelay: "2s" }} />

            <div className="max-w-[1300px] mx-auto px-8 md:px-16 w-full relative z-10">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center space-x-2 px-4 py-2 border border-[#2A2A2A] bg-[#161616] rounded-full text-[#0ea5e9] text-xs font-black tracking-widest uppercase mb-6 shadow-lg shadow-[#0ea5e9]/5"
                    >
                        <FaEnvelope size={14}/>
                        <span>Let's Connect</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-black text-white tracking-tighter"
                    >
                        Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0ea5e9] to-cyan-200">Touch</span>
                    </motion.h2>
                </div>

                <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 justify-between relative z-10">
                    
                    {/* Left Info Column with Creative Vertical Cards */}
                    <div className="w-full lg:w-[45%] flex flex-col justify-center space-y-6">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-gradient-to-br from-[#121212] to-[#0A0A0A] border border-[#2A2A2A] p-8 rounded-3xl hover:border-[#0ea5e9]/50 transition-all duration-500 group relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-[#0ea5e9]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                            <div className="flex items-center space-x-6 relative z-10">
                                <div className="w-16 h-16 bg-[#1A1A1A] border-2 border-[#333] group-hover:border-[#0ea5e9] rounded-2xl flex items-center justify-center text-[#0ea5e9] group-hover:text-white transition-all shadow-[0_0_20px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_20px_rgba(14,165,233,0.3)] shrink-0">
                                    <FaEnvelope size={24} />
                                </div>
                                <div>
                                    <h4 className="text-sm font-black text-gray-500 uppercase tracking-widest mb-1">Email Drop</h4>
                                    <p className="text-white font-medium text-lg drop-shadow-md">{profile.email}</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="bg-gradient-to-br from-[#121212] to-[#0A0A0A] border border-[#2A2A2A] p-8 rounded-3xl hover:border-[#0ea5e9]/50 transition-all duration-500 group relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-[#0ea5e9]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                            <div className="flex items-center space-x-6 relative z-10">
                                <div className="w-16 h-16 bg-[#1A1A1A] border-2 border-[#333] group-hover:border-[#0ea5e9] rounded-2xl flex items-center justify-center text-[#0ea5e9] group-hover:text-white transition-all shadow-[0_0_20px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_20px_rgba(14,165,233,0.3)] shrink-0">
                                    <FaMapMarkerAlt size={24} />
                                </div>
                                <div>
                                    <h4 className="text-sm font-black text-gray-500 uppercase tracking-widest mb-1">Location</h4>
                                    <p className="text-white font-medium text-lg drop-shadow-md">{profile.location}</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Form Column - High Modernity */}
                    <div className="w-full lg:w-[50%] relative group perspective">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, rotateY: 5 }}
                            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
                            className="bg-[#111] backdrop-blur-xl border border-[#222] p-8 md:p-10 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.7)] group-hover:border-[#0ea5e9]/30 transition-all duration-500 relative overflow-hidden z-10"
                        >
                            <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="flex flex-col relative group/input">
                                        <input
                                            type="text"
                                            id="name"
                                            className="w-full px-5 py-4 pt-6 rounded-2xl bg-[#1A1A1A] border border-[#333] text-white focus:border-[#0ea5e9] outline-none transition-all peer"
                                            placeholder=" "
                                        />
                                        <label htmlFor="name" className="absolute left-5 text-gray-500 text-sm top-1/2 -translate-y-1/2 peer-focus:top-3 peer-focus:text-xs peer-focus:text-[#0ea5e9] peer-focus:font-bold peer-[:not(:placeholder-shown)]:top-3 peer-[:not(:placeholder-shown)]:text-xs transition-all pointer-events-none uppercase tracking-wide">Name</label>
                                    </div>
                                    <div className="flex flex-col relative group/input">
                                        <input
                                            type="email"
                                            id="email"
                                            className="w-full px-5 py-4 pt-6 rounded-2xl bg-[#1A1A1A] border border-[#333] text-white focus:border-[#0ea5e9] outline-none transition-all peer"
                                            placeholder=" "
                                        />
                                        <label htmlFor="email" className="absolute left-5 text-gray-500 text-sm top-1/2 -translate-y-1/2 peer-focus:top-3 peer-focus:text-xs peer-focus:text-[#0ea5e9] peer-focus:font-bold peer-[:not(:placeholder-shown)]:top-3 peer-[:not(:placeholder-shown)]:text-xs transition-all pointer-events-none uppercase tracking-wide">Email</label>
                                    </div>
                                </div>
                                
                                <div className="flex flex-col relative group/input">
                                    <input
                                        type="text"
                                        id="subject"
                                        className="w-full px-5 py-4 pt-6 rounded-2xl bg-[#1A1A1A] border border-[#333] text-white focus:border-[#0ea5e9] outline-none transition-all peer"
                                        placeholder=" "
                                    />
                                    <label htmlFor="subject" className="absolute left-5 text-gray-500 text-sm top-1/2 -translate-y-1/2 peer-focus:top-3 peer-focus:text-xs peer-focus:text-[#0ea5e9] peer-focus:font-bold peer-[:not(:placeholder-shown)]:top-3 peer-[:not(:placeholder-shown)]:text-xs transition-all pointer-events-none uppercase tracking-wide">Subject</label>
                                </div>
                                
                                <div className="flex flex-col relative group/input">
                                    <textarea
                                        id="message"
                                        rows="4"
                                        className="w-full px-5 py-4 pt-8 rounded-2xl bg-[#1A1A1A] border border-[#333] text-white focus:border-[#0ea5e9] outline-none transition-all peer resize-none"
                                        placeholder=" "
                                    ></textarea>
                                    <label htmlFor="message" className="absolute left-5 text-gray-500 text-sm top-6 -translate-y-1/2 peer-focus:top-4 peer-focus:text-xs peer-focus:text-[#0ea5e9] peer-focus:font-bold peer-[:not(:placeholder-shown)]:top-4 peer-[:not(:placeholder-shown)]:text-xs transition-all pointer-events-none uppercase tracking-wide">Message</label>
                                </div>
                                
                                <button
                                    type="submit"
                                    className="w-full flex items-center justify-center space-x-3 mt-4 bg-gradient-to-r from-[transparent] to-[#1A1A1A] border-2 border-[#0ea5e9] text-white hover:bg-[#0ea5e9] font-black py-4 px-12 rounded-2xl transition-all duration-300 shadow-[0_0_15px_rgba(255,122,0,0.1)] hover:shadow-[0_0_30px_rgba(14,165,233,0.5)] uppercase tracking-widest text-sm relative group overflow-hidden"
                                >
                                    <span className="relative z-10 transition-transform group-hover:-translate-x-1">Send Identity</span>
                                    <FaPaperPlane className="relative z-10 text-[#0ea5e9] group-hover:text-white transition-all transform group-hover:translate-x-2 group-hover:-translate-y-1" />
                                    <div className="absolute inset-0 bg-[#0ea5e9] w-0 group-hover:w-full transition-all duration-500 ease-out z-0"></div>
                                </button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
