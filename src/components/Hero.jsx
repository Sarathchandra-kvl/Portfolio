import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import heroImg from '../assets/hero.jpeg';
import lofiImg from '../assets/lofi_photo.jpg';

const words = ["Backend Developer", "AI/ML Enthusiast", "Competitive Programmer"];

const Hero = () => {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Banner collapse state
  const [isBannerCollapsed, setIsBannerCollapsed] = useState(false);

  useEffect(() => {
    let canCollapse = false;

    const handleScroll = () => {
      if (canCollapse) {
        setIsBannerCollapsed(window.scrollY > 50);
      }
    };

    // Wait 2.5 seconds before allowing the banner to collapse, 
    // so the user can enjoy the welcome screen even if they refresh while scrolled down!
    const timer = setTimeout(() => {
      canCollapse = true;
      handleScroll();
    }, 2500);

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    const currentWord = words[index];
    const typingSpeed = isDeleting ? 100 : 150; // Type slower, delete faster

    const timeout = setTimeout(() => {
      if (!isDeleting && text === currentWord) {
        // Pause at the end of the word
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && text === '') {
        // Move to the next word when completely deleted
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % words.length);
      } else {
        // Add or remove a character
        setText(currentWord.substring(0, text.length + (isDeleting ? -1 : 1)));
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, index]);

  return (
    <section className="pt-8 pb-32">
      <div className="max-w-6xl mx-auto px-6 md:px-12">

        {/* Banner Strip with Scroll Animation */}
        <motion.div
          onClick={() => setIsBannerCollapsed(true)}
          initial={false}
          animate={{
            height: isBannerCollapsed ? "12vh" : "85vh",
            borderRadius: isBannerCollapsed ? "1.5rem" : "0rem"
          }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="w-full overflow-hidden mb-12 md:mb-16 relative shadow-lg border border-borderGray dark:border-[#333333] transition-colors duration-500 bg-white/5 dark:bg-[#111111]/5 cursor-pointer"
        >
          <motion.img
            initial={false}
            animate={{
              opacity: isBannerCollapsed ? 1 : 0.9,
              scale: isBannerCollapsed ? 1 : 1
            }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            src={lofiImg}
            alt="Banner Cover"
            className="w-full h-full object-cover origin-center"
          />
          <motion.div
            animate={{ opacity: isBannerCollapsed ? 0 : 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/30 to-transparent pointer-events-none"
          ></motion.div>

          {/* Welcome Text Overlay */}
          <motion.div
            animate={{ opacity: isBannerCollapsed ? 0 : 1 }}
            transition={{ duration: 0.4, delay: isBannerCollapsed ? 0.2 : 0 }}
            className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none"
          >
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-white text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight drop-shadow-2xl"
            >
              Welcome.
            </motion.h2>

            {/* Scroll Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 1 }}
              className="absolute bottom-10 flex flex-col items-center animate-bounce text-white/70"
            >
              <span className="text-xs tracking-widest uppercase font-mono mb-2">Tap or Scroll</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
            </motion.div>
          </motion.div>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-12 md:gap-20 items-start">

          {/* Left Column: Photo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-56 md:w-64 lg:w-72 aspect-square flex-shrink-0 mt-2"
          >
            <img
              src={heroImg}
              alt="KVL Sarath Chandra"
              className="w-full h-full object-cover rounded-full shadow-md transition-all duration-500"
            />
          </motion.div>

          {/* Right Column: Text */}
          <div className="flex-1 pt-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-tight">
              <div className="h-16 md:h-20 flex items-center text-[#111111] dark:text-[#F9F5E8] transition-colors duration-500">
                <span
                  className="inline-block font-mono tracking-tight text-3xl md:text-4xl lg:text-5xl whitespace-nowrap"
                >
                  {text}
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ repeat: Infinity, duration: 0.8 }}
                    className="font-light text-[#E07A2A] ml-2"
                  >
                    |
                  </motion.span>
                </span>
              </div>
            </h1>
            {/* Qualifications */}
            <div className="flex flex-wrap items-center gap-4 mt-6 text-charcoal dark:text-[#F9F5E8] transition-colors duration-500">
              <span className="text-sm md:text-base font-serif italic tracking-wide" style={{ fontFamily: '"Playfair Display", serif' }}>
                B.Tech CSE, IIT Indore
              </span>
              <span className="text-[#E07A2A] text-xs">✦</span>
              <span className="text-sm md:text-base font-serif italic tracking-wide">
                AIR 961 JEE Adv'24
              </span>
              <span className="text-[#E07A2A] text-xs">✦</span>
              <span className="text-sm md:text-base font-serif italic tracking-wide" style={{ fontFamily: '"Playfair Display", serif' }}>
                Placement Co-ordinator
              </span>
            </div>

            {/* Subtitle */}
            <div className="mt-8">
              <div className="text-2xl md:text-3xl lg:text-4xl text-[#E07A2A] font-medium tracking-tight">Building robust systems</div>
              <div className="text-2xl md:text-3xl lg:text-4xl text-[#C25E00] font-medium tracking-tight mt-1">for complex problems.</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
