import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Graphics from './Graphics';
import Certifications from './Certifications';
import Education from './Education';
import Contact from './Contact';

const Home = () => {
    return (
        <div id="home">
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Graphics />
            <Certifications />
            <Education />
            <Contact />
        </div>
    );
};

export default Home;
