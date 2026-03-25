import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import { HiX } from "react-icons/hi";
import { FaAward, FaCalendarAlt, FaFingerprint, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { certifications } from "../data/certifications";

const HolographicFoil = ({ x, y, themeColor }) => {
  const foilX = useTransform(x, [-1, 1], ["0%", "100%"]);
  const foilY = useTransform(y, [-1, 1], ["0%", "100%"]);
  
  return (
    <motion.div 
      className="absolute inset-0 z-10 pointer-events-none mix-blend-color-dodge opacity-0 group-hover:opacity-70 transition-opacity duration-700"
      style={{
        background: `
          radial-gradient(circle at ${foilX} ${foilY}, 
            ${themeColor}44 0%, 
            rgba(255, 255, 255, 0.4) 30%,
            transparent 70%
          ),
          repeating-linear-gradient(
            45deg,
            ${themeColor}11 0%,
            rgba(255, 255, 255, 0.05) 10%,
            ${themeColor}11 20%
          )
        `,
        backgroundSize: "200% 200%",
      }}
    />
  );
};

const defaultStyles = [
  { color: "#0ea5e9", gradientFrom: "from-cyan-500", gradientTo: "to-blue-500", bgClass: "bg-cyan-900/10" },
  { color: "#10b981", gradientFrom: "from-emerald-500", gradientTo: "to-teal-500", bgClass: "bg-emerald-900/10" },
  { color: "#8b5cf6", gradientFrom: "from-violet-500", gradientTo: "to-purple-500", bgClass: "bg-violet-900/10" },
  { color: "#f43f5e", gradientFrom: "from-rose-500", gradientTo: "to-red-500", bgClass: "bg-rose-900/10" },
  { color: "#f59e0b", gradientFrom: "from-amber-500", gradientTo: "to-orange-500", bgClass: "bg-amber-900/10" },
];

const CertificateCard = ({ cert, index, activeOffset, onCardClick }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const styleConfig = defaultStyles[index % defaultStyles.length];
  const themeColor = styleConfig.color;

  const springConfig = { damping: 20, stiffness: 150 };
  const mouseXSpring = useSpring(x, springConfig);
  const mouseYSpring = useSpring(y, springConfig);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["8deg", "-8deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-8deg", "8deg"]);
  const shimmerX = useTransform(mouseXSpring, [-0.5, 0.5], ["-200%", "200%"]);

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
      layout
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={(e) => {
        e.stopPropagation();
        onCardClick();
      }}
      animate={{
        x: cardX,
        rotateY: cardRotateY,
        z: cardZ,
        scale: cardScale,
        opacity: cardOpacity,
        filter: distance > 0.1 ? `blur(${Math.min(distance * 1.5, 2)}px)` : "blur(0px)",
      }}
      transition={{ type: "spring", stiffness: 450, damping: 45, mass: 1, restDelta: 0.001 }}
      className={`group relative w-[280px] h-[360px] md:w-[340px] md:h-[420px] lg:w-[380px] lg:h-[480px] rounded-[32px] cursor-pointer preserve-3d transition-colors duration-700 pointer-events-auto ${isActive ? 'shadow-[0_20px_60px_rgba(244,63,94,0.3)]' : 'shadow-lg'}`}
      style={{
        rotateX: isActive ? rotateX : 0,
        rotateY: isActive ? rotateY : cardRotateY,
        transformStyle: "preserve-3d",
        willChange: "transform, opacity, filter"
      }}
    >
      <div className={`relative w-full h-full rounded-[32px] overflow-hidden border-[4px] border-white/10 transition-colors duration-700 bg-[#0a0a0a]`}>
        
        <HolographicFoil x={x} y={y} themeColor={themeColor} />
        <div className={`absolute inset-0 rounded-[inherit] opacity-10 group-hover:opacity-20 transition-opacity duration-700 bg-gradient-to-br ${styleConfig.gradientFrom} ${styleConfig.gradientTo}`} />

        <div className="absolute inset-0 border-t-[2px] border-l-[2px] border-white/5 rounded-[inherit] z-20 pointer-events-none" />
        <div className="absolute inset-0 border-b-[2px] border-r-[2px] border-black/50 rounded-[inherit] z-20 pointer-events-none" />

        <motion.div style={{ x: shimmerX }} className="absolute inset-0 rounded-[inherit] z-10 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 pointer-events-none" />

        <div className="relative z-10 p-6 h-full flex flex-col items-center text-center justify-between pointer-events-none">
          <div className="w-full flex justify-between items-center opacity-80 group-hover:opacity-100 transition-all duration-700">
            <span className="text-[9px] font-mono font-black uppercase tracking-[0.3em]" style={{ color: `${themeColor}99` }}>CERT-{index + 1}</span>
            <div className="flex items-center gap-1.5 px-3 py-1 bg-black/50 backdrop-blur-md rounded-full border shadow-sm" style={{ borderColor: `${themeColor}22` }}>
               <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: themeColor }} />
               <span className="text-[8px] font-black uppercase tracking-[0.2em] text-gray-300">Verified</span>
            </div>
          </div>

          <div className="relative my-4" style={{ transform: "translateZ(40px)" }}>
            <motion.div 
               className="w-16 h-16 md:w-20 md:h-20 bg-[#111111] rounded-[24px] flex items-center justify-center shadow-2xl border transition-all duration-700"
               style={{ borderColor: `${themeColor}33`, color: themeColor }}
            >
                <FaAward size={32} />
            </motion.div>
            
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-3 -right-3 w-8 h-8 rounded-full border bg-[#111111]/90 backdrop-blur-sm flex items-center justify-center shadow-lg transition-all duration-700"
              style={{ borderColor: `${themeColor}44`, color: themeColor }}
            >
              <FaFingerprint size={12} />
            </motion.div>
          </div>

          <div className="w-full space-y-3" style={{ transform: "translateZ(20px)" }}>
            <h3 className="text-sm md:text-lg font-black text-white leading-tight uppercase tracking-tighter line-clamp-2">
              {cert.title}
            </h3>
            <div className="flex flex-col items-center gap-2">
              <p className="text-[9px] font-mono font-black uppercase tracking-[0.4em] line-clamp-1" style={{ color: themeColor }}>{cert.issuer}</p>
              <div className="h-[2px] w-6 rounded-full transition-all duration-700 group-hover:w-16" style={{ backgroundColor: themeColor }} />
            </div>
          </div>

          <div className="w-full pt-4 flex items-center justify-between opacity-80 group-hover:opacity-100 transition-all duration-700">
            <div className="flex items-center gap-2 text-gray-400">
              <FaCalendarAlt size={10} style={{ color: themeColor }} />
              <span className="text-[9px] font-mono font-bold uppercase tracking-widest">{cert.date}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <FaAward size={10} style={{ color: themeColor }} />
              <span className="text-[8px] font-mono font-black uppercase tracking-tighter text-gray-500">Archive-V5.0</span>
            </div>
          </div>
        </div>

        <div className="absolute inset-0 rounded-[inherit] opacity-[0.1] pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] bg-[size:16px_16px]" />
      </div>

      <div 
        className="absolute inset-x-8 bottom-0 h-8 blur-[40px] rounded-full -z-10 opacity-0 group-hover:opacity-40 transition-opacity duration-700" 
        style={{ backgroundColor: themeColor }}
      />
    </motion.div>
  );
};

const SimpleCertificateModal = ({ cert, index, onClose }) => {
  const styleConfig = defaultStyles[index % defaultStyles.length];
  const themeColor = styleConfig.color;

  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center p-2 sm:p-6 w-screen h-screen">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 backdrop-blur-xl bg-black/80 w-full h-full"
      />

      <motion.div
        initial={{ scale: 0.95, opacity: 0, y: 30 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 30 }}
        className="relative w-full max-w-5xl max-h-screen flex flex-col bg-[#0a0a0a] rounded-3xl shadow-2xl overflow-hidden border border-white/10 z-10"
      >
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-white/10 shrink-0">
          <div className="flex items-center gap-4">
            <div 
              className="w-10 h-10 rounded-xl flex items-center justify-center text-white shadow-lg"
              style={{ backgroundColor: themeColor }}
            >
               <FaAward size={16} />
            </div>
            <div>
              <h3 className="text-sm sm:text-lg font-bold text-white leading-tight line-clamp-1">
                {cert.title}
              </h3>
              <p className="text-[10px] sm:text-xs text-gray-400 font-bold uppercase tracking-widest mt-0.5">
                {cert.issuer}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full flex items-center justify-center transition-all shadow-lg bg-white/5 text-white hover:bg-rose-500 hover:text-white shrink-0 ml-4"
          >
            <HiX size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-auto relative bg-[#050505] p-2 sm:p-8 flex justify-center items-center">
            <img 
              src={cert.image} 
              alt={cert.title} 
              className="max-w-full max-h-full object-contain rounded-xl sm:rounded-2xl shadow-2xl border border-white/5"
            />
        </div>
      </motion.div>
    </div>
  );
};

function Certifications() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedCert, setSelectedCert] = useState(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered || selectedCert) return;
    
    const interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % certifications.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isHovered, selectedCert]);

  useEffect(() => {
    if (selectedCert) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [selectedCert]);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % certifications.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + certifications.length) % certifications.length);
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
    <section id="certifications" className="relative px-6 md:px-12 h-[100svh] w-full flex flex-col justify-center bg-transparent overflow-hidden perspective-2000 snap-start">
      <AnimatePresence>
        {selectedCert && (
          <SimpleCertificateModal 
            cert={selectedCert.cert}
            index={selectedCert.index}
            onClose={() => setSelectedCert(null)} 
          />
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto relative w-full h-full flex flex-col justify-center">
        
        <h1 className="absolute text-[50px] sm:text-[80px] md:text-[100px] lg:text-[130px] font-black text-[#ffffff02] top-4 left-0 md:-left-8 pointer-events-none transition-all duration-700 uppercase select-none leading-none z-0">
            CERTIFICATES
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
                    Professional Credentials
                  </motion.div>
                  <motion.h2 
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      className="text-4xl md:text-5xl font-black text-white tracking-tighter leading-none"
                  >
                      My <br />
                      <span className="text-rose-500 italic">Certifications.</span>
                  </motion.h2>
                  <p className="mt-3 text-gray-400 text-xs md:text-sm font-medium leading-relaxed italic max-w-sm hidden sm:block">
                      Validating my technical expertise through global standards.
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
              className="relative flex justify-center items-center h-[380px] md:h-[460px] lg:h-[500px] overflow-visible perspective-2000"
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
                    {certifications.map((cert, index) => {
                        let activeOffset = index - activeIndex;
                        const total = certifications.length;
                        
                        if (activeOffset > total / 2) activeOffset -= total;
                        if (activeOffset < -total / 2) activeOffset += total;

                        const isVisible = Math.abs(activeOffset) <= 2;
                        if (!isVisible) return null;

                        return (
                            <motion.div
                                key={index}
                                initial={false}
                                animate={{ zIndex: 10 - Math.round(Math.abs(activeOffset)) }}
                                transition={{ type: "spring", stiffness: 450, damping: 45 }}
                                className="absolute flex justify-center items-center preserve-3d pointer-events-auto"
                            >
                                <CertificateCard 
                                    cert={cert} 
                                    index={index} 
                                    activeOffset={activeOffset} 
                                    onCardClick={() => {
                                      if (activeOffset === 0) setSelectedCert({ cert, index });
                                      else setActiveIndex(index);
                                    }}
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
}

export default Certifications;
