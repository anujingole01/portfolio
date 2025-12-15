import { motion } from 'framer-motion';
import { profile } from '../data/profile';
import setupImg from '../assets/setup.png';

const About = () => {
    return (
        <section id="about" className="py-20 bg-white dark:bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white"
                    >
                        About Me
                    </motion.h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="w-full md:w-1/2 mb-8 md:mb-0"
                    >
                        <div className="relative max-w-md mx-auto md:mr-auto">
                            <img
                                src={setupImg}
                                alt="Coding setup"
                                className="rounded-lg shadow-xl"
                            />
                            <div className="absolute -bottom-6 -right-6 w-full h-full border-4 border-blue-600 rounded-lg -z-10 hidden md:block"></div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="w-full md:w-1/2 md:pl-12"
                    >
                        <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                            I'm {profile.name}, a {profile.role}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                            {profile.bio}
                        </p>
                        <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                            I am currently studying <strong>{profile.degree}</strong> at <strong>{profile.university}</strong>.
                            My journey in web development started with a curiosity for how things work on the internet, and it has evolved into a passion for building robust and scalable applications.
                        </p>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                                <h4 className="font-bold text-blue-600 text-xl">5+</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-300">Projects Completed</p>
                            </div>
                            <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                                <h4 className="font-bold text-blue-600 text-xl">1+</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-300">Years Experience</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
