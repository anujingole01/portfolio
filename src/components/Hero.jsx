import { motion } from 'framer-motion';
import { FaGithub, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter';
import { profile } from '../data/profile';
import profilePic from '../assets/anuj-photo.jpg.jpg';
import resumePdf from '../assets/resume.pdf';
import { useEffect, useState } from "react";

const Hero = () => {
    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    return (
        <section id="home" className="w-full h-full min-h-[90vh] flex items-center pt-8 md:pt-0 overflow-hidden relative bg-transparent">
            {/* Soft Ambient Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#0ea5e9]/5 rounded-full blur-[150px] pointer-events-none" />
            
            <div className="max-w-[1400px] w-full mx-auto px-6 md:px-12 lg:px-20 flex flex-col-reverse md:flex-row items-center justify-between relative z-10">
                
                {/* Left Content */}
                <motion.div 
                    className="w-full md:w-[55%] flex flex-col justify-center items-start mt-12 md:mt-0 relative"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <div className="absolute -left-20 -top-20 w-80 h-80 bg-[#0ea5e9]/5 rounded-full blur-[100px] pointer-events-none" />
                    
                    <motion.div variants={itemVariants} className="mb-8 flex items-center space-x-3 bg-white/5 border border-white/10 w-fit px-5 py-2.5 rounded-full backdrop-blur-md shadow-[0_0_20px_rgba(14,165,233,0.1)] hover:border-[#0ea5e9]/50 transition-colors">
                        <div className="relative flex items-center justify-center">
                            <span className="absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-40 animate-ping"></span>
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500 shadow-[0_0_10px_#22d3ee]"></span>
                        </div>
                        <p className="text-gray-300 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase">
                            Available for opportunities
                        </p>
                    </motion.div>
                    
                    <motion.h2 
                        variants={itemVariants} 
                        className="text-white text-5xl md:text-7xl font-black tracking-tighter mb-4 leading-tight group"
                    >
                        {profile.name}
                        <span className="text-[#0ea5e9] active:text-[#FF1E1E] transition-colors cursor-pointer">.</span>
                    </motion.h2>

                    <motion.div 
                        variants={itemVariants} 
                        className="text-2xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-400 to-[#0ea5e9] mb-10 h-20 md:h-24 flex items-center max-w-xl"
                    >
                        <span className="font-mono">
                            <Typewriter
                                words={['Full Stack Web Developer', 'Graphic Designer', 'UI/UX Enthusiast']}
                                loop={true}
                                cursor
                                cursorStyle='|'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1500}
                            />
                        </span>
                    </motion.div>

                    {/* Creative Feature Showcase Container */}
                    <motion.div variants={itemVariants} className="mb-12 w-full max-w-2xl relative group pb-4">
                        <div className="absolute inset-0 bg-gradient-to-r from-[#0ea5e9]/20 via-cyan-400/20 to-[#0ea5e9]/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-700 opacity-50"></div>
                        
                        <div className="relative bg-[#0a0a0a]/90 backdrop-blur-2xl border border-white/5 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.5)]">
                            {/* Animated Background Mesh */}
                            <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px]"></div>
                            
                            {/* Moving Light Beam */}
                            <div className="absolute top-0 left-[-100%] w-[50%] h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[-30deg] animate-[scan_5s_ease-in-out_infinite]"></div>

                            <div className="relative z-10 grid grid-cols-3 gap-4 w-full h-full">
                                {/* Feature 1 */}
                                <div className="flex flex-col items-center justify-center p-3 sm:p-4 rounded-2xl bg-white/[0.02] border border-white/[0.03] hover:bg-[#0ea5e9]/10 hover:border-[#0ea5e9]/30 transition-all duration-500 group/item hover:-translate-y-1">
                                    <div className="w-10 h-10 sm:w-12 sm:h-12 mb-3 rounded-full bg-[#080808] border border-white/10 flex items-center justify-center group-hover/item:border-[#0ea5e9] group-hover/item:shadow-[0_0_15px_rgba(14,165,233,0.4)] transition-all">
                                        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 group-hover/item:text-[#0ea5e9] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                        </svg>
                                    </div>
                                    <span className="text-white font-bold text-xs sm:text-sm mb-1 text-center">Development</span>
                                    <span className="text-gray-500 text-[9px] sm:text-[10px] uppercase tracking-widest text-center">Full-Stack</span>
                                </div>
                                
                                {/* Feature 2 */}
                                <div className="flex flex-col items-center justify-center p-3 sm:p-4 rounded-2xl bg-white/[0.02] border border-white/[0.03] hover:bg-cyan-500/10 hover:border-cyan-500/30 transition-all duration-500 group/item hover:-translate-y-1">
                                    <div className="w-10 h-10 sm:w-12 sm:h-12 mb-3 rounded-full bg-[#080808] border border-white/10 flex items-center justify-center group-hover/item:border-cyan-400 group-hover/item:shadow-[0_0_15px_rgba(34,211,238,0.4)] transition-all">
                                        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 group-hover/item:text-cyan-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <span className="text-white font-bold text-xs sm:text-sm mb-1 text-center">Design</span>
                                    <span className="text-gray-500 text-[9px] sm:text-[10px] uppercase tracking-widest text-center">UI / UX</span>
                                </div>

                                {/* Feature 3 */}
                                <div className="flex flex-col items-center justify-center p-3 sm:p-4 rounded-2xl bg-white/[0.02] border border-white/[0.03] hover:bg-teal-500/10 hover:border-teal-500/30 transition-all duration-500 group/item hover:-translate-y-1">
                                    <div className="w-10 h-10 sm:w-12 sm:h-12 mb-3 rounded-full bg-[#080808] border border-white/10 flex items-center justify-center group-hover/item:border-teal-400 group-hover/item:shadow-[0_0_15px_rgba(45,212,191,0.4)] transition-all">
                                        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 group-hover/item:text-teal-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                    </div>
                                    <span className="text-white font-bold text-xs sm:text-sm mb-1 text-center">Innovation</span>
                                    <span className="text-gray-500 text-[9px] sm:text-[10px] uppercase tracking-widest text-center">Solutions</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Socials & Actions */}
                    <div className="flex flex-col sm:flex-row items-center space-y-6 sm:space-y-0 sm:space-x-8 w-full">
                        <motion.a 
                            href={resumePdf} 
                            download="Anuj_Ingole_CV.pdf"
                            whileHover={{ scale: 1.02, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full sm:w-auto bg-[#0ea5e9] text-white px-10 py-4 rounded-2xl font-black text-sm shadow-[0_15px_30px_rgba(14,165,233,0.3)] hover:shadow-[0_20px_40px_rgba(14,165,233,0.4)] transition-all duration-300 uppercase tracking-widest text-center"
                        >
                            Get Resume
                        </motion.a>
                        
                        <div className="flex space-x-6">
                            {[
                                { icon: <FaLinkedinIn size={18} />, url: profile.social?.linkedin || '#' },
                                { icon: <FaGithub size={18} />, url: profile.social?.github || '#' },
                                { icon: <FaEnvelope size={18} />, url: `mailto:${profile.email}` }
                            ].map((social, index) => (
                                <motion.a 
                                    key={index} 
                                    href={social.url}
                                    whileHover={{ scale: 1.2, color: "#0ea5e9" }}
                                    className="text-gray-500 transition-all duration-300"
                                >
                                    {social.icon}
                                </motion.a>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Right Image Content - Ultra Modern Sphere/Circle */}
                <motion.div 
                    className="relative w-72 h-72 md:w-[450px] md:h-[450px] lg:w-[500px] lg:h-[500px] flex items-center justify-center p-6"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                >
                    {/* Glowing Tech Rings Backdrop */}
                    <div className="absolute inset-0 border-[1px] border-[#0ea5e9]/10 rounded-full animate-[spin_20s_linear_infinite]" />
                    <div className="absolute inset-4 border-[1px] border-[#0ea5e9]/5 rounded-full animate-[spin_12s_linear_infinite_reverse]" />
                    
                    {/* Floating Tech Labels Mobile */}
                    <div className="absolute top-0 right-0 md:hidden bg-[#0ea5e9] text-[#050505] text-[9px] font-black px-3 py-1 rounded-full uppercase tracking-widest shadow-lg shadow-[#0ea5e9]/20">
                        Active_Dev
                    </div>

                    <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-[#1A1A1A] shadow-[0_0_80px_rgba(14,165,233,0.15)] group">
                        <img 
                            src={profilePic} 
                            alt={profile.name}
                            className="w-full h-full object-cover object-top grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                        />
                        {/* Interactive Scan Line Effect */}
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0ea5e9]/10 to-transparent h-20 w-full animate-[scan_3s_linear_infinite] opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                </motion.div>
            </div>
            
            {/* Custom Scan Keyframe in style or simply use Tailwind */}
            <style dangerouslySetInnerHTML={{ __html: `
                @keyframes scan {
                    0% { transform: translateY(-100%); }
                    100% { transform: translateY(400%); }
                }
            `}} />
        </section>
    );
};

export default Hero;
