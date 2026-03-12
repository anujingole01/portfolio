import Navbar from './Navbar';

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen bg-[#0C0C0C] text-gray-100 flex items-center justify-center p-2 lg:p-6 overflow-hidden">
            {/* The main card wrapper matching the exact design */}
            <div className="w-full max-w-[1400px] min-h-[92vh] bg-[#141414] rounded-[2rem] border border-[#2A2A2A] relative flex flex-col shadow-2xl overflow-y-auto">
                <Navbar />
                <main className="flex-grow pb-12">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default Layout;
