import { motion } from 'framer-motion';
import { Trophy, Code, GraduationCap, Medal } from 'lucide-react';

const Achievements = () => {
  const stats = [
    { platform: 'Codeforces', title: 'Expert', rating: 'Max Rating: 1650', icon: <Terminal className="w-8 h-8 text-red-500" />, border: 'border-red-500/50', glow: 'shadow-[0_0_20px_rgba(239,68,68,0.2)]' },
    { platform: 'LeetCode', title: 'Knight', rating: 'Max Rating: 1927', icon: <Code className="w-8 h-8 text-[#FFA116]" />, border: 'border-[#FFA116]/50', glow: 'shadow-[0_0_20px_rgba(255,161,22,0.2)]' },
    { platform: 'CodeChef', title: '3-Star', rating: 'Max Rating: 1687', icon: <Trophy className="w-8 h-8 text-amber-600" />, border: 'border-amber-600/50', glow: 'shadow-[0_0_20px_rgba(217,119,6,0.2)]' },
  ];

  return (
    <section id="achievements" className="py-24 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Achievements</h2>
          <div className="w-20 h-1 bg-neonBlue rounded" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`p-6 bg-gray-900 rounded-2xl border ${stat.border} ${stat.glow} transition-all relative overflow-hidden`}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-gray-950 rounded-xl">
                  {stat.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-300">{stat.platform}</h3>
                  <div className="text-2xl font-extrabold text-white">{stat.title}</div>
                </div>
              </div>
              <div className="text-sm text-gray-400 font-mono">{stat.rating}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-6 bg-gray-900/50 rounded-2xl border border-gray-800 flex items-start gap-4"
          >
            <GraduationCap className="w-8 h-8 text-neonPurple flex-shrink-0" />
            <div>
              <h3 className="text-xl font-bold text-white mb-1">Academics</h3>
              <p className="text-gray-400">8.79 CGPA (IIT Indore)</p>
              <p className="text-neonBlue font-mono text-sm mt-2">JEE Advanced AIR 961 Top 0.5% (186k+ candidates)</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-6 bg-gray-900/50 rounded-2xl border border-gray-800 flex items-start gap-4"
          >
            <Medal className="w-8 h-8 text-amber-400 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-bold text-white mb-1">Hackathon</h3>
              <p className="text-gray-400">Bronze Medalist, IITI Summer of Code (AI/ML)</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Simple Terminal icon wrapper since we didn't import it at the top
const Terminal = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <polyline points="4 17 10 11 4 5"></polyline>
    <line x1="12" y1="19" x2="20" y2="19"></line>
  </svg>
);

export default Achievements;
