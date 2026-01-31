import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Footer from '@components/layouts/Footer/Footer';
import Header from '@components/layouts/Header/Header';
import Marte from '@pages/planets/Marte';
import Jupiter from '@pages/planets/Jupiter';
import Saturno from '@pages/planets/Saturno';
import Home from '@pages/Home';

function App() {
  const [theme, setTheme] = useState('dark');

  function toggleTheme() {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  }

  useEffect(() => {
    document.body.dataset.theme = theme;
  }, [theme]);

  return (
    <div data-theme={theme}>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<Home theme={theme} toggleTheme={toggleTheme} />}
        />
        <Route path="/marte" element={<Marte />} />
        <Route path="/jupiter" element={<Jupiter />} />
        <Route path="/saturno" element={<Saturno />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
