import { motion } from 'framer-motion';

const Navbar = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <nav className="w-full pt-4 pb-2 z-50 sticky top-0 bg-white/80 dark:bg-[#111111]/80 backdrop-blur-md border-b border-borderGray/50 dark:border-[#333333]/50 transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-2xl italic tracking-tight text-[#111111] dark:text-[#F9F5E8] transition-colors duration-500"
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            KVL Sarath Chandra
          </motion.div>
          
          <div className="hidden md:block">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex gap-8 text-sm font-medium tracking-wide text-[#111111] dark:text-[#F9F5E8] items-center transition-colors duration-500"
            >
              <a href="#about" className="hover:opacity-60 transition-opacity">ABOUT</a>
              <a href="#work" className="hover:opacity-60 transition-opacity">WORK</a>
              <a href="/Portfolio/resume.pdf" target="_blank" rel="noreferrer" className="hover:opacity-60 transition-opacity">RESUME</a>
              <a href="#contact" className="hover:opacity-60 transition-opacity">CONTACT</a>
              
              <button 
                onClick={toggleDarkMode}
                className="p-2 ml-4 rounded-full border border-[#E5E7EB] dark:border-[#333333] hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-lg"
                aria-label="Toggle Dark Mode"
              >
                {isDarkMode ? '☀️' : '🌙'}
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
