import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { profile } from '../data/profile';
import profilePic from '../assets/anuj-photo.jpg.jpg';
import resumePdf from '../assets/resume.pdf';

const TypewriterText = ({ words }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typeSpeed = isDeleting ? 40 : 80;
    const currentWord = words[currentWordIndex];

    const timer = setTimeout(() => {
      if (!isDeleting && currentText === currentWord) {
        setTimeout(() => setIsDeleting(true), 1200); 
        return;
      }

      if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
        return;
      }

      const nextText = isDeleting
        ? currentWord.substring(0, currentText.length - 1)
        : currentWord.substring(0, currentText.length + 1);

      setCurrentText(nextText);
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, words]);

  return (
    <span className="text-rose-500 font-bold font-secondary">
      {currentText}
      <span className="animate-pulse border-r-2 border-rose-500 ml-1"></span>
    </span>
  );
};

function Hero() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const openResume = () => {
    window.open(resumePdf, "_blank");
  };

  return (
    <>
      <div className="hidden sm:flex fixed left-6 top-1/2 -translate-y-1/2 flex-col items-center gap-6 z-50 text-slate-400">
        <motion.a whileHover={{ y: -4, color: "#fff" }} href={profile.social.github} target="_blank" rel="noopener noreferrer" className="text-xl transition-colors">
          <FaGithub />
        </motion.a>
        <motion.a whileHover={{ y: -4, color: "#0077b5" }} href={profile.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-xl transition-colors">
          <FaLinkedin />
        </motion.a>
        <motion.a whileHover={{ y: -4, color: "#ea4335" }} href={`mailto:${profile.email}`} className="text-xl transition-colors">
          <HiOutlineMail />
        </motion.a>
        <div className="w-[1px] h-20 bg-gradient-to-b from-slate-400 to-transparent"></div>
      </div>

      <div className="sm:hidden fixed bottom-6 left-1/2 -translate-x-1/2 backdrop-blur-xl shadow-2xl border px-8 py-4 rounded-full flex gap-8 z-50 transition-colors bg-[#0a0a0a]/80 border-slate-800 text-slate-400">
        <a href={profile.social.github} target="_blank" rel="noopener noreferrer" className="hover:text-white"><FaGithub size={20} /></a>
        <a href={profile.social.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-[#0077b5]"><FaLinkedin size={20} /></a>
        <a href={`mailto:${profile.email}`} className="hover:text-[#ea4335]"><HiOutlineMail size={22} /></a>
      </div>

      <section id="home" className="relative z-10 h-[100svh] w-full flex items-center justify-center bg-transparent px-6 md:px-12 overflow-hidden font-primary snap-start">
        <div className="relative z-10 grid lg:grid-cols-2 lg:items-center gap-8 lg:gap-16 max-w-7xl w-full h-full lg:pt-0 pt-20 pb-16 lg:pb-0 font-secondary mt-12 md:mt-0">
          
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center h-full"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-4 inline-flex items-center gap-2 max-w-max px-4 py-1.5 bg-[#111111] backdrop-blur-xl rounded-full border border-white/10 shadow-xl"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative rounded-full h-2.5 w-2.5 bg-emerald-500 shadow-sm shadow-emerald-500/50"></span>
              </span>
              <span className="text-[10px] md:text-[11px] font-black tracking-[0.2em] text-gray-300 uppercase">Available for new opportunities</span>
            </motion.div>

            <div className="mt-1">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.9] tracking-tighter text-white font-secondary">
                ANUJ
              </h1>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.9] tracking-tighter text-white font-secondary">
                INGOLE
              </h1>
            </div>

            <div className="mt-4 lg:mt-6">
              <motion.div
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
                className="text-lg sm:text-xl lg:text-2xl h-8"
              >
                <TypewriterText words={["Full Stack Developer", "Graphic Designer", "Software Engineer"]} />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-6 lg:mt-8 max-w-[550px] relative"
              >
                <div className="relative bg-[#0a0a0a]/90 backdrop-blur-3xl rounded-2xl p-5 sm:p-6 border border-white/10 shadow-2xl">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2 font-mono text-[9px] tracking-[0.2em] text-slate-400 uppercase">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="animate-ping absolute h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                        <span className="relative rounded-full h-1.5 w-1.5 bg-rose-500"></span>
                      </span>
                      session: profile
                    </div>
                  </div>

                  <div className="space-y-3">
                    <p className="text-gray-300 font-sans text-[13px] sm:text-[14px] leading-relaxed">
                      I am a passionate <span className="text-white font-black">Computer Science Engineer</span> with experience in building dynamic web applications and IoT solutions. I specialize in transforming complex challenges into efficient systems. Alongside development, I work as a <span className="text-rose-500 font-bold">Graphic Designer</span>, crafting user-centric designs that enhance digital experiences.
                    </p>
                  </div>
                </div>
              </motion.div>

               {/* Compact Action Buttons Container */}
              <div className="mt-6 flex flex-wrap items-center gap-6">
                <motion.button
                  onClick={openResume}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-5 py-2.5 bg-[#050505] text-white rounded-full font-black text-[9px] sm:text-[10px] tracking-[0.2em] uppercase shadow-xl border border-white/10 hover:border-rose-500/30 transition-all flex items-center gap-2"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse" />
                  <span>View Resume</span>
                </motion.button>

                <motion.div
                  whileHover={{ x: 5 }}
                  className="group cursor-pointer flex items-center gap-2 text-gray-400 hover:text-white transition-all"
                  onClick={() => scrollToSection("contact")}
                >
                  <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em] border-b-2 border-transparent group-hover:border-rose-500 transition-all">
                    Start a Conversation
                  </span>
                  <span className="text-rose-500 animate-bounce-x">→</span>
                </motion.div>
              </div>

            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="flex justify-center items-center h-full relative"
          >
            <div className="relative w-52 h-52 sm:w-64 sm:h-64 lg:w-[400px] lg:h-[400px] xl:w-[460px] xl:h-[460px] flex items-center justify-center p-3 lg:p-6 mx-auto">
              <div className="absolute inset-0 border-[1px] border-rose-500/20 rounded-full animate-[spin_20s_linear_infinite]" />
              <div className="absolute inset-4 border-[1px] border-rose-500/10 rounded-full animate-[spin_12s_linear_infinite_reverse]" />
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-[#1A1A1A] group shadow-2xl">
                <img src={profilePic} alt={profile.name} className="w-full h-full object-cover object-top grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-rose-500/10 to-transparent h-20 w-full animate-[scan_3s_linear_infinite] opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      <style dangerouslySetInnerHTML={{ __html: `
          @keyframes scan {
              0% { transform: translateY(-100%); }
              100% { transform: translateY(400%); }
          }
      `}} />
    </>
  );
}

export default Hero;
