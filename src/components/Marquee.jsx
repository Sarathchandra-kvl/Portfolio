import { motion } from 'framer-motion';

const Marquee = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full z-50">
      <div className="bg-[#F9F5E8] dark:bg-[#111111] border-t border-borderGray dark:border-[#333333] overflow-hidden relative flex items-center py-4 transition-colors duration-500">
        <div className="absolute left-0 w-24 h-full bg-gradient-to-r from-[#F9F5E8] dark:from-[#111111] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 w-24 h-full bg-gradient-to-l from-[#F9F5E8] dark:from-[#111111] to-transparent z-10 pointer-events-none" />

        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 70 }}
          className="flex whitespace-nowrap items-center text-lg md:text-xl font-medium text-charcoal dark:text-[#F9F5E8] w-max tracking-wide transition-colors duration-500"
        >
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-12 items-center px-6">
              <span>AIR 961 JEE Adv</span>
              <span className="text-[#E07A2A] px-4">✦</span>
              <span>AIR 821 JEE Mains</span>
              <span className="text-[#E07A2A] px-4">✦</span>
              <span>Expert on Codeforces (1650)</span>
              <span className="text-[#E07A2A] px-4">✦</span>
              <span>Knight on LeetCode (1927)</span>
              <span className="text-[#E07A2A] px-4">✦</span>
              <span>8.79 CGPA IIT Indore</span>
              <span className="text-[#E07A2A] px-4">✦</span>
              <span>Placement Co-ordinator</span>
              <span className="text-[#E07A2A] px-4">✦</span>
              <span>Secretary Debating Society</span>
              {/* <span className="text-[#E07A2A] px-4">✦</span>
              <span>Jr. Senator CSE</span>
              <span className="text-[#E07A2A] px-4">✦</span>
              <span>Bronze IITI SOC (AI/ML)</span>
              <span className="text-[#E07A2A] px-4">✦</span>
              <span>800+ DSA Questions Solved</span> */}
              <span className="text-[#E07A2A] px-4">✦</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Marquee;
