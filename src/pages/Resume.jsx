import { motion } from 'framer-motion';
import { FaDownload, FaBriefcase, FaGraduationCap, FaCode, FaLaptopCode, FaChalkboardTeacher, FaCertificate, FaTrophy } from 'react-icons/fa';
import { skills } from '../data/skills';
import { internships, projects, training, education, certifications, achievements } from '../data/resume';

const SectionTitle = ({ icon: Icon, title, colorClass }) => (
    <h2 className="text-2xl font-bold flex items-center text-gray-900 dark:text-white mb-6">
        <Icon className={`mr-3 ${colorClass}`} />
        {title}
    </h2>
);

const ResumeItem = ({ title, subtitle, period, description, location, subHeader, children }) => (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100 dark:border-gray-700 mb-6">
        <div className="flex flex-col md:flex-row justify-between mb-2">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{title}</h3>
            <span className="text-blue-500 font-medium text-sm md:text-base whitespace-nowrap">{period}</span>
        </div>
        {subtitle && <h4 className="text-lg text-gray-700 dark:text-gray-300 font-medium mb-1">{subtitle}</h4>}
        {subHeader && <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{subHeader}</p>}
        {location && <p className="text-sm text-gray-500 dark:text-gray-400 mb-2 italic">{location}</p>}

        {Array.isArray(description) ? (
            <ul className="list-disc list-outside ml-5 space-y-1 text-gray-600 dark:text-gray-400">
                {description.map((item, idx) => (
                    <li key={idx}>{item}</li>
                ))}
            </ul>
        ) : (
            <p className="text-gray-600 dark:text-gray-400">{description}</p>
        )}
        {children}
    </div>
);

const Resume = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
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
                        My professional journey, projects, and milestones
                    </p>
                    <a
                        href="/resume.pdf"
                        download
                        className="inline-flex items-center px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors shadow-lg hover:shadow-blue-500/30"
                    >
                        <FaDownload className="mr-2" />
                        Download CV
                    </a>
                </motion.div>

                {/* Technical Skills - Categorized View */}
                <motion.div variants={itemVariants} className="mb-12">
                    <SectionTitle icon={FaCode} title="Technical Skills" colorClass="text-purple-500" />
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-100 dark:border-gray-700">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {skills.map((category) => (
                                <div key={category.category}>
                                    <h3 className="font-semibold text-gray-900 dark:text-white mb-3 text-lg border-b border-gray-200 dark:border-gray-700 pb-2">{category.category}</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {category.items.map((skill) => (
                                            <span
                                                key={skill.name}
                                                className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm font-medium hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors cursor-default"
                                            >
                                                {skill.name}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Internships */}
                <motion.div variants={itemVariants} className="mb-12">
                    <SectionTitle icon={FaBriefcase} title="Internships" colorClass="text-blue-500" />
                    {internships.map((job) => (
                        <ResumeItem
                            key={job.id}
                            title={job.role}
                            subtitle={job.company}
                            period={job.period}
                            description={job.description}
                        />
                    ))}
                </motion.div>

                {/* Projects */}
                <motion.div variants={itemVariants} className="mb-12">
                    <SectionTitle icon={FaLaptopCode} title="Projects" colorClass="text-indigo-500" />
                    {projects.map((project) => (
                        <ResumeItem
                            key={project.id}
                            title={project.title}
                            period={project.period}
                            description={project.description}
                        >
                            <div className="mt-3 pt-3 border-t border-gray-100 dark:border-gray-700">
                                <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                                    Tech: <span className="font-normal text-gray-600 dark:text-gray-400">{project.tech}</span>
                                </p>
                                {/* Link can be added here if needed */}
                            </div>
                        </ResumeItem>
                    ))}
                </motion.div>

                {/* Training */}
                <motion.div variants={itemVariants} className="mb-12">
                    <SectionTitle icon={FaChalkboardTeacher} title="Training" colorClass="text-orange-500" />
                    {training.map((train) => (
                        <ResumeItem
                            key={train.id}
                            title={train.role}
                            subtitle={train.company}
                            period={train.period}
                            description={train.description}
                        />
                    ))}
                </motion.div>

                {/* Certifications */}
                <motion.div variants={itemVariants} className="mb-12">
                    <SectionTitle icon={FaCertificate} title="Certifications" colorClass="text-yellow-500" />
                    <div className="space-y-4">
                        {certifications.map((cert) => (
                            <div key={cert.id} className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col md:flex-row justify-between items-start md:items-center">
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{cert.name}</h3>
                                    <p className="text-gray-600 dark:text-gray-400">{cert.issuer}</p>
                                </div>
                                <span className="text-yellow-600 dark:text-yellow-400 font-medium text-sm mt-2 md:mt-0">{cert.date}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Achievements */}
                <motion.div variants={itemVariants} className="mb-12">
                    <SectionTitle icon={FaTrophy} title="Achievements & Co-Curricular" colorClass="text-red-500" />
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-100 dark:border-gray-700">
                        <ul className="space-y-4">
                            {achievements.map((achievement) => (
                                <li key={achievement.id} className="flex justify-between items-start">
                                    <div className="flex items-start">
                                        <div className="mt-1.5 w-2 h-2 rounded-full bg-red-400 mr-3 shrink-0"></div>
                                        <span className="text-gray-700 dark:text-gray-300">{achievement.description}</span>
                                    </div>
                                    <span className="text-gray-500 dark:text-gray-500 text-sm ml-4 whitespace-nowrap">{achievement.date}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </motion.div>

                {/* Education Section */}
                <motion.div variants={itemVariants} className="mb-12">
                    <SectionTitle icon={FaGraduationCap} title="Education" colorClass="text-green-500" />
                    {education.map((edu) => (
                        <ResumeItem
                            key={edu.id}
                            title={edu.degree}
                            subtitle={edu.school}
                            location={edu.location}
                            period={edu.period}
                            description={edu.description}
                        />
                    ))}
                </motion.div>

            </motion.div>
        </div>
    );
};

export default Resume;
