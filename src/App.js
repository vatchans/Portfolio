import './App.css';
import Navbar from './Navbar';
import { useState, useEffect } from 'react';
import Loader from './components/Loader';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';
import AchievementsSection from './components/AchievementsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ParallaxWrapper from './components/ParallaxWrapper';
import SmoothCursor from './components/SmoothCursor';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ParallaxWrapper>
      {isLoading && <Loader />}
      <SmoothCursor />
      <div className={isLoading ? 'app-root app-root--hidden' : 'app-root'}>
        <Navbar />
        <main id="main-content">
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ExperienceSection />
          <AchievementsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </ParallaxWrapper>
  );
}

export default App;
