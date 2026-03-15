import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import { profile } from '../data/profile';

const Contact = () => {
    return (
        <section id="contact" className="py-24 relative overflow-hidden bg-[#0C0C0C]">
            <div className="max-w-[1300px] mx-auto px-8 md:px-16 w-full">
                
                <div className="text-center mb-16">
                    <span className="text-[#0ea5e9] text-sm font-semibold tracking-widest uppercase block mb-2">Connect</span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-white tracking-tight"
                    >
                        Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-[#0ea5e9]">Touch</span>
                    </motion.h2>
                </div>

                <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 relative z-10">
                    
                    {/* Left Info Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="w-full lg:w-4/12 flex flex-col justify-center"
                    >
                        <h3 className="text-2xl font-semibold text-white mb-8">Let's discuss your project</h3>
                        
                        <div className="space-y-8">
                            <div className="flex items-start space-x-6 group">
                                <div className="w-14 h-14 bg-[#1C1C1C] border border-[#2A2A2A] rounded-xl flex items-center justify-center text-[#0ea5e9] group-hover:bg-[#0ea5e9] group-hover:text-white transition-all shadow-lg shrink-0">
                                    <FaEnvelope size={20} />
                                </div>
                                <div className="flex flex-col justify-center translate-y-1">
                                    <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">Email</h4>
                                    <p className="text-gray-300 font-medium group-hover:text-[#0ea5e9] transition-colors">{profile.email}</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-6 group">
                                <div className="w-14 h-14 bg-[#1C1C1C] border border-[#2A2A2A] rounded-xl flex items-center justify-center text-[#0ea5e9] group-hover:bg-[#0ea5e9] group-hover:text-white transition-all shadow-lg shrink-0">
                                    <FaPhone size={20} />
                                </div>
                                <div className="flex flex-col justify-center translate-y-1">
                                    <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">Phone</h4>
                                    <p className="text-gray-300 font-medium group-hover:text-[#0ea5e9] transition-colors">{profile.mobile}</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-6 group">
                                <div className="w-14 h-14 bg-[#1C1C1C] border border-[#2A2A2A] rounded-xl flex items-center justify-center text-[#0ea5e9] group-hover:bg-[#0ea5e9] group-hover:text-white transition-all shadow-lg shrink-0">
                                    <FaMapMarkerAlt size={20} />
                                </div>
                                <div className="flex flex-col justify-center translate-y-1">
                                    <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">Location</h4>
                                    <p className="text-gray-300 font-medium group-hover:text-[#0ea5e9] transition-colors">{profile.location}</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Form Column */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="w-full lg:w-8/12 bg-[#141414] border border-[#2A2A2A] p-8 md:p-12 rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.5)] relative overflow-hidden"
                    >
                        {/* Subtle Form Background Glow */}
                        <div className="absolute -top-32 -right-32 w-64 h-64 bg-[#0ea5e9]/5 blur-[100px] rounded-full"></div>

                        <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="flex flex-col">
                                    <label htmlFor="name" className="text-sm font-semibold text-gray-400 mb-2 uppercase tracking-wide">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full px-5 py-4 rounded-xl bg-[#1A1A1A] border border-[#333] text-white focus:border-[#0ea5e9] focus:ring-1 focus:ring-[#0ea5e9] outline-none transition-all placeholder-gray-600"
                                        placeholder="Aarav Sharma"
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="email" className="text-sm font-semibold text-gray-400 mb-2 uppercase tracking-wide">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full px-5 py-4 rounded-xl bg-[#1A1A1A] border border-[#333] text-white focus:border-[#0ea5e9] focus:ring-1 focus:ring-[#0ea5e9] outline-none transition-all placeholder-gray-600"
                                        placeholder="aarav@example.com"
                                    />
                                </div>
                            </div>
                            
                            <div className="flex flex-col">
                                <label htmlFor="subject" className="text-sm font-semibold text-gray-400 mb-2 uppercase tracking-wide">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    className="w-full px-5 py-4 rounded-xl bg-[#1A1A1A] border border-[#333] text-white focus:border-[#0ea5e9] focus:ring-1 focus:ring-[#0ea5e9] outline-none transition-all placeholder-gray-600"
                                    placeholder="How can I help you?"
                                />
                            </div>
                            
                            <div className="flex flex-col">
                                <label htmlFor="message" className="text-sm font-semibold text-gray-400 mb-2 uppercase tracking-wide">Message</label>
                                <textarea
                                    id="message"
                                    rows="5"
                                    className="w-full px-5 py-4 rounded-xl bg-[#1A1A1A] border border-[#333] text-white focus:border-[#0ea5e9] focus:ring-1 focus:ring-[#0ea5e9] outline-none transition-all placeholder-gray-600 resize-none"
                                    placeholder="Write your message here..."
                                ></textarea>
                            </div>
                            
                            <button
                                type="submit"
                                className="w-full md:w-auto mt-2 bg-transparent border-2 border-[#0ea5e9] text-[#0ea5e9] hover:bg-[#0ea5e9] hover:text-white font-bold py-4 px-12 rounded-xl transition-all duration-300 shadow-[0_0_15px_rgba(255,122,0,0.1)] hover:shadow-[0_0_25px_rgba(255,122,0,0.3)] uppercase tracking-widest text-sm"
                            >
                                Send Message
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
