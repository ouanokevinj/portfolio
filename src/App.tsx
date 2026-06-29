import { useState, useCallback } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import LoadingScreen from './components/LoadingScreen';
import Sidebar from './components/Sidebar';
import AboutMe from './components/about';
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

      <div className="layout">
        <Sidebar />
        <main className="main-content">
          <AboutMe />
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
