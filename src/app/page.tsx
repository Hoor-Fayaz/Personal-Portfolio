import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import SelectedWork from '@/components/SelectedWork';
import TechnicalStats from '@/components/TechnicalStats';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import CurrentResearch from '@/components/CurrentResearch';
import Education from '@/components/Education';
import Achievements from '@/components/Achievements';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#070707] text-white app-shell">
      <Navigation />
      <Hero />
      <About />
      <SelectedWork />
      <TechnicalStats />
      <Experience />
      <Skills />
      <CurrentResearch />
      <Education />
      <Achievements />
      <Contact />
      <Footer />
    </div>
  );
}
