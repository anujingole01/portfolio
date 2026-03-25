import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import { FaPaintBrush, FaLayerGroup, FaPenNib, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const GraphicProjects = [
    {
        title: 'Brand Identity Design',
        category: 'Logo & Branding',
        img: 'https://images.unsplash.com/photo-1634942537034-22b392ee84bc?auto=format&fit=crop&q=80&w=800',
        icon: <FaPenNib />,
    },
    {
        title: 'UI/UX Mockups',
        category: 'Web Interface',
        img: 'https://images.unsplash.com/photo-1618761714954-0b8cd0026356?auto=format&fit=crop&q=80&w=800',
        icon: <FaLayerGroup />,
    },
    {
        title: 'Creative Illustrations',
        category: 'Digital Art',
        img: 'https://images.unsplash.com/photo-1572044162444-ad60f128bdea?auto=format&fit=crop&q=80&w=800',
        icon: <FaPaintBrush />,
    },
    {
        title: 'Motion Graphics',
        category: 'Animation',
        img: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800',
        icon: <FaLayerGroup />,
    },
    {
        title: 'Social Media Assets',
        category: 'Marketing Design',
        img: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800',
        icon: <FaPenNib />,
    }
];

const GraphicCard = ({ project, index, activeOffset, onCardClick }) => {
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
      transition={{ type: "spring", stiffness: 450, damping: 45, mass: 1, restDelta: 0.001 }}
      style={{
        rotateX: isActive ? rotateX : 0,
        rotateY: isActive ? rotateY : cardRotateY,
        transformStyle: "preserve-3d",
        willChange: "transform, opacity, filter"
      }}
      className={`relative w-[260px] h-[340px] md:w-[320px] md:h-[420px] lg:w-[350px] lg:h-[480px] rounded-[32px] overflow-hidden bg-[#111111] flex flex-col cursor-pointer pointer-events-auto ${isActive ? 'shadow-[0_20px_60px_rgba(244,63,94,0.3)] border-transparent' : 'shadow-lg border border-white/5'}`}
    >
      <div className="flex-1 flex flex-col relative">
        <motion.div 
            animate={{ x: activeOffset * 100 }}
            className="absolute inset-0 z-20 pointer-events-none bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-30" 
        />
        
        {/* Full Image Background overlay */}
        <div className="absolute inset-0 z-0">
          <motion.img 
            src={project.img} 
            alt={project.title}
            className="w-full h-full object-cover object-center filter grayscale group-hover:grayscale-0 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/40 to-transparent p-6 flex flex-col justify-end"></div>
        </div>

        {/* Content details at the bottom */}
        <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 flex flex-col justify-end z-10 transition-all bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent">
            <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white mb-3 shadow-[0_0_15px_rgba(244,63,94,0.3)] transition-all duration-500 ${isActive ? 'bg-rose-500 text-white border-rose-500' : ''}`}>
                {project.icon}
            </div>
            <p className={`text-[9px] font-black uppercase tracking-[0.3em] mb-1 ${isActive ? 'text-rose-500' : 'text-gray-400'}`}>
                {project.category}
            </p>
            <h3 className="text-lg md:text-xl font-bold text-white transition-colors">
                {project.title}
            </h3>
            
            <div className={`mt-3 h-0.5 w-full bg-gradient-to-r from-transparent via-rose-500 to-transparent transition-all duration-700 opacity-50 ${isActive ? 'opacity-100' : 'opacity-0'}`} />
        </div>
      </div>
    </motion.div>
  );
};

const Graphics = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    
    const interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % GraphicProjects.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isHovered]);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % GraphicProjects.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + GraphicProjects.length) % GraphicProjects.length);
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
    <section id="graphics" className="relative px-6 md:px-12 h-[100svh] w-full flex flex-col justify-center bg-transparent overflow-hidden perspective-2000 snap-start">
      <div className="max-w-7xl mx-auto relative w-full h-full flex flex-col justify-center">
        
        <h1 className="absolute text-[60px] sm:text-[80px] md:text-[100px] lg:text-[140px] font-black text-[#ffffff02] top-4 right-0 md:-right-8 pointer-events-none transition-all duration-700 uppercase select-none leading-none z-0">
            GRAPHICS
        </h1>

        <div className="relative z-10 w-full flex-1 flex flex-col justify-center">
            
            <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 mb-8 lg:mb-12">
              <div className="max-w-lg">
                  <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 text-[9px] font-bold text-white tracking-[0.2em] uppercase mb-4"
                  >
                    <div className="w-1 h-1 rounded-full bg-rose-500 animate-pulse" />
                    Creative Canvas
                  </motion.div>
                  <motion.h2 
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      className="text-4xl md:text-5xl font-black text-white tracking-tighter leading-none"
                  >
                      Visual <br />
                      <span className="text-rose-500 italic">Arts.</span>
                  </motion.h2>
                  <p className="mt-3 text-gray-400 text-xs md:text-sm font-medium leading-relaxed italic max-w-sm hidden sm:block">
                      Showcasing my design philosophy across branding, user interfaces, and digital art.
                  </p>
              </div>

              <div className="flex items-center gap-4">
                 <button onClick={handlePrev} className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-rose-500 hover:border-rose-500 transition-colors shadow-lg shadow-black/50 z-20">
                    <FaChevronLeft size={14} />
                 </button>
                 <button onClick={handleNext} className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-rose-500 hover:border-rose-500 transition-colors shadow-lg shadow-black/50 z-20">
                    <FaChevronRight size={14} />
                 </button>
              </div>
            </div>

            <div 
              className="relative flex justify-center items-center h-[360px] md:h-[460px] lg:h-[500px] overflow-visible perspective-2000"
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
                    {GraphicProjects.map((project, index) => {
                        let activeOffset = index - activeIndex;
                        const total = GraphicProjects.length;
                        
                        if (activeOffset > total / 2) activeOffset -= total;
                        if (activeOffset < -total / 2) activeOffset += total;

                        const isVisible = Math.abs(activeOffset) <= 2;
                        if (!isVisible) return null;

                        return (
                            <motion.div
                                key={index}
                                initial={false}
                                onClick={() => setActiveIndex(index)}
                                animate={{ zIndex: 10 - Math.round(Math.abs(activeOffset)) }}
                                transition={{ type: "spring", stiffness: 450, damping: 45 }}
                                className="absolute flex justify-center items-center preserve-3d cursor-pointer pointer-events-auto"
                            >
                                <GraphicCard 
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

export default Graphics;
