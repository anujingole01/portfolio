import Navbar from './Navbar';

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen bg-[#0C0C0C] text-gray-100 flex items-center justify-center p-1 lg:p-3 overflow-hidden">
            {/* The main card wrapper matching the exact design */}
            <div className="w-full max-w-[1550px] min-h-[96vh] bg-[#141414] rounded-[1.5rem] border border-[#2A2A2A] relative flex flex-col shadow-2xl overflow-y-auto">
                <Navbar />
                <main className="flex-grow pb-12">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default Layout;
