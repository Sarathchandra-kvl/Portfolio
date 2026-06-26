import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Cursor = () => {
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-5 h-5 rounded-full border border-[#111111] dark:border-[#F9F5E8] bg-[#111111]/15 dark:bg-[#F9F5E8]/15 pointer-events-none z-[10000] hidden md:block mix-blend-multiply dark:mix-blend-normal transition-colors duration-500"
      animate={{
        x: mousePos.x - 10,
        y: mousePos.y - 10,
      }}
      transition={{
        type: "tween",
        ease: "backOut",
        duration: 0.1
      }}
    />
  );
};

export default Cursor;
