import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-gray-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Experience</h2>
          <div className="w-20 h-1 bg-neonBlue rounded" />
        </motion.div>

        <div className="relative border-l border-gray-800 ml-3 md:ml-0">
          {/* Timeline Item */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-10 ml-8 relative"
          >
            <div className="absolute -left-10 mt-1.5 w-4 h-4 rounded-full bg-gray-950 border-2 border-neonBlue shadow-[0_0_10px_rgba(0,243,255,0.5)]" />
            
            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2">
              <h3 className="text-xl font-bold text-white">Data Science Intern</h3>
              <time className="text-sm text-gray-400 font-mono mt-1 md:mt-0">Dec 2025 - Mar 2026</time>
            </div>
            <p className="text-neonPurple font-medium mb-4">Drishti CPS Foundation</p>
            
            <ul className="list-disc list-outside ml-4 space-y-2 text-gray-400">
              <li>Engineered a high-throughput data ingestion pipeline using OpenCV/EasyOCR for 32,000+ CT slices.</li>
              <li>Architected an orchestration pipeline with 92% renal accuracy.</li>
              <li>Co-authored an ECCV submission (AbDo-CTRG) utilizing a Vision Mamba backbone.</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
