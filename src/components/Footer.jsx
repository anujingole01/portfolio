import { FaHeart } from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full relative overflow-hidden py-10 mt-12 bg-gradient-to-b from-transparent to-[#0A0A0A]">
            
            {/* Subtle top border gradient */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-px bg-gradient-to-r from-transparent via-[#0ea5e9]/50 to-transparent"></div>

            <div className="max-w-[1300px] mx-auto px-8 md:px-16 flex flex-col items-center justify-center relative z-10">
                <div className="flex items-center justify-center space-x-2 mb-4">
                    <span className="text-gray-400 text-sm md:text-base font-medium">Designed & Built with</span>
                    <FaHeart className="text-[#FF1E1E] animate-pulse" size={16} />
                    <span className="text-gray-400 text-sm md:text-base font-medium">by <span className="text-white font-bold tracking-wide hover:text-[#0ea5e9] transition-colors cursor-pointer">Anuj Ingole</span></span>
                </div>
                
                <p className="text-gray-600 text-xs md:text-sm font-semibold tracking-widest uppercase">
                    &copy; {currentYear} All Rights Reserved.
                </p>

                {/* Ambient Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[100px] bg-[#0ea5e9]/5 blur-[80px] rounded-full -z-10"></div>
            </div>
        </footer>
    );
};

export default Footer;
