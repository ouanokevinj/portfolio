import { useState, useCallback } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import LoadingScreen from './components/LoadingScreen';
import Sidebar from './components/Sidebar';
import Hero from './components/hero';
import AboutMe from './components/about';
import Skills from './components/skills';
import ChatWidget from './components/ChatWidget';
import Projects from './components/project';
import Contact from './components/contact';
import Footer from './components/Footer';
import './index.css';

function App() {
  const [loading, setLoading] = useState(true);
  const handleLoadComplete = useCallback(() => setLoading(false), []);

  return (
    <ThemeProvider>
      {loading && <LoadingScreen onComplete={handleLoadComplete} />}

      <Hero />
      <div className="layout">
        <Sidebar />
        <main className="main-content">
          <AboutMe />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </main>
      </div>
      <ChatWidget />
    </ThemeProvider>
  );
}

export default App;
