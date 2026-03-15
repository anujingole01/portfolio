import { motion } from 'framer-motion';
import { FaGraduationCap, FaUniversity } from 'react-icons/fa';

const EducationData = [
    {
        degree: "Bachelor of Technology - Computer Science and Engineering",
        institution: "Lovely Professional University, Phagwara, Punjab",
        duration: "Aug '24 - Present",
        description: "Specializing in advanced Computer Science logic and software engineering fundamentals.",
        score: "CGPA: 6.7"
    },
    {
        degree: "Diploma - Computer Science and Engineering",
        institution: "Lovely Professional University, Phagwara, Punjab",
        duration: "Jul '22 - Jul '24",
        description: "Focus on foundational software engineering, algorithms, and technical computing skills.",
        score: "CGPA: 8.2"
    },
    {
        degree: "Intermediate",
        institution: "Abhyasa English School, Amravati, Maharashtra",
        duration: "Jun '20 - Mar '22",
        description: "Completed secondary education with an early focus on science and logic.",
        score: "Percentage: 58%"
    }
];

const Education = () => {
    return (
        <section id="education" className="py-24 relative overflow-hidden bg-[#0A0A0A]">
            <div className="max-w-[1300px] mx-auto px-8 md:px-16 w-full relative z-10">
                <div className="text-left mb-16">
                    <span className="text-[#0ea5e9] text-sm font-semibold tracking-widest uppercase block mb-2 flex items-center">
                        <FaGraduationCap className="mr-2" size={16}/> Academic Background
                    </span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-white tracking-tight"
                    >
                        Education <span className="text-[#0ea5e9]">Timeline</span>
                    </motion.h2>
                </div>

                <div className="relative border-l-2 border-[#2A2A2A] ml-4 md:ml-8 pl-8 md:pl-12 space-y-12">
                    {EducationData.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="relative group p-8 bg-[#161616] border border-[#2A2A2A] hover:border-[#0ea5e9] rounded-2xl shadow-xl transition-all duration-300"
                        >
                            {/* Timeline node */}
                            <div className="absolute -left-[3.1rem] md:-left-[4.1rem] top-8 w-12 h-12 bg-[#1A1A1A] border-4 border-[#0ea5e9] rounded-full flex items-center justify-center shadow-lg">
                                <FaUniversity className="text-[#0ea5e9] text-xl" />
                            </div>

                            <span className="inline-block px-4 py-1 mb-4 text-xs font-bold text-[#0ea5e9] bg-[#0ea5e9]/10 rounded-full uppercase tracking-wider">
                                {item.duration}
                            </span>
                            
                            <h3 className="text-2xl font-bold text-white mb-2">{item.degree}</h3>
                            <h4 className="text-lg text-gray-400 font-medium mb-4">{item.institution}</h4>
                            
                            <p className="text-gray-400 mb-6 leading-relaxed">
                                {item.description}
                            </p>

                            <div className="inline-block border border-[#333] px-4 py-2 rounded-lg bg-[#1C1C1C]">
                                <span className="text-sm font-bold text-white">{item.score}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
