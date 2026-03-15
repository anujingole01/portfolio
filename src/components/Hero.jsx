import { motion } from 'framer-motion';
import { FaGithub, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter';
import { profile } from '../data/profile';
import profilePic from '../assets/anuj-photo.jpg.jpg';

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
        <section id="home" className="w-full h-full min-h-[85vh] flex items-center pt-8 md:pt-0 overflow-hidden relative">
            <div className="max-w-[1400px] w-full mx-auto px-6 md:px-12 lg:px-20 flex flex-col-reverse md:flex-row items-center justify-between">
                
                {/* Left Content */}
                <motion.div 
                    className="w-full md:w-[60%] flex flex-col justify-center items-start mt-12 md:mt-0 relative z-10"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.p variants={itemVariants} className="text-gray-400 text-lg md:text-xl font-medium tracking-widest uppercase mb-3">
                        Hi, I am
                    </motion.p>
                    <motion.h2 
                        variants={itemVariants} 
                        className="text-white text-5xl md:text-6xl font-black tracking-tight mb-2 hover:text-[#FF1E1E] hover:scale-105 transition-all duration-300 origin-left cursor-default"
                    >
                        {profile.name}
                    </motion.h2>
                    <motion.h1 variants={itemVariants} className="text-3xl md:text-5xl font-bold text-[#FF7A00] mb-8 leading-tight tracking-tight h-16 md:h-20 flex items-center">
                        <span className="font-mono">
                            <Typewriter
                                words={['Full Stack Web Developer', 'Graphic Designer', 'UI/UX Enthusiast', 'Problem Solver']}
                                loop={true}
                                cursor
                                cursorStyle='_'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1500}
                            />
                        </span>
                    </motion.h1>

                    {/* Socials */}
                    <motion.div variants={itemVariants} className="flex space-x-5 mb-12">
                        {[
                            { icon: <FaLinkedinIn size={20} />, url: profile.social?.linkedin || '#' },
                            { icon: <FaGithub size={20} />, url: profile.social?.github || '#' },
                            { icon: <FaEnvelope size={20} />, url: `mailto:${profile.email}` }
                        ].map((social, index) => (
                            <motion.a 
                                key={index} 
                                href={social.url}
                                target="_blank"
                                rel="noreferrer"
                                whileHover={{ scale: 1.15, backgroundColor: "#FF7A00", borderColor: "#FF7A00", y: -4 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-14 h-14 rounded-full border-2 border-gray-600 flex items-center justify-center text-gray-300 hover:text-white transition-all duration-300 shadow-lg hover:shadow-[#FF7A00]/50"
                            >
                                {social.icon}
                            </motion.a>
                        ))}
                    </motion.div>

                    {/* Buttons */}
                    <motion.div variants={itemVariants} className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 mb-16">
                        <motion.a 
                            href="/resume" // Use actual resume link here
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-transparent text-white border-2 border-[#FF7A00] px-8 py-3 rounded-xl font-bold text-lg hover:bg-[#FF7A00] transition-all duration-300 shadow-[0_0_20px_rgba(255,122,0,0.1)] hover:shadow-[0_0_30px_rgba(255,122,0,0.4)] text-center cursor-pointer uppercase tracking-wider"
                        >
                            Download Resume
                        </motion.a>
                    </motion.div>

                    {/* Stats Card - College/Placement Focused */}
                    <motion.div 
                        variants={itemVariants}
                        className="bg-[#1C1C1C] border border-[#2A2A2A] rounded-2xl w-full max-w-2xl p-6 lg:p-8 flex items-center justify-between shadow-2xl hover:border-[#FF7A00]/40 transition-colors duration-300"
                    >
                        <div className="flex flex-col text-center md:text-left">
                            <h3 className="text-[#FF7A00] text-3xl md:text-4xl font-black mb-1">5+</h3>
                            <p className="text-gray-400 text-xs md:text-sm font-bold uppercase tracking-widest mt-1">Certifications</p>
                        </div>
                        <div className="w-px h-16 bg-gray-700 mx-2 md:mx-6 shadow-[0_0_10px_rgba(255,122,0,0.2)]"></div>
                        <div className="flex flex-col text-center md:text-left">
                            <h3 className="text-[#FF7A00] text-3xl md:text-4xl font-black mb-1">20+</h3>
                            <p className="text-gray-400 text-xs md:text-sm font-bold uppercase tracking-widest mt-1">Projects Built</p>
                        </div>
                        <div className="w-px h-16 bg-gray-700 mx-2 md:mx-6 shadow-[0_0_10px_rgba(255,122,0,0.2)]"></div>
                        <div className="flex flex-col text-center md:text-left">
                            <h3 className="text-[#FF7A00] text-3xl md:text-4xl font-black mb-1">3+</h3>
                            <p className="text-gray-400 text-xs md:text-sm font-bold uppercase tracking-widest mt-1">Hackathons</p>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Right Image Container */}
                <motion.div 
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                    className="w-full md:w-[40%] flex justify-center items-center relative mb-12 md:mb-0"
                >
                    <div className="relative w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] lg:w-[480px] lg:h-[480px]">
                        {/* Neatly Cropped Circular Photo Container */}
                        <motion.div 
                            initial={{ scale: 0.95 }}
                            animate={{ scale: 1 }}
                            transition={{ 
                                duration: 3, 
                                repeat: Infinity, 
                                repeatType: "reverse", 
                                ease: "easeInOut" 
                            }}
                            className="relative w-full h-full m-auto rounded-full overflow-hidden border-2 border-[#2A2A2A] shadow-[0_0_60px_rgba(255,122,0,0.1)] hover:shadow-[0_0_80px_rgba(255,122,0,0.25)] ring-4 ring-transparent hover:ring-[#FF7A00]/20 flex justify-center items-center transition-all duration-500"
                        >
                            <img 
                                src={profilePic}
                                alt="Profile" 
                                className="w-full h-full object-cover object-top filter contrast-110 saturate-[1.1] hover:scale-110 transition-transform duration-700"
                            />
                            {/* Inner vignette shadow for depth */}
                            <div className="absolute inset-0 rounded-full shadow-[inset_0_0_80px_rgba(0,0,0,0.8)] pointer-events-none"></div>
                        </motion.div>
                        
                        {/* Floating elements behind */}
                        <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#FF7A00]/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl -z-10 animate-pulse delay-700"></div>
                    </div>
                </motion.div>
                
            </div>
        </section>
    );
};

export default Hero;
