import Navbar from './Navbar';
import Footer from './Footer';
import GlobalParticles from './GlobalParticles';

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen bg-[#070707] text-gray-100 flex items-center justify-center p-1 lg:p-3 overflow-hidden">
            {/* The main card wrapper matching the exact design */}
            <div className="w-full max-w-[1550px] min-h-[96vh] bg-[#0A0A0A] rounded-[1.5rem] border border-[#222] relative flex flex-col shadow-[0_0_100px_rgba(0,0,0,0.8)] overflow-y-auto">
                <GlobalParticles />
                <Navbar />
                <main className="flex-grow pb-12">
                    {children}
                </main>
                <Footer />
            </div>
        </div>
    );
};

export default Layout;
