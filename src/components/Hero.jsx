import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { Link } from 'react-scroll';
import { profile } from '../data/profile';
import CodeTablet from './CodeTablet';
import { useEffect, useRef } from 'react';

const Hero = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        const particles = [];
        const numParticles = 80;
        const connectionDistance = 150;

        // Create particles
        for (let i = 0; i < numParticles; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                size: Math.random() * 2 + 1,
            });
        }

        let mouse = { x: null, y: null };

        const handleMouseMove = (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        };
        const handleMouseLeave = () => {
            mouse.x = null;
            mouse.y = null;
        };

        // Listen to window for smoother full-screen tracking
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseleave', handleMouseLeave);

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear but transparent

            // Check theme for colors (simple check for now, can be improved)
            const isDark = document.documentElement.classList.contains('dark');
            const particleColor = isDark ? 'rgba(255, 255, 255, 0.5)' : 'rgba(0, 0, 0, 0.4)';
            const lineColor = isDark ? 'rgba(59, 130, 246, 0.2)' : 'rgba(37, 99, 235, 0.15)'; // Blue tint

            ctx.fillStyle = particleColor;
            ctx.strokeStyle = lineColor;

            particles.forEach(p => {
                p.x += p.vx;
                p.y += p.vy;

                // Bounce off edges
                if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
                if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

                // Interaction with mouse
                if (mouse.x != null) {
                    const dx = mouse.x - p.x;
                    const dy = mouse.y - p.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    const forceRadius = 200;

                    if (distance < forceRadius) {
                        // Gentle attraction to mouse
                        const force = (forceRadius - distance) / forceRadius;
                        p.vx += dx * force * 0.0002;
                        p.vy += dy * force * 0.0002;
                    }
                }

                // Speed limit
                const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
                const maxSpeed = 1.5;
                if (speed > maxSpeed) {
                    p.vx = (p.vx / speed) * maxSpeed;
                    p.vy = (p.vy / speed) * maxSpeed;
                }

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fill();
            });

            // Draw connections
            ctx.lineWidth = 1;
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < connectionDistance) {
                        ctx.beginPath();
                        ctx.strokeStyle = isDark
                            ? `rgba(96, 165, 250, ${1 - distance / connectionDistance})` // Blue-400
                            : `rgba(37, 99, 235, ${1 - distance / connectionDistance})`; // Blue-600
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }

                // Connect to mouse
                if (mouse.x != null) {
                    const dx = particles[i].x - mouse.x;
                    const dy = particles[i].y - mouse.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    if (distance < connectionDistance * 1.5) {
                        ctx.beginPath();
                        ctx.strokeStyle = isDark
                            ? `rgba(255, 255, 255, ${1 - distance / (connectionDistance * 1.5)})`
                            : `rgba(0, 0, 0, ${1 - distance / (connectionDistance * 1.5)})`;
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(mouse.x, mouse.y);
                        ctx.stroke();
                    }
                }
            }

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseleave', handleMouseLeave);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <section id="home" className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 pt-16 relative overflow-hidden transition-colors duration-300">
            {/* Canvas Background */}
            <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full pointer-events-none z-0"
            />

            {/* Gradient Overlay for Fade */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-50 dark:to-gray-900 z-0 pointer-events-none h-full w-full"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row items-center relative z-10 w-full">

                <div className="w-full md:w-1/2 text-center md:text-left mt-12 md:mt-0 pointer-events-auto">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >

                        <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight">
                            I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">{profile.name}</span>
                        </h1>
                        <h3 className="text-2xl md:text-4xl font-semibold text-gray-700 dark:text-gray-300 mb-8 h-12 flex justify-center md:justify-start items-center">
                            <span className="mr-2 opacity-50">&gt;</span>
                            <span className="text-blue-600 dark:text-blue-400 font-mono">
                                <Typewriter
                                    words={[profile.role, "Graphic Designer", "Problem Solver", "Creative Dev"]}
                                    loop={true}
                                    cursor
                                    cursorStyle='_'
                                    typeSpeed={80}
                                    deleteSpeed={50}
                                    delaySpeed={1500}
                                />
                            </span>
                        </h3>
                        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-lg mx-auto md:mx-0 leading-relaxed">
                            {profile.bio}
                        </p>

                        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 justify-center md:justify-start">
                            <Link
                                to="projects"
                                smooth={true}
                                duration={500}
                                className="cursor-pointer px-8 py-4 rounded-full bg-blue-600 text-white font-bold text-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-500/25 transform hover:-translate-y-1"
                            >
                                Explore Work
                            </Link>
                            <Link
                                to="contact"
                                smooth={true}
                                duration={500}
                                className="cursor-pointer px-8 py-4 rounded-full border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-200 font-bold text-lg hover:border-blue-500 hover:text-blue-500 transition-all bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm"
                            >
                                Contact Me
                            </Link>
                        </div>
                    </motion.div>
                </div>

                <div className="w-full md:w-1/2 flex justify-center items-center perspective-1000">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, rotateY: 30 }}
                        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                        transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
                        className="relative"
                        whileHover={{ scale: 1.02, rotateY: 5, transition: { duration: 0.3 } }}
                    >
                        <div className="relative z-10 filter drop-shadow-2xl">
                            <CodeTablet />
                        </div>

                        {/* Glow behind tablet */}
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-500/10 rounded-full filter blur-[80px] -z-10 animate-pulse"></div>
                    </motion.div>
                </div>

            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer text-gray-400 dark:text-gray-500 z-20"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
            >
                <Link to="about" smooth={true} duration={500}>
                    <svg className="w-6 h-6 opacity-70 hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </Link>
            </motion.div>
        </section>
    );
};

export default Hero;
