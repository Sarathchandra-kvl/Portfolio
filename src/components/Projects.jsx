import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import project1Video from '../assets/Video Project.mp4';
import project2Video from '../assets/Nestoria-video.mp4';
import project3Video from '../assets/HashBandits-video.mp4';
const projects = [
  {
    title: 'Retrievix-IITI',
    tags: ['Python', 'LangGraph', 'RAG', '2025'],
    description: 'Architected a LangGraph backend orchestrating LLaMA-70B and DeepSeek R1 across 7 specialized agents. Implemented Adaptive RAG for multi-hop retrieval.',
    link: 'https://github.com/Sarathchandra-kvl/Retrievix-IITI'
  },
  {
    title: 'Nestoria',
    tags: ['Node.js', 'PostgreSQL', '2025'],
    description: 'RESTful Node.js hotel booking backend backed by a normalized 10-table 3NF PostgreSQL schema. Secured APIs via RBAC/JWT.',
    link: 'https://github.com/Sarathchandra-kvl/Nestoria'
  },
  {
    title: 'HashBandits DAO',
    tags: ['Solidity', 'Hardhat', '2026'],
    description: 'On-chain DAO governance system integrating snapshot-based voting and timelocks. Achieved 48.1% gas reduction.',
    link: 'https://github.com/Sarathchandra-kvl/HashBandits'
  }
];

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="work" className="py-24 relative cursor-default" ref={containerRef}>
      
      {/* Custom Cursor */}
      <AnimatePresence>
        {hoveredIndex !== null && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed top-0 left-0 pointer-events-none z-50 flex items-center justify-center bg-sageGreen text-white text-xs font-bold tracking-widest px-4 py-2 rounded-full whitespace-nowrap shadow-md"
            style={{ 
              x: mousePos.x + 15, 
              y: mousePos.y + 15 
            }}
          >
            VIEW PROJECT
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row gap-12 md:gap-24">
          
          {/* Left Column: Title */}
          <div className="w-48 flex-shrink-0">
            <h2 className="text-sm font-display font-semibold tracking-widest uppercase text-charcoal dark:text-[#F9F5E8] transition-colors duration-500 sticky top-24">
              SELECTED PROJECTS ↳
            </h2>
          </div>

          {/* Right Column: Project Grid */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-12">
            {projects.map((project, index) => (
              <a 
                href={project.link}
                target="_blank"
                rel="noreferrer"
                key={index}
                className="group relative block md:cursor-none"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Project Thumbnail Placeholder */}
                <div className={`w-full aspect-video rounded-xl mb-6 overflow-hidden transition-all duration-700 group-hover:scale-[1.03] group-hover:shadow-2xl flex items-center justify-center relative ${
                  index === 0 ? 'bg-gradient-to-br from-orange-100 to-sageGreen/20 dark:from-orange-900/30 dark:to-sageGreen/20' :
                  index === 1 ? 'bg-gradient-to-tr from-sageGreen/20 to-blue-100 dark:from-sageGreen/20 dark:to-blue-900/30' :
                  'bg-gradient-to-bl from-purple-100 to-orange-50 dark:from-purple-900/30 dark:to-orange-900/20'
                }`}>
                  {/* Subtle dotted grid overlay */}
                  <div className="absolute inset-0 opacity-40 dark:opacity-20 mix-blend-overlay" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(0,0,0,1) 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
                  
                  {/* Abstract expanding rings */}
                  <div className="absolute w-32 h-32 rounded-full border-[1px] border-charcoal/20 dark:border-white/10 group-hover:scale-[2] transition-transform duration-1000 ease-out"></div>
                  <div className="absolute w-64 h-64 rounded-full border-[1px] border-charcoal/10 dark:border-white/5 group-hover:scale-[2] transition-transform duration-1000 delay-75 ease-out"></div>
                  
                  <span className="text-charcoal/30 dark:text-white/20 text-8xl font-display font-bold group-hover:scale-110 transition-transform duration-500 relative z-10">
                    0{index + 1}
                  </span>

                  {(index === 0 || index === 1 || index === 2) && (
                    <div className="absolute inset-0 z-20 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-charcoal dark:bg-black">
                      <video 
                        src={index === 0 ? project1Video : index === 1 ? project2Video : project3Video} 
                        autoPlay 
                        loop 
                        muted 
                        playsInline
                        className="w-full h-full object-cover opacity-90 scale-100 md:scale-105 md:group-hover:scale-100 transition-transform duration-1000 ease-out"
                      />
                    </div>
                  )}
                </div>
                
                <h3 className="text-2xl font-display font-semibold text-charcoal dark:text-[#F9F5E8] mb-3 group-hover:text-sageGreen transition-colors flex items-center justify-between">
                  {project.title}
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity text-sageGreen">↗</span>
                </h3>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 text-xs font-medium text-mutedGray dark:text-gray-400 border border-borderGray dark:border-[#333333] rounded-full bg-white dark:bg-[#1A1A1A]">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <p className="text-mutedGray dark:text-gray-400 leading-relaxed text-sm transition-colors duration-500">
                  {project.description}
                </p>
              </a>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Projects;
