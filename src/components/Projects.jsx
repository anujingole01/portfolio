import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import { projects } from "../data/projects";
import { FaGithub, FaCode, FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { HiOutlineExternalLink } from "react-icons/hi";
import { SiJavascript, SiReact, SiFirebase, SiTailwindcss, SiWebrtc, SiSocketdotio, SiNodedotjs, SiExpress, SiPhp, SiMysql, SiMongodb, SiJsonwebtokens, SiLaravel } from "react-icons/si";

const TechBadge = ({ name }) => {
  const icons = {
    "React": <SiReact className="text-[#61DAFB]" />,
    "Firebase": <SiFirebase className="text-[#FFCA28]" />,
    "Tailwind": <SiTailwindcss className="text-[#06B6D4]" />,
    "WebRTC": <SiWebrtc className="text-[#339933]" />,
    "Node.js": <SiNodedotjs className="text-[#339933]" />,
    "Express": <SiExpress className="text-slate-400" />,
    "Socket.IO": <SiSocketdotio className="text-slate-400" />,
    "JavaScript": <SiJavascript className="text-[#F7DF1E]" />,
    "PHP": <SiPhp className="text-[#777BB4]" />,
    "MySQL": <SiMysql className="text-[#4479A1]" />,
    "MongoDB": <SiMongodb className="text-[#47A248]" />,
    "JWT": <SiJsonwebtokens className="text-[#000000]" />,
    "Laravel": <SiLaravel className="text-[#FF2D20]" />
  };
  return (
    <div className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-white/5 backdrop-blur-md border border-white/10 text-[9px] font-bold text-white uppercase tracking-tight">
      {icons[name] || <FaCode size={8} />}
      {name}
    </div>
  );
};

const ProjectCard = ({ project, index, activeOffset, onCardClick }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (e) => {
    if (Math.abs(activeOffset) > 0.1) return;
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const isActive = Math.abs(activeOffset) < 0.1;
  const distance = Math.abs(activeOffset);
  
  const cardX = activeOffset * (window.innerWidth < 1024 ? 100 : 250); 
  const cardRotateY = activeOffset * -20;
  const cardZ = -Math.round(distance * 100); 
  const cardScale = 1 - distance * 0.12;
  const cardOpacity = 1 - distance * 0.45;

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={(e) => {
        e.stopPropagation();
        onCardClick(index);
      }}
      layout
      animate={{
        x: cardX,
        rotateY: cardRotateY,
        z: cardZ,
        scale: cardScale,
        opacity: cardOpacity,
        filter: distance > 0.1 ? `blur(${Math.min(distance * 1.5, 2)}px)` : "blur(0px)",
      }}
      transition={{ 
        type: "spring", 
        stiffness: 450, 
        damping: 45,
        mass: 1,
        restDelta: 0.001
      }}
      style={{
        rotateX: isActive ? rotateX : 0,
        rotateY: isActive ? rotateY : cardRotateY,
        transformStyle: "preserve-3d",
        willChange: "transform, opacity, filter"
      }}
      className={`relative w-[280px] h-[400px] md:w-[360px] md:h-[500px] lg:w-[400px] lg:h-[520px] rounded-[24px] overflow-hidden bg-[#111111] flex flex-col cursor-pointer pointer-events-auto ${isActive ? 'shadow-[0_20px_60px_rgba(244,63,94,0.3)] border-transparent' : 'shadow-lg border border-white/5'}`}
    >
      <div className="flex-1 flex flex-col relative">
        <motion.div 
            animate={{ x: activeOffset * 100 }}
            className="absolute inset-0 z-20 pointer-events-none bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-30" 
        />
        
        <div className="h-8 bg-[#0a0a0a] border-b border-white/10 flex items-center px-4 gap-2 shrink-0 z-10">
          <div className="flex gap-1">
            <div className="w-2 h-2 rounded-full bg-[#FF5F56]" />
            <div className="w-2 h-2 rounded-full bg-[#FFBD2E]" />
            <div className="w-2 h-2 rounded-full bg-[#27C93F]" />
          </div>
          <div className="flex-1 max-w-[150px] h-4 bg-[#111111] rounded-sm border border-white/10 mx-auto flex items-center px-1">
            <div className="w-full h-0.5 bg-[#222222] rounded-full" />
          </div>
        </div>

        <div className="relative h-[120px] md:h-[180px] overflow-hidden bg-[#0a0a0a] shrink-0">
          <motion.img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(circle,transparent_20%,#000_100%)]" />
        </div>

        <div className="flex-1 p-5 md:p-6 flex flex-col justify-between bg-[#111111] text-left relative z-10 overflow-hidden">
          <div className="w-full">
            <div className="flex items-center justify-between mb-2 md:mb-3">
               <span className="px-2 py-0.5 rounded-full bg-rose-500/10 text-[8px] font-black text-rose-500 uppercase tracking-widest border border-rose-500/20">
                PROJECT
              </span>
              <span className="text-[9px] font-mono font-bold text-gray-600 tracking-tighter">v1.0</span>
            </div>
            
            <h3 className="text-sm md:text-lg font-black text-white tracking-tighter leading-none mb-2 md:mb-3 uppercase">
              {project.title.split('—')[0].trim()}
            </h3>
            
            <p className="text-gray-400 text-[10px] md:text-[11px] font-medium leading-relaxed mb-4 line-clamp-3">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-1 md:gap-2 mb-4">
                {project.tags.slice(0, 4).map((t, i) => (
                  <div key={i} className="px-1.5 md:px-2 py-0.5 md:py-1 rounded-md bg-[#0a0a0a] border border-white/5 text-[8px] font-black text-gray-400 uppercase tracking-widest">
                    {t}
                  </div>
                ))}
            </div>
          </div>

          <div className={`flex gap-3 mt-auto transition-all duration-700 ${!isActive ? "pointer-events-none opacity-20" : "pointer-events-auto opacity-100"}`}>
            {project.links && project.links.github && (
                <motion.a 
                onClick={(e) => e.stopPropagation()}
                whileHover={{ y: -5, backgroundColor: "#f43f5e" }}
                whileTap={{ scale: 0.95 }}
                href={project.links.github} 
                target="_blank" 
                className="flex-1 h-8 md:h-10 bg-[#1a1a1a] rounded-xl flex items-center justify-center gap-2 text-white text-[9px] font-black uppercase tracking-[0.2em] transition-all"
                >
                <FaGithub size={14} />
                Code
                </motion.a>
            )}
            {project.links && project.links.demo && project.links.demo !== "#" && (
              <motion.a 
                onClick={(e) => e.stopPropagation()}
                whileHover={{ y: -5, borderColor: "#f43f5e", color: "#f43f5e" }}
                whileTap={{ scale: 0.95 }}
                href={project.links.demo} 
                target="_blank" 
                className="flex-1 h-8 md:h-10 bg-[#111111] border-2 border-[#222222] rounded-xl flex items-center justify-center gap-2 text-white text-[9px] font-black uppercase tracking-[0.2em] transition-all"
              >
                <HiOutlineExternalLink size={14} />
                Demo
              </motion.a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    
    const interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % projects.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isHovered]);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % projects.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };
  
  const dragX = useMotionValue(0);
  
  const handleDragEnd = (_, info) => {
    if (window.innerWidth >= 1024) return;
    const threshold = 50;
    if (info.offset.x > threshold) handlePrev();
    else if (info.offset.x < -threshold) handleNext();
    dragX.set(0);
  };

  return (
    <section id="projects" className="relative px-6 md:px-12 h-[100svh] w-full flex flex-col justify-center bg-transparent overflow-hidden perspective-2000 snap-start">
      <div className="max-w-7xl mx-auto relative w-full h-full flex flex-col justify-center">
        
        {/* Subtle Background Watermark */}
        <h1 className="absolute text-[60px] sm:text-[80px] md:text-[100px] lg:text-[140px] font-black text-[#ffffff02] top-4 left-0 md:-left-8 pointer-events-none transition-all duration-700 uppercase select-none leading-none z-0">
            PROJECTS
        </h1>

        <div className="relative z-10 w-full flex-1 flex flex-col justify-center">
            
            {/* Header Content */}
            <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 mb-8 lg:mb-12">
              <div className="max-w-lg">
                  <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 text-[9px] font-bold text-white tracking-[0.2em] uppercase mb-4"
                  >
                    <div className="w-1 h-1 rounded-full bg-rose-500 animate-pulse" />
                    Project Reel
                  </motion.div>
                  <motion.h2 
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      className="text-4xl md:text-5xl font-black text-white tracking-tighter leading-none"
                  >
                      Recent <br />
                      <span className="text-rose-500 italic">Projects.</span>
                  </motion.h2>
                  <p className="mt-3 text-gray-400 text-xs md:text-sm font-medium leading-relaxed italic max-w-sm hidden sm:block">
                  Highlighting my technical builds, academic experiments, and real-world creations.
                  </p>
              </div>

              {/* Manual Control Panel */}
              <div className="flex items-center gap-4">
                 <button onClick={handlePrev} className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-rose-500 hover:border-rose-500 transition-colors shadow-lg shadow-black/50 z-20">
                    <FaChevronLeft size={14} />
                 </button>
                 <button onClick={handleNext} className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-rose-500 hover:border-rose-500 transition-colors shadow-lg shadow-black/50 z-20">
                    <FaChevronRight size={14} />
                 </button>
              </div>
            </div>

            {/* Swipe & Tap Cinematic Reel */}
            <div 
              className="relative flex justify-center items-center h-[420px] md:h-[500px] lg:h-[550px] overflow-visible perspective-2000"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
                <motion.div 
                    drag={window.innerWidth < 1024 ? "x" : false}
                    dragConstraints={{ left: 0, right: 0 }}
                    onDragEnd={handleDragEnd}
                    style={{ x: dragX }}
                    className="relative flex justify-center items-center w-full h-full cursor-default preserve-3d"
                >
                    {projects.map((project, index) => {
                        let activeOffset = index - activeIndex;
                        const total = projects.length;
                        
                        if (activeOffset > total / 2) activeOffset -= total;
                        if (activeOffset < -total / 2) activeOffset += total;

                        const isVisible = Math.abs(activeOffset) <= 2;
                        if (!isVisible) return null;

                        return (
                            <motion.div
                                key={project.title}
                                initial={false}
                                onClick={() => setActiveIndex(index)}
                                animate={{ zIndex: 10 - Math.round(Math.abs(activeOffset)) }}
                                transition={{ type: "spring", stiffness: 450, damping: 45 }}
                                className="absolute flex justify-center items-center preserve-3d cursor-pointer pointer-events-auto"
                            >
                                <ProjectCard 
                                    project={project} 
                                    index={index} 
                                    activeOffset={activeOffset} 
                                    onCardClick={setActiveIndex}
                                />
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>

        </div>
      </div>
    </section>
  );
};

export default Projects;
