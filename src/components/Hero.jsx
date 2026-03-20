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
                    
                    <motion.div variants={itemVariants} className="mb-6 flex items-center space-x-3">
                        <div className="relative flex items-center justify-center">
                            <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-30 animate-ping"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </div>
                        <p className="text-[#0ea5e9] text-xs md:text-sm font-black tracking-[3px] uppercase">
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

                    {/* Quick Stats Grid - Placement Optimized */}
                    <motion.div variants={itemVariants} className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 mb-12 w-full max-w-2xl">
                        {[
                            { label: 'Certifications', val: '5+' },
                            { label: 'Projects Built', val: '5+' },
                            { label: 'Hackathons', val: '3+' }
                        ].map((stat, i) => (
                            <div key={i} className="bg-[#111] border border-[#222] p-5 rounded-2xl group hover:border-[#0ea5e9]/40 transition-all duration-300">
                                <h3 className="text-white text-2xl md:text-3xl font-black mb-1 group-hover:text-[#0ea5e9] transition-colors">{stat.val}</h3>
                                <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest">{stat.label}</p>
                            </div>
                        ))}
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
