import { FaHeart } from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full relative overflow-hidden py-6 mt-12 bg-transparent border-t border-white/5 backdrop-blur-md">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 flex flex-col md:flex-row items-center justify-between relative z-10 w-full gap-4 md:gap-0">
                
                {/* Left Side: Copyright */}
                <div className="flex items-center group">
                    <span className="text-gray-500 font-mono text-sm group-hover:text-[#0ea5e9] transition-colors duration-300">
                        &copy; {currentYear} <span className="text-white font-semibold ml-1">Anuj Ingole</span>. All Rights Reserved.
                    </span>
                </div>

                {/* Right Side: Designed With */}
                <div className="flex items-center space-x-2 bg-white/5 px-4 py-2 rounded-full border border-white/10 hover:border-[#0ea5e9]/40 transition-all duration-300">
                    <span className="text-gray-400 text-xs md:text-sm font-medium tracking-wide">Designed & Built with</span>
                    <FaHeart className="text-[#FF1E1E] animate-pulse drop-shadow-[0_0_8px_rgba(255,30,30,0.8)]" size={14} />
                    <span className="text-gray-400 text-xs md:text-sm font-medium tracking-wide">by <span className="text-white font-bold ml-1 hover:text-[#0ea5e9] transition-colors cursor-pointer">Anuj</span></span>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
