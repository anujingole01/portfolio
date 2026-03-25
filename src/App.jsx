import { Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Layout from './components/Layout';
import Home from './components/Home';
import Resume from './pages/Resume';

function App() {
  return (
    <>
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-10] bg-[#050505]">
        <motion.div
          animate={{
            x: [0, 80, -40, 0],
            y: [0, -60, 80, 0],
            scale: [1, 1.2, 0.9, 1],
            rotate: [0, 45, -45, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] left-[-10%] w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-rose-500/10 rounded-full blur-[100px] md:blur-[120px]"
        />
        <motion.div
          animate={{
            x: [0, -100, 60, 0],
            y: [0, 80, -40, 0],
            scale: [1, 1.3, 0.8, 1],
            rotate: [0, -30, 30, 0]
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear", delay: 2 }}
          className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] md:w-[700px] md:h-[700px] bg-indigo-500/10 rounded-full blur-[100px] md:blur-[120px]"
        />
      </div>

      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
