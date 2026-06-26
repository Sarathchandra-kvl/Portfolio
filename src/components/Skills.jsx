import { motion } from 'framer-motion';

const skills = [
  'Python', 'C++', 'Node.js', 'Solidity', 'SQL', 
  'PyTorch', 'LangChain', 'RAG', 'PostgreSQL', 'Hardhat', 'React'
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-gray-950 overflow-hidden relative">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Technical Arsenal</h2>
          <div className="w-20 h-1 bg-neonPurple mx-auto rounded" />
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, type: "spring", stiffness: 100 }}
              whileHover={{ scale: 1.1, backgroundColor: '#111827', borderColor: '#00f3ff' }}
              className="px-6 py-3 bg-gray-900 border border-gray-800 rounded-full text-gray-300 font-mono shadow-sm cursor-default transition-colors relative group"
            >
              <div className="absolute inset-0 rounded-full bg-neonBlue/10 opacity-0 group-hover:opacity-100 transition-opacity blur-md" />
              <span className="relative z-10">{skill}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
