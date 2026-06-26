import { motion } from 'framer-motion';

const roles = [
  { title: 'Placement Co-ordinator', org: 'Career Advancement and Mentoring Centre, IIT Indore', date: 'Feb 2026 - Present' },
  { title: 'Secretary', org: 'The Debating Society, IIT Indore', date: 'Apr 2026 - Present' },
  { title: 'Jr. Senator CSE', org: 'Students Gymkhana, IIT Indore', date: 'Apr 2025 - Apr 2026' },
  { title: 'Member (AI/ML)', org: 'Cynaptics Club, CSESA, IIT Indore', date: 'Jan 2025 - Present' },
  { title: 'Member (CP Division)', org: 'The Programming Club, IIT Indore', date: 'Feb 2025 - Present' },
];

const Leadership = () => {
  return (
    <section className="py-24 bg-gray-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center md:text-left"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Positions of Responsibility</h2>
          <div className="w-20 h-1 bg-neonBlue mx-auto md:mx-0 rounded" />
        </motion.div>

        <div className="space-y-4">
          {roles.map((role, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col md:flex-row justify-between items-start md:items-center p-5 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors"
            >
              <div>
                <h3 className="text-lg font-bold text-gray-200">{role.title}</h3>
                <p className="text-sm text-gray-400">{role.org}</p>
              </div>
              <div className="mt-2 md:mt-0 text-sm font-mono text-neonPurple bg-gray-950 px-3 py-1 rounded border border-gray-800">
                {role.date}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;
