import Navbar from './Navbar';

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
            <Navbar />
            <main>
                {children}
            </main>
            <footer className="bg-white dark:bg-gray-800 py-8 mt-20 border-t border-gray-200 dark:border-gray-700">
                <div className="max-w-7xl mx-auto px-4 text-center text-gray-600 dark:text-gray-400">
                    <p>© {new Date().getFullYear()} All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
