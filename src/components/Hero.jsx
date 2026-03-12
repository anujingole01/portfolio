import { motion } from 'framer-motion';
import { FaInstagram, FaLinkedinIn, FaDribbble, FaBehance } from 'react-icons/fa';
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
        <section id="home" className="w-full h-full min-h-[80vh] flex items-center pt-10 md:pt-0 overflow-hidden relative">
            <div className="max-w-[1300px] w-full mx-auto px-8 md:px-16 flex flex-col-reverse md:flex-row items-center justify-between">
                
                {/* Left Content */}
                <motion.div 
                    className="w-full md:w-[55%] flex flex-col justify-center items-start mt-12 md:mt-0 relative z-10"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.p variants={itemVariants} className="text-gray-400 text-lg md:text-xl font-medium tracking-wide mb-2">
                        Hi I am
                    </motion.p>
                    <motion.h2 variants={itemVariants} className="text-white text-2xl md:text-3xl font-semibold mb-2">
                        {profile.name}
                    </motion.h2>
                    <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold text-[#FF7A00] mb-8 leading-tight tracking-tight">
                        UI/UX designer
                    </motion.h1>

                    {/* Socials */}
                    <motion.div variants={itemVariants} className="flex space-x-4 mb-10">
                        {[
                            { icon: <FaInstagram size={18} />, url: profile.social?.instagram || '#' },
                            { icon: <FaLinkedinIn size={18} />, url: profile.social?.linkedin || '#' },
                            { icon: <FaDribbble size={18} />, url: '#' },
                            { icon: <FaBehance size={18} />, url: '#' }
                        ].map((social, index) => (
                            <motion.a 
                                key={index} 
                                href={social.url}
                                target="_blank"
                                rel="noreferrer"
                                whileHover={{ scale: 1.1, backgroundColor: "#FF7A00", borderColor: "#FF7A00" }}
                                whileTap={{ scale: 0.95 }}
                                className="w-12 h-12 rounded-full border border-gray-600 flex items-center justify-center text-gray-300 hover:text-white transition-colors duration-300"
                            >
                                {social.icon}
                            </motion.a>
                        ))}
                    </motion.div>

                    {/* Buttons */}
                    <motion.div variants={itemVariants} className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 mb-16">
                        <motion.button 
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-[#FF7A00] text-white px-8 py-3 rounded-md font-medium text-lg shadow-[0_0_20px_rgba(255,122,0,0.3)] hover:shadow-[0_0_30px_rgba(255,122,0,0.5)] transition"
                        >
                            Hire Me
                        </motion.button>
                        <motion.button 
                            whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.05)" }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-transparent text-gray-300 border border-gray-500 px-8 py-3 rounded-md font-medium text-lg hover:text-white hover:border-gray-400 transition"
                        >
                            Download CV
                        </motion.button>
                    </motion.div>

                    {/* Stats Card */}
                    <motion.div 
                        variants={itemVariants}
                        className="bg-[#1C1C1C] border border-[#2A2A2A] rounded-2xl w-full max-w-lg p-6 lg:p-8 flex items-center justify-between"
                    >
                        <div className="flex flex-col text-center md:text-left">
                            <h3 className="text-[#FF7A00] text-2xl md:text-3xl font-bold mb-1">5+</h3>
                            <p className="text-gray-400 text-sm md:text-base">Experiences</p>
                        </div>
                        <div className="w-px h-12 bg-gray-700 mx-4"></div>
                        <div className="flex flex-col text-center md:text-left">
                            <h3 className="text-[#FF7A00] text-2xl md:text-3xl font-bold mb-1">20+</h3>
                            <p className="text-gray-400 text-sm md:text-base">Project done</p>
                        </div>
                        <div className="w-px h-12 bg-gray-700 mx-4"></div>
                        <div className="flex flex-col text-center md:text-left">
                            <h3 className="text-[#FF7A00] text-2xl md:text-3xl font-bold mb-1">80+</h3>
                            <p className="text-gray-400 text-sm md:text-base">Happy Clients</p>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Right Image Container */}
                <motion.div 
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                    className="w-full md:w-[45%] flex justify-center items-center relative mb-12 md:mb-0"
                >
                    <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[450px] md:h-[450px] lg:w-[500px] lg:h-[500px]">
                        {/* Dark circular background */}
                        <div className="absolute inset-0 bg-[#1D1D1D] rounded-full top-[10%] left-[5%] right-[5%] w-[80%] h-[80%] m-auto scale-[1.15]"></div>
                        
                        {/* Cutout portrait image */}
                        <motion.img 
                            initial={{ scale: 0.95 }}
                            animate={{ scale: 1 }}
                            transition={{ 
                                duration: 2, 
                                repeat: Infinity, 
                                repeatType: "reverse", 
                                ease: "easeInOut" 
                            }}
                            src={profilePic}
                            alt="Profile Cutout" 
                            className="absolute bottom-[-10%] w-[120%] h-[120%] left-[-10%] object-contain filter drop-shadow-2xl"
                        />
                    </div>
                </motion.div>
                
            </div>
        </section>
    );
};

export default Hero;
