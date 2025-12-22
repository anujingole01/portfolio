import { motion } from 'framer-motion';
import { FaDownload, FaBriefcase, FaGraduationCap, FaCode } from 'react-icons/fa';
import { profile } from '../data/profile';
import { skills } from '../data/skills';

const Resume = () => {
    // Placeholder data - replace with real data when available
    const experience = [
        {
            id: 1,
            role: "Full Stack Developer",
            company: "Freelance",
            period: "2024 - Present",
            description: "Building modern web applications using MERN stack. key projects include Event Management System and Portfolio websites."
        },
        // Add more experience
    ];

    const education = [
        {
            id: 1,
            degree: "Bachelor of Technology in CSE",
            school: "Your University Name",
            period: "2021 - 2025",
            description: "Focusing on Software Development, Algorithms, and Web Technologies."
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 }
    };

    return (
        <div className="min-h-screen pt-20 pb-12 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="max-w-4xl mx-auto"
            >
                {/* Header */}
                <motion.div variants={itemVariants} className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                        Resume
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                        My professional journey and milestones
                    </p>
                    <a
                        href="/resume.pdf" // Placeholder path
                        download
                        className="inline-flex items-center px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors shadow-lg hover:shadow-blue-500/30"
                    >
                        <FaDownload className="mr-2" />
                        Download CV
                    </a>
                </motion.div>

                {/* Experience Section */}
                <motion.div variants={itemVariants} className="mb-12">
                    <h2 className="text-2xl font-bold flex items-center text-gray-900 dark:text-white mb-6">
                        <FaBriefcase className="mr-3 text-blue-500" />
                        Experience
                    </h2>
                    <div className="space-y-6">
                        {experience.map((exp) => (
                            <div key={exp.id} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100 dark:border-gray-700">
                                <div className="flex flex-col md:flex-row justify-between mb-2">
                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{exp.role}</h3>
                                    <span className="text-blue-500 font-medium">{exp.period}</span>
                                </div>
                                <h4 className="text-lg text-gray-700 dark:text-gray-300 mb-2">{exp.company}</h4>
                                <p className="text-gray-600 dark:text-gray-400">{exp.description}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Education Section */}
                <motion.div variants={itemVariants} className="mb-12">
                    <h2 className="text-2xl font-bold flex items-center text-gray-900 dark:text-white mb-6">
                        <FaGraduationCap className="mr-3 text-green-500" />
                        Education
                    </h2>
                    <div className="space-y-6">
                        {education.map((edu) => (
                            <div key={edu.id} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100 dark:border-gray-700">
                                <div className="flex flex-col md:flex-row justify-between mb-2">
                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{edu.degree}</h3>
                                    <span className="text-green-500 font-medium">{edu.period}</span>
                                </div>
                                <h4 className="text-lg text-gray-700 dark:text-gray-300 mb-2">{edu.school}</h4>
                                <p className="text-gray-600 dark:text-gray-400">{edu.description}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Technical Skills - Compact View */}
                <motion.div variants={itemVariants}>
                    <h2 className="text-2xl font-bold flex items-center text-gray-900 dark:text-white mb-6">
                        <FaCode className="mr-3 text-purple-500" />
                        Technical Skills
                    </h2>
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-100 dark:border-gray-700">
                        <div className="flex flex-wrap gap-2">
                            {skills.map((skill) => (
                                <span
                                    key={skill.name}
                                    className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm font-medium"
                                >
                                    {skill.name}
                                </span>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Resume;
