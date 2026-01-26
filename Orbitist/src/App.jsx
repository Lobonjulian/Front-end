import Header from './components/layouts/Header/Header';
import Footer from '@components/layouts/Footer/Footer';
import Hero from '@components/sections/Hero/Hero';
import Missions from '@components/sections/Missions/Missions';
import Container from './components/layouts/Container';
import About from './components/sections/About/About';
import Contact from './components/sections/Contact/Contact';
import { useEffect, useState } from 'react';

function App() {
  const [theme, setTheme] = useState('dark');

  function toggleTheme() {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  }

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className={theme}>
      <Header />
      <Container>
        <Hero
          title=" La agencia para lo que orbita después"
          onToggleTheme={toggleTheme}
          theme={theme}
        />
        <About />
        <Missions />
        <Contact />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
