import { Mail, FileText } from 'lucide-react';
import { useState } from 'react';

const Footer = () => {
  const email = "sarathchandrakvl07@gmail.com";

  return (
    <>
      <section id="contact" className="py-24 border-t border-borderGray dark:border-[#333333] transition-colors duration-500">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row gap-12 md:gap-24">
            <div className="w-48 flex-shrink-0">
              <h2 className="text-sm font-display font-semibold tracking-widest uppercase text-charcoal dark:text-[#F9F5E8] transition-colors duration-500">
                CONTACT ↳
              </h2>
            </div>
            <div className="flex-1">
              <p 
                className="text-2xl text-charcoal dark:text-[#F9F5E8] mb-8 transition-colors duration-500 leading-snug"
                style={{ fontFamily: '"Trebuchet MS", sans-serif' }}
              >
                Feel free to reach out if you're looking for a developer, have a question, or simply want to connect.
              </p>
              <div className="flex flex-wrap gap-8 sm:gap-12 pt-6">
                <a 
                  href={`mailto:${email}`}
                  className="relative overflow-hidden flex flex-col items-center justify-center gap-3 w-36 h-28 sm:w-40 sm:h-32 bg-white dark:bg-[#1A1A1A] border border-borderGray dark:border-[#333333] rounded-2xl hover:border-orange-500/70 dark:hover:border-orange-500/70 transition-colors duration-700 group"
                >
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-orange-500/80 rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-[15] transition-all duration-700 ease-out z-0"></div>
                  <Mail className="w-8 h-8 text-mutedGray group-hover:text-white transition-colors duration-700 relative z-10" />
                  <span className="text-sm font-medium text-charcoal dark:text-[#F9F5E8] group-hover:text-white dark:group-hover:text-white transition-colors duration-700 relative z-10">
                    Email
                  </span>
                </a>
                
                <a 
                  href="https://github.com/Sarathchandra-kvl"
                  target="_blank"
                  rel="noreferrer"
                  className="relative overflow-hidden flex flex-col items-center justify-center gap-3 w-36 h-28 sm:w-40 sm:h-32 bg-white dark:bg-[#1A1A1A] border border-borderGray dark:border-[#333333] rounded-2xl hover:border-purple-500/70 dark:hover:border-purple-500/70 transition-colors duration-700 group"
                >
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-purple-500/80 rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-[15] transition-all duration-700 ease-out z-0"></div>
                  <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-mutedGray group-hover:text-white transition-colors duration-700 relative z-10">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                    <path d="M9 18c-4.51 2-5-2-7-2"></path>
                  </svg>
                  <span className="text-sm font-medium text-charcoal dark:text-[#F9F5E8] group-hover:text-white dark:group-hover:text-white transition-colors duration-700 relative z-10">
                    GitHub
                  </span>
                </a>

                <a 
                  href="/Portfolio/resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="relative overflow-hidden flex flex-col items-center justify-center gap-3 w-36 h-28 sm:w-40 sm:h-32 bg-white dark:bg-[#1A1A1A] border border-borderGray dark:border-[#333333] rounded-2xl hover:border-blue-500/70 dark:hover:border-blue-500/70 transition-colors duration-700 group"
                >
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-blue-500/80 rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-[15] transition-all duration-700 ease-out z-0"></div>
                  <FileText className="w-8 h-8 text-mutedGray group-hover:text-white transition-colors duration-700 relative z-10" />
                  <span className="text-sm font-medium text-charcoal dark:text-[#F9F5E8] group-hover:text-white dark:group-hover:text-white transition-colors duration-700 relative z-10">
                    View CV
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="w-full py-12 border-t border-borderGray dark:border-[#333333] transition-colors duration-500 bg-white dark:bg-[#111111]">
        <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="text-lg font-display font-semibold tracking-tight text-charcoal dark:text-[#F9F5E8] transition-colors duration-500">
            KVL Sarath Chandra
          </div>
          
          <div className="flex gap-16">
            <div className="flex flex-col gap-3">
              <span className="text-xs font-bold tracking-widest text-mutedGray uppercase mb-1">Navigate</span>
              <a href="#work" className="text-sm text-charcoal dark:text-[#F9F5E8] hover:text-sageGreen transition-colors">Work</a>
              <a href="#about" className="text-sm text-charcoal dark:text-[#F9F5E8] hover:text-sageGreen transition-colors">About</a>
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-xs font-bold tracking-widest text-mutedGray uppercase mb-1">Connect</span>
              <a href="mailto:sarathchandrakvl07@gmail.com" className="text-sm text-charcoal dark:text-[#F9F5E8] hover:text-sageGreen transition-colors">Email</a>
              <a href="https://github.com/Sarathchandra-kvl" target="_blank" rel="noreferrer" className="text-sm text-charcoal dark:text-[#F9F5E8] hover:text-sageGreen transition-colors">GitHub</a>
              <a href="https://leetcode.com/SarathChandra_kvl" target="_blank" rel="noreferrer" className="text-sm text-charcoal dark:text-[#F9F5E8] hover:text-sageGreen transition-colors">LeetCode</a>
              <a href="https://codeforces.com/profile/sarathchandrakvl07" target="_blank" rel="noreferrer" className="text-sm text-charcoal dark:text-[#F9F5E8] hover:text-sageGreen transition-colors">Codeforces</a>
              <a href="https://www.codechef.com/users/sarathkvl" target="_blank" rel="noreferrer" className="text-sm text-charcoal dark:text-[#F9F5E8] hover:text-sageGreen transition-colors">CodeChef</a>
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-6 md:px-12 mt-12 text-xs text-mutedGray">
          © {new Date().getFullYear()} KVL Sarath Chandra. Built with React.
        </div>
      </footer>
    </>
  );
};

export default Footer;
