import { useState, useCallback } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/navbar';
import Hero from './components/hero';
import AboutMe from './components/about';
import Skill from './components/skills';
import Projects from './components/project';
import Contact from './components/contact';
import './index.css';

function App() {
  const [loading, setLoading] = useState(true);
  const handleLoadComplete = useCallback(() => setLoading(false), []);

  return (
    <ThemeProvider>
      {loading && <LoadingScreen onComplete={handleLoadComplete} />}
      <Navbar />
      <Hero />
      <AboutMe />
      <Skill />
      <Projects />
      <Contact />
    </ThemeProvider>
  );
}

export default App;
