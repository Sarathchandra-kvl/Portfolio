import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Footer from './components/Footer';
import Marquee from './components/Marquee';
import Cursor from './components/Cursor';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <div className="min-h-screen bg-[#F9F5E8] dark:bg-[#111111] text-[#111111] dark:text-[#F9F5E8] font-sans selection:bg-[#111111] dark:selection:bg-[#F9F5E8] selection:text-[#F9F5E8] dark:selection:text-[#111111] pb-20 md:cursor-none transition-colors duration-500">
      <Cursor />
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <main>
        <Hero />
        <About />
        <Projects />
      </main>
      <Footer />
      <Marquee />
    </div>
  );
}

export default App;
