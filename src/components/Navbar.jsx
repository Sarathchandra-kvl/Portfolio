import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = ({ isDarkMode, toggleDarkMode }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="w-full pt-4 pb-2 z-50 sticky top-0 bg-white/80 dark:bg-[#111111]/80 backdrop-blur-md border-b border-borderGray/50 dark:border-[#333333]/50 transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-2xl italic tracking-tight text-[#111111] dark:text-[#F9F5E8] transition-colors duration-500 z-50"
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            KVL Sarath Chandra
          </motion.div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide text-[#111111] dark:text-[#F9F5E8] transition-colors duration-500">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex gap-8 items-center">
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

          {/* Mobile Controls (Toggle + Hamburger) */}
          <div className="flex items-center gap-4 md:hidden z-50">
            <button 
              onClick={toggleDarkMode}
              className="p-2 rounded-full border border-[#E5E7EB] dark:border-[#333333] bg-white/50 dark:bg-black/50 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-lg"
              aria-label="Toggle Dark Mode"
            >
              {isDarkMode ? '☀️' : '🌙'}
            </button>
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-[#111111] dark:text-[#F9F5E8]"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white/95 dark:bg-[#111111]/95 backdrop-blur-xl border-b border-[#E5E7EB] dark:border-[#333333] py-6 px-6 flex flex-col gap-6 text-lg font-medium shadow-2xl md:hidden"
          >
            <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="hover:opacity-60 transition-opacity">ABOUT</a>
            <a href="#work" onClick={() => setIsMobileMenuOpen(false)} className="hover:opacity-60 transition-opacity">WORK</a>
            <a href="/Portfolio/resume.pdf" target="_blank" rel="noreferrer" onClick={() => setIsMobileMenuOpen(false)} className="hover:opacity-60 transition-opacity">RESUME</a>
            <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="hover:opacity-60 transition-opacity">CONTACT</a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
