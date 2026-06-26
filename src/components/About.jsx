import { Code, BookOpen, Trophy, Medal, Star, Award, Badge } from 'lucide-react';
const About = () => {
  return (
    <section id="about" className="py-24 border-t border-borderGray dark:border-[#333333] transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row gap-12 md:gap-24">

          {/* Left Column: Title */}
          <div className="w-48 flex-shrink-0">
            <h2 className="text-sm font-display font-semibold tracking-widest uppercase text-[#111111] dark:text-[#F9F5E8] transition-colors duration-500 sticky top-24">
              ABOUT ↳
            </h2>
          </div>

          {/* Right Column: Content */}
          <div className="flex-1 space-y-12">

            <div className="max-w-2xl">
              <p className="text-xl text-[#111111] dark:text-[#F9F5E8] font-light leading-relaxed mb-6 transition-colors duration-500">
                I am a passionate learner currently pursuing my B.Tech in CSE at <span className="font-medium">IIT Indore</span>.
                I specialize in backend development and AI/ML data pipelines.
              </p>
              <p className="text-xl text-[#6B7280] dark:text-gray-400 font-light leading-relaxed transition-colors duration-500">
                With a deep interest in Competitive Programming, I continuously push myself
                to solve complex algorithmic challenges. When I'm not coding, you can find me debating or leading technical initiatives on campus.
              </p>
            </div>

            {/* Achievements & Stats */}
            <div>
              <h3 className="text-2xl font-display font-semibold text-charcoal dark:text-white mb-6 transition-colors duration-500">Competitive Programming & Academics</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                <div className="group relative p-6 bg-white dark:bg-[#1A1A1A] border border-borderGray dark:border-[#333333] hover:border-orange-500/50 dark:hover:border-orange-500/50 rounded-2xl transition-all duration-500 hover:-translate-y-1 hover:shadow-lg overflow-hidden z-0">
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-orange-100/50 dark:to-orange-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity duration-500">
                    <Trophy className="w-16 h-16 text-mutedGray group-hover:text-orange-500 transition-colors duration-500" />
                  </div>
                  <div className="text-3xl font-display font-bold text-charcoal dark:text-[#F9F5E8] transition-colors duration-500 mb-1 group-hover:text-orange-500 relative z-10">Knight</div>
                  <div className="text-sm text-mutedGray dark:text-gray-400 transition-colors duration-500 relative z-10">LeetCode (Max 1927)</div>
                </div>

                <div className="group relative p-6 bg-white dark:bg-[#1A1A1A] border border-borderGray dark:border-[#333333] hover:border-blue-500/50 dark:hover:border-blue-500/50 rounded-2xl transition-all duration-500 hover:-translate-y-1 hover:shadow-lg overflow-hidden z-0">
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-blue-100/50 dark:to-blue-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity duration-500">
                    <Code className="w-16 h-16 text-mutedGray group-hover:text-blue-500 transition-colors duration-500" />
                  </div>
                  <div className="text-3xl font-display font-bold text-charcoal dark:text-[#F9F5E8] transition-colors duration-500 mb-1 group-hover:text-blue-500 relative z-10">Expert</div>
                  <div className="text-sm text-mutedGray dark:text-gray-400 transition-colors duration-500 relative z-10">Codeforces (Max 1650)</div>
                </div>

                <div className="group relative p-6 bg-white dark:bg-[#1A1A1A] border border-borderGray dark:border-[#333333] hover:border-purple-500/50 dark:hover:border-purple-500/50 rounded-2xl transition-all duration-500 hover:-translate-y-1 hover:shadow-lg overflow-hidden z-0">
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-purple-100/50 dark:to-purple-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity duration-500">
                    <BookOpen className="w-16 h-16 text-mutedGray group-hover:text-purple-500 transition-colors duration-500" />
                  </div>
                  <div className="text-3xl font-display font-bold text-charcoal dark:text-[#F9F5E8] transition-colors duration-500 mb-1 group-hover:text-purple-500 relative z-10">8.79 CGPA</div>
                  <div className="text-sm text-mutedGray dark:text-gray-400 transition-colors duration-500 relative z-10">IIT Indore</div>
                </div>

                <div className="group relative p-6 bg-white dark:bg-[#1A1A1A] border border-borderGray dark:border-[#333333] hover:border-red-500/50 dark:hover:border-red-500/50 rounded-2xl transition-all duration-500 hover:-translate-y-1 hover:shadow-lg overflow-hidden z-0">
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-red-100/50 dark:to-red-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity duration-500">
                    <Award className="w-16 h-16 text-mutedGray group-hover:text-red-500 transition-colors duration-500" />
                  </div>
                  <div className="text-3xl font-display font-bold text-charcoal dark:text-[#F9F5E8] transition-colors duration-500 mb-1 group-hover:text-red-500 relative z-10">AIR 961</div>
                  <div className="text-sm text-mutedGray dark:text-gray-400 transition-colors duration-500 relative z-10">JEE Advanced (Top 0.5%)</div>
                </div>

                <div className="group relative p-6 bg-white dark:bg-[#1A1A1A] border border-borderGray dark:border-[#333333] hover:border-amber-500/50 dark:hover:border-amber-500/50 rounded-2xl transition-all duration-500 hover:-translate-y-1 hover:shadow-lg overflow-hidden z-0">
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-amber-100/50 dark:to-amber-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity duration-500">
                    <Star className="w-16 h-16 text-mutedGray group-hover:text-amber-500 transition-colors duration-500" />
                  </div>
                  <div className="text-3xl font-display font-bold text-charcoal dark:text-[#F9F5E8] transition-colors duration-500 mb-1 group-hover:text-amber-500 relative z-10">Top 1%</div>
                  <div className="text-sm text-mutedGray dark:text-gray-400 transition-colors duration-500 relative z-10">State 5th Rank, NSEC</div>
                </div>

                <div className="group relative p-6 bg-white dark:bg-[#1A1A1A] border border-borderGray dark:border-[#333333] hover:border-teal-500/50 dark:hover:border-teal-500/50 rounded-2xl transition-all duration-500 hover:-translate-y-1 hover:shadow-lg overflow-hidden z-0">
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-teal-100/50 dark:to-teal-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity duration-500">
                    <Medal className="w-16 h-16 text-mutedGray group-hover:text-teal-500 transition-colors duration-500" />
                  </div>
                  <div className="text-3xl font-display font-bold text-charcoal dark:text-[#F9F5E8] transition-colors duration-500 mb-1 group-hover:text-teal-500 relative z-10">Bronze Medalist</div>
                  <div className="text-sm text-mutedGray dark:text-gray-400 transition-colors duration-500 relative z-10">IITI Summer of Code</div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
